import { motion } from 'framer-motion';

const benefits = [
  { title: 'Geographic Insights', description: 'Track deals across the country' },
  { title: 'Territory Planning', description: 'Find underserved markets' },
  { title: 'Performance Tracking', description: 'Monitor regional coverage' },
  { title: 'Real-Time Updates', description: 'See deals as they close' },
];

const DesktopMonitor = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative pb-4">
      <div
        className="relative mx-auto"
        style={{
          maxWidth: '100%',
          filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.12)) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.08))'
        }}
      >
        <div
          className="relative rounded-[16px] md:rounded-[20px] overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #e8e8ed 0%, #d8d8dd 50%, #c8c8cd 100%)',
            padding: '6px 6px 20px 6px',
          }}
        >
          <div
            className="absolute top-[8px] md:top-[10px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #3a3a3a 0%, #1a1a1a 60%, #0a0a0a 100%)',
              boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.15), 0 1px 1px rgba(0,0,0,0.3)'
            }}
          />
          <div
            className="rounded-[8px] md:rounded-[10px] overflow-hidden mt-3 md:mt-4"
            style={{
              background: '#000',
              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.05)'
            }}
          >
            {children}
          </div>
        </div>

        <div className="relative flex flex-col items-center">
          <div
            className="relative"
            style={{
              width: '8px',
              height: '50px',
              background: 'linear-gradient(90deg, #b8b8bd 0%, #d8d8dd 30%, #e8e8ed 50%, #d8d8dd 70%, #b8b8bd 100%)',
              boxShadow: '-2px 0 4px rgba(0,0,0,0.1), 2px 0 4px rgba(0,0,0,0.1)',
            }}
          />
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[12px] h-[50px]"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
            }}
          />
        </div>

        <div
          className="relative mx-auto overflow-hidden"
          style={{
            width: '140px',
            height: '10px',
            background: 'linear-gradient(180deg, #d0d0d5 0%, #c0c0c5 50%, #b0b0b5 100%)',
            borderRadius: '0 0 8px 8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.3)',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(0,0,0,0.05) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.05) 100%)',
            }}
          />
        </div>
      </div>

      <div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-[50%]"
        style={{
          width: '120px',
          height: '8px',
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, transparent 70%)',
          filter: 'blur(4px)',
        }}
      />
    </div>
  );
};

export default function DealMap() {
  return (
    <section className="py-24 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8f9fa] to-white" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-4 text-[#1a1a2e]"
          >
            Policy Map
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#4a4a5a] max-w-2xl mx-auto"
          >
            Visualize your agency's reach in real-time. Watch as policies are sold across the nation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-16 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <DesktopMonitor>
              <img
                src="/image copy copy copy copy copy copy copy.png"
                alt="Deal Map - Policies Submitted Per State"
                className="w-full h-auto block"
              />
            </DesktopMonitor>
          </motion.div>

          <div className="space-y-8 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-[#1a1a2e]">
                See Your Business<br />
                <span className="text-[#3a7ca5]">Come to Life</span>
              </h3>
            </motion.div>

            <div className="grid gap-5 md:gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-4 py-4 md:py-3"
                >
                  <div className="w-[3px] h-12 md:h-10 bg-gradient-to-b from-[#3a7ca5] to-[#2d5f7a] rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#1a1a2e] mb-1 md:mb-0.5">{benefit.title}</h4>
                    <p className="text-sm text-[#6a6a7a]">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
