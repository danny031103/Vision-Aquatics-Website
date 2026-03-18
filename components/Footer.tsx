import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/10 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <span className="font-bold text-lg text-gradient">Vision Aquatics</span>
            <p className="text-sm text-[#7FA8BF] mt-1 max-w-xs">
              AI-powered 24/7 monitoring for your aquarium. Never miss a thing.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6 text-sm text-[#7FA8BF]">
            <Link href="/" className="hover:text-[#E8F4F8] transition-colors">Home</Link>
            <Link href="/how-it-works" className="hover:text-[#E8F4F8] transition-colors">How It Works</Link>
            <Link href="/download" className="hover:text-[#E8F4F8] transition-colors">Join Waitlist</Link>
            <Link href="/about" className="hover:text-[#E8F4F8] transition-colors">About</Link>
            <Link href="/contact" className="hover:text-[#E8F4F8] transition-colors">Contact</Link>
            <Link href="/privacy" className="hover:text-[#E8F4F8] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#E8F4F8] transition-colors">Terms</Link>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-cyan-500/10 text-center text-xs text-[#7FA8BF]">
          © {new Date().getFullYear()} Vision Aquatics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
