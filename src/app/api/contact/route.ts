import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { sendContactEmail } from "@/lib/resend";
import { contactSchema } from "@/lib/validators/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = contactSchema.parse(body);

    await sendContactEmail(payload);

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: error.issues[0]?.message ?? "Invalid input data." },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { message: "Unable to send message right now. Please try again later." },
      { status: 500 },
    );
  }
}
