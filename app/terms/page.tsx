export default function Terms() {
  return (
    <div className="min-h-screen pt-28 pb-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-[#7FA8BF] text-sm mb-12">Last updated: March 2025</p>

        <div className="space-y-10 text-[#7FA8BF] leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">1. Acceptance of Terms</h2>
            <p>
              By downloading or using Vision Aquatics, you agree to be bound by these Terms of
              Service. If you do not agree to these terms, do not use the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">2. Description of Service</h2>
            <p>
              Vision Aquatics provides AI-powered aquarium monitoring via connected camera streams.
              The service provides anomaly detection and alert notifications as a supplemental
              monitoring tool. It is not a substitute for proper aquarium maintenance and husbandry.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">3. Limitation of Liability</h2>
            <p>
              Vision Aquatics is provided &quot;as is&quot; without warranties of any kind. We are not
              responsible for any loss of livestock, equipment, or property arising from use of or
              inability to use the service, including missed alerts, connectivity issues, or
              AI detection errors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">4. User Responsibilities</h2>
            <p>You are responsible for:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Ensuring your camera and network are properly configured</li>
              <li>Maintaining your aquarium according to best practices</li>
              <li>Not relying solely on Vision Aquatics as your only monitoring method</li>
              <li>Keeping your account credentials secure</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">5. Intellectual Property</h2>
            <p>
              All content, features, and functionality of Vision Aquatics, including the AI models,
              interface, and branding, are owned by Vision Aquatics and protected by applicable
              intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">6. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at any time for violations
              of these terms. You may delete your account at any time from within the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">7. Changes to Terms</h2>
            <p>
              We may update these terms at any time. Continued use of the service after changes
              are posted constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">8. Contact</h2>
            <p>
              Questions about these terms?{" "}
              <a href="mailto:hello@visionaquatics.com" className="text-cyan-400 hover:text-cyan-300">
                hello@visionaquatics.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
