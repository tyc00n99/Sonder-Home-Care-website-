import Link from 'next/link';
import PageFx from '@/components/PageFx';

export const metadata = {
  title: 'For Professionals',
  description: 'How case managers, discharge planners, and physicians refer clients to Sonder Homecare, a licensed 245D provider in Minnesota.',
};

export default function ProfessionalsPage() {
  return (
    <main>
      <PageFx />
      <section className="band page-top" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <Link className="back-link" href="/">&larr; Back to home</Link>
          <div className="aud-head">
            <div>
              <div className="eyebrow">For Professionals</div>
              <h2>From referral to first shift, in four steps.</h2>
            </div>
            <p className="lede">A process case managers and discharge planners can set their watch to.</p>
          </div>
          <div className="steps-grid">
            <div className="step" data-reveal><div className="n">1</div><h3>Reach out</h3><p>Call, email, or send the form with the basics. We reply within one business day.</p><div className="note">Day 1</div></div>
            <div className="step" data-reveal style={{ '--d': '.1s' }}><div className="n">2</div><h3>Intake &amp; assessment</h3><p>We review the support plan, meet the client where they live, and tell you straight whether we&apos;re a fit.</p><div className="note">Week 1</div></div>
            <div className="step" data-reveal style={{ '--d': '.2s' }}><div className="n">3</div><h3>Caregiver match &amp; schedule</h3><p>The family meets their caregiver, and we set a schedule that fits the household.</p><div className="note">Weeks 1&ndash;2</div></div>
            <div className="step" data-reveal style={{ '--d': '.3s' }}><div className="n">4</div><h3>Services begin</h3><p>First shift on the calendar, then progress reports on schedule.</p><div className="note">Ongoing</div></div>
          </div>
          <div className="careers-strip" style={{ marginTop: 56, marginBottom: 0 }}>
            <div className="cs-t">Have a client in mind? Send the basics and we&apos;ll tell you within one business day whether we&apos;re a fit.</div>
            <Link className="btn btn-copper" href="/#contact">Start a referral <span className="arr">&rarr;</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
