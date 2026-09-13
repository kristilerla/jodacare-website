'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { Container } from '@/components/ui';
import {
  buildLetter,
  data,
  type FieldKey,
  type Fields,
  type Situation,
  type Source,
  type WhoId,
} from './letter';

/**
 * Rettighetsveilederen — regelstyrt veiviser uten AI.
 *
 * Alt innhold (situasjoner, hjemler, kildelenker, brevtekster) ligger i
 * src/content/rettigheter.json slik at en jurist kan lese og rette det uten
 * å røre kode. Brevmalene ligger i ./letter.ts, denne komponenten har flyten.
 *
 * Personvern: alt lever i React state. Ingen fetch, ingen cookie, ingen
 * localStorage/sessionStorage, ingen server action, ingen analytics-events.
 * Bare valgt situasjon speiles i URL-hash slik at en adresse kan deles.
 */

const DEFAULT_WHO: WhoId = 'egen';
const DEFAULT_SIT = 'avlastning';

function situationById(id: string): Situation {
  return data.situations.find((s) => s.id === id) ?? data.situations[0];
}

function initialFields(): Fields {
  const e = data.examples;
  return {
    navn: e.navn,
    kommune: e.kommune,
    fylke: e.fylke,
    enhet: e.enhet,
    pasient: e.pasient,
    relasjon: e.relasjon,
    tjeneste: situationById(DEFAULT_SIT).defaultService,
    dato: e.dato,
    saksnr: e.saksnr,
    idag: '',
    sok: e.sok,
    hvorfor: e.hvorfor,
  };
}

const stepHeadClass =
  'flex items-center gap-3 mb-6 pb-3 border-b border-secondary-dark';
const stepNumClass =
  'flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white font-semibold';
const stepTitleClass = 'font-serif text-2xl font-semibold text-text';
const labelClass = 'flex flex-col gap-1.5 text-sm font-medium text-text';
const inputClass =
  'rounded-lg border border-secondary-dark bg-white px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1';

export function Rettighetsveileder() {
  const [who, setWho] = useState<WhoId>(DEFAULT_WHO);
  const [sitId, setSitId] = useState<string>(DEFAULT_SIT);
  const [fields, setFields] = useState<Fields>(initialFields);
  const [tjenesteTouched, setTjenesteTouched] = useState(false);
  const [toast, setToast] = useState('');
  const letterRef = useRef<HTMLPreElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);

  // Alt som avhenger av nettleseren settes etter montering, slik at
  // server-renderingen og første klient-render er identiske.
  useEffect(() => {
    setFields((f) => ({ ...f, idag: new Date().toISOString().slice(0, 10) }));

    const hash = window.location.hash.replace(/^#/, '');
    const [whoPart, sitPart] = hash.split('/');
    const validWho = data.who.find((w) => w.id === whoPart);
    if (!validWho) return;
    const allowed = data.situations.filter((s) => s.appliesTo.includes(validWho.id));
    const validSit = allowed.find((s) => s.id === sitPart) ?? allowed[0];
    setWho(validWho.id);
    setSitId(validSit.id);
    if (!tjenesteTouched) {
      setFields((f) => ({ ...f, tjeneste: validSit.defaultService }));
    }
    // Kjøres bare ved montering — hash leses én gang.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Valgt situasjon speiles i adressen slik at siden kan deles.
  // replaceState, ikke pushState: hvert valg skal ikke bli et steg i historikken.
  useEffect(() => {
    window.history.replaceState(null, '', `#${who}/${sitId}`);
  }, [who, sitId]);

  const sit = situationById(sitId);
  const route = data.routes[sit.route];
  const available = data.situations.filter((s) => s.appliesTo.includes(who));
  const paaVegne = who === 'paa';

  // Felt som fortsatt står med eksempelverdien vises dempet, slik at det er
  // tydelig at teksten skal byttes ut. Så snart feltet endres, blir den mørk.
  const examples = data.examples as Partial<Record<FieldKey, string>>;
  const fieldClass = (key: FieldKey) =>
    clsx(
      inputClass,
      examples[key] !== undefined && fields[key] === examples[key]
        ? 'text-text-light'
        : 'text-text',
    );

  const setField = useCallback((key: FieldKey, value: string) => {
    setFields((f) => ({ ...f, [key]: value }));
  }, []);

  const chooseWho = (id: WhoId) => {
    setWho(id);
    const ok = data.situations.filter((s) => s.appliesTo.includes(id));
    if (!ok.find((s) => s.id === sitId)) {
      setSitId(ok[0].id);
      if (!tjenesteTouched) setField('tjeneste', ok[0].defaultService);
    }
  };

  const chooseSit = (s: Situation) => {
    setSitId(s.id);
    if (!tjenesteTouched) setField('tjeneste', s.defaultService);
    answerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const letter = buildLetter(sit, who, fields);

  const sources: Source[] = [
    ...sit.sources,
    ...route.commonSources
      .map((id) => data.commonSources.find((c) => c.id === id))
      .filter((c): c is Source & { id: string } => Boolean(c)),
  ];

  const copyLetter = async () => {
    try {
      await navigator.clipboard.writeText(letter);
      setToast(data.copy.copied);
    } catch {
      const node = letterRef.current;
      const selection = window.getSelection();
      if (node && selection) {
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      setToast(data.copy.fallback);
    }
    window.setTimeout(() => setToast(''), 2000);
  };

  const sendSteps = route.sendSteps.map((step) => ({
    lead: step.lead.replace('{fylke}', fields.fylke),
    text: step.text.replace(
      '{fullmakt}',
      paaVegne ? ', fullmakt fra den det gjelder' : '',
    ),
  }));

  return (
    <div className="bg-background-alt">
      <Container size="sm" className="py-12 sm:py-16">
        {/* Hero */}
        <section className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {data.hero.eyebrow}
          </p>
          <h1 className="mt-3 font-serif text-3xl font-semibold text-text sm:text-4xl">
            {data.hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text">{data.hero.lead}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {data.hero.promise.map((p) => (
              <li
                key={p.title}
                className="rounded-xl border border-secondary-dark bg-white p-4"
              >
                <b className="block text-text">{p.title}</b>
                <span className="mt-1 block text-sm text-text-light">{p.body}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Steg 1 */}
        <section className="mb-10 rounded-2xl bg-white p-6 sm:p-8" aria-labelledby="steg1">
          <div className={stepHeadClass}>
            <span className={stepNumClass} aria-hidden="true">
              1
            </span>
            <h2 id="steg1" className={stepTitleClass}>
              {data.steps.who}
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {data.who.map((w) => (
              <button
                key={w.id}
                type="button"
                aria-pressed={who === w.id}
                onClick={() => chooseWho(w.id)}
                className={clsx(
                  'rounded-xl border p-4 text-left transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                  who === w.id
                    ? 'border-primary bg-accent-light'
                    : 'border-secondary-dark bg-white hover:border-primary',
                )}
              >
                <b className="block text-text">{w.label}</b>
                <span className="mt-1 block text-sm text-text-light">{w.sub}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Steg 2 */}
        <section className="mb-10 rounded-2xl bg-white p-6 sm:p-8" aria-labelledby="steg2">
          <div className={stepHeadClass}>
            <span className={stepNumClass} aria-hidden="true">
              2
            </span>
            <h2 id="steg2" className={stepTitleClass}>
              {data.steps.what}
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {available.map((s) => (
              <button
                key={s.id}
                type="button"
                aria-pressed={sitId === s.id}
                onClick={() => chooseSit(s)}
                className={clsx(
                  'rounded-xl border p-4 text-left transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                  sitId === s.id
                    ? 'border-primary bg-accent-light'
                    : 'border-secondary-dark bg-white hover:border-primary',
                )}
              >
                <b className="block text-text">{s.label}</b>
                <span className="mt-1 block text-sm text-text-light">{s.sub}</span>
                {s.tag ? (
                  <span className="mt-2 inline-block rounded-full bg-secondary-light px-2.5 py-0.5 text-xs font-medium text-text">
                    {s.tag}
                  </span>
                ) : null}
              </button>
            ))}
          </div>
        </section>

        {/* Svar */}
        <section
          ref={answerRef}
          className="mb-10 rounded-2xl bg-white p-6 sm:p-8"
          aria-labelledby="svar"
        >
          <div className={stepHeadClass}>
            <span className={stepNumClass} aria-hidden="true">
              →
            </span>
            <h2 id="svar" className={stepTitleClass}>
              {data.answerTitles[who]}
            </h2>
          </div>
          <div
            className={clsx(
              'rounded-xl border-l-4 p-4',
              sit.route === 'tilsyn'
                ? 'border-warning bg-secondary-light'
                : 'border-primary bg-accent-light',
            )}
          >
            <b className="text-text">{route.boxLead}</b>{' '}
            <span className="text-text">{route.boxBody}</span>
          </div>
          <div className="mt-5 space-y-4">
            {sit.answer.map((p) => (
              <p key={p} className="text-text-light">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-6 rounded-xl bg-background-alt p-4">
            <h3 className="font-serif text-lg font-semibold text-text">
              {data.sourcesHeading}
            </h3>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm">
              {sources.map((src) => (
                <li key={src.url + src.label}>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-dark underline underline-offset-2 hover:text-primary"
                  >
                    {src.label}
                  </a>{' '}
                  <span className="text-text">· {src.note}</span>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-sm text-text">{data.checkedNote}</p>
          </div>
        </section>

        {/* Steg 3 */}
        <section className="mb-10 rounded-2xl bg-white p-6 sm:p-8" aria-labelledby="steg3">
          <div className={stepHeadClass}>
            <span className={stepNumClass} aria-hidden="true">
              3
            </span>
            <h2 id="steg3" className={stepTitleClass}>
              {data.steps.form}
            </h2>
          </div>
          <p className="mb-5 text-sm text-text-light">
            {data.formNote}{' '}
            <span className="font-medium text-text">{data.formNoteExample}</span>{' '}
            {data.formNoteOslo}
          </p>
          <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
            <label className={labelClass}>
              {data.fields.navn}
              <input
                className={fieldClass('navn')}
                value={fields.navn}
                onChange={(e) => setField('navn', e.target.value)}
              />
            </label>
            <label className={labelClass}>
              {data.fields.kommune}
              <input
                className={fieldClass('kommune')}
                value={fields.kommune}
                onChange={(e) => setField('kommune', e.target.value)}
              />
            </label>
            <label className={labelClass}>
              {data.fields.fylke}
              <select
                className={fieldClass('fylke')}
                value={fields.fylke}
                onChange={(e) => setField('fylke', e.target.value)}
              >
                {data.statsforvaltere.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </label>
            <label className={labelClass}>
              {data.fields.enhet}
              <input
                className={fieldClass('enhet')}
                value={fields.enhet}
                onChange={(e) => setField('enhet', e.target.value)}
              />
            </label>
            {paaVegne ? (
              <>
                <label className={labelClass}>
                  {data.fields.pasient}
                  <input
                    className={fieldClass('pasient')}
                    value={fields.pasient}
                    onChange={(e) => setField('pasient', e.target.value)}
                  />
                </label>
                <label className={labelClass}>
                  {data.fields.relasjon}
                  <input
                    className={fieldClass('relasjon')}
                    value={fields.relasjon}
                    onChange={(e) => setField('relasjon', e.target.value)}
                  />
                </label>
              </>
            ) : null}
            <label className={labelClass}>
              {data.fields.tjeneste}
              <input
                className={fieldClass('tjeneste')}
                value={fields.tjeneste}
                onChange={(e) => {
                  setTjenesteTouched(true);
                  setField('tjeneste', e.target.value);
                }}
              />
            </label>
            <label className={labelClass}>
              {data.fields.dato}
              <input
                type="date"
                className={fieldClass('dato')}
                value={fields.dato}
                onChange={(e) => setField('dato', e.target.value)}
              />
            </label>
            <label className={labelClass}>
              {data.fields.saksnr}
              <input
                className={fieldClass('saksnr')}
                value={fields.saksnr}
                onChange={(e) => setField('saksnr', e.target.value)}
              />
            </label>
            <label className={labelClass}>
              {data.fields.idag}
              <input
                type="date"
                className={fieldClass('idag')}
                value={fields.idag}
                onChange={(e) => setField('idag', e.target.value)}
              />
            </label>
            <label className={clsx(labelClass, 'sm:col-span-2')}>
              {data.fields.sok}
              <textarea
                rows={4}
                className={fieldClass('sok')}
                value={fields.sok}
                onChange={(e) => setField('sok', e.target.value)}
              />
            </label>
            <label className={clsx(labelClass, 'sm:col-span-2')}>
              {data.fields.hvorfor}
              <textarea
                rows={5}
                className={fieldClass('hvorfor')}
                value={fields.hvorfor}
                onChange={(e) => setField('hvorfor', e.target.value)}
              />
            </label>
          </form>
        </section>

        {/* Brev */}
        <section className="mb-10 rounded-2xl bg-white p-6 sm:p-8" aria-labelledby="brev">
          <div className={stepHeadClass}>
            <span className={stepNumClass} aria-hidden="true">
              →
            </span>
            <h2 id="brev" className={stepTitleClass}>
              {route.letterTitle}
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="max-w-[52ch] text-sm text-text-light">{route.letterIntro}</p>
            <div className="flex items-center gap-3">
              <span aria-live="polite" className="text-sm font-medium text-primary">
                {toast}
              </span>
              <button
                type="button"
                onClick={copyLetter}
                className="rounded-lg bg-primary px-5 py-2.5 font-medium text-white transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {data.copy.button}
              </button>
            </div>
          </div>
          <pre
            ref={letterRef}
            className="mt-5 overflow-x-auto whitespace-pre-wrap rounded-xl border border-secondary-dark bg-background-alt p-4 font-sans text-sm leading-relaxed text-text sm:p-6"
          >
            {letter}
          </pre>

          <h3 className="mt-8 font-serif text-xl font-semibold text-text">
            {data.sendHeading}
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-text-light">
            {sendSteps.map((step) => (
              <li key={step.lead}>
                <b className="text-text">{step.lead}</b>
                {step.text}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {data.help.map((h) => (
              <a
                key={h.url}
                href={h.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-secondary-dark bg-background-alt p-4 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <b className="block text-primary-dark underline underline-offset-2">
                  {h.title}
                </b>
                <span className="mt-1 block text-sm text-text">{h.body}</span>
              </a>
            ))}
          </div>
        </section>

        <p className="text-center text-sm text-text">{data.disclaimer}</p>
      </Container>
    </div>
  );
}
