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
        scrolled ? "glass border-b border-cyan-500/10 py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center glow-cyan-sm">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              {/* Eye shape */}
              <ellipse cx="9" cy="9" rx="8" ry="5" stroke="white" strokeWidth="1.5" fill="none"/>
              {/* Pupil / lens */}
              <circle cx="9" cy="9" r="2.5" fill="white"/>
              {/* Scan reticle lines */}
              <line x1="9" y1="5.5" x2="9" y2="4" stroke="white" strokeWidth="1" strokeLinecap="round"/>
              <line x1="9" y1="12.5" x2="9" y2="14" stroke="white" strokeWidth="1" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="font-bold text-lg tracking-tight text-gradient">
            Vision Aquatics
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-cyan-400"
                  : "text-[#7FA8BF] hover:text-[#E8F4F8]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="/#waitlist"
            className="px-4 py-2 rounded-lg bg-cyan-400 text-[#040D14] text-sm font-semibold transition-all hover:bg-cyan-300 glow-cyan-sm"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#7FA8BF] hover:text-[#E8F4F8]"
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
            transition={{ duration: 0.2 }}
            className="md:hidden glass border-t border-cyan-500/10 px-6 py-4 flex flex-col gap-4"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-cyan-400"
                    : "text-[#7FA8BF] hover:text-[#E8F4F8]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/#waitlist"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-lg bg-cyan-400 text-[#040D14] text-sm font-semibold text-center"
            >
              Join Waitlist
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
