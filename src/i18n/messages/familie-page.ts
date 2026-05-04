import type { Locale } from '@/lib/i18n/types';

export type FamilieFeature = { title: string; description: string };
export type FamilieScenario = { title: string; description: string };
export type FamilieStep = { step: string; title: string; description: string };
export type FamiliePricingTier = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: { text: string; href: string };
  highlighted: boolean;
  badge: string;
};

export type FamilieContent = {
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryCtaHref: string;
  scenarioTitle: string;
  scenarioP1: string;
  scenarioP2: string;
  scenarioP3: string;
  featuresTitle: string;
  featuresSubtitle: string;
  features: FamilieFeature[];
  whoTitle: string;
  whoSubtitle: string;
  scenarios: FamilieScenario[];
  stepsTitle: string;
  steps: FamilieStep[];
  pricingTitle: string;
  pricingSubtitle: string;
  pricingFootnote: string;
  pricingTiers: FamiliePricingTier[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaPrimary: string;
};

const familyFeaturesNo: FamilieFeature[] = [
  { title: 'Del dagbok, bilder og meldinger', description: 'Del hverdagsøyeblikk og viktige beskjeder med hele familien i én sikker kanal.' },
  { title: 'Felles kalender', description: 'Familien holder oversikt over avtaler, besøk og aktiviteter på ett sted.' },
  { title: 'En livshistorie som vokser med familien', description: 'KAI samler bilder og hverdagsnotater til en sammenhengende livshistorie som familien kan lese seg gjennom.' },
  { title: 'Plass til hele familien', description: 'Du kan invitere opptil ti familiemedlemmer inn i Familierommet, slik at alle som bryr seg får følge med.' },
  { title: 'Koble til kommunens helseteam', description: 'Når behovet oppstår, kan dere koble helsepersonell fra kommunen inn i Familierommet.' },
];

const familyFeaturesEn: FamilieFeature[] = [
  { title: 'Share diary, photos and messages', description: 'Share diary entries, photos and messages with the whole family.' },
  { title: 'Shared calendar', description: 'One calendar for appointments, visits and activities.' },
  { title: 'AI-generated life story', description: 'An AI-generated life story that helps preserve memories.' },
  { title: 'Invite up to 10 family members', description: 'Invite up to 10 family members.' },
  { title: 'Connect to the municipal health team', description: 'Connect to municipal health services when the need arises.' },
];

const scenariosNo: FamilieScenario[] = [
  { title: 'Eldre foreldre', description: 'Foreldre som trenger mer hjelp i hverdagen, men fortsatt bor hjemme.' },
  { title: 'Demensdiagnose', description: 'Når noen i familien har fått en demensdiagnose og trenger mer oppfølging.' },
  { title: 'Spredt familie', description: 'Når søsken bor spredt i landet, men alle vil bidra og holde seg oppdatert.' },
  { title: 'Kognitive utfordringer', description: 'Familier med barn eller voksne som trenger ekstra koordinering i hverdagen.' },
];

const scenariosEn: FamilieScenario[] = [
  { title: 'Ageing parents', description: 'Parents who need more support in everyday life while still living at home.' },
  { title: 'Dementia diagnosis', description: 'When someone in the family has received a dementia diagnosis and needs closer follow-up.' },
  { title: 'Family spread across the country', description: 'When siblings live far apart but all want to contribute and stay informed.' },
  { title: 'Cognitive challenges', description: 'Families with children or adults who need extra coordination in everyday life.' },
];

const stepsNo: FamilieStep[] = [
  { step: '1', title: 'Opprett familierom', description: 'Registrer deg og fortell oss hvem som skal få omsorg.' },
  { step: '2', title: 'Inviter familien', description: 'Legg til søsken, barn og andre som vil følge med.' },
  { step: '3', title: 'Del hverdagen', description: 'Skriv i dagboken, del bilder og bruk kalenderen.' },
  { step: '4', title: 'Koble til kommunen', description: 'Når behovet oppstår, inviterer dere helsepersonell inn i teamet.' },
];

const stepsEn: FamilieStep[] = [
  { step: '1', title: 'Create a family room', description: 'Sign up and tell us who the care is for.' },
  { step: '2', title: 'Invite the family', description: 'Add siblings, children and others who want to stay involved.' },
  { step: '3', title: 'Share everyday life', description: 'Write in the diary, share photos and use the calendar.' },
  { step: '4', title: 'Connect the municipality', description: 'When the need arises, invite health staff into the team.' },
];

const pricingNo: FamiliePricingTier[] = [
  {
    name: 'Familie',
    price: 'kr 299',
    period: '/mnd',
    description: 'For familier som vil holde kontakten og koordinere hverdagen.',
    features: [
      '14 dager gratis prøveperiode',
      'Inviter opptil 10 familiemedlemmer',
      'Delt tidslinje med bilder og tekst',
      'Felles kalender',
      'AI-generert livshistorie',
      'Sikker meldingskanal',
      'Koble til kommunens helseteam',
    ],
    cta: { text: 'Opprett Familierom gratis', href: 'https://app.jodaskills.com/register?flow=family' },
    highlighted: true,
    badge: 'Gratis i 14 dager',
  },
];

const pricingEn: FamiliePricingTier[] = [
  {
    name: 'Family',
    price: 'NOK 299',
    period: '/month',
    description: 'For families who want to stay in touch and coordinate everyday life.',
    features: [
      '14-day free trial',
      'Invite up to 10 family members',
      'Shared timeline with photos and text',
      'Shared calendar',
      'AI-generated life story',
      'Secure messaging channel',
      'Connect to the municipal health team',
    ],
    cta: { text: 'Create family room free', href: 'https://app.jodaskills.com/register?flow=family' },
    highlighted: true,
    badge: '14 days free',
  },
];

const no: FamilieContent = {
  heroTitle: 'Start et Familierom',
  heroSubtitle:
    'Samle familien rundt den som trenger omsorg. Del hverdagen, koordiner besøk, og hold alle oppdatert uansett hvor dere bor i landet.',
  heroBadge: 'Gratis i 14 dager',
  primaryCta: 'Opprett Familierom gratis',
  secondaryCta: 'Se hvordan det fungerer',
  secondaryCtaHref: '#hvordan',
  scenarioTitle: 'Kjenner du deg igjen?',
  scenarioP1:
    'Du merker at mamma glemmer mer og mer. Søsknene dine bor spredt i landet. Dere vil alle bidra, men ingen har oversikt.',
  scenarioP2: 'Hvem var hos mamma i dag? Har hun tatt medisinene? Hvordan var dagen hennes?',
  scenarioP3:
    'Med JodaCare får hele familien én felles plass for informasjon om den dere er glad i. Alle kan bidra. Alle holder seg oppdatert. Og mamma får sammenheng i hverdagen gjennom bilder og dialog.',
  featuresTitle: 'Alt familien trenger',
  featuresSubtitle: 'Enkle verktøy for å holde kontakten og koordinere hverdagen.',
  features: familyFeaturesNo,
  whoTitle: 'Hvem er dette for?',
  whoSubtitle: 'JodaCare passer for alle familier som koordinerer omsorg på tvers av avstand.',
  scenarios: scenariosNo,
  stepsTitle: 'Kom i gang på minutter',
  steps: stepsNo,
  pricingTitle: 'Enkel prising for familier',
  pricingSubtitle: 'Start gratis og oppgrader når du er klar.',
  pricingFootnote: 'Ingen kredittkort kreves. Du får fjorten dager gratis prøveperiode, og prisen er 299 kr per måned uten binding etter det.',
  pricingTiers: pricingNo,
  ctaTitle: 'Gi familien din trygghet',
  ctaSubtitle: 'Start gratis i dag og se hvor enkelt det er å holde alle oppdatert.',
  ctaPrimary: 'Opprett Familierom gratis',
};

const en: FamilieContent = {
  heroTitle: 'Start a family room',
  heroSubtitle:
    'Bring the family together around the person who needs care. Share everyday life, coordinate visits and keep everyone updated wherever you live.',
  heroBadge: '14 days free',
  primaryCta: 'Create family room free',
  secondaryCta: 'See how it works',
  secondaryCtaHref: '#hvordan',
  scenarioTitle: 'Does this sound familiar?',
  scenarioP1:
    'You notice Mum forgetting more and more. Your siblings live across the country. Everyone wants to help, but no one has the full picture.',
  scenarioP2: 'Who visited Mum today? Has she taken her medicines? How was her day?',
  scenarioP3:
    'With JodaCare the whole family gets one shared place for information about the person you love. Everyone can contribute. Everyone stays updated. And everyday life gains continuity through photos and dialogue.',
  featuresTitle: 'Everything the family needs',
  featuresSubtitle: 'Simple tools to stay in touch and coordinate everyday life.',
  features: familyFeaturesEn,
  whoTitle: 'Who is this for?',
  whoSubtitle: 'JodaCare suits any family coordinating care across distance.',
  scenarios: scenariosEn,
  stepsTitle: 'Get started in minutes',
  steps: stepsEn,
  pricingTitle: 'Simple pricing for families',
  pricingSubtitle: 'Start free and upgrade when you are ready.',
  pricingFootnote: 'No credit card. 14 days free. NOK 299/month afterwards, no lock-in.',
  pricingTiers: pricingEn,
  ctaTitle: 'Give your family peace of mind',
  ctaSubtitle: 'Start free today and see how easy it is to keep everyone updated.',
  ctaPrimary: 'Create family room free',
};

export function getFamilieContent(locale: Locale): FamilieContent {
  return locale === 'en' ? en : no;
}
