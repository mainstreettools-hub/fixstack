import { SITE } from '@/lib/errors';
export const dynamic = 'force-static';
const bots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Google-Extended', 'Bingbot'];
export default function robots() { return { rules: [...bots.map(userAgent => ({ userAgent, allow: '/' })), { userAgent: '*', allow: '/', disallow: '/dl/' }], sitemap: `${SITE.url}/sitemap.xml` }; }
