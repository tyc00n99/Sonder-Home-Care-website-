'use client';

import { useState } from 'react';

export default function ReferralForm() {
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
          <label htmlFor="r-name">Your name</label>
          <input id="r-name" type="text" autoComplete="name" required />
        </div>
        <div>
          <label htmlFor="r-role">Your role</label>
          <select id="r-role" required defaultValue="">
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
        <input id="r-org" type="text" placeholder="e.g. Hennepin County, M Health Fairview" />
      </div>
      <div className="row2">
        <div>
          <label htmlFor="r-phone">Phone</label>
          <input id="r-phone" type="tel" autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="r-email">Email</label>
          <input id="r-email" type="email" autoComplete="email" required />
        </div>
      </div>
      <div>
        <label htmlFor="r-fund">Client&apos;s funding</label>
        <select id="r-fund" defaultValue="">
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
        <textarea id="r-msg" placeholder="Support needs, schedule, timeline. No private medical details here, please." />
      </div>
      <button className="btn" type="submit">{sent ? 'Referral received' : <>Send referral <span className="arr">&rarr;</span></>}</button>
      {sent && <div className="form-ok" style={{ display: 'block' }}>Got it. A real person replies within one business day.</div>}
      <div className="fine">Records and anything sensitive move later, through the authorization process, not this form.</div>
    </form>
  );
}
