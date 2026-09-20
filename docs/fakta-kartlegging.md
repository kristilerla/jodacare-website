# Faktaverdier på jodacare.no

_Kartlagt 20. september 2026 mot `origin/main` (`5c287c1`). Read-only. Ingen filer endret._

Formålet er å finne hvert sted en faktaverdi står hardkodet, slik at den kan
hentes fra `fakta/` i `jodacare-kunnskap` i stedet.

Rettighetsveilederen (`src/content/rettigheter.json`,
`src/components/rettigheter/`) er utelatt overalt.

---

## Oppsummering

| Kategori | Forekomster | Finnes i `fakta/` i dag |
|---|---|---|
| Priser og beløp | 39 | Delvis |
| Varighet og pakkestørrelse | 30 | Ja |
| Segmentstatus | 18 badges + sidetekster | **Nei** |
| Modullister | 5 steder | Ja, men se motsigelse |
| Innlogging | 30 | Ja |
| Kontakt og selskap | 19 | Delvis |
| Lenker til appen | 5 | **Nei** |
| Tillitssignaler med årstall | 13 | **Nei** |

Nettsiden har **ingen** felles kilde for disse verdiene i dag. Hver side har
sin egen streng, i to språkvarianter.

## Slik er oversettelsene løst

Ingen i18n-bibliotek. Hver side har en fil i `src/i18n/messages/<side>-page.ts`
med `const no: XContent = {...}`, `const en: XContent = {...}` og en
`getXContent(locale)`. Felles tekst ligger i `src/i18n/site.ts` og
`src/i18n/nb.json`. Språk velges av `x-next-locale`-headeren, og engelske
ruter ligger under `/en/`.

**Konsekvensen for denne oppgaven:** hver faktaverdi står minst to ganger, én
gang per språk. Et tall som 2 990 står i `no`-objektet og i `en`-objektet i
samme fil.

---

## 1. Priser og beløp

| Fil og linje | Verdi | Type | I `fakta/` | Stemmer |
|---|---|---|---|---|
| `src/app/priser/page.tsx:9,13` | 2 990, 28 000 | Metadata | Ja | Ja |
| `src/app/en/priser/page.tsx:9,13` | 10 service recipients | Metadata | Ja | Ja |
| `src/i18n/messages/priser-page.ts:57` | 2 990 | Kortpris | Ja | Ja |
| `src/i18n/messages/priser-page.ts:74` | 28 000 | Oppstart | Ja | Ja |
| `src/i18n/messages/priser-page.ts:92,93,96,97` | 35 880, 28 000, 63 880 | Tabell år 1 og 2 | **Nei, avledet** | Regnestykket stemmer |
| `src/i18n/messages/priser-page.ts:121,142,160` | 10 tjenestemottakere, 12 måneder | Pakke og binding | Ja | Ja |
| `src/i18n/messages/home.ts:83,90` | 2 990, 28 000 | Kort på forsiden | Ja | Ja |
| `src/i18n/messages/kommune-page.ts:73,146,170` | 28 000, 2 990, 10 | Pris og pakke | Ja | Ja |
| `src/i18n/messages/implementering-page.ts:48` | 28 000 | Oppstart | Ja | Ja |
| `src/i18n/messages/avlastning-page.ts:92,179` | 2 990, 10 | Pris | Ja | Ja |
| `src/i18n/messages/bpa-page.ts:90,173` | 2 990, 10 | Pris | Ja | Ja |
| `src/i18n/messages/barnevern-page.ts:301,581` | 2 990, 10 | Pris | Ja | Ja |
| `src/i18n/messages/omsorgsbolig-page.ts:131` | 2 990 | Pris | Ja | Ja |
| `src/i18n/messages/familie-page.ts:92,112,155,188` | 299 | Familierom | Ja | Ja |
| `src/i18n/messages/familie-page.ts:96` | 14 dager | Prøveperiode | Ja | Ja |
| `src/i18n/messages/bruksvilkar-page.ts:80,166` | 299, 14 dager | Vilkår | Ja | Ja |
| `src/i18n/messages/bruksvilkar-page.ts:180` | 12 months | Binding | Ja | Ja |
| `src/i18n/nb.json:116,118` | 2 990, 28 000 | Felles tekst | Ja | Ja |
| `src/components/brief/CompanyBrief.tsx:257,269,270,273,277,433` | 2 990, 28 000, 63 880, 35 880, 299, à 10, 12 måneder, 14 dager | Investorbrief | Delvis | Ja |

**Ingen treff** på «Pris settes basert på» eller «Pris avhenger av omfang».
De setningene finnes ikke på nettsiden.

**Avledede tall:** 63 880 = 12 × 2 990 + 28 000. 35 880 = 12 × 2 990. Begge
stemmer. De skal regnes ut i koden, ikke ligge i fakta.

## 2. Segmentstatus

Statusmerkene ligger i `src/i18n/messages/home.ts`, `services`-arrayet, i to
språkvarianter. Hver segmentside gjentar status i egen tekst.

| Segment | Badge på forsiden | Rute | Linje i `home.ts` |
|---|---|---|---|
| Familierom | Kommer 2027 | `/familie` | 108 |
| Omsorgsbolig / Hub | Pilot 2027 | `/omsorgsbolig` | 115 |
| BPA | Lanseres høst 2026 | `/bpa` | 122 |
| Avlastning | Lanseres høst 2026 | `/avlastning` | 129 |
| Barnevern | Kommer Q2 2027 | `/barnevern` | 136 |
| JodaVisit | Kommer 2027 | `/jodavisit` | 142 |

I tillegg tre kort høyere opp på siden (`home.ts:68,78,90`): «Kommer 2027»
for familien, «Lanseres høst 2026» for kommuner, og «Oppstart kr 28 000» for
implementering. Det siste er en pris brukt som statusmerke.

Segmentsidene gjentar status som Q4 2026-formuleringer i brødtekst, tettest i
`avlastning-page.ts` (10 forekomster) og `barnevern-page.ts` (8).

## 3. Modullister

| Fil og linje | Tekst |
|---|---|
| `src/i18n/messages/priser-page.ts:103` | «Boka, kalender, meldinger og rollebasert tilgang. Grunnmodulen …» |
| `src/i18n/messages/priser-page.ts:204` | Engelsk variant |
| `src/components/brief/CompanyBrief.tsx:205` | «Boka, kalender, meldinger og rollebasert tilgang. Det er det kunden …» |
| `src/i18n/messages/avlastning-page.ts:177` | «Boka, calendar, messages and a team around each child.» |
| `src/i18n/messages/bpa-page.ts:171` | «Boka, calendar, messages and a team around each user.» |

Se motsigelse 7.

## 4. Innlogging

30 forekomster. De viktigste:

| Fil og linje | Påstand |
|---|---|
| `src/components/sections/Security.tsx:15,16,62` | ID-porten med BankID, Buypass, Commfides |
| `src/app/sikkerhet/page.tsx:9,13` | ID-porten i metadata |
| `src/app/barnevern/page.tsx:9,13` | ID-porten i metadata |
| `src/app/layout.tsx:38` | ID-porten i metadata |
| `src/i18n/messages/barnevern-page.ts:275,277` | ID-porten, BankID, Buypass, Commfides |
| `src/components/brief/CompanyBrief.tsx:228` | HelseID og ID-porten |
| `src/components/brief/CompanyBrief.tsx:137,277,294,433` | Vipps, knyttet til familier |

Vipps omtales konsekvent som veien inn for **familier**, ikke for pårørende
generelt. Det stemmer med modellen i `fakta/innlogging.yaml`.

Ingen treff på «engangskode» eller «one-time code». Den droppede metoden står
ikke på nettsiden.

## 5. Kontakt og selskap

| Fil og linje | Verdi | I `fakta/` |
|---|---|---|
| `src/components/layout/Footer.tsx:37,41` | post@jodacare.com | Ja, `kontakt.yaml` |
| `src/components/layout/Footer.tsx:44,48` | 479060643, «906 06 433» | Ja |
| `src/components/layout/Footer.tsx:113` | «JodaCare AS» med `new Date().getFullYear()` | **Nei** |
| `src/components/sections/ContactForm.tsx:97,105,110,118,139,140` | E-post og telefon, seks steder | Ja |
| `src/i18n/messages/bruksvilkar-page.ts:39` | org.nr. 937 323 565 | **Nei** |
| `src/components/brief/CompanyBrief.tsx:439` | org.nr. 937 323 565 | **Nei** |
| `src/app/layout.tsx:40,41,42` | JodaCare AS i metadata | **Nei** |

**Bunnteksten sier «JodaCare AS».** Den er riktig.

Åpningstiden «mandag til fredag 08:00 til 16:00» står i `kontakt.yaml`, men
finnes ikke på nettsiden.

## 6. Lenker til appen

| Fil og linje | Lenke |
|---|---|
| `src/components/layout/AnnouncementBanner.tsx:37` | `https://app.jodacare.no` |

Det er den eneste. **Ingen treff på `app.jodaskills.com`**, og ingen egen
registreringslenke for Familierom. Se motsigelse 6.

## 7. Tillitssignaler med årstall

| Fil og linje | Tekst |
|---|---|
| `src/i18n/site.ts:132,134,226,228` | «fra 2016 fungerer fortsatt», «2016 og oppgradert i 2018 er fortsatt i drift» |
| `src/i18n/messages/home.ts:98` | «siden 2016» |
| `src/i18n/messages/kommune-page.ts:137,161` | «siden 2016», «since 2016» |
| `src/i18n/messages/bpa-page.ts:82,165` | «siden 2016», «since 2016» |
| `src/i18n/messages/om-page.ts:37,38,79,80` | Tidslinje 2016 og 2018 |
| `src/i18n/messages/sikkerhet-page.ts:180,223` | 2016 som merkelapp |

Årstallet 2016 er konseptets etableringsår. Det hører hjemme i
`fakta/selskap.yaml`.

---

## Motsigelser mot `fakta/`

Ingen av disse er løst. Produkteier avgjør.

**1. Familierom: status mot pris.**
Forsiden sier «Kommer 2027» (`home.ts:108`), og `CompanyBrief.tsx:137,277,294,433`
sier «kommer i 2027». `fakta/moduler.yaml` fører familierom som
`tilgjengelig` i `2.0`. Samtidig oppgir `familie-page.ts` pris og prøveperiode
som om tjenesten kan kjøpes. Nettsiden er også internt uenig med seg selv:
et produkt som kommer i 2027 har ikke en aktiv månedspris.

**2. BPA.** Forsiden: «Lanseres høst 2026». `moduler.yaml`: `beta` i `2.0`,
`kommer` i `ny`.

**3. Barnevern.** Forsiden: «Kommer Q2 2027». `moduler.yaml`: `beta` i `2.0`,
`kommer` i `ny`. Segmentsiden bruker samtidig «Q4 2026» flere steder.

**4. Omsorgsbolig og Hub.** Forsiden: «Pilot 2027». `moduler.yaml`: hub er
`beta` i `2.0`.

**5. JodaVisit finnes ikke i `moduler.yaml`.** Nettsiden har egen side, eget
kort og egen statusmerking. Skal den være en modul, et segment, eller begge?

**6. App-lenken peker på v1.** `AnnouncementBanner.tsx:37` lenker til
`app.jodacare.no`, som er gammel produksjon. 2.0 ligger på
`app.jodaskills.com` og `app2.jodacare.no`. Hvilken skal banneret peke på?

**7. Grunnmodulsetningen.** Kjent fra før, skal ikke løses her.
Nettsiden sier «Boka, kalender, meldinger og rollebasert tilgang», mens
`moduler.yaml` sier at nye JodaCare lanseres med feed, Bøker, beskjeder og
tilgang. Setningen står fem steder, listet i avsnitt 3 over. Inntil
produkteier har avgjort saken skal ingen side liste innholdet i grunnmodulen
fra `moduler.yaml`.

**8. HelseID.** `CompanyBrief.tsx:228` nevner HelseID som en innloggingsmetode.
`fakta/innlogging.yaml` har `status_i_prod: ubekreftet` på den. Nettsiden
omtaler den uten forbehold.

---

## Avvik fra det oppgaven forutsatte

**Statusmerkene er ikke «Tilgjengelig nå», «Beta 2026» og «Kommer».**
De faktiske verdiene er fritekst med årstall: «Kommer 2027», «Pilot 2027»,
«Lanseres høst 2026», «Kommer Q2 2027», og «Oppstart kr 28 000». En
statuskomponent må derfor ta `tilgjengelig`, `beta` eller `kommer` fra fakta
og mappe til nettsidens egne tekster, som fortsatt må kunne inneholde årstall.

**`/priser` finnes allerede.** Ruten ligger i `src/app/priser/` og i
`src/app/en/priser/`, og er lenket fra hovedmenyen to steder i `site.ts`
(linje 89 og 110, og 184 og 204 på engelsk). Den er publisert i dag.
Oppgaven sier at siden ikke skal opprettes, men den eksisterer, og den
inneholder grunnmodulsetningen fra motsigelse 7.

**Sykehjem finnes ikke.** Verken som side, kort eller segment. Oppgaven
forventet det blant segmentene.

**Setningene «Pris settes basert på …» og «Pris avhenger av omfang …»
finnes ikke.** Ingen treff.
