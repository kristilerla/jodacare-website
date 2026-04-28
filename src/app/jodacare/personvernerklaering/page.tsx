import type { Metadata } from 'next';
import { Hero } from '@/components/sections';
import { Container } from '@/components/ui';

const sections = [
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
    title: '10. Endringer i erklæringen',
    paragraphs: [
      'Vi kan oppdatere personvernerklæringen ved behov. Ved vesentlige endringer vil vi varsle gjennom relevante kanaler.',
      'Sist oppdatert: 28. april 2026.',
    ],
  },
] as const;

export const metadata: Metadata = {
  title: 'Personvernerklæring',
  description:
    'Les hvordan JodaCare behandler personopplysninger, hvilke rettigheter du har, og hvordan vi ivaretar sikkerhet og GDPR.',
  openGraph: {
    title: 'Personvernerklæring for JodaCare',
    description:
      'Informasjon om behandling av personopplysninger, sikkerhet, lagring, rettigheter og kontakt hos JodaCare.',
  },
};

export default function PersonvernerklaeringPage() {
  return (
    <>
      <Hero
        title="Personvernerklæring for JodaCare"
        subtitle="Sist oppdatert: 28. april 2026"
        variant="page"
      />

      <section className="py-20 lg:py-28" aria-labelledby="personvern-title">
        <Container size="md">
          <h2 id="personvern-title" className="sr-only">
            Personvernerklæring
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
        </Container>
      </section>
    </>
  );
}
