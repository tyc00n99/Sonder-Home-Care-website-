import Link from 'next/link';
import MnMap from '@/components/MnMap';
import PageFx from '@/components/PageFx';
import ServicesAccordion from '@/components/ServicesAccordion';
import ContactForm from '@/components/ContactForm';
import { bp } from '@/lib/paths';

const Check = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
);

export default function Home() {
  return (
    <main id="home">
      <PageFx />

      <header className="hero" id="top">
        <div className="hero-bg" aria-hidden="true">
          <video id="heroVid" autoPlay muted loop playsInline poster={`${bp}/hero-poster.jpg`}>
            <source src={`${bp}/hero-loop.mp4`} type="video/mp4" />
          </video>
          <div className="hv-veil"></div>
        </div>
        <div className="orb" aria-hidden="true"></div>
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-map" data-reveal style={{ '--d': '.12s' }}>
              <span className="h-chip c1">Reply in 1 business day</span>
              <span className="h-chip c2">CADI &middot; BI &middot; DD &middot; EW</span>
              <MnMap />
              <div className="map-cap">Including Minneapolis, St. Paul, Brooklyn Park, Chaska, Eagan, Apple Valley, Rosemount, Willmar, and everywhere between. Outside the circle? Ask.</div>
            </div>
            <div className="hero-copy">
              <h1 data-reveal>Care that <em className="pop">comes to you.</em></h1>
              <p className="sub" data-reveal style={{ '--d': '.08s' }}>
                Sonder Homecare is a <span className="lic">licensed 245D provider</span> in Minnesota. Our caregivers work in clients&apos; own homes, family homes, and the community, with support plans built around each person.
              </p>
              <div className="hero-ctas" data-reveal style={{ '--d': '.16s' }}>
                <Link className="btn btn-copper" href="/#contact">Refer a client <span className="arr">&rarr;</span></Link>
                <Link className="btn btn-dark" href="/#about">Talk to our team</Link>
              </div>
              <div className="trust-row" data-reveal style={{ '--d': '.24s' }}>
                <span><Check />245D Licensed &middot; MN DHS</span>
                <span><Check />Basic &amp; Intensive Services</span>
                <span><Check />Serving the Twin Cities Metro &amp; Greater MN</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="about">
        <div className="wrap">
          <div className="about-grid">
            <div>
              <div className="eyebrow" data-reveal>Who we are</div>
              <h2 data-reveal style={{ '--d': '.08s' }}>Your home is the setting. We bring the support.</h2>
              <div className="snapshot" data-reveal style={{ '--d': '.16s' }} role="img" aria-label="Sample daily documentation card">
                <div className="sh"><span>Daily notes &middot; sample</span><span className="live">245D format</span></div>
                <div className="snap-row"><span className="t">9:00a</span><span>IHS skills session</span><span className="ok">Done ✓</span></div>
                <div className="snap-row"><span className="t">1:00p</span><span>Homemaking &amp; laundry</span><span className="ok">Done ✓</span></div>
                <div className="snap-row"><span className="t">4:00p</span><span>Community outing</span><span className="ok">Out ✓</span></div>
                <div className="sf">Every shift documented. Every note reviewable.</div>
              </div>
            </div>
            <div>
              <p data-reveal style={{ '--d': '.12s' }}>
                Sonder Homecare is a Minnesota home and community based services provider licensed under <strong>DHS chapter 245D</strong>. We don&apos;t run a facility. Our caregivers go where our clients already live: their own homes, a family member&apos;s home, and the community around them.
              </p>
              <p data-reveal style={{ '--d': '.2s' }}>
                Each client has a person-centered plan built around their own goals and routines, and the same caregivers show up week after week. Families and case managers get updates without having to ask for them. Our office is in Bloomington; our work happens at your address.
              </p>
            </div>
          </div>
          <div className="stats">
            <div className="stat" data-reveal><div className="num"><span data-count="24">0</span><em>/7</em></div><div className="lbl">Coverage, including night supervision</div></div>
            <div className="stat" data-reveal style={{ '--d': '.1s' }}><div className="num"><span data-count="245">0</span><em>D</em></div><div className="lbl">Licensed by Minnesota DHS</div></div>
            <div className="stat" data-reveal style={{ '--d': '.2s' }}><div className="num"><span data-count="4">0</span><em>+</em></div><div className="lbl">Waiver programs &middot; CADI, BI, DD, EW</div></div>
          </div>
        </div>
      </section>

      <section className="band" id="families">
        <div className="wrap">
          <div className="aud-head">
            <div>
              <div className="eyebrow" data-reveal>Who we work with</div>
              <h2 data-reveal style={{ '--d': '.08s' }}>Families, case managers, and clinical teams.</h2>
            </div>
            <p className="lede" data-reveal style={{ '--d': '.16s' }}>Each needs something different from a provider. Here&apos;s what each gets from us.</p>
          </div>
          <div className="aud-grid">
            <div className="aud-card" data-reveal>
              <div className="glyph" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M9.5 21v-6h5v6" /></svg>
              </div>
              <h3>For Families</h3>
              <p>Inviting a caregiver into your home is a big decision. Meet ours before services start, and keep the routines that already work for your family.</p>
              <ul>
                <li>Meet your caregiver before the first shift</li>
                <li>Help shape the plan, and change it when life changes</li>
                <li>Respite that gives you a real break</li>
              </ul>
              <Link className="aud-link" href="/#contact">Talk to our team <span className="arr">&rarr;</span></Link>
            </div>
            <div className="aud-card" data-reveal style={{ '--d': '.12s' }}>
              <div className="glyph" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12h6M9 16h4" /><path d="M8 3h8l4 4v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3z" /><path d="M15 3v5h5" /></svg>
              </div>
              <h3>For Case Managers</h3>
              <p>You need services that start on time and a provider who answers the phone.</p>
              <ul>
                <li>Replies to referral inquiries within one business day</li>
                <li>IHS, respite, night supervision, and homemaker services</li>
                <li>245D documentation, progress reports, incident reporting</li>
              </ul>
              <Link className="aud-link" href="/#contact">Start a referral <span className="arr">&rarr;</span></Link>
            </div>
            <div className="aud-card" data-reveal style={{ '--d': '.24s' }} id="professionals">
              <div className="glyph" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M3 12h18" /><circle cx="12" cy="12" r="9" /></svg>
              </div>
              <h3>For Hospitals &amp; Physicians</h3>
              <p>Patients go home sooner when in-home support is already lined up. We coordinate with discharge planners and keep treating providers in the loop.</p>
              <ul>
                <li>In-home support arranged before discharge</li>
                <li>Night supervision for higher-risk transitions home</li>
                <li>Ongoing collaboration with the care team</li>
              </ul>
              <Link className="aud-link" href="/#contact">Partner with us <span className="arr">&rarr;</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="wrap">
          <div className="svc-head">
            <div className="eyebrow" data-reveal>Services</div>
            <h2 data-reveal style={{ '--d': '.08s' }}>What we provide.</h2>
            <p className="lede" data-reveal style={{ '--d': '.16s', marginTop: 16 }}>Basic and intensive 245D services, delivered in your home and community.</p>
          </div>
          <ServicesAccordion />
          <p className="svc-note" data-reveal>
            We provide most basic and intensive services under chapter 245D, beyond the four above. We do not provide community residential services, crisis respite, integrated community supports, or ICF/DD services. Not sure where a client fits? Ask us.
          </p>
        </div>
      </section>

      <section className="band" id="referrals">
        <div className="wrap">
          <div className="aud-head">
            <div>
              <div className="eyebrow" data-reveal>Referral process</div>
              <h2 data-reveal style={{ '--d': '.08s' }}>From referral to first shift, in four steps.</h2>
            </div>
            <p className="lede" data-reveal style={{ '--d': '.16s' }}>A process case managers and discharge planners can set their watch to.</p>
          </div>
          <div className="steps-grid">
            <div className="step" data-reveal><div className="n">1</div><h3>Reach out</h3><p>Call, email, or send the form with the basics. We reply within one business day.</p><div className="note">Day 1</div></div>
            <div className="step" data-reveal style={{ '--d': '.1s' }}><div className="n">2</div><h3>Intake &amp; assessment</h3><p>We review the support plan, meet the client where they live, and tell you straight whether we&apos;re a fit.</p><div className="note">Week 1</div></div>
            <div className="step" data-reveal style={{ '--d': '.2s' }}><div className="n">3</div><h3>Caregiver match &amp; schedule</h3><p>The family meets their caregiver, and we set a schedule that fits the household.</p><div className="note">Weeks 1&ndash;2</div></div>
            <div className="step" data-reveal style={{ '--d': '.3s' }}><div className="n">4</div><h3>Services begin</h3><p>First shift on the calendar, then progress reports on schedule.</p><div className="note">Ongoing</div></div>
          </div>
        </div>
      </section>

      <section id="why">
        <div className="wrap">
          <div className="aud-head">
            <div>
              <div className="eyebrow" data-reveal>Why Sonder</div>
              <h2 data-reveal style={{ '--d': '.08s' }}>Moving out shouldn&apos;t be the price of getting support.</h2>
            </div>
            <p className="lede" data-reveal style={{ '--d': '.16s' }}>Most people do better in a home they know. We built the agency around that.</p>
          </div>
          <div className="compare-grid">
            <div className="compare-col them" data-reveal>
              <h3>Facility-based care</h3>
              <p>Facilities can mean rotating staff, rigid routines, and leaving a familiar home behind.</p>
              <div className="marquee" aria-hidden="true">
                <div className="marquee-track">
                  <span className="mtag">Leaving home for care</span><span className="mtag">Rotating strangers</span><span className="mtag">One-size-fits-all routines</span><span className="mtag">Families left guessing</span>
                  <span className="mtag">Leaving home for care</span><span className="mtag">Rotating strangers</span><span className="mtag">One-size-fits-all routines</span><span className="mtag">Families left guessing</span>
                </div>
                <div className="marquee-track rev">
                  <span className="mtag">Institutional feel</span><span className="mtag">Paperwork delays</span><span className="mtag">Unreturned calls</span><span className="mtag">Staffing churn</span>
                  <span className="mtag">Institutional feel</span><span className="mtag">Paperwork delays</span><span className="mtag">Unreturned calls</span><span className="mtag">Staffing churn</span>
                </div>
              </div>
            </div>
            <div className="compare-col us" data-reveal style={{ '--d': '.12s' }}>
              <h3>Sonder Homecare</h3>
              <p>A small licensed agency, the same caregivers each week, and everyone kept in the loop.</p>
              <div className="marquee" aria-hidden="true">
                <div className="marquee-track">
                  <span className="mtag">Your own home</span><span className="mtag">Consistent caregivers</span><span className="mtag">Person-centered plans</span><span className="mtag">1-business-day replies</span>
                  <span className="mtag">Your own home</span><span className="mtag">Consistent caregivers</span><span className="mtag">Person-centered plans</span><span className="mtag">1-business-day replies</span>
                </div>
                <div className="marquee-track rev">
                  <span className="mtag">Night supervision covered</span><span className="mtag">Clean 245D documentation</span><span className="mtag">Provider collaboration</span><span className="mtag">Families in the loop</span>
                  <span className="mtag">Night supervision covered</span><span className="mtag">Clean 245D documentation</span><span className="mtag">Provider collaboration</span><span className="mtag">Families in the loop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="name-strip" data-reveal>
            <div className="eyebrow">Our name</div>
            <div className="defn">son&middot;der <span className="pos">noun</span>: the awareness that every passerby is living a life as vivid and complex as your own.</div>
            <div className="after">We named the company after it on purpose.</div>
          </div>
        </div>
      </section>

      <section id="contact" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="contact" data-reveal>
            <div className="contact-inner">
              <div>
                <div className="eyebrow">Get in touch</div>
                <h2>Tell us what you need.</h2>
                <p className="lede" style={{ marginTop: 16 }}>Family exploring options, case manager with a referral, or a discharge team looking for a partner. We reply within one business day.</p>
                <div className="contact-points">
                  <div className="cpoint">Families: meet our team and talk through options</div>
                  <div className="cpoint">Case managers: send referrals for CADI, BI, DD &amp; EW clients</div>
                  <div className="cpoint">Hospitals &amp; clinics: line up in-home support before discharge</div>
                </div>
                <div className="contact-addr">
                  <div className="h">Headquarters</div>
                  <div className="a">7825 Washington Ave South, Suite 300A<br />Bloomington, MN 55439</div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
