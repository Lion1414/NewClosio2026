import { motion } from 'framer-motion';

const PoweredBySection: React.FC = () => {
  return (
    <div className="relative w-full py-20 flex flex-col items-center justify-center overflow-visible">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
          style={{
            width: '280px',
            height: '120px',
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
            borderRadius: '16px',
            border: '2px solid rgba(60, 162, 250, 0.3)',
            boxShadow: `
              0 0 30px rgba(60, 162, 250, 0.15),
              0 0 60px rgba(60, 162, 250, 0.1),
              inset 0 2px 4px rgba(255, 255, 255, 0.1)
            `,
          }}
        >
          <div className="absolute inset-0 rounded-[14px] overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 19px,
                    rgba(60, 162, 250, 0.05) 20px
                  ),
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 19px,
                    rgba(60, 162, 250, 0.05) 20px
                  )
                `,
              }}
            />
          </div>

          <div className="relative h-full flex flex-col items-center justify-center px-8 z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                Powered By
              </div>
              <div className="text-white text-3xl font-bold tracking-tight">
                CLOSIO
              </div>
            </motion.div>
          </div>

          <motion.div
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-2 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(60, 162, 250, 0.6), transparent)',
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`left-${i}`}
                className="w-3 h-1 rounded-full bg-white/20"
                animate={{
                  backgroundColor: ['rgba(255,255,255,0.2)', 'rgba(60,162,250,0.8)', 'rgba(255,255,255,0.2)'],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`right-${i}`}
                className="w-3 h-1 rounded-full bg-white/20"
                animate={{
                  backgroundColor: ['rgba(255,255,255,0.2)', 'rgba(60,162,250,0.8)', 'rgba(255,255,255,0.2)'],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2 + 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </motion.div>

        <svg
          className="absolute top-full left-1/2 -translate-x-1/2 pointer-events-none"
          width="800"
          height="200"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <linearGradient id="beam-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(60, 162, 250, 0.8)" />
              <stop offset="100%" stopColor="rgba(60, 162, 250, 0)" />
            </linearGradient>
            <linearGradient id="beam-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(106, 212, 242, 0.8)" />
              <stop offset="100%" stopColor="rgba(106, 212, 242, 0)" />
            </linearGradient>
            <linearGradient id="beam-gradient-3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.6)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <motion.line
            x1="400"
            y1="0"
            x2="150"
            y2="180"
            stroke="url(#beam-gradient-1)"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
          />

          <motion.line
            x1="400"
            y1="0"
            x2="400"
            y2="180"
            stroke="url(#beam-gradient-2)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
          />

          <motion.line
            x1="400"
            y1="0"
            x2="650"
            y2="180"
            stroke="url(#beam-gradient-3)"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.7, ease: 'easeOut' }}
          />

          <motion.circle
            cx="150"
            cy="180"
            r="4"
            fill="rgba(60, 162, 250, 0.8)"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.7 }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            style={{
              animationDuration: '2s',
              animationIterationCount: 'infinite',
            }}
          />

          <motion.circle
            cx="400"
            cy="180"
            r="4"
            fill="rgba(106, 212, 242, 0.8)"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.8 }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            style={{
              animationDuration: '2s',
              animationIterationCount: 'infinite',
            }}
          />

          <motion.circle
            cx="650"
            cy="180"
            r="4"
            fill="rgba(255, 255, 255, 0.6)"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.9 }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            style={{
              animationDuration: '2s',
              animationIterationCount: 'infinite',
            }}
          />

          {[0, 1, 2].map((index) => (
            <motion.circle
              key={`particle-${index}`}
              r="2"
              fill="rgba(60, 162, 250, 0.6)"
              initial={{ opacity: 0 }}
              animate={{
                cx: [400, index === 0 ? 150 : index === 1 ? 400 : 650],
                cy: [0, 180],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: 2 + index * 0.3,
                repeat: Infinity,
                repeatDelay: 1,
                ease: 'easeInOut',
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default PoweredBySection;
