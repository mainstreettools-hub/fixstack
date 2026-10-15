export function faqFor(e) {
  return [
    { q: `What does "${e.title}" mean?`, a: e.meaning },
    { q: 'What usually causes it?', a: e.causes.join(' ') },
    { q: 'How do I fix it?', a: e.steps.map((s, i) => `${i + 1}. ${s.text}`).join(' ') },
  ];
}
export default function FaqSection({ faq }) {
  return (<section><h2>FAQ</h2>{faq.map((f, i) => <div key={i}><h3>{f.q}</h3><p>{f.a}</p></div>)}</section>);
}
