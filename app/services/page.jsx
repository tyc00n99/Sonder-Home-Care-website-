import Link from 'next/link';
import PageFx from '@/components/PageFx';
import { bp } from '@/lib/paths';

export const metadata = {
  title: 'Services',
  description:
    'A detailed guide to Sonder Homecare’s 245D services in Minnesota: Individualized Home Supports, night supervision, respite, and homemaker services, and how Medicaid waivers pay for them.',
};

export default function ServicesPage() {
  return (
    <main>
      <PageFx />
      <section className="page-top has-corner-vid" style={{ paddingBottom: 0 }}>
        <div className="corner-vid" aria-hidden="true">
          <video data-ambient autoPlay muted loop playsInline poster={`${bp}/services-poster.jpg`}>
            <source src={`${bp}/services-loop.mp4`} type="video/mp4" />
          </video>
        </div>
        <div className="wrap">
          <Link className="back-link" href="/">&larr; Back to home</Link>

          <div className="page-head" style={{ maxWidth: 720 }}>
            <div className="eyebrow">Services</div>
            <h2>Everyday help, so home stays home.</h2>
            <p className="lede" style={{ marginTop: 16, maxWidth: 600 }}>
              Meals, medications, overnights, a safe clean house. When that daily work gets too heavy for a family to carry alone, we carry it with you. Here is each service, in plain words.
            </p>
            <div className="jump">
              <a href="#ihs">Home Supports</a>
              <a href="#nights">Night Supervision</a>
              <a href="#respite">Respite</a>
              <a href="#homemaker">Homemaker</a>
              <a href="#pays">Payment</a>
            </div>
          </div>

          <div className="svc-card" id="ihs" data-reveal>
            <div className="head">
              <div>
                <div className="dk">01 &middot; Our most-referred service</div>
                <h3>Individualized Home Supports</h3>
              </div>
              <span className="rate">CADI &middot; BI &middot; DD &middot; EW</span>
            </div>
            <div className="cols">
              <div className="what">
                <p>One caregiver, one client, working on the life that client actually wants: at home and out in the community.</p>
                <p>IHS comes in three forms. <b>Without training</b> is support: a caregiver alongside for cooking, errands, and community life. <b>With training</b> is teaching: building skills toward independence, with progress we measure and report. <b>With family training</b> coaches the household too, so everyone gets stronger.</p>
              </div>
              <div>
                <div className="mini-h">A week might include</div>
                <ul className="dot-list">
                  <li>Learning the bus route to a job, until the caregiver isn&apos;t needed on it</li>
                  <li>Cooking dinners together, then watching from the counter</li>
                  <li>Groceries, prescriptions, and appointments kept on track</li>
                </ul>
                <div className="mini-h">What changes</div>
                <ul className="dot-list copper">
                  <li>Real independence, built skill by skill</li>
                  <li>Progress case managers can see on paper</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="svc-card" id="nights" data-reveal>
            <div className="head">
              <div>
                <div className="dk">02 &middot; The service families ask about at 2am</div>
                <h3>Night Supervision</h3>
              </div>
              <span className="rate">CADI &middot; BI &middot; DD</span>
            </div>
            <div className="cols">
              <div className="what">
                <p>Night is when thin coverage breaks: falls on the way to the bathroom, wandering, medications that can&apos;t wait until morning.</p>
                <p>Our caregivers stay in the client&apos;s home overnight, awake and on duty, with every shift documented like any other.</p>
              </div>
              <div>
                <div className="mini-h">An overnight might include</div>
                <ul className="dot-list">
                  <li>Safety checks on a schedule built from the support plan</li>
                  <li>Late and early medications, on time, logged</li>
                  <li>A morning handoff note the family reads over coffee</li>
                </ul>
                <div className="mini-h">What changes</div>
                <ul className="dot-list copper">
                  <li>The client stays home, safe</li>
                  <li>The family finally sleeps</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="svc-card" id="respite" data-reveal>
            <div className="head">
              <div>
                <div className="dk">03 &middot; For the caregiver who never clocks out</div>
                <h3>Respite Care</h3>
              </div>
              <span className="rate">CADI &middot; BI &middot; DD &middot; EW</span>
            </div>
            <div className="cols">
              <div className="what">
                <p>Most family caregivers are running on empty. The care never stops, so they never stop.</p>
                <p>Respite is short-term care, in the client&apos;s home or another approved setting, planned ahead or arranged fast. It&apos;s how the person holding everything up gets a real break.</p>
              </div>
              <div>
                <div className="mini-h">Respite might look like</div>
                <ul className="dot-list">
                  <li>Every Saturday off, standing</li>
                  <li>A week of coverage for the first vacation in years</li>
                  <li>Fast coverage when the family suddenly needs it</li>
                </ul>
                <div className="mini-h">What changes</div>
                <ul className="dot-list copper">
                  <li>Caregivers get their life back, so care at home lasts</li>
                  <li>A trusted backup before it&apos;s ever urgent</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="svc-card" id="homemaker" data-reveal>
            <div className="head">
              <div>
                <div className="dk">04 &middot; The quiet one that prevents the loud ones</div>
                <h3>Homemaker Services</h3>
              </div>
              <span className="rate">CADI &middot; BI &middot; DD &middot; EW</span>
            </div>
            <div className="cols">
              <div className="what">
                <p>A cluttered floor is a fall waiting to happen. An empty fridge is a hospital visit with a nicer name.</p>
                <p>Homemaker services keep the household itself healthy: cleaning, laundry, meals, and home management, done with the client whenever they want to do it themselves.</p>
              </div>
              <div>
                <div className="mini-h">A visit might include</div>
                <ul className="dot-list">
                  <li>Meals cooked for the week, and actually eaten</li>
                  <li>Laundry, dishes, and clear paths through the house</li>
                  <li>Groceries stocked before the fridge goes empty</li>
                </ul>
                <div className="mini-h">What changes</div>
                <ul className="dot-list copper">
                  <li>Fewer falls, better meals, fewer ER trips</li>
                  <li>Family visits go back to being visits</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="info-band" id="pays" data-reveal style={{ scrollMarginTop: 130 }}>
            <h3>How it gets paid for.</h3>
            <p>
              <span className="peach">Not Medicare.</span> Medicare covers short-term care after a hospital stay, then it stops.
            </p>
            <p>
              Minnesota&apos;s Medicaid waivers pick it up from there: <span className="peach">CADI, Brain Injury, DD, and the Elderly Waiver</span>. They pay for everyday help at home, and for most families it costs nothing out of pocket.
            </p>
            <div className="info-steps">
              <div className="istep"><div className="k">Step 1</div><p>Ask your county or tribal agency for a MnCHOICES assessment. It&apos;s free.</p></div>
              <div className="istep"><div className="k">Step 2</div><p>A case manager builds the support plan with you.</p></div>
              <div className="istep"><div className="k">Step 3</div><p>You choose the provider. That choice is yours by law.</p></div>
            </div>
          </div>

          <p className="svc-note" data-reveal style={{ marginTop: 36 }}>
            Beyond these four, we provide most basic and intensive services under chapter 245D. We do not provide community residential services, crisis respite, integrated community supports, or ICF/DD services. If you&apos;re not sure where a client fits, ask us and we&apos;ll tell you straight.
          </p>

          <div className="careers-strip" style={{ marginTop: 40, marginBottom: 0 }}>
            <div className="cs-t">Choosing the right service and waiver is confusing at first, for everyone. One conversation sorts it out.</div>
            <Link className="btn btn-copper" href="/#contact">Talk to our team <span className="arr">&rarr;</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
