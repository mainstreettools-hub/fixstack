import { FIX_FOR_ME } from '@/lib/monetization';
export default function FixForMe() {
  const opts = FIX_FOR_ME.filter(o => o.url); if (!opts.length) return null;
  return (<section className="tier" style={{ marginTop: 32 }}><h2>Still stuck? Get it fixed for you</h2><p>Hand the error to a freelance developer. Paste the exact error message and a link to your repo or project.</p>
    <ul>{opts.map(o => <li key={o.name}><a href={o.url} rel="sponsored noopener" target="_blank">{o.name}</a>: {o.blurb}</li>)}</ul></section>);
}
