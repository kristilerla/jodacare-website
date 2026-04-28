import type { Metadata } from 'next';
import { Hero } from '@/components/sections';
import { Container } from '@/components/ui';

const sections = [
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
] as const;

export const metadata: Metadata = {
  title: 'Bruksvilkår',
  description:
    'Les bruksvilkårene for JodaCare, inkludert informasjon om tilgang, personvern, betaling, ansvar og lovvalg.',
  openGraph: {
    title: 'Bruksvilkår for JodaCare',
    description:
      'JodaCares bruksvilkår for konto, personvern, tilgjengelighet, abonnement, ansvar og tvister.',
  },
};

export default function BruksvilkarPage() {
  return (
    <>
      <Hero
        title="Bruksvilkår for JodaCare"
        subtitle="Sist oppdatert: 28. april 2026"
        variant="page"
      />

      <section className="py-20 lg:py-28" aria-labelledby="bruksvilkar-title">
        <Container size="md">
          <h2 id="bruksvilkar-title" className="sr-only">
            Bruksvilkår
          </h2>

          <div className="space-y-10">
            {sections.map((section) => (
              <article key={section.title}>
                <h3 className="font-serif text-2xl font-bold text-text mb-4">{section.title}</h3>
                <div className="space-y-4 text-text-light leading-relaxed">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <article className="mt-12 border-t border-secondary pt-10">
            <h3 className="font-serif text-2xl font-bold text-text mb-4">Kontakt</h3>
            <div className="space-y-2 text-text-light">
              <p>JodaCare AS</p>
              <p>
                E-post:{' '}
                <a href="mailto:support@jodacare.no" className="text-primary hover:underline">
                  support@jodacare.no
                </a>
              </p>
              <p>
                Nettside:{' '}
                <a href="https://www.jodacare.no" className="text-primary hover:underline">
                  www.jodacare.no
                </a>
              </p>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
