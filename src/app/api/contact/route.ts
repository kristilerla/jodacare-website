import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const typeLabels: Record<string, string> = {
  general: 'Generell henvendelse',
  kommune: 'Kommune / organisasjon',
  familie: 'Privat familie',
  demo: 'Ønsker demo',
  support: 'Support',
};

export async function POST(request: Request) {
  try {
    const { name, email, phone, type, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Navn, e-post og melding er påkrevd.' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'jodacare Kontaktskjema <noreply@jodacare.com>',
      to: 'post@jodacare.com',
      replyTo: email,
      subject: `Ny henvendelse: ${typeLabels[type] || type}`,
      text: [
        `Navn: ${name}`,
        `E-post: ${email}`,
        phone ? `Telefon: ${phone}` : null,
        `Type: ${typeLabels[type] || type}`,
        '',
        'Melding:',
        message,
      ]
        .filter(Boolean)
        .join('\n'),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: 'Kunne ikke sende melding. Vennligst prøv igjen senere.' },
      { status: 500 }
    );
  }
}
