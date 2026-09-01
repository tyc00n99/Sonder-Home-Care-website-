'use client';

import { useState } from 'react';
import { submitForm } from '@/lib/submitForm';

export default function ReferralForm() {
  const [status, setStatus] = useState('idle');

  async function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    setStatus('sending');
    try {
      await submitForm({ _subject: 'New referral — Sonder Homecare website', ...data });
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
          <label htmlFor="r-name">Your name</label>
          <input id="r-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div>
          <label htmlFor="r-role">Your role</label>
          <select id="r-role" name="role" required defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Case manager</option>
            <option>Hospital discharge planner</option>
            <option>Physician / clinic</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="r-org">Organization &amp; county</label>
        <input id="r-org" name="organization" type="text" placeholder="e.g. Hennepin County, M Health Fairview" />
      </div>
      <div className="row2">
        <div>
          <label htmlFor="r-phone">Phone</label>
          <input id="r-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="r-email">Email</label>
          <input id="r-email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>
      <div>
        <label htmlFor="r-fund">Client&apos;s funding</label>
        <select id="r-fund" name="funding" defaultValue="">
          <option value="" disabled>Select one</option>
          <option>CADI waiver</option>
          <option>BI waiver</option>
          <option>DD waiver</option>
          <option>Elderly Waiver</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div>
        <label htmlFor="r-msg">What the client needs</label>
        <textarea id="r-msg" name="needs" placeholder="Support needs, schedule, timeline. No private medical details here, please." />
      </div>
      <button className="btn" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Referral received' : <>Send referral <span className="arr">&rarr;</span></>}
      </button>
      {status === 'sent' && <div className="form-ok" style={{ display: 'block' }}>Got it. A real person replies within one business day.</div>}
      {status === 'error' && (
        <div className="form-err">
          That didn&apos;t go through. Email <a href="mailto:Admin@sonderhomecaremn.com" style={{ fontWeight: 600 }}>Admin@sonderhomecaremn.com</a>, call <a href="tel:+16514176115" style={{ fontWeight: 600 }}>651-417-6115</a>, or fax +1 651-386-0383.
        </div>
      )}
      <div className="fine">Records and anything sensitive move later, through the authorization process, not this form.</div>
    </form>
  );
}
