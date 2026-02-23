import type { Metadata } from 'next';
import { Source_Sans_3, Source_Serif_4 } from 'next/font/google';
import { Header } from '@/components/layout';
import { Footer } from '@/components/layout';
import './globals.css';

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'jodacare - Sikker kommunikasjon rundt sårbare personer',
    template: '%s | jodacare',
  },
  description:
    'jodacare er en sikker digital plattform som skaper trygghet og verdighet gjennom kommunikasjon mellom pårørende, helsepersonell og den sårbare personen selv.',
  keywords: [
    'demens',
    'pårørende',
    'hjemmetjeneste',
    'kommunikasjon',
    'helse',
    'omsorg',
    'sikker plattform',
    'ID-porten',
  ],
  authors: [{ name: 'Jodapro AS' }],
  creator: 'Jodapro AS',
  publisher: 'Jodapro AS',
  metadataBase: new URL('https://www.jodacare.no'),
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: 'https://www.jodacare.no',
    siteName: 'jodacare',
    title: 'jodacare - Sikker kommunikasjon rundt sårbare personer',
    description:
      'En sikker digital plattform som skaper trygghet og verdighet gjennom kommunikasjon mellom pårørende, helsepersonell og den sårbare personen selv.',
    images: [
      {
        url: '/logo/jodacare-logo.png',
        width: 1200,
        height: 630,
        alt: 'jodacare - Trygghet og verdighet i hverdagen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'jodacare - Sikker kommunikasjon rundt sårbare personer',
    description:
      'En sikker digital plattform som skaper trygghet og verdighet gjennom kommunikasjon.',
    images: ['/logo/jodacare-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={`${sourceSans.variable} ${sourceSerif.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <a href="#main-content" className="skip-to-content">
          Hopp til hovedinnhold
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
