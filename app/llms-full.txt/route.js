import { errors, SITE, PLATFORMS, platformSlug } from '@/lib/errors';
import { categoryFor } from '@/lib/categories';
import { COMPARISONS } from '@/lib/comparisons';
export const dynamic = 'force-static';
export function GET() {
  const out = [`# ${SITE.name}: full content`, '', `> ${SITE.description}`, ''];
  for (const p of PLATFORMS) for (const e of errors.filter(x => x.platform === p)) {
    const c = categoryFor(e.slug);
    const tables = Array.isArray(e.table) ? e.table : e.table ? [e.table] : [];
    out.push(`## ${e.title}`, '', `URL: ${SITE.url}/errors/${e.slug}/`, `Platform: ${e.platform} (${SITE.url}/platforms/${platformSlug(e.platform)}/)${c ? ` | Category: ${c.name}` : ''}`, '');
    if (e.messageLabel) out.push(`${e.messageLabel}:`, e.message, '');
    else out.push('Exact error:', '```', e.message, '```', '');
    out.push(`What it means: ${e.meaning}`, '');
    tables.forEach(t => { out.push(t.caption || 'Table', '', `| ${t.headers.join(' | ')} |`, `| ${t.headers.map(() => '---').join(' | ')} |`, ...t.rows.map(r => `| ${r.join(' | ')} |`), ''); });
    out.push('Likely causes:', ...e.causes.map(x => `- ${x}`), '', 'How to fix it:');
    e.steps.forEach((s, i) => { out.push(`${i + 1}. ${s.text}`); if (s.code) out.push('```', s.code, '```'); });
    if (c) out.push('', 'Prevent this next time:', ...c.prevent.map(x => `- ${x}`));
    if (e.checked) out.push('', `Last checked against official docs: ${e.checked}${e.sources?.length ? ` (${e.sources.map(x => `${x.name}: ${x.url}`).join('; ')})` : ''}`);
    out.push('');
  }
  out.push('## Quiz', '', `- [Which fix do I need?](${SITE.url}/quiz/): Pick a platform and a symptom; FixStack links you to the matching error fix page(s). Optional newsletter signup uses the same /api/subscribe flow as the rest of the site.`, '', '## Comparisons', '', ...COMPARISONS.map(c => `- [${c.title}](${SITE.url}/compare/${c.slug}/): ${c.description}`), '');
  return new Response(out.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
