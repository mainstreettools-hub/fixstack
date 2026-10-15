import { AFFILIATES, PLATFORM_AFFILIATES, CATEGORY_SPONSORS } from '@/lib/monetization';
import AffiliateDisclosure from './AffiliateDisclosure';
export default function PlatformExtras({ platform }) {
  const sponsor = CATEGORY_SPONSORS[platform];
  const tools = (PLATFORM_AFFILIATES[platform] || []).map(k => AFFILIATES[k]).filter(a => a && a.url);
  return (<>
    {sponsor ? <aside className="tier"><span className="tag">Sponsor</span><a href={sponsor.url} rel="sponsored noopener">{sponsor.name}</a>: {sponsor.tagline}</aside>
      : <aside className="fine">Sponsor all {platform} fixes: <a href="/sponsor/">reach builders here</a>.</aside>}
    {tools.length > 0 && <section><h2>Tools that help</h2><ul>{tools.map(t => <li key={t.name}><a href={t.url} rel="sponsored noopener" target="_blank">{t.name}</a>: {t.blurb}</li>)}</ul></section>}
    {tools.length > 0 && <AffiliateDisclosure />}
  </>);
}
