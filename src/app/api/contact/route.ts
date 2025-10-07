import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    const file = formData.get('file') as File | null;

    const html = `
      <div style="font-family: sans-serif; padding: 16px; line-height: 1.6;">
        <h2>📬 New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Job Title:</strong> ${jobTitle || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      </div>
    `;

    // Prepare attachment
    let attachments = [];

    if (file && file.size > 0) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    // Send email via Resend
    await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: 'saud.saleem93@gmail.com',
      subject: subject || 'New Contact Form Message',
      html,
      ...(attachments.length > 0 && { attachments }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}