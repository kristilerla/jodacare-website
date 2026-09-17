'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { Container } from '@/components/ui';
import {
  buildFullmakt,
  buildLetter,
  data,
  type FieldKey,
  type Fields,
  type RouteCopy,
  type RouteId,
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

/**
 * Eksempelverdiene for et spor: de globale, overstyrt av sporets egne.
 * «Tjenesten det gjelder» har ikke noe globalt eksempel — der er sporets
 * defaultService eksempelet.
 */
function examplesFor(
  s: Situation,
  who: WhoId,
): Partial<Record<FieldKey, string>> {
  return {
    ...(data.examples as Partial<Record<FieldKey, string>>),
    tjeneste: s.defaultService,
    ...(s.examples ?? {}),
    ...(s.examplesByWho?.[who] ?? {}),
  };
}

function initialFields(): Fields {
  const e = examplesFor(situationById(DEFAULT_SIT), DEFAULT_WHO);
  const tom: Fields = {
    navn: '', kommune: '', fylke: '', enhet: '', pasient: '', relasjon: '',
    tjeneste: '', dato: '', saksnr: '', idag: '', sok: '', hvorfor: '',
    endring: '', saksnrKommune: '',
  };
  return { ...tom, ...e, idag: '' };
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
  // Hvilke felt brukeren selv har skrevet i. Styrer både dempet tekst,
  // tømming ved fokus og om «Tjenesten det gjelder» fylles automatisk.
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});
  const [toast, setToast] = useState('');
  const [fullmaktToast, setFullmaktToast] = useState('');
  // Spor med flere brev (Spor B) lar brukeren bytte rute i steg 3.
  const [routeChoice, setRouteChoice] = useState<RouteId | null>(null);
  const letterRef = useRef<HTMLPreElement>(null);
  const fullmaktRef = useRef<HTMLPreElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);

  /**
   * Bytter spor. Eksempelverdier følger sporet, men bare i de feltene
   * brukeren ikke har skrevet i selv — ellers ville et sporbytte slettet
   * teksten deres.
   */
  const applySituation = useCallback(
    (s: Situation, nyWho: WhoId, scroll: boolean) => {
      setSitId(s.id);
      setRouteChoice(s.routeOptions ? s.routeOptions[0].id : null);
      const nye = examplesFor(s, nyWho);
      setFields((f) => {
        const neste = { ...f };
        (Object.keys(nye) as FieldKey[]).forEach((k) => {
          if (!touched[k]) neste[k] = nye[k] ?? '';
        });
        return neste;
      });
      if (scroll) {
        answerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    [touched],
  );

  // Alt som avhenger av nettleseren settes etter montering, slik at
  // server-renderingen og første klient-render er identiske.
  useEffect(() => {
    // Bevisst setState etter montering: dagens dato og hash finnes bare i
    // nettleseren, og må settes her for at server- og klient-render skal
    // være like. Kjøres én gang, så det gir ingen kaskade.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFields((f) => ({ ...f, idag: new Date().toISOString().slice(0, 10) }));

    const hash = window.location.hash.replace(/^#/, '');
    const [whoPart, sitPart] = hash.split('/');
    const validWho = data.who.find((w) => w.id === whoPart);
    if (!validWho) return;
    const allowed = data.situations.filter((s) => s.appliesTo.includes(validWho.id));
    const validSit = allowed.find((s) => s.id === sitPart) ?? allowed[0];
    setWho(validWho.id);
    setSitId(validSit.id);
    setRouteChoice(validSit.routeOptions ? validSit.routeOptions[0].id : null);
    setFields((f) => ({ ...f, ...examplesFor(validSit, validWho.id) }));
    // Kjøres bare ved montering — hash leses én gang.
  }, []);

  /**
   * Adressen leses bare ved montering, så en lenke til et annet spor på
   * samme side ville ellers bytte adresse uten å bytte spor. replaceState
   * under sender ikke hashchange, så dette gir ingen løkke.
   */
  useEffect(() => {
    const onHash = () => {
      const [whoDel, sitDel] = window.location.hash.replace(/^#/, '').split('/');
      const nyWho = data.who.find((w) => w.id === whoDel);
      if (!nyWho) return;
      const tillatt = data.situations.filter((s) => s.appliesTo.includes(nyWho.id));
      const nySit = tillatt.find((s) => s.id === sitDel);
      if (!nySit || (nyWho.id === who && nySit.id === sitId)) return;
      setWho(nyWho.id);
      applySituation(nySit, nyWho.id, true);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [who, sitId, applySituation]);

  // Valgt situasjon speiles i adressen slik at siden kan deles.
  // replaceState, ikke pushState: hvert valg skal ikke bli et steg i historikken.
  useEffect(() => {
    window.history.replaceState(null, '', `#${who}/${sitId}`);
  }, [who, sitId]);

  const sit = situationById(sitId);
  // Har sporet flere ruter, styrer knappevalget hvilken som gjelder.
  const valgtRute =
    sit.routeOptions?.find((o) => o.id === routeChoice) ?? sit.routeOptions?.[0];
  const aktivRute: RouteId = valgtRute?.id ?? sit.route;
  // Ruten er grunnlaget. Sporet kan overstyre, og rutevalget vinner til slutt.
  const route: RouteCopy = {
    ...data.routes[aktivRute],
    ...(sit.routeCopy ?? {}),
    ...(valgtRute
      ? { letterTitle: valgtRute.letterTitle, letterIntro: valgtRute.letterIntro }
      : {}),
  };
  const available = data.situations.filter((s) => s.appliesTo.includes(who));
  const paaVegne = who === 'paa';
  const labelFor = (key: FieldKey) => sit.fieldLabels?.[key] ?? data.fields[key];
  const harFelt = (key: FieldKey) => sit.extraFields?.includes(key) ?? false;
  const skjultFelt = (key: FieldKey) => sit.hideFields?.includes(key) ?? false;

  // Felt som fortsatt står med eksempelverdien vises dempet, slik at det er
  // tydelig at teksten skal byttes ut. Så snart brukeren skriver, blir den mørk.
  const examples = examplesFor(sit, who);
  const erEksempel = (key: FieldKey) =>
    examples[key] !== undefined && !touched[key];
  const fieldClass = (key: FieldKey) =>
    clsx(inputClass, erEksempel(key) ? 'text-text-light' : 'text-text');

  const setField = useCallback((key: FieldKey, value: string) => {
    setFields((f) => ({ ...f, [key]: value }));
  }, []);

  /**
   * Feltene er forhåndsfylt med et eksempel. Klikker du i et felt som fortsatt
   * står med eksempelteksten, tømmes det, slik at du bare kan skrive.
   *
   * Går du ut igjen uten å skrive noe, kommer eksempelet tilbake — ellers ville
   * en tilfeldig klikk-gjennomgang tømt hele brevet. Har du først skrevet i
   * feltet, står det du etterlot deg, også om det er tomt.
   */
  const feltProps = (key: FieldKey) => ({
    className: fieldClass(key),
    value: fields[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setTouched((t) => ({ ...t, [key]: true }));
      setField(key, e.target.value);
    },
    onFocus: () => {
      if (erEksempel(key) && fields[key] !== '') setField(key, '');
    },
    onBlur: () => {
      const eksempel = examples[key];
      if (eksempel !== undefined && !touched[key] && fields[key] === '') {
        setField(key, eksempel);
      }
    },
  });

  const chooseWho = (id: WhoId) => {
    setWho(id);
    const ok = data.situations.filter((s) => s.appliesTo.includes(id));
    // Eksempelteksten kan avhenge av rollen, så den må friskes opp også når
    // sporet blir stående.
    applySituation(ok.find((s) => s.id === sitId) ?? ok[0], id, false);
  };

  const chooseSit = (s: Situation) => applySituation(s, who, true);

  const letter = buildLetter(sit, who, fields, valgtRute?.letterTemplate ?? sit.route);
  // Representerer du en annen, trengs fullmakt uansett hvilket spor saken går i
  // — med unntak av ruter der mottakeren har sin egen rutine, som NPE.
  const visFullmakt = paaVegne && !route.skipFullmakt;
  const fullmakt = visFullmakt ? buildFullmakt(sit, fields) : '';
  // Bare ruter der noen faktisk prøver saken har et slikt avsnitt. Organet
  // varierer: Statsforvalteren i klage- og tilsynssporet, NPE i erstatning.
  const sfAvsnitt = data.statsforvalterenKan[aktivRute] ?? null;

  const sources: Source[] = [
    ...sit.sources,
    ...route.commonSources
      .map((id) => data.commonSources.find((c) => c.id === id))
      .filter((c): c is Source & { id: string } => Boolean(c)),
  ];

  const copyText = async (
    text: string,
    node: HTMLPreElement | null,
    setMelding: (v: string) => void,
  ) => {
    try {
      await navigator.clipboard.writeText(text);
      setMelding(data.copy.copied);
    } catch {
      const selection = window.getSelection();
      if (node && selection) {
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      setMelding(data.copy.fallback);
    }
    window.setTimeout(() => setMelding(''), 2000);
  };

  // Rutevalget kan ha punkter som bare gjelder den ene ruten.
  const alleSendSteps = valgtRute?.sendStepsExtra
    ? [...route.sendSteps, ...valgtRute.sendStepsExtra]
    : route.sendSteps;
  const sendSteps = alleSendSteps.map((step) => ({
    ...step,
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
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-dark">
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
          <p className="mb-5 max-w-[60ch] text-sm text-text-light">
            {data.whatNote}
          </p>
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
              {sit.answerTitle ?? data.answerTitles[who]}
            </h2>
          </div>
          <div
            className={clsx(
              'rounded-xl border-l-4 p-4',
              aktivRute === 'tilsyn'
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
          {sfAvsnitt ? (
            <div className="mt-6 rounded-xl border border-secondary-dark p-4">
              <h3 className="font-serif text-lg font-semibold text-text">
                {data.statsforvalterenKan.headingPerRoute?.[aktivRute] ??
                  data.statsforvalterenKan.heading}
              </h3>
              <div className="mt-3 space-y-3">
                {sfAvsnitt.map((p) => (
                  <p key={p} className="text-sm text-text-light">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ) : null}
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
          {sit.routeOptions ? (
            <div className="mb-6">
              <p className="mb-3 text-sm font-medium text-text">
                {data.routeChoiceHeading}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {sit.routeOptions.map((o) => (
                  <button
                    key={o.id}
                    type="button"
                    aria-pressed={aktivRute === o.id}
                    onClick={() => setRouteChoice(o.id)}
                    className={clsx(
                      'rounded-xl border p-4 text-left text-sm transition-colors',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                      aktivRute === o.id
                        ? 'border-primary bg-accent-light font-medium text-text'
                        : 'border-secondary-dark bg-white text-text hover:border-primary',
                    )}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
          <p className="mb-5 text-sm text-text-light">
            {data.formNote}{' '}
            <span className="font-medium text-text">{data.formNoteExample}</span>{' '}
            {data.formNoteOslo}
          </p>
          <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
            <label className={labelClass}>
              {labelFor('navn')}
              <input
                {...feltProps('navn')}
              />
            </label>
            <label className={labelClass}>
              {labelFor('kommune')}
              <input
                {...feltProps('kommune')}
              />
            </label>
            <label className={labelClass}>
              {labelFor('fylke')}
              <select
                className={fieldClass('fylke')}
                value={fields.fylke}
                onChange={(e) => {
                  setTouched((t) => ({ ...t, fylke: true }));
                  setField('fylke', e.target.value);
                }}
              >
                {data.statsforvaltere.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </label>
            <label className={labelClass}>
              {labelFor('enhet')}
              <input
                {...feltProps('enhet')}
              />
            </label>
            {paaVegne ? (
              <>
                <label className={labelClass}>
                  {labelFor('pasient')}
                  <input
                    {...feltProps('pasient')}
                  />
                </label>
                <label className={labelClass}>
                  {labelFor('relasjon')}
                  <input
                    {...feltProps('relasjon')}
                  />
                </label>
              </>
            ) : null}
            <label className={labelClass}>
              {labelFor('tjeneste')}
              <input
{...feltProps('tjeneste')}
              />
            </label>
            <label className={labelClass}>
              {labelFor('dato')}
              <input
                type="date"
                {...feltProps('dato')}
              />
            </label>
            {skjultFelt('saksnr') ? null : (
              <label className={labelClass}>
                {labelFor('saksnr')}
                <input {...feltProps('saksnr')} />
              </label>
            )}
            {harFelt('saksnrKommune') ? (
              <label className={labelClass}>
                {labelFor('saksnrKommune')}
                <input {...feltProps('saksnrKommune')} />
              </label>
            ) : null}
            <label className={labelClass}>
              {labelFor('idag')}
              <input
                type="date"
                {...feltProps('idag')}
              />
            </label>
            <label className={clsx(labelClass, 'sm:col-span-2')}>
              {labelFor('sok')}
              <textarea
                rows={4}
                {...feltProps('sok')}
              />
            </label>
            {harFelt('endring') ? (
              <label className={clsx(labelClass, 'sm:col-span-2')}>
                {labelFor('endring')}
                <textarea rows={4} {...feltProps('endring')} />
              </label>
            ) : null}
            <label className={clsx(labelClass, 'sm:col-span-2')}>
              {labelFor('hvorfor')}
              <textarea
                rows={5}
                {...feltProps('hvorfor')}
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
                onClick={() => copyText(letter, letterRef.current, setToast)}
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
                {step.link ? (
                  <>
                    <a
                      href={`#${who}/${step.link}`}
                      className="text-primary-dark underline underline-offset-2 hover:text-primary"
                    >
                      {step.linkLabel}
                    </a>
                    {step.textEnd}
                  </>
                ) : null}
              </li>
            ))}
          </ul>

          {visFullmakt ? (
            <div className="mt-8 rounded-xl border border-secondary-dark p-4 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="max-w-[52ch] text-sm text-text">
                  {data.fullmakt.lead}
                </p>
                <div className="flex items-center gap-3">
                  <span aria-live="polite" className="text-sm font-medium text-primary">
                    {fullmaktToast}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      copyText(fullmakt, fullmaktRef.current, setFullmaktToast)
                    }
                    className="rounded-lg border border-primary px-5 py-2.5 font-medium text-primary-dark transition-colors hover:bg-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    {data.fullmakt.button}
                  </button>
                </div>
              </div>
              <ol className="mt-4 max-w-[60ch] list-decimal space-y-1.5 pl-5 text-sm text-text-light">
                {data.fullmakt.steps.map((steg) => (
                  <li key={steg}>{steg}</li>
                ))}
              </ol>
              <p className="mt-4 max-w-[60ch] text-sm text-text-light">
                {data.fullmakt.note}
              </p>
              <pre
                ref={fullmaktRef}
                className="mt-5 overflow-x-auto whitespace-pre-wrap rounded-xl border border-secondary-dark bg-background-alt p-4 font-sans text-sm leading-relaxed text-text sm:p-6"
              >
                {fullmakt}
              </pre>
            </div>
          ) : null}

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
