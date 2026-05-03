# Språk- og toneaudit — jodacare.no

_Gjennomført 3. mai 2026_

**Referansedokumenter:** SKILL.md (Brand Voice, Posisjonering), references/segmenter.md
**Merk:** `references/tekst-bibliotek.md` refereres i SKILL.md men finnes ikke i skill-filen. Audit er basert på reglene i SKILL.md Brand Voice og promptens eksplisitte regler.

---

## Systematisk mønster: «jodacare» vs «JodaCare»

SKILL.md sier: *"JodaCare skrives alltid med stor C — konsekvent gjennom all tekst på nettsiden."*

Flere sider bruker konsekvent liten c (`jodacare`) i løpende tekst. Dette gjelder:
- `/familie` (scenarioP3, whoSubtitle)
- `/om` (hele siden)
- `/sikkerhet` (hele siden)
- `/teknologi` (hele siden)
- `WhoUsesIt.tsx` (delt komponent)
- `contact-form.ts`

Sider som bruker korrekt `JodaCare`: forsiden, `/kommune`, `/omsorgsbolig`, `/bpa`, `/avlastning`, `/implementering`, `/barnevern`.

**Dette er det mest gjennomgripende funnet og bør fikses som en batch-operasjon.**

---

## / (Forsiden)

**Filsti:** `src/i18n/messages/home.ts`
**Total vurdering:** gul

### Funn

#### 1. Manglende hovedposisjon (regel 5)
- **Lokasjon:** Hele siden
- **Problem:** Hovedposisjonen «JodaCare følger personen» brukes aldri. Forsiden er det viktigste stedet for denne setningen.
- **Forslag:** Legg til hovedposisjonen som en tagline i hero-seksjonen eller som en overgangssetning mellom Kristils historie og tjenestekortene.

#### 2. Manglende slagord (regel 6)
- **Lokasjon:** Hele siden
- **Problem:** Slagordet «Når omsorgen henger sammen.» finnes ikke på forsiden.
- **Forslag:** Bruk slagordet som undertekst under hero, eller som en linje over tjeneste-gridet.

#### 3. «plattform» som buzzword (regel 3)
- **Lokasjon:** `servicesTitle` — «Én plattform. Mange tjenester.»
- **Originaltekst:** «Én plattform. Mange tjenester.»
- **Problem:** «Plattform» brukt som tomt buzzword.
- **Forslag:** «Alt JodaCare kan gjøre for deg» eller «Tjenester for familier og kommuner»

#### 4. «plattform» i kortbeskrivelse (regel 3)
- **Lokasjon:** `pathCards[1].description` — «koordinert omsorg i én plattform»
- **Problem:** «Plattform» igjen.
- **Forslag:** «koordinert omsorg — alt samlet ett sted»

---

## /familie

**Filsti:** `src/i18n/messages/familie-page.ts`
**Total vurdering:** gul

### Funn

#### 1. «jodacare» med liten c (merkevare)
- **Lokasjon:** `scenarioP3` — «Med jodacare får hele familien...»; `whoSubtitle` — «jodacare passer for alle familier...»
- **Problem:** Bryter med SKILL.md-regelen om stor C i all løpende tekst.
- **Forslag:** Endre til «JodaCare» i begge tilfeller.

#### 2. Manglende hovedposisjon (regel 5)
- **Lokasjon:** Hero-seksjon
- **Problem:** Ingen variant av «JodaCare følger personen» brukes. Hero sier «Start et Familierom» — funksjonelt men uten posisjonering.
- **Forslag:** Legg til «JodaCare følger den du er glad i.» som undertekst eller eyebrow.

#### 3. Manglende slagord (regel 6)
- **Lokasjon:** CTA-footer
- **Problem:** «Gi familien din trygghet» er OK, men slagordet «Når omsorgen henger sammen.» ville styrket CTA-seksjonen.
- **Forslag:** Legg til slagordet som sekundærtekst i CTA-footer.

#### 4. «verktøy» i undertekst (regel 3 — usikker)
- **Lokasjon:** `featuresSubtitle` — «Enkle verktøy for å holde kontakten og koordinere hverdagen.»
- **Problem:** «Verktøy» er generisk. Flagges som usikker.
- **Forslag:** «Alt familien trenger for å holde kontakten og koordinere hverdagen.»

---

## /kommune

**Filsti:** `src/i18n/messages/kommune-page.ts`
**Total vurdering:** grønn

### Funn

#### 1. «plattform» i hero (regel 3)
- **Lokasjon:** `heroSubtitle` — «koordinert omsorg i én plattform»
- **Problem:** Gjenbruk av forsiden's buzzword.
- **Forslag:** «koordinert omsorg — samlet ett sted»

#### 2. Manglende hovedposisjon (regel 5)
- **Lokasjon:** Hero-seksjon
- **Problem:** «JodaCare for kommuner» er greit som tittel, men en variant av hovedposisjonen mangler.
- **Forslag:** Legg til «JodaCare følger personen — gjennom alle tjenestene.» som undertekst.

---

## /om

**Filsti:** `src/i18n/messages/om-page.ts`
**Total vurdering:** gul

### Funn

#### 1. «Vår reise» (regel 4)
- **Lokasjon:** `timelineTitle` — «Vår reise»
- **Problem:** «Vår/din reise» er eksplisitt forbudt.
- **Forslag:** «Tidslinje» eller «Fra 2016 til i dag»

#### 2. «jodacare» med liten c (merkevare)
- **Lokasjon:** Hele siden — heroTitle, founderP1-P3, storyQuote, partnersIntro, companyCardBody
- **Problem:** Konsekvent bruk av liten c i all løpende tekst.
- **Forslag:** Endre til «JodaCare» overalt i løpende tekst. (Merk: Kristils sitat i `storyQuote` er merket som hellig og skal ikke endres — men «jodacare» i løpende tekst rundt sitatet bør fikses.)

#### 3. «Vi samarbeider med ledende...» (regel 7 + regel 2)
- **Lokasjon:** `partnersIntro` — «Vi samarbeider med ledende forsknings- og teknologimiljøer for å utvikle jodacare videre.»
- **Problem:** Starter med «Vi» (regel 7). «Ledende» er en borderline superlativ (regel 2).
- **Forslag:** «JodaCare er utviklet i samarbeid med forsknings- og teknologimiljøer som SINTEF og UiA.»

#### 4. Manglende hovedposisjon (regel 5)
- **Lokasjon:** Hero-seksjon
- **Problem:** Om-siden forteller Kristils historie uten å forankre den i hovedposisjonen. Dette er en av sidene der «JodaCare følger personen» åpenbart hører hjemme.
- **Forslag:** Legg til hovedposisjonen som avslutning på Kristils fortelling, f.eks. etter founderP3.

#### 5. Vagt trust-signal (regel 8)
- **Lokasjon:** `founderP3` — «brukes av familier og kommuner over hele Norge»
- **Problem:** Vagt. Hvor mange kommuner? Hvilke?
- **Forslag:** «brukes daglig av Horten kommune og familier i Norge»

---

## /sikkerhet

**Filsti:** `src/i18n/messages/sikkerhet-page.ts`
**Total vurdering:** gul

### Funn

#### 1. «jodacare» med liten c (merkevare)
- **Lokasjon:** Hele siden — heroSubtitle, mainIntro, alle security features, compliance-tekster
- **Forslag:** Endre til «JodaCare» overalt.

#### 2. «Hvordan vi beskytter dine data» (regel 4)
- **Lokasjon:** `mainTitle`
- **Problem:** «Dine data» er en «din [abstrakt-substantiv]»-konstruksjon.
- **Forslag:** «Slik er dataene beskyttet» eller «Sikkerhet i alle lag»

#### 3. «Vi tar personvern og datasikkerhet på største alvor» (regel 2 + 7)
- **Lokasjon:** `heroSubtitle`
- **Problem:** Starter med «Vi tar» (regel 7). «På største alvor» er en superlativ-frase (regel 2).
- **Forslag:** «JodaCare er bygget med sikkerhet i kjernen. Personvern og datasikkerhet er innebygd i arkitekturen.»

#### 4. «Vi stiller gjerne opp...» (regel 7)
- **Lokasjon:** `ctaSubtitle`
- **Originaltekst:** «Vi stiller gjerne opp for å forklare nærmere hvordan jodacare fungerer og beskytter dine data.»
- **Problem:** Starter med «Vi» + «dine data» igjen.
- **Forslag:** «Har du spørsmål om hvordan JodaCare ivaretar personvern og datasikkerhet? Ta kontakt.»

#### 5. Vagt trust-signal (regel 8)
- **Lokasjon:** `trustStats` — «Kunder over hele landet»
- **Problem:** Vagt. Hvilke kunder?
- **Forslag:** «Horten kommune m.fl.» eller «Kommunale kunder»

---

## /teknologi

**Filsti:** `src/i18n/messages/teknologi-page.ts`
**Total vurdering:** rød

### Funn

#### 1. «jodacare» med liten c (merkevare)
- **Lokasjon:** Hele siden
- **Forslag:** Endre til «JodaCare» overalt.

#### 2. «sømløs innlogging» (regel 3)
- **Lokasjon:** `authMethods[2].description` — «Single sign-on (SSO) via organisasjonens Azure Active Directory for sømløs innlogging.»
- **Problem:** «Sømløs» er eksplisitt forbudt.
- **Forslag:** «...for innlogging uten ekstra passord.»

#### 3. «sømløs informasjonsflyt» (regel 3)
- **Lokasjon:** `integrations[2].description` — «Integrasjon mot elektroniske pasientjournaler som DIPS og Profil for sømløs informasjonsflyt.»
- **Problem:** «Sømløs» igjen.
- **Forslag:** «...for informasjonsflyt uten manuell overføring.»

#### 4. «brukt av noen av verdens største tjenester» (regel 2/8)
- **Lokasjon:** `techIntro`
- **Problem:** Vag superlativ. Hvilke tjenester?
- **Forslag:** «Teknologier som er velprøvde, godt vedlikeholdte og har et stort utviklerøkosystem.»

#### 5. «Vi har valgt teknologier...» (regel 7)
- **Lokasjon:** `techIntro`
- **Problem:** Starter med «Vi har valgt».
- **Forslag:** «JodaCare bruker teknologier som er velprøvde...»

#### 6. «Vi utforsker hvordan kunstig intelligens...» (regel 7)
- **Lokasjon:** `aiIntro`
- **Problem:** Starter med «Vi utforsker».
- **Forslag:** «Kunstig intelligens kan gjøre hverdagen enklere for helsepersonell — uten å gå på bekostning av personvern. Slik jobber JodaCare med KI:»

#### 7. «designet for å spille sammen med» (regel 3 — usikker)
- **Lokasjon:** `integrationsIntro` — «jodacare er designet for å spille sammen med resten av IT-landskapet i kommunen.»
- **Problem:** «IT-landskapet» er konsulentspråk, men akseptabelt på en teknologiside. Flagges som usikker.

---

## /kontakt

**Filsti:** `src/components/pages/KontaktPageView.tsx`
**Total vurdering:** grønn

### Funn

#### 1. «vi er her for å hjelpe» (regel 7)
- **Lokasjon:** `heroSubtitle` — «Enten du har spørsmål, ønsker en demo, eller vil komme i gang — vi er her for å hjelpe.»
- **Problem:** Mild «vi»-form.
- **Forslag:** «Har du spørsmål, ønsker en demo, eller vil komme i gang? Ta kontakt.»

---

## /omsorgsbolig

**Filsti:** `src/i18n/messages/omsorgsbolig-page.ts`
**Total vurdering:** grønn

### Funn

#### 1. Manglende hovedposisjon (regel 5)
- **Lokasjon:** Hero
- **Problem:** Heroen er god («Beboeren er aldri alene. Familien er alltid nær.»), men en variant av «JodaCare følger beboeren» mangler.
- **Forslag:** Legg til «JodaCare følger beboeren.» som eyebrow over heroen.

#### 2. «Vi hjelper hele veien» i steg-tittel (regel 7 — usikker)
- **Lokasjon:** `stepsSectionTitle` — «Enkelt å innføre. Vi hjelper hele veien.»
- **Problem:** «Vi hjelper» er mild selger-form, men kontekstuelt OK for implementeringsstøtte.
- **Forslag:** Behold — flagget som usikker.

---

## /bpa

**Filsti:** `src/i18n/messages/bpa-page.ts`
**Total vurdering:** grønn

### Funn

#### 1. «verktøy» i hero (regel 3 — usikker)
- **Lokasjon:** `heroSubtitle` — «med et enkelt verktøy for brukeren selv»
- **Problem:** «Verktøy» er generisk.
- **Forslag:** «med Jodabook for brukeren selv» (bruk produktnavn)

#### 2. Manglende hovedposisjon (regel 5)
- **Lokasjon:** Hero
- **Problem:** Ingen variant av «JodaCare følger brukeren» brukes.
- **Forslag:** Legg til som eyebrow.

---

## /avlastning

**Filsti:** `src/i18n/messages/avlastning-page.ts`
**Total vurdering:** grønn

### Funn

#### 1. «Én plattform for alle rundt barnet» (regel 3)
- **Lokasjon:** `perspectivesTitle`
- **Problem:** «Plattform» som buzzword.
- **Forslag:** «Alle rundt barnet — samlet ett sted» eller «For alle som er rundt barnet»

#### 2. Manglende hovedposisjon (regel 5)
- **Lokasjon:** Hero
- **Problem:** «JodaCare følger barnet» mangler. Denne varianten brukes nå på /barnevern, men passer også for avlastning.
- **Forslag:** Vurder «JodaCare følger barnet — også i avlastning.» som eyebrow.

---

## /jodavisit

**Filsti:** `src/i18n/messages/jodavisit-page.ts`
**Total vurdering:** gul

### Funn

#### 1. «Én løsning for alle» (regel 3)
- **Lokasjon:** `userGroupsTitle`
- **Problem:** «Løsning» er eksplisitt flagget i reglene.
- **Forslag:** «For alle som er involvert» eller «Slik fungerer det for hver rolle»

#### 2. «Videobesøk via innebygd løsning» (regel 3)
- **Lokasjon:** `features[0].title`
- **Problem:** «Løsning» igjen.
- **Forslag:** «Videobesøk innebygd i JodaCare»

#### 3. Manglende hovedposisjon (regel 5)
- **Lokasjon:** Hero
- **Problem:** Ingen variant av hovedposisjonen.
- **Forslag:** «JodaCare følger den hjemmeboende.» som eyebrow.

---

## /implementering

**Filsti:** `src/i18n/messages/implementering-page.ts`
**Total vurdering:** grønn

### Funn

#### 1. «Verktøy for brukerstyrt personlig assistanse» (regel 3)
- **Lokasjon:** `related[1].description` — «Verktøy for brukerstyrt personlig assistanse i kommunen.»
- **Problem:** «Verktøy» er generisk.
- **Forslag:** «JodaCare for brukerstyrt personlig assistanse i kommunen.»

---

## Delte komponenter

### WhoUsesIt.tsx

**Total vurdering:** gul

#### 1. «jodacare» med liten c (merkevare)
- **Lokasjon:** Tittel «Hvem bruker jodacare?» og undertekst «jodacare bygger bro mellom...»
- **Forslag:** «JodaCare» med stor C.

#### 2. «samhandling» (regel 3)
- **Lokasjon:** Kommuner-kortet: «dokumentere samhandling»
- **Problem:** «Samhandling» er flagget — bruk «samarbeid» eller omformuler.
- **Forslag:** «dokumentere samarbeidet med pårørende»

### Security.tsx

#### 1. «Vi tar personvern på største alvor» (regel 2 + 7)
- **Lokasjon:** Default subtitle
- **Forslag:** «Personvern og datasikkerhet er innebygd i arkitekturen.»

### Footer (site.ts)

#### 1. «En sikker plattform for kommunikasjon...» (regel 3)
- **Lokasjon:** `footer.tagline`
- **Problem:** «Plattform» i tagline.
- **Forslag:** «Trygghet og verdighet i hverdagen — for sårbare mennesker og de som bryr seg om dem.» Eller bruk slagordet «Når omsorgen henger sammen.»

---

## Sammendrag av funn

| Side | Vurdering | Funn |
|---|---|---|
| / (forsiden) | gul | 4 |
| /familie | gul | 4 |
| /kommune | grønn | 2 |
| /om | gul | 5 |
| /sikkerhet | gul | 5 |
| /teknologi | rød | 7 |
| /kontakt | grønn | 1 |
| /omsorgsbolig | grønn | 2 |
| /bpa | grønn | 2 |
| /avlastning | grønn | 2 |
| /jodavisit | gul | 3 |
| /implementering | grønn | 1 |
| Delte komponenter | gul | 4 |
| **Totalt** | | **42** |

### De tre viktigste mønstrene

1. **«jodacare» med liten c** — Systematisk bruk av feil skrivemåte i løpende tekst på 6+ sider. Enklest å fikse som batch.
2. **Manglende hovedposisjon** — «JodaCare følger personen» (eller segmentvariant) brukes aldri på noen side unntatt /barnevern. Forsiden, /om og segmentsidene bør alle forankre denne posisjonen.
3. **«Vi»-form og salgsspråk** — Mange setninger starter med «Vi tilbyr», «Vi tar», «Vi har valgt». Disse bør omskrives til problem- eller brukerfokus.

---

## Anbefalt rekkefølge for omskriving

1. **Batch: jodacare → JodaCare** — Én operasjon som fikser det mest gjennomgripende funnet på tvers av alle sider. Gjøres først.
2. **/teknologi** (rød) — Flest brudd: to «sømløs», to «Vi»-setninger, vage superlativer. Teknisk side, men likevel kundevendt.
3. **/sikkerhet** (gul) — «Dine data» to ganger, «Vi tar på største alvor», vagt trust-signal. Viktig side for tillit.
4. **/ (forsiden)** (gul) — Mangler hovedposisjon og slagord. Høyest synlighet.
5. **/om** (gul) — «Vår reise», manglende hovedposisjon, vagt trust-signal. Kristils historie er sterk, men trenger forankring.
6. **/familie** (gul) — Manglende hovedposisjon og liten c.
7. **/jodavisit** (gul) — To «løsning»-tilfeller.
8. **Delte komponenter** (gul) — WhoUsesIt og Security. Påvirker flere sider.
9. **Resten** (grønn) — Mindre justeringer, kan gjøres samlet.
