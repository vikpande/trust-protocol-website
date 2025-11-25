"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "Service", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-black/70 backdrop-blur border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 lg:py-6 px-6 lg:px-0">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Fortexa Logo"
              width={180}
              height={180}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                label={item.label}
                href={item.href}
                active={item.active}
              />
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden lg:flex bg-[#39FF88] text-black font-medium px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition"
          >
            Get Started →
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-3xl"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Overlay + Drawer */}
      <div className="lg:hidden">
        <div
          className={`fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          } z-40`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        <aside
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className={`fixed top-0 right-0 h-screen w-80 max-w-sm bg-[#050505]/95 border-l border-white/10 shadow-2xl px-6 py-8 flex flex-col transform transition-transform duration-300 z-50 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <Link href="/" onClick={() => setOpen(false)}>
              <Image
                src="/images/logo.png"
                alt="Fortexa Logo"
                width={140}
                height={140}
              />
            </Link>
            <button
              className="text-white text-3xl"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col gap-4 text-white flex-1">
            {navItems.map((item) => (
              <NavLinkMobile
                key={item.href}
                label={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
              />
            ))}
          </nav>

          <Link
            href="#contact"
            className="mt-8 bg-[#39FF88] text-black text-center font-medium px-4 py-3 rounded-xl"
            onClick={() => setOpen(false)}
          >
            Get Started →
          </Link>
        </aside>
      </div>
    </>
  );
}

type NavLinkProps = {
  label: string;
  href: string;
  active?: boolean;
};

function NavLink({ label, href, active = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-white font-medium transition ${
        active ? "text-white" : "text-white/70 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
}

type NavLinkMobileProps = {
  label: string;
  href: string;
  onClick?: () => void;
};

function NavLinkMobile({ label, href, onClick }: NavLinkMobileProps) {
  return (
    <Link
      href={href}
      className="block w-full rounded-lg px-4 py-3 text-white/80 hover:bg-white/10 hover:text-white transition"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
