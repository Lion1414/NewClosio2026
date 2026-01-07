import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroBackground3D from './HeroBackground3D';

const TypewriterText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [text, started]);

  return (
    <span className="relative">
      {displayedText}
      {displayedText.length < text.length && (
        <motion.span
          className="inline-block w-[2px] h-5 bg-black ml-0.5 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        />
      )}
    </span>
  );
};

const FlipButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className="demo-btn relative px-8 py-4 bg-gradient-to-r from-[#35E7E0] to-[#6ad4f2] text-black font-semibold text-base rounded-xl overflow-hidden z-30 group"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(53, 231, 224, 0.6)" }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
        animate={isHovered ? { x: ["-200%", "200%"] } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <span className="flex items-center justify-center overflow-visible h-6 relative z-10">
        Book a Demo Now
      </span>
    </motion.button>
  );
};

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen w-full text-white flex items-center relative overflow-hidden bg-black"
    >
      <motion.div style={{ opacity, scale }} className="absolute inset-0">
        <HeroBackground3D />
      </motion.div>

      <motion.div
        className="absolute right-0 top-[8%] w-[70%] lg:w-[75%] h-auto z-20 hidden md:block"
        initial={{ opacity: 0, x: 100, scale: 0.92, rotateY: 15 }}
        animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        style={{ perspective: 1000 }}
      >
        <motion.img
          src="/transparent_hero_photo.png"
          alt="Closio Dashboard"
          className="w-full h-auto object-contain drop-shadow-2xl"
          style={{
            filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))',
          }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        />
      </motion.div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-30 py-32 lg:py-0">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl lg:max-w-2xl">
          <motion.span
            className="text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-500 font-medium mb-6 relative"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-[#35E7E0] to-transparent opacity-0"
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            CLOS<em className="italic">I</em>O WAS BUILT FOR YOU
          </motion.span>

          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] -tracking-[0.02em] mb-6">
            <motion.span
              className="inline-block relative"
              initial={{ x: -50, opacity: 0, filter: "blur(20px)" }}
              animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
              <motion.span
                className="absolute -inset-2 bg-gradient-to-r from-white/20 to-transparent rounded-lg opacity-0"
                animate={{ opacity: [0, 0.3, 0], x: [0, 200] }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
              Close More.
            </motion.span>
            <br />
            <motion.span
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#35E7E0] via-[#6ad4f2] to-[#35E7E0] bg-[length:200%_auto] relative"
              initial={{ x: 50, opacity: 0, filter: "blur(20px)" }}
              animate={{
                x: 0,
                opacity: 1,
                filter: "blur(0px)",
                backgroundPosition: ["0% center", "200% center"]
              }}
              transition={{
                x: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 },
                opacity: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 },
                filter: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 },
                backgroundPosition: { duration: 3, delay: 1.2, repeat: Infinity, ease: "linear" }
              }}
              style={{
                textShadow: "0 0 30px rgba(53, 231, 224, 0.5), 0 0 60px rgba(53, 231, 224, 0.2)"
              }}
            >
              Close Smarter.
            </motion.span>
          </h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-md leading-relaxed mb-10 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.span
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-[#35E7E0] to-transparent"
              animate={{ height: ["0%", "100%"] }}
              transition={{ duration: 0.6, delay: 1.2 }}
            />
            / Trusted & Used by 1,000+ agents
          </motion.p>

          <FlipButton />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-[5]" />
    </section>
  );
};

export default Hero;
