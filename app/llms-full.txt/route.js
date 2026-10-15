import { errors, SITE, PLATFORMS } from '@/lib/errors';
import { categoryFor } from '@/lib/categories';
import { COMPARISONS } from '@/lib/comparisons';
export const dynamic = 'force-static';
export function GET() {
  const out = [`# ${SITE.name}: full content`, '', `> ${SITE.description}`, ''];
  for (const p of PLATFORMS) for (const e of errors.filter(x => x.platform === p)) {
    const c = categoryFor(e.slug);
    out.push(`## ${e.title}`, '', `URL: ${SITE.url}/errors/${e.slug}/`, `Platform: ${e.platform}${c ? ` | Category: ${c.name}` : ''}`, '', 'Exact error:', '```', e.message, '```', '', `What it means: ${e.meaning}`, '', 'Likely causes:', ...e.causes.map(x => `- ${x}`), '', 'How to fix it:');
    e.steps.forEach((s, i) => { out.push(`${i + 1}. ${s.text}`); if (s.code) out.push('```', s.code, '```'); });
    if (c) out.push('', 'Prevent this next time:', ...c.prevent.map(x => `- ${x}`));
    out.push('');
  }
  out.push('## Quiz', '', `- [Which fix do I need?](${SITE.url}/quiz/): Pick a platform and a symptom; FixStack links you to the matching error fix page(s). Optional newsletter signup uses the same /api/subscribe flow as the rest of the site.`, '', '## Comparisons', '', ...COMPARISONS.map(c => `- [${c.title}](${SITE.url}/compare/${c.slug}/): ${c.description}`), '');
  return new Response(out.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
