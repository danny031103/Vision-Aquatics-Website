export default function Privacy() {
  return (
    <div className="min-h-screen pt-28 pb-32 px-6">
      <div className="max-w-3xl mx-auto prose prose-invert">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-[#7FA8BF] text-sm mb-4">
          <strong>App:</strong> Vision Aquatics
        </p>
        <p className="text-[#7FA8BF] text-sm mb-12">
          <strong>Last updated:</strong> March 4, 2026
        </p>

        <div className="space-y-10 text-[#7FA8BF] leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">Overview</h2>
            <p>
              Vision Aquatics is an aquarium monitoring app that uses your phone&apos;s camera to
              periodically photograph your fish tank and alert you by email when a potential problem
              is detected. This policy explains what data is collected, how it is used, and your rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">Data We Collect</h2>

            <h3 className="text-lg font-medium text-[#E8F4F8] mt-6 mb-2">Camera Images</h3>
            <p>
              Your phone&apos;s camera captures photographs of your aquarium at regular intervals
              (every 15–60 minutes, as configured by you). These images are uploaded to secure cloud
              storage solely for the purpose of automated analysis.
            </p>

            <h3 className="text-lg font-medium text-[#E8F4F8] mt-6 mb-2">Email Address</h3>
            <p>
              Your email address is collected during setup so that alert notifications can be sent
              to you. It is not used for marketing or shared with third parties.
            </p>

            <h3 className="text-lg font-medium text-[#E8F4F8] mt-6 mb-2">Usage Data</h3>
            <p>
              Basic app usage data (such as the timestamp of each capture and whether an alert was
              sent) is stored to support the app&apos;s monitoring functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">How We Use Your Data</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#2A4A5A]">
                    <th className="py-2 pr-4 text-[#E8F4F8]">Data</th>
                    <th className="py-2 text-[#E8F4F8]">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#2A4A5A]/50">
                    <td className="py-2 pr-4">Camera images</td>
                    <td className="py-2">Automated AI analysis to detect aquarium issues (e.g. lights off, flow anomalies)</td>
                  </tr>
                  <tr className="border-b border-[#2A4A5A]/50">
                    <td className="py-2 pr-4">Email address</td>
                    <td className="py-2">Sending alert notifications when a potential problem is detected</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Capture timestamps</td>
                    <td className="py-2">Tracking monitoring history and baseline-building progress</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              We do not use your data for advertising, profiling, or any purpose other than
              operating the aquarium monitoring service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">Data Storage and Security</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Images and analysis results are stored in <strong>Google Firebase</strong> (Cloud
                Storage and Firestore), operated by Google LLC.
              </li>
              <li>Data is transmitted over encrypted HTTPS connections at all times.</li>
              <li>
                Images are retained for a rolling window to support baseline analysis, after which
                they are automatically deleted.
              </li>
            </ul>
            <p className="mt-4">
              Google&apos;s privacy policy is available at:{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-cyan-400 hover:text-cyan-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                policies.google.com/privacy
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">Third-Party Services</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#2A4A5A]">
                    <th className="py-2 pr-4 text-[#E8F4F8]">Service</th>
                    <th className="py-2 pr-4 text-[#E8F4F8]">Purpose</th>
                    <th className="py-2 text-[#E8F4F8]">Privacy Policy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#2A4A5A]/50">
                    <td className="py-2 pr-4">Google Firebase</td>
                    <td className="py-2 pr-4">Cloud storage and database</td>
                    <td className="py-2">
                      <a href="https://policies.google.com/privacy" className="text-cyan-400 hover:text-cyan-300" target="_blank" rel="noopener noreferrer">Link</a>
                    </td>
                  </tr>
                  <tr className="border-b border-[#2A4A5A]/50">
                    <td className="py-2 pr-4">OpenAI (GPT-4o)</td>
                    <td className="py-2 pr-4">AI image analysis (server-side only)</td>
                    <td className="py-2">
                      <a href="https://openai.com/policies/privacy-policy" className="text-cyan-400 hover:text-cyan-300" target="_blank" rel="noopener noreferrer">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Resend</td>
                    <td className="py-2 pr-4">Email delivery</td>
                    <td className="py-2">
                      <a href="https://resend.com/legal/privacy-policy" className="text-cyan-400 hover:text-cyan-300" target="_blank" rel="noopener noreferrer">Link</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              Your camera images are only sent to OpenAI&apos;s API from our secure cloud
              servers — never directly from your device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">Data Sharing</h2>
            <p>
              We do not sell, rent, or share your personal data with any third parties except:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>The service providers listed above, which are necessary to operate the app</li>
              <li>If required by law or to protect our legal rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">Your Rights</h2>
            <p>You may request at any time:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><strong>Access</strong> to the data we hold about you</li>
              <li>
                <strong>Deletion</strong> of your account and all associated data (images, email,
                capture history)
              </li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at the email below. Deletion requests will be
              fulfilled within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">Children&apos;s Privacy</h2>
            <p>
              Vision Aquatics is not directed at children under 13. We do not knowingly collect
              data from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">Changes to This Policy</h2>
            <p>
              If this policy changes materially, we will update the &quot;Last updated&quot; date
              above. Continued use of the app after changes constitutes acceptance of the revised
              policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#E8F4F8] mb-3">Contact</h2>
            <p>
              For privacy questions or data deletion requests:{" "}
              <a href="mailto:db4471@nyu.edu" className="text-cyan-400 hover:text-cyan-300">
                db4471@nyu.edu
              </a>
            </p>
          </section>

          <p className="text-sm italic mt-12">
            Vision Aquatics is an independent app and is not affiliated with Google, OpenAI, or Resend.
          </p>
        </div>
      </div>
    </div>
  );
}
