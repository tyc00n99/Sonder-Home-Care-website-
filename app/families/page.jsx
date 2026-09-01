import Link from 'next/link';
import PageFx from '@/components/PageFx';
import { bp } from '@/lib/paths';

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
              If you&apos;re here, you&apos;re probably already doing this job: the medications, the overnights, the appointments, the worry. This page covers the two things families ask us most: what it gives you back, and what working with us actually looks like. How it all gets paid for lives on the <Link href="/services#pays" style={{ fontWeight: 600, color: 'var(--copper-deep)' }}>services page</Link>.
            </p>
          </div>

          <img
            className="photo-band"
            src={`${bp}/family-kitchen.jpg`}
            alt="A caregiver and an older woman sitting together at her kitchen table"
            data-reveal
          />

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
            <div className="eyebrow">The intake, step by step</div>
            <h2 style={{ maxWidth: 680 }}>From first call to first shift, here is exactly what happens.</h2>
            <p className="lede" style={{ marginTop: 14, maxWidth: 640 }}>
              No mystery and no runaround. This is the actual process, in order.
            </p>
            <div style={{ marginTop: 36 }}>
              <div className="askrow">
                <div className="q"><span className="qn">Step 01</span>We gather the records.</div>
                <div className="a">With your permission, we request the medical history: the <b>support plan, medical referral, diagnostic documents, wellness checks</b>, and anything else pertinent. If there was a previous provider, we request those records too, to see what&apos;s been working.</div>
              </div>
              <div className="askrow">
                <div className="q"><span className="qn">Step 02</span>You point us to the case manager.</div>
                <div className="a">Tell us who they are and which county they&apos;re in. You sign <b>one authorization form</b>, and from there we deal with them directly: the support plan, and how our services get added to it.</div>
              </div>
              <div className="askrow">
                <div className="q"><span className="qn">Step 03</span>We meet your person.</div>
                <div className="a">Daughter, son, uncle, grandfather, grandson: whoever you&apos;re the guardian for. We sit down together, figure out what works for your family, and <b>build the schedule around your life</b>, not ours.</div>
              </div>
              <div className="askrow">
                <div className="q"><span className="qn">Step 04</span>We build the plan, in writing.</div>
                <div className="a">The support plan, an abuse prevention plan (IAPP) when it applies, medication management, and financial management services when we&apos;re handling finances.</div>
              </div>
              <div className="askrow">
                <div className="q"><span className="qn">Step 05</span>You stay as close as you want.</div>
                <div className="a">Updates <b>daily, weekly, or biweekly</b>, matched to how involved you are. Your case manager gets consistent updates too, without you having to relay a thing.</div>
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
