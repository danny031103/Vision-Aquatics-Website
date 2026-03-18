"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import WaitlistForm from "@/components/WaitlistForm";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill={i < count ? "#FFB800" : "#1a3a4a"}>
          <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625L4.5 7.07 2 4.635l3.455-.505L7 1z"/>
        </svg>
      ))}
    </div>
  );
}

const testimonials = [
  {
    name: "Marcus T.",
    initials: "MT",
    color: "#0e4d6e",
    tank: "180-gal Reef",
    stars: 5,
    text: "Lost a clownfish last year because I didn't notice a heater malfunction until it was too late. With Vision Aquatics I got an alert within minutes of my return pump acting up. Completely different experience.",
  },
  {
    name: "Priya S.",
    initials: "PS",
    color: "#0b3d2e",
    tank: "75-gal Planted Freshwater",
    stars: 5,
    text: "I travel for work constantly and used to stress about my tank the whole time. Now I actually sleep on flights. It flagged erratic fish behavior that turned out to be a CO2 issue I wouldn't have caught for days.",
  },
  {
    name: "Jake R.",
    initials: "JR",
    color: "#3d1f0e",
    tank: "55-gal Discus",
    stars: 5,
    text: "Discus are the most sensitive fish I've ever kept. It noticed unusual surface behavior before I would have in my morning check. Already saved me twice in the first month.",
  },
  {
    name: "Lena K.",
    initials: "LK",
    color: "#1a0e3d",
    tank: "90-gal Saltwater FOWLR",
    stars: 5,
    text: "I just propped up an old iPhone I had in a drawer and that was it. The fact that I don't need a $1,000 controller for this level of peace of mind is wild. Should have existed years ago.",
  },
  {
    name: "Chris M.",
    initials: "CM",
    color: "#0e2e3d",
    tank: "40-gal Breeder Reef",
    stars: 5,
    text: "My SPS corals are worth more than my TV. The alert I got during a power flicker at 2am was worth everything. Caught the equipment failure before conditions had time to deteriorate.",
  },
  {
    name: "Dana W.",
    initials: "DW",
    color: "#2e0e3d",
    tank: "29-gal Community Tank",
    stars: 5,
    text: "Set it up on my daughter's aquarium. The behavioral alerts have already prevented two issues. The interface is clean, intuitive, and requires zero technical knowledge.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 overflow-hidden">
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        {/* Radial fade over the grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(0,229,255,0.06) 0%, transparent 65%)",
          }}
        />

        <motion.div
          className="relative z-10 max-w-3xl mx-auto"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-cyan-400 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Coming Soon to iOS
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
          >
            Your Tank.
            <br />
            <span className="text-gradient">Always Watched.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-[#7FA8BF] max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Turn a spare phone into a 24/7 aquarium monitor. Fish behavior, coral health,
            equipment issues — you get an email the moment something looks wrong.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col items-center gap-5 w-full max-w-md mx-auto">
            <WaitlistForm className="w-full" />
            <Link
              href="/how-it-works"
              className="flex items-center gap-1 text-sm text-[#7FA8BF] hover:text-[#E8F4F8] transition-colors"
            >
              See how it works <ChevronRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-6">
            Aquariums don&apos;t warn you before they crash.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#7FA8BF] text-lg leading-relaxed mb-4">
            A fish gasping at the surface, a coral closing up, a stopped pump. Problems escalate fast when no one is watching — and professional monitoring systems cost hundreds of dollars.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#E8F4F8] text-lg leading-relaxed font-medium">
            Vision Aquatics gives you that level of awareness using a phone you already own.
          </motion.p>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What beta testers are saying
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="text-4xl font-bold">4.9</span>
            <div className="flex flex-col items-start gap-1">
              <Stars count={5} />
              <span className="text-xs text-[#7FA8BF]">from 40+ beta testers</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              custom={i * 0.3}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-[#E8F4F8] shrink-0"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm leading-tight">{t.name}</p>
                    <p className="text-xs text-[#7FA8BF]">{t.tank}</p>
                  </div>
                </div>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 shrink-0">
                  Beta Tester
                </span>
              </div>
              <Stars count={t.stars} />
              <p className="text-sm text-[#7FA8BF] leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="max-w-6xl mx-auto px-6 pb-32">
        <motion.div
          className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none rounded-3xl" />
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,229,255,0.07) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-lg mx-auto">
            <p className="text-cyan-400 text-sm font-medium mb-3 tracking-wide uppercase">
              Launching soon
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Be first in the water.
            </h2>
            <p className="text-[#7FA8BF] mb-8 text-lg">
              Join the waitlist and get early access when Vision Aquatics launches on the App Store.
            </p>
            <WaitlistForm />
            <p className="text-xs text-[#7FA8BF] mt-4">No spam. Just a launch notification.</p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
