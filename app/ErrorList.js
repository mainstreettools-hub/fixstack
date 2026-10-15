'use client';
import { useState } from 'react';
export default function ErrorList({ errors, platforms }) {
  const [q, setQ] = useState(''); const [p, setP] = useState('All');
  const list = errors.filter(e => (p === 'All' || e.platform === p) && (e.title + ' ' + e.message).toLowerCase().includes(q.toLowerCase()));
  return (<>
    <input className="search" placeholder="Paste your error message..." value={q} onChange={e => setQ(e.target.value)} />
    <div className="chips">{['All', ...platforms].map(x => <button key={x} className={x === p ? 'on' : ''} onClick={() => setP(x)}>{x}</button>)}</div>
    <ul className="list">{list.map(e => <li key={e.slug}><a href={`/errors/${e.slug}/`}><span className="tag">{e.platform}</span>{e.title}</a></li>)}</ul>
    {!list.length && <p>No match yet.</p>}
  </>);
}
