import { errors, SITE } from '@/lib/errors';
import { COMPARISONS } from '@/lib/comparisons';
export const dynamic = 'force-static';
export default function sitemap() {
  const staticPages = ['about', 'sponsor', 'featured', 'privacy', 'disclosure', 'fix-pack', 'guides', 'guides/uptime-monitoring-better-stack', 'compare', 'quiz'];
  return [
    { url: `${SITE.url}/`, priority: 1 },
    ...errors.map(e => ({ url: `${SITE.url}/errors/${e.slug}/`, priority: 0.8 })),
    ...staticPages.map(p => ({ url: `${SITE.url}/${p}/`, priority: 0.3 })),
    ...COMPARISONS.map(c => ({ url: `${SITE.url}/compare/${c.slug}/`, priority: 0.5 })),
  ];
}
