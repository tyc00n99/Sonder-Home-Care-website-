import Link from 'next/link';
import PageFx from '@/components/PageFx';
import CareersForm from '@/components/CareersForm';

export const metadata = {
  title: 'Careers',
  description: 'Open roles at Sonder Homecare: Direct Support Professionals, DC/DM, Case Manager, and per-diem RN. Licensed 245D provider in Minnesota.',
};

const ROLES = [
  {
    title: 'Direct Support Professional',
    rate: '$18–$25 / hr',
    desc: 'The heart of the agency. DSPs work one-on-one with clients in their homes and communities. We hire experienced caregivers on purpose: they train fast, and the quality of care shows it.',
    doDo: ["Daily living support and skill building in clients' homes", 'Community outings and appointments', 'Shift documentation in 245D format'],
    need: ['High school diploma', '2+ years caregiving for people with intellectual disabilities or on a waiver plan', 'Pass a background check'],
  },
  {
    title: 'Designated Coordinator / Designated Manager',
    rate: '$25–$35 / hr',
    desc: "The DC/DM oversees service delivery and compliance for the whole agency, and is the county's go-to person at Sonder.",
    doDo: ['Complete intake paperwork', 'Write abuse prevention plans and support plans', 'Work directly with case managers and the county'],
    need: ["Bachelor's degree with 5 years of experience, or master's with 3", 'Pass a background check'],
  },
  {
    title: 'Case Manager',
    rate: '$25–$30 / hr',
    desc: "Our families' advocate. You coordinate with county case managers so nothing about a client's care falls through the cracks.",
    doDo: ['Coordinate support plans with county case managers', 'Advocate for our families', 'Handle eligibility checks, insurance questions, and gaps in care'],
    need: ["Bachelor's degree", 'Pass a background check'],
  },
  {
    title: 'Registered Nurse (Per Diem)',
    rate: '$30–$50 / hr',
    desc: "On-call support for clients we provide medication management for. You're the standby for questions and concerns from staff and families.",
    doDo: ['On-call and standby coverage on a per diem schedule', 'Support for medication management clients', 'Guidance to staff when health concerns come up'],
    need: ["BSN or master's of science in nursing", 'Active RN license in Minnesota', 'Pass a background check'],
  },
];

export default function CareersPage() {
  return (
    <main>
      <PageFx />
      <section className="page-top" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <Link className="back-link" href="/">&larr; Back to home</Link>
          <div className="page-head">
            <div className="eyebrow">Careers</div>
            <h2>Work that means something.</h2>
            <p className="lede" style={{ marginTop: 16 }}>We hire people who treat caregiving as a profession. Four roles are open now. Every role requires a passed background check.</p>
          </div>
          <div className="roles">
            {ROLES.map((r) => (
              <div className="role" key={r.title}>
                <div className="role-head">
                  <h3>{r.title}</h3>
                  <span className="rate">{r.rate}</span>
                </div>
                <p className="rdesc">{r.desc}</p>
                <div className="role-cols">
                  <div>
                    <h4>What you&apos;ll do</h4>
                    <ul>{r.doDo.map((x) => <li key={x}>{x}</li>)}</ul>
                  </div>
                  <div>
                    <h4>What you&apos;ll need</h4>
                    <ul>{r.need.map((x) => <li key={x}>{x}</li>)}</ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div id="apply" style={{ marginTop: 64, scrollMarginTop: 130 }}>
            <div className="contact" data-reveal>
              <div className="contact-inner">
                <div>
                  <div className="eyebrow">Apply</div>
                  <h2>Tell us who you are.</h2>
                  <p className="lede" style={{ marginTop: 16 }}>One short form. A real person reads it, and you hear back within one business day.</p>
                  <div className="contact-points">
                    <div className="cpoint">Four roles open now</div>
                    <div className="cpoint">Every role requires a passed background check</div>
                    <div className="cpoint">Resumes go to Admin@sonderhomecaremn.com</div>
                  </div>
                  <div className="contact-addr">
                    <div className="h">Reach us</div>
                    <div className="a">
                      <a href="tel:+16514176115">651-417-6115</a><br />
                      <a href="mailto:Admin@sonderhomecaremn.com">Admin@sonderhomecaremn.com</a>
                    </div>
                  </div>
                </div>
                <CareersForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
