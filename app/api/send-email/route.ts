import { NextResponse } from "next/server";
import mongoose from "mongoose";

// MongoDB Schema and Model
const registrationSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  emailSent: { type: Boolean, default: false },
  // Add other fields from your original schema
});

const Registration =
  mongoose.models.Registration ||
  mongoose.model("Registration", registrationSchema);

export async function POST(req: Request) {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "ISF-summit-2025",
    });

    // Get and validate data from the request
    const formData = await req.json();

    // Create new registration in the database
    const newRegistration = await Registration.create(formData);

    // 🔹 Skip email if MAILGUN_API_KEY is missing
    if (process.env.MAILGUN_API_KEY) {
      try {
        const { sendConfirmationEmail } = await import("@/utils/sendEmail");
        await sendConfirmationEmail(newRegistration.email, newRegistration.fullName);

        await Registration.findByIdAndUpdate(newRegistration._id, { emailSent: true });
      } catch (emailError: any) {
        console.error("Email failed:", emailError);
      }
    } else {
      console.warn("MAILGUN_API_KEY not set – skipping email");
    }

    return NextResponse.json(
      { message: "Registration successful", data: newRegistration },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Registration failed", error: error.message },
      { status: 500 }
    );
  }
}
