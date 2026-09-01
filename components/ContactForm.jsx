'use client';

import { useState } from 'react';
import { submitForm } from '@/lib/submitForm';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  async function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    setStatus('sending');
    try {
      await submitForm({ _subject: 'Website inquiry — Sonder Homecare', ...data });
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
          <label htmlFor="f-name">Your name</label>
          <input id="f-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div>
          <label htmlFor="f-role">I am a&hellip;</label>
          <select id="f-role" name="role" required defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Family member</option>
            <option>Case manager</option>
            <option>Hospital / discharge planner</option>
            <option>Physician / clinic</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="row2">
        <div>
          <label htmlFor="f-phone">Phone</label>
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="f-email">Email</label>
          <input id="f-email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>
      <div>
        <label htmlFor="f-msg">How can we help</label>
        <textarea id="f-msg" name="message" placeholder="A little about the client, waiver program, or what you're looking for" />
      </div>
      <button className="btn" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message sent' : <>Send message <span className="arr">&rarr;</span></>}
      </button>
      {status === 'sent' && <div className="form-ok" style={{ display: 'block' }}>Thank you. Our team replies within one business day.</div>}
      {status === 'error' && (
        <div className="form-err">
          That didn&apos;t go through. Email us directly at <a href="mailto:Admin@sonderhomecaremn.com" style={{ fontWeight: 600 }}>Admin@sonderhomecaremn.com</a> or call <a href="tel:+16514176115" style={{ fontWeight: 600 }}>651-417-6115</a>.
        </div>
      )}
      <div className="fine">Please don&apos;t include private medical details in this form.</div>
    </form>
  );
}
