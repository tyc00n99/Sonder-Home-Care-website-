import Link from 'next/link';
import PageFx from '@/components/PageFx';

export const metadata = {
  title: 'FAQ',
  description: 'Common questions from families and referring professionals about Sonder Homecare, a licensed 245D provider in Minnesota.',
};

const FAQS = [
  {
    q: 'Where do services happen?',
    a: "In the client's own home, a family member's home, or out in the community. We don't operate a facility or group home. Our office is in Bloomington; our caregivers come to you.",
    open: true,
  },
  {
    q: 'What is a 245D license, and why does it matter?',
    a: 'Chapter 245D is the Minnesota DHS licensing standard for home and community based services. It sets requirements for staff training, person-centered planning, documentation, and rights protections. A 245D license means the state audits how we operate.',
  },
  {
    q: 'How is care paid for?',
    a: "Most clients are funded through Minnesota's Medicaid waiver programs, including CADI, BI, DD, and the Elderly Waiver, coordinated through a county or tribal case manager. If you're not sure where to start, we can point you to the right first call.",
  },
  {
    q: 'How do I refer a client?',
    a: "Send us the referral form on the contact section, or reach out directly with the client's support needs and waiver information. We reply within one business day and tell you quickly whether we're a fit.",
  },
  {
    q: 'Do you provide residential or group home care?',
    a: "No. We don't provide community residential services, crisis respite, integrated community supports, or ICF/DD services. Our work is in-home and community-based: IHS, respite, night supervision, homemaker services, and most other basic and intensive 245D services.",
  },
  {
    q: 'How do you work with hospitals and physicians?',
    a: 'We coordinate with discharge planners so in-home support is arranged before the patient leaves, then keep treating providers updated after the transition, so discharges home actually hold.',
  },
  {
    q: 'How do you keep families and case managers informed?',
    a: 'Progress reports go out on schedule, incidents get reported the way 245D requires, and in between you can just call.',
  },
];

export default function FaqPage() {
  return (
    <main>
      <PageFx />
      <section className="band page-top" style={{ minHeight: '60vh' }}>
        <div className="wrap">
          <Link className="back-link" href="/">&larr; Back to home</Link>
          <div className="faq-grid">
            <div>
              <div className="eyebrow">FAQ</div>
              <h2>Common questions.</h2>
              <p className="lede" style={{ marginTop: 16 }}>What families and referring professionals ask most. If yours isn&apos;t here, ask us.</p>
              <Link className="btn btn-dark" href="/#contact" style={{ marginTop: 28 }}>Get in touch</Link>
            </div>
            <div className="faq-list">
              {FAQS.map((f) => (
                <details key={f.q} open={f.open}>
                  <summary>{f.q}<span className="plus">+</span></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
