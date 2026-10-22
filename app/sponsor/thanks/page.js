import { SITE } from '@/lib/errors';
export const metadata = { title: 'Thanks for sponsoring FixStack', robots: { index: false, follow: false }, alternates: { canonical: `${SITE.url}/sponsor/thanks/` } };
export default function Page() {
  return (<><h1>Thanks — your sponsorship is set up</h1><p>Your free month has started. Here is what happens next:</p>
    <ol>
      <li>Reply to <a href="mailto:mainstreettools@gmail.com?subject=FixStack%20sponsor%20details">mainstreettools@gmail.com</a> with your logo, a one-line description and the link you want readers to visit.</li>
      <li>Your callout goes live within 1–2 business days of receiving those details.</li>
      <li>Billing starts after the free month. You will get a Stripe receipt by email.</li>
      <li>Cancel anytime by emailing us before the free month ends.</li>
    </ol><p><a href="/sponsor/">Back to sponsorships</a></p></>);
}
