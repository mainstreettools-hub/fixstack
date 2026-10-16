// Quiz routing: platform → symptoms → matching error slugs from lib/errors.js.
// Keep symptoms honest and specific to real FixStack pages. Never invent pages.
import { errors, PLATFORMS } from './errors.js';

/** @typedef {{ id: string, label: string, hint?: string, slugs: string[] }} Symptom */

/** @type {Record<string, Symptom[]>} */
export const QUIZ_SYMPTOMS = {
  'Next.js': [
    { id: 'hydration', label: 'Hydration failed / text content mismatch', hint: 'Server HTML does not match the browser', slugs: ['nextjs-hydration-failed', 'nextjs-text-content-mismatch'] },
    { id: 'window', label: 'window / document is not defined', hint: 'Browser-only code ran on the server', slugs: ['nextjs-window-not-defined'] },
    { id: 'use-client', label: 'Hooks need a Client Component / async Client Component', hint: 'useState, useEffect, or async + "use client"', slugs: ['nextjs-use-client-hooks', 'nextjs-async-client-component'] },
    { id: 'module', label: 'Module not found / can\'t resolve import', slugs: ['nextjs-module-not-found'] },
    { id: 'image', label: 'next/image hostname not configured', slugs: ['nextjs-image-unconfigured-host'] },
    { id: 'dynamic', label: 'Dynamic server usage / cookies / searchParams', slugs: ['nextjs-dynamic-server-usage', 'nextjs-missing-suspense-searchparams'] },
    { id: 'env', label: 'Environment variable is undefined in the browser', slugs: ['nextjs-env-undefined-client'] },
    { id: 'react-child', label: 'Objects are not valid as a React child', slugs: ['react-objects-not-valid-child'] },
  ],
  Vercel: [
    { id: 'build', label: 'Build failed (npm run build exited with 1)', slugs: ['vercel-build-failed-exit-1'] },
    { id: 'local-ok', label: 'Works locally but fails on Vercel', slugs: ['vercel-works-locally-fails-deploy'] },
    { id: 'timeout', label: 'Function timeout (504) or invocation failed (500)', slugs: ['vercel-function-timeout', 'vercel-function-invocation-failed'] },
    { id: '404', label: '404 NOT_FOUND on a deployed route', slugs: ['vercel-404-not-found'] },
    { id: 'eresolve', label: 'npm ERESOLVE / dependency tree error', slugs: ['vercel-eresolve'] },
    { id: 'output', label: 'No Output Directory named "dist" found', slugs: ['vercel-no-output-directory'] },
  ],
  Supabase: [
    { id: 'rls', label: 'Row-level security violation or empty select results', slugs: ['supabase-rls-violation', 'supabase-empty-array-rls'] },
    { id: 'jwt', label: 'Invalid or expired JWT', slugs: ['supabase-invalid-jwt'] },
    { id: 'url-key', label: 'supabaseUrl / API key is required or wrong', slugs: ['supabase-url-key-required'] },
    { id: 'schema', label: 'Relation does not exist / column missing from schema cache', slugs: ['supabase-relation-does-not-exist', 'supabase-schema-cache-column'] },
    { id: 'auth', label: 'Invalid login credentials / email not confirmed', slugs: ['supabase-invalid-login-credentials', 'supabase-email-not-confirmed'] },
    { id: 'email-limit', label: 'Email rate limit exceeded', slugs: ['supabase-email-rate-limit'] },
    { id: 'cors', label: 'Failed to fetch / CORS on Edge Function', slugs: ['supabase-cors-failed-fetch', 'supabase-edge-function-non-2xx'] },
  ],
  Stripe: [
    { id: 'webhook', label: 'Webhook signature mismatch', slugs: ['stripe-webhook-signature-mismatch'] },
    { id: 'api-key', label: 'Invalid API key / no API key provided', slugs: ['stripe-invalid-api-key', 'stripe-no-api-key'] },
    { id: 'customer', label: 'No such customer', slugs: ['stripe-no-such-customer'] },
    { id: 'card', label: 'Card declined', slugs: ['stripe-card-declined'] },
    { id: 'amount', label: 'Amount must be at least $0.50', slugs: ['stripe-amount-too-small'] },
    { id: 'no-payment-method', label: 'Customer has no attached payment source or default payment method', hint: 'Creating a subscription fails', slugs: ['stripe-no-attached-payment-source'] },
  ],
  Cursor: [
    { id: 'overloaded', label: 'Model overloaded / high load / slow requests', slugs: ['cursor-model-overloaded', 'cursor-high-load'] },
    { id: 'agent-loop', label: 'Agent keeps making the same failed edit', slugs: ['cursor-agent-loop'] },
    { id: 'cli', label: 'cursor: command not found', slugs: ['cursor-command-not-found'] },
    { id: 'extension', label: 'Extension host terminated unexpectedly', slugs: ['cursor-extension-host-terminated'] },
    { id: 'connection', label: 'Connection failed', slugs: ['cursor-connection-failed'] },
  ],
  Lovable: [
    { id: 'blank', label: 'Blank white page after deploying elsewhere', slugs: ['lovable-blank-page-after-deploy'] },
    { id: 'resolve', label: 'Failed to resolve import', slugs: ['lovable-build-unable-to-resolve'] },
    { id: 'map', label: 'Cannot read properties of undefined (reading \'map\')', slugs: ['react-cannot-read-properties-map'] },
    { id: 'json', label: 'Unexpected token \'<\' / HTML returned instead of JSON', slugs: ['lovable-unexpected-token-doctype-json'] },
    { id: 'edge', label: 'Edge Function returned a non-2xx status', slugs: ['supabase-edge-function-non-2xx'] },
    { id: 'chunk', label: 'Failed to fetch dynamically imported module', hint: 'Often right after publishing a new version', slugs: ['vite-failed-to-fetch-dynamically-imported-module'] },
  ],
  Bolt: [
    { id: 'jsx', label: 'Failed to parse source for import analysis (JSX)', slugs: ['vite-invalid-jsx-import-analysis'] },
    { id: 'export', label: 'Module does not provide an export named …', slugs: ['vite-no-export-named'] },
    { id: 'rerenders', label: 'Too many re-renders', slugs: ['react-too-many-rerenders'] },
    { id: 'oom', label: 'WebAssembly out of memory', slugs: ['bolt-webassembly-oom'] },
    { id: 'prompt-size', label: 'Project exceeds the total supported prompt size', slugs: ['bolt-project-exceeds-prompt-size'] },
  ],
  Replit: [
    { id: 'eaddrinuse', label: 'EADDRINUSE: address already in use', slugs: ['node-eaddrinuse'] },
    { id: 'module', label: 'Cannot find module / No module named …', slugs: ['node-cannot-find-module', 'python-no-module-named'] },
    { id: 'respond', label: 'Application failed to respond', slugs: ['replit-application-failed-to-respond'] },
  ],
};

export const QUIZ_PLATFORMS = PLATFORMS.filter((p) => QUIZ_SYMPTOMS[p]?.length);

export function resolveQuizResults(platform, symptomId) {
  const symptom = (QUIZ_SYMPTOMS[platform] || []).find((s) => s.id === symptomId);
  if (!symptom) return [];
  return symptom.slugs
    .map((slug) => errors.find((e) => e.slug === slug))
    .filter(Boolean)
    .map((e) => ({ slug: e.slug, platform: e.platform, title: e.title, message: e.message, href: `/errors/${e.slug}/` }));
}

/** Validate every quiz slug exists in errors.js (build-time sanity). */
export function assertQuizSlugs() {
  const missing = [];
  for (const [platform, symptoms] of Object.entries(QUIZ_SYMPTOMS)) {
    for (const s of symptoms) {
      for (const slug of s.slugs) {
        if (!errors.find((e) => e.slug === slug)) missing.push(`${platform}/${s.id}:${slug}`);
      }
    }
  }
  return missing;
}
