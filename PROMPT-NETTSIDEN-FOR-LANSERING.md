# Prompt til Backend-Claude: jodacare.no før lansering av nye JodaCare

Prosjekt: `~/Dev/jodacare-website` (Next.js 14, App Router, Vercel). All sidetekst ligger i `src/i18n/messages/*.ts` med én `no`-blokk og én `en`-blokk per fil. Hver endring under gjøres i begge språk. Engelsk tekst oversettes tilsvarende, i samme tone.

Bakgrunn: Nye JodaCare lanseres høsten 2026 med en grunnmodul. Nettsiden beskriver i dag funksjoner fra dagens web-app som ikke er med i første versjon, og har statusord som er feil. Denne prompten retter det.

## Regler for all tekst

- JodaCare med stor C i løpende tekst. Jodapro med liten p.
- Ingen tankestreker. Ingen «ikke X, men Y»-konstruksjoner. Setninger som står alene.
- Ingen reklametone, ingen superlativer.
- Statusord brukes likt på alle sider, og bare disse:
  - `Lanseres høst 2026` for grunnmodulen og tjenestene som bruker den (kommuner, BPA, avlastning)
  - `Kommer Q4 2026`, `Kommer Q1 2027`, `Kommer Q2 2027` for moduler med kvartal
  - `Pilot 2027` for Hub
  - `Kommer 2027` for Familierom og JodaVisit
  - `Tilgjengelig nå` skal ikke forekomme noe sted før lanseringsdagen
- Gammel JodaCare (app.jodacare.no) nevnes ikke som alternativ i noen tekst. «Logg inn»-knappen i header og AnnouncementBanner beholdes uendret frem til lanseringsdagen, siden dagens kunder bruker den.
- Aiantic skal ikke nevnes noe sted.

## Hva første versjon inneholder

Bruk denne listen når du vurderer om en setning kan stå:

- Innlogging med ID-porten
- Team rundt hver tjenestemottaker, en person kan være i flere team
- Boka med bilder og video inntil ett minutt
- Beskjeder med bilder og video
- Kalender
- Rollebasert tilgang: bare teamet rundt tjenestemottakeren ser innholdet
- KAI som hjelp til selve appen
- Web, iOS og Android

Ikke med: Familierom, Vipps, sjekklister og rutiner, hendelseslogg, Jodabook, videosamtale, bekymringsmelding, livshistorie, Tidslinjen, Hub, barnevern og samvær, JodaVisit, IoT.

## Moduler og kvartal

| Modul | Kvartal |
|---|---|
| Sjekklister og rutiner | Q4 2026 |
| Hendelseslogg med delingskontroll | Q4 2026 |
| Jodabook fase 1 (Boka og Tidslinjen) | Q1 2027 |
| Bekymringsmelding | Q1 2027 |
| Videosamtale | Q1 2027 |
| Barnevern og samvær | Q2 2027 |
| Livshistorie | Q2 2027 |
| Hub for omsorgsbolig | Pilot 2027 |
| Familierom med Vipps | 2027 |
| JodaVisit | 2027 |

## Steg 0: kartlegg først

Før du endrer noe: list alle forekomster av `Tilgjengelig nå`, `Available now`, `Beta 2026`, `Vipps`, `Aiantic`, `Q2 2026`, `Silje`, `Supabase`, `Vercel`, `Brevo`, `register?flow`, `app.jodaskills.com` i `src/`. Ta med `src/lib/seo.ts`, `src/i18n/site.ts` og `src/components/brief/CompanyBrief.tsx`. Vis listen, så gjør endringene.

## Steg 1: `src/i18n/messages/home.ts`

- `pathCards[0]` (JodaCare for familien): `description` endres til «Hold deg oppdatert på hverdagen til den du er glad i, uansett avstand.» Vipps-setningen tas ut. `badge: 'Kommer 2027'`. `cta: 'Meld interesse'`. `highlighted: false`.
- `pathCards[1]` (JodaCare for kommuner): `badge: 'Lanseres høst 2026'`. `highlighted: true`. Pris og CTA beholdes.
- `pathCards[2]` (implementering): uendret.
- `trustItems`: `'ID-porten og Vipps'` endres til `'Innlogging med ID-porten'`.
- `services`: Familierom `badge: 'Kommer 2027'`. Omsorgsbolig / Hub `badge: 'Pilot 2027'`. BPA `badge: 'Lanseres høst 2026'`. Avlastning `badge: 'Lanseres høst 2026'`. Barnevern `badge: 'Kommer Q2 2027'`. JodaVisit `badge: 'Kommer 2027'`.
- `badgeColor` for hver badge: bruk samme fargeklasse for alle `Lanseres høst 2026` (grønn), samme for alle `Kommer ...` (nøytral), og en egen for `Pilot 2027`. Sjekk at klassene finnes i `tailwind.config`.

## Steg 2: `src/i18n/messages/kommune-page.ts`

- Alle `badge: 'Beta 2026'` endres etter samme nøkkel som på forsiden (BPA og avlastning `Lanseres høst 2026`, Hub `Pilot 2027`, barnevern `Kommer Q2 2027`, JodaVisit `Kommer 2027`).
- `trustItems`: `'ID-porten og Vipps'` endres til `'Innlogging med ID-porten'`.
- `heroSubtitle` beholdes.

## Steg 3: `src/i18n/messages/priser-page.ts`

- Lisenskortet: listen over hva som inngår beholdes. Legg til én linje øverst i kortet: «Lanseres høst 2026.»
- `modulesP1`/`modulesP2` og modullisten: hver modul får kvartal i parentes etter navnet, etter tabellen over. Setningen «Kunder med løpende avtale får beskjed i god tid før en modul lanseres» beholdes. Legg til: «Endres tidsplanen, oppdaterer vi den her.»
- Familierom-seksjonen: pris kr 299 og 14 dager gratis beholdes. Tekst: «Familierom kommer i 2027. Meld interesse, så sier vi fra når det er klart.» CTA peker til `/kontakt`. Ingen knapp for å starte eller prøve.

## Steg 4: `src/i18n/messages/familie-page.ts`

Siden gjøres om til en interesseside.

- `heroTitle: 'Familierom kommer i 2027'`. `heroSubtitle` beholdes. `heroBadge: 'Kommer 2027'`.
- `primaryCta: 'Meld interesse'` med href `/kontakt`. `secondaryCta` og `secondaryCtaHref` beholdes.
- `familyFeaturesNo`: fjern punktet «En livshistorie som vokser med familien». Behold de fire andre.
- `stepsNo`: tittel `stepsTitle` endres til «Slik vil det fungere». Steg 1 endres til «Opprett Familierom» med beskrivelse «Fortell oss hvem som skal få omsorg.» Resten beholdes.
- `pricingNo`: fjern `'AI-generert livshistorie'` fra `features`. `pricingFootnote` endres til «Prisen blir 299 kr per måned uten binding, med fjorten dager gratis først.» `badge: 'Kommer 2027'`. `cta` peker til `/kontakt` med tekst «Meld interesse».
- `pricingSubtitle` endres til «Prisen er satt. Betalingsløsningen kommer sammen med Familierom.»
- `ctaTitle` beholdes. `ctaSubtitle: 'Legg igjen e-post, så sier vi fra når Familierom er klart.'` `ctaPrimary: 'Meld interesse'`.
- Alle setninger med «Start gratis», «Kom i gang på minutter», «Ingen kredittkort kreves» tas ut.

## Steg 5: `src/i18n/messages/bpa-page.ts`

- `heroSubtitle` endres til: «JodaCare samler hele omsorgsteamet rundt brukeren, med Boka for assistentene og full oversikt for koordinator og familie.»
- `userGroups[1]` (assistentene): fjern «felles rutiner og sjekklister». Ny tekst: «Assistentene bruker Boka til kommunikasjon i teamet. Informasjonen er alltid oppdatert og alltid tilgjengelig.»
- `userGroups[0]` (brukeren): legg til til slutt: «Jodabook kommer Q1 2027.»
- `features`: Jodabook `title: 'Jodabook for brukeren (kommer Q1 2027)'`. Rutiner og sjekklister `title: 'Rutiner og sjekklister (kommer Q4 2026)'`. Hendelseslogg `title: 'Hendelseslogg (kommer Q4 2026)'` og fjern setningen om at varsler går automatisk. Omsorgsteam-modell uendret. KAI `description: 'KAI hjelper deg å finne frem i JodaCare og forklarer hvordan appen brukes.'`
- `referenceBody`: fjern setningen om Silje Figved-nettverket. Behold Horten-setningen.
- `statusBadge: 'Lanseres høst 2026'`. `statusTitle: 'Bli med fra starten'`. `statusBody: 'Nye JodaCare lanseres høsten 2026 med Boka, kalender, beskjeder og team rundt hver bruker. Nye moduler kommer kvartal for kvartal, og kommunen velger selv hvilke den vil ha.'`

## Steg 6: `src/i18n/messages/avlastning-page.ts`

- `heroSubtitle` beholdes.
- `perspectives`: For barnet: legg til «Jodabook kommer Q1 2027.» For ansatte: «Ansatte skriver i Boka der jobben skjer, og foreldrene ser det samme dagen. Hendelseslogg kommer Q4 2026.» For koordinator: «Koordinator setter opp team, plasserer ansatte og ser hvem som har tilgang til hva.» Ordene «full oversikt over alle barn» tas ut.
- `features`: Delte rutiner `title: 'Delte rutiner mellom hjem og avlastning (kommer Q4 2026)'`. Jodabook `title: 'Jodabook for barnet (kommer Q1 2027)'`. Delingskontroll for hendelseslogg `title: 'Hendelseslogg med delingskontroll (kommer Q4 2026)'`. Bekymringsmelding `title: 'Bekymringsmelding (kommer Q1 2027)'`.
- Legg til et nytt første punkt i `features`: `title: 'Boka: hverdagen delt mellom hjem og avlastning'`, `description: 'Ansatte skriver, foreldrene leser og svarer. Bilder og korte videoer følger med. Bare teamet rundt barnet ser innholdet.'` Utvid typen `AvlastningContent` om nødvendig.
- `statusBadge: 'Lanseres høst 2026'`. `statusTitle: 'Slik bygges JodaCare for avlastning'`. `statusBody: 'Nye JodaCare lanseres høsten 2026 med Boka, kalender, beskjeder og team rundt hvert barn. Rutiner og hendelseslogg kommer Q4 2026, Jodabook og bekymringsmelding Q1 2027.'`

## Steg 7: `src/i18n/messages/omsorgsbolig-page.ts`

- Legg til en ny nøkkel `noticeBody` rett etter hero: «JodaCare Hub er under utvikling med pilot i 2027. Grunnmodulen med Boka, kalender og beskjeder lanseres for omsorgsbolig høsten 2026.» Render den som en rolig informasjonsboks under hero i `OmsorgsboligPageView.tsx`.
- `hubPerspectives[2]` (ansatte): «Ansatte skriver i Boka der jobben skjer. Hendelseslogg og sjekklister kommer Q4 2026, bekymringsmelding Q1 2027.»
- `features`: IoT-sensorer `title: 'IoT-sensorer, senere'`. Øvrige beholdes, de beskriver Hub.
- `statusBadge: 'Pilot 2027'`. `statusP1: 'JodaCare Hub er under utvikling og prøves ut sammen med de første kommunene i 2027. Pilotkommuner får tett oppfølging og er med på å forme det endelige produktet.'`
- `priceNote` beholdes.

## Steg 8: `src/i18n/messages/barnevern-page.ts`

- `partnerIntro`: fjern parentesen «(Aiantic AB)». Ny tekst: «JodaCare og Mai Life utfyller hverandre. Sammen dekker vi to sider av barnevernet:»
- `features`: Samværsplaner `title: 'Samværsplaner med status-flyt (kommer Q2 2027)'`. Daglig logg: fjern setningen om AI-oppsummering, behold bilder, notater og hendelser. Hendelseslogg `title: 'Hendelseslogg (kommer Q4 2026)'`. Jodabook `title: 'Jodabook for barn med særskilte behov (kommer Q1 2027)'` og fjern «tilgjengelig i App Store og Google Play». Informasjonsbarrierer og Full audit trail beholdes som beskrivelse av modulen.
- `statusColumns` skrives om til tre kolonner:
  1. `title: 'Lanseres høst 2026'`, items: «Boka, kalender og beskjeder», «Team rundt hvert barn med rollebasert tilgang», «ID-porten-innlogging».
  2. `title: 'Kommer 2026 og 2027'`, items: «Hendelseslogg (Q4 2026)», «Jodabook (Q1 2027)», «Samværsmodul med fire roller og informasjonsbarrierer (Q2 2027)».
  3. `title: 'Etter første pilot'`, items: «Tilpasning til kommunens fagsystem», «Integrasjoner mot Mai Life», «Bredere utrulling i flere kommuner». Setningen med Aiantic tas ut.
- `statusSubtitle` endres til «Barnevernsmodulen bygges på grunnmodulen i nye JodaCare og tas i bruk i etapper sammen med pilotkommunene.»
- Seksjonen «Erfaringer» og «Hva dere får igjen»: les gjennom og fjern setninger som forutsetter at samvær, hendelseslogg eller AI-oppsummering finnes i dag. Skriv dem i fremtid.
- I `teknologi-page.ts` (KI-seksjonen): setningen «Hendelsesloggen registrerer allerede søvn, humør og adferd daglig» endres til «Hendelsesloggen kommer Q4 2026 og registrerer søvn, humør og adferd daglig.» Setningen om automatisk oppsummering av dagbokinnlegg endres til fremtid: «Automatisk oppsummering kommer sammen med livshistorie-modulen i 2027.»

## Steg 9: `src/i18n/messages/jodavisit-page.ts`

- `statusBadge: 'Kommer 2027'`. `statusBody: 'JodaVisit er under utvikling og kommer i 2027. Ta kontakt for å melde din kommune som pilot.'`
- `userGroups[2]` (familien): «Familierommet» erstattes med «familien». Ny tekst: «Familien ser hverdagen i JodaCare, kan starte videosamtale med ett trykk, og holder seg oppdatert uten å ringe hjemmetjenesten.»

## Steg 10: `src/i18n/messages/sikkerhet-page.ts` og `teknologi-page.ts`

- Sikkerhet, ID-porten-kortet: «JodaCare bruker innlogging med ID-porten på sikkerhetsnivå 4.» Vipps og engangskode tas ut.
- Sikkerhet, «Data lagret i Europa»: «Databasen og tjenestene kjører i Stockholm, og AI-tjenestene er europeiske gjennom Mistral i Paris.» Supabase, Vercel og Brevo tas ut av teksten. E-postleverandør nevnes ikke før Bård har bekreftet hvilken som brukes.
- Sikkerhet, «Full sporbarhet»: endres til «Tilgang til innhold logges automatisk med tidsstempel og bruker-ID.» Ordene «full oversikt over hvem som har sett og delt» tas ut inntil innsynslogg for kommunen er bekreftet.
- Teknologi: setningen «Hostet på Supabase og Vercel med automatisk skalering» endres til «Kjører på europeiske servere i Stockholm.» «10 definerte rollenivåer» endres til «Rollebasert tilgang: bare teamet rundt en tjenestemottaker ser innholdet.» KAI-kortet: «KAI hjelper deg å finne frem i JodaCare og forklarer hvordan appen brukes. Tilpasser seg rollen din.»
- `trustStats` «Horten, Lier, Oslo» endres til «Norske kommuner» inntil listen er bekreftet.

## Steg 11: `src/i18n/messages/om-page.ts`

- «Jodabook utvikles i samarbeid med SINTEF» endres til «Jodabook ble utviklet i samarbeid med SINTEF».

## Steg 12: `src/i18n/messages/bruksvilkar-page.ts`

- Avsnittet om Familierom: «For Familierom vil det gjelde: 14 dager gratis prøveperiode, deretter 299 kr/mnd. Vilkår for betaling publiseres når Familierom lanseres.» Vipps tas ut.

## Steg 13: `src/lib/seo.ts` og `src/components/brief/CompanyBrief.tsx`

- `seo.ts` `featureList`: `'Innlogging med ID-porten og Vipps'` endres til `'Innlogging med ID-porten'`. Jodabook-linjen får «(kommer 2027)».
- `CompanyBrief.tsx`: les gjennom for «Tilgjengelig nå», Vipps som innlogging, Aiantic og datoer. Familierom-avsnittet skal si 2027. Gjør minst mulig, det er en egen side.


## Steg 13b: bilder på segmentsidene

Denne seksjonen gjelder. Artefakten «Bilder til jodacare.no» var underlaget for utvalget og skal ikke brukes som plan.

I dag har bare forsiden (`/hero/hero-1.jpg`) og /om (`/images/kristilomamma.jpg`) et fotografi. Alle segmentsidene er tekst og ikoner. Bildene under ligger klare i `public/images/`, web-optimert til maks 2000 px og uten EXIF. Bruk Next.js `<Image>` med `fill` og `object-cover`, `sizes` satt, og en `alt`-tekst som beskriver motivet uten navn. Ingen bildetekster.

Egne bilder (JodaCare AS eier dem, ingen kreditering):

| Fil | Motiv | Plassering |
|---|---|---|
| `mamma-nettbrett.jpg` (1954×2000) | Eldre kvinne ser på et bilde i JodaCare på nettbrett, i egen stue | Hero på /jodavisit. Også aktuelt i Hub-seksjonen på /omsorgsbolig («For beboeren») |
| `mamma-og-barnebarn.jpg` (2000×1500) | Ung mann og eldre kvinne i sofaen | Hero på /familie |
| `mamma-trappa.jpg` (960×1280) | Eldre kvinne under trappegelender, svart-hvitt | «Kjenner du deg igjen?» på /familie, i halv bredde ved siden av teksten. Ikke som hero, ikke større enn 640 px bred på skjerm |

Unsplash (fri bruk, ingen kreditering påkrevd; legg gjerne «Foto: Unsplash» i footer på siden som bruker dem):

| Fil | Motiv | Plassering |
|---|---|---|
| `benk-under-blomstrende-traer.jpg` (stående) | Eldre person leser på benk under blomstrende trær | Hero på /omsorgsbolig |
| `barn-bak-rod-stolpe.jpg` | Barn titter frem bak rød stolpe | Hero på /avlastning |
| `barn-med-drage.jpg` | Barn med drage mot hvit himmel | /teknologi, over KI-seksjonen. Reserve for /avlastning |
| `mor-med-spedbarn.jpg` (stående, svart-hvitt) | Mor med spedbarn i skogen | Hero på /barnevern |
| `mann-ved-arbeidsbenken.jpg` | Eldre mann ved arbeidsbenken sin | «For den hjemmeboende» på /jodavisit |
| `mann-ved-vinduet.jpg` (stående) | Mann ved vinduet i kveldslys | /sikkerhet, ved siden av «Hvordan vi beskytter dine data» |
| `ung-mann-i-aker.jpg` (stående) | Ung mann i åker | Hero på /kommune |
| `gamle-bilder-pa-bordet.jpg` | Gamle svart-hvitt-bilder på et bord | /rettigheter, øverst. Reserve for livshistorie på /familie |
| `hand-som-skriver.jpg` | Eldre hånd skriver i notatbok | /rettigheter, ved klagebrevet |
| `hand-med-gamle-bilder.jpg` | Hånd holder gamle familiebilder | Reserve. Brukes ikke nå |
| `forelder-og-barn-under-pledd.jpg` (stående) | Forelder og barn i sofa under pledd | Reserve. Brukes ikke nå |

/bpa, /implementering og /priser får ikke bilde i denne runden. Ikke bruk `annie-spratt`, `caroline-hernandez`, `harris-ananiadis` eller `iStock-803717758` som ligger i mappa fra før.

Hero-layout: samme mønster på alle segmentsidene. Tekst til venstre, bilde til høyre i 5/12 av bredden på desktop, bildet over teksten på mobil med `aspect-ratio: 4/3`. Stående bilder beskjæres med `object-position: center 30%` så ansikter ikke kuttes. Sjekk kontrast der tekst ligger over bilde, det skal den helst ikke gjøre.


Alt-tekster (norsk / engelsk). Ingen navn på personer.

| Fil | Norsk | Engelsk |
|---|---|---|
| `mamma-nettbrett.jpg` | Eldre kvinne sitter i stolen sin og ser på et bilde i JodaCare på nettbrettet | Older woman in her armchair looking at a photo in JodaCare on a tablet |
| `mamma-og-barnebarn.jpg` | Ung mann og eldre kvinne sitter tett sammen i en sofa | Young man and older woman sitting close together on a sofa |
| `mamma-trappa.jpg` | Eldre kvinne sett nedenfra i en trappeoppgang, svart-hvitt | Older woman seen from below in a stairwell, black and white |
| `benk-under-blomstrende-traer.jpg` | Eldre person leser på en benk under blomstrende trær | Older person reading on a bench under blossoming trees |
| `barn-bak-rod-stolpe.jpg` | Barn titter frem bak en rød stolpe | Child peeking out from behind a red post |
| `barn-med-drage.jpg` | Barn flyr drage mot hvit himmel | Child flying a kite against a white sky |
| `mor-med-spedbarn.jpg` | Mor holder et spedbarn i skogen, svart-hvitt | Mother holding an infant in the woods, black and white |
| `mann-ved-arbeidsbenken.jpg` | Eldre mann arbeider ved benken i verkstedet sitt | Older man working at the bench in his workshop |
| `mann-ved-vinduet.jpg` | Mann sitter ved et vindu i kveldslys | Man sitting by a window in evening light |
| `ung-mann-i-aker.jpg` | Ung mann står i en åker under blå himmel | Young man standing in a field under a blue sky |
| `gamle-bilder-pa-bordet.jpg` | Gamle svart-hvitt-fotografier spredt på et bord | Old black-and-white photographs spread on a table |
| `hand-som-skriver.jpg` | Eldre hånd skriver i en notatbok | Older hand writing in a notebook |

Opprydding i samme PR: legg `_originaler-egne-bilder/` i `.gitignore` (mappa inneholder originaler med GPS-data og skal aldri committes). Slett `_site-images-sheet.jpg` og `_egne-bilder-sheet.jpg` i rota, og `public/images/iStock-803717758.jpg`. `harris-ananiadis-560464-unsplash.jpg` er samme motiv som `barn-bak-rod-stolpe.jpg` i full størrelse, slett den gamle. Behold `kristilomamma.jpg` og `guttapp.png`, de er i bruk.

Fargebehandling: bildene leveres i farger. Forsiden bruker svart-hvitt. Legg en CSS-klasse `img-tone` på alle nye bilder med `filter: grayscale(1)` og la Kristil slå den av og på i én linje i `globals.css` etter at hun har sett begge deler i preview. Ikke bak inn svart-hvitt i filene.

## Steg 14: verifisering

1. `grep -rn "Tilgjengelig nå\|Available now\|Beta 2026\|Aiantic\|Q2 2026\|Silje\|Supabase\|Vercel\|Brevo" src/` skal gi null treff (unntatt `Logg inn`-lenken til app.jodacare.no, som beholdes).
2. `grep -rn "Vipps" src/` skal bare treffe steder som sier at Vipps kommer med Familierom.
3. `npm run build` uten feil. TypeScript-typene i hver messages-fil må oppdateres der nøkler er lagt til eller fjernet.
4. Kjør a11y-sjekken som ble satt opp 13. september (axe over rutene). Ingen nye kontrastfeil.
5. Åpne hver segmentside i preview på desktop og mobil og bekreft at bildene laster, at ingen ansikter kuttes og at siden ikke scroller sidelengs.
6. Lever en liste per fil over hva som ble endret, og en liste over setninger du var i tvil om og lot stå.

Ikke commit før Kristil har sett listen.
