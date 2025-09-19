export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { sendConfirmationEmail } from "@/utils/sendEmail";

// MongoDB connection caching
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error("MONGODB_URI environment variable missing");

declare global {
  var mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

let cached = global.mongooseCache;
if (!cached) cached = global.mongooseCache = { conn: null, promise: null };

async function connectToDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI!, {
      dbName: "ISF-summit-2025",
      serverSelectionTimeoutMS: 5000,
      bufferCommands: false,
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// Valid registration types
const validRegistrationTypes = [
  "Junicorn Summit (29th May)",
  "AI Summit (30th May)",
  "Junicorn + AI Summit (29th & 30th May)",
];

// Clear existing model if it exists
if (mongoose.models.Registration) {
  delete (mongoose as any).connection.models.Registration;
}

// Schema and Model
const registrationSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    lowercase: true,
    trim: true,
  },
  mobile: { type: String, required: true, trim: true },
  organization: { type: String, required: true, trim: true },
  designation: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  country: { type: String, required: true, trim: true },
  registrationType: {
    type: String,
    required: true,
    enum: validRegistrationTypes,
  },
  arrivalFrom: { type: String, trim: true },
  otherArrivalLocation: {
    type: String,
    trim: true,
    required: function (this: any) {
      return this.arrivalFrom === "other";
    },
  },
  arrivalDate: { type: Date },
  departureDate: {
    type: Date,
    validate: {
      validator: function (this: any, value: Date) {
        return !this.arrivalDate || !value || value >= this.arrivalDate;
      },
      message: "Departure date must be after arrival date",
    },
  },
  specialRequests: { type: String, default: "", trim: true },
  emailSent: { type: Boolean, default: false },
}, {
  timestamps: true,
  optimisticConcurrency: true,
});

registrationSchema.index({ email: 1 }, { unique: true });

const Registration = mongoose.model("Registration", registrationSchema);

// POST handler
export async function POST(req: Request) {
  try {
    await connectToDB();
    const formData = await req.json();

    // Validation checks
    const requiredFields = [
      "fullName", "email", "mobile", "organization",
      "designation", "city", "country", "registrationType"
    ];

    const missingFields = requiredFields
      .filter(field => !formData[field]?.trim?.())
      .map(field => field.replace(/([A-Z])/g, " $1").toLowerCase());

    if (missingFields.length > 0) {
      return NextResponse.json({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      }, { status: 400 });
    }

    if (!validRegistrationTypes.includes(formData.registrationType)) {
      return NextResponse.json({
        message: "Invalid registration type selected",
        details: `Received: ${formData.registrationType} | Valid options: ${validRegistrationTypes.join(", ")}`
      }, { status: 400 });
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check existing registration
    const existing = await Registration.findOne({ email: formData.email });
    if (existing) {
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 409 }
      );
    }

    // Date validation
    const arrivalDate = formData.arrivalDate ? new Date(formData.arrivalDate) : null;
    const departureDate = formData.departureDate ? new Date(formData.departureDate) : null;

    if (arrivalDate && isNaN(arrivalDate.getTime())) {
      return NextResponse.json({ message: "Invalid arrival date" }, { status: 400 });
    }

    if (departureDate && isNaN(departureDate.getTime())) {
      return NextResponse.json({ message: "Invalid departure date" }, { status: 400 });
    }

    // Create registration
    const registration = new Registration({
      ...formData,
      arrivalDate,
      departureDate,
    });

    await registration.save();

    // Send email
    await sendConfirmationEmail(formData.email, formData.fullName);
    
    return NextResponse.json(
      { message: "Registration successful", data: registration },
      { status: 201 }
    );

  } catch (err: any) {
    console.error("Registration error:", err);
    return NextResponse.json(
      { 
        message: "Registration failed",
        error: err.message,
        ...(err.errors && { validationErrors: err.errors })
      },
      { status: 500 }
    );
  }
}