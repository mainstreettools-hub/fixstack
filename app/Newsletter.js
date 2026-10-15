'use client';
import { useState } from 'react';
// Placeholder: wire to Resend later.
export default function Newsletter() {
  const [done, setDone] = useState(false);
  return (<section className="news"><h2>Get new fixes weekly</h2>
    {done ? <p>Thanks! Signups open soon.</p> :
    <form onSubmit={(e) => { e.preventDefault(); setDone(true); }}><input type="email" required placeholder="you@example.com" aria-label="Email" /><button>Subscribe</button></form>}</section>);
}
