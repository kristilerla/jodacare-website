import type { Metadata } from 'next';
import { Hero } from '@/components/sections';
import {
  Section,
  Quote,
  Timeline,
  NumberedList,
  PartnerBlock,
} from '@/components/brief';
import { Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Company Brief',
  description:
    'Strategisk selskapspresentasjon av JodaCare — Norges plattform for å koordinere omsorg mellom helsepersonell, pårørende og mottaker. Bygd siden 2016.',
  openGraph: {
    title: 'JodaCare — Company Brief',
    description:
      'Strategisk selskapspresentasjon av JodaCare. Bygd siden 2016, brukt i kommuner i ti år.',
    type: 'article',
  },
  robots: { index: true, follow: true },
};

export default function BriefPage() {
  return (
    <>
      <Hero
        variant="page"
        badge="Company Brief"
        title="For alle som er rundt en person som trenger hjelp."
        subtitle="JodaCare er Norges plattform for å koordinere omsorg mellom helsepersonell, pårørende og mottaker. Bygd siden 2016, brukt i kommuner i ti år, lansert i 2.0 i 2026."
        primaryCta={{ text: 'Snakk med Kristil', href: '#contact' }}
        secondaryCta={{ text: 'Les briefen', href: '#mission' }}
      />

      {/* 2 — Misjonen */}
      <Section
        id="mission"
        eyebrow="Misjonen"
        title="Det starter med mamma."
        variant="default"
      >
        <p>
          I mange år fikk mamma hjelp av hjemmetjenesten. Et stort lag pleiere
          kom og gikk. Ingen hadde et felles sted å skrive. Mamma husket ikke
          selv hvem som hadde vært der. Jeg fikk fortellinger som ikke alltid
          stemte.
        </p>
        <p>Det var små øyeblikk som dette som ble JodaCare:</p>
        <Quote author="Kristil Erla Haland, grunnlegger og CEO">
          Min glemsomme mamma ringer og sier at hun ikke har fått besøk i
          dag. «JODA!» sier jeg, og forteller det jeg har lest i JodaCare om
          dagen hennes. «Du har hatt besøk av Petter fra hjemmetjenesten. Han
          har laget kjøttkaker til middag for deg.» «Å ja», sier mamma, og
          husker at han var der.
        </Quote>
        <p>
          JodaCare ble bygd for akkurat den samtalen. For datteren, for
          sønnen, for helsepersonellet — og for henne selv. For at alle som
          er rundt et menneske som trenger hjelp, har et felles sted å se
          hverdagen.
        </p>
        <p>
          Senere flyttet mamma på sykehjem. Behovet ble enda tydeligere:
          flere nye ansikter, mer rotasjon, mindre felles rutine. Hennes
          historie er én av mange. JodaCare finnes for alle som har en mor,
          en far, et barn eller en venn som er avhengig av et omsorgsteam som
          faktisk snakker sammen.
        </p>
      </Section>

      {/* 3 — Sektoren */}
      <Section
        id="sector"
        eyebrow="Sektoren"
        title="En sektor som mangler en felles samtale."
        variant="soft"
      >
        <p>
          Norge har 357 kommuner. Alle skal levere forsvarlig omsorg til
          mennesker som trenger hjelp i hverdagen. Alle er lovpålagt å sikre
          god kommunikasjon (helse- og omsorgstjenesteloven § 4-1),
          pårørendestøtte (§ 3-6), dokumentasjon (kvalitetsforskriften) og
          brukermedvirkning.
        </p>
        <p>
          I praksis er bildet et annet. En hjemmesykepleier skriver i sitt
          journalsystem. En pårørende ringer kommunen og får ulike svar.
          Mottakeren selv hører ofte ingenting før noen kommer på dørstokken.
          Kommunikasjonen mellom partene foregår på telefon, SMS, gule lapper
          og personlig kjennskap.
        </p>
        <p>
          Det fungerer noen ganger. Andre ganger ikke. Når det går galt, er
          konsekvensene konkrete: mottakeren får ikke den hjelpen hen
          trenger. Pårørende mister oversikt. Helsepersonell må gjenta arbeid
          som allerede er gjort.
        </p>
        <p>
          Staten har satt av 2,2 milliarder kroner gjennom Tørn-programmet
          for å bremse flukten fra sektoren. En av flukt-årsakene er
          dokumentasjons- og kommunikasjonsbelastning — usynlig arbeid som
          spiser tid uten å bli synlig i statistikken.
        </p>
        <p>
          Strukturelt er problemet ikke at det mangler verktøy. Problemet er
          at verktøyene ikke snakker sammen, og at mennesket i sentrum av
          omsorgen ikke har en plass i samtalen.
        </p>
      </Section>

      {/* 4 — Plattformen */}
      <Section
        id="platform"
        eyebrow="Plattformen"
        title="Hva JodaCare er."
        variant="default"
      >
        <p>
          JodaCare er en sikker kommunikasjonsplattform for helsevesenet. Den
          kobler tre grupper som tradisjonelt har levd hver for seg:
          helsepersonellet som leverer omsorgen, de pårørende som er glade i
          mottakeren, og mottakeren selv.
        </p>
        <p>
          Plattformen er bygd for at en kommune skal kunne bruke samme
          verktøy på tvers av tjenester:
        </p>
        <ul className="list-disc space-y-2 pl-6 marker:text-primary">
          <li>Hjemmesykepleie</li>
          <li>Omsorgsboliger og sykehjem</li>
          <li>Brukerstyrt personlig assistanse (BPA)</li>
          <li>Avlastning og barn med utviklingshemming</li>
          <li>Barnevern og samvær</li>
          <li>Familier som koordinerer omsorg på egen hånd</li>
        </ul>
        <p>
          Hver rolle får et eget grensesnitt og eget språk. Helsepersonellet
          ser fagtermer og strukturert dokumentasjon. Pårørende ser dagen i
          hverdagsspråk. Mottakere med kognitive utfordringer får en egen
          forenklet inngang gjennom Jodabook.
        </p>
        <p>
          Sikkerheten ligger i bunnen, ikke pålimt. GDPR-compliant fra 2018.
          Row Level Security på alle data. ID-porten og Maskinporten
          godkjent. 100 % europeisk AI-stack via Mistral i Paris. Sensitive
          data forlater aldri Europa.
        </p>
        <p>
          JodaCare er ikke en journal. Det er den samtalen mellom alle som
          bryr seg om et menneske som trenger hjelp.
        </p>
      </Section>

      {/* 5 — Reisen */}
      <Section
        id="journey"
        eyebrow="Reisen"
        title="10 år. 17 lojale kunder. Én konkurs som ikke knekte plattformen."
        variant="soft"
      >
        <Timeline
          items={[
            {
              year: '2016',
              title: 'Det første kapittelet',
              body: 'JodaCare lanseres av Jodatech AS. Horten kommune blir tidlig kunde — og er det fremdeles. Vår største kunde gjennom hele reisen.',
            },
            {
              year: '2017',
              title: 'Innovasjon Norge',
              body: 'Lån tas opp fra Innovasjon Norge for å investere i videreutvikling.',
            },
            {
              year: '2018',
              title: 'GDPR og ID-porten',
              body: 'JodaCare bygges på nytt for å være GDPR-compliant med ID-porten-innlogging. Compliance før det ble lovkrav. Flere kommuner kommer inn — svært få slutter.',
            },
            {
              year: '2020–2025',
              title: 'Lavbluss-årene',
              body: 'Ressursene prioriteres mot et søsterprosjekt. JodaCare driftes lojalt for eksisterende kunder. 17 kunder fortsetter — svært få slutter.',
            },
            {
              year: 'Desember 2025',
              title: 'Konkurs',
              body: 'Innovasjon Norge-lånet fra 2017 forfaller. Jodatech AS klarer ikke å betjene avdragene og slås konkurs. JodaCare-plattformen fortsetter uten avbrudd. Ingen kunder taper drift.',
            },
            {
              year: 'Februar 2026',
              title: 'Nytt kapittel',
              body: 'JodaCare AS etableres. IP-rettighetene overføres fra konkursboet. Kristil fortsetter som CEO og grunnlegger.',
            },
            {
              year: 'Vår 2026',
              title: 'JodaCare 2.0',
              body: 'Ny plattform bygd på Next.js 14, Supabase og Mistral AI (Paris). 100 % europeisk AI-stack. Familierom åpnes for B2C med Vipps-betaling.',
            },
            {
              year: 'Vår 2026',
              title: 'Strategisk avtale',
              body: 'Strategisk avtale signert med Aiantic AB, et svensk selskap som forbereder notering på Nasdaq Stockholm. Avtalen trer i kraft ved Aiantics børsnotering, og bringer JodaCare inn i en nordisk børsnotert portefølje.',
            },
            {
              year: 'Sommer 2026',
              title: 'Migrering og åpning',
              body: 'Migreringen til JodaCare 2.0 starter for våre 17 eksisterende kunder — fra Oslo til familier rundt enkeltbarn. Ledet av Kodemaker. ID-porten og Maskinporten godkjent. 1. juli åpner anskaffelseslovens nye direktekjøp-terskel et nytt vindu for kommunale salg.',
            },
          ]}
          closing="10 år. 17 lojale kunder. Én konkurs som ikke knekte plattformen."
        />
      </Section>

      {/* 6 — Kundesitater */}
      <Section
        id="customers"
        eyebrow="Kundesitater"
        title="Det sier kundene."
        variant="default"
      >
        <Quote author="Anne-Berit Eide, mor til tjenestemottager">
          Hverdagen før og etter JodaCare er som natt og dag. Det betyr så
          ekstremt mye å kunne følge med på hvordan dagen til Caroline har
          vært når hun selv ikke klarer å fortelle om det. For en mor så
          betyr det alt.
        </Quote>
        <Quote author="Malin Vigdis Bjerkestuen, Gaupeveien bokollektiv">
          Vårt viktigste argument for å bruke JodaCare er sikkerheten rundt
          informasjonsflyten. Vi har en trygghet for at all informasjon som
          deles blir håndtert korrekt, og at kun de som har behov for den får
          den. For tjenestemottagere uten tale er vi helt avhengig av
          informasjon fra hjem, assistenter, skole og fysioterapeuter for å
          sikre optimal omsorg.
        </Quote>
        <Quote author="Aleksander Sether, HAVA instituttet">
          Vi bruker JodaCare som en overlappsprosedyre slik at personale som
          går på vakt raskt kan sette seg inn i dagens situasjon. Det er
          veldig tidsbesparende. Jeg ser på JodaCare som en helt nødvendig
          velferdsteknologisk løsning.
        </Quote>
      </Section>

      {/* 7 — JodaCare 2.0 */}
      <Section
        id="v2"
        eyebrow="JodaCare 2.0"
        title="Den nye plattformen."
        variant="soft"
      >
        <p>
          I februar 2026 lanserte vi JodaCare 2.0 på en helt ny teknologisk
          grunnmur. Det er ikke en oppdatering. Det er en plattform som er
          bygd om fra bunnen for å takle alt vi har lært gjennom ti år.
        </p>
        <p>
          Den nye stacken: Next.js 14 for web, React Native for mobil,
          Supabase (PostgreSQL) som database med Row Level Security på alle
          tabeller, Vercel som driftsmiljø, og Mistral AI i Paris som motor
          for KAI. Ingen amerikanske avhengigheter. Ingen sensitive
          helsedata som forlater Europa.
        </p>
        <p>
          2.0 åpner det vi tidligere ikke kunne levere: B2C familierom med
          Vipps-betaling, barnevern-modul med informasjonsbarrierer,
          hendelseslogg med dynamiske felter, sjekklister med
          gjentakelsesmønstre, fellesarrangementer med «Den tar jeg»-knapp,
          og videosamtaler via Whereby.
        </p>
        <p>
          Eksisterende kunder migreres til 2.0 sommeren 2026, ledet av
          Kodemaker. Nye kunder kan ta plattformen i bruk umiddelbart —
          kommunalt direktekjøp fra 1. juli, B2C familierom via Vipps fra
          dag én.
        </p>
      </Section>

      {/* 8 — Visjon */}
      <Section
        id="vision"
        eyebrow="Visjon"
        title="Hvorfor vi gjør dette."
        variant="accent"
      >
        <Quote author="Kristil Erla Haland, grunnlegger og CEO, JodaCare">
          Jeg bygde JodaCare fordi ingen skal måtte gjette på hva som har
          skjedd med mamma i dag. Det er hele utgangspunktet, og det er hele
          visjonen.
        </Quote>
      </Section>

      {/* 9 — Det radikale grepet */}
      <Section
        id="approach"
        eyebrow="Det radikale grepet"
        title="Én samtale, tre språk."
        variant="default"
      >
        <p>
          Mest helse-IT er bygd for én rolle. Journalsystemer for
          helsepersonellet. Familieapper for pårørende. Forenklede
          grensesnitt for mottakeren.
        </p>
        <p>
          Men en hverdag i omsorg er ikke tre samtaler. Det er én samtale med
          tre ulike lyttere.
        </p>
        <p>JodaCare er bygd rundt akkurat det:</p>
        <ul className="list-disc space-y-2 pl-6 marker:text-primary">
          <li>
            En hjemmesykepleier skriver hva som har skjedd i dag, med
            fagtermer og strukturert dokumentasjon.
          </li>
          <li>
            Datteren ser samme dag på hverdagsspråk: «Mor har spist, hun var
            litt sliten, men kjente igjen sykepleieren.»
          </li>
          <li>
            Mottakeren selv, hvis hun har en kognitiv utfordring, ser et
            bilde, en knapp, eller hører meldingen.
          </li>
        </ul>
        <p>
          Bak ligger samme datakilde. Frontene er ulike, regulert av rolle.
        </p>
        <p>
          KAI styrer det: vår AI-assistent som tilpasser språket per leser.
          Bygd på Mistral AI i Paris — 100 % europeisk, fordi sensitive
          helsedata aldri skal forlate kontinentet.
        </p>
        <p>
          Resultatet er at hele teamet rundt et menneske faktisk leser samme
          historie — bare på sitt eget språk.
        </p>
      </Section>

      {/* 10 — Porteføljen */}
      <Section
        id="portfolio"
        eyebrow="Porteføljen"
        title="Fire produkter, én plattform."
        variant="soft"
      >
        <p>
          Plattformen består av fire produkter som deler kjernedata, men er
          bygd for hver sin bruker.
        </p>

        <div>
          <h3 className="font-serif text-xl font-semibold text-text">JodaCare</h3>
          <p className="mt-2">
            Hovedapp i nettleser og mobil, for helsepersonell, pårørende og
            pasienter. Boka, meldinger, kalender, hendelseslogg, sjekklister,
            kvalitet og avvik.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-xl font-semibold text-text">Jodabook</h3>
          <p className="mt-2">
            Egen app i App Store og Google Play, for mennesker med kognitive
            utfordringer som utviklingshemming, demens eller autisme.
          </p>
          <p className="mt-2">
            JodaCare er bygd for at familien og helsepersonellet skal kunne
            snakke sammen. Jodabook er for personen som omsorgen handler om.
            Brukeren kan selv lese hva som har skjedd i dag, se bilder fra
            galleriet, snakke med familien via video, eller registrere
            humøret sitt.
          </p>
          <p className="mt-2">
            Grensesnittet er bygd for kognitive utfordringer: store knapper,
            mye luft, tydelige bilder, oppleste meldinger. Ikke fagspråk.
            Ikke skjult funksjonalitet.
          </p>
          <p className="mt-2">
            Innlogging skjer via en QR-kode som administrator i JodaCare
            scanner inn på enheten. Koden utløper etter 15 minutter.
            Deretter låser brukeren appen med fire-sifret PIN eller
            biometri.
          </p>
          <p className="mt-2">
            Bak ligger samme database som JodaCare. Det familien skriver,
            kan personen selv lese. Det er ikke to systemer — det er én
            plattform med to ulike språk og to ulike inngangsdører.
          </p>
          <p className="mt-2">
            For oss er Jodabook ikke et tillegg. Det er forskjellen mellom å
            bli snakket om — og å være med i samtalen.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-xl font-semibold text-text">
            JodaCare Hub
          </h3>
          <p className="mt-2">
            Programvare-plattform for omsorgsboliger. Kjøres på fullskjerm i
            beboerens leilighet med integrasjon mot hardware-leverandører.
            Egen vekstvei mot eiendomsutviklere — se seksjonen under.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-xl font-semibold text-text">KAI</h3>
          <p className="mt-2">
            AI-assistent i JodaCare. Flytende hjelpeboble som forklarer
            funksjonalitet i klart språk og tilpasser seg rollen til den som
            spør. Driver dagboks-oppsummering og livshistorie-generering.
            Bygd på Mistral.
          </p>
        </div>

        <p>
          Bak ligger én databasestruktur: Supabase med Row Level Security,
          RBAC og care team-modell som styrer hvem som ser hva. Hver rolle
          får sin egen inngang — men alle leser samme historie.
        </p>
      </Section>

      {/* 11 — JodaCare Hub */}
      <Section
        id="hub"
        eyebrow="JodaCare Hub"
        title="En egen vekstvei: omsorgsboliger."
        variant="default"
      >
        <p>
          JodaCare Hub er vår satsing på omsorgsboliger — en parallell
          vekstvei med egen målgruppe og egen forretningsmodell.
        </p>
        <p>
          Hub er programvaren som kjører på fullskjerm i beboerens leilighet.
          Den viser dagens program, bilder fra familien, kalenderavtaler og
          videosamtaler — på beboerens egne premisser. Helsepersonellet får
          varsler og data. Familien får et felles vindu inn til hverdagen.
        </p>
        <p>
          Vi leverer ikke hardware. Hub er en hardware-agnostisk plattform:
          vi integrerer med ledende leverandører av touchscreens, sensorer
          (fall, bevegelse, dør, røyk) og smart-display gjennom en åpen
          Device Integration API. Det betyr ingen vendor lock-in, frihet til
          å velge teknologi som passer den enkelte omsorgsbolig, og lavere
          terskel for utrulling.
        </p>
        <p>
          Målgruppe: eiendomsutviklere som bygger eller oppgraderer
          omsorgsboliger. Hub gir utbyggere et tydelig
          differensieringsargument i et marked der velferdsteknologi blir
          stadig viktigere i tilbudet.
        </p>
        <p>
          For utbyggere tilbyr vi tre modeller: nybygg (Hub integreres fra
          dag én), etterinstallering (i eksisterende omsorgsboliger) og
          pilot (mindre skala for verifisering før full utrulling).
        </p>
        <p>
          Hub har egen webside og egen markedsføring:{' '}
          <a
            href="https://jodaskills.com/hub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            jodaskills.com/hub
          </a>
          .
        </p>
      </Section>

      {/* 12 — Posisjonen */}
      <Section
        id="position"
        eyebrow="Posisjonen"
        title="Fem ting ingen andre har."
        variant="soft"
      >
        <NumberedList
          items={[
            {
              number: 1,
              lead: 'Tre rollegrupper i én plattform.',
              body: 'Helsepersonellet, de pårørende og mottakeren selv leser samme historie — hver på sitt eget språk. De fleste systemer i markedet er bygd for én rolle. JodaCare er bygd for alle tre samtidig.',
            },
            {
              number: 2,
              lead: 'Multi-segment på samme plattform.',
              body: 'En kommune kan bruke JodaCare fra hjemmesykepleie til omsorgsbolig, fra BPA til barnevern, fra sykehjem til avlastning. Én lisens, én læringskurve, én leverandør å forholde seg til.',
            },
            {
              number: 3,
              lead: 'Bygd for tilgjengelighet, ikke som tilpasning.',
              body: 'Jodabook er en egen app i App Store og Google Play for mennesker med kognitive utfordringer. Den deler database med JodaCare, men har eget grensesnitt, eget språk og egen innloggingsflyt. Mottakeren er med i samtalen — ikke bare snakket om.',
            },
            {
              number: 4,
              lead: 'Compliance fra første dag.',
              body: 'GDPR-compliant siden 2018, før det ble lovkrav. ID-porten og Maskinporten godkjent. Row Level Security på alle data. 100 % europeisk AI-stack via Mistral i Paris. Sensitive helsedata forlater aldri kontinentet.',
            },
            {
              number: 5,
              lead: 'To salgsveier i samme plattform.',
              body: 'Kommuner kjøper via direktekjøp eller anbud. Pårørende kan opprette eget familierom via Vipps uten å vente på kommunen. Det betyr at vi ikke er låst til én innkjøpsmodell.',
            },
          ]}
        />
      </Section>

      {/* 13 — Forretningsmodellen */}
      <Section
        id="business"
        eyebrow="Forretningsmodellen"
        title="Hvordan vi tjener penger."
        variant="default"
      >
        <p>JodaCare er en SaaS-virksomhet med to ben.</p>

        <h3 className="font-serif text-xl font-semibold text-text">
          For familier (B2C)
        </h3>
        <p>
          14 dagers gratis prøveperiode, deretter 299 kr per måned per
          familierom. Vipps Recurring for innlogging og betaling. Ingen
          binding. Det første produktet i Norge der pårørende kan opprette et
          omsorgsrom direkte via Vipps og betale selv.
        </p>

        <h3 className="font-serif text-xl font-semibold text-text">
          For kommuner og organisasjoner (B2B)
        </h3>
        <p>Trapp-modell med tre nivåer:</p>
        <ul className="list-disc space-y-2 pl-6 marker:text-primary">
          <li>
            <strong>Basis</strong> — meldinger, dagbok og kalender. For
            tjenestesteder med enkel kommunikasjonsbehov.
          </li>
          <li>
            <strong>Profesjonell</strong> — alt i Basis, pluss helsenotater,
            KAI, hendelseslogg, sjekklister og moderasjonsverktøy. For
            tjenestesteder med faglig dokumentasjonsbehov.
          </li>
          <li>
            <strong>Enterprise</strong> — alt i Profesjonell, pluss Jodabook,
            Hub, barnevern-modul og API-tilgang. For kommuner som vil bruke
            JodaCare på tvers av flere tjenesteområder.
          </li>
        </ul>
        <p>
          Prisene er per enhet (tjenestested), ikke per bruker. Det betyr at
          en kommune kan ha mange ansatte og pårørende på samme lisens uten
          ekstra kostnad. For BPA og enkelthusholdninger har vi en egen
          prisstruktur tilpasset enkeltbruker-modellen.
        </p>
        <p>
          Når en kommune kjøper JodaCare, inkluderer det
          Implementeringsansvarlig — en dedikert kontaktperson som veileder
          gjennom oppstart, opplæring og overlevering. Det er ikke et
          tillegg. Det er hvordan vi sørger for at plattformen faktisk blir
          brukt.
        </p>
      </Section>

      {/* 14 — Marked og distribusjon */}
      <Section
        id="market"
        eyebrow="Marked og distribusjon"
        title="Hvor vi selger, og hvordan."
        variant="soft"
      >
        <p>
          Norge har 357 kommuner. Alle er pliktige til å levere forsvarlig
          kommunikasjon (helse- og omsorgstjenesteloven § 4-1),
          pårørendestøtte (§ 3-6), dokumentasjon (kvalitetsforskriften) og
          brukermedvirkning (pasient- og brukerrettighetsloven). JodaCare er
          bygd for å oppfylle disse pliktene.
        </p>
        <p>Vi har tre veier til markedet:</p>

        <NumberedList
          items={[
            {
              number: 1,
              lead: 'Direktekjøp.',
              body: '1. juli 2026 endres anskaffelsesloven: terskelen for direktekjøp uten anbud økes til 500 000 NOK. For en kommune betyr det at en avdeling, en tjeneste eller en pilot kan kjøpes inn uten å gå gjennom anbudsprosess. Det åpner et vindu som tidligere var stengt for små leverandører som oss. Vi har et komplett direktekjøps-tilbud klart fra 1. juli.',
            },
            {
              number: 2,
              lead: 'Anbud og rammeavtaler.',
              body: 'For kommuner som krever anbud, leverer vi inn med våre kvalifikasjoner: GDPR-compliance siden 2018, ID-porten og Maskinporten godkjent, RLS-arkitektur, sikkerhetsaudit gjennomført, og 10 års kontinuerlig drift hos Horten kommune.',
            },
            {
              number: 3,
              lead: 'B2C familierom.',
              body: 'Pårørende som ikke kan vente på at kommunen tar i bruk JodaCare, kan opprette eget familierom via Vipps. Det er det første produktet i Norge der en datter kan ta initiativ til koordinert omsorg — uten å være avhengig av kommunens innkjøpsprosess.',
            },
            {
              number: 4,
              lead: 'Eiendomsutviklere.',
              body: 'For omsorgsboliger jobber vi direkte med eiendomsutviklere gjennom JodaCare Hub — en programvare-plattform som integrerer mot hardware-leverandører. Utbyggere får et tydelig differensieringsargument i et marked der velferdsteknologi blir stadig viktigere. Se seksjonen om Hub for detaljer.',
            },
          ]}
        />

        <h3 className="font-serif text-xl font-semibold text-text">Norden</h3>
        <p>
          Gjennom den strategiske avtalen med Aiantic vil JodaCare få en bro
          inn i de øvrige nordiske markedene når Aiantic-noteringen er på
          plass. Plattformen er allerede klargjort for flerspråk og kan
          tilpasses svensk, dansk og finsk kommunal kontekst.
        </p>

        <h3 className="font-serif text-xl font-semibold text-text">
          Storbritannia
        </h3>
        <p>
          Vi utforsker det britiske markedet gjennom NHS Pathfinder CIC, hvor
          JodaCare ble representert på NHS Englands Digital Summit 2026 i
          London.
        </p>

        <h3 className="font-serif text-xl font-semibold text-text">Partnere</h3>
        <p>
          Vi samarbeider med Dynamisk Helse om å integrere Drops-pedagogikken
          inn i JodaCares kunnskapsarkitektur. Vi er i dialog med ABEL om en
          felles vinkel mot caregiver-belastning i arbeidslivet. Vi støtter
          JAG Assistanse-nettverket i BPA-segmentet med pilotløsninger.
        </p>
      </Section>

      {/* 15 — Aiantic-avtalen */}
      <Section
        id="aiantic"
        eyebrow="Aiantic-avtalen"
        title="Aiantic-avtalen."
        variant="default"
      >
        <p>
          JodaCare AS har inngått en strategisk avtale med Aiantic AB, et
          svensk selskap som forbereder notering på Nasdaq Stockholm.
          Avtalen trer i kraft ved Aiantics børsnotering. Når den
          realiseres, blir JodaCare en del av Aiantics børsnoterte
          portefølje på de nordiske kapitalmarkedene.
        </p>
        <p>
          Frem til da er JodaCare et selvstendig norsk selskap. Operativt
          forblir det slik også etter at avtalen trer i kraft: Kristil
          fortsetter som grunnlegger og CEO. Plattformen, kundene og
          retningen ligger der den alltid har ligget — i Norge, med norsk
          regulatorisk forankring og norsk språk.
        </p>
        <p>
          Avtalen gir to strategiske gevinster når den realiseres: en bro
          inn i de øvrige nordiske markedene gjennom Aiantics nettverk, og
          tilgang til kapitalmarkedet via en svensk børsnotering. Den dagen
          vi trenger ytterligere kapital, slipper vi å bygge
          investorrelasjoner fra null.
        </p>
      </Section>

      {/* 16 — Teamet */}
      <Section id="team" eyebrow="Teamet" title="Teamet." variant="soft">
        <p>JodaCare drives av et lite, fokusert kjerneteam.</p>
        <div>
          <h3 className="font-serif text-xl font-semibold text-text">
            Kristil Erla Haland — grunnlegger og CEO
          </h3>
          <p className="mt-2">
            Har bygd JodaCare siden 2016, motivert av sin egen erfaring med
            mor i hjemmetjenesten og senere på sykehjem. Driver virksomheten
            fra produkt til kunde.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-xl font-semibold text-text">
            Kodemaker — teknisk ansvarlig
          </h3>
          <p className="mt-2">
            Leverer arkitektur, utvikling og drift av JodaCare 2.0 og hele
            migreringsløpet sommeren 2026.
          </p>
        </div>
        <p>
          Første kapitalrunde finansierer utvidelsen som teamet trenger for å
          skalere: dedikerte ressurser på salg og markedsføring — først i
          Norge, deretter internasjonalt.
        </p>
      </Section>

      {/* 17 — Konkurrentbildet */}
      <Section
        id="competition"
        eyebrow="Konkurrentbildet"
        title="Hvor vi står i markedet."
        variant="default"
      >
        <p>
          Det finnes mange gode verktøy i kommunal helse. Vi konkurrerer
          ikke med dem alle — vi dekker det de ikke dekker.
        </p>
        <p>
          <strong>Journalsystemer</strong> som Visma, DIPS og Lifecare er
          bygd for helsepersonell. De er sterke på fagdokumentasjon, men de
          er ikke bygd for å snakke med pårørende eller mottakeren selv.
          JodaCare integrerer med journalsystemer der det gir mening — vi
          erstatter dem ikke.
        </p>
        <p>
          <strong>Familieapper og pårørendeløsninger</strong> finnes i flere
          varianter — fra enkle meldingstjenester til mer ambisiøse
          SaaS-løsninger. De er gode for familien, men de gir ingen verdi til
          helsepersonellet, og de gjør ingenting for personen med kognitiv
          utfordring. JodaCare er bygd for alle tre rollegrupper samtidig.
        </p>
        <p>
          <strong>Generelle kommunikasjonsplattformer</strong> som Microsoft
          Teams er ikke bygd for helse. De mangler RBAC for omsorgsteam,
          audit trail på helsenotater, ID-porten-integrasjon og
          informasjonsbarrierer for sensitive segmenter som barnevern. Mange
          kommuner har brukt dem likevel — fordi alternativene har manglet.
        </p>
        <p>
          <strong>Internasjonale spesialister</strong> dekker noen segmenter,
          men mangler norsk regulatorisk forankring, ID-porten og norsk
          språkdesign. JodaCare er bygd for Norge først, Norden neste.
        </p>
        <p>
          Vår posisjon er ikke «bedre enn alle andre». Den er den eneste
          plattformen som dekker alle tre rollegrupper, alle relevante
          tjenestesteder, og hele compliance-stakken i ett system.
        </p>
      </Section>

      {/* 18 — Samarbeid */}
      <Section
        id="partners"
        eyebrow="Samarbeid"
        title="Samarbeid som styrker produktet."
        variant="soft"
      >
        <PartnerBlock
          partners={[
            {
              name: 'Aidn',
              body: 'En ny norsk leverandør av elektronisk pasientjournal (EPJ) med avtaler hos 90 norske kommuner. Mange av JodaCares eksisterende kunder blir også Aidn-kunder. Vi har inngått en integrasjonsavtale med Aidn — den gir oss en strukturert distribusjonsvei inn til resten av Aidns kommunale kundebase.',
            },
            {
              name: 'JAG Assistanse',
              body: 'Norges største BPA-aktør. JodaCare leverer pilotløsninger for assistansegrupper og gir nettverket et felles verktøy for koordinasjon.',
            },
            {
              name: 'Kodemaker',
              body: 'Teknisk leveransepartner som leder utvikling, arkitektur og kundemigrering for JodaCare 2.0.',
            },
            {
              name: 'Dynamisk Helse / Drops',
              body: 'Vårt første partnerskap i en modulær add-on-modell: Drops-innholdet — pedagogisk veiledning utviklet av Ann-Kristin Johansen for helsepersonell — er tilgjengelig som tilleggstjeneste for JodaCare-kunder. Modellen viser hvordan JodaCare kan integrere spesialisert innhold fra tredjepart, og åpne tilsvarende samarbeid med andre fagleverandører i fremtiden.',
            },
          ]}
        />
      </Section>

      {/* 19 — Kundenytte */}
      <Section
        id="benefits"
        eyebrow="Kundenytte"
        title="Hva en kommune får."
        variant="default"
      >
        <p>Konkrete effekter av å innføre JodaCare:</p>
        <NumberedList
          items={[
            {
              number: 1,
              lead: 'Mindre tidstyveri.',
              body: 'Helsepersonell bruker mindre tid på telefoner, SMS-meldinger og dobbeltdokumentasjon. Informasjon registreres én gang, leses av alle som har rett til det.',
            },
            {
              number: 2,
              lead: 'Færre klagesaker.',
              body: 'Pårørende som har innsyn i dagen, ringer ikke for å spørre hva som skjer. Bekymringsmeldinger lukkes raskere fordi det finnes etterprøvbare spor.',
            },
            {
              number: 3,
              lead: 'Tydeligere lovetterlevelse.',
              body: 'JodaCare leverer dokumentasjon på at kommunikasjon (§ 4-1), pårørendestøtte (§ 3-6), dokumentasjon (kvalitetsforskriften) og brukermedvirkning faktisk skjer. Tilsynsklare data.',
            },
            {
              number: 4,
              lead: 'Rekrutteringsfortrinn.',
              body: 'Ansatte oppgir at verktøyene de bruker er en del av jobbattraktiviteten. JodaCare er bygd av folk som har levd i sektoren — det merkes i grensesnittet.',
            },
            {
              number: 5,
              lead: 'Mer åpenhet uten ekstra arbeid.',
              body: 'Pårørende får tilgang ved at helsepersonellet gjør jobben sin. Ingen ekstra «rapport til pårørende»-løp.',
            },
            {
              number: 6,
              lead: 'Brukermedvirkning på ordentlig.',
              body: 'Jodabook gjør at mottakeren selv kan delta i samtalen — ikke bare bli snakket om. Lovpålagt, sjelden levert.',
            },
            {
              number: 7,
              lead: 'Bedre overgangsfase ved skiftbytte.',
              body: 'Boka som team-feed gir nye vakter umiddelbar oversikt. Mindre risiko for tap av kontinuitet.',
            },
            {
              number: 8,
              lead: 'Audit-klare data.',
              body: 'Row Level Security, audit trail, samtykker og samtykke-overstyringer er innebygd. Når Datatilsynet eller Helsetilsynet ber om innsyn, har vi det.',
            },
          ]}
        />
      </Section>

      {/* 20 — Implementering */}
      <Section
        id="implementation"
        eyebrow="Implementering"
        title="Vi sørger for at plattformen blir brukt."
        variant="soft"
      >
        <p>
          Den største risikoen ved kommunal SaaS er ikke at plattformen er
          feil bygd. Det er at den ikke blir tatt i bruk.
        </p>
        <p>
          JodaCare adresserer dette gjennom Implementeringsansvarlig — en
          dedikert rolle som vi tilbyr som del av leveransen.
          Implementeringsansvarlig er kundens kontaktperson gjennom hele
          oppstartsfasen og operativ tilstedeværelse i den daglige
          implementeringen.
        </p>
        <p>
          Plattformen har et eget implementeringssystem innebygd: sjekkliste,
          kursadministrasjon, samtykker, enhetsverifisering, overlevering og
          brukeroversikt. Det betyr at en kommune kan måle fremdrift og
          dokumentere implementeringen — for tilsyn, for ledelse og for egen
          kvalitetssikring.
        </p>
        <p>
          Vår erfaring etter 10 år: implementering er ikke en kveld. Det er
          en strukturert prosess som tar 6–12 uker for en typisk kommune. Vi
          har bygd Implementeringsansvarlig-rollen og det innebygde
          implementeringssystemet fordi vi vet at det er her gevinsten
          avgjøres.
        </p>
      </Section>

      {/* 21 — Hvorfor akkurat nå */}
      <Section
        id="why-now"
        eyebrow="Hvorfor akkurat nå"
        title="Vinduet åpner i 2026."
        variant="default"
      >
        <p>
          Det er fire strukturelle endringer som gjør at JodaCare har et
          vindu nå som vi ikke har hatt før:
        </p>
        <div>
          <h3 className="font-serif text-xl font-semibold text-text">
            Direktekjøp åpner i juli.
          </h3>
          <p className="mt-2">
            Anskaffelsesloven endres 1. juli 2026 — direktekjøp-terskelen
            økes til 500 000 NOK. For en kommune betyr det at en avdeling,
            en tjeneste eller en pilot kan kjøpes inn uten anbud. For oss
            betyr det at vi kan selge til 357 kommuner direkte, uten
            anbudskostnader som tidligere har stengt SMB-leverandører ute.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-xl font-semibold text-text">
            Pårørende-bølgen og Tørn-programmet.
          </h3>
          <p className="mt-2">
            Eldrebølgen er ikke bare flere eldre — det er flere pårørende.
            Samtidig har staten satt av 2,2 milliarder kroner gjennom
            Tørn-programmet for å bremse pleier-flukten fra sektoren.
            Kommunikasjonsarbeidet rundt en pasient er en av de største
            usynlige belastningene i sektoren. JodaCare reduserer den.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-xl font-semibold text-text">
            Europeisk AI-suverenitet.
          </h3>
          <p className="mt-2">
            I 2026 har norske og europeiske kommuner blitt vesentlig mer
            skeptiske til amerikansk AI i sensitive sektorer. JodaCare er
            allerede 100 % på Mistral AI i Paris — vi er der markedet ber
            oss om å være.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-xl font-semibold text-text">
            Strammere GDPR-håndhevelse.
          </h3>
          <p className="mt-2">
            Datatilsynet har skjerpet praksis rundt helsedata gjennom
            2025–2026. Kommuner stiller nå krav til leverandører som de
            tidligere ikke gjorde. JodaCare har RLS, audit trail, ID-porten
            og DPIA i bunnen — ikke pålimt.
          </p>
        </div>
        <p className="border-l-4 border-primary pl-6 italic font-serif text-xl">
          Vinduet er ikke evig. De som posisjonerer seg i 2026, har mest å
          vinne.
        </p>
      </Section>

      {/* 22 — Dokumenter og DD-rom */}
      <Section
        id="docs"
        eyebrow="Dokumenter og DD-rom"
        title="For den som vil gå dypere."
        variant="soft"
      >
        <p>
          For investorer og strategiske partnere som vil gjøre due
          diligence, har vi forberedt en komplett dokumentpakke:
        </p>
        <ul className="grid gap-2 sm:grid-cols-2 not-prose">
          {[
            'DPIA (Data Protection Impact Assessment)',
            'Behandlingsprotokoll for personopplysninger',
            'Beredskapsplan',
            'Cap table',
            'Prismodell og regulatorisk forankring',
            'Konkurranseanalyse',
            'IP-oversikt',
            'Risikovurdering',
            'Sikkerhetsrevisjonsrapport',
          ].map((d) => (
            <li
              key={d}
              className="rounded-xl bg-white p-4 text-base ring-1 ring-secondary-dark text-text"
            >
              {d}
            </li>
          ))}
        </ul>
        <p>
          Dokumentene tilgjengeliggjøres etter NDA. Kontakt Kristil for
          tilgang.
        </p>
      </Section>

      {/* 23 — Kontakt */}
      <Section
        id="contact"
        eyebrow="Kontakt"
        title="Snakk med Kristil."
        variant="accent"
      >
        <p>Hvis du har lest så langt, har du sannsynligvis spørsmål.</p>
        <p>
          Send en e-post til{' '}
          <a
            href="mailto:kristil@jodacare.com"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            kristil@jodacare.com
          </a>
          . Det er Kristil som tar samtalen — vi bruker ikke et salgsteam
          for strategiske dialoger.
        </p>
        <p>Vi snakker gjerne om:</p>
        <ul className="list-disc space-y-2 pl-6 marker:text-primary">
          <li>Strategiske partnerskap rundt omsorgssektoren</li>
          <li>Implementeringspilot for kommuner som vil ta i bruk JodaCare</li>
          <li>
            Distribusjonssamarbeid med selskaper som har komplementære
            produkter
          </li>
          <li>Spørsmål fra Aiantic-relaterte interessenter</li>
        </ul>
        <div className="pt-4">
          <Button href="mailto:kristil@jodacare.com" size="lg">
            Send e-post
          </Button>
        </div>
      </Section>
    </>
  );
}
