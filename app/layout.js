import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SITE } from '@/lib/errors';
export const metadata = { metadataBase: new URL(SITE.url), title: { default: `${SITE.name}: Fixes for Lovable, Cursor, Supabase, Vercel, Stripe & Next.js errors`, template: `%s | ${SITE.name}` }, description: SITE.description, verification: { other: { 'msvalidate.01': '9D648B9DE133BDDC9EDA97AA40217BF0' } } };
export default function RootLayout({ children }) {
  return (<html lang="en"><head><meta name="impact-site-verification" value="3f919170-3684-42c5-9c3b-3e5cc61039fc" /></head><body>
    <header className="top"><a href="/" className="logo">FixStack</a><nav><a href="/about/">About</a><a href="/sponsor/">Sponsor</a><a href="/fix-pack/">Fix Pack</a><a href="/featured/">Get featured</a></nav></header>
    <main>{children}</main>
    <footer><p><a href="/about/">About</a> · <a href="/privacy/">Privacy</a> · <a href="/disclosure/">Disclosure</a> · <a href="/sponsor/">Sponsor</a> · <a href="/featured/">Get featured</a> · <a href="/fix-pack/">Fix Pack</a></p>
    <p>A <a href="https://mainstreetai.tools">MainStreetAI</a> project · <a href="https://mainstreetai.tools/guides">AI guides for small businesses</a></p><p>© {new Date().getFullYear()} FixStack</p></footer>
    <Analytics /></body></html>);
}
