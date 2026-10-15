import Tier from '../Tier';
import { PAYMENT_LINKS as L, CATEGORY_SPONSOR, categorySponsorCheckout } from '@/lib/payments';
import { CATEGORIES } from '@/lib/categories';
import { errors } from '@/lib/errors';
export const metadata = { title: 'Sponsor FixStack', description: 'Reach developers and AI app builders at the exact moment they are fixing errors in Lovable, Cursor, Supabase, Vercel, Stripe and Next.js.', alternates: { canonical: '/sponsor/' } };
export default function Page() {
  return (<><h1>Sponsor FixStack</h1><p>FixStack readers are builders fixing real errors in Lovable, Cursor, Bolt, Replit, Supabase, Vercel, Stripe and Next.js. Sponsorships are clearly labeled and limited to products relevant to the error being fixed.</p>
    <div className="tiers">
      <Tier name="Site-wide sponsor" price="$149 / month" desc="One sponsor slot on every page plus the homepage. One sponsor at a time." link={L.sponsorSite} />
      <Tier name="Platform sponsor" price="$59 / month" desc="Your placement on every error page for one platform (e.g. all Supabase errors)." link={L.sponsorCategory} />
      <Tier name="Newsletter sponsor" price="$49 / issue" desc="Top placement in the weekly FixStack email." link={L.sponsorNewsletter} />
    </div>
    <h2 id="categories">Error-category sponsorships</h2>
    <p>Own one error category: your callout appears inside the fix section of every page in it, right where readers are solving the problem. One sponsor per category.</p>
    <p><strong>First month free</strong> with code {CATEGORY_SPONSOR.firstMonthCode} (applied automatically at checkout). Then the monthly rate below. <strong>Traffic is still near zero</strong> — the site launched in October 2026 and we are still growing through Google search and a weekly newsletter. We tell every sponsor this up front.</p>
    <div className="tiers">
      {CATEGORIES.map(c => {
        const price = CATEGORY_SPONSOR.prices[c.id];
        const examples = c.slugs.slice(0, 3).map(s => errors.find(e => e.slug === s)?.title).filter(Boolean).join('; ');
        const more = c.slugs.length > 3 ? '; ...' : '';
        return (
          <Tier
            key={c.id}
            name={c.name}
            price={price ? `$${price} / month` : 'Pricing on request'}
            desc={`${c.slugs.length} pages. Examples: ${examples}${more}`}
            link={categorySponsorCheckout(c.id)}
          />
        );
      })}
    </div>
    <p className="fine">Featured tool listing is $39 / month on the <a href="/featured/">Featured</a> page. Questions: use the contact on the About page.</p></>);
}
