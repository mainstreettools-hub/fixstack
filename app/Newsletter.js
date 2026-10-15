'use client';
import { useState } from 'react';
export default function Newsletter() {
  const [msg, setMsg] = useState(''); const [busy, setBusy] = useState(false);
  async function submit(e) {
    e.preventDefault(); setBusy(true);
    try { const r = await fetch('/api/subscribe/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: e.target.email.value }) }); const j = await r.json(); setMsg(j.message); }
    catch { setMsg('Could not subscribe right now.'); } finally { setBusy(false); }
  }
  return (<section className="news"><h2>Get new fixes weekly</h2>
    {msg ? <p>{msg}</p> : <form onSubmit={submit}><input name="email" type="email" required placeholder="you@example.com" aria-label="Email" /><button disabled={busy}>{busy ? '...' : 'Subscribe'}</button></form>}
    <p className="fine">No spam. Unsubscribe anytime. <a href="/privacy/">Privacy</a></p></section>);
}
