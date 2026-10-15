import { errors, SITE, PLATFORMS } from '@/lib/errors';
import { COMPARISONS } from '@/lib/comparisons';
export const dynamic = 'force-static';
export function GET() {
  const lines = [`# ${SITE.name}`, '', `> ${SITE.description}`, '', 'Each page gives the exact error message, its meaning, likely causes, and a step-by-step fix with code.', ''];
  for (const p of PLATFORMS) { lines.push(`## ${p}`, ''); errors.filter(e => e.platform === p).forEach(e => lines.push(`- [${e.title}](${SITE.url}/errors/${e.slug}/): ${e.meaning.split('. ')[0]}.`)); lines.push(''); }
  lines.push('## Quiz', '', `- [Which fix do I need?](${SITE.url}/quiz/): Interactive platform + symptom quiz that routes to matching FixStack error pages.`, '');
  lines.push('## Guides', '', `- [Uptime monitoring with Better Stack](${SITE.url}/guides/uptime-monitoring-better-stack/)`, `- [Guides index](${SITE.url}/guides/)`, '');
  lines.push('## Comparisons', '', `- [All comparisons](${SITE.url}/compare/)`);
  COMPARISONS.forEach(c => lines.push(`- [${c.title}](${SITE.url}/compare/${c.slug}/): ${c.description}`));
  lines.push('', '## Optional', '', `- [Full content](${SITE.url}/llms-full.txt)`, `- [About](${SITE.url}/about/)`, `- [Privacy](${SITE.url}/privacy/)`);
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
