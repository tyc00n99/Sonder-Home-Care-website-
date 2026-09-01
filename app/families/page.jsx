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
              If you&apos;re here, you&apos;re probably already doing this job: the medications, the overnights, the appointments, the worry. This page covers the three things families ask us most. How it gets paid for. What it gives you back. And how to judge any provider in Minnesota, including us.
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
            <div className="bigstat-row">
              <div className="bigstat"><div className="n">18<em> hrs</em></div><div className="d">The average week of unpaid care a family caregiver provides, on top of everything else in their life.</div></div>
              <div className="bigstat"><div className="n">$7,200<em>/yr</em></div><div className="d">What the average family caregiver spends out of pocket on the person they care for.</div></div>
              <div className="bigstat"><div className="n">75<em>%+</em></div><div className="d">Family caregivers who report burnout. For most it isn&apos;t occasional. It&apos;s weekly.</div></div>
            </div>
            <p className="src-note">Sources: AARP, Valuing the Invaluable (2023); A Place for Mom caregiver statistics (2026).</p>
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
            <div className="eyebrow">Choosing a provider</div>
            <h2 style={{ maxWidth: 680 }}>Six questions to ask any provider in Minnesota. Here&apos;s how we answer them.</h2>
            <p className="lede" style={{ marginTop: 14, maxWidth: 640 }}>
              There are hundreds of 245D providers in this state. Ask these six questions of every one you interview, ours included. The good ones won&apos;t flinch.
            </p>
            <div style={{ marginTop: 36 }}>
              <div className="askrow">
                <div className="q"><span className="qn">Question 01</span>&quot;Will we meet the actual caregiver before services start?&quot;</div>
                <div className="a"><b>Yes, always.</b> You meet the person who will be in your home before the first shift, not a salesperson who vanishes afterward. If the fit is wrong, we recast before we start.</div>
              </div>
              <div className="askrow">
                <div className="q"><span className="qn">Question 02</span>&quot;How experienced are your caregivers?&quot;</div>
                <div className="a">We only hire DSPs with <b>two or more years of experience</b> supporting people with intellectual disabilities or on a waiver, and every hire passes a background check. Most agencies hire at zero. We think your family is a strange place to start learning.</div>
              </div>
              <div className="askrow">
                <div className="q"><span className="qn">Question 03</span>&quot;What languages does your team speak?&quot;</div>
                <div className="a"><b>English, Spanish, Korean, ASL, and Hmong.</b> Care lands better in the language your family already speaks at the kitchen table.</div>
              </div>
              <div className="askrow">
                <div className="q"><span className="qn">Question 04</span>&quot;How long is your waitlist?&quot;</div>
                <div className="a"><b>We don&apos;t have one.</b> Our DSP network runs deep enough that care starts fast. Any provider who can&apos;t answer this question with a number is answering it.</div>
              </div>
              <div className="askrow">
                <div className="q"><span className="qn">Question 05</span>&quot;Who answers at 2am?&quot;</div>
                <div className="a"><b>An on-call DSP, every hour of every night.</b> Emergencies and rough overnights don&apos;t schedule themselves for business hours.</div>
              </div>
              <div className="askrow">
                <div className="q"><span className="qn">Question 06</span>&quot;How will we know how care is going?&quot;</div>
                <div className="a">Every shift is documented in 245D format, progress reports go out on schedule, and incidents are reported the way the state requires. <b>You will never have to chase us for an update.</b> If a provider gets vague here, keep interviewing.</div>
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
            <div className="cs-t">Bring us your six questions. Bring harder ones. We reply within one business day, and the first conversation costs nothing.</div>
            <Link className="btn btn-copper" href="/#contact">Talk to our team <span className="arr">&rarr;</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
