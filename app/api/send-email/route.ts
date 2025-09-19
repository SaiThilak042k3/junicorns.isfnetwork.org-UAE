import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Get form data from the request
    const formData = await req.json();

    // Just return success with the submitted data
    return NextResponse.json(
      { message: "Registration successful", data: formData },
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
