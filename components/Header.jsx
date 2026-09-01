'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <div className={`hdr${scrolled ? ' scrolled' : ''}${open ? ' menu-open' : ''}`} id="hdr">
      <div className="topbar">
        <div className="topbar-inner">
          <span>Faithful Group Home LLC &middot; dba Sonder Homecare</span>
          <span className="umpi">UMPI A853450800</span>
        </div>
      </div>
      <nav className="nav" aria-label="Main">
        <div className="nav-inner">
          <div className="nav-links">
            <Link href="/#about">About</Link>
            <Link href="/#services">Services</Link>
            <Link href="/families">For Families</Link>
            <Link href="/professionals">For Professionals</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/careers">Careers</Link>
          </div>
          <Link className="brand" href="/">Sonder Homecare</Link>
          <div className="nav-right">
            <Link className="btn btn-copper nav-cta-desktop" href="/#contact">Refer a client</Link>
            <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
              <span></span>
            </button>
          </div>
        </div>
        <div className="mobile-menu">
          <Link href="/#about" onClick={close}>About</Link>
          <Link href="/#services" onClick={close}>Services</Link>
          <Link href="/families" onClick={close}>For Families</Link>
          <Link href="/professionals" onClick={close}>For Professionals</Link>
          <Link href="/faq" onClick={close}>FAQ</Link>
          <Link href="/careers" onClick={close}>Careers</Link>
          <Link href="/#contact" onClick={close}><strong>Refer a client &rarr;</strong></Link>
        </div>
      </nav>
    </div>
  );
}
