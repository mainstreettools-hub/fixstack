import { errors, PLATFORMS, platformSlug, OG_IMAGE, SITE } from '@/lib/errors';
import ErrorList from './ErrorList';
import Newsletter from './Newsletter';
const homeTitle = 'FixStack: Fixes for Lovable, Cursor, Supabase, Vercel, Stripe & Next.js errors';
const homeDesc = 'Copy-paste fixes for the most common Lovable, Cursor, Bolt, Replit, Supabase, Vercel, Stripe and Next.js errors: the exact error text, what it means, and step-by-step fixes with code.';
export const metadata = {
  alternates: { canonical: `${SITE.url}/` },
  openGraph: { title: homeTitle, description: homeDesc, url: '/', siteName: 'FixStack', type: 'website', locale: 'en_US', images: [OG_IMAGE] },
  twitter: { card: 'summary_large_image', title: homeTitle, description: homeDesc, images: [OG_IMAGE.url] },
};
export default function Home() {
  return (<><h1>Fix your error in 60 seconds</h1><p className="sub">Plain-English fixes for the most common Lovable, Cursor, Supabase, Vercel and Next.js errors.</p>
    <p><a href="/quiz/">Not sure which fix? Take the quiz →</a></p><p><a href="/fix-pack/">Get all fixes as a printable PDF checklist →</a></p>
    <p className="fine">Browse by platform: {PLATFORMS.map((p, i) => <span key={p}>{i > 0 && ' · '}<a href={`/platforms/${platformSlug(p)}/`}>{p}</a></span>)}</p>
    <ErrorList errors={errors.map(({ slug, platform, title, message }) => ({ slug, platform, title, message }))} platforms={PLATFORMS} /><Newsletter /></>);
}
