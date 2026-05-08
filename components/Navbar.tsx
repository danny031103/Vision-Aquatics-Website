"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function WaveMark() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden>
      <path
        d="M1 8 Q4 4 7 8 Q10 12 13 8 Q16 4 19 8 Q20.5 10 22 8"
        stroke="#3D7EFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M1 12.5 Q4 9.5 7 12.5 Q10 15.5 13 12.5 Q16 9.5 19 12.5 Q20.5 14 22 12.5"
        stroke="#3D7EFF"
        strokeWidth="1.1"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M1 3.5 Q4 0.5 7 3.5 Q10 6.5 13 3.5 Q16 0.5 19 3.5 Q20.5 5 22 3.5"
        stroke="#3D7EFF"
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.2"
      />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030A10]/92 backdrop-blur-md border-b border-white/[0.05] py-3"
          : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <WaveMark />
          <span
            className="text-[1.1rem] text-[#EDE8E0] leading-none"
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            Vision Aquatics
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-normal transition-colors duration-200 group ${
                pathname === link.href
                  ? "text-[#EDE8E0]"
                  : "text-[#4A6A7E] hover:text-[#B8C8D0]"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-[#3D7EFF] transition-all duration-300 ${
                  pathname === link.href ? "w-full opacity-60" : "w-0 group-hover:w-full opacity-40"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="/#waitlist"
            className="px-5 py-2 text-white text-sm transition-all duration-200 hover:opacity-90"
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontStyle: "italic",
              background: "#3D7EFF",
              borderRadius: "6px",
            }}
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#5C7A8E] hover:text-[#EDE8E0] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-t border-white/[0.05] px-6 py-5 flex flex-col gap-4"
            style={{ background: "rgba(3,10,16,0.97)", backdropFilter: "blur(12px)" }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? "text-[#EDE8E0]"
                    : "text-[#4A6A7E] hover:text-[#EDE8E0]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/#waitlist"
              onClick={() => setOpen(false)}
              className="px-4 py-2.5 rounded-md text-white text-sm text-center"
              style={{
                background: "#3D7EFF",
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontStyle: "italic",
              }}
            >
              Join Waitlist
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
