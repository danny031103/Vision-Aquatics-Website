"use client";

import { ChevronRight } from "lucide-react";

export default function WaitlistForm({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <a
        href="https://tally.so/r/pbKvzB"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm transition-opacity hover:opacity-90 whitespace-nowrap"
        style={{ background: "#3D7EFF" }}
      >
        Join the Waitlist <ChevronRight size={15} strokeWidth={2.5} />
      </a>
    </div>
  );
}
