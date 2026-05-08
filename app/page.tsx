"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Bell, Eye, Zap, Shield, Settings } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import WaitlistForm from "@/components/WaitlistForm";

function LiveMonitor() {
  return (
    <div className="relative w-full max-w-[260px] mx-auto select-none">
      {/* Ambient glow behind phone */}
      <div
        className="absolute inset-[-20%] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(10,80,130,0.45) 0%, rgba(61,126,255,0.1) 50%, transparent 70%)",
        }}
      />

      {/* Phone shell */}
      <div
        className="relative rounded-[2.6rem] overflow-hidden"
        style={{
          background: "#040d17",
          border: "1.5px solid rgba(61,126,255,0.18)",
          boxShadow:
            "0 0 0 1px rgba(0,0,0,0.9), 0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Notch */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-20 h-6"
          style={{
            background: "#040d17",
            borderRadius: "0 0 12px 12px",
          }}
        />

        <div className="px-4 pt-9 pb-5 flex flex-col gap-3" style={{ height: 520 }}>
          {/* Status bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] font-semibold text-emerald-400 tracking-widest uppercase">
                Monitoring Active
              </span>
            </div>
            <span className="text-[9px] text-[#2E4A5C]">Main Tank</span>
          </div>

          {/* Camera feed */}
          <div
            className="flex-1 rounded-2xl relative overflow-hidden"
            style={{ border: "1px solid rgba(61,126,255,0.08)" }}
          >
            {/* Real tank photo — darkened to read as a live monitoring feed */}
            <img
              src="/tank-bg.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "brightness(0.7) saturate(0.8)", objectPosition: "65% center" }}
            />

            {/* Dark blue tint overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "rgba(2, 10, 22, 0.35)" }}
            />

            {/* Edge vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 85% 80% at 50% 50%, transparent 55%, rgba(0,10,25,0.7) 100%)",
              }}
            />

            {/* Detection box — clownfish (center-left) */}
            <motion.div
              className="absolute"
              style={{ left: "26%", top: "38%", width: 68, height: 48 }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className="w-full h-full"
                style={{ border: "1px solid rgba(61,220,120,0.7)", borderRadius: 4 }}
              />
              <span className="absolute -top-4 left-0 text-[7px] text-emerald-400 font-mono whitespace-nowrap">
                Clownfish ✓
              </span>
            </motion.div>

            {/* Detection box — tang (upper right) */}
            <motion.div
              className="absolute"
              style={{ left: "60%", top: "6%", width: 52, height: 40 }}
              animate={{ opacity: [0.8, 0.4, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1.8, ease: "easeInOut" }}
            >
              <div
                className="w-full h-full"
                style={{ border: "1px solid rgba(61,126,255,0.65)", borderRadius: 4 }}
              />
              <span className="absolute -top-4 left-0 text-[7px] text-[#3D7EFF] font-mono whitespace-nowrap">
                Tang ✓
              </span>
            </motion.div>

            {/* Corner crosshair brackets */}
            {[
              { top: "8%", left: "6%", rotate: "0deg" },
              { top: "8%", right: "6%", rotate: "90deg" },
              { bottom: "22%", left: "6%", rotate: "270deg" },
              { bottom: "22%", right: "6%", rotate: "180deg" },
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 pointer-events-none"
                style={{ ...pos, transform: `rotate(${pos.rotate})` }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
              >
                <div className="absolute top-0 left-0 w-full h-[1.5px] bg-[#3D7EFF]" />
                <div className="absolute top-0 left-0 w-[1.5px] h-full bg-[#3D7EFF]" />
              </motion.div>
            ))}

            {/* Bottom info tile */}
            <div
              className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2"
              style={{
                background: "linear-gradient(to top, rgba(2,10,22,0.85) 0%, rgba(2,10,22,0.5) 100%)",
                backdropFilter: "blur(4px)",
              }}
            >
              <div>
                <div className="text-[8px] text-[#3D7EFF] font-semibold tracking-widest uppercase">Main Tank</div>
              </div>
              <Settings size={11} className="text-[#3A5A6E]" />
            </div>

            {/* Scan line */}
            <motion.div
              className="absolute left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(61,126,255,0.35), transparent)",
              }}
              animate={{ top: ["8%", "88%", "8%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Eye,
    iconColor: "#3D7EFF",
    glowColor: "rgba(61,200,120,0.4)",
    title: "Fish behavior detection",
    description:
      "Spots unusual swimming patterns, gasping at the surface, lethargy, or erratic movement — before it becomes a crisis.",
    wide: true,
  },
  {
    icon: Zap,
    iconColor: "#3D7EFF",
    glowColor: "rgba(61,126,255,0.5)",
    title: "Equipment monitoring",
    description: "Detects stopped pumps, skimmers, and heaters visually — no extra hardware.",
    wide: false,
  },
  {
    icon: Shield,
    iconColor: "#3D7EFF",
    glowColor: "rgba(255,80,130,0.4)",
    title: "Coral health",
    description: "Watches for closing polyps, bleaching, or color changes over time.",
    wide: false,
  },
  {
    icon: Bell,
    iconColor: "#F2C94C",
    glowColor: "rgba(242,201,76,0.4)",
    title: "Instant email alerts",
    description:
      "Get notified the moment something looks wrong — no app check required. Just a clear email with exactly what was detected.",
    wide: true,
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center px-6 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-atmosphere pointer-events-none" />
        <div className="ring-a" />
        <div className="ring-b" />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 xl:gap-20 items-center">

            {/* Left — copy */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.13 } } }}
            >
              <motion.p
                variants={fadeUp}
                className="text-[0.68rem] uppercase tracking-[0.22em] text-[#3D7EFF] mb-7 font-medium"
              >
                Computer vision monitoring for aquarists
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="text-[clamp(2.8rem,7vw,5.75rem)] leading-[1.04] font-normal text-[#EDE8E0] mb-7"
                style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
              >
                Your tank.
                <br />
                <em>Always watched.</em>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-[1.05rem] text-[#5C7A8E] max-w-[440px] mb-10 leading-[1.75]"
              >
                Turn a spare phone into a 24/7 aquarium monitor. Fish behavior,
                coral health, equipment issues — you get an email the moment
                something looks wrong.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5">
                <WaitlistForm />
                <Link
                  href="/how-it-works"
                  className="flex items-center gap-1.5 text-sm text-[#5C7A8E] hover:text-[#B8C8D0] transition-colors"
                >
                  How it works <ChevronRight size={14} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — phone mockup */}
            <motion.div
              className="hidden lg:flex justify-center items-center"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <LiveMonitor />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ─────────────────────────────────────────────── */}
      <div className="border-y border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-white/[0.06]">
            {[
              { value: "24/7", label: "continuous monitoring" },
              { value: "< 1 min", label: "alert response time" },
              { value: "Free", label: "during beta" },
              { value: "iOS", label: "launching soon" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="md:px-8 first:pl-0 last:pr-0"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
              >
                <div
                  className="text-[2rem] font-normal text-[#EDE8E0] leading-none mb-1.5"
                  style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-[0.7rem] text-[#3A5A6E] uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Problem ─────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Pull quote */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
          >
            <div className="relative pl-6">
              <div
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(61,126,255,0.5), rgba(61,126,255,0.1), transparent)",
                }}
              />
              <blockquote
                className="text-[clamp(1.45rem,3.5vw,2.1rem)] font-normal leading-[1.35] text-[#EDE8E0]"
                style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
              >
                "A stopped pump can wipe out a reef tank in hours.
                You often won&apos;t know until it&apos;s already too late."
              </blockquote>
            </div>
          </motion.div>

          {/* Body text */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp} className="text-[#5C7A8E] text-[1.05rem] leading-[1.8] mb-5">
              Fish gasping at the surface. A coral closing up. A heater running hot.
              These problems escalate fast when no one is watching — and professional
              monitoring systems cost hundreds of dollars.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#EDE8E0] text-[1.05rem] leading-[1.8]">
              Vision Aquatics gives you that level of awareness using the phone
              already sitting in your drawer.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Feature bento grid ──────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-[0.68rem] uppercase tracking-[0.22em] text-[#3D7EFF] font-medium mb-8"
        >
          What it watches
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Row 1: wide (2 col) + narrow */}
          {features.slice(0, 2).map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                className={`${i === 0 ? "md:col-span-2" : ""} rounded-2xl p-7 relative overflow-hidden`}
                style={{
                  background: "rgba(7,21,35,0.8)",
                  border: "1px solid rgba(255,255,255,0.055)",
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <div
                  className="absolute top-0 right-0 w-44 h-44 rounded-full blur-3xl pointer-events-none opacity-10"
                  style={{ background: f.glowColor }}
                />
                <Icon size={20} className="mb-5" style={{ color: f.iconColor }} />
                <h3
                  className="text-[1.05rem] font-normal text-[#EDE8E0] mb-3"
                  style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                >
                  {f.title}
                </h3>
                <p className="text-[#4A6A7E] text-sm leading-[1.75]">{f.description}</p>
              </motion.div>
            );
          })}

          {/* Row 2: narrow + wide (2 col) */}
          {features.slice(2).map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                className={`${i === 1 ? "md:col-span-2" : ""} rounded-2xl p-7 relative overflow-hidden`}
                style={{
                  background: "rgba(7,21,35,0.8)",
                  border: "1px solid rgba(255,255,255,0.055)",
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i + 2) * 0.08 }}
              >
                <div
                  className="absolute top-0 right-0 w-44 h-44 rounded-full blur-3xl pointer-events-none opacity-10"
                  style={{ background: f.glowColor }}
                />
                <Icon size={20} className="mb-5" style={{ color: f.iconColor }} />
                <h3
                  className="text-[1.05rem] font-normal text-[#EDE8E0] mb-3"
                  style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                >
                  {f.title}
                </h3>
                <p className="text-[#4A6A7E] text-sm leading-[1.75]">{f.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Waitlist CTA ────────────────────────────────────────────── */}
      <section id="waitlist" className="max-w-6xl mx-auto px-6 pb-32">
        <motion.div
          className="relative overflow-hidden rounded-2xl px-10 py-20 text-center"
          style={{
            background: "rgba(7,21,35,0.85)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 75% 65% at 50% 50%, rgba(10,80,130,0.22) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-md mx-auto">
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#3D7EFF] font-medium mb-5">
              Launching soon on iOS
            </p>

            <h2
              className="text-[clamp(2rem,5.5vw,3.1rem)] font-normal text-[#EDE8E0] leading-tight mb-5"
              style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
            >
              Be first in the water.
            </h2>

            <p className="text-[#5C7A8E] text-base leading-[1.75] mb-9">
              Join the waitlist and get early access when Vision Aquatics
              launches on the App Store.
            </p>

            <WaitlistForm />

            <p className="text-[0.72rem] text-[#2E4A5C] mt-5">
              No spam. Just a launch notification.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
