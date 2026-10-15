export default function Tier({ name, price, desc, link, label, sub, badge, children }) {
  return (<div className="tier">{badge}<h3>{name}</h3><p><strong>{price}</strong>{sub && <><br /><span className="fine">{sub}</span></>}</p><p>{desc}</p>{children}
    {link ? <a className="btn" style={{ background: '#111' }} href={link}>{label || 'Buy now'}</a> : <span className="btn" aria-disabled="true">{label || 'Checkout coming soon'}</span>}</div>);
}
