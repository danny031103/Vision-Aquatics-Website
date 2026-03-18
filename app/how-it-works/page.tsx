"use client";

import { motion } from "framer-motion";
import { Bell, Fish, Waves, Sun, Eye, BarChart3 } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import WaitlistForm from "@/components/WaitlistForm";

// ── Step visual panels ──────────────────────────────────────────────────────

function PhonePanel() {
  return (
    <div className="relative flex items-center justify-center py-8">
      <div
        className="w-52 h-96 rounded-[32px] border-2 border-cyan-500/30 bg-[#040D14] relative overflow-hidden"
        style={{ boxShadow: "0 0 40px rgba(0,229,255,0.08), inset 0 0 20px rgba(0,229,255,0.02)" }}
      >
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 rounded-full bg-[#071E2E] border border-cyan-500/20 z-10" />
        {/* Camera viewfinder */}
        <div className="absolute inset-3 top-10 rounded-2xl bg-[#071E2E] border border-cyan-500/15 overflow-hidden flex items-center justify-center">
          <span className="text-5xl">🐠</span>
          {/* Corner brackets */}
          {[
            "top-2 left-2 border-t border-l",
            "top-2 right-2 border-t border-r",
            "bottom-2 left-2 border-b border-l",
            "bottom-2 right-2 border-b border-r",
          ].map((cls) => (
            <div key={cls} className={`absolute w-4 h-4 border-cyan-400/40 ${cls}`} />
          ))}
        </div>
        {/* Bottom status */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 bg-[#071E2E] rounded-xl px-3 py-2 border border-cyan-500/15">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
          <span className="text-[10px] text-[#7FA8BF] font-mono">Camera active</span>
        </div>
      </div>
    </div>
  );
}

function ScanPanel() {
  const metrics = [
    { label: "Fish movement", value: "Nominal", color: "#39FF7E" },
    { label: "Coral extension", value: "Tracking", color: "#00E5FF" },
    { label: "Surface flow", value: "Nominal", color: "#39FF7E" },
    { label: "Lighting", value: "Nominal", color: "#39FF7E" },
  ];
  return (
    <div className="relative py-8 flex items-center justify-center">
      <div className="w-full max-w-sm glass rounded-2xl p-5 space-y-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Live analysis</span>
          <span className="text-[10px] text-[#7FA8BF]">● scanning</span>
        </div>
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            className="flex items-center justify-between py-2 border-b border-cyan-500/10 last:border-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.12 + 0.2 }}
          >
            <span className="text-xs text-[#7FA8BF]">{m.label}</span>
            <span className="text-xs font-semibold font-mono" style={{ color: m.color }}>{m.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AIPanel() {
  const signals = [
    { label: "Behavioral pattern", score: 96, ok: true },
    { label: "Coral health index", score: 91, ok: true },
    { label: "Flow pattern", score: 88, ok: true },
    { label: "Lighting profile", score: 99, ok: true },
  ];
  return (
    <div className="relative py-8 flex items-center justify-center">
      <div className="w-full max-w-sm glass rounded-2xl p-5 space-y-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">AI assessment</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#39FF7E]/10 text-[#39FF7E] border border-[#39FF7E]/20">All clear</span>
        </div>
        {signals.map((s, i) => (
          <div key={s.label} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-[#7FA8BF]">{s.label}</span>
              <span className="font-mono text-[#E8F4F8]">{s.score}</span>
            </div>
            <div className="h-1 bg-[#040D14] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: s.ok ? "#39FF7E" : "#FF6B6B" }}
                initial={{ width: 0 }}
                animate={{ width: `${s.score}%` }}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.7, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AlertPanel() {
  return (
    <div className="relative py-8 flex items-center justify-center">
      <div className="w-full max-w-sm space-y-3">
        {/* Email alert */}
        <motion.div
          className="glass rounded-2xl p-4 border border-[#FF6B6B]/20"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center shrink-0 mt-0.5">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                <ellipse cx="9" cy="9" rx="8" ry="5" stroke="white" strokeWidth="1.5" fill="none"/>
                <circle cx="9" cy="9" r="2.5" fill="white"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-0.5">
                <span className="text-xs font-semibold text-[#E8F4F8]">Vision Aquatics</span>
                <span className="text-[10px] text-[#7FA8BF] shrink-0">Just now</span>
              </div>
              <p className="text-xs text-[#FF6B6B] font-medium mb-0.5">Anomaly detected</p>
              <p className="text-[11px] text-[#7FA8BF]">Unusual surface behavior in Tank 1.</p>
            </div>
          </div>
        </motion.div>
        {/* Log */}
        <motion.div
          className="glass rounded-2xl p-4 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">Alert log</span>
          {[
            { time: "2 min ago", msg: "Surface behavior anomaly", color: "#FF6B6B" },
            { time: "Yesterday", msg: "All signals nominal", color: "#39FF7E" },
            { time: "3 days ago", msg: "Flow pattern resolved", color: "#39FF7E" },
          ].map((a) => (
            <div key={a.time} className="flex items-center gap-2 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: a.color }} />
              <span className="text-[#7FA8BF] flex-1">{a.msg}</span>
              <span className="text-[#7FA8BF] opacity-50 shrink-0">{a.time}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// ── Step data ───────────────────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    title: "Mount a spare iPhone",
    body: "Point an old iPhone at your tank so the camera has a clear view. That's the entire setup. No special equipment, no wiring.",
    visual: <PhonePanel />,
  },
  {
    num: "02",
    title: "Vision Aquatics starts watching",
    body: "The app analyzes your live camera feed continuously — fish behavior, coral polyp extension, surface movement, flow patterns, and lighting.",
    visual: <ScanPanel />,
  },
  {
    num: "03",
    title: "AI evaluates what it sees",
    body: "The AI cross-references the feed against what a healthy tank looks like. It understands context — not just pixel changes.",
    visual: <AIPanel />,
  },
  {
    num: "04",
    title: "You get alerted instantly",
    body: "The moment something falls outside of normal, an email alert is sent to your phone. Catch problems early, before they become losses.",
    visual: <AlertPanel />,
  },
];

const monitors = [
  { icon: <Fish size={22} />, title: "Fish behavior", body: "Surface gasping, lethargy, and erratic movement flagged before they escalate." },
  { icon: <Eye size={22} />, title: "Coral health", body: "Polyp retraction, bleaching indicators, and extension changes tracked continuously." },
  { icon: <Waves size={22} />, title: "Water movement", body: "Flow and surface agitation shifts can signal a pump issue before you'd notice it yourself." },
  { icon: <Sun size={22} />, title: "Lighting changes", body: "Stuck fixtures and failed LED channels detected and reported immediately." },
  { icon: <Bell size={22} />, title: "Instant alerts", body: "Email alerts sent to your phone the moment something needs attention. No dashboard to check." },
  { icon: <BarChart3 size={22} />, title: "Event history", body: "A timeline of detected events so you can see what happened and when." },
];

// ── Page ────────────────────────────────────────────────────────────────────

export default function HowItWorks() {
  return (
    <div className="min-h-screen pt-28 pb-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="max-w-2xl mb-24"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-cyan-400 text-sm font-medium mb-3 tracking-wide uppercase">
            How it works
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Serious monitoring.{" "}
            <span className="text-gradient">Zero new hardware.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[#7FA8BF] text-lg leading-relaxed">
            Vision Aquatics turns a spare iPhone into a round-the-clock aquarium guardian.
            Here is exactly how it works.
          </motion.p>
        </motion.div>

        {/* Steps — alternating layout */}
        <div className="space-y-4 mb-32">
          {steps.map((s, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={s.num}
                className="glass glass-hover rounded-3xl overflow-hidden"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                custom={i * 0.15}
              >
                <div className={`grid md:grid-cols-2 ${isEven ? "" : "md:[direction:rtl]"}`}>
                  {/* Text side */}
                  <div className={`p-10 md:p-14 flex flex-col justify-center ${isEven ? "" : "md:[direction:ltr]"}`}>
                    {/* Step number — large decorative */}
                    <span
                      className="font-mono font-bold text-[80px] leading-none mb-2 text-gradient opacity-15 select-none"
                      aria-hidden
                    >
                      {s.num}
                    </span>
                    <h3 className="text-2xl font-bold mb-4 -mt-2">{s.title}</h3>
                    <p className="text-[#7FA8BF] leading-relaxed">{s.body}</p>
                  </div>

                  {/* Visual side */}
                  <div
                    className={`relative bg-[#040D14]/50 border-t md:border-t-0 border-cyan-500/10 flex items-center justify-center px-8 min-h-64 ${
                      isEven ? "md:border-l" : "md:border-r md:[direction:ltr]"
                    }`}
                    style={{
                      background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,229,255,0.04) 0%, transparent 70%)",
                    }}
                  >
                    {s.visual}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* What it monitors */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            What Vision Aquatics monitors
          </h2>
          <p className="text-[#7FA8BF] max-w-xl">
            Every signal is evaluated continuously against your live feed, not on a timer.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-28">
          {monitors.map((m, i) => (
            <motion.div
              key={m.title}
              className="glass glass-hover rounded-2xl p-6 flex gap-4 group"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={i * 0.15}
            >
              <div className="text-cyan-400 mt-0.5 shrink-0 transition-transform duration-300 group-hover:scale-110">{m.icon}</div>
              <div>
                <h3 className="font-semibold mb-1">{m.title}</h3>
                <p className="text-sm text-[#7FA8BF] leading-relaxed">{m.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Waitlist */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-bold mb-2">Ready to protect your tank?</h2>
          <p className="text-[#7FA8BF] mb-6">Join the waitlist for early access.</p>
          <WaitlistForm className="max-w-md mx-auto" />
        </motion.div>

      </div>
    </div>
  );
}
