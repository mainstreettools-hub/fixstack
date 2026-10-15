import AffiliateDisclosure from '../../AffiliateDisclosure';
import FaqSection from '../../FaqSection';
import { SITE } from '@/lib/errors';
const slug = 'better-stack-vs-sentry';
const title = 'Better Stack vs Sentry: which monitoring tool for your Next.js or Supabase app?';
const description = 'Compare Better Stack and Sentry for uptime, error tracking, logs and on-call. Pricing from official pages (Oct 2026) and when each fits FixStack readers.';
export const metadata = { title: 'Better Stack vs Sentry', description, alternates: { canonical: `/compare/${slug}/` } };
const faq = [
  { q: 'Is Better Stack a Sentry replacement?', a: 'Better Stack offers Sentry SDK-compatible error tracking plus uptime, logs, status pages and on-call. Sentry remains stronger for deep application debugging (spans, replays, profiling). Many teams use both.' },
  { q: 'Which has the better free tier for a solo builder?', a: 'Better Stack\'s free tier includes 10 monitors/heartbeats, a status page, Slack/email alerts, and limited free telemetry. Sentry\'s free Developer plan covers one user with error monitoring and tracing. Check each pricing page for current quotas.' },
  { q: 'Does FixStack earn a commission?', a: 'Yes on Better Stack signup links on this page. Sentry has no FixStack affiliate link. See the disclosure at the bottom.' },
];
export default function Page() {
  const ld = [
    { '@context': 'https://schema.org', '@type': 'TechArticle', headline: title, url: `${SITE.url}/compare/${slug}/`, dateModified: '2026-10-15' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
  return (<article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    <p className="fine"><a href="/compare/">← All comparisons</a></p>
    <h1>{title}</h1>
    <p>Sentry is built around catching and debugging application errors. <a href="https://betterstack.com/?ref=b-jj3e" rel="sponsored noopener" target="_blank">Better Stack</a> is built around uptime, incident response, status pages and a broader telemetry stack (logs, metrics, traces), with error tracking that accepts Sentry SDK payloads. Prices below are from each product's public pricing page as of October 2026.</p>

    <h2>Quick pick</h2>
    <ul>
      <li><strong>Choose Better Stack</strong> if you care first about "is the site up?", cron heartbeats, phone/SMS on-call, a public status page, or one place for logs + incidents.</li>
      <li><strong>Choose Sentry</strong> if you care first about stack traces, performance spans, session replay and deep app debugging inside the code you ship.</li>
      <li><strong>Use both</strong> when budget allows: Better Stack for uptime/on-call, Sentry for error detail. Their free tiers can cover a small personal project.</li>
    </ul>

    <h2>Feature comparison</h2>
    <table>
      <thead><tr><th></th><th>Better Stack</th><th>Sentry</th></tr></thead>
      <tbody>
        <tr><td>Primary focus</td><td>Uptime, incidents, status pages, logs/metrics/traces, error tracking</td><td>Application error monitoring, tracing, replays, profiling</td></tr>
        <tr><td>Uptime / cron</td><td>Full product (HTTP, heartbeats, SSL, keyword checks; Playwright transactions billed separately)</td><td>1 uptime + 1 cron monitor included on paid plans; extra uptime ~$1/monitor</td></tr>
        <tr><td>Error tracking</td><td>Yes; Sentry SDK-compatible; 100k exceptions included on free tier (per Better Stack pricing)</td><td>Core product; Team plan includes 50k errors/mo (annual default)</td></tr>
        <tr><td>Session replay</td><td>Yes (5k included on free tier per Better Stack pricing)</td><td>Yes (50 included on Team)</td></tr>
        <tr><td>On-call / phone SMS</td><td>Built-in for Responder seats</td><td>Alerts via email/integrations; not a full on-call product</td></tr>
        <tr><td>Status pages</td><td>Built-in (1 included)</td><td>Not a first-class product</td></tr>
        <tr><td>Logs / infra metrics</td><td>First-class (SQL-queryable logs, metrics bundles)</td><td>App-focused logs/metrics on paid plans</td></tr>
      </tbody>
    </table>

    <h2>Pricing (official pages, Oct 2026)</h2>
    <h3>Better Stack</h3>
    <ul>
      <li><strong>Free:</strong> 10 monitors &amp; heartbeats, 1 status page, Slack &amp; email alerts, 100k exceptions/mo, 5k session replays, 3 GB logs/traces (3-day retention), 30 GB metrics — per <a href="https://betterstack.com/pricing" rel="noopener" target="_blank">betterstack.com/pricing</a>.</li>
      <li><strong>Responder:</strong> $34/mo or $29/mo yearly per responder (uptime + telemetry access with phone/SMS/push and on-call). Extra 50 monitors: $25/mo ($21/mo yearly).</li>
      <li>Telemetry data bundles (Nano and up) and error overages are billed by volume/region; see their pricing page for current rates.</li>
    </ul>
    <h3>Sentry</h3>
    <ul>
      <li><strong>Developer (free):</strong> one user, error monitoring and tracing, email alerts — per <a href="https://sentry.io/pricing/" rel="noopener" target="_blank">sentry.io/pricing</a>. Confirm current free quotas on that page before you rely on a number.</li>
      <li><strong>Team:</strong> $26/mo when billed annually with default prepaid data; unlimited users; includes 50k errors, 5 GB logs, 5M spans, 50 replays, 1 uptime monitor, 1 cron monitor (per Sentry pricing/docs).</li>
      <li><strong>Business:</strong> $80/mo annually with advanced controls. Extra uptime monitors about $1 each (pay-as-you-go). Seer AI debugging is a separate subscription.</li>
    </ul>

    <h2>How this maps to FixStack errors</h2>
    <p>Better Stack uptime and heartbeats catch the failures users hit first: <a href="/errors/vercel-function-invocation-failed/">FUNCTION_INVOCATION_FAILED</a>, <a href="/errors/vercel-function-timeout/">FUNCTION_INVOCATION_TIMEOUT</a>, <a href="/errors/supabase-edge-function-non-2xx/">Edge Function non-2xx</a>, and silent cron failures. See our <a href="/guides/uptime-monitoring-better-stack/">uptime setup guide</a>.</p>
    <p>Sentry is the better fit when the app is up but throwing: hydration mismatches, client exceptions, or API handlers that return 500 with a stack you need to read.</p>

    <h2>Try Better Stack</h2>
    <p><a href="https://betterstack.com/?ref=b-jj3e" rel="sponsored noopener" target="_blank">Start on Better Stack's free tier</a> (affiliate link). We do not have a Sentry affiliate link; use <a href="https://sentry.io/" rel="noopener" target="_blank">sentry.io</a> directly.</p>
    <AffiliateDisclosure />
    <FaqSection faq={faq} />
    <p className="fine">Also see: <a href="/compare/better-stack-vs-checkly/">Better Stack vs Checkly</a>.</p>
  </article>);
}
