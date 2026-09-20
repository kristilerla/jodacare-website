#!/usr/bin/env node
/**
 * Porten. Feiler bygget når en faktaverdi står hardkodet i src/ i stedet for
 * å komme fra src/content/fakta.json.
 *
 * Kjøres i prebuild og i CI.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, relative } from 'node:path';

const ROT = process.cwd();
const SRC = join(ROT, 'src');

/** Rettighetsveilederen har sitt eget innhold og sjekkes ikke. */
const UNNTAK = [
  'src/content/fakta.json',
  'src/content/rettigheter.json',
  'src/content/README.md',
  'src/components/rettigheter/',
  // Her skal fakta bo.
  'src/lib/fakta.ts',
  // All statustekst skal bo her.
  'src/i18n/messages/status.ts',
  'src/components/ui/SegmentBadge.tsx',
  // Porten selv.
  'scripts/',
  // Ubrukt. Ingen kode importerer den. Ryddes i egen runde.
  'src/i18n/nb.json',
];

const feil = [];

function filer(dir) {
  const ut = [];
  for (const p of readdirSync(dir)) {
    const sti = join(dir, p);
    if (statSync(sti).isDirectory()) ut.push(...filer(sti));
    else if (/\.(ts|tsx|json|md)$/.test(p)) ut.push(sti);
  }
  return ut;
}

const unntatt = (rel) => UNNTAK.some((u) => rel === u || rel.startsWith(u));

// ── 1. sha256 på fakta.json ───────────────────────────────────────────
const fakta = JSON.parse(readFileSync(join(SRC, 'content/fakta.json'), 'utf8'));
const beregnet = createHash('sha256').update(JSON.stringify(fakta.fakta)).digest('hex');
if (beregnet !== fakta.sha256) {
  feil.push(
    `src/content/fakta.json: sha256 stemmer ikke. Filen er redigert for hånd. Kjør «npm run sync-fakta».`,
  );
}

// ── 2. priser i src/ ──────────────────────────────────────────────────
const BELOP = [299, 2990, 28000, 63880, 35880];

function belopMonster(n) {
  const medMellomrom = String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\\s');
  const medKomma = String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return new RegExp(`(?<!\\d)(${n}|${medMellomrom}|${medKomma})(?!\\d)`);
}

const MED_ENHET_ETTER = /(?<!\d)\d[\d\s.,]*\s*(kr\b|,-|kroner\b|\/mnd\b|NOK\b)/i;
const MED_ENHET_FOR = /\b(kr|NOK)\s+\d[\d\s.,]*/i;

/**
 * Beløp som ikke er JodaCare-priser og derfor ikke hører hjemme i fakta.
 * 500 000 er terskelen for direkte anskaffelse, et tall fra regelverket.
 * 7 500 er prisen på superbrukerkurs, som ikke er besluttet i fakta ennå.
 */
const IKKE_VARE_PRISER = [/500[\s.]?000/, /7[\s.]?500/];

for (const sti of filer(SRC)) {
  const rel = relative(ROT, sti);
  if (unntatt(rel)) continue;
  const raa = readFileSync(sti, 'utf8');
  // Fjern det som allerede er oppslag, så «${priser.familieromMnd} kr» ikke slår ut.
  const tekst = raa.replace(/\$\{[^}]*\}/g, 'X');

  for (const n of BELOP) {
    const m = tekst.match(belopMonster(n));
    if (m) {
      feil.push(`${rel}: beløpet ${n} står hardkodet ("${m[0]}"). Hent det fra @/lib/fakta.`);
      break;
    }
  }
  const e = tekst.match(MED_ENHET_ETTER) ?? tekst.match(MED_ENHET_FOR);
  const vart = e && !IKKE_VARE_PRISER.some((r) => r.test(e[0]));
  if (vart && !/X\s*(kr|kroner|NOK)/.test(tekst.slice(Math.max(0, e.index - 4), e.index + 12))) {
    feil.push(`${rel}: pris med enhet står hardkodet ("${e[0].trim()}"). Hent den fra @/lib/fakta.`);
  }
}

// ── 3. statustekster utenfor statuskomponenten ────────────────────────
const STATUSTEKSTER = [
  'Kommer 2027',
  'Pilot 2027',
  'Lanseres høst 2026',
  'Kommer Q2 2027',
  'Coming 2027',
  'Launching autumn 2026',
  'Coming Q2 2027',
  'Tilgjengelig nå',
  'Available now',
];

for (const sti of filer(SRC)) {
  const rel = relative(ROT, sti);
  if (unntatt(rel)) continue;
  const raa = readFileSync(sti, 'utf8');
  for (const t of STATUSTEKSTER) {
    if (raa.includes(t)) {
      feil.push(
        `${rel}: statusteksten "${t}" står hardkodet. Bruk getStatusVisning eller loseMerke fra i18n/messages/status.ts.`,
      );
      break;
    }
  }
}

// ── rapport ───────────────────────────────────────────────────────────
for (const f of feil) console.error(`FEIL  ${f}`);
console.log('');
console.log(`Faktaport: ${feil.length} feil.`);
if (feil.length === 0) {
  console.log(`fakta.json fra ${fakta.kilde_commit}, bygget ${fakta.bygget}, sha256 ${fakta.sha256.slice(0, 12)}…`);
}
process.exit(feil.length > 0 ? 1 : 0);
