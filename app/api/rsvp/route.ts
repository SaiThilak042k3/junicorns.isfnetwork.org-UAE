export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import mongoose from "mongoose";

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

// Valid attendance options
const validAttendanceOptions = [
  "Junicorn Summit (29th May, 2025)",
  "AI Summit (30th May, 2025)",
  "Junicorn + AI Summit (29th & 30th, 2025)",
];

// Clear existing model if it exists
if (mongoose.models.RSVP) {
  delete (mongoose as any).connection.models.RSVP;
}

// Schema and Model
const rsvpSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
      lowercase: true,
      trim: true,
    },
    attendance: {
      type: String,
      required: true,
      enum: validAttendanceOptions,
    },
  },
  {
    timestamps: true,
    optimisticConcurrency: true,
  }
);

rsvpSchema.index({ email: 1 }, { unique: true });

const RSVP = mongoose.model("RSVP", rsvpSchema);

// POST handler
export async function POST(req: Request) {
  try {
    await connectToDB();
    const formData = await req.json();
    const { fullName, email, attendance } = formData;

    // Validation checks
    const requiredFields = ["fullName", "email", "attendance"];
    const missingFields = requiredFields
      .filter((field) => !formData[field]?.trim?.())
      .map((field) => field.replace(/([A-Z])/g, " $1").toLowerCase());

    if (missingFields.length > 0) {
      return NextResponse.json(
        { message: `Missing required fields: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    if (!validAttendanceOptions.includes(attendance)) {
      return NextResponse.json(
        {
          message: "Invalid attendance option selected",
          details: `Received: ${attendance} | Valid options: ${validAttendanceOptions.join(", ")}`,
        },
        { status: 400 }
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ message: "Invalid email format" }, { status: 400 });
    }

    // Check existing RSVP
    const existing = await RSVP.findOne({ email });
    if (existing) {
      return NextResponse.json({ message: "Email already registered for RSVP" }, { status: 409 });
    }

    // Create RSVP
    const rsvp = new RSVP({
      fullName,
      email,
      attendance,
    });

    await rsvp.save();

    return NextResponse.json(
      { message: "RSVP submitted successfully", data: rsvp },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("RSVP error:", err);
    return NextResponse.json(
      {
        message: "RSVP submission failed",
        error: err.message,
        ...(err.errors && { validationErrors: err.errors }),
      },
      { status: 500 }
    );
  }
}