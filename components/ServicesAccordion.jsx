'use client';

import { useEffect, useRef, useState } from 'react';

const SERVICES = [
  {
    no: '01',
    title: 'Individualized Home Supports (IHS)',
    body: "Our most-referred service. One-on-one support in the client's home and community: community participation, health and safety, household management, and adaptive skills. The with-training versions build skills against measured outcomes, and family training coaches the people who live alongside the client.",
    chips: ['IHS without training', 'IHS with training', 'IHS with family training'],
  },
  {
    no: '02',
    title: 'Respite Care',
    body: "Short-term care that gives family caregivers a real break, provided in the client's home or in another approved setting outside it. Planned ahead or arranged when a family suddenly needs coverage.",
    chips: ['In-home', 'Out-of-home', 'Planned or short-notice'],
  },
  {
    no: '03',
    title: 'Night Supervision',
    body: "Overnight staff in the client's own home. One of the services we're asked for most, and one of the hardest for families to cover alone. Trained caregivers stay on site so clients are safe and families can sleep.",
    chips: ['Overnight in-home', 'Trained awake staff', 'Documented shifts'],
  },
  {
    no: '04',
    title: 'Homemaker Services',
    body: 'Help with the work that keeps a household running: cleaning, laundry, meals, and general home management, with assistance for clients who want to do these tasks themselves.',
    chips: ['Cleaning', 'Laundry & meals', 'Home management'],
  },
];

export default function ServicesAccordion() {
  const [openIdx, setOpenIdx] = useState(0);
  const bodyRefs = useRef([]);

  useEffect(() => {
    bodyRefs.current.forEach((el, i) => {
      if (el) el.style.maxHeight = i === openIdx ? el.scrollHeight + 'px' : '0px';
    });
  }, [openIdx]);

  useEffect(() => {
    const onResize = () => {
      const el = bodyRefs.current[openIdx];
      if (el) el.style.maxHeight = el.scrollHeight + 'px';
    };
    addEventListener('resize', onResize);
    return () => removeEventListener('resize', onResize);
  }, [openIdx]);

  return (
    <div className="svc-list" data-reveal>
      {SERVICES.map((s, i) => (
        <div className={`svc${openIdx === i ? ' open' : ''}`} key={s.no}>
          <button
            className="svc-btn"
            aria-expanded={openIdx === i}
            onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
          >
            <span className="no">{s.no}</span>
            <span className="ttl">{s.title}</span>
            <span className="plus">+</span>
          </button>
          <div className="svc-body" ref={(el) => (bodyRefs.current[i] = el)}>
            <div className="svc-body-inner">
              <span></span>
              <div>
                {s.body}
                <div className="chips">
                  {s.chips.map((c) => (
                    <span className="chip" key={c}>{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
