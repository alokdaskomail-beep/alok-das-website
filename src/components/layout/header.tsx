"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { hotelWhatsappUrl } from "../../lib/hotel-services";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/hotel-growth", label: "Hotel Growth" },
  { href: "/hotel-training", label: "Training" },
  { href: "/#packages", label: "Pricing" },
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const mobileMenu = useRef<HTMLDetailsElement>(null);

  function closeMenu() {
    if (mobileMenu.current) mobileMenu.current.open = false;
  }

  const links = navLinks.map(({ href, label }) => (
    <Link
      key={href}
      href={href}
      aria-current={pathname === href ? "page" : undefined}
      onClick={closeMenu}
    >
      {label}
    </Link>
  ));

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Alok Das home" onClick={closeMenu}>
        <span className="brand-mark">AD</span>
        <span>
          <strong>Alok Das</strong>
          <small>Independent Digital Growth Partner</small>
        </span>
      </Link>
      <nav aria-label="Primary navigation">{links}</nav>
      <a className="header-cta" href={hotelWhatsappUrl}>
        Free 5-minute call <span aria-hidden="true">↗</span>
      </a>
      <details
        className="mobile-menu"
        ref={mobileMenu}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            closeMenu();
            mobileMenu.current?.querySelector("summary")?.focus();
          }
        }}
      >
        <summary aria-label="Toggle navigation menu">
          <span /><span /><span />
        </summary>
        <nav className="mobile-menu-panel" aria-label="Mobile navigation">
          {links}
          <a className="mobile-menu-cta" href={hotelWhatsappUrl} onClick={closeMenu}>
            Free 5-minute call <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </details>
    </header>
  );
}
