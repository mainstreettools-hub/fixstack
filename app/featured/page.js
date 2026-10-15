import Tier from '../Tier';
import { PAYMENT_LINKS as L } from '@/lib/payments';
export const metadata = { title: 'Get your tool featured on FixStack', description: 'Feature your developer tool as a recommended solution on relevant FixStack error pages.', alternates: { canonical: '/featured/' } };
export default function Page() {
  return (<><h1>Get featured</h1><p>Does your tool genuinely solve one of the errors on FixStack? Get listed as a recommended tool on the relevant error pages. Every listing is reviewed for relevance and labeled as featured.</p>
    <div className="tiers"><Tier name="Featured tool listing" price="$39 / month" desc="Listed on up to 5 relevant error pages, with a short description and link." link={L.featured} /></div></>);
}
