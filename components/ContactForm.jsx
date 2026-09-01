'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="row2">
        <div>
          <label htmlFor="f-name">Your name</label>
          <input id="f-name" type="text" autoComplete="name" required />
        </div>
        <div>
          <label htmlFor="f-role">I am a&hellip;</label>
          <select id="f-role" required defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Family member</option>
            <option>Case manager</option>
            <option>Hospital / discharge planner</option>
            <option>Physician / clinic</option>
            <option>Job applicant</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="row2">
        <div>
          <label htmlFor="f-phone">Phone</label>
          <input id="f-phone" type="tel" autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="f-email">Email</label>
          <input id="f-email" type="email" autoComplete="email" required />
        </div>
      </div>
      <div>
        <label htmlFor="f-msg">How can we help?</label>
        <textarea id="f-msg" placeholder="A little about the client, waiver program, or what you're looking for" />
      </div>
      <button className="btn" type="submit">{sent ? 'Message sent' : <>Send message <span className="arr">&rarr;</span></>}</button>
      {sent && <div className="form-ok" style={{ display: 'block' }}>Thank you. Our team will follow up within one business day.</div>}
      <div className="fine">Please don&apos;t include private medical details in this form.</div>
    </form>
  );
}
