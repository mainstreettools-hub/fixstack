import { errors, SITE } from '@/lib/errors';
export const dynamic = 'force-static';
export default function sitemap() { return [{ url: `${SITE.url}/`, priority: 1 }, ...errors.map(e => ({ url: `${SITE.url}/errors/${e.slug}/`, priority: 0.8 })), ...['about', 'sponsor', 'featured', 'privacy'].map(p => ({ url: `${SITE.url}/${p}/`, priority: 0.3 }))]; }
