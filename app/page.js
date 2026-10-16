import { errors, PLATFORMS, platformSlug } from '@/lib/errors';
import ErrorList from './ErrorList';
import Newsletter from './Newsletter';
export default function Home() {
  return (<><h1>Fix your error in 60 seconds</h1><p className="sub">Plain-English fixes for the most common Lovable, Cursor, Supabase, Vercel and Next.js errors.</p>
    <p><a href="/quiz/">Not sure which fix? Take the quiz →</a></p><p><a href="/fix-pack/">Get all fixes as a printable PDF checklist →</a></p>
    <p className="fine">Browse by platform: {PLATFORMS.map((p, i) => <span key={p}>{i > 0 && ' · '}<a href={`/platforms/${platformSlug(p)}/`}>{p}</a></span>)}</p>
    <ErrorList errors={errors.map(({ slug, platform, title, message }) => ({ slug, platform, title, message }))} platforms={PLATFORMS} /><Newsletter /></>);
}
