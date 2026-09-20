'use client';

import { useEffect, useRef, useState } from 'react';
import { formaterTall, pakkeprisMnd, aar1, aar2, priser, selskap } from '@/lib/fakta';
import Image from 'next/image';
import './brief.css';

/**
 * Company brief.
 *
 * Innholdet er utkastet Kristil laget i Claude (september 2026), portert inn
 * i nettstedet. Markupen er hennes. Det som er endret: utkastets egen
 * toppmeny og bunntekst er tatt ut, fordi root-layouten har dem allerede, og
 * one-pageren — som var et lite skript med getElementById — er nå React-state.
 *
 * Stilen ligger i ./brief.css, prefikset med .company-brief, så den ikke
 * lekker ut på resten av nettstedet.
 */
export function CompanyBrief() {
  const [onePager, setOnePager] = useState(false);
  const lukkeKnapp = useRef<HTMLButtonElement>(null);
  const forrigeFokus = useRef<HTMLElement | null>(null);

  // Åpen dialog: lås bakgrunnen, flytt fokus inn, lever det tilbake etterpå.
  useEffect(() => {
    if (!onePager) return;
    forrigeFokus.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    lukkeKnapp.current?.focus();

    const paaTast = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOnePager(false);
    };
    document.addEventListener('keydown', paaTast);

    return () => {
      document.removeEventListener('keydown', paaTast);
      document.body.style.overflow = '';
      forrigeFokus.current?.focus();
    };
  }, [onePager]);

  return (
    <div className="company-brief">
      <main>

      <section className="hero">
        <div className="container">
          <span className="pill">Company Brief</span>
          <h1>For alle som er rundt et menneske som trenger hjelp.</h1>
          <p style={{ marginTop: '1.25rem' }}>JodaCare er en norsk plattform som samler helsepersonell, pårørende og den det gjelder i én felles samtale om hverdagen. Brukt i kommuner siden 2016. Nye JodaCare lanseres høsten 2026, bygd etter Normen og GDPR og forberedt på KI-forordningen.</p>
          <div className="hero-cta">
            <a className="btn btn-primary btn-lg" href="#kontakt">Snakk med Kristil</a>
            <button className="btn btn-outline btn-lg" type="button" onClick={() => setOnePager(true)}>
                    Se one-pager
                  </button>
          </div>
        </div>
      </section>

      <section className="alt" id="misjonen">
        <div className="container">
          <span className="label">Misjonen</span>
          <h2>Det starter med mamma.</h2>
          <div className="prose">
            <p>I mange år fikk mamma hjelp av hjemmetjenesten. Et stort lag pleiere kom og gikk. Ingen hadde et felles sted å skrive. Mamma husket ikke selv hvem som hadde vært der. Jeg fikk fortellinger som ikke alltid stemte.</p>
            <p>Det var små øyeblikk som dette som ble JodaCare:</p>
          </div>
          <div className="quote" style={{ margin: '1.5rem 0' }}>
            <blockquote>Min glemsomme mamma ringer og sier at hun ikke har fått besøk i dag. «JODA!» sier jeg, og forteller det jeg har lest i JodaCare om dagen hennes. «Du har hatt besøk av Petter fra hjemmetjenesten. Han har laget kjøttkaker til middag for deg.» «Å ja», sier mamma, og husker at han var der.</blockquote>
            <cite>Kristil Erla Haland, grunnlegger og CEO</cite>
          </div>
          <div className="prose">
            <p>JodaCare ble bygd for akkurat den samtalen. For datteren, for sønnen, for helsepersonellet og for henne selv. For at alle som er rundt et menneske som trenger hjelp, har et felles sted å se hverdagen.</p>
            <p>Senere flyttet mamma på sykehjem. Behovet ble enda tydeligere: flere nye ansikter, mer rotasjon, mindre felles rutine. Hennes historie er én av mange. JodaCare finnes for alle som har en mor, en far, et barn eller en venn som er avhengig av et omsorgsteam som faktisk snakker sammen.</p>
          </div>
        </div>
      </section>

      <section id="sektoren">
        <div className="container">
          <span className="label">Sektoren</span>
          <h2>Flest eldre, færrest hender, ingen felles samtale.</h2>
          <div className="stats">
            <div className="stat"><b>302 676</b><small>mottakere av kommunale omsorgstjenester i 2025</small></div>
            <div className="stat"><b>200 357</b><small>får helsetjenester i hjemmet eller praktisk bistand</small></div>
            <div className="stat"><b>37 000</b><small>bor på sykehjem, tre av fire er over 80 år</small></div>
            <div className="stat"><b>79 000</b><small>flere årsverk trengs i omsorgstjenesten innen 2040</small></div>
          </div>
          <div className="prose">
            <p>Gruppen over 80 år teller 270 000 personer i dag. I 2040 er den ventet å telle 463 000. De årsverkene som skal til for å holde tritt, finnes ikke.</p>
            <p>Alle kommuner er lovpålagt å sikre forsvarlig kommunikasjon (helse- og omsorgstjenesteloven § 4-1), pårørendestøtte (§ 3-6), dokumentasjon (kvalitetsforskriften) og brukermedvirkning (pasient- og brukerrettighetsloven).</p>
            <p>I praksis er bildet et annet. Hjemmesykepleieren skriver i journalsystemet. Datteren ringer kommunen og får ulike svar. Den eldre selv hører ofte ingenting før noen står på dørstokken. Kommunikasjonen mellom partene går på telefon, SMS, gule lapper og personlig kjennskap.</p>
            <p>Når det svikter, er konsekvensene konkrete. Den eldre får ikke hjelpen hun trenger. Pårørende mister oversikt og ringer oftere. Helsepersonell gjentar arbeid som allerede er gjort.</p>
            <p>Problemet er ikke mangel på verktøy. Problemet er at verktøyene ikke snakker sammen, og at mennesket i sentrum av omsorgen ikke har en plass i samtalen.</p>
            <p className="source">Kilde: SSB, Sjukeheimar, heimetenester og andre omsorgstenester (2025) og SSB-artikkelen «Sykehjem og hjemmetjenesten i Norge».</p>
          </div>
        </div>
      </section>

      <section className="alt" id="plattformen">
        <div className="container">
          <span className="label">Plattformen</span>
          <h2>Hva JodaCare er.</h2>
          <div className="prose">
            <p>JodaCare er en sikker kommunikasjonsplattform for helse- og omsorgstjenesten. Den kobler tre grupper som tradisjonelt har levd hver for seg: helsepersonellet som leverer omsorgen, de pårørende som er glade i mottakeren, og mottakeren selv.</p>
            <p>Kjernen er Boka. Det er teamets felles feed rundt én person. Hjemmesykepleieren skriver hva som skjedde i dag. Datteren leser det samme kvelden. Neste vakt leser det før hun går inn døra. Rundt Boka ligger kalender, meldinger og rollebasert tilgang.</p>
            <p>Plattformen er bygd for at en kommune skal kunne bruke samme verktøy på tvers av tjenester:</p>
          </div>
          <ul className="plain">
            <li>Hjemmetjeneste og eldre som bor hjemme</li>
            <li>Sykehjem og omsorgsboliger</li>
            <li>Avlastning og barn med utviklingshemming</li>
            <li>Brukerstyrt personlig assistanse (BPA)</li>
            <li>Barnevern og samvær</li>
            <li>Familier som koordinerer omsorg på egen hånd</li>
          </ul>
          <div className="prose">
            <p>Hver rolle får sitt eget grensesnitt og sitt eget språk. Helsepersonellet ser fagtermer og strukturert dokumentasjon. Pårørende ser dagen i hverdagsspråk. Mottakere med kognitive utfordringer får en egen forenklet inngang gjennom Jodabook.</p>
            <p>JodaCare er ikke en journal. Det er samtalen mellom alle som bryr seg om et menneske som trenger hjelp.</p>
          </div>
        </div>
      </section>

      <section className="accent" id="hjemme">
        <div className="container">
          <span className="label">Eldre som bor hjemme</span>
          <h2>Det største markedet, og der det svikter oftest.</h2>
          <p className="kicker">200 000 nordmenn får hjelp hjemme. De fleste er eldre. Rundt hver av dem står et lag som sjelden møtes: hjemmesykepleien på dagvakt, en annen på kveld, en tredje i helgen, en datter i Bergen, en sønn i Tromsø, en nabo som stikker innom. Ingen av dem ser hele bildet.</p>
          <div className="prose"><p>Det er her JodaCare startet, og det er her vi legger tyngden fremover.</p></div>
          <div className="cols" style={{ marginTop: '1.5rem' }}>
            <div className="block">
              <h3>Slik fungerer det i dag</h3>
              <p>Kommunen oppretter et team rundt den eldre. Hjemmetjenesten skriver i Boka etter besøk. Familien leser og skriver tilbake. Kalenderen viser hvem som kommer når. Den eldre kan selv lese, eller få det lest opp, gjennom Jodabook.</p>
            </div>
            <div className="block">
              <h3>Slik blir det</h3>
              <p>JodaVisit er under utvikling: videobesøk fra hjemmetjenesten som erstatter unødvendige kjøreturer, med dokumentasjon rett i Boka etterpå. Familierom med Vipps kommer i 2027: en datter skal kunne opprette rommet selv og invitere kommunen inn når behovet oppstår.</p>
            </div>
          </div>
          <div className="prose" style={{ marginTop: '1.5rem' }}>
            <p><strong>Hva kommunen får.</strong> Færre telefoner fra pårørende. Bedre overlapp mellom vakter. Dokumentasjon på at pårørendestøtte og brukermedvirkning faktisk skjer. Og for den eldre: en hverdag der hun vet hvem som var der, og hvem som kommer.</p>
          </div>
        </div>
      </section>

      <section id="sykehjem">
        <div className="container">
          <span className="label">Sykehjem</span>
          <h2>37 000 beboere. Tre av fire over 80. Flertallet med demens.</h2>
          <p className="kicker">På sykehjem er utfordringen konsentrert. Mange ansatte, høy rotasjon, beboere som ikke selv kan fortelle hva som har skjedd. Pårørende kommer på besøk og spør: «Hvordan har hun hatt det i dag?» Svaret avhenger av hvem som er på vakt.</p>
          <div className="prose"><p>Aleksander Sether ved HAVA instituttet beskriver det slik: JodaCare brukes som overlappsprosedyre, så personale som går på vakt raskt kan sette seg inn i dagens situasjon.</p></div>
          <div className="cols" style={{ marginTop: '1.5rem' }}>
            <div className="block">
              <h3>Slik fungerer det i dag</h3>
              <p>Boka per beboer gir hver vakt umiddelbar oversikt. Pårørende leser samme dag på hverdagsspråk. Livshistorien gir nye ansatte et bilde av hvem beboeren er, ikke bare hva hun trenger. Jodabook gir beboere med demens en enkel inngang med store knapper, bilder fra familien og opplesing.</p>
            </div>
            <div className="block">
              <h3>Slik blir det</h3>
              <p>Hendelseslogg med konfigurerbare hendelsestyper (fall, ernæring, søvn, humør, medisin) og sjekklister for daglige rutiner er bygd i testplattformen og kommer som egne moduler etter lansering. Kvalitetssjekklister og avviksmeldinger følger samme løp.</p>
            </div>
          </div>
          <div className="prose" style={{ marginTop: '1.5rem' }}>
            <p><strong>Hva sykehjemmet får.</strong> Mindre tid på å ringe pårørende. Tryggere overlapp ved vaktskifte. Tilsynsklar dokumentasjon. Og en beboer som er med i samtalen, ikke bare snakket om.</p>
          </div>
        </div>
      </section>

      <section className="alt" id="reisen">
        <div className="container">
          <span className="label">Reisen</span>
          <h2>Ti år i norske kommuner.</h2>
          <div className="prose"><p>JodaCare har vært i bruk i mange norske kommuner gjennom de siste ti årene, i hjemmetjeneste, avlastning, bofellesskap og BPA. Plattformen har fulgt tjenestemottakere, familier og ansatte gjennom hverdagen hele veien.</p></div>
          <div className="timeline">
            <div className="tl"><div className="yr">2016. Første kapittel</div><p>JodaCare lanseres og tas i bruk av de første kommunene.</p></div>
            <div className="tl"><div className="yr">2018. GDPR og ID-porten</div><p>JodaCare bygges på nytt for å være GDPR-compliant med ID-porten-innlogging. Compliance før det ble lovkrav.</p></div>
            <div className="tl"><div className="yr">2016 til 2025. I daglig drift</div><p>Plattformen driftes for kommuner og familier over hele landet. Erfaringene fra ti år i tjenesten er grunnlaget for nye JodaCare.</p></div>
            <div className="tl"><div className="yr">Februar 2026. JodaCare AS</div><p>JodaCare AS etableres med Kristil Erla Haland som grunnlegger og CEO. Plattformens IP ligger i selskapet.</p></div>
            <div className="tl"><div className="yr">Vår 2026. Nye JodaCare tar form</div><p>Ny plattform bygges: web, mobil, Jodabook og KAI på Mistral AI i Paris. Familierom, barnevern-modul, hendelseslogg og sjekklister prøves ut.</p></div>
            <div className="tl"><div className="yr">August 2026. Teamet styrkes</div><p>Kristil får med seg backend-arkitekt Bård Lind som medgründer. Han bygger backenden i Java og PostgreSQL på AWS i Stockholm, med datamodell og tilgangsmodell definert gjennom 30 tilgangsvektorer.</p></div>
            <div className="tl"><div className="yr">Høst 2026. Lansering</div><p>Nye JodaCare lanseres med ID-porten-innlogging. Eksisterende kunder migreres. Offentlige priser publiseres på jodacare.no.</p></div>
          </div>
        </div>
      </section>

      <section id="kunder">
        <div className="container">
          <span className="label">Kundesitater</span>
          <h2>Det sier kundene.</h2>
          <div className="quotes">
            <div className="quote"><blockquote>Hverdagen før og etter JodaCare er som natt og dag. Det betyr så ekstremt mye å kunne følge med på hvordan dagen til Caroline har vært når hun selv ikke klarer å fortelle om det. For en mor så betyr det alt.</blockquote><cite>Anne-Berit Eide, mor til tjenestemottaker</cite></div>
            <div className="quote"><blockquote>Vårt viktigste argument for å bruke JodaCare er sikkerheten rundt informasjonsflyten. Vi har en trygghet for at all informasjon som deles blir håndtert korrekt, og at kun de som har behov for den får den. For tjenestemottakere uten tale er vi helt avhengig av informasjon fra hjem, assistenter, skole og fysioterapeuter for å sikre optimal omsorg.</blockquote><cite>Malin Vigdis Bjerkestuen, Gaupeveien bokollektiv</cite></div>
            <div className="quote"><blockquote>Vi bruker JodaCare som en overlappsprosedyre slik at personale som går på vakt raskt kan sette seg inn i dagens situasjon. Det er veldig tidsbesparende. Jeg ser på JodaCare som en helt nødvendig velferdsteknologisk løsning.</blockquote><cite>Aleksander Sether, HAVA instituttet</cite></div>
          </div>
        </div>
      </section>

      <section className="alt" id="nye">
        <div className="container">
          <span className="label">Nye JodaCare</span>
          <h2>Bygd på nytt. Modul for modul.</h2>
          <div className="prose">
            <p>Nye JodaCare er ikke en oppdatering. Det er en plattform bygd om fra bunnen for å tåle alt vi har lært gjennom ti år, og for å tåle et sikkerhetskrav som er strengere enn det vi hadde i 2018.</p>
          </div>
          <div className="cols" style={{ marginTop: '1.5rem' }}>
            <div className="block"><h3>Første versjon</h3><p>Grunnmodulen: Boka, kalender, meldinger og rollebasert tilgang. Det er det kundene bruker mest, og det er det vi vet fungerer. Innlogging skjer med ID-porten.</p></div>
            <div className="block"><h3>Modulene som kommer</h3><p>Hver får sin pris når den er ferdig, og kommunen velger selv om den vil legge den til: sjekklister og rutiner, hendelseslogg, Hub for omsorgsbolig, Jodabook, barnevern og samvær, JodaVisit.</p></div>
            <div className="block"><h3>Hvorfor modul for modul</h3><p>Vi lanserer det som er sikkert og testet, og legger til resten i takt med at tilgangsmodellen er verifisert for hver ny funksjon. Kundene betaler for det de bruker. Vi slipper å love noe vi ikke har levert.</p></div>
            <div className="block"><h3>Teknologien</h3><p>Web i Next.js, mobil i React Native, backend i Java og PostgreSQL på AWS i Stockholm. KAI, vår AI-assistent, kjører på Mistral AI i Paris. Ingen amerikanske AI-avhengigheter. Ingen sensitive helsedata som forlater Europa.</p></div>
          </div>
        </div>
      </section>

      <section id="sikkerhet">
        <div className="container">
          <span className="label">Sikkerhet</span>
          <h2>Bygd for helsedata fra første linje.</h2>
          <div className="prose">
            <p>JodaCare håndterer helseopplysninger om mennesker som ikke alltid kan passe på seg selv. Sikkerheten ligger derfor i arkitekturen, ikke i et tillegg. Vi følger Normen for informasjonssikkerhet og personvern i helse- og omsorgssektoren, vi er GDPR-compliant siden 2018, og vi er forberedt på kravene i den europeiske KI-forordningen.</p>
            <p>Nye JodaCare er bygd på nytt fra bunnen av medgründer Bård Lind, med ett prinsipp:</p>
          </div>
          <div className="callout"><p>Hver regel for hvem som ser hva, håndheves av systemet selv.</p></div>
          <div className="sec-grid">
            <div className="block"><h3>Normen, GDPR og KI-forordningen</h3><p>Tilgangsstyring, revisjonsspor og dataminimering etter Normen. Databehandleravtale og DPIA inngås før oppstart hos hver kommune. KAI kjører på Mistral AI i Paris, og bruken av KI er dokumentert og avgrenset slik KI-forordningen krever.</p></div>
            <div className="block"><h3>Bare teammedlemskap åpner en Boka</h3><p>Verken ansettelse i kommunen eller tilhørighet til et tjenestested gir innsyn i seg selv. En vikar må settes inn i teamet rundt den eldre. En avdelingsleder ser ikke Bøkene på eget sykehjem uten å være med i de enkelte teamene.</p></div>
            <div className="block"><h3>To administratorer, ikke én rangstige</h3><p>Kommunens egen administrator oppretter team og plasserer ansatte, men har ikke pasientinnsyn. Leverandørens systemadministrator oppretter organisasjoner på tvers av kunder, men har ikke innsyn i Boka. De to kan revideres hver for seg.</p></div>
            <div className="block"><h3>Tretti tilgangsvektorer</h3><p>Hver kombinasjon av rolle og data er beskrevet som en testbar vektor. Hele settet verifiseres mot ny backend før noen bruker flyttes over. Automatiserte sikkerhetstester kjører ved hver kodeendring.</p></div>
            <div className="block"><h3>Datamodell for virkeligheten</h3><p>Én person kan være ansatt i to kommuner og samtidig være pårørende til sin egen mor. Ett team kan jobbe rundt flere tjenestemottakere. Koblinger har gyldighetsperiode og revisjonsspor.</p></div>
            <div className="block"><h3>Innlogging og drift i Europa</h3><p>ID-porten for alle brukere ved lansering. HelseID for helsepersonell kommer. Data lagres kryptert på AWS i Stockholm. Ingen amerikanske KI-avhengigheter. Ingen sensitive helsedata som forlater Europa.</p></div>
            <div className="block"><h3>Universell utforming</h3><p>Nye JodaCare kartlegges systematisk mot WCAG. Kontrast, skjermleser og tastaturnavigasjon sjekkes automatisk i kodegjennomgangen. Det er et lovkrav for kommunale anskaffelser, og en forutsetning for at eldre og mennesker med nedsatt syn faktisk kan bruke appen.</p></div>
            <div className="block"><h3>Dokumentert</h3><p>DPIA, behandlingsprotokoll, beredskapsplan, risikovurdering og sikkerhetsrevisjon ligger klare i DD-rommet.</p></div>
          </div>
        </div>
      </section>

      <section className="alt" id="portefoljen">
        <div className="container">
          <span className="label">Porteføljen</span>
          <h2>Fire produkter, én plattform.</h2>
          <div className="cols">
            <div className="block"><h3>JodaCare</h3><p>Hovedapp i nettleser og mobil, for helsepersonell, pårørende og tjenestemottakere. Boka, meldinger, kalender og rollebasert tilgang i første versjon. Hendelseslogg, sjekklister, kvalitet og avvik som moduler.</p></div>
            <div className="block"><h3>Jodabook</h3><p>Egen app i App Store og Google Play for mennesker med kognitive utfordringer som demens, utviklingshemming eller autisme. Store knapper, mye luft, tydelige bilder, oppleste meldinger. Innlogging via QR-kode fra administrator, deretter PIN eller biometri. Første versjon på nye JodaCare inneholder Boka og Tidslinjen, en kronologisk livshistorie med bilder og hendelser. Bak ligger samme database som JodaCare. Det familien skriver, kan personen selv lese.</p></div>
            <div className="block"><h3>JodaCare Hub</h3><p>Programvare for omsorgsboliger som kjører på fullskjerm i beboerens leilighet. Viser dagens program, bilder fra familien, kalender og videosamtaler. Hardware-agnostisk, med åpen Device Integration API mot skjermer og sensorer (fall, bevegelse, dør, røyk). Egen vekstvei mot eiendomsutviklere som bygger eller oppgraderer omsorgsboliger.</p></div>
            <div className="block"><h3>KAI</h3><p>AI-assistent i JodaCare. Forklarer funksjonalitet i klart språk og tilpasser seg rollen til den som spør. Driver dagboks-oppsummering og livshistorie. Bygd på Mistral AI i Paris.</p></div>
          </div>
        </div>
      </section>

      <section id="posisjonen">
        <div className="container">
          <span className="label">Posisjonen</span>
          <h2>Fem ting ingen andre har.</h2>
          <div className="numbered">
            <div className="num"><b>1.</b><div><h3>Tre rollegrupper i én plattform.</h3><p>Helsepersonellet, de pårørende og mottakeren selv leser samme historie, hver på sitt eget språk. De fleste systemer i markedet er bygd for én rolle.</p></div></div>
            <div className="num"><b>2.</b><div><h3>Multi-segment på samme plattform.</h3><p>En kommune kan bruke JodaCare fra hjemmetjeneste til sykehjem, fra BPA til barnevern. Én lisens, én læringskurve, én leverandør.</p></div></div>
            <div className="num"><b>3.</b><div><h3>Bygd for tilgjengelighet, ikke som tilpasning.</h3><p>Jodabook er en egen app for mennesker med kognitive utfordringer, med eget grensesnitt og egen innlogging. Mottakeren er med i samtalen.</p></div></div>
            <div className="num"><b>4.</b><div><h3>Tilgangskontroll som håndheves.</h3><p>Bare teammedlemskap gir innsyn. Leverandøren selv nektes innsyn i pasientdata. Tretti testbare tilgangsvektorer. Normen, GDPR og KI-forordningen ligger til grunn for arkitekturen.</p></div></div>
            <div className="num"><b>5.</b><div><h3>Offentlig pris under anbudsgrensen.</h3><p>{formaterTall(pakkeprisMnd())} kroner per måned per pakke og {formaterTall(priser.oppstart)} kroner i oppstart står på nettsiden. En avdeling kan vedta kjøpet selv. Ingen anbudsprosess. Ingen «ta kontakt for pris».</p></div></div>
          </div>
        </div>
      </section>

      <section className="alt" id="forretningsmodell">
        <div className="container">
          <span className="label">Forretningsmodellen</span>
          <h2>Hvordan vi tjener penger.</h2>
          <div className="prose"><p>JodaCare er en SaaS-virksomhet med abonnement.</p></div>
          <h3 style={{ margin: '1.5rem 0 1rem' }}>For kommuner og organisasjoner</h3>
          <div className="price-grid">
            <div className="price"><div className="amt">{formaterTall(pakkeprisMnd())} kr</div><div className="per">per måned per pakke à {priser.pakkeStorrelse} tjenestemottakere</div><p>Ubegrenset antall ansatte og pårørende rundt hver tjenestemottaker. Trenger kommunen plass til flere, legges det til en pakke til.</p></div>
            <div className="price"><div className="amt">{formaterTall(priser.oppstart)} kr</div><div className="per">oppstart, engangsbeløp per kommune</div><p>Teknisk oppsett, to igangsettelseskurs på Teams (ett for ansatte, ett for ansatte og pårørende sammen), databehandleravtale, DPIA og sikkerhetsdokumentasjon, og fast kontaktperson de første 90 dagene.</p></div>
          </div>
          <div className="prose">
            <p>Regneeksempel, én avdeling med én pakke: {formaterTall(aar1())} kroner første år, {formaterTall(aar2())} kroner per år deretter. Godt under terskelen for direkte anskaffelse.</p>
            <p>Avtaler løper {priser.avtaleManeder} måneder med automatisk fornyelse og tre måneders oppsigelse. Lisens faktureres kvartalsvis på forskudd. Alle priser eks. mva. Nye moduler får egen pris når de er ferdige. Prisen på grunnmodulen endres ikke av at nye moduler kommer.</p>
          </div>
          <div className="cols" style={{ marginTop: '1.5rem' }}>
            <div className="block"><h3>For familier</h3><p>Familierom for private via Vipps kommer i 2027: {priser.proveperiodeDager} dagers gratis prøveperiode, deretter {priser.familieromMnd} kroner per måned per familierom, ingen binding. Det blir den første tjenesten i Norge der en datter kan opprette et omsorgsrom selv og invitere kommunen inn.</p></div>
            <div className="block"><h3>For omsorgsboliger</h3><p>JodaCare Hub prises per enhet med engangsbeløp for oppsett og månedlig lisens per leilighet. Prisstruktur oppgis på forespørsel.</p></div>
          </div>
        </div>
      </section>

      <section id="marked">
        <div className="container">
          <span className="label">Marked og distribusjon</span>
          <h2>Hvor vi selger, og hvordan.</h2>
          <div className="prose"><p>Norge har 357 kommuner. Alle er pliktige til å levere forsvarlig kommunikasjon, pårørendestøtte, dokumentasjon og brukermedvirkning. JodaCare er bygd for å oppfylle disse pliktene.</p></div>
          <div className="numbered" style={{ marginTop: '1.5rem' }}>
            <div className="num"><b>1.</b><div><h3>Direktekjøp.</h3><p>Fra 1. juli 2026 er terskelen for direkte anskaffelse 500 000 kroner. En avdeling, et sykehjem eller en hjemmetjenestesone kan kjøpe JodaCare uten anbud. Prisen står på nettsiden. Avtaleforslag og databehandleravtale ligger klare.</p></div></div>
            <div className="num"><b>2.</b><div><h3>Integrasjon med Aidn.</h3><p>Aidn er en ny norsk leverandør av elektronisk pasientjournal med avtaler i 180 kommuner. Aidn er åpen for integrasjon med systemene kommunene bruker i hverdagen, og JodaCare er et slikt system. Vi bygger integrasjonen slik at Boka og journalen henger sammen der kommunen ønsker det. Det gir en naturlig vei inn til kommuner som allerede har valgt en moderne journalplattform.</p></div></div>
            <div className="num"><b>3.</b><div><h3>BPA gjennom JAG Assistanse.</h3><p>Norges største BPA-aktør. JodaCare leverer pilotløsninger for assistansegrupper. Dialog om sikker deling av rutiner, sjekklister og dokumenter pågår høsten 2026.</p></div></div>
            <div className="num"><b>4.</b><div><h3>Anbud og rammeavtaler.</h3><p>For kommuner som krever anbud, stiller vi med Normen, GDPR-compliance siden 2018, ID-porten, håndhevet tilgangsmodell, sikkerhetsrevisjon og ti år i drift i norske kommuner.</p></div></div>
            <div className="num"><b>5.</b><div><h3>Eiendomsutviklere.</h3><p>For omsorgsboliger jobber vi direkte med utbyggere gjennom JodaCare Hub. Tre modeller: nybygg, etterinstallering og pilot.</p></div></div>
            <div className="num"><b>6.</b><div><h3>Familier.</h3><p>Når Familierom med Vipps lanseres, får pårørende en vei inn som ikke går gjennom kommunens innkjøp. Familien starter, kommunen inviteres.</p></div></div>
          </div>
          <div className="prose" style={{ marginTop: '1.75rem' }}>
            <p><strong>Utenfor Norge.</strong> Plattformen er klargjort for flerspråk. Det britiske markedet utforskes gjennom NHS Pathfinder CIC, der JodaCare ble representert på NHS Englands Digital Summit 2026. Internasjonal vekst er ikke en del av første kapitalrunde.</p>
          </div>
        </div>
      </section>

      <section className="alt" id="konkurrenter">
        <div className="container">
          <span className="label">Konkurrentbildet</span>
          <h2>Hvor vi står i markedet.</h2>
          <div className="prose"><p>Det finnes mange gode verktøy i kommunal helse. Vi konkurrerer ikke med dem alle. Vi dekker det de ikke dekker.</p></div>
          <div className="cols" style={{ marginTop: '1.5rem' }}>
            <div className="block"><h3>Journalsystemer</h3><p>Visma, Tietoevry, Helseplattformen og Aidn er bygd for helsepersonell. De er sterke på fagdokumentasjon. De er ikke bygd for å snakke med pårørende eller mottakeren selv. JodaCare integrerer med journalsystemer der det gir mening. Vi erstatter dem ikke.</p></div>
            <div className="block"><h3>Familieapper og pårørendeløsninger</h3><p>Finnes i flere varianter. De er gode for familien. De gir ingen verdi til helsepersonellet, og de gjør ingenting for personen med kognitiv utfordring.</p></div>
            <div className="block"><h3>Generelle kommunikasjonsplattformer</h3><p>Microsoft Teams og lignende er ikke bygd for helse. De mangler tilgangskontroll for omsorgsteam, revisjonsspor på helseopplysninger, ID-porten og informasjonsbarrierer for sensitive segmenter. Mange kommuner har brukt dem likevel, fordi alternativene har manglet.</p></div>
            <div className="block"><h3>Internasjonale spesialister</h3><p>Dekker enkelte segmenter, men mangler norsk regulatorisk forankring, ID-porten og norsk språk.</p></div>
          </div>
          <div className="prose" style={{ marginTop: '1.5rem' }}><p>Vår posisjon er ikke «bedre enn alle andre». Den er den eneste plattformen som dekker alle tre rollegrupper, alle relevante tjenestesteder og hele compliance-stakken i ett system.</p></div>
        </div>
      </section>

      <section id="teamet">
        <div className="container">
          <span className="label">Teamet</span>
          <h2>Et lite team, styrket i 2026.</h2>
          <div className="team">
            <div className="block"><h3>Kristil Erla Haland</h3><p className="per" style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '.6rem' }}>Grunnlegger og CEO</p><p>Har bygd JodaCare siden 2016, motivert av egen erfaring med mor i hjemmetjenesten og senere på sykehjem. Driver virksomheten fra produkt til kunde, og står selv for alle kundedialoger.</p></div>
            <div className="block"><h3>Bård Lind</h3><p className="per" style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '.6rem' }}>Medgründer og backend-arkitekt</p><p>Kristil fikk med seg Bård Lind i august 2026 for å styrke teamet på teknologi og sikkerhet. Han er medgründer med eierandel i selskapet, og bygger backenden i nye JodaCare fra bunnen med tilgangsmodell, datamodell og sikkerhetsarkitektur. Ansvarlig for migreringen av eksisterende kunder.</p></div>
          </div>
          <div className="prose">
            <p>Utviklingen skjer med AI-assisterte verktøy i alle ledd, fra kartlegging og kode til sikkerhetstesting og tilgjengelighetskontroll. Det gjør at et team på to leverer det som tidligere krevde et utviklingsbyrå.</p>
            <p>Første kapitalrunde finansierer det teamet mangler: dedikert kapasitet på salg og implementering mot kommuner.</p>
          </div>
        </div>
      </section>

      <section className="accent" id="kapital">
        <div className="container">
          <span className="label">Kapital</span>
          <h2>Hva vi henter, og hva pengene skal gjøre.</h2>
          <div className="prose"><p>JodaCare AS henter en første kapitalrunde som konvertibelt lån. Vilkår gis på forespørsel. Midlene går til tre ting:</p></div>
          <div className="cols" style={{ marginTop: '1.5rem', gridTemplateColumns: 'repeat(auto-fit,minmax(16rem,1fr))' }}>
            <div className="block"><h3>Salg og implementering mot kommuner</h3><p>Direktekjøp-vinduet er åpent. Prisen er offentlig. Det som mangler er kapasitet til å møte kommunene, kjøre igangsettelseskurs og følge opp de første 90 dagene.</p></div>
            <div className="block"><h3>Ferdigstilling av moduler</h3><p>Hendelseslogg, sjekklister, JodaVisit og Hub er bygd i prototypen og skal over på ny backend med verifisert tilgangsmodell. Hver ferdig modul er en ny inntektslinje.</p></div>
            <div className="block"><h3>Migrering av eksisterende kunder</h3><p>Dagens kunder skal over på nye JodaCare uten avbrudd. Det er inntekter vi allerede har, som skal sikres på en plattform vi kan bygge videre på.</p></div>
          </div>
          <div className="prose" style={{ marginTop: '1.5rem' }}><p>Plattformens IP ligger i JodaCare AS og skal forbli der.</p></div>
        </div>
      </section>

      <section id="risiko">
        <div className="container">
          <span className="label">Risiko</span>
          <h2>Det vi vet kan gå galt.</h2>
          <div className="prose"><p>Vi vil heller si det selv enn at du finner det i DD-rommet.</p></div>
          <div className="cols" style={{ marginTop: '1.5rem' }}>
            <div className="block"><h3>Migreringen</h3><p>Ti års historikk skal flyttes fra eksisterende plattform til ny backend. Ingen flyttes før alle tilgangsvektorer er verifisert. Risikoen er tid, ikke datatap.</p></div>
            <div className="block"><h3>Kommunal salgssyklus</h3><p>Selv med direktekjøp tar en kommune tid på å beslutte. Vi motvirker det med offentlig pris, ferdig avtaleforslag og en oppstartspakke som gjør den første avdelingen enkel å si ja til.</p></div>
            <div className="block"><h3>Lite team</h3><p>To personer bærer produkt, teknologi og salg. Kapitalrunden er ment å løse akkurat det.</p></div>
            <div className="block"><h3>Regulatoriske krav i bevegelse</h3><p>Normen, GDPR og KI-forordningen utvikler seg. Vi følger med og bygger for at nye krav kan møtes uten å bygge om plattformen.</p></div>
          </div>
        </div>
      </section>

      <section className="alt" id="dd">
        <div className="container">
          <span className="label">Dokumenter og DD-rom</span>
          <h2>For den som vil gå dypere.</h2>
          <div className="prose"><p>For investorer og strategiske partnere som vil gjøre due diligence, har vi forberedt en komplett dokumentpakke:</p></div>
          <div className="docs" style={{ marginTop: '1.25rem' }}>
            <div>DPIA (Data Protection Impact Assessment)</div>
            <div>Behandlingsprotokoll for personopplysninger</div>
            <div>Beredskapsplan</div>
            <div>Cap table</div>
            <div>Prismodell og regulatorisk forankring</div>
            <div>Konkurranseanalyse</div>
            <div>IP-oversikt</div>
            <div>Risikovurdering</div>
            <div>Sikkerhetsrevisjonsrapport (april 2026)</div>
            <div>Tilgangsmodell og tilgangsvektorer for nye JodaCare</div>
          </div>
          <div className="prose"><p>Dokumentene tilgjengeliggjøres etter NDA. Kontakt Kristil for tilgang.</p></div>
        </div>
      </section>

      <section id="kontakt">
        <div className="container">
          <span className="label">Kontakt</span>
          <h2>Snakk med Kristil.</h2>
          <div className="prose">
            <p>Hvis du har lest så langt, har du sannsynligvis spørsmål.</p>
            <p>Send en e-post til <a href="mailto:kristil@jodacare.com"><strong>kristil@jodacare.com</strong></a>. Det er Kristil som tar samtalen. Vi bruker ikke et salgsteam for strategiske dialoger.</p>
            <p>Vi snakker gjerne om:</p>
          </div>
          <ul className="plain">
            <li>Deltakelse i første kapitalrunde</li>
            <li>Implementeringspilot for kommuner som vil ta i bruk JodaCare</li>
            <li>Strategiske partnerskap rundt omsorgssektoren</li>
            <li>Distribusjonssamarbeid med selskaper som har komplementære produkter</li>
          </ul>
          <a className="btn btn-primary btn-lg" href="mailto:kristil@jodacare.com" style={{ marginTop: '1rem' }}>Send e-post</a>
        </div>
      </section>

      </main>

      {onePager && (
        <div
          className="op-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="op-title"
        >
          {/* Klikk utenfor lukker. Som en ekte knapp, ikke en klikkbar div —
              da virker den også med tastatur og blir lest opp av skjermleser. */}
          <button
            type="button"
            className="op-dismiss"
            aria-label="Lukk one-pageren"
            onClick={() => setOnePager(false)}
          />

            <div className="op">
              <div className="op-head">
                <Image src="/brand/jodacare-horisontal-teal.svg" alt="" width={252} height={54} />
                <div className="op-actions">
                  <button className="btn btn-outline btn-sm" type="button" onClick={() => window.print()}>Skriv ut</button>
                  <button className="btn btn-primary btn-sm" type="button" ref={lukkeKnapp} onClick={() => setOnePager(false)}>Lukk</button>
                </div>
              </div>
              <span className="label">One-pager · september 2026</span>
              <h2 id="op-title">JodaCare. Én samtale rundt den som trenger hjelp.</h2>
              <p className="lede">JodaCare samler helsepersonell, pårørende og tjenestemottakeren selv i ett felles sted for hverdagen. I bruk i norske kommuner siden 2016. Nye JodaCare lanseres høsten 2026.</p>
              <div className="op-grid">
                <div><h3>Problemet</h3><p>Rundt hver eldre som får hjelp står et lag som sjelden møtes. Ingen har ett sted å se hva som skjedde i dag. Kommunikasjonen går på telefon, SMS og gule lapper. Alle kommuner er lovpålagt å sikre kommunikasjon, pårørendestøtte, dokumentasjon og brukermedvirkning.</p></div>
                <div><h3>Løsningen</h3><p>Boka er teamets felles feed rundt én person. Helsepersonell skriver med fagspråk, pårørende leser i hverdagsspråk, og den det gjelder får en forenklet inngang gjennom Jodabook. Rundt Boka: kalender, meldinger og rollebasert tilgang.</p></div>
                <div><h3>Markedet</h3><p>302 676 personer mottar kommunale omsorgstjenester (SSB 2025). 200 000 av dem får hjelp hjemme, 37 000 bor på sykehjem. Gruppen over 80 år vokser fra 270 000 til 463 000 innen 2040. Fokus fremover: eldre som bor hjemme og eldre på sykehjem.</p></div>
                <div><h3>Forretningsmodellen</h3><p>SaaS. Kommuner: {formaterTall(pakkeprisMnd())} kr per måned per pakke à {priser.pakkeStorrelse} tjenestemottakere, pluss {formaterTall(priser.oppstart)} kr i oppstart. Offentlig pris, under terskelen for direkte anskaffelse (500 000 kr fra 1. juli 2026). Familierom for private via Vipps kommer i 2027, {priser.familieromMnd} kr per måned.</p></div>
                <div><h3>Distribusjon</h3><p>Direktekjøp, integrasjon med journalleverandøren Aidn (avtaler i 180 kommuner), JAG Assistanse i BPA-segmentet, anbud og rammeavtaler, eiendomsutviklere gjennom JodaCare Hub.</p></div>
                <div><h3>Sikkerhet</h3><p>Normen, GDPR siden 2018 og forberedt på KI-forordningen. Backend i Java og PostgreSQL på AWS i Stockholm. KAI på Mistral AI i Paris. ID-porten-innlogging. Bare teammedlemskap gir innsyn. Tretti testbare tilgangsvektorer.</p></div>
                <div><h3>Teamet</h3><p>Kristil Erla Haland, grunnlegger og CEO, har bygd JodaCare siden 2016. Bård Lind, medgründer og backend-arkitekt, kom inn i 2026 for å styrke teamet på teknologi og sikkerhet.</p></div>
                <div><h3>Kapital</h3><p>Første kapitalrunde som konvertibelt lån. Midlene går til salg og implementering mot kommuner, ferdigstilling av moduler og migrering av eksisterende kunder. Vilkår gis på forespørsel.</p></div>
              </div>
              <div className="op-foot">Kontakt: Kristil Erla Haland, kristil@jodacare.com · JodaCare AS, org.nr. {selskap.orgNr} · jodacare.no/brief</div>
            </div>
        </div>
      )}
    </div>
  );
}
