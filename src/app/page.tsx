import { Hero, HowItWorks, WhoUsesIt, Features, Security, Story, CTA } from '@/components/sections';

export default function Home() {
  return (
    <>
      <Hero
        title="Trygghet og verdighet for den du er glad i"
        subtitle="JodaCare er en sikker digital plattform som skaper sammenheng i hverdagen for sårbare personer — gjennom kommunikasjon mellom pårørende, helsepersonell og den det handler om."
        primaryCta={{ text: 'For kommuner', href: '/kommune' }}
        secondaryCta={{ text: 'For familier', href: '/familie' }}
        variant="home"
      />

      <HowItWorks />

      <WhoUsesIt />

      <Features showAll={false} />

      <Security variant="compact" />

      <Story
        quote="Min glemsomme mamma ringer og sier at hun ikke har fått besøk i dag. «JODA!» sier jeg, og forteller det jeg har lest i JodaCare om dagen hennes. «Du har hatt besøk av Petter fra hjemmetjenesten. Han har laget kjøttkaker til middag for deg.» «Å ja», sier mamma, og husker at han var der."
        author="Kristil Erla Håland"
        role="Gründer og daglig leder, JodaCare"
        variant="featured"
      />

      <CTA
        title="Klar til å skape trygghet?"
        subtitle="Kom i gang med JodaCare i dag. Vi hjelper deg hele veien."
        primaryCta={{ text: 'Kontakt oss', href: '/kontakt' }}
        secondaryCta={{ text: 'Se hvordan det fungerer', href: '/om' }}
      />
    </>
  );
}
