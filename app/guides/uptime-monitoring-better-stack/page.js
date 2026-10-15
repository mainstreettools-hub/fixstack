import { SITE } from '@/lib/errors';
const title = 'How to catch Vercel and Supabase outages before your users do (Better Stack uptime + heartbeat monitoring)';
const description = 'Set up uptime checks and cron heartbeats with Better Stack so 500s, 504 timeouts, failing Edge Functions and silent cron failures alert you first.';
export const metadata = { title: 'Catch Vercel & Supabase outages before users do with Better Stack', description, alternates: { canonical: '/guides/uptime-monitoring-better-stack/' } };
const code1 = `// app/api/health/route.js  (Next.js App Router)
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Optional: check a dependency, e.g. a cheap Supabase query
    // const { error } = await supabase.from('profiles').select('id').limit(1);
    // if (error) throw error;
    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return Response.json({ ok: false }, { status: 500 });
  }
}`;
const code2 = `// At the END of your scheduled job, after it succeeds:
await fetch(process.env.HEARTBEAT_URL, { signal: AbortSignal.timeout(10000) });`;
export default function Page() {
  const ld = { '@context': 'https://schema.org', '@type': 'TechArticle', headline: title, url: `${SITE.url}/guides/uptime-monitoring-better-stack/` };
  return (<article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    <h1>{title}</h1>
    <p>Most of the errors on FixStack are found by a user first: a <a href="/errors/vercel-function-invocation-failed/">500 FUNCTION_INVOCATION_FAILED</a>, a <a href="/errors/vercel-function-timeout/">504 FUNCTION_INVOCATION_TIMEOUT</a>, an <a href="/errors/supabase-edge-function-non-2xx/">Edge Function returning a non-2xx status</a>, or a deploy that quietly <a href="/errors/vercel-404-not-found/">404s</a>. Monitoring flips that around: you get the alert, not the angry email.</p>
    <p>This guide uses <a href="https://betterstack.com/?ref=b-jj3e" rel="sponsored noopener" target="_blank">Better Stack Uptime</a>. Its free tier (per its product page at time of writing) includes 10 monitors, 10 heartbeats and a status page with 3-minute checks, which is enough for a typical Lovable, Bolt, or Next.js + Supabase app.</p>
    <h2>1. Add a health endpoint</h2>
    <p>A dedicated route lets a monitor test that your app and its database actually respond, not just that a static page loads.</p>
    <pre><code>{code1}</code></pre>
    <h2>2. Create uptime monitors</h2>
    <ol><li><a href="https://betterstack.com/?ref=b-jj3e" rel="sponsored noopener" target="_blank">Sign up at Better Stack</a> and create a monitor for your homepage URL.</li>
      <li>Create a second monitor for <code>https://yourdomain.com/api/health</code>, so you are alerted when it stops returning a success status.</li>
      <li>Choose how you want to be alerted (email, Slack, SMS, phone call or push, depending on plan).</li></ol>
    <p>Better Stack records the error response and a screenshot when a check fails, which helps you match the failure to the right FixStack page.</p>
    <h2>3. Monitor cron jobs with heartbeats</h2>
    <p>Scheduled jobs (Vercel Cron, Supabase scheduled functions, backups) fail silently: nothing errors on a page, the job just doesn't run. A heartbeat monitor gives you a URL to request each time the job succeeds; if the request doesn't arrive on schedule, you get alerted.</p>
    <pre><code>{code2}</code></pre>
    <h2>4. Add a status page (optional)</h2>
    <p>A public status page lets customers check for incidents instead of emailing you, and can be hosted on a subdomain such as status.yourdomain.com.</p>
    <h2>Which FixStack errors this catches</h2>
    <ul><li><a href="/errors/vercel-function-timeout/">FUNCTION_INVOCATION_TIMEOUT (504)</a> and <a href="/errors/vercel-function-invocation-failed/">FUNCTION_INVOCATION_FAILED (500)</a>: health checks fail.</li>
      <li><a href="/errors/supabase-edge-function-non-2xx/">Edge Function returned a non-2xx status code</a>: monitor the function URL directly.</li>
      <li><a href="/errors/vercel-404-not-found/">404: NOT_FOUND</a> after a bad deploy: homepage monitor fails.</li>
      <li><a href="/errors/lovable-blank-page-after-deploy/">Blank page after deploy</a>: an HTTP check alone may still see 200; Better Stack's Playwright transaction monitoring (real browser) can check that key content renders.</li></ul>
    <p className="fine">Some Better Stack links on this page are affiliate links: if you sign up through them, FixStack may earn a commission at no extra cost to you. <a href="/disclosure/">Disclosure</a>.</p>
  </article>);
}
