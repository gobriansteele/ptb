import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, phone, zipCode, service, message } = await request.json();

  if (!name || !email || !phone || !zipCode || !service || !message) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    // Send notification email to Phil with quote request details
    await resend.emails.send({
      from: `Phil The Builder And Friends <hello@${process.env.RESEND_SENDING_DOMAIN}>`,
      to: "phil@philthebuilderandfriends.com",
      subject: `🔨 NEW QUOTE REQUEST: ${name}`,
      replyTo: email,
      text: `NEW QUOTE REQUEST\n\n${"=".repeat(50)}\n\nCustomer: ${name}\nPhone: ${phone}\nEmail: ${email}\nZIP Code: ${zipCode}\nService Type: ${service}\n\n${"=".repeat(50)}\n\nPROJECT DESCRIPTION:\n${message}\n\n${"=".repeat(50)}\n\nREPLY TO: ${email}\nCALL: ${phone}\n\nLog into your email to respond with estimate details.`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
