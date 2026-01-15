import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShinyButton } from './ui/shiny-button';

const VerticalLine: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end -0.2"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // Move down into monitor, then left out of screen
  const translateY = useTransform(scrollYProgress, [0.5, 0.75], ['0%', '50%']);
  const translateX = useTransform(scrollYProgress, [0.75, 1], ['0%', '-200%']);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none overflow-visible">
      <motion.svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          overflow: 'visible',
          translateY,
          translateX,
          opacity
        }}
      >
        <motion.path
          d="M 53 -5 L 53 28 Q 53 35, 46 35 L -5 35"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="0.45"
          fill="none"
          strokeLinecap="round"
          style={{
            pathLength,
          }}
          initial={{ pathLength: 0 }}
          transition={{
            duration: 1.8,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        />
      </motion.svg>
    </div>
  );
};

const valueItems = [
  {
    number: '01',
    title: 'Stop losing track of deals in spreadsheets'
  },
  {
    number: '02',
    title: "Know exactly what you're earning—before payday"
  },
  {
    number: '03',
    title: 'Get your team up and running in minutes, not weeks'
  },
  {
    number: '04',
    title: "See who's producing and who needs help"
  }
];

const ValueProps: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="why-closio" className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-black relative overflow-hidden">
      <div className="hidden lg:block">
        <VerticalLine />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-4 sm:mb-6">
            <span className="text-gray-400">/ Why</span>{' '}<span className="text-white">CLOS<span
              className="italic mx-0.5 sm:mx-1"
              style={{ WebkitTextStroke: '1.5px currentColor', WebkitTextFillColor: 'transparent' }}
            >I</span>O</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-[1.6] max-w-3xl mx-auto">
            Built by agents who know what it&apos;s like to juggle 100 policies, chase commissions, and wonder if that big deal actually closed. We solved the chaos—so you can focus on selling.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="relative mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-8 lg:gap-12 items-center">

            {/* Left Stat Cards */}
            <div className="flex flex-col gap-4 md:gap-6">
              {valueItems.slice(0, 2).map((item, index) => (
                <motion.div
                  key={item.number}
                  className="group relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex flex-col gap-3">
                    <span className="text-[#6ad4f2] group-hover:text-[#d593c0] text-xs font-semibold tracking-wider transition-colors duration-300">
                      {item.number}
                    </span>
                    <h3
                      className="text-sm sm:text-base font-medium text-white leading-[1.4] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#d593c0] group-hover:to-[#6ad4f2] group-hover:bg-clip-text group-hover:text-transparent"
                    >
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Central Dashboard Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                <img
                  src="/main_desktop_photo_dashboard.png"
                  alt="Closio Dashboard"
                  className="w-full h-auto rounded-2xl opacity-30"
                  style={{
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none rounded-2xl"></div>
              </div>
            </motion.div>

            {/* Right Stat Cards */}
            <div className="flex flex-col gap-4 md:gap-6">
              {valueItems.slice(2, 4).map((item, index) => (
                <motion.div
                  key={item.number}
                  className="group relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05]"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex flex-col gap-3">
                    <span className="text-[#6ad4f2] group-hover:text-[#d593c0] text-xs font-semibold tracking-wider transition-colors duration-300">
                      {item.number}
                    </span>
                    <h3
                      className="text-sm sm:text-base font-medium text-white leading-[1.4] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#d593c0] group-hover:to-[#6ad4f2] group-hover:bg-clip-text group-hover:text-transparent"
                    >
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ShinyButton onClick={() => { window.scrollTo(0, 0); navigate('/schedule'); }}>
              Get in touch
            </ShinyButton>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ValueProps;
