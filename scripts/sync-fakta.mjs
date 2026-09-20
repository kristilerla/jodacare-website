#!/usr/bin/env node
/**
 * Henter fakta.json fra jodacare-kunnskap på disk og viser hva som endret seg.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const KILDE = process.env.JODACARE_KUNNSKAP
  ? join(process.env.JODACARE_KUNNSKAP, 'dist/fakta.json')
  : join(process.cwd(), '../jodacare-kunnskap/dist/fakta.json');
const MAL = join(process.cwd(), 'src/content/fakta.json');

if (!existsSync(KILDE)) {
  console.error(`Fant ikke ${KILDE}`);
  console.error('Kjør «npm run bygg» i jodacare-kunnskap først.');
  console.error('Ligger repoet et annet sted, sett JODACARE_KUNNSKAP.');
  process.exit(1);
}

const ny = JSON.parse(readFileSync(KILDE, 'utf8'));
const gammel = existsSync(MAL) ? JSON.parse(readFileSync(MAL, 'utf8')) : { fakta: {} };

/** Flater ut et objekt til «a.b.c = verdi» for sammenligning. */
function flat(o, prefiks = '', ut = {}) {
  for (const [k, v] of Object.entries(o ?? {})) {
    const n = prefiks ? `${prefiks}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) flat(v, n, ut);
    else ut[n] = Array.isArray(v) ? JSON.stringify(v) : String(v);
  }
  return ut;
}

const a = flat(gammel.fakta);
const b = flat(ny.fakta);
const nokler = [...new Set([...Object.keys(a), ...Object.keys(b)])].sort();

const endret = [];
for (const n of nokler) {
  if (a[n] === b[n]) continue;
  if (a[n] === undefined) endret.push(`  NY      ${n} = ${b[n]}`);
  else if (b[n] === undefined) endret.push(`  FJERNET ${n} (var ${a[n]})`);
  else endret.push(`  ENDRET  ${n}: ${a[n]} → ${b[n]}`);
}

/**
 * Sporet skal peke på commiten verdiene faktisk kom fra. Merges en PR i
 * jodacare-kunnskap uten at en eneste verdi endrer seg, får dist/fakta.json
 * likevel ny kilde_commit. Da skal kopien her følge etter, ellers peker den
 * på en eldre commit enn den som er kilden.
 */
const METADATA = ['kilde_commit', 'bygget', 'sha256'];
const metaEndret = METADATA.filter((n) => gammel[n] !== ny[n]);

if (endret.length === 0 && metaEndret.length === 0) {
  console.log('Ingen endringer. fakta.json er allerede oppdatert.');
  process.exit(0);
}

console.log(`Kilde: ${ny.kilde_commit}, bygget ${ny.bygget}`);

if (endret.length > 0) {
  console.log(`\n${endret.length} ${endret.length === 1 ? 'verdi' : 'verdier'} endret:\n`);
  console.log(endret.join('\n'));
} else {
  console.log('\nIngen verdier endret.');
}

if (metaEndret.length > 0) {
  console.log('\nSporet er oppdatert:\n');
  for (const n of metaEndret) {
    const fra = gammel[n] === undefined ? 'mangler' : String(gammel[n]).slice(0, 16);
    console.log(`  ${n}: ${fra} → ${String(ny[n]).slice(0, 16)}`);
  }
}

writeFileSync(MAL, JSON.stringify(ny, null, 2) + '\n');
console.log('\nsrc/content/fakta.json er oppdatert.');
