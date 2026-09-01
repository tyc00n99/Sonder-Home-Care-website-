'use client';

import { useState } from 'react';
import { submitForm } from '@/lib/submitForm';

export default function CareersForm() {
  const [status, setStatus] = useState('idle');

  async function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    setStatus('sending');
    try {
      await submitForm({ _subject: 'Job application — Sonder Homecare website', ...data });
      setStatus('sent');
      e.target.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="row2">
        <div>
          <label htmlFor="c-name">Your name</label>
          <input id="c-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div>
          <label htmlFor="c-pos">Position</label>
          <select id="c-pos" name="position" required defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Direct Support Professional</option>
            <option>Designated Coordinator / Designated Manager</option>
            <option>Case Manager</option>
            <option>Registered Nurse (Per Diem)</option>
          </select>
        </div>
      </div>
      <div className="row2">
        <div>
          <label htmlFor="c-phone">Phone</label>
          <input id="c-phone" name="phone" type="tel" autoComplete="tel" required />
        </div>
        <div>
          <label htmlFor="c-email">Email</label>
          <input id="c-email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>
      <div>
        <label htmlFor="c-msg">Your experience</label>
        <textarea id="c-msg" name="experience" placeholder="Years of caregiving, credentials, languages, availability" />
      </div>
      <button className="btn" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Application sent' : <>Apply <span className="arr">&rarr;</span></>}
      </button>
      {status === 'sent' && <div className="form-ok" style={{ display: 'block' }}>Application received. We reply within one business day.</div>}
      {status === 'error' && (
        <div className="form-err">
          That didn&apos;t go through. Email your application to <a href="mailto:Admin@sonderhomecaremn.com" style={{ fontWeight: 600 }}>Admin@sonderhomecaremn.com</a>.
        </div>
      )}
      <div className="fine">Have a resume ready? Email it to Admin@sonderhomecaremn.com and mention this application.</div>
    </form>
  );
}
