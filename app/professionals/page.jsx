import Link from 'next/link';
import PageFx from '@/components/PageFx';
import ReferralForm from '@/components/ReferralForm';

export const metadata = {
  title: 'For Professionals',
  description:
    'How case managers, discharge planners, and physicians work with Sonder Homecare: why placements hold, how discharges land safely with an RN on call, and a two-minute referral form.',
};

export default function ProfessionalsPage() {
  return (
    <main>
      <PageFx />
      <section className="page-top" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <Link className="back-link" href="/">&larr; Back to home</Link>

          <div className="page-head" style={{ maxWidth: 720 }}>
            <div className="eyebrow">For Professionals</div>
            <h2>Send us the hard ones.</h2>
            <p className="lede" style={{ marginTop: 16, maxWidth: 620 }}>
              Whether you manage cases for a county or discharge patients from a floor, you need the same two things from a provider: a fast yes, and no surprises after it. That&apos;s the job, and we built the agency around it.
            </p>
          </div>

          <div className="pro-grid">
            <div className="pro-card" data-reveal>
              <div className="pk">For Case Managers</div>
              <h3>Placements that stay placed.</h3>
              <p className="hook">A placement that collapses in week three helps nobody. We build ours to hold.</p>
              <ul className="dot-list">
                <li>No waitlist. Care starts fast, not next quarter</li>
                <li>Replies within one business day, from someone who can say yes</li>
                <li>Consistent caregivers, so clients aren&apos;t restarting trust every month</li>
                <li>245D documentation, progress reports, and incident reports that arrive without chasing</li>
                <li>Five languages across our team: English, Spanish, Korean, ASL, and Hmong</li>
                <li>If we&apos;re not the right fit, we say so up front. Fewer bounce-backs for everyone</li>
              </ul>
              <a className="aud-link" href="#refer">Send a referral <span className="arr">&darr;</span></a>
            </div>
            <div className="pro-card" data-reveal style={{ '--d': '.12s' }}>
              <div className="pk">For Hospitals &amp; Medical Providers</div>
              <h3>Discharge home, without the bounce-back.</h3>
              <p className="hook">Patients recover better at home, and beds move when discharges hold. We line up support before the patient leaves the floor.</p>
              <ul className="dot-list">
                <li>In-home support arranged before discharge day, not after</li>
                <li>An RN on call for medication management, so higher-acuity cases land safely</li>
                <li>Night supervision through the risky first weeks home</li>
                <li>An on-call DSP around the clock, for whatever the night brings</li>
                <li>Treating providers kept in the loop after the transition</li>
              </ul>
              <a className="aud-link" href="#refer">Refer a discharge <span className="arr">&darr;</span></a>
            </div>
          </div>

          <div style={{ marginTop: 88 }}>
            <div className="aud-head">
              <div>
                <div className="eyebrow" data-reveal>The referral process</div>
                <h2 data-reveal style={{ '--d': '.08s' }}>Four steps, no runaround.</h2>
              </div>
              <p className="lede" data-reveal style={{ '--d': '.16s' }}>Simple on purpose. You have enough process in your day already.</p>
            </div>
            <div className="steps-grid">
              <div className="step" data-reveal><div className="n">1</div><h3>Send the referral</h3><p>The form below, a call, or an email. We reply within one business day.</p><div className="note">Day 1</div></div>
              <div className="step" data-reveal style={{ '--d': '.1s' }}><div className="n">2</div><h3>Records &amp; authorization</h3><p>One authorization form, then we pull the support plan and records ourselves.</p><div className="note">Week 1</div></div>
              <div className="step" data-reveal style={{ '--d': '.2s' }}><div className="n">3</div><h3>Meet &amp; match</h3><p>We meet the client where they live and match the right caregiver.</p><div className="note">Weeks 1&ndash;2</div></div>
              <div className="step" data-reveal style={{ '--d': '.3s' }}><div className="n">4</div><h3>First shift &amp; reporting</h3><p>Services start, and documentation flows to you on schedule.</p><div className="note">Ongoing</div></div>
            </div>
          </div>

          <div id="refer" style={{ marginTop: 88, scrollMarginTop: 130 }}>
            <div className="contact" data-reveal>
              <div className="contact-inner">
                <div>
                  <div className="eyebrow">Submit a referral</div>
                  <h2>Refer in two minutes.</h2>
                  <p className="lede" style={{ marginTop: 16 }}>The basics are enough to start. We take it from there, directly with you.</p>
                  <div className="contact-points">
                    <div className="cpoint">A reply within one business day, every time</div>
                    <div className="cpoint">RN on call for medication management cases</div>
                    <div className="cpoint">No waitlist, so care starts fast</div>
                  </div>
                  <div className="contact-addr">
                    <div className="h">Headquarters</div>
                    <div className="a">7825 Washington Ave South, Suite 300A<br />Bloomington, MN 55439</div>
                    <div className="h" style={{ marginTop: 18 }}>Reach us</div>
                    <div className="a">
                      <a href="tel:+16514176115">651-417-6115</a><br />
                      <a href="mailto:Admin@sonderhomecaremn.com">Admin@sonderhomecaremn.com</a><br />
                      Fax +1 651-386-0383
                    </div>
                  </div>
                </div>
                <ReferralForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
