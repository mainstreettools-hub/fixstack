import { COMPARISONS } from '@/lib/comparisons';
import { SITE } from '@/lib/errors';
export const metadata = {
  title: 'Tool comparisons: monitoring and hosting',
  description: 'Honest side-by-side comparisons of monitoring and hosting tools FixStack readers use: Better Stack, Sentry, Checkly, Railway, Render, Vercel, Netlify and DigitalOcean App Platform.',
  alternates: { canonical: `${SITE.url}/compare/` },
};
export default function Page() {
  const monitoring = COMPARISONS.filter(c => c.category === 'monitoring');
  const hosting = COMPARISONS.filter(c => c.category === 'hosting');
  const ld = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'FixStack tool comparisons', url: `${SITE.url}/compare/` };
  return (<article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    <h1>Tool comparisons</h1>
    <p>Side-by-side notes on monitoring and hosting tools that show up next to FixStack error fixes. Prices and features are taken from each product's public pricing page (checked October 2026). We do not invent benchmarks or traffic numbers.</p>
    <h2>Monitoring</h2>
    <ul className="list">{monitoring.map(c => (
      <li key={c.slug}><a href={`/compare/${c.slug}/`}><strong>{c.title}</strong><br /><span className="sub">{c.description}</span></a></li>
    ))}</ul>
    <h2>Hosting</h2>
    <ul className="list">{hosting.map(c => (
      <li key={c.slug}><a href={`/compare/${c.slug}/`}><strong>{c.title}</strong><br /><span className="sub">{c.description}</span></a></li>
    ))}</ul>
    <p className="fine">Related: <a href="/guides/uptime-monitoring-better-stack/">Uptime monitoring with Better Stack</a>. Some product links on comparison pages are affiliate links; see each page and our <a href="/disclosure/">disclosure</a>.</p>
  </article>);
}
