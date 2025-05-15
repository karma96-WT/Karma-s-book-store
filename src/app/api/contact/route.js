// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { fname, lname, email, phone, message } = await req.json();

  if (!fname || !lname || !email || !phone || !message) {
    return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,     // Your Gmail address
        pass: process.env.MAIL_PASS,     // App password
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: 'your-admin-email@example.com',
      subject: 'New Contact Form Submission',
      text: `
        Name: ${fname} ${lname}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
