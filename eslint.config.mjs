import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import jsxA11y from "eslint-plugin-jsx-a11y";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // Tilgjengelighetsporten (WCAG 2.1 AA).
  //
  // next/core-web-vitals gir bare 6 av jsx-a11y-reglene, alle som `warn`.
  // Her slås hele `recommended` på som `error`. Nettsiden var ren da porten
  // ble satt 13. september 2026, så terskelen er null fra dag én — i motsetning
  // til appen, der porten måtte stå på `continue-on-error` mens gjelden ble
  // ryddet. Se docs/accessibility/nettsiden.md i jodacare-2.0.
  {
    // Pluginet er allerede registrert av eslint-config-next — det skal ikke
    // deklareres på nytt her, bare reglene skrus opp.
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    rules: {
      ...jsxA11y.configs.recommended.rules,

      // `role="list"` på en <ul> er formelt overflødig, men Safari og VoiceOver
      // fjerner listesemantikken når `list-style: none` er satt — og det er det
      // på alle listene våre. Rollen er derfor en bevisst løsning, ikke støy.
      "jsx-a11y/no-redundant-roles": ["error", { ul: ["list"] }],
    },
  },

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
