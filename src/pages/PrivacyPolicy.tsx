import { useEffect } from 'react';
import { motion } from 'framer-motion';
import TypewriterHeading from '../components/TypewriterHeading';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#E8EEF5]">
      <div className="max-w-4xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <TypewriterHeading text="Privacy Policy" />

          <div className="text-white/60 mb-4">
            Last Updated: January 16, 2026
          </div>

          <p className="text-white/70 leading-relaxed mb-12">
            Closio LLC ("Company," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect information when you access or use the Closio software platform (the "Service").
            <br /><br />
            Closio LLC is a Wyoming limited liability company operated from New York, New York.
          </p>

          <div className="space-y-10">
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">1. Information We Collect</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We collect only the information necessary to operate and provide the Service.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Information You Provide</h3>
                  <ul className="list-disc list-inside text-white/70 leading-relaxed space-y-1">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Account credentials</li>
                    <li>Business-related data you voluntarily upload into the platform</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside text-white/70 leading-relaxed space-y-1">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device information</li>
                    <li>Log and usage data</li>
                    <li>Analytics and interaction data (via Google Analytics and Microsoft Clarity)</li>
                    <li>Error logs and performance metrics (via Sentry)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Analytics & Tracking Tools</h3>
                  <p className="text-white/70 leading-relaxed mb-2">
                    We use third-party analytics services to understand how users interact with our Service:
                  </p>
                  <ul className="list-disc list-inside text-white/70 leading-relaxed space-y-1">
                    <li><strong>Google Analytics:</strong> Tracks page views, user flow, and engagement metrics</li>
                    <li><strong>Microsoft Clarity:</strong> Records anonymized session replays and heatmaps to improve user experience</li>
                    <li><strong>Sentry:</strong> Monitors errors and performance issues</li>
                  </ul>
                  <p className="text-white/70 leading-relaxed mt-2">
                    These services may use cookies and similar technologies. You can opt out through your browser settings or the respective service's opt-out mechanisms.
                  </p>
                </div>
                <p className="text-white/70 leading-relaxed">
                  We do not collect sensitive personal data unless voluntarily provided by the user within the CRM.
                </p>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">2. How We Use Information</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We use collected information solely to:
              </p>
              <ul className="list-disc list-inside text-white/70 leading-relaxed space-y-1 mb-4">
                <li>Provide, operate, and maintain the Service</li>
                <li>Authenticate users</li>
                <li>Improve performance and reliability</li>
                <li>Ensure security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="text-white/70 leading-relaxed">
                We do not use your data for marketing, advertising, or analytics unrelated to the operation of the Service.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">3. Data Storage & Security</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>We utilize industry-leading infrastructure and security measures:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>All data is securely stored using Amazon Web Services (AWS) infrastructure, including EC2, S3, and AWS Secrets Manager</li>
                  <li>DNS and security services provided by Cloudflare and AWS Route 53</li>
                  <li>Data is protected behind secure firewalls and access controls</li>
                  <li>Industry-standard encryption protocols where applicable</li>
                  <li>Access to customer data is strictly limited to authorized personnel</li>
                  <li>Application containerization via Docker for enhanced security isolation</li>
                </ul>
                <p>While no system is 100% secure, we take reasonable and appropriate steps to protect your data.</p>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">4. Data Sharing & Disclosure</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>Closio LLC does not:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Sell user data</li>
                  <li>Rent user data</li>
                  <li>Trade user data</li>
                  <li>Share data with third parties for marketing purposes</li>
                </ul>
                <p>We may share information only with:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Infrastructure Providers:</strong> AWS (EC2, S3, Route 53, Secrets Manager), Cloudflare, and Firebase for hosting and platform operations</li>
                  <li><strong>Analytics Services:</strong> Google Analytics and Microsoft Clarity for usage analytics (anonymized where possible)</li>
                  <li><strong>Error Monitoring:</strong> Sentry for application performance and error tracking</li>
                  <li><strong>Email Services:</strong> SMTP providers for transactional emails</li>
                  <li><strong>User-Initiated Integrations:</strong> When you connect Slack or Discord, data flows directly to those platforms based on your configuration. We do not collect or store data from these integrations.</li>
                </ul>
                <p>We may also disclose information:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>When required by law, court order, or legal process</li>
                  <li>To protect our rights, users, or platform security</li>
                  <li>In connection with a merger, acquisition, or sale of assets (with prior notice)</li>
                </ul>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">5. Data Ownership</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                All data uploaded into Closio remains the property of the customer.
              </p>
              <p className="text-white/70 leading-relaxed">
                Closio acts only as a software provider and does not claim ownership over user data.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">6. Data Retention</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We retain user data only for as long as:
              </p>
              <ul className="list-disc list-inside text-white/70 leading-relaxed space-y-1 mb-4">
                <li>The account remains active, or</li>
                <li>Required to comply with legal obligations</li>
              </ul>
              <p className="text-white/70 leading-relaxed">
                Users may request account deletion, after which data will be removed within a reasonable timeframe unless legally required to retain it.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">7. Cookies & Tracking</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>Closio uses cookies and similar technologies for:</p>
                <ul className="list-disc list-inside space-y-1 mb-2">
                  <li><strong>Essential Cookies:</strong> Authentication and platform functionality</li>
                  <li><strong>Analytics Cookies:</strong> Google Analytics and Microsoft Clarity for usage insights</li>
                  <li><strong>Performance Monitoring:</strong> Sentry for error tracking</li>
                </ul>
                <p>We do not use advertising cookies or sell tracking data to third parties.</p>
                <p>You can control cookies through your browser settings. Note that disabling essential cookies may limit platform functionality.</p>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">8. Your Privacy Rights</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                  <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
                  <li><strong>Data Portability:</strong> Request export of your data</li>
                  <li><strong>Opt-Out:</strong> Opt out of analytics tracking (via browser settings)</li>
                </ul>
                <h3 className="text-lg font-semibold text-white mt-4 mb-2">California Privacy Rights (CCPA)</h3>
                <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Right to know what personal information is collected, used, and shared</li>
                  <li>Right to delete personal information held by us</li>
                  <li>Right to opt-out of the sale of personal information (note: we do not sell personal information)</li>
                  <li>Right to non-discrimination for exercising your CCPA rights</li>
                </ul>
                <p className="mt-2">To exercise these rights, contact us at <span className="text-white font-medium">privacy@closio.com</span></p>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">9. Children's Privacy</h2>
              <p className="text-white/70 leading-relaxed">
                Closio is not intended for individuals under the age of 18. We do not knowingly collect data from minors. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">10. International Data Transfers</h2>
              <p className="text-white/70 leading-relaxed">
                Your data may be transferred to and processed in the United States and other countries where our service providers operate. By using Closio, you consent to the transfer of your information to countries outside of your country of residence, which may have different data protection rules.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">11. Changes to This Policy</h2>
              <div className="text-white/70 leading-relaxed space-y-2">
                <p>We may update this Privacy Policy from time to time. Material changes will be communicated via:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Email notification to your registered email address</li>
                  <li>Prominent notice on our website</li>
                  <li>Updated "Last Updated" date at the top of this page</li>
                </ul>
                <p>Continued use of the Service after changes constitutes acceptance of the updated Privacy Policy.</p>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">12. Contact Information</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or wish to exercise your privacy rights, contact us at:
              </p>
              <div className="text-white/70 leading-relaxed space-y-1">
                <p className="font-semibold text-white">Closio LLC</p>
                <p>New York, New York</p>
                <p>Email: <span className="text-white">privacy@closio.com</span></p>
                <p className="mt-3 text-sm">For general support inquiries: support@closio.com</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
