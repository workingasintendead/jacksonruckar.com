import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const GMAIL_USER = process.env.GMAIL_USER;
    const GMAIL_PASS = process.env.GMAIL_PASS;

    if (!GMAIL_USER || !GMAIL_PASS) {
      console.error('Missing Gmail credentials');
      return new Response(
        JSON.stringify({
          message: 'An error occurred while sending the message.',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { name, email, phone, message, tentativeDate } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: 'Missing required fields.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const escape = (str: string) =>
      str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    const emailContent = `
      <h3>Contact Form Submission</h3>
      <p><strong>Name:</strong> ${escape(name)}</p>
      <p><strong>Email:</strong> ${escape(email)}</p>
      <p><strong>Phone:</strong> ${escape(phone || 'N/A')}</p>
      <p><strong>Tentative Date:</strong> ${escape(tentativeDate || 'N/A')}</p>
      <p><strong>Message:</strong><br/>${escape(message).replace(/\n/g, '<br/>')}</p>
    `;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${GMAIL_USER}>`,
      to: 'jax@jacksonruckar.com',
      replyTo: email,
      subject: 'New Contact Submission',
      html: emailContent,
    });

    return new Response(
      JSON.stringify({ message: 'Success! Your message has been sent.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error occurred while sending the email:', error);
    return new Response(
      JSON.stringify({ message: 'Failed to send the message.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
