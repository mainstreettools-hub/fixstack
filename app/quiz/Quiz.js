'use client';
import { useState } from 'react';
import { QUIZ_PLATFORMS, QUIZ_SYMPTOMS, resolveQuizResults } from '@/lib/quiz';

export default function Quiz() {
  const [step, setStep] = useState(1);
  const [platform, setPlatform] = useState(null);
  const [symptomId, setSymptomId] = useState(null);
  const [results, setResults] = useState([]);
  const [emailMsg, setEmailMsg] = useState('');
  const [busy, setBusy] = useState(false);

  function pickPlatform(p) {
    setPlatform(p);
    setSymptomId(null);
    setResults([]);
    setEmailMsg('');
    setStep(2);
  }

  function pickSymptom(id) {
    setSymptomId(id);
    setResults(resolveQuizResults(platform, id));
    setEmailMsg('');
    setStep(3);
  }

  function restart() {
    setStep(1);
    setPlatform(null);
    setSymptomId(null);
    setResults([]);
    setEmailMsg('');
  }

  async function subscribe(e) {
    e.preventDefault();
    setBusy(true);
    try {
      const r = await fetch('/api/subscribe/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: e.target.email.value }),
      });
      const j = await r.json();
      setEmailMsg(j.message);
    } catch {
      setEmailMsg('Could not subscribe right now.');
    } finally {
      setBusy(false);
    }
  }

  const symptoms = platform ? QUIZ_SYMPTOMS[platform] || [] : [];

  return (
    <div className="quiz">
      <ol className="quiz-steps" aria-label="Quiz progress">
        <li className={step === 1 ? 'on' : step > 1 ? 'done' : ''}>1. Platform</li>
        <li className={step === 2 ? 'on' : step > 2 ? 'done' : ''}>2. Symptom</li>
        <li className={step === 3 ? 'on' : ''}>3. Fix</li>
      </ol>

      {step === 1 && (
        <section>
          <h2>Which tool are you stuck in?</h2>
          <p className="sub">Pick the product where the error showed up.</p>
          <div className="quiz-options">
            {QUIZ_PLATFORMS.map((p) => (
              <button key={p} type="button" className="quiz-option" onClick={() => pickPlatform(p)}>
                {p}
              </button>
            ))}
          </div>
        </section>
      )}

      {step === 2 && (
        <section>
          <h2>What does the error look like?</h2>
          <p className="sub">
            Platform: <strong>{platform}</strong>.{' '}
            <button type="button" className="linkish" onClick={() => setStep(1)}>Change</button>
          </p>
          <div className="quiz-options quiz-options-wide">
            {symptoms.map((s) => (
              <button key={s.id} type="button" className="quiz-option" onClick={() => pickSymptom(s.id)}>
                <strong>{s.label}</strong>
                {s.hint ? <span className="sub">{s.hint}</span> : null}
              </button>
            ))}
          </div>
        </section>
      )}

      {step === 3 && (
        <section>
          <h2>Here is the matching fix</h2>
          <p className="sub">
            {platform} · {(QUIZ_SYMPTOMS[platform] || []).find((s) => s.id === symptomId)?.label}
          </p>
          {results.length === 0 ? (
            <p>No matching page yet. Browse the <a href="/">full error list</a> or start over.</p>
          ) : (
            <ul className="list">
              {results.map((r) => (
                <li key={r.slug}>
                  <a href={r.href}>
                    <span className="tag">{r.platform}</span>
                    {r.title}
                    <br />
                    <span className="sub">{r.message}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
          <p>
            <button type="button" className="linkish" onClick={restart}>Start over</button>
            {' · '}
            <a href="/">Browse all errors</a>
          </p>

          <div className="news quiz-news">
            <h3>Optional: get new fixes weekly</h3>
            <p className="fine">Same newsletter as the rest of the site. Skip if you prefer.</p>
            {emailMsg ? (
              <p>{emailMsg}</p>
            ) : (
              <form onSubmit={subscribe}>
                <input name="email" type="email" required placeholder="you@example.com" aria-label="Email" />
                <button disabled={busy}>{busy ? '...' : 'Subscribe'}</button>
              </form>
            )}
            <p className="fine">No spam. Unsubscribe anytime. <a href="/privacy/">Privacy</a></p>
          </div>
        </section>
      )}
    </div>
  );
}
