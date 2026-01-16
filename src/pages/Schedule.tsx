import { useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TypewriterHeading from '../components/TypewriterHeading';

const Schedule = () => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
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

          <TypewriterHeading text="See CLOSIO in Action" className="text-center lg:text-6xl" />
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Book a personalized demo with our team. We'll walk you through the platform
            and show you how CLOSIO can transform your insurance agency operations.
          </p>
        </motion.div>

        {/* Decorative Purple-White Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          className="my-12 relative"
        >
          <svg 
            className="w-full h-2" 
            viewBox="0 0 1920 20" 
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="scheduleLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(168, 85, 247, 0)" />
                <stop offset="15%" stopColor="rgba(168, 85, 247, 0.6)" />
                <stop offset="25%" stopColor="rgba(255, 255, 255, 0.9)" />
                <stop offset="35%" stopColor="rgba(168, 85, 247, 1)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 1)" />
                <stop offset="65%" stopColor="rgba(168, 85, 247, 1)" />
                <stop offset="75%" stopColor="rgba(255, 255, 255, 0.9)" />
                <stop offset="85%" stopColor="rgba(168, 85, 247, 0.6)" />
                <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
              </linearGradient>
            </defs>
            <line
              x1="0"
              y1="10"
              x2="1920"
              y2="10"
              stroke="url(#scheduleLineGradient)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl overflow-hidden"
        >
          <div
            className="calendly-inline-widget w-full"
            data-url="https://calendly.com/closio/closio-onboarding?hide_gdpr_banner=1&background_color=000000&text_color=e8eef5&primary_color=6ad4f2"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </motion.div>

        {/* CTA Section with Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 relative overflow-hidden rounded-3xl border border-white/10"
          style={{
            background: '#000000',
          }}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop)',
              opacity: 0.4,
            }}
          />
          
          {/* Gradient Overlay with Purple Tint */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, rgba(40, 0, 60, 0.85) 100%)',
            }}
          />

          {/* Content - Split Layout */}
          <div className="relative z-10 p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Side - Text Content */}
            <div className="flex-1 text-left">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight"
              >
                Ready to see CLOSIO in action?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-base text-gray-300 mb-6 leading-relaxed"
              >
                Schedule your personalized demo today or reach out to our team with any questions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-200 inline-flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Book Demo Above
                </button>
                
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                  className="bg-transparent text-white font-semibold px-6 py-3 rounded-lg border-2 border-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-200 inline-flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Contact Sales
                </Link>
              </motion.div>
            </div>

            {/* Right Side - Benefits Cards */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-1 gap-4"
              >
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="text-base font-bold text-white mb-1">30-Minute Demo</div>
                  <div className="text-xs text-gray-400">Get a comprehensive overview of all features tailored to your needs.</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="text-base font-bold text-white mb-1">Expert Guidance</div>
                  <div className="text-xs text-gray-400">Our team will answer all your questions and address specific use cases.</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="text-base font-bold text-white mb-1">No Commitment</div>
                  <div className="text-xs text-gray-400">Explore the platform with zero pressure. See if CLOSIO is right for you.</div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Schedule;
