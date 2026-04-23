import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { getLocaleFromHeaders } from '@/lib/i18n/get-locale';
import { withLocale } from '@/lib/i18n/paths';
import { getSite } from '@/i18n/site';

export async function Footer() {
  const locale = await getLocaleFromHeaders();
  const s = getSite(locale);
  const { items } = s.footer;

  const mapHref = (href: string) =>
    href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
      ? href
      : withLocale(href, locale);

  return (
    <footer className="bg-primary text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        {s.footer.heading}
      </h2>
      <Container className="py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6">
            <Image
              src="/brand/jodacare-horisontal.svg"
              alt="JodaCare logo"
              width={252}
              height={54}
              className="h-10 w-auto"
            />
            <p className="text-sm text-white/80 max-w-xs">{s.footer.tagline}</p>
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
                Jørgens vei 9, Asker
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold">{s.footer.product}</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {items.produkt.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={mapHref(item.href)}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold">{s.footer.company}</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {items.selskap.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={mapHref(item.href)}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                        {...(item.href.startsWith('http')
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold">{s.footer.resources}</h3>
              <ul role="list" className="mt-4 space-y-3">
                {items.ressurser.map((item) => (
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
            &copy; {new Date().getFullYear()} JodaCare AS. {s.footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
