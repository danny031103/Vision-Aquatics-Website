export default function Privacy() {
  return (
    <div className="min-h-screen pt-28 pb-32 px-6">
      <div className="max-w-3xl mx-auto prose prose-invert">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-[#7FA8BF] text-sm mb-12">Last updated: March 2025</p>

        <div className="space-y-10 text-[#7FA8BF] leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">1. Information We Collect</h2>
            <p>
              Vision Aquatics collects information you provide directly to us when you create an
              account, connect a camera, or contact us. This may include your name, email address,
              and camera stream data used solely for monitoring purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Provide, operate, and maintain the Vision Aquatics service</li>
              <li>Send you alerts and notifications about your aquarium</li>
              <li>Respond to your questions and support requests</li>
              <li>Improve our AI models and service quality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">3. Camera Data</h2>
            <p>
              Camera streams are processed in real time to detect anomalies. We do not permanently
              store video footage. Only anonymized event data (e.g., &quot;anomaly detected at timestamp X&quot;)
              is retained to support alert history features.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">4. Data Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may
              share aggregated, anonymized data for research or service improvement purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data. However, no
              method of internet transmission is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">6. Children&apos;s Privacy</h2>
            <p>
              Vision Aquatics is not directed to children under 13. We do not knowingly collect
              personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any
              material changes by updating the date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">8. Contact</h2>
            <p>
              If you have questions about this privacy policy, please contact us at{" "}
              <a href="mailto:hello@visionaquatics.com" className="text-cyan-400 hover:text-cyan-300">
                hello@visionaquatics.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
