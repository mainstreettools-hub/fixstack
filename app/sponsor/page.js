import Tier from '../Tier';
import { PAYMENT_LINKS as L } from '@/lib/payments';
export const metadata = { title: 'Sponsor FixStack', description: 'Reach developers and AI app builders at the exact moment they are fixing errors in Lovable, Cursor, Supabase, Vercel, Stripe and Next.js.', alternates: { canonical: '/sponsor/' } };
export default function Page() {
  return (<><h1>Sponsor FixStack</h1><p>FixStack readers are builders fixing real errors in Lovable, Cursor, Bolt, Replit, Supabase, Vercel, Stripe and Next.js. Sponsorships are clearly labeled and limited to products relevant to the error being fixed.</p>
    <div className="tiers">
      <Tier name="Site-wide sponsor" price="$149 / month" desc="One sponsor slot on every page plus the homepage. One sponsor at a time." link={L.sponsorSite} />
      <Tier name="Platform sponsor" price="$59 / month" desc="Your placement on every error page for one platform (e.g. all Supabase errors)." link={L.sponsorCategory} />
      <Tier name="Newsletter sponsor" price="$49 / issue" desc="Top placement in the weekly FixStack email." link={L.sponsorNewsletter} />
    </div><p className="fine">Founding rates while the site grows. Questions: use the contact on the About page.</p></>);
}
