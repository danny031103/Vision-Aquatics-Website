"use client";

import { motion } from "framer-motion";
import { Bell, Camera, ShieldCheck } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import WaitlistForm from "@/components/WaitlistForm";

const bullets = [
  { icon: <Camera size={18} />, text: "Works with a spare iPhone you already own" },
  { icon: <Bell size={18} />, text: "Instant email alerts when something looks wrong" },
  { icon: <ShieldCheck size={18} />, text: "AI that watches so you don't have to" },
];

export default function Download() {
  return (
    <div className="min-h-screen pt-28 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: copy */}
          <motion.div
            className="flex-1"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-cyan-400 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Launching soon on iOS
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Vision Aquatics is{" "}
              <span className="text-gradient">almost here.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[#7FA8BF] text-lg mb-8 leading-relaxed"
            >
              Join the waitlist and you&apos;ll be the first to know when it drops.
            </motion.p>

            <motion.ul variants={fadeUp} className="space-y-3 mb-10">
              {bullets.map((b) => (
                <li key={b.text} className="flex items-center gap-3 text-[#E8F4F8]">
                  <span className="text-cyan-400 shrink-0">{b.icon}</span>
                  <span className="text-sm">{b.text}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp}>
              <WaitlistForm />
              <p className="text-xs text-[#7FA8BF] mt-3">No spam. Just a launch notification when we go live.</p>
            </motion.div>
          </motion.div>

          {/* Right: phone mockup */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              <div
                className="w-64 h-[520px] rounded-[40px] border-2 border-cyan-500/30 bg-[#071E2E] flex flex-col items-center justify-center gap-4 overflow-hidden"
                style={{ boxShadow: "0 0 60px rgba(0,229,255,0.1), inset 0 0 40px rgba(0,229,255,0.03)" }}
              >
                {/* Status bar notch */}
                <div className="absolute top-4 flex items-center gap-1">
                  <div className="w-20 h-6 rounded-full bg-[#040D14] border border-cyan-500/20" />
                </div>

                {/* Mock app UI */}
                <div className="w-full px-5 mt-10 space-y-3">
                  <div className="h-32 rounded-2xl bg-[#040D14] border border-cyan-500/20 flex items-center justify-center">
                    <span className="text-4xl">🐠</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 h-16 rounded-xl bg-[#040D14] border border-cyan-500/20 flex flex-col items-center justify-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#39FF7E] animate-pulse" />
                      <span className="text-[10px] text-[#7FA8BF]">Normal</span>
                    </div>
                    <div className="flex-1 h-16 rounded-xl bg-[#040D14] border border-cyan-500/20 flex flex-col items-center justify-center gap-1">
                      <span className="text-xs font-mono text-cyan-400">78°F</span>
                      <span className="text-[10px] text-[#7FA8BF]">Temp</span>
                    </div>
                    <div className="flex-1 h-16 rounded-xl bg-[#040D14] border border-cyan-500/20 flex flex-col items-center justify-center gap-1">
                      <span className="text-xs font-mono text-cyan-400">8.2</span>
                      <span className="text-[10px] text-[#7FA8BF]">pH</span>
                    </div>
                  </div>
                  <div className="h-10 rounded-xl bg-[#040D14] border border-cyan-500/20 flex items-center px-3 gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs text-[#7FA8BF]">AI monitoring active...</span>
                  </div>
                  {/* Alert preview */}
                  <div className="h-14 rounded-xl bg-[#040D14] border border-[#FF6B6B]/30 flex items-center px-3 gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FF6B6B] animate-pulse shrink-0" />
                    <div>
                      <p className="text-[10px] text-[#FF6B6B] font-medium">Anomaly detected</p>
                      <p className="text-[10px] text-[#7FA8BF]">Unusual movement pattern</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute inset-0 rounded-[40px] pointer-events-none"
                style={{ boxShadow: "0 0 80px rgba(0,229,255,0.08)" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
