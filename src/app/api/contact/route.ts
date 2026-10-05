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

// Et menneske bruker mer enn noen få sekunder på å fylle ut skjemaet.
const MIN_FILL_MS = 3000;
const MAX_LINKS = 2;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const str = (v: unknown, max: number) =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';

// Roboter får samme svar som ekte innsendinger, så de ikke lærer hva som stoppet dem.
function silentDrop(reason: string) {
  console.warn(`Kontaktskjema: forkastet spam (${reason})`);
  return NextResponse.json({ success: true });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = str(body.name, 200);
    const email = str(body.email, 200);
    const phone = str(body.phone, 50);
    const type = typeof body.type === 'string' && body.type in typeLabels ? body.type : 'general';
    const message = str(body.message, 5000);

    if (str(body.website, 200)) return silentDrop('honeypot');
    if (typeof body.elapsedMs !== 'number' || body.elapsedMs < MIN_FILL_MS) {
      return silentDrop('for rask innsending');
    }
    if ((message.match(/https?:\/\/|www\./gi) ?? []).length > MAX_LINKS) {
      return silentDrop('for mange lenker');
    }
    if (/https?:\/\/|www\./i.test(name)) return silentDrop('lenke i navn');

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Navn, e-post og melding er påkrevd.' },
        { status: 400 }
      );
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: 'Ugyldig e-postadresse.' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'jodacare Kontaktskjema <noreply@jodacare.com>',
      to: 'kristil@jodacare.com',
      replyTo: email,
      subject: `Ny henvendelse: ${typeLabels[type]}`,
      text: [
        `Navn: ${name}`,
        `E-post: ${email}`,
        phone ? `Telefon: ${phone}` : null,
        `Type: ${typeLabels[type]}`,
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
