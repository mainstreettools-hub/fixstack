import SponsorCallout from '../../SponsorCallout';
import { errors, getError, SITE } from '@/lib/errors';
import { categoryFor } from '@/lib/categories';
import { ERROR_CATEGORY_SPONSORS, PREVENTION_TOOLS } from '@/lib/monetization';
import Newsletter from '../../Newsletter';
import FixForMe from '../../FixForMe';
import PlatformExtras from '../../PlatformExtras';
import AffiliateDisclosure from '../../AffiliateDisclosure';
import FaqSection, { faqFor } from '../../FaqSection';
export const dynamicParams = false;
export function generateStaticParams() { return errors.map(e => ({ slug: e.slug })); }
export function generateMetadata({ params }) {
  const e = getError(params.slug);
  const description = `${e.platform} error fix: ${e.meaning}`.slice(0, 158);
  return { title: `${e.title} (${e.platform} fix)`, description, alternates: { canonical: `/errors/${e.slug}/` }, openGraph: { title: e.title, description, type: 'article' } };
}
export default function Page({ params }) {
  const e = getError(params.slug);
  const cat = categoryFor(e.slug);
  const sponsor = cat && ERROR_CATEGORY_SPONSORS[cat.id];
  const tools = (cat?.tools || []).map(k => PREVENTION_TOOLS[k]).filter(t => t && t.url);
  const faq = faqFor(e);
  const ld = [
    { '@context': 'https://schema.org', '@type': 'TechArticle', headline: e.title, about: e.platform, url: `${SITE.url}/errors/${e.slug}/` },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
      { '@type': 'ListItem', position: 2, name: e.platform, item: `${SITE.url}/` },
      { '@type': 'ListItem', position: 3, name: e.title, item: `${SITE.url}/errors/${e.slug}/` },
    ] },
  ];
  return (<article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, '\\u003c') }} />
    <p><a href="/">← All errors</a> · <span className="tag">{e.platform}</span>{cat && <span className="tag">{cat.name}</span>}</p>
    <h1>{e.title}</h1>
    <h2>Exact error</h2><pre className="err">{e.message}</pre>
    <h2>What it means</h2><p>{e.meaning}</p>
    <h2>Likely causes</h2><ul>{e.causes.map((c, i) => <li key={i}>{c}</li>)}</ul>
    <h2>How to fix it</h2><ol>{e.steps.map((s, i) => <li key={i}><p>{s.text}</p>{s.code && <pre><code>{s.code}</code></pre>}</li>)}</ol>
    {sponsor
      ? <SponsorCallout sponsor={sponsor} />
      : cat && <aside className="tier fine">Your tool here: sponsor <b>{cat.name}</b> and reach builders fixing these exact errors. <a href="/sponsor/#categories">Learn more</a></aside>}
    {cat && <><h2>Prevent this next time</h2><ul>{cat.prevent.map((p, i) => <li key={i}>{p}</li>)}</ul>
      {cat.tools.includes('betterstack') && <p>Guide: <a href="/guides/uptime-monitoring-better-stack/">catch outages before your users do</a>.</p>}
      {tools.length > 0 && <><p>Tools that help:</p><ul>{tools.map(t => <li key={t.name}><a href={t.url} rel="sponsored noopener" target="_blank">{t.name}</a>: {t.blurb}</li>)}</ul><AffiliateDisclosure /></>}</>}
    <FaqSection faq={faq} />
    <h2>Related errors</h2><ul>{e.related.map(r => { const x = getError(r); return <li key={r}><a href={`/errors/${r}/`}>{x.title}</a></li>; })}</ul>
    <FixForMe />
    <PlatformExtras platform={e.platform} />
    <Newsletter />
  </article>);
}
