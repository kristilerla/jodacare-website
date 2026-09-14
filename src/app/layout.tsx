import type { Metadata } from 'next';
import { Source_Sans_3, Source_Serif_4 } from 'next/font/google';
import { Header, Footer, AnnouncementBanner } from '@/components/layout';
import { getLocaleFromHeaders } from '@/lib/i18n/get-locale';
import { getSite } from '@/i18n/site';
import { jsonLd, nettstedet, organisasjon } from '@/lib/seo';
import { SamtykkeBanner } from '@/components/consent/SamtykkeBanner';
import { Statistikk } from '@/components/consent/Statistikk';
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
  authors: [{ name: 'JodaCare AS' }],
  creator: 'JodaCare AS',
  publisher: 'JodaCare AS',
  metadataBase: new URL('https://www.jodacare.no'),
  icons: {
    // SVG først: moderne nettlesere velger den og får et skarpt ikon i alle
    // størrelser. PNG-ene er fallback, og src/app/favicon.ico dekker
    // forespørsler som går rett på /favicon.ico.
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon-180x180.png',
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
        url: '/og-image.png',
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
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocaleFromHeaders();
  const lang = locale === 'en' ? 'en' : 'nb';
  const site = getSite(locale);

  return (
    <html lang={lang} className={`${sourceSans.variable} ${sourceSerif.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        {/* Strukturerte data: hvem som står bak nettstedet. Leses av
            søkemotorer og språkmodeller, og gjentas ikke per side. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(organisasjon, nettstedet) }}
        />
        <a href="#main-content" className="skip-to-content">
          {site.skipToContent}
        </a>
        <Header />
        <AnnouncementBanner />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        {/* Spør om lov før statistikken lastes. Rekkefølgen er ikke
            tilfeldig: banneret ligger sist i dokumentet, så det ikke kommer
            foran innholdet for den som bruker tastatur eller skjermleser. */}
        <SamtykkeBanner />
        <Statistikk />
      </body>
    </html>
  );
}
