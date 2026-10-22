import Tier from '../Tier';
import { PAYMENT_LINKS as L } from '@/lib/payments';
import { SITE } from '@/lib/errors';
export const metadata = { title: 'Get your tool featured on FixStack', description: 'Feature your developer tool as a recommended solution on relevant FixStack error pages.', alternates: { canonical: `${SITE.url}/featured/` } };
export default function Page() {
  return (<><h1>Get featured</h1><p>Does your tool genuinely solve one of the errors on FixStack? Get listed as a recommended tool on the relevant error pages. Every listing is reviewed for relevance and labeled as featured.</p>
    <p>A featured listing is $39/mo on up to 5 pages; a <a href="/sponsor/">category sponsorship</a> is an exclusive callout on every page in a category.</p>
    <p><strong>Traffic is still near zero</strong> — the site launched in October 2026 and we are still growing through Google search and a weekly newsletter. We tell every advertiser this up front.</p>
    <div className="tiers"><Tier name="Featured tool listing" price="$39 / month" desc="Listed on up to 5 relevant error pages, with a short description and link." link={L.featured} /></div>
    <p className="fine">Questions: email <a href="mailto:mainstreettools@gmail.com">mainstreettools@gmail.com</a>.</p></>);
}
