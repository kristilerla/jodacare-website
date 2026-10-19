import type { NextConfig } from "next";

const KANONISK = "https://www.jodacare.no";

// Adresser fra den gamle nettsiden som Google fortsatt besøker (Search
// Console, oktober 2026). Spesifikke regler står før generelle. Ingen av
// kildene kan treffe en side i sitemap.xml.
//
// /JodaCare/... (stor C) står IKKE her, men i src/middleware.ts. Kildene her
// matches uavhengig av store/små bokstaver, også på Vercel, så en regel for
// /JodaCare/:path* sender de ekte sidene på /jodacare/... til seg selv i en
// evig løkke. experimental.caseSensitiveRoutes virker lokalt, men ikke på
// Vercel — verifisert på preview 19. oktober 2026.
const gamleAdresser = [
  { source: "/en/terms-of-use", destination: "/en/jodacare/bruksvilkar" },

  // Gamle blogginnlegg. Ingen av dem finnes som egen historie.
  { source: "/no/blogg/:slug*", destination: "/historier" },

  { source: "/no/hvordan-bruke-jodacare", destination: "/implementering" },
  { source: "/no/our-team", destination: "/om" },

  // Rester fra en gammel mal.
  { source: "/donate", destination: "/" },
  { source: "/month", destination: "/" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Hver gamle adresse står to ganger: først for jodacare.no, rett til
      // www, så Google ikke får en kjede via www-regelen under.
      ...gamleAdresser.flatMap(({ source, destination }) => [
        {
          source,
          has: [{ type: "host" as const, value: "jodacare.no" }],
          destination: `${KANONISK}${destination}`,
          permanent: true,
        },
        { source, destination, permanent: true },
      ]),

      // jodacare.no → www.jodacare.no. Ligger her i stedet for som domeneredirect i
      // Vercel, fordi /.well-known/ må svare 200 direkte på jodacare.no
      // (Microsofts verifisering av utgiverdomene følger ikke viderekoblinger).
      // De juridiske sidene hoppes over: der sender middlewaren til www selv,
      // så /JodaCare/... (stor C) når www i ett hopp og ikke to.
      {
        source: "/:path((?!\\.well-known(?:/|$)|(?:en/)?jodacare(?:/|$)).*)",
        has: [{ type: "host", value: "jodacare.no" }],
        destination: `${KANONISK}/:path`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
