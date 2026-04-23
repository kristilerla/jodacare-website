import { headers } from 'next/headers';
import type { Locale } from './types';

export async function getLocaleFromHeaders(): Promise<Locale> {
  const h = await headers();
  return h.get('x-next-locale') === 'en' ? 'en' : 'no';
}
