// POST /api/subscribe {email}: adds a contact to the FixStack Resend audience. Sends no email.
export async function POST(req) {
  let body = {}; try { body = await req.json(); } catch {}
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return Response.json({ ok: false, message: 'Please enter a valid email.' }, { status: 400 });
  const key = process.env.RESEND_API_KEY, aud = process.env.RESEND_AUDIENCE_ID;
  if (!key || !aud) return Response.json({ ok: false, message: 'Signups open soon.' }, { status: 503 });
  try {
    const r = await fetch(`https://api.resend.com/audiences/${aud}/contacts`, { method: 'POST', headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ email, unsubscribed: false }) });
    if (!r.ok) return Response.json({ ok: false, message: 'Could not subscribe right now. Please try again later.' }, { status: 502 });
    return Response.json({ ok: true, message: "You're in! New fixes weekly." });
  } catch { return Response.json({ ok: false, message: 'Could not subscribe right now.' }, { status: 500 }); }
}
