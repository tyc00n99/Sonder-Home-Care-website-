import Link from 'next/link';
import PageFx from '@/components/PageFx';

export const metadata = {
  title: 'Services',
  description:
    'A detailed guide to Sonder Homecare’s 245D services in Minnesota: Individualized Home Supports, night supervision, respite, and homemaker services, and how Medicaid waivers pay for them.',
};

export default function ServicesPage() {
  return (
    <main>
      <PageFx />
      <section className="page-top" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <Link className="back-link" href="/">&larr; Back to home</Link>

          <div className="page-head" style={{ maxWidth: 720 }}>
            <div className="eyebrow">Services</div>
            <h2>The help that keeps home possible.</h2>
            <p className="lede" style={{ marginTop: 16, maxWidth: 620 }}>
              Nobody loses their home over surgery. They lose it over laundry, medications, overnights, and meals: the small daily work that adds up until a family can&apos;t carry it alone. That work is exactly what our services cover.
            </p>
          </div>

          <div className="info-band" data-reveal style={{ marginTop: 40 }}>
            <h3>Who pays for this?</h3>
            <p>
              <span className="peach">Not Medicare.</span> Medicare covers short-term care after a hospital stay, then it stops.
            </p>
            <p>
              Minnesota&apos;s Medicaid waivers pick it up from there: <span className="peach">CADI, Brain Injury, DD, and the Elderly Waiver</span>. They pay for everyday help at home, and for most families it costs nothing out of pocket.
            </p>
            <div className="info-steps">
              <div className="istep"><div className="k">Step 1</div><p>Call your county or tribal agency and ask for a MnCHOICES assessment. They have 45 days to complete it.</p></div>
              <div className="istep"><div className="k">Step 2</div><p>The assessment determines which waiver fits, and a case manager builds the support plan with you.</p></div>
              <div className="istep"><div className="k">Step 3</div><p>You choose the provider. That choice is yours by law, not the county&apos;s. Sonder is one of the options.</p></div>
            </div>
          </div>

          <div style={{ marginTop: 64 }}>
            <div className="detail" data-reveal>
              <div>
                <div className="dk">01 &middot; Our most-referred service</div>
                <h3>Individualized Home Supports</h3>
                <div className="what">
                  <p>One caregiver, one client, working on the life that client actually wants: in their home and out in the community. IHS comes in three forms, and the difference matters.</p>
                  <p><b>Without training</b> is support: a caregiver alongside for cooking, errands, appointments, and community life. <b>With training</b> is teaching: building skills toward independence, with outcomes we measure and report. <b>With family training</b> coaches the people who live alongside the client, so the whole household gets stronger, not just one hour of the day.</p>
                </div>
                <div className="fund-line">Typically funded by <b>CADI, BI, DD, and EW waivers</b> through Medical Assistance.</div>
              </div>
              <div>
                <div className="mini-h">A week might include</div>
                <ul className="dot-list">
                  <li>Learning the bus route to a job, until the caregiver isn&apos;t needed on it</li>
                  <li>Cooking three dinners together, then two, then watching from the counter</li>
                  <li>Budgeting groceries, refilling prescriptions, keeping appointments</li>
                  <li>A standing coffee order at a shop where staff know their name</li>
                </ul>
                <div className="mini-h">What changes</div>
                <ul className="dot-list copper">
                  <li>Real independence, built skill by skill</li>
                  <li>Progress case managers can see on paper</li>
                </ul>
              </div>
            </div>

            <div className="detail" data-reveal>
              <div>
                <div className="dk">02 &middot; The service families ask about at 2am</div>
                <h3>Night Supervision</h3>
                <div className="what">
                  <p>The hardest hours to cover are the ones when everyone else needs to sleep. Seizure risk, wandering, falls on the way to the bathroom, medications that can&apos;t wait until morning: night is when thin coverage breaks.</p>
                  <p>Our trained caregivers stay in the client&apos;s home overnight, awake and on duty. Every overnight is documented like any other shift, because 245D doesn&apos;t sleep either.</p>
                </div>
                <div className="fund-line">Typically funded by <b>CADI, BI, and DD waivers</b>. One of the two services we&apos;re asked for most.</div>
              </div>
              <div>
                <div className="mini-h">An overnight might include</div>
                <ul className="dot-list">
                  <li>Safety checks on a schedule built from the support plan</li>
                  <li>Late and early medications, on time, logged</li>
                  <li>Redirecting a 3am wake-up back toward bed, calmly, familiarly</li>
                  <li>A morning handoff note the family reads over coffee</li>
                </ul>
                <div className="mini-h">What changes</div>
                <ul className="dot-list copper">
                  <li>The client stays home, safe</li>
                  <li>The family finally sleeps</li>
                </ul>
              </div>
            </div>

            <div className="detail" data-reveal>
              <div>
                <div className="dk">03 &middot; For the caregiver who never clocks out</div>
                <h3>Respite Care</h3>
                <div className="what">
                  <p>Most family caregivers are running on empty. The care never stops, so they never stop.</p>
                  <p>Respite is short-term care, in the client&apos;s home or another approved setting, planned ahead or arranged fast when a family suddenly needs coverage. It&apos;s how the person holding everything up gets a real break.</p>
                </div>
                <div className="fund-line">Typically funded by <b>CADI, BI, DD, and EW waivers</b>, in-home and out-of-home.</div>
              </div>
              <div>
                <div className="mini-h">Respite might look like</div>
                <ul className="dot-list">
                  <li>Every Saturday off, standing, so a wife gets her weekend back</li>
                  <li>A week of coverage for the first vacation in six years</li>
                  <li>Emergency coverage when the primary caregiver lands in the hospital</li>
                  <li>A trial run before any bigger care decision</li>
                </ul>
                <div className="mini-h">What changes</div>
                <ul className="dot-list copper">
                  <li>Caregivers get their life back, so care at home lasts</li>
                  <li>A trusted backup before it&apos;s ever urgent</li>
                </ul>
              </div>
            </div>

            <div className="detail" data-reveal>
              <div>
                <div className="dk">04 &middot; The quiet one that prevents the loud ones</div>
                <h3>Homemaker Services</h3>
                <div className="what">
                  <p>A cluttered floor is a fall. An empty fridge is a hospital admission with a nicer name. Homemaker services keep the household itself healthy: cleaning, laundry, meals, and home management, done with the client whenever they want to do it themselves.</p>
                  <p>It looks humble next to clinical services. It prevents more emergencies than most of them.</p>
                </div>
                <div className="fund-line">Typically funded by <b>CADI, BI, DD, and EW waivers</b>. One of our highest-volume services.</div>
              </div>
              <div>
                <div className="mini-h">A visit might include</div>
                <ul className="dot-list">
                  <li>Meals cooked for the week, labeled, actually eaten</li>
                  <li>Laundry, dishes, and the pathways through the house kept clear</li>
                  <li>Groceries stocked before the fridge goes empty</li>
                  <li>Doing tasks with the client, not just for them</li>
                </ul>
                <div className="mini-h">What changes</div>
                <ul className="dot-list copper">
                  <li>Fewer falls, better meals, fewer ER trips</li>
                  <li>Family visits go back to being visits</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="svc-note" data-reveal style={{ marginTop: 8 }}>
            Beyond these four, we provide most basic and intensive services under chapter 245D. We do not provide community residential services, crisis respite, integrated community supports, or ICF/DD services. Not sure where a client fits? Ask us and we&apos;ll tell you straight.
          </p>

          <div className="careers-strip" style={{ marginTop: 40, marginBottom: 0 }}>
            <div className="cs-t">Not sure which service, which waiver, or where to start? That&apos;s a normal place to be. One conversation sorts it out.</div>
            <Link className="btn btn-copper" href="/#contact">Talk to our team <span className="arr">&rarr;</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
