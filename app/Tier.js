export default function Tier({ name, price, desc, link }) {
  return (<div className="tier"><h3>{name}</h3><p><strong>{price}</strong></p><p>{desc}</p>
    {link ? <a className="btn" style={{ background: '#111' }} href={link}>Buy now</a> : <span className="btn" aria-disabled="true">Checkout coming soon</span>}</div>);
}
