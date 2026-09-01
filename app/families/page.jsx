import Link from 'next/link';
import PageFx from '@/components/PageFx';

export const metadata = {
  title: 'For Families',
  description: 'Why Minnesota families choose in-home 245D care from Sonder Homecare over facility-based care.',
};

export default function FamiliesPage() {
  return (
    <main>
      <PageFx />
      <section className="page-top" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <Link className="back-link" href="/">&larr; Back to home</Link>
          <div className="aud-head">
            <div>
              <div className="eyebrow">For Families</div>
              <h2>Moving out shouldn&apos;t be the price of getting support.</h2>
            </div>
            <p className="lede">Most people do better in a home they know. We built the agency around that.</p>
          </div>
          <div className="compare-grid" style={{ marginTop: 0 }}>
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
          <div className="careers-strip" style={{ marginTop: 56, marginBottom: 0 }}>
            <div className="cs-t">Want to meet the caregiver before anything starts? That&apos;s how we prefer it too.</div>
            <Link className="btn btn-copper" href="/#contact">Talk to our team <span className="arr">&rarr;</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
