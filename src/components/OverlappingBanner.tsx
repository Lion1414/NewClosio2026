import { motion } from 'framer-motion';

const ScrollingMarquee: React.FC = () => {
  const text = "Your All-In-One CRM";
  const repeats = 12;

  return (
    <div className="w-full overflow-hidden py-4 border-b border-white/10">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {[...Array(repeats)].map((_, i) => (
          <span key={i} className="flex items-center text-sm md:text-base font-medium tracking-wide text-black/70">
            <span className="px-6 md:px-8">{text}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#6ad4f2] to-[#5ac3e1]" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const OverlappingBanner: React.FC = () => {
  return (
    <div className="relative z-30 -mt-32 mb-[-8rem] px-4 sm:px-8 md:px-16 lg:px-24">
      <motion.div
        className="relative w-full rounded-3xl overflow-hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.3), 0 10px 30px rgba(0, 0, 0, 0.2)',
        }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <ScrollingMarquee />

        <div className="px-8 py-16 md:py-20 flex flex-col items-center justify-center text-center">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The all-in-one platform to manage your policies, track commissions, and grow your book of business.
          </motion.h2>

          <motion.p
            className="mt-6 text-base md:text-lg text-black/60 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            From lead to issue paid, Closio streamlines every step of your insurance workflow.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default OverlappingBanner;
