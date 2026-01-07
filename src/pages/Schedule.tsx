import { useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Schedule = () => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#E8EEF5]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(106,212,242,0.05)_0%,_transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-6">
            <span className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-white/10 bg-white/5">
              Schedule a Demo
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            See CLOSIO in Action
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Book a personalized demo with our team. We'll walk you through the platform
            and show you how CLOSIO can transform your insurance agency operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#6ad4f2]/10 via-transparent to-transparent rounded-3xl blur-3xl" />

          <div className="relative bg-white/[0.03] backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="aspect-[16/10] w-full bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#6ad4f2]/20 to-[#6ad4f2]/5 border border-[#6ad4f2]/20 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#6ad4f2]">
                      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="12" cy="16" r="2" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Calendly Widget Area
                  </h3>
                  <p className="text-white/50 text-sm max-w-md mx-auto mb-6">
                    Replace this placeholder with your Calendly embed code.
                    The widget will appear here for users to schedule their demo.
                  </p>
                  <div className="inline-block px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                    <code className="text-xs text-[#6ad4f2]">
                      {'<!-- Calendly inline widget -->'}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="p-6 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white/70">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">30-Minute Demo</h3>
            <p className="text-white/40 text-sm">
              Get a comprehensive overview of all features tailored to your needs.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white/70">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Expert Guidance</h3>
            <p className="text-white/40 text-sm">
              Our team will answer all your questions and address specific use cases.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white/70">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">No Commitment</h3>
            <p className="text-white/40 text-sm">
              Explore the platform with zero pressure. See if CLOSIO is right for you.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 text-sm mb-4">
            Have questions before scheduling?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-[#6ad4f2] hover:text-[#6ad4f2]/80 transition-colors text-sm font-medium"
          >
            Contact our team
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Schedule;
