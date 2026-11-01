import type { StatusVisning } from '@/i18n/messages/status';

/**
 * Viser et merke laget av modulMerke, funksjonMerke eller getStatusVisning
 * i src/i18n/messages/status.ts. Komponenten skriver aldri tekst selv.
 */
export function StatusMerke({ merke, className = '' }: { merke?: StatusVisning; className?: string }) {
  if (!merke) return null;
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${merke.farge} ${className}`}>
      {merke.tekst}
    </span>
  );
}
