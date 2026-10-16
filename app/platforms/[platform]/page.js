import { errors, PLATFORMS, PLATFORM_INTROS, SITE, platformSlug, platformFromSlug } from '@/lib/errors';
import { CATEGORIES } from '@/lib/categories';
import Newsletter from '../../Newsletter';
export const dynamicParams = false;
export function generateStaticParams() { return PLATFORMS.map(p => ({ platform: platformSlug(p) })); }
export function generateMetadata({ params }) {
  const p = platformFromSlug(params.platform);
  const n = errors.filter(e => e.platform === p).length;
  const description = `${n} common ${p} errors with the exact message, cause and a step-by-step fix. ${PLATFORM_INTROS[p] || ''}`.slice(0, 158);
  return { title: `${p} errors and fixes`, description, alternates: { canonical: `/platforms/${params.platform}/` }, openGraph: { title: `${p} errors and fixes`, description } };
}
export default function Page({ params }) {
  const p = platformFromSlug(params.platform);
  const list = errors.filter(e => e.platform === p);
  const cats = CATEGORIES.filter(c => c.slugs.some(s => list.find(e => e.slug === s)));
  const url = `${SITE.url}/platforms/${params.platform}/`;
  const ld = [
    { '@context': 'https://schema.org', '@type': 'CollectionPage', name: `${p} errors and fixes`, url, about: p,
      mainEntity: { '@type': 'ItemList', numberOfItems: list.length, itemListElement: list.map((e, i) => ({ '@type': 'ListItem', position: i + 1, name: e.title, url: `${SITE.url}/errors/${e.slug}/` })) } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
      { '@type': 'ListItem', position: 2, name: p, item: url },
    ] },
  ];
  return (<article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, '\\u003c') }} />
    <p><a href="/">← All errors</a></p>
    <h1>{p} errors and fixes</h1>
    <p className="sub">{PLATFORM_INTROS[p]}</p>
    <p>{list.length} {p} error{list.length === 1 ? '' : 's'} below. Each page shows the exact error text, what it means, likely causes and a step-by-step fix.</p>
    <ul className="list">{list.map(e => <li key={e.slug}><a href={`/errors/${e.slug}/`}><strong>{e.title}</strong><br /><span className="sub">{e.meaning.split('. ')[0]}.</span></a></li>)}</ul>
    {cats.length > 0 && <><h2>Related error categories</h2><ul>{cats.map(c => <li key={c.id}>{c.name}: {c.slugs.length} pages</li>)}</ul></>}
    <p><a href="/quiz/">Not sure which one you have? Take the quiz →</a></p>
    <h2>Other platforms</h2>
    <p>{PLATFORMS.filter(x => x !== p).map((x, i) => <span key={x}>{i > 0 && ' · '}<a href={`/platforms/${platformSlug(x)}/`}>{x}</a></span>)}</p>
    <Newsletter />
  </article>);
}
