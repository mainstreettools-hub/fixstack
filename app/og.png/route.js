import { ImageResponse } from 'next/og';
import { errors } from '@/lib/errors';
// alt text lives in lib/errors.js OG_IMAGE
const size = { width: 1200, height: 630 };
export const dynamic = 'force-static';
// Social preview image (1200x630) served at /og.png. A route handler instead of the opengraph-image file
// convention, because that convention's URL gets a trailing-slash 308 with trailingSlash: true.
export function GET() {
  const tools = ['Lovable', 'Cursor', 'Bolt', 'Replit', 'Supabase', 'Vercel', 'Stripe', 'Next.js'];
  return new ImageResponse(
    (<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '72px', background: '#0f172a', color: '#f8fafc', fontFamily: 'sans-serif' }}>
      <div style={{ fontSize: 40, color: '#38bdf8', fontWeight: 700 }}>FixStack</div>
      <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.1, marginTop: 24 }}>Fix your error in 60 seconds</div>
      <div style={{ fontSize: 34, color: '#cbd5e1', marginTop: 28 }}>{`${errors.length} copy-paste fixes with the exact error text`}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 40 }}>
        {tools.map(t => <div key={t} style={{ fontSize: 28, padding: '8px 18px', marginRight: 14, marginBottom: 14, borderRadius: 999, background: '#1e293b', color: '#e2e8f0' }}>{t}</div>)}
      </div>
      <div style={{ fontSize: 28, color: '#94a3b8', marginTop: 'auto' }}>getfixstack.com</div>
    </div>),
    size
  );
}
