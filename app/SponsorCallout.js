export default function SponsorCallout({ sponsor, example }) {
  return (<aside className="tier"><span className="tag">{example ? 'Sponsor (example)' : 'Sponsor'}</span>{' '}
    {example ? <b>{sponsor.name}</b> : <a href={sponsor.url} rel="sponsored noopener">{sponsor.name}</a>}: {sponsor.tagline}</aside>);
}
