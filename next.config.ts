import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // jodacare.no → www.jodacare.no. Ligger her i stedet for som domeneredirect i
  // Vercel, fordi /.well-known/ må svare 200 direkte på jodacare.no
  // (Microsofts verifisering av utgiverdomene følger ikke viderekoblinger).
  async redirects() {
    return [
      {
        source: "/:path((?!\\.well-known(?:/|$)).*)",
        has: [{ type: "host", value: "jodacare.no" }],
        destination: "https://www.jodacare.no/:path",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
