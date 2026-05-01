import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n/types';

export type LegalSection = { title: string; paragraphs: string[] };

type BruksvilkarBundle = {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  srHeading: string;
  sections: LegalSection[];
  contactHeading: string;
  contactCompany: string;
  contactEmailLabel: string;
  contactWebsiteLabel: string;
};

const no: BruksvilkarBundle = {
  metaTitle: 'Bruksvilkår',
  metaDescription:
    'Les bruksvilkårene for JodaCare, inkludert informasjon om tilgang, personvern, betaling, ansvar og lovvalg.',
  ogTitle: 'Bruksvilkår for JodaCare',
  ogDescription:
    'JodaCares bruksvilkår for konto, personvern, tilgjengelighet, abonnement, ansvar og tvister.',
  heroTitle: 'Bruksvilkår for JodaCare',
  heroSubtitle: 'Sist oppdatert: 28. april 2026',
  srHeading: 'Bruksvilkår',
  contactHeading: 'Kontakt',
  contactCompany: 'JodaCare AS',
  contactEmailLabel: 'E-post:',
  contactWebsiteLabel: 'Nettside:',
  sections: [
    {
      title: '1. Om tjenesten',
      paragraphs: [
        'JodaCare er en sikker kommunikasjonsplattform levert av JodaCare AS (org.nr. 937 323 565). Plattformen kobler helsepersonell, pårørende og pasienter i omsorgsboliger, sykehjem og hjemmetjenester.',
        'Ved å opprette en brukerkonto eller ta i bruk JodaCare, godtar du disse bruksvilkårene.',
      ],
    },
    {
      title: '2. Brukerkontoer og tilgang',
      paragraphs: [
        'Brukerkontoer opprettes av en administrator i din organisasjon, eller gjennom Familierom-registrering. Du er ansvarlig for å holde din innloggingsinformasjon konfidensiell. Helsepersonell logger inn via ID-porten/BankID.',
        'Du skal ikke dele innloggingsinformasjon med andre, forsøke å få tilgang til andres kontoer, eller bruke plattformen til andre formål enn det den er tiltenkt.',
      ],
    },
    {
      title: '3. Innhold og ansvar',
      paragraphs: [
        'Brukere kan dele meldinger, bilder, dagbokinnlegg og annen informasjon gjennom plattformen. Du er ansvarlig for at innholdet du deler er korrekt og lovlig. JodaCare AS er ikke ansvarlig for innhold som brukere publiserer.',
        'Helsepersonell er ansvarlig for at helsefaglig dokumentasjon følger gjeldende lover og forskrifter.',
      ],
    },
    {
      title: '4. Personvern og databehandling',
      paragraphs: [
        'JodaCare behandler personopplysninger i henhold til personvernforordningen (GDPR) og norsk personvernlovgivning. Se vår personvernerklæring på jodacare.no/jodacare/personvernerklaering for detaljer om hvordan vi behandler dine data.',
        'All data lagres kryptert i EU (Stockholm). Vi deler ikke dine data med tredjeparter uten ditt samtykke, med mindre det er påkrevd ved lov.',
      ],
    },
    {
      title: '5. Tilgjengelighet og endringer',
      paragraphs: [
        'JodaCare AS tilstreber høy tilgjengelighet, men garanterer ikke uavbrutt tilgang til plattformen. Vi kan gjøre vedlikehold og oppdateringer som midlertidig påvirker tilgjengeligheten.',
        'Vi forbeholder oss retten til å endre disse bruksvilkårene. Ved vesentlige endringer vil du bli varslet gjennom plattformen. Fortsatt bruk etter varsling anses som aksept av endrede vilkår.',
      ],
    },
    {
      title: '6. Immaterielle rettigheter',
      paragraphs: [
        'Alt innhold, design, kode og funksjonalitet i JodaCare er eid av JodaCare AS. Brukere gis en begrenset, ikke-eksklusiv rett til å bruke plattformen i samsvar med disse vilkårene.',
      ],
    },
    {
      title: '7. Abonnement og betaling',
      paragraphs: [
        'For Familierom gjelder: 14 dager gratis prøveperiode, deretter 299 kr/mnd. Betaling skjer via Vipps. Abonnementet kan sies opp når som helst, og løper ut ved slutten av inneværende betalingsperiode.',
        'For kommunale kunder reguleres betaling av separat avtale.',
      ],
    },
    {
      title: '8. Oppsigelse og sletting',
      paragraphs: [
        'Du kan når som helst be om sletting av din konto og tilhørende data ved å kontakte oss på support@jodacare.no. Sletting gjennomføres innen 30 dager i henhold til GDPR.',
        'JodaCare AS kan suspendere eller slette kontoer som bryter disse vilkårene.',
      ],
    },
    {
      title: '9. Ansvarsbegrensning',
      paragraphs: [
        'JodaCare AS er ikke ansvarlig for indirekte tap, følgeskader eller tap som skyldes feil bruk av plattformen. Vårt totale erstatningsansvar er begrenset til beløpet brukeren har betalt for tjenesten de siste 12 månedene.',
        'JodaCare er ikke medisinsk utstyr og skal ikke brukes som erstatning for medisinsk rådgivning eller behandling.',
      ],
    },
    {
      title: '10. Lovvalg og tvister',
      paragraphs: [
        'Disse vilkårene er underlagt norsk lov. Eventuelle tvister skal søkes løst i minnelighet. Dersom dette ikke fører frem, skal tvisten avgjøres ved Stavanger tingrett.',
      ],
    },
  ],
};

const en: BruksvilkarBundle = {
  metaTitle: 'Terms of use',
  metaDescription:
    'Terms of use for JodaCare, including access, privacy, payment, liability and governing law.',
  ogTitle: 'Terms of use — JodaCare',
  ogDescription:
    'JodaCare terms covering accounts, privacy, availability, subscriptions, liability and disputes.',
  heroTitle: 'Terms of use — JodaCare',
  heroSubtitle: 'Last updated: 28 April 2026',
  srHeading: 'Terms of use',
  contactHeading: 'Contact',
  contactCompany: 'JodaCare AS',
  contactEmailLabel: 'Email:',
  contactWebsiteLabel: 'Website:',
  sections: [
    {
      title: '1. About the service',
      paragraphs: [
        'JodaCare is a secure communication platform provided by JodaCare AS (org. no. 937 323 565). The platform connects health professionals, relatives and patients in care homes, nursing homes and home care services.',
        'By creating a user account or using JodaCare, you accept these terms of use.',
      ],
    },
    {
      title: '2. User accounts and access',
      paragraphs: [
        'User accounts are created by an administrator in your organisation, or through Family Room registration. You are responsible for keeping your sign-in information confidential. Health professionals sign in via ID-porten/BankID.',
        'You must not share sign-in details with others, attempt to access other people’s accounts, or use the platform for purposes other than those intended.',
      ],
    },
    {
      title: '3. Content and responsibility',
      paragraphs: [
        'Users may share messages, images, diary entries and other information through the platform. You are responsible for ensuring that content you share is accurate and lawful. JodaCare AS is not responsible for content published by users.',
        'Health professionals are responsible for ensuring that clinical documentation complies with applicable laws and regulations.',
      ],
    },
    {
      title: '4. Privacy and data processing',
      paragraphs: [
        'JodaCare processes personal data in accordance with the GDPR and Norwegian privacy legislation. See our privacy policy at jodacare.no/en/jodacare/personvernerklaering for details on how we process your data.',
        'All data is stored encrypted in the EU (Stockholm). We do not share your data with third parties without your consent, unless required by law.',
      ],
    },
    {
      title: '5. Availability and changes',
      paragraphs: [
        'JodaCare AS aims for high availability but does not guarantee uninterrupted access to the platform. We may perform maintenance and updates that temporarily affect availability.',
        'We reserve the right to change these terms. For material changes you will be notified through the platform. Continued use after notification constitutes acceptance of the revised terms.',
      ],
    },
    {
      title: '6. Intellectual property',
      paragraphs: [
        'All content, design, code and functionality in JodaCare is owned by JodaCare AS. Users are granted a limited, non-exclusive right to use the platform in accordance with these terms.',
      ],
    },
    {
      title: '7. Subscription and payment',
      paragraphs: [
        'For Family Room: 14 days free trial, then NOK 299/month. Payment is via Vipps. You may cancel the subscription at any time; it runs until the end of the current billing period.',
        'For municipal customers, payment is governed by a separate agreement.',
      ],
    },
    {
      title: '8. Termination and deletion',
      paragraphs: [
        'You may request deletion of your account and associated data at any time by contacting us at support@jodacare.no. Deletion will be completed within 30 days in accordance with the GDPR.',
        'JodaCare AS may suspend or delete accounts that breach these terms.',
      ],
    },
    {
      title: '9. Limitation of liability',
      paragraphs: [
        'JodaCare AS is not liable for indirect loss, consequential loss or loss due to misuse of the platform. Our total liability is limited to the amount the user has paid for the service in the preceding 12 months.',
        'JodaCare is not a medical device and must not be used as a substitute for medical advice or treatment.',
      ],
    },
    {
      title: '10. Governing law and disputes',
      paragraphs: [
        'These terms are governed by Norwegian law. Disputes shall first be sought resolved amicably. If that fails, disputes shall be settled by Stavanger District Court (Stavanger tingrett).',
      ],
    },
  ],
};

export function getBruksvilkarContent(locale: Locale): BruksvilkarBundle {
  return locale === 'en' ? en : no;
}

export function bruksvilkarMetadata(locale: Locale): Metadata {
  const b = getBruksvilkarContent(locale);
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
