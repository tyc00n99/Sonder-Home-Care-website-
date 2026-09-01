'use client';

import { useEffect, useState } from 'react';

const STEPS = [
  {
    k: 'Step 01',
    t: 'We gather the records.',
    p: "With your permission: the support plan, medical referral, diagnostics, wellness checks, and prior-provider records if there was one.",
  },
  {
    k: 'Step 02',
    t: 'You point us to the case manager.',
    p: 'Their name and county, one authorization form from you, and we handle the rest with them directly.',
  },
  {
    k: 'Step 03',
    t: 'We meet your person.',
    p: "Whoever you're the guardian for. We sit down together and build the schedule around your life.",
  },
  {
    k: 'Step 04',
    t: 'We build the plan, in writing.',
    p: 'The support plan, an abuse prevention plan (IAPP) when it applies, medication and financial management when needed.',
  },
  {
    k: 'Step 05',
    t: 'You stay as close as you want.',
    p: 'Updates daily, weekly, or biweekly, matched to your involvement. The case manager stays current too.',
  },
];

const DWELL_MS = 5000;

export default function IntakeStepper() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setIdx((idx + 1) % STEPS.length), DWELL_MS);
    return () => clearTimeout(t);
  }, [idx]);

  const s = STEPS[idx];

  return (
    <div className="ik-rail" data-reveal>
      <div className="ik-list">
        {STEPS.map((step, i) => (
          <button
            key={step.k}
            className={`ik-item${i === idx ? ' active' : ''}`}
            onClick={() => setIdx(i)}
            aria-current={i === idx}
          >
            {i === idx && <span className="ik-prog" key={`p${idx}`}></span>}
            <span className="ik-rn">{step.k}</span>
            {step.t}
          </button>
        ))}
      </div>
      <div className="ik-card">
        <div className="ik-inner" key={idx}>
          <div className="ik-k">{s.k}</div>
          <h4>{s.t}</h4>
          <p>{s.p}</p>
        </div>
      </div>
    </div>
  );
}
