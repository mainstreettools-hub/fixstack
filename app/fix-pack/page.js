import { FIX_PACK } from '@/lib/payments';
import { errors, PLATFORMS, SITE } from '@/lib/errors';
export const metadata = { title: 'FixStack Fix Pack: printable error-fix checklists (PDF)', description: `${errors.length} step-by-step fixes for Lovable, Cursor, Bolt, Replit, Supabase, Vercel, Stripe and Next.js errors as one printable PDF checklist.`, alternates: { canonical: `${SITE.url}/fix-pack/` } };
export default function Page() {
  const href = FIX_PACK.launchCode ? `${FIX_PACK.link}?prefilled_promo_code=${FIX_PACK.launchCode}` : FIX_PACK.link;
  return (<><h1>The FixStack Fix Pack</h1>
    <p className="sub">Every FixStack fix in one 41-page PDF: {errors.length} errors across {PLATFORMS.join(', ')}, formatted as tick-box checklists you can work through offline.</p>
    <ul><li>Exact error message, what it means, and causes to check</li><li>Step-by-step fix checklists with copy-paste code</li><li>Universal debugging checklist for any new error</li><li>Instant download after payment</li></ul>
    <div className="tier"><p style={{ fontSize: 22 }}>{FIX_PACK.launchCode ? <><s>$12</s> <strong>$9 launch price</strong></> : <strong>$12</strong>}</p>
      {FIX_PACK.launchCode && <p className="fine">Code {FIX_PACK.launchCode} is applied automatically at checkout.</p>}
      <a className="btn" style={{ background: '#111' }} href={href}>Get the Fix Pack</a></div>
    <p className="fine">Prefer free? Every fix is also on this site. The Fix Pack is the same content, organized for offline use. <a href="/disclosure/">Disclosure</a></p></>);
}
