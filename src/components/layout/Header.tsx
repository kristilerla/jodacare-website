'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Container } from '@/components/ui';
import { Button } from '@/components/ui';
import clsx from 'clsx';

const navigation = [
  { name: 'For kommuner', href: '/kommune' },
  { name: 'For familier', href: '/familie' },
  { name: 'Om oss', href: '/om' },
  { name: 'Sikkerhet', href: '/sikkerhet' },
  { name: 'Teknologi', href: '/teknologi' },
  { name: 'Kontakt', href: '/kontakt' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-secondary">
      <Container>
        <nav className="flex items-center justify-between py-4" aria-label="Hovednavigasjon">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5" aria-label="jodacare - Gå til forsiden">
              <Image
                src="/logo/jodacare-logo.png"
                alt="jodacare logo"
                width={180}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-text"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Åpne hovedmeny"
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-text-light hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <Button href="https://app.jodacare.no" variant="outline" size="sm">
              Logg inn
            </Button>
            <Button href="/kontakt" size="sm">
              Kom i gang
            </Button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={clsx(
          'lg:hidden fixed inset-0 z-50 transition-opacity duration-300',
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobilmeny"
      >
        <div 
          className="fixed inset-0 bg-text/20" 
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={clsx(
            'fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-secondary',
            'transform transition-transform duration-300 ease-in-out',
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src="/logo/jodacare-logo.png"
                alt="jodacare logo"
                width={150}
                height={42}
                className="h-9 w-auto"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-text"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Lukk meny"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-secondary">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-text hover:bg-secondary-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 space-y-3">
                <Button href="https://app.jodacare.no" variant="outline" fullWidth>
                  Logg inn
                </Button>
                <Button href="/kontakt" fullWidth>
                  Kom i gang
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
