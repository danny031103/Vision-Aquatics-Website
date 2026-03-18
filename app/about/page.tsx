"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function About() {
  return (
    <div className="min-h-screen pt-28 pb-32 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <p className="text-cyan-400 text-sm font-medium mb-3 tracking-wide uppercase">About</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Built by someone who{" "}
            <span className="text-gradient">gets it.</span>
          </h1>
          <p className="text-[#7FA8BF] text-lg max-w-2xl leading-relaxed">
            Vision Aquatics was not built by people who googled &quot;aquarium problems.&quot;
            It was built by someone who has spent years watching tanks, losing fish, and obsessing
            over water chemistry.
          </p>
        </motion.div>

        {/* Founder card */}
        <motion.div
          className="glass rounded-3xl p-8 md:p-12 mb-12 flex flex-col md:flex-row gap-10 items-center"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={1}
        >
          {/* Photo */}
          <div className="shrink-0">
            <div className="w-72 h-72 rounded-2xl overflow-hidden border border-cyan-500/20">
              <Image
                src="/mypicture.jpeg"
                alt="Daniel Brito"
                width={260}
                height={260}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-2xl font-bold mb-1">Daniel Brito</h2>
            <p className="text-cyan-400 text-sm font-medium mb-5">Founder &amp; Developer</p>

            <div className="space-y-4 text-[#7FA8BF] leading-relaxed">
              <p>
                I&apos;ve been keeping aquariums for 12 years, starting with a simple freshwater
                betta tank and eventually moving into reef aquariums. Along the way I learned
                that these systems are deceptively fragile. A single equipment failure can undo
                months of careful work.
              </p>
              <p>
                After too many stressful moments checking my phone hoping nothing had gone wrong,
                I decided to build something better. Vision Aquatics is that something.
              </p>
              <p>
                I am a solo founder with a background in Computer Science from NYU and a genuine obsession
                with building software that solves real problems for real people. Not just people
                who can afford expensive hardware.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
