import { Hero, HowItWorks, WhoUsesIt, Features, Security, Story, CTA } from '@/components/sections';

const heroImages = [
  { src: '/hero/hero-1.jpg', alt: 'Barnehånd holder en eldre persons hånd — nærhet mellom generasjoner' },
  { src: '/hero/hero-2.jpg', alt: 'Eldre kvinne smiler mens hun bruker telefonen med ørepropper' },
  { src: '/hero/hero-4.jpg', alt: 'Bestemor ser kjærlig på et spedbarn som ligger foran henne' },
  { src: '/hero/hero-5.jpg', alt: 'To eldre kvinner som ler og støtter hverandre' },
  { src: '/hero/hero-7.jpg', alt: 'Eldre og yngre ansikt side om side — generasjoner knyttet sammen' },
  { src: '/hero/hero-8.jpg', alt: 'Nærbilde av et ansikt med livets linjer' },
];

export default function Home() {
  return (
    <>
      <Hero
        title="Trygghet og verdighet for den du er glad i"
        subtitle="jodacare er en sikker digital plattform som skaper sammenheng i hverdagen for sårbare personer — gjennom kommunikasjon mellom pårørende, helsepersonell og den det handler om."
        primaryCta={{ text: 'For kommuner', href: '/kommune' }}
        secondaryCta={{ text: 'For familier', href: '/familie' }}
        variant="home"
        images={heroImages}
      />

      <HowItWorks />

      <WhoUsesIt />

      <Features showAll={false} />

      <Security variant="compact" />

      <Story
        quote="Min glemsomme mamma ringer og sier at hun ikke har fått besøk i dag. «JODA!» sier jeg, og forteller det jeg har lest i jodacare om dagen hennes. «Du har hatt besøk av Petter fra hjemmetjenesten. Han har laget kjøttkaker til middag for deg.» «Å ja», sier mamma, og husker at han var der."
        author="Kristil Erla Håland"
        role="Gründer og daglig leder, jodacare"
        variant="featured"
      />

      <CTA
        title="Klar til å skape trygghet?"
        subtitle="Kom i gang med jodacare i dag. Vi hjelper deg hele veien."
        primaryCta={{ text: 'Kontakt oss', href: '/kontakt' }}
        secondaryCta={{ text: 'Se hvordan det fungerer', href: '/om' }}
      />
    </>
  );
}
