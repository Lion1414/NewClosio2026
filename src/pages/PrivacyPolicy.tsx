import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#6ad4f2] hover:text-[#6ad4f2]/80 transition-colors mb-8"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold mb-8">Privacy Policy</h1>

          <div className="text-white/60 mb-12">
            Last updated: January 1, 2026
          </div>

          <div className="space-y-10">
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-[#6ad4f2]">1. Information We Collect</h2>
              <p className="text-white/70 leading-relaxed">
                We collect information you provide directly to us, such as when you create an account,
                make a purchase, or contact us for support. This may include your name, email address,
                phone number, and payment information.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-[#6ad4f2]">2. How We Use Your Information</h2>
              <p className="text-white/70 leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services,
                process transactions, send you technical notices and support messages, and respond
                to your comments and questions.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-[#6ad4f2]">3. Information Sharing</h2>
              <p className="text-white/70 leading-relaxed">
                We do not share your personal information with third parties except as described
                in this policy. We may share information with service providers who assist us in
                operating our platform, conducting our business, or serving our users.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-[#6ad4f2]">4. Data Security</h2>
              <p className="text-white/70 leading-relaxed">
                We implement appropriate technical and organizational measures to protect the
                security of your personal information. However, no method of transmission over
                the Internet is 100% secure.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-[#6ad4f2]">5. Your Rights</h2>
              <p className="text-white/70 leading-relaxed">
                You have the right to access, correct, or delete your personal information.
                You may also object to or restrict certain processing of your data. To exercise
                these rights, please contact us at privacy@closio.com.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-[#6ad4f2]">6. Contact Us</h2>
              <p className="text-white/70 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at
                privacy@closio.com or through our contact form on the website.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
