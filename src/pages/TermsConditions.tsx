import { useEffect } from 'react';
import { motion } from 'framer-motion';
import TypewriterHeading from '../components/TypewriterHeading';

const TermsConditions = () => {
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
          <TypewriterHeading text="Terms & Conditions" />

          <div className="text-white/60 mb-4">
            Last Updated: January 16, 2026
          </div>

          <p className="text-white/70 leading-relaxed mb-12">
            These Terms & Conditions ("Terms") govern your access to and use of the Closio software platform (the "Service") provided by Closio LLC, a Wyoming limited liability company. By accessing or using Closio, you agree to be legally bound by these Terms. If you do not agree, do not use the Service.
          </p>

          <div className="space-y-10">
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">1. Acceptance of Terms</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>By creating an account or using the Service, you confirm that:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You have read and understood these Terms</li>
                  <li>You are legally authorized to enter into this agreement</li>
                  <li>You agree to be bound by these Terms</li>
                </ul>
                <p>If you do not agree, do not use the Service.</p>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">2. Description of Service</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>Closio LLC provides a cloud-based CRM software platform designed for insurance agencies and agents to manage their business operations, including but not limited to client management, deal tracking, commission tracking, and team hierarchy management.</p>
                <p>The Service may include optional integrations with third-party platforms such as Slack and Discord, which are configured and controlled by you.</p>
                <p><strong>Closio LLC does not:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Sell, generate, or provide insurance leads</li>
                  <li>Provide SMS or bulk email marketing services</li>
                  <li>Act as an insurance carrier, agency, broker, or producer</li>
                  <li>Provide legal, financial, or insurance compliance advice</li>
                  <li>Guarantee any business outcomes or sales results</li>
                </ul>
                <p><strong>Closio LLC is a software provider only.</strong> You are solely responsible for your use of the Service and compliance with all applicable laws and regulations.</p>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">3. Account Responsibilities</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p><strong>You are responsible for:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintaining the confidentiality and security of your login credentials</li>
                  <li>All activity that occurs under your account, whether authorized or not</li>
                  <li>Ensuring all data uploaded into the platform is lawful, authorized, and does not violate any third-party rights</li>
                  <li>Compliance with all applicable laws, including insurance regulations, data protection laws, and privacy requirements</li>
                  <li>Maintaining your own backups of critical data</li>
                  <li>Notifying us immediately of any unauthorized access or security breach</li>
                </ul>
                <p><strong>You agree not to:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Upload illegal, fraudulent, defamatory, or unauthorized data</li>
                  <li>Violate any laws, including TCPA, CAN-SPAM, or insurance regulations</li>
                  <li>Attempt to access, probe, or test systems you are not authorized to use</li>
                  <li>Reverse engineer, decompile, or attempt to extract source code</li>
                  <li>Use the Service to harm, harass, or spam others</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Use automated systems to scrape or extract data beyond your own account data</li>
                  <li>Resell, sublicense, or provide access to the Service to unauthorized third parties</li>
                </ul>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">4. Data & Content Ownership</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p><strong>Your Data:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You retain full ownership of all data you upload to the Service ("User Data")</li>
                  <li>You grant Closio LLC a limited, non-exclusive, worldwide license to host, store, process, and display your User Data solely to provide and improve the Service</li>
                  <li>This license terminates when you delete your data or account, except where retention is required by law</li>
                </ul>
                <p><strong>Your Responsibilities:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You warrant that you have all necessary rights to upload and use User Data in the Service</li>
                  <li>You are solely responsible for the accuracy, legality, and compliance of your User Data</li>
                  <li>Closio LLC does not monitor, verify, or validate user-submitted data for accuracy, completeness, or legality</li>
                  <li>You are responsible for maintaining backups of your User Data</li>
                </ul>
                <p><strong>Our Intellectual Property:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Closio LLC retains all rights to the Service, including software, design, trademarks, and documentation</li>
                  <li>These Terms do not grant you any ownership rights to the Service or our intellectual property</li>
                </ul>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">5. Fees, Billing & Refunds</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p><strong>Free Trial:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>New users receive a 30-day free trial period</li>
                  <li>No payment information is required during the trial</li>
                  <li>You may cancel at any time during the trial with no obligation</li>
                </ul>
                <p><strong>Subscription Fees:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>After the 30-day trial, billing begins according to your selected plan</li>
                  <li>Fees are billed in advance on a monthly or annual basis (depending on plan)</li>
                  <li>All fees are in U.S. Dollars (USD)</li>
                  <li>You authorize us to charge your provided payment method</li>
                  <li>Subscription automatically renews unless cancelled</li>
                </ul>
                <p><strong>Refund Policy:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>If you are not satisfied with the Service, you may request a refund within 2 weeks after your first paid month ends</li>
                  <li>You must notify us at least 2 weeks before requesting a refund</li>
                  <li>Refunds are issued at our discretion and only apply to the first paid month</li>
                  <li>Subsequent months are non-refundable</li>
                  <li>To request a refund, contact legal@closio.com with your account details</li>
                </ul>
                <p><strong>Price Changes:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Closio LLC may modify pricing with at least 30 days' advance notice</li>
                  <li>Price changes will not affect your current billing cycle</li>
                  <li>Continued use after price changes constitutes acceptance</li>
                </ul>
                <p><strong>Late Payments & Suspension:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>If payment fails, we may suspend your account access</li>
                  <li>You remain responsible for all outstanding fees</li>
                  <li>We may charge late fees for overdue accounts</li>
                </ul>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">6. Service Availability & Modifications</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>Closio LLC strives to provide reliable uptime but does not guarantee uninterrupted, error-free, or secure access to the Service.</p>
                <p><strong>We reserve the right to:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Perform scheduled and emergency maintenance</li>
                  <li>Update, modify, or discontinue features with or without notice</li>
                  <li>Temporarily or permanently suspend the Service</li>
                  <li>Change system requirements or technical specifications</li>
                </ul>
                <p>We will make reasonable efforts to provide advance notice of significant changes or planned maintenance, but are not obligated to do so.</p>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">7. Termination & Cancellation</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p><strong>Your Right to Cancel:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You may cancel your account at any time through your account settings or by contacting support</li>
                  <li>Cancellation takes effect at the end of your current billing period</li>
                  <li>You remain responsible for all fees incurred up to the cancellation date</li>
                  <li>No refunds are provided for partial billing periods (except as stated in Section 5)</li>
                </ul>
                <p><strong>Our Right to Suspend or Terminate:</strong></p>
                <p>Closio LLC may suspend or terminate your account immediately if:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You violate these Terms</li>
                  <li>You engage in fraudulent or illegal activity</li>
                  <li>Your account is used to harm others or the Service</li>
                  <li>Payment fails and remains unresolved</li>
                  <li>Required by law or legal process</li>
                  <li>We determine, in our sole discretion, that continued access poses a security or legal risk</li>
                </ul>
                <p><strong>Effect of Termination:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Upon termination, your access to the Service ends immediately</li>
                  <li>We will retain your data behind our secure firewalls for a reasonable period (typically 30-90 days) in case you wish to reactivate</li>
                  <li>After the retention period, your data will be permanently deleted unless legally required to retain it</li>
                  <li>You are responsible for exporting your data before cancellation</li>
                  <li>Sections of these Terms that by their nature should survive (including liability limitations, indemnification, and dispute resolution) will continue to apply</li>
                </ul>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">8. Disclaimers & Warranties</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p className="uppercase font-semibold">THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.</p>
                <p><strong>To the maximum extent permitted by law, Closio LLC disclaims all warranties, express or implied, including but not limited to:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
                  <li>Warranties regarding accuracy, reliability, availability, or timeliness of the Service</li>
                  <li>Warranties that the Service will be uninterrupted, secure, or error-free</li>
                  <li>Warranties regarding results, outcomes, or business performance from using the Service</li>
                  <li>Warranties regarding third-party integrations (Slack, Discord, etc.)</li>
                </ul>
                <p><strong>You acknowledge and agree that:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use of the Service is at your sole risk</li>
                  <li>Closio LLC does not guarantee data accuracy, completeness, or prevention of data loss</li>
                  <li>You are responsible for verifying all data and maintaining backups</li>
                  <li>Closio LLC is not responsible for decisions made based on data in the Service</li>
                  <li>No advice or information obtained from Closio LLC creates any warranty not expressly stated here</li>
                </ul>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">9. Limitation of Liability</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p className="uppercase font-semibold">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
                <p><strong>Closio LLC, its officers, directors, employees, agents, and affiliates shall not be liable for:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Any indirect, incidental, special, consequential, punitive, or exemplary damages</li>
                  <li>Loss of profits, revenue, data, business opportunities, or goodwill</li>
                  <li>Cost of substitute services or products</li>
                  <li>Business interruption or loss of use</li>
                  <li>Errors, mistakes, or inaccuracies in the Service or data</li>
                  <li>Unauthorized access to or alteration of your data</li>
                  <li>Third-party conduct or content (including Slack, Discord, AWS, etc.)</li>
                  <li>Suspension or termination of your account</li>
                  <li>Data loss, corruption, or deletion</li>
                  <li>Failure to meet regulatory or compliance requirements</li>
                </ul>
                <p><strong>EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</strong></p>
                <p className="mt-4"><strong>Maximum Liability Cap:</strong></p>
                <p>Our total aggregate liability arising out of or relating to these Terms or the Service shall not exceed the greater of:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The total amount you paid to Closio LLC in the 12 months preceding the claim, or</li>
                  <li>$100 USD</li>
                </ul>
                <p>Some jurisdictions do not allow the exclusion or limitation of certain damages. In such jurisdictions, our liability is limited to the maximum extent permitted by law.</p>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">10. Indemnification</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>You agree to defend, indemnify, and hold harmless Closio LLC, its officers, directors, employees, agents, affiliates, and service providers from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or relating to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your use or misuse of the Service</li>
                  <li>Any User Data you submit, upload, or transmit through the Service</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any law, regulation, or third-party rights</li>
                  <li>Your violation of insurance regulations, TCPA, CAN-SPAM, or privacy laws</li>
                  <li>Any dispute between you and another user or third party</li>
                  <li>Unauthorized access to your account due to your failure to secure your credentials</li>
                  <li>Your use of third-party integrations (Slack, Discord, etc.)</li>
                </ul>
                <p>This indemnification obligation will survive termination of your account and these Terms.</p>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">11. Dispute Resolution & Arbitration</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p className="font-semibold uppercase">Please Read This Section Carefully. It Affects Your Legal Rights.</p>
                <p><strong>Informal Resolution:</strong></p>
                <p>Before filing any formal dispute, you agree to first contact us at legal@closio.com and attempt to resolve the issue informally for at least 30 days.</p>
                <p><strong>Binding Arbitration:</strong></p>
                <p>If informal resolution fails, you agree that any dispute, claim, or controversy arising out of or relating to these Terms or the Service will be resolved by binding arbitration, rather than in court, except that:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You may assert claims in small claims court if they qualify</li>
                  <li>Either party may seek equitable relief in court for infringement or misuse of intellectual property rights</li>
                </ul>
                <p><strong>Arbitration Rules:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Arbitration will be conducted by the American Arbitration Association (AAA) under its Commercial Arbitration Rules</li>
                  <li>Arbitration will take place in New York, New York, unless the parties agree otherwise</li>
                  <li>The arbitrator's decision will be final and binding</li>
                  <li>Each party will bear its own costs, unless otherwise awarded by the arbitrator</li>
                </ul>
                <p><strong>Class Action Waiver:</strong></p>
                <p className="font-semibold">YOU AND CLOSIO LLC AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.</p>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">12. Governing Law & Jurisdiction</h2>
              <div className="text-white/70 leading-relaxed space-y-2">
                <p>These Terms are governed by the laws of the State of Wyoming and the federal laws of the United States, without regard to conflict of law principles.</p>
                <p>To the extent arbitration does not apply, you consent to the exclusive jurisdiction of the state and federal courts located in New York, New York.</p>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">13. Third-Party Services & Integrations</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>The Service may integrate with or rely on third-party services, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Slack and Discord (for notifications)</li>
                  <li>Amazon Web Services (for hosting and infrastructure)</li>
                  <li>Cloudflare (for security and performance)</li>
                  <li>Google Analytics and Microsoft Clarity (for analytics)</li>
                  <li>Sentry (for error monitoring)</li>
                </ul>
                <p>Your use of these third-party services is subject to their respective terms and privacy policies. Closio LLC is not responsible for third-party services or their availability, performance, or security.</p>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">14. Miscellaneous</h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and Closio LLC regarding the Service</li>
                  <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions remain in effect</li>
                  <li><strong>Waiver:</strong> Failure to enforce any provision does not waive our right to enforce it later</li>
                  <li><strong>Assignment:</strong> You may not assign these Terms without our consent. We may assign these Terms at any time</li>
                  <li><strong>Force Majeure:</strong> We are not liable for delays or failures due to events beyond our reasonable control</li>
                  <li><strong>Notices:</strong> Legal notices must be sent to legal@closio.com and will be effective when received</li>
                </ul>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">15. Changes to These Terms</h2>
              <div className="text-white/70 leading-relaxed space-y-2">
                <p>Closio LLC may update these Terms from time to time. Material changes will be communicated via:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Email notification to your registered email address</li>
                  <li>Prominent notice within the Service or on our website</li>
                  <li>Updated "Last Updated" date at the top of this page</li>
                </ul>
                <p className="mt-2">Continued use of the Service after changes constitutes acceptance of the updated Terms. If you do not agree to the changes, you must stop using the Service and cancel your account.</p>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">16. Contact Information</h2>
              <div className="text-white/70 leading-relaxed space-y-2">
                <p>For questions about these Terms or legal matters, contact us at:</p>
                <p className="font-semibold text-white mt-3">Closio LLC</p>
                <p>New York, New York</p>
                <p>Email: <span className="text-white">legal@closio.com</span></p>
                <p className="mt-3 text-sm">For general support inquiries: support@closio.com</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditions;
