import React from 'react';
import { motion } from 'framer-motion';

const AdditionalFeatures: React.FC = () => {
  return (
    <section className="py-40 sm:py-44 md:py-48 lg:py-56 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center relative"
        >
          <div className="relative inline-block">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'calc(100% + 200px)',
                height: 'calc(100% + 120px)'
              }}
              viewBox="0 0 1000 300"
              preserveAspectRatio="none"
            >
              <path
                d="M 100 80
                   Q 100 50, 130 50
                   L 870 50
                   Q 900 50, 900 80
                   L 900 180
                   Q 900 220, 870 250
                   L 130 250
                   Q 100 250, 100 220
                   L 100 80 Z"
                fill="none"
                stroke="rgba(255, 255, 255, 0.15)"
                strokeWidth="1"
              />
            </svg>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-wide relative z-10 px-8">
              ...more advanced features
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalFeatures;
