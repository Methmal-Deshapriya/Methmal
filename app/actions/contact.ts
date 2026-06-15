"use server";

import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(
  payload: ContactPayload,
): Promise<{ success: boolean; error?: string }> {
  const { name, email, message } = payload;

  if (!email.trim() || !message.trim()) {
    return { success: false, error: "Email and message are required." };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: "methmaldeshapriya2002@gmail.com",
      replyTo: email,
      subject: `Portfolio message${name ? ` from ${name}` : ""}`,
      text: `From: ${name || "Anonymous"}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:580px;margin:0 auto;padding:32px 24px">
          <p style="margin:0;color:#777586;font-size:11px;font-family:monospace;text-transform:uppercase;letter-spacing:3px">Portfolio contact</p>
          <h2 style="margin:12px 0 4px;color:#1b1b23;font-size:22px;font-weight:600">${name || "Anonymous"}</h2>
          <p style="margin:0;color:#5b5a67;font-size:13px">${email}</p>
          <hr style="border:none;border-top:1px solid #eee;margin:24px 0" />
          <p style="margin:0;color:#1b1b23;font-size:15px;line-height:1.75">${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error("[contact] send error:", err);
    return { success: false, error: "Failed to send. Please try again later." };
  }
}
