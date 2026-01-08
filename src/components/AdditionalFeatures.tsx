import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AdditionalFeatures: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="pt-40 pb-28 sm:pt-44 sm:pb-32 md:pt-48 md:pb-36 lg:pt-56 lg:pb-40 bg-black">
      <div className="flex justify-center px-6">
        <motion.div
          className="glow-shell"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            position: 'relative',
            width: 'min(1100px, 92vw)',
            padding: '110px 28px 90px',
            borderRadius: '80px',
            textAlign: 'center',
            overflow: 'visible',
          }}
        >
          <style>{`
            .glow-shell::before {
              content: "";
              position: absolute;
              top: -1px;
              bottom: -1px;
              left: -20px;
              right: -20px;
              border-radius: inherit;
              background: linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.2) 0%,
                rgba(255, 255, 255, 0.08) 20%,
                rgba(255, 255, 255, 0.02) 40%,
                rgba(255, 255, 255, 0.00) 60%
              );
              filter: blur(4px);
              opacity: 0.65;
              z-index: 0;
              pointer-events: none;
            }
          `}</style>

          <div className="relative z-10 flex flex-col items-center gap-3">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-center m-0"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              style={{
                color: '#9CA3AF',
                lineHeight: 1.25,
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              The platform starts here but doesnt stop
            </motion.h2>
            <motion.p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-center m-0"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              style={{
                color: '#9CA3AF',
                lineHeight: 1.25,
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              More advanced features below
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalFeatures;
