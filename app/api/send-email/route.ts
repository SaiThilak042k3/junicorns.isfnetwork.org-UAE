import { NextResponse } from "next/server";
import { sendConfirmationEmail } from "@/utils/sendEmail";
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

    try {
      // Send confirmation email
      await sendConfirmationEmail(newRegistration.email, newRegistration.fullName);

      // Update registration record to indicate email is sent
      await Registration.findByIdAndUpdate(newRegistration._id, { emailSent: true });

      return NextResponse.json(
        { message: "Registration successful", data: newRegistration },
        { status: 201 }
      );
    } catch (emailError: any) {
      console.error("Email failed:", emailError);
      return NextResponse.json(
        {
          message:
            "Registration successful but confirmation email failed. Please contact hello@isfnetwork.org",
          data: newRegistration,
        },
        { status: 201 }
      );
    }
  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Registration failed", error: error.message },
      { status: 500 }
    );
  }
}