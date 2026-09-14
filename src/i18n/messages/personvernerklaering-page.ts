import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n/types';

export type LegalSection = { title: string; paragraphs: string[] };

type PersonvernerklaeringBundle = {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  srHeading: string;
  sections: LegalSection[];
};

const no: PersonvernerklaeringBundle = {
  metaTitle: 'Personvernerklæring',
  metaDescription:
    'Les hvordan JodaCare behandler personopplysninger, hvilke rettigheter du har, og hvordan vi ivaretar sikkerhet og GDPR.',
  ogTitle: 'Personvernerklæring for JodaCare',
  ogDescription:
    'Informasjon om behandling av personopplysninger, sikkerhet, lagring, rettigheter og kontakt hos JodaCare.',
  heroTitle: 'Personvernerklæring for JodaCare',
  heroSubtitle: 'Sist oppdatert: 14. september 2026',
  srHeading: 'Personvernerklæring',
  sections: [
    {
      title: '1. Behandlingsansvarlig',
      paragraphs: [
        'JodaCare AS (org.nr. 937 323 565) er behandlingsansvarlig for personopplysninger som behandles i forbindelse med bruk av jodacare.no og JodaCare-plattformen, med mindre annet er avtalt med kundens organisasjon.',
        'Kontakt: support@jodacare.no.',
      ],
    },
    {
      title: '2. Hvilke opplysninger vi behandler',
      paragraphs: [
        'Vi kan behandle kontaktopplysninger (for eksempel navn, e-post og telefonnummer), konto- og innloggingsopplysninger, meldingsinnhold, bilder, aktivitetslogger og tekniske data som IP-adresse og nettleserinformasjon.',
        'For helsepersonell og virksomhetskunder kan behandlingen omfatte opplysninger som er nødvendige for sikker kommunikasjon og dokumentasjon i tjenesten.',
      ],
    },
    {
      title: '3. Formål med behandlingen',
      paragraphs: [
        'Personopplysninger behandles for å levere, drifte og sikre tjenesten, administrere brukerkontoer, tilby kundestøtte, forbedre funksjonalitet, oppfylle rettslige forpliktelser og forebygge misbruk.',
        'Vi behandler kun opplysninger som er nødvendige for det aktuelle formålet.',
      ],
    },
    {
      title: '4. Behandlingsgrunnlag',
      paragraphs: [
        'Behandlingen skjer med grunnlag i GDPR artikkel 6, typisk avtale, rettslig forpliktelse eller berettiget interesse. Der det er nødvendig, benyttes samtykke.',
        'For særlige kategorier personopplysninger skjer behandling i henhold til GDPR artikkel 9 og relevant norsk lovgivning.',
      ],
    },
    {
      title: '5. Deling av personopplysninger',
      paragraphs: [
        'Vi deler ikke personopplysninger med uvedkommende. Opplysninger kan deles med databehandlere som leverer drift, sikkerhet og infrastruktur på vegne av JodaCare AS.',
        'All slik behandling reguleres av databehandleravtaler som sikrer konfidensialitet, integritet og tilgjengelighet.',
      ],
    },
    {
      title: '6. Lagring og overføring',
      paragraphs: [
        'Data lagres kryptert i EU (Stockholm). Vi begrenser overføring av personopplysninger utenfor EU/EØS, og benytter lovlige overføringsmekanismer dersom slik overføring er nødvendig.',
        'Opplysninger lagres ikke lenger enn nødvendig for formålet eller så lenge lovpålagte krav tilsier.',
      ],
    },
    {
      title: '7. Informasjonssikkerhet',
      paragraphs: [
        'Vi benytter tekniske og organisatoriske tiltak for å beskytte personopplysninger, inkludert tilgangsstyring, kryptering, logging og sikker autentisering.',
        'Helsepersonell autentiseres via ID-porten/BankID der dette er relevant for tjenesten.',
      ],
    },
    {
      title: '8. Dine rettigheter',
      paragraphs: [
        'Du kan be om innsyn, retting, sletting, begrensning av behandling, dataportabilitet og protestere mot behandling når vilkårene er oppfylt.',
        'Du kan også trekke tilbake samtykke der behandlingen er basert på samtykke. Henvendelser sendes til support@jodacare.no.',
      ],
    },
    {
      title: '9. Klage',
      paragraphs: [
        'Dersom du mener behandlingen er i strid med regelverket, kan du kontakte oss. Du har også rett til å klage til Datatilsynet.',
      ],
    },
    {
      title: '10. Informasjonskapsler og besøksstatistikk',
      paragraphs: [
        'jodacare.no bruker ingen informasjonskapsler til markedsføring, profilering eller sporing på tvers av nettsteder. Skrifttypene er lagret på vårt eget domene, så nettleseren din kontakter ingen tredjepart når du leser sidene.',
        'Vi ønsker å vite hvilke sider som blir lest, og spør om lov først. Sier du ja, teller vi sidevisninger med Vercel Web Analytics. Statistikken er anonym, den setter ingen informasjonskapsler, og den identifiserer ikke enkeltpersoner. Sier du nei, lastes den ikke.',
        'Svaret ditt lagres lokalt i nettleseren, slik at vi slipper å spørre hver gang. Det er det eneste vi legger igjen på enheten din, og det kan du fjerne når som helst med knappen under.',
      ],
    },
    {
      title: '11. Endringer i erklæringen',
      paragraphs: [
        'Vi kan oppdatere personvernerklæringen ved behov. Ved vesentlige endringer vil vi varsle gjennom relevante kanaler.',
        'Sist oppdatert: 14. september 2026.',
      ],
    },
  ],
};

const en: PersonvernerklaeringBundle = {
  metaTitle: 'Privacy policy',
  metaDescription:
    'How JodaCare processes personal data, your rights, and how we protect security and GDPR compliance.',
  ogTitle: 'Privacy policy — JodaCare',
  ogDescription:
    'Information on processing of personal data, security, storage, your rights and how to contact JodaCare.',
  heroTitle: 'Privacy policy — JodaCare',
  heroSubtitle: 'Last updated: 14 September 2026',
  srHeading: 'Privacy policy',
  sections: [
    {
      title: '1. Data controller',
      paragraphs: [
        'JodaCare AS (org. no. 937 323 565) is the data controller for personal data processed in connection with use of jodacare.no and the JodaCare platform, unless otherwise agreed with the customer organisation.',
        'Contact: support@jodacare.no.',
      ],
    },
    {
      title: '2. Data we process',
      paragraphs: [
        'We may process contact details (such as name, email and phone number), account and sign-in data, message content, images, activity logs and technical data such as IP address and browser information.',
        'For health professionals and business customers, processing may include data necessary for secure communication and documentation in the service.',
      ],
    },
    {
      title: '3. Purposes of processing',
      paragraphs: [
        'Personal data is processed to deliver, operate and secure the service, manage user accounts, provide customer support, improve functionality, meet legal obligations and prevent misuse.',
        'We only process data that is necessary for the relevant purpose.',
      ],
    },
    {
      title: '4. Legal basis',
      paragraphs: [
        'Processing is based on GDPR Article 6, typically contract, legal obligation or legitimate interests. Where necessary, we rely on consent.',
        'Special categories of personal data are processed in accordance with GDPR Article 9 and applicable Norwegian law.',
      ],
    },
    {
      title: '5. Sharing personal data',
      paragraphs: [
        'We do not share personal data with unrelated third parties. Data may be shared with processors who provide operations, security and infrastructure on behalf of JodaCare AS.',
        'All such processing is governed by data processing agreements that ensure confidentiality, integrity and availability.',
      ],
    },
    {
      title: '6. Storage and transfers',
      paragraphs: [
        'Data is stored encrypted in the EU (Stockholm). We limit transfers of personal data outside the EU/EEA and use lawful transfer mechanisms where such transfers are necessary.',
        'Data is not kept longer than necessary for the purpose or as required by law.',
      ],
    },
    {
      title: '7. Information security',
      paragraphs: [
        'We use technical and organisational measures to protect personal data, including access control, encryption, logging and secure authentication.',
        'Health professionals are authenticated via ID-porten/BankID where this is relevant to the service.',
      ],
    },
    {
      title: '8. Your rights',
      paragraphs: [
        'You may request access, rectification, erasure, restriction of processing, data portability and to object to processing where the conditions are met.',
        'You may also withdraw consent where processing is based on consent. Requests can be sent to support@jodacare.no.',
      ],
    },
    {
      title: '9. Complaints',
      paragraphs: [
        'If you believe processing is unlawful, you may contact us. You also have the right to lodge a complaint with the Norwegian Data Protection Authority (Datatilsynet).',
      ],
    },
    {
      title: '10. Cookies and visitor statistics',
      paragraphs: [
        'jodacare.no uses no cookies for marketing, profiling or cross-site tracking. Our fonts are served from our own domain, so your browser contacts no third party while you read these pages.',
        'We would like to know which pages are read, and we ask first. If you say yes, we count page views using Vercel Web Analytics. The statistics are anonymous, set no cookies, and do not identify individuals. If you say no, nothing is loaded.',
        'Your answer is stored locally in your browser so that we do not have to ask every time. It is the only thing we leave on your device, and you can remove it at any time using the button below.',
      ],
    },
    {
      title: '11. Changes to this policy',
      paragraphs: [
        'We may update this privacy policy when needed. For material changes we will notify users through appropriate channels.',
        'Last updated: 14 September 2026.',
      ],
    },
  ],
};

export function getPersonvernerklaeringContent(locale: Locale): PersonvernerklaeringBundle {
  return locale === 'en' ? en : no;
}

export function personvernerklaeringMetadata(locale: Locale): Metadata {
  const b = getPersonvernerklaeringContent(locale);
  return {
    title: b.metaTitle,
    description: b.metaDescription,
    openGraph: {
      title: b.ogTitle,
      description: b.ogDescription,
      ...(locale === 'en' ? { locale: 'en_GB' as const } : {}),
    },
  };
}
