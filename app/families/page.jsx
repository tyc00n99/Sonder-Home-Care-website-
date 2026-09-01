import Link from 'next/link';
import PageFx from '@/components/PageFx';

export const metadata = {
  title: 'For Families',
  description:
    'Why Minnesota families choose Sonder Homecare: how Medicaid waivers pay for in-home 245D care, what it gives back to family caregivers, and the questions to ask any provider.',
};

export default function FamiliesPage() {
  return (
    <main>
      <PageFx />
      <section className="page-top" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <Link className="back-link" href="/">&larr; Back to home</Link>

          <div className="page-head" style={{ maxWidth: 720 }}>
            <div className="eyebrow">For Families</div>
            <h2>You&apos;ve been the whole care team. You don&apos;t have to be.</h2>
            <p className="lede" style={{ marginTop: 16, maxWidth: 620 }}>
              If you&apos;re here, you&apos;re probably already doing this job: the medications, the overnights, the appointments, the worry. This page covers the three things families ask us most. How it gets paid for. What it gives you back. And what working with us actually looks like.
            </p>
          </div>

          <div className="info-band" data-reveal style={{ marginTop: 40 }}>
            <h3>The money part, in plain words.</h3>
            <p>
              <span className="peach">Medicare will not pay for this.</span> It covers short-term skilled care after a hospital stay, then stops. Ongoing help at home, the kind your family actually needs, is exactly what it excludes.
            </p>
            <p>
              What pays instead is Minnesota&apos;s Medical Assistance through waiver programs: <span className="peach">CADI, Brain Injury, DD, and the Elderly Waiver</span>. If your person qualifies, services like ours typically cost your family nothing out of pocket. Most families have never heard of these programs until someone tells them. Consider yourself told.
            </p>
            <div className="info-steps">
              <div className="istep"><div className="k">Start here</div><p>Call your county or tribal agency and request a MnCHOICES assessment. It&apos;s free, and they must complete it within 45 days.</p></div>
              <div className="istep"><div className="k">Then</div><p>A case manager is assigned and builds a support plan around your person&apos;s actual needs.</p></div>
              <div className="istep"><div className="k">Your choice</div><p>The provider is your decision, by law. And if a provider disappoints you, you can switch. Remember that.</p></div>
            </div>
          </div>

          <div style={{ marginTop: 72 }} data-reveal>
            <div className="eyebrow">What it gives you back</div>
            <h2 style={{ maxWidth: 640 }}>Caring for someone you love shouldn&apos;t cost you everything else.</h2>
            <p className="lede" style={{ marginTop: 14, maxWidth: 620 }}>
              You already know the weight: the 5am alarm, the lifting, the pharmacy runs, the nights you sleep with one ear open. Here is what starts to change when we carry a share of it.
            </p>
            <div className="askrow" style={{ marginTop: 34 }}>
              <div className="q"><span className="qn">What changes when we start</span>Nights become nights again.</div>
              <div className="a">Night supervision means someone trained is awake in the house so you don&apos;t have to be. Families tell us the first full week of sleep felt like a different life.</div>
            </div>
            <div className="askrow">
              <div className="q"><span className="qn">What changes when we start</span>You get your role back.</div>
              <div className="a">You became a nurse, scheduler, and pharmacist by necessity. With a caregiver carrying the daily work, you get to be a <b>daughter, husband, or mom</b> again. That relationship is the thing worth protecting.</div>
            </div>
            <div className="askrow">
              <div className="q"><span className="qn">What changes when we start</span>Your job and health stop absorbing the cost.</div>
              <div className="a">Hours cut at work, appointments skipped, your own health deferred: that&apos;s the quiet bill of family caregiving. Respite and scheduled support are how it stops compounding.</div>
            </div>
          </div>

          <div style={{ marginTop: 88 }} data-reveal>
            <div className="eyebrow">The Sonder standard</div>
            <h2 style={{ maxWidth: 680 }}>What working with us actually looks like.</h2>
            <p className="lede" style={{ marginTop: 14, maxWidth: 640 }}>
              Every provider promises good care. These are the specifics we put in writing.
            </p>
            <div style={{ marginTop: 36 }}>
              <div className="askrow">
                <div className="q"><span className="qn">01</span>You meet your caregiver first.</div>
                <div className="a">Before the first shift, not after. If the fit is wrong, <b>we recast before we start</b>.</div>
              </div>
              <div className="askrow">
                <div className="q"><span className="qn">02</span>Experienced hands only.</div>
                <div className="a">Every DSP has <b>two or more years</b> supporting people with disabilities, and every hire passes a background check. Your family is a strange place to start learning.</div>
              </div>
              <div className="askrow">
                <div className="q"><span className="qn">03</span>Your language, spoken here.</div>
                <div className="a"><b>English, Spanish, Korean, ASL, and Hmong.</b> Care lands better in the language your family speaks at the kitchen table.</div>
              </div>
              <div className="askrow">
                <div className="q"><span className="qn">04</span>No waitlist.</div>
                <div className="a">Our DSP network runs deep, so <b>care starts fast</b> instead of sitting in a queue.</div>
              </div>
              <div className="askrow">
                <div className="q"><span className="qn">05</span>Someone answers at 2am.</div>
                <div className="a"><b>An on-call DSP, every hour of every night.</b> Emergencies don&apos;t keep business hours.</div>
              </div>
              <div className="askrow">
                <div className="q"><span className="qn">06</span>You&apos;ll never chase an update.</div>
                <div className="a">Every shift documented, progress reports on schedule, incidents reported <b>the way the state requires</b>.</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 88 }} data-reveal>
            <div className="eyebrow">The alternative</div>
            <h2 style={{ maxWidth: 640 }}>Moving out shouldn&apos;t be the price of getting support.</h2>
            <div className="compare-grid" style={{ marginTop: 40 }}>
              <div className="compare-col them">
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
              <div className="compare-col us">
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

          <div className="careers-strip" style={{ marginTop: 56, marginBottom: 0 }}>
            <div className="cs-t">Bring us your questions, the hard ones included. We reply within one business day, and the first conversation costs nothing.</div>
            <Link className="btn btn-copper" href="/#contact">Talk to our team <span className="arr">&rarr;</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
