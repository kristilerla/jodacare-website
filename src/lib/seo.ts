/**
 * Felles SEO-oppsett for jodacare.no.
 *
 * Tre ting samles her: kanoniske adresser med språkvarianter, listen over
 * ruter som skal i sitemap, og de strukturerte dataene (JSON-LD).
 *
 * Alle fakta i JSON-LD-en står også synlig på nettsiden. Ikke legg til
 * påstander her som ikke finnes der — strukturerte data er det Google og
 * språkmodellene leser bokstavelig.
 */

export const SITE_URL = 'https://www.jodacare.no';

/**
 * Ruter som finnes på begge språk, som norsk sti → engelsk sti.
 *
 * Utenfor listen med vilje:
 * - `/rettigheter` er skjult (noindex, ingen engelsk versjon)
 * - `/en` er bare en videresending til `/en/home`
 * - `/brief` og `/en/brief` er samme dokument på samme språk, ikke en
 *   oversettelse. Den håndteres under, med kanonisk adresse mot `/brief`.
 */
export const RUTEPAR: Record<string, string> = {
  '/': '/en/home',
  '/familie': '/en/familie',
  '/kommune': '/en/kommune',
  '/omsorgsbolig': '/en/omsorgsbolig',
  '/bpa': '/en/bpa',
  '/avlastning': '/en/avlastning',
  '/barnevern': '/en/barnevern',
  '/jodavisit': '/en/jodavisit',
  '/implementering': '/en/implementering',
  '/sikkerhet': '/en/sikkerhet',
  '/teknologi': '/en/teknologi',
  '/om': '/en/om',
  '/priser': '/en/priser',
  '/kontakt': '/en/kontakt',
  '/jodacare/personvernerklaering': '/en/jodacare/personvernerklaering',
  '/jodacare/bruksvilkar': '/en/jodacare/bruksvilkar',
};

/**
 * Kanonisk adresse + hreflang for én side.
 *
 * `x-default` peker på den norske versjonen: nettstedet er norsk først, og
 * det er den varianten en søkemotor skal falle tilbake på når den ikke vet
 * hvilket språk brukeren vil ha.
 */
export function sprakvarianter(noSti: string, sprak: 'no' | 'en') {
  const enSti = RUTEPAR[noSti];
  if (!enSti) return { canonical: noSti };
  return {
    canonical: sprak === 'no' ? noSti : enSti,
    languages: {
      'nb-NO': noSti,
      en: enSti,
      'x-default': noSti,
    },
  };
}

/** Organisasjonen bak nettstedet. Alle feltene står synlig på jodacare.no. */
export const organisasjon = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organisasjon`,
  name: 'JodaCare AS',
  alternateName: 'JodaCare',
  url: SITE_URL,
  logo: `${SITE_URL}/brand/jodacare-horisontal-teal.svg`,
  image: `${SITE_URL}/og-image.png`,
  description:
    'JodaCare er en sikker digital plattform for kommunikasjon mellom pårørende, ' +
    'helsepersonell og den som mottar omsorg. Brukt av norske kommuner siden 2016.',
  taxID: '937323565',
  email: 'post@jodacare.com',
  telephone: '+47 906 06 433',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jørgens vei 9',
    postalCode: '1386',
    addressLocality: 'Asker',
    addressCountry: 'NO',
  },
  founder: {
    '@type': 'Person',
    name: 'Kristil Erla Håland',
    jobTitle: 'Grunnlegger og daglig leder',
  },
  award: 'Europol Innovation Award 2024',
  areaServed: { '@type': 'Country', name: 'Norge' },
  knowsLanguage: ['nb-NO', 'en'],
};

/** Selve nettstedet, knyttet til organisasjonen. */
export const nettstedet = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#nettsted`,
  url: SITE_URL,
  name: 'JodaCare',
  inLanguage: 'nb-NO',
  publisher: { '@id': `${SITE_URL}/#organisasjon` },
};

/**
 * Produktet. Ingen pris her: JodaCare har to prismodeller (familie og
 * kommune), og en enkelt `offers`-blokk ville framstilt den ene som
 * gjeldende for alt. Prisene står på /priser og /familie.
 */
export const plattformen = {
  '@type': 'SoftwareApplication',
  '@id': `${SITE_URL}/#plattform`,
  name: 'JodaCare',
  applicationCategory: 'HealthApplication',
  applicationSubCategory: 'Samhandling i helse- og omsorgstjenesten',
  operatingSystem: 'Web, iOS, Android',
  url: SITE_URL,
  inLanguage: 'nb-NO',
  description:
    'Delt plattform der pårørende, helsepersonell og tjenestemottakeren selv ' +
    'følger den samme hverdagen: meldinger, bilder, kalender og oppgaver, med ' +
    'innlogging via ID-porten og data lagret i Europa.',
  publisher: { '@id': `${SITE_URL}/#organisasjon` },
  featureList: [
    'Daglig dialog mellom pårørende og helsepersonell',
    'Delt kalender og oppgaver rundt tjenestemottakeren',
    'Jodabook — tilpasset visning for personer med demens eller kognitive utfordringer (kommer 2027)',
    'Innlogging med ID-porten',
    'Data lagret i Europa, i tråd med GDPR',
  ],
};

/** Bygger én JSON-LD-graf av de delene en side skal oppgi. */
export function jsonLd(...deler: object[]) {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': deler });
}
