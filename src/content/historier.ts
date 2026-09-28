/**
 * Historier på jodacare.no/historier.
 *
 * Slik legger du inn en ny historie:
 * 1. Kopier malen nederst og lim den inn øverst i `historier`-listen.
 * 2. Fyll inn feltene. `slug` blir adressen: jodacare.no/historier/<slug>.
 *    Bruk små bokstaver og bindestrek, ingen æ/ø/å (skriv ae/o/a).
 * 3. Lim inn teksten i `tekst`. Tom linje mellom avsnitt. En linje som
 *    starter med «## » blir en mellomtittel, og en som starter med «> » blir
 *    et sitat.
 * 4. Når historien er delt på LinkedIn, Facebook eller Instagram, legg
 *    lenken til innlegget i `lenker`. Da vises «Også på …» under historien.
 *
 * Historiene er på norsk. Den engelske versjonen av siden viser de samme
 * tekstene med en merknad om at de er skrevet på norsk.
 *
 * NB: Priser skal ikke skrives rett inn her. Byggeporten (sjekk-fakta)
 * stopper bygget hvis en tekst inneholder et beløp med «kr» eller «/mnd».
 */

export type Historie = {
  slug: string;
  tittel: string;
  /** Ett–to setninger. Vises på oversikten og når lenken deles. */
  ingress: string;
  /** Publiseringsdato, ÅÅÅÅ-MM-DD. */
  dato: string;
  forfatter: string;
  /** Valgfritt, vises etter navnet: «gründer og daglig leder, JodaCare AS». */
  forfatterRolle?: string;
  /** Bilde i /public/images/. Brukes øverst i historien og når lenken deles. */
  bilde?: { src: string; alt: string };
  tekst: string;
  lenker?: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
};

export const historier: Historie[] = [
  // Nyeste historie øverst.
  {
    slug: 'bygde-jodacare-med-ki-og-hentet-inn-java-utvikler',
    tittel:
      'Jeg bygde JodaCare på nytt sammen med kunstig intelligens, og så valgte jeg allikevel å hente inn en hardbarket Java-utvikler',
    ingress:
      'I dag når jeg skriver dette så er det snart ett år siden Jodatech gikk konkurs, og jeg tenkte det var på tide å fortelle litt om hva som har skjedd med JodaCare siden da, for det har skjedd ganske mye.',
    dato: '2026-09-28',
    forfatter: 'Kristil Erla Håland',
    forfatterRolle: 'gründer og daglig leder, JodaCare AS',
    tekst: `
Da konkursen var et faktum i desember 2025 så sto jeg med ti års erfaring, en gammel kodebase, kunder som brukte JodaCare hver eneste dag og ingen utviklere. Jeg er ikke utvikler selv, så den vanlige veien videre ville vært å finne penger til å leie inn noen, og det hadde jeg ikke.

Det jeg hadde var tid, og kunstig intelligens som akkurat hadde blitt god nok til å skrive kode. Så jeg satte meg ned i januar og begynte. Jeg forklarte hva JodaCare skulle gjøre, KI skrev koden, jeg testet, det virket ikke, jeg forklarte på nytt, og slik holdt vi på. I løpet av våren og sommeren hadde jeg en fullstendig prototype av nye JodaCare med web, mobilapp, en egen app for de med kognitive utfordringer, innlogging med Vipps, familierom for private, hendelseslogg, sjekklister og til og med en modul for barnevern og samvær. Det ble over 170 sider og over 200 API-ruter, og jeg må innrømme at jeg var ganske stolt.

Det har vært utrolig verdifullt å kunne gjøre dette selv. For første gang på ti år kunne jeg prøve ut en idé samme dag som jeg fikk den, uten å måtte skrive en bestilling og vente. Jeg kunne vise kommuner noe som faktisk virket, og jeg lærte hva som egentlig er vanskelig i JodaCare. Det er ikke funksjonene, de er ganske enkle. Det vanskelige er tilgangsmodellen, altså hvem som skal få se hva om hvem, og når.

Så kom dagen jeg virkelig ble tatt med buksene nede. Vi hadde implementert HelseID i løsningen, alle testene var grønne og vi hadde til og med kjørt egne pen-tester som gikk glatt igjennom, så jeg gikk ganske trygg inn i kodegjennomgangen med Norsk Helsenett. Jeg var helt ærlig i første minutt av møtet og sa at jeg hadde brukt Claude til både å kode appen og å dokumentere den. Men da de spurte meg hvordan tilgangsstyringen og sikkerheten var ivaretatt, så kunne jeg slett ikke svare. Jeg visste hva løsningen skulle gjøre, men jeg kunne ikke forklare hvordan den faktisk gjorde det, og det var veldig ubehagelig. Jeg sa der og da at jeg skulle få med meg noen på laget som kunne gå gjennom koden sammen med meg.

Så jeg hyret inn et profesjonelt sikkerhetsteam, og de brukte akkurat 90 sekunder på å hacke seg inn i prototypen min. Nitti sekunder. Alle de grønne testene hadde testet det jeg hadde bedt om, og ingen hadde testet det jeg ikke visste at jeg skulle be om. Prototypen har heldigvis aldri vært i drift med ekte brukere, men jeg gikk allikevel rett i kjelleren og visste ærlig talt ikke hva jeg skulle gjøre.

Det var da jeg møtte Bård Lind. Bård har bygget sikre systemer i over tjue år, og nå i høst bygger han JodaCare på nytt fra bunnen av i Java. Han bygger ikke videre på koden min. Prototypen min er blitt kravspesifikasjonen hans, og det er faktisk en ganske god måte å bruke den på, for alt jeg lærte om hva JodaCare skal gjøre ligger der.

Hvorfor ikke bare fikse hullene og gå videre? Jo, fordi JodaCare skal brukes av ekte mennesker i ekte situasjoner. Det er en nattevakt i en avlastningsbolig som skal skrive om natta til et barn. Det er en mor som leser om dagen til datteren sin. Det er en saksbehandler i barnevernet som må være helt sikker på at biologisk forelder aldri får se fosterforelderens notater. Da må hver eneste regel i systemet være forstått og eid av et menneske, en som kan sitte i et møte med Norsk Helsenett eller i et tilsyn og forklare hvorfor koden gjør akkurat som den gjør. Det kunne ikke jeg, og det kan ikke KI.

Da Bård og jeg gikk gjennom prototypen så fant vi flere regler som var skrevet ned i koden, men som aldri ble håndhevet. Ingenting krasjet, alt så ut til å virke, og det er akkurat den typen feil som er farlig i helse. Så nå har vi en regel om at ingen bruker flyttes over til ny løsning før alle 30 tilgangsscenarioene våre er testet grønne mot den nye backenden, og denne gangen er det Bård som har skrevet scenarioene.

Så hvor står JodaCare i dag? Dagens løsning er i drift og har vært det siden 2016, nye kunder starter der og flyttes over når den nye er klar. Bård bygger, jeg er produkteier og prototypen er fasiten for hva den nye skal kunne. Og jeg bruker fortsatt KI hver dag, til alt fra tekst til testing.

KI ga meg muligheten til å bygge selv, og det er jeg veldig takknemlig for. Men ansvaret for det som bygges, det kan jeg ikke gi videre til en maskin.
`,
  },
];

/*
  MAL — kopier denne:

  {
    slug: 'min-forste-historie',
    tittel: 'Tittel på historien',
    ingress: 'Ett–to setninger som får folk til å lese videre.',
    dato: '2026-09-28',
    forfatter: 'Kristil Erla Håland',
    bilde: { src: '/images/mamma-nettbrett.jpg', alt: 'Beskriv hva bildet viser' },
    tekst: `
Første avsnitt.

## En mellomtittel

Neste avsnitt.

> Et sitat som skal fremheves.
`,
    lenker: {
      linkedin: 'https://www.linkedin.com/posts/...',
    },
  },
*/

/** Nyeste først, uavhengig av rekkefølgen i listen. */
export function alleHistorier(): Historie[] {
  return [...historier].sort((a, b) => b.dato.localeCompare(a.dato));
}

export function finnHistorie(slug: string): Historie | undefined {
  return historier.find((h) => h.slug === slug);
}

export type Blokk =
  | { type: 'avsnitt'; tekst: string }
  | { type: 'mellomtittel'; tekst: string }
  | { type: 'sitat'; tekst: string };

/** Gjør teksten om til avsnitt, mellomtitler og sitater. */
export function tilBlokker(tekst: string): Blokk[] {
  return tekst
    .trim()
    .split(/\n\s*\n/)
    .map((del) => del.trim())
    .filter(Boolean)
    .map((del): Blokk => {
      if (del.startsWith('## ')) return { type: 'mellomtittel', tekst: del.slice(3).trim() };
      if (del.startsWith('> ')) {
        return {
          type: 'sitat',
          tekst: del
            .split('\n')
            .map((l) => l.replace(/^>\s?/, ''))
            .join(' ')
            .trim(),
        };
      }
      return { type: 'avsnitt', tekst: del.replace(/\s*\n\s*/g, ' ') };
    });
}
