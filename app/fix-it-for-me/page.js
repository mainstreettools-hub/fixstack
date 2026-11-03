import { SITE } from '@/lib/errors';
import { FIX_IT } from '@/lib/payments';
export const metadata = { title: 'Fix it for me: $49 to get your app working again', description: 'App broken and you don\'t want to dig through code or AI answers? I\'ll get it working again. $49 for one error, full refund if I can\'t.', alternates: { canonical: `${SITE.url}/fix-it-for-me/` } };
export default function Page() {
  const subject = 'Fix it for me';
  const body = 'Exact error text:\n\n\nTool (Lovable, Cursor, Supabase, etc.):\n\n\nRepo link or screenshot:\n\n\nWhat I have already tried:\n\n\n(Please don\'t include passwords, API keys or secret keys.)\n';
  const mailto = `mailto:${FIX_IT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return (<><h1>Fix it for me</h1>
    <p className="sub">Your app is broken and you don't want to spend another evening digging through code or AI answers. Send me the error and I\'ll get it working again. $49 for one error, or you don't pay.</p>
    <p>I'm Ryan Hovis and I run FixStack. I'll personally look at one error in your Lovable, Cursor, Bolt, Replit, Supabase, Vercel, Next.js or Stripe app, and either fix it or tell you exactly what to change.</p>
    <h2>What's included</h2>
    <ul><li>One error, start to finish</li><li>The fix itself, or the exact steps to apply it</li><li>A short note on what caused it, so you know what to watch for next time</li></ul>
    <h2>What's not included</h2>
    <ul><li>New features, or changes beyond that one error</li><li>Rebuilding or reworking a whole app</li><li>Ongoing support or maintenance</li><li>Anything that needs access I can't safely get</li></ul>
    <h2>Or you don't pay</h2>
    <p>You pay up front, but if I can't get it working, you get a full refund. Just reply to our email thread and say so.</p>
    <h2>How it works</h2>
    <ol><li>Pay $49 with the Stripe link below.</li><li><a href={mailto}>Email me the details</a>: the exact error text, which tool you're using, a repo link or screenshot, and what you've already tried.</li><li>We'll reply by email with next steps.</li><li>I get it working, or send you the exact steps. If I can't, you get a full refund.</li></ol>
    <div className="tier"><p style={{ fontSize: 22 }}><strong>$49 for one error</strong></p><p><a className="btn" style={{ background: '#111' }} href={FIX_IT.link}>Pay $49 with Stripe</a></p><p className="fine">Then <a href={mailto}>email the details</a> to {FIX_IT.email}. Not sure it's something I can help with? Email first and ask.</p></div>
    <p className="fine">Please don't send passwords, API keys or secret keys. The error text, a screenshot and a repo link are enough.</p></>);
}
