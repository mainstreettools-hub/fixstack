import { SITE } from '@/lib/errors';
import Quiz from './Quiz';

export const metadata = {
  title: 'Which fix do I need?',
  description: 'Answer two questions about your stack and error symptom. FixStack points you to the matching copy-paste fix page.',
  alternates: { canonical: '/quiz/' },
};

export default function Page() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Which fix do I need?',
    url: `${SITE.url}/quiz/`,
    applicationCategory: 'DeveloperApplication',
    description: 'Interactive quiz that routes developers to FixStack error fix pages by platform and symptom.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };
  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <h1>Which fix do I need?</h1>
      <p className="sub">
        Two quick questions. We match your answers to a real FixStack error page — no guessing, no fake countdown.
      </p>
      <Quiz />
    </article>
  );
}
