'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Container } from '@/components/ui';
import { Button } from '@/components/ui';
import clsx from 'clsx';

const kommuneLinks = [
  { name: 'Omsorgsbolig / Hub', href: '/omsorgsbolig' },
  { name: 'BPA', href: '/bpa' },
  { name: 'Avlastning', href: '/avlastning' },
  { name: 'Barnevern', href: '/barnevern' },
  { name: 'JodaVisit', href: '/jodavisit' },
  { name: 'Implementering', href: '/implementering' },
];

const navigation = [
  { name: 'For familier', href: '/familie' },
  { name: 'Om oss', href: '/om' },
  { name: 'Sikkerhet', href: '/sikkerhet' },
  { name: 'Kontakt', href: '/kontakt' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [kommuneOpen, setKommuneOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setKommuneOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-secondary">
      <Container>
        <nav className="flex items-center justify-between py-4" aria-label="Hovednavigasjon">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5" aria-label="jodacare - Gå til forsiden">
              <Image
                src="/brand/jodacare-horisontal.svg"
                alt="JodaCare logo"
                width={252}
                height={54}
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

          <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
            {/* For kommuner dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-text-light hover:text-primary transition-colors"
                onClick={() => setKommuneOpen(!kommuneOpen)}
                aria-expanded={kommuneOpen}
                aria-haspopup="true"
              >
                For kommuner
                <ChevronDownIcon
                  className={clsx(
                    'h-4 w-4 transition-transform duration-200',
                    kommuneOpen && 'rotate-180'
                  )}
                  aria-hidden="true"
                />
              </button>
              {kommuneOpen && (
                <div className="absolute left-0 top-full mt-2 w-56 rounded-xl bg-white shadow-lg ring-1 ring-black/5 py-2 z-50">
                  {kommuneLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-text-light hover:bg-secondary-light hover:text-primary transition-colors"
                      onClick={() => setKommuneOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

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
                src="/brand/jodacare-horisontal.svg"
                alt="JodaCare logo"
                width={252}
                height={54}
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
                {/* For kommuner section in mobile */}
                <p className="px-3 text-xs font-semibold text-text-light uppercase tracking-wider">
                  For kommuner
                </p>
                {kommuneLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm font-medium text-text hover:bg-secondary-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-2" />
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
