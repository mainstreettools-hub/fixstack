import { SITE } from '@/lib/errors';
export const dynamic = 'force-static';
export default function robots() { return { rules: { userAgent: '*', allow: '/' }, sitemap: `${SITE.url}/sitemap.xml` }; }
