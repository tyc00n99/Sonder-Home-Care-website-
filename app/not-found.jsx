import Link from 'next/link';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <main>
      <section className="page-top" style={{ minHeight: '55vh' }}>
        <div className="wrap">
          <div className="page-head" style={{ maxWidth: 720 }}>
            <div className="eyebrow">Page not found</div>
            <h2>That page moved when we rebuilt the site.</h2>
            <p className="lede" style={{ marginTop: 16, maxWidth: 600 }}>
              Everything is still here, just in a new place. Start from the home page, or jump straight to what you need.
            </p>
            <div className="jump" style={{ marginTop: 26 }}>
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/families">For Families</Link>
              <Link href="/professionals">Refer a Client</Link>
              <Link href="/#contact">Contact</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
