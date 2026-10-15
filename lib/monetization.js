// DRAFT: fill URLs after Ryan is approved for each program. Empty url = item hidden.
export const AFFILIATES = {
  railway:     { name: 'Railway', url: '', blurb: 'Deploy backends and databases; new users get $20 credit.' },
  digitalocean:{ name: 'DigitalOcean', url: '', blurb: 'Cloud servers and managed databases.' },
  hostinger:   { name: 'Hostinger', url: '', blurb: 'Budget hosting and VPS.' },
  cloudways:   { name: 'Cloudways', url: '', blurb: 'Managed cloud hosting.' },
  lovable:     { name: 'Lovable', url: '', blurb: 'AI app builder.' },
  bolt:        { name: 'Bolt', url: '', blurb: 'AI app builder; referred users get 20% off.' },
  v0:          { name: 'v0 by Vercel', url: '', blurb: 'AI UI/app generator.' },
};
// Which affiliate fits each platform's pages.
export const PLATFORM_AFFILIATES = { 'Vercel': ['railway', 'digitalocean'], 'Replit': ['railway', 'digitalocean'], 'Supabase': ['railway'], 'Next.js': ['v0', 'railway'], 'Lovable': ['lovable'], 'Bolt': ['bolt'], 'Cursor': [], 'Stripe': [] };
// "Get it fixed for me" referral targets.
export const FIX_FOR_ME = [
  { name: 'Fiverr', url: '', blurb: 'Hire a vetted developer for a fixed-price fix.' },
  { name: 'Upwork', url: '', blurb: 'Post the error and get proposals from freelancers.' },
];
// Platform sponsor slots (Platform Sponsor $59/mo), keyed by platform name.
export const CATEGORY_SPONSORS = { /* 'Supabase': { name: 'Acme', url: 'https://...', tagline: '...' } */ };
// Error-category sponsor slots, keyed by category id from lib/categories.js. Shown inside the fix section.
export const ERROR_CATEGORY_SPONSORS = { /* 'supabase-auth': { name: 'Acme', url: 'https://...', tagline: '...' } */ };
// Prevention tools for the 'Prevent this next time' step. Empty url = hidden.
export const PREVENTION_TOOLS = {
  betterstack: { name: 'Better Stack', url: '', blurb: 'Uptime, cron/heartbeat monitoring and log alerts.' },
  gitkraken:   { name: 'GitKraken', url: '', blurb: 'Visual Git client to review and roll back AI edits.' },
};
