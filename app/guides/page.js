import { COMPARISONS } from '@/lib/comparisons';
import { SITE } from '@/lib/errors';
export const metadata = {
  title: 'Guides',
  description: 'Setup guides and tool comparisons for monitoring and hosting next to FixStack error fixes.',
  alternates: { canonical: '/guides/' },
};
export default function Page() {
  const ld = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'FixStack guides', url: `${SITE.url}/guides/` };
  return (<article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    <h1>Guides</h1>
    <ul className="list">
      <li><a href="/guides/uptime-monitoring-better-stack/"><strong>Catch outages before users do (Better Stack)</strong><br /><span className="sub">Health endpoints, uptime monitors and cron heartbeats for Vercel and Supabase apps.</span></a></li>
    </ul>
    <h2>Tool comparisons</h2>
    <p>Honest side-by-side notes with prices from each vendor's public page. Full list on <a href="/compare/">/compare</a>.</p>
    <ul className="list">{COMPARISONS.map(c => (
      <li key={c.slug}><a href={`/compare/${c.slug}/`}><strong>{c.title}</strong><br /><span className="sub">{c.description}</span></a></li>
    ))}</ul>
  </article>);
}
