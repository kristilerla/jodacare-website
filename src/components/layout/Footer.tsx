import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const navigation = {
  produkt: [
    { name: 'For kommuner', href: '/kommune' },
    { name: 'For familier', href: '/familie' },
    { name: 'Sikkerhet', href: '/sikkerhet' },
    { name: 'Teknologi', href: '/teknologi' },
  ],
  selskap: [
    { name: 'Om oss', href: '/om' },
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Jodapro AS', href: 'https://jodapro.no' },
  ],
  ressurser: [
    { name: 'Hjelpesenter', href: 'https://jodacare.atlassian.net/servicedesk/customer/portals' },
    { name: 'API-dokumentasjon', href: 'https://docs.jodacare.com' },
    { name: 'Logg inn', href: 'https://app.jodacare.no' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Bunntekst
      </h2>
      <Container className="py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6">
            <Image
              src="/logo/jodacare-logo.png"
              alt="jodacare logo"
              width={180}
              height={50}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm text-white/80 max-w-xs">
              En sikker plattform for kommunikasjon rundt sårbare personer. 
              Trygghet og verdighet i hverdagen.
            </p>
            <div className="space-y-3">
              <a 
                href="mailto:post@jodacare.com" 
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
              >
                <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
                post@jodacare.com
              </a>
              <a 
                href="tel:+4790606433" 
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
              >
                <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                +47 906 06 433
              </a>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <MapPinIcon className="h-5 w-5" aria-hidden="true" />
                Forskningsparken, Oslo
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold">Produkt</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.produkt.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold">Selskap</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.selskap.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                        {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Ressurser</h3>
              <ul role="list" className="mt-4 space-y-3">
                {navigation.ressurser.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} Jodapro AS. Alle rettigheter reservert. 
            jodacare er et registrert varemerke.
          </p>
        </div>
      </Container>
    </footer>
  );
}
