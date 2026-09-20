import type { Locale } from '@/lib/i18n/types';
import { getStatusVisning } from '@/i18n/messages/status';

/**
 * Statusmerke for et kundesegment.
 *
 * Statusen kommer fra fakta/segmenter.yaml. Teksten kommer fra
 * src/i18n/messages/status.ts. Ingen side skal skrive statusteksten selv.
 */
export function SegmentBadge({
  segment,
  locale,
  className = '',
}: {
  segment: string;
  locale: Locale;
  className?: string;
}) {
  const { tekst, farge } = getStatusVisning(segment, locale);
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${farge} ${className}`}>
      {tekst}
    </span>
  );
}
