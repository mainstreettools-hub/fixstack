import { errors, getError, SITE } from '@/lib/errors';
import Newsletter from '../../Newsletter';
export const dynamicParams = false;
export function generateStaticParams() { return errors.map(e => ({ slug: e.slug })); }
export function generateMetadata({ params }) {
  const e = getError(params.slug);
  const description = `${e.platform} error fix: ${e.meaning}`.slice(0, 158);
  return { title: `${e.title} (${e.platform} fix)`, description, alternates: { canonical: `/errors/${e.slug}/` }, openGraph: { title: e.title, description, type: 'article' } };
}
export default function Page({ params }) {
  const e = getError(params.slug);
  const ld = { '@context': 'https://schema.org', '@type': 'TechArticle', headline: e.title, about: e.platform, url: `${SITE.url}/errors/${e.slug}/` };
  return (<article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    <p><a href="/">← All errors</a> · <span className="tag">{e.platform}</span></p>
    <h1>{e.title}</h1>
    <h2>Exact error</h2><pre className="err">{e.message}</pre>
    <h2>What it means</h2><p>{e.meaning}</p>
    <h2>Likely causes</h2><ul>{e.causes.map((c, i) => <li key={i}>{c}</li>)}</ul>
    <h2>How to fix it</h2><ol>{e.steps.map((s, i) => <li key={i}><p>{s.text}</p>{s.code && <pre><code>{s.code}</code></pre>}</li>)}</ol>
    <h2>Related errors</h2><ul>{e.related.map(r => { const x = getError(r); return <li key={r}><a href={`/errors/${r}/`}>{x.title}</a></li>; })}</ul>
    <Newsletter />
  </article>);
}
