import { motion } from 'framer-motion';

const OverlappingBanner: React.FC = () => {
  return (
    <div className="relative z-10 -mt-16 mb-[-8rem] px-4 sm:px-8 md:px-16 lg:px-24">
      <motion.div
        className="relative w-full rounded-3xl overflow-hidden backdrop-blur-2xl border border-white/10"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(0, 0, 0, 0.15) 50%, rgba(255, 255, 255, 0.04) 100%)',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.4), 0 10px 30px rgba(0, 0, 0, 0.3), inset 0 0.5px 0 rgba(255, 255, 255, 0.1)',
        }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="px-8 py-16 md:py-20 flex flex-col items-center justify-center text-center">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The <span className="relative inline-block">
              <span className="relative z-10">all-in-one</span>
              <span className="absolute inset-0 bg-[#3ca2fa]/20 rounded-full blur-sm scale-110"></span>
            </span> platform to{' '}
            <span className="relative">
              <span className="text-[#6ad4f2]">manage</span>
              <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-[#3ca2fa]"></span>
            </span>{' '}
            your policies,{' '}
            <span className="relative">
              <span className="text-[#6ad4f2]">track</span>
              <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-[#3ca2fa]"></span>
            </span>{' '}
            commissions, and{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#6ad4f2]">grow</span>
              <span className="absolute inset-0 border-2 border-[#3ca2fa]/40 rounded-full scale-125"></span>
            </span>{' '}
            your book of business.
          </motion.h2>

          <motion.p
            className="mt-6 text-base md:text-lg text-white/70 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            From <span className="text-[#6ad4f2] font-medium">lead</span> to{' '}
            <span className="text-[#6ad4f2] font-medium">issue paid</span>,{' '}
            <span className="relative inline-block">
              <span className="font-semibold text-white">Closio</span>
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#3ca2fa] to-[#6ad4f2]"></span>
            </span>{' '}
            streamlines every step of your insurance workflow.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default OverlappingBanner;
