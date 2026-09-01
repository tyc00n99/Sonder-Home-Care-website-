import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">Sonder Homecare</div>
            <p className="foot-meta">
              Licensed under Minnesota DHS Chapter 245D<br />
              UMPI: A853450800<br />
              7825 Washington Ave South, Suite 300A<br />
              Bloomington, MN 55439<br />
              <a href="tel:+16514176115">651-417-6115</a> &middot; Fax +1 651-386-0383<br />
              <a href="mailto:Admin@sonderhomecaremn.com">Admin@sonderhomecaremn.com</a>
            </p>
          </div>
          <div className="foot-cols">
            <div className="foot-col">
              <h4>Explore</h4>
              <Link href="/#about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/professionals">Referral process</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/careers">Careers</Link>
            </div>
            <div className="foot-col">
              <h4>For you</h4>
              <Link href="/families">Families</Link>
              <Link href="/professionals">Case managers</Link>
              <Link href="/professionals">Hospitals &amp; physicians</Link>
              <Link href="/#contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>&copy; 2026 Sonder Homecare. All rights reserved.</span>
          <span>An equal opportunity provider &middot; Minnesota, USA</span>
        </div>
      </div>
    </footer>
  );
}
