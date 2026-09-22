'use client';

import { useState, useRef } from 'react';
import { ClipboardDocumentIcon, CheckIcon } from '@heroicons/react/24/outline';

interface BudsjettSitatProps {
  quote: string;
  copyLabel: string;
  copiedLabel: string;
}

/**
 * Sitatboks med kopier-knapp. Teksten er ment å limes rett inn i et
 * budsjettforslag, så knappen legger den på utklippstavlen. Der
 * utklippstavlen er sperret, markeres teksten i stedet, slik at den kan
 * kopieres for hånd.
 */
export function BudsjettSitat({ quote, copyLabel, copiedLabel }: BudsjettSitatProps) {
  const [kopiert, setKopiert] = useState(false);
  const sitatRef = useRef<HTMLParagraphElement>(null);

  const kopier = async () => {
    try {
      await navigator.clipboard.writeText(quote);
    } catch {
      const seksjon = window.getSelection();
      if (sitatRef.current && seksjon) {
        const omraade = document.createRange();
        omraade.selectNodeContents(sitatRef.current);
        seksjon.removeAllRanges();
        seksjon.addRange(omraade);
      }
    }
    setKopiert(true);
    window.setTimeout(() => setKopiert(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-secondary bg-white p-6 sm:p-8">
      <p ref={sitatRef} className="text-text leading-relaxed">
        {quote}
      </p>
      <button
        type="button"
        onClick={kopier}
        className="mt-6 inline-flex items-center gap-2 rounded-lg border-2 border-primary px-5 py-2.5 font-medium text-primary transition-colors duration-200 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        {kopiert ? (
          <CheckIcon className="h-5 w-5" aria-hidden="true" />
        ) : (
          <ClipboardDocumentIcon className="h-5 w-5" aria-hidden="true" />
        )}
        {kopiert ? copiedLabel : copyLabel}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {kopiert ? copiedLabel : ''}
      </span>
    </div>
  );
}
