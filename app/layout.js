import './globals.css';
import { SITE } from '@/lib/errors';
export const metadata = { metadataBase: new URL(SITE.url), title: { default: `${SITE.name}: Fixes for Lovable, Cursor, Supabase, Vercel & Next.js errors`, template: `%s | ${SITE.name}` }, description: SITE.description };
export default function RootLayout({ children }) {
  return (<html lang="en"><body><header className="top"><a href="/" className="logo">FixStack</a></header><main>{children}</main><footer>© {new Date().getFullYear()} FixStack</footer></body></html>);
}
