# src/content

## fakta.json

**GENERERT FIL. Ikke rediger for hånd.**

Den er en kopi av `dist/fakta.json` fra `jodacare-kunnskap`, og inneholder
priser, moduler, segmenter, selskap, roller, innlogging og kontaktinfo.

Slik oppdaterer du den:

```bash
npm run sync-fakta
```

Skriptet leser `../jodacare-kunnskap/dist/fakta.json` fra naboen på disk og
viser en diff av hva som endret seg. Kjør `npm run bygg` i `jodacare-kunnskap`
først, så fila der er oppdatert.

Filen har en `sha256` av innholdet. `npm run sjekk-fakta` feiler hvis summen
ikke stemmer, så håndredigering blir fanget.

Verdiene leses gjennom `src/lib/fakta.ts`. Ikke importer JSON-filen direkte.

## rettigheter.json

Innholdet til Rettighetsveilederen. Redigeres for hånd og har ingenting med
`fakta.json` å gjøre.
