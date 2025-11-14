"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
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
          <NavLink label="Home" href="#home" active />
          <NavLink label="About" href="#about" />
          <NavLink label="Service" href="#services" />
          <NavLink label="Why Us" href="#why-us" />
          <NavLink label="FAQ" href="#faq" />
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
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-xl p-6 transform transition ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="text-white text-3xl mb-8"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <nav className="flex flex-col gap-6 text-white">
          <NavLinkMobile label="Home" href="#home" />
          <NavLinkMobile label="About" href="#about" />
          <NavLinkMobile label="Service" href="#services" />
          <NavLinkMobile label="Why Us" href="#why-us" />
          <NavLinkMobile label="FAQ" href="#faq" />

          <Link
            href="#contact"
            className="mt-4 bg-[#39FF88] text-black text-center font-medium px-4 py-3 rounded-xl"
          >
            Get Started →
          </Link>
        </nav>
      </div>
    </header>
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
};

function NavLinkMobile({ label, href }: NavLinkMobileProps) {
  return (
    <Link href={href} className="text-white/80 hover:text-white">
      {label}
    </Link>
  );
}
