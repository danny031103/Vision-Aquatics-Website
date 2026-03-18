"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Send, CheckCircle } from "lucide-react";
import { fadeUp } from "@/lib/animations";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    setLoading(true);
    // TODO: wire up to Resend API route
    await new Promise((r) => setTimeout(r, 1000));
    console.log(data);
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen pt-28 pb-32 px-6">
      <div className="max-w-2xl mx-auto">

        <motion.div className="mb-12" initial="hidden" animate="show" variants={fadeUp}>
          <p className="text-cyan-400 text-sm font-medium mb-3 tracking-wide uppercase">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in touch.</h1>
          <p className="text-[#7FA8BF] text-lg leading-relaxed">
            Questions, feedback, press inquiries, or partnership ideas. I read everything and
            reply personally.
          </p>
          <p className="text-sm text-[#7FA8BF] mt-2">
            You can also reach me directly at{" "}
            <a
              href="db4471@nyu.edu"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              db4471@nyu.edu
            </a>
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            className="glass rounded-2xl p-12 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <CheckCircle className="text-cyan-400 mx-auto mb-4" size={48} />
            <h2 className="text-2xl font-bold mb-2">Message sent!</h2>
            <p className="text-[#7FA8BF]">I&apos;ll get back to you within 1–2 business days.</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="glass rounded-2xl p-8 space-y-6"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={1}
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-[#E8F4F8] mb-2">Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                className="w-full bg-[#040D14] border border-cyan-500/20 rounded-xl px-4 py-3 text-[#E8F4F8] placeholder-[#7FA8BF] focus:outline-none focus:border-cyan-400/60 transition-colors"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#E8F4F8] mb-2">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                })}
                className="w-full bg-[#040D14] border border-cyan-500/20 rounded-xl px-4 py-3 text-[#E8F4F8] placeholder-[#7FA8BF] focus:outline-none focus:border-cyan-400/60 transition-colors"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-[#E8F4F8] mb-2">Subject</label>
              <select
                {...register("subject", { required: "Please select a subject" })}
                className="w-full bg-[#040D14] border border-cyan-500/20 rounded-xl px-4 py-3 text-[#E8F4F8] focus:outline-none focus:border-cyan-400/60 transition-colors"
              >
                <option value="">Select a topic...</option>
                <option value="general">General question</option>
                <option value="support">App support</option>
                <option value="press">Press & media</option>
                <option value="partnership">Partnership</option>
                <option value="bug">Bug report</option>
              </select>
              {errors.subject && (
                <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-[#E8F4F8] mb-2">Message</label>
              <textarea
                {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message too short" } })}
                rows={5}
                className="w-full bg-[#040D14] border border-cyan-500/20 rounded-xl px-4 py-3 text-[#E8F4F8] placeholder-[#7FA8BF] focus:outline-none focus:border-cyan-400/60 transition-colors resize-none"
                placeholder="Tell me what's on your mind..."
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 text-[#040D14] font-semibold hover:bg-cyan-300 disabled:opacity-60 transition-all glow-cyan-sm"
            >
              {loading ? "Sending..." : <>Send message <Send size={16} /></>}
            </button>
          </motion.form>
        )}
      </div>
    </div>
  );
}
