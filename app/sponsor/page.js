import Tier from '../Tier';
import SponsorCallout from '../SponsorCallout';
import { CATEGORY_SPONSOR, categorySponsorCheckout } from '@/lib/payments';
import { CATEGORIES } from '@/lib/categories';
import { errors } from '@/lib/errors';
export const metadata = { title: 'Sponsor FixStack', description: 'Reach developers and AI app builders at the exact moment they are fixing errors in Lovable, Cursor, Supabase, Vercel, Stripe and Next.js.', alternates: { canonical: '/sponsor/' } };
const short = n => n.replace(/ errors$/, '');
export default function Page() {
  const total = CATEGORIES.reduce((n, c) => n + c.slugs.length, 0);
  return (<><h1>Sponsor FixStack</h1><p>FixStack readers are builders fixing real errors in Lovable, Cursor, Bolt, Replit, Supabase, Vercel, Stripe and Next.js. Sponsorships are clearly labeled and limited to products relevant to the error being fixed.</p>
    <p>Contact: <a href="mailto:mainstreettools@gmail.com">mainstreettools@gmail.com</a></p>
    <h2 id="categories">Error-category sponsorships</h2>
    <p>Own one error category: your callout appears inside the fix section of every page in it, right where readers are solving the problem. One sponsor per category. {CATEGORIES.length} categories cover {total} error pages.</p>
    <p><strong>First month free</strong>: you pay $0 today and billing starts after {CATEGORY_SPONSOR.trialDays} days. Cancel anytime. <strong>Traffic is still near zero</strong> — the site launched in October 2026 and we are still growing through Google search and a weekly newsletter. We tell every sponsor this up front.</p>
    <p>Want a cheaper listing instead? <a href="/featured/">Featured listings</a> are $39/mo for a tool listing on up to 5 relevant pages; a category sponsorship is an exclusive callout on every page in a category.</p>
    <h3>What your callout looks like</h3>
    <SponsorCallout example sponsor={{ name: 'Your tool', tagline: 'one line about how it helps with this error, linking to your site.' }} />
    <div className="tiers" style={{ marginTop: 16 }}>
      {CATEGORIES.map(c => {
        const price = CATEGORY_SPONSOR.prices[c.id];
        const sold = CATEGORY_SPONSOR.status[c.id] === 'sold';
        const titles = c.slugs.map(s => errors.find(e => e.slug === s)?.title).filter(Boolean);
        return (
          <Tier key={c.id} name={c.name}
            badge={<span className={sold ? 'badge sold' : 'badge'}>{sold ? 'Taken' : 'Available'}</span>}
            price={price ? `$${price} / month` : 'Pricing on request'}
            sub={price ? `$0 today, then $${price}/mo, cancel anytime` : ''}
            desc={`${c.slugs.length} pages in this category:`}
            link={sold ? '' : categorySponsorCheckout(c.id)}
            label={sold ? 'Taken' : `Start free month — ${short(c.name)}`}>
            <ul className="fine">{titles.map(t => <li key={t}>{t}</li>)}</ul>
          </Tier>
        );
      })}
    </div>
    <p className="fine">Questions: email <a href="mailto:mainstreettools@gmail.com">mainstreettools@gmail.com</a>.</p></>);
}
