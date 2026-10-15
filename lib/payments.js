// Stripe Payment Links (live, MainStreetAI Stripe account, products prefixed "FixStack").
export const PAYMENT_LINKS = {
  sponsorSite: 'https://buy.stripe.com/9B68wO4QMdRXaojfHygA804',
  sponsorCategory: 'https://buy.stripe.com/6oU28q2IEaFL9kf66YgA805', // Platform sponsor ($59/mo)
  sponsorNewsletter: 'https://buy.stripe.com/5kQ14m6YUdRX8gb0MEgA806',
  featured: 'https://buy.stripe.com/4gM5kCfvq8xDcwr7b2gA807',
};

// Error-category sponsorships (monthly). Keyed by category id from lib/categories.js.
// Free first month is native to each Payment Link (subscription_data.trial_period_days=30),
// so checkout shows $0 due today immediately. No promo code prefill (it would stack).
// After completion, links redirect to /sponsor/thanks/.
export const CATEGORY_SPONSOR = {
  firstMonthCode: '',
  trialDays: 30,
  // Set a category to 'sold' to flag it as taken on /sponsor.
  status: {},
  prices: {
    'stripe-payments': 350,
    'supabase-auth': 350,
    'vercel-deploy': 300,
    'serverless-functions': 300,
    'supabase-database': 250,
    'react-rendering': 250,
    'nextjs-app-router': 250,
    'ai-builder-apps': 250,
    'cursor-editor': 250,
    'runtime-node-python': 250,
  },
  links: {
    'stripe-payments': 'https://buy.stripe.com/7sY5kCerm5lrcwr7b2gA809',
    'supabase-auth': 'https://buy.stripe.com/00w8wObfa29f0NJ52UgA80a',
    'vercel-deploy': 'https://buy.stripe.com/28E00i0Aw5lr683gLCgA80b',
    'serverless-functions': 'https://buy.stripe.com/5kQ00i3MIbJP53Z52UgA80c',
    'supabase-database': 'https://buy.stripe.com/bJeeVc82Y15bgMHgLCgA80d',
    'react-rendering': 'https://buy.stripe.com/dRm5kC82Y6pvfIDanegA80e',
    'nextjs-app-router': 'https://buy.stripe.com/9B6fZgab6dRX1RN8f6gA80f',
    'ai-builder-apps': 'https://buy.stripe.com/00w3cu2IE15b1RN9jagA80g',
    'cursor-editor': 'https://buy.stripe.com/8x2eVc1EA7tz7c7gLCgA80h',
    'runtime-node-python': 'https://buy.stripe.com/7sY9AS1EA29fdAv52UgA80i',
  },
};

export function categorySponsorCheckout(categoryId) {
  const link = CATEGORY_SPONSOR.links[categoryId];
  if (!link) return '';
  const code = CATEGORY_SPONSOR.firstMonthCode;
  return code ? `${link}?prefilled_promo_code=${code}` : link;
}

export const FIX_PACK = {
  link: 'https://buy.stripe.com/cNi00i9729BH9kffHygA808',
  launchCode: 'LAUNCH9', // $3 off, expires Nov 13, 2026 11:05 PM ET. Set to '' after launch.
};
