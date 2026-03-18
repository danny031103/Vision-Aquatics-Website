"use client";

import { ChevronRight } from "lucide-react";

export default function WaitlistForm({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <a
        href="https://tally.so/r/pbKvzB"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-[#040D14] font-semibold text-sm hover:bg-cyan-300 transition-all glow-cyan-sm whitespace-nowrap"
      >
        Join the Waitlist <ChevronRight size={16} />
      </a>
    </div>
  );
}
