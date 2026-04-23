'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Container } from '@/components/ui';
import { getSite } from '@/i18n/site';
import type { Locale } from '@/lib/i18n/types';

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname() || '/';
  const locale: Locale = pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'no';
  const s = getSite(locale).banner;

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-white py-4 relative">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/images/guttapp.png"
              alt={s.imageAlt}
              width={80}
              height={80}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="font-semibold text-lg">{s.title}</p>
            <p className="text-white/80 text-sm mt-1">{s.body}</p>
            <Link
              href="https://app.jodacare.no"
              className="inline-block mt-2 text-sm font-medium text-accent-light hover:text-white underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.cta}
            </Link>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 md:relative md:top-0 md:right-0 p-1 hover:bg-white/10 rounded-full transition-colors"
            aria-label={s.close}
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
      </Container>
    </div>
  );
}
