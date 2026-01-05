import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const HeroWhiteLine: React.FC = () => {
  return (
    <svg
      viewBox="0 0 500 700"
      className="absolute left-0 top-0 h-full w-[30vw] pointer-events-none"
      preserveAspectRatio="none"
      style={{ filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.25))' }}
    >
      <defs>
        <filter id="heroWhiteGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M 440 750 L 440 200 Q 440 130, 370 130 L -50 130"
        fill="none"
        stroke="rgba(255, 255, 255, 0.15)"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md"
      />
      <path
        d="M 440 750 L 440 200 Q 440 130, 370 130 L -50 130"
        fill="none"
        stroke="white"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#heroWhiteGlow)"
      />
    </svg>
  );
};

const HeroDrainLines: React.FC = () => {
  return (
    <svg
      viewBox="0 0 1600 700"
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="heroGlowWhite">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="heroGlowTeal">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="heroGlowPink">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="heroGlowBlack">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d="M 80 700 L 80 420 Q 80 350, 150 350 L 350 350 Q 420 350, 420 280 L 420 -100"
        fill="none"
        stroke="rgba(106, 212, 242, 0.15)"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md"
      />
      <path
        d="M 80 700 L 80 420 Q 80 350, 150 350 L 350 350 Q 420 350, 420 280 L 420 -100"
        fill="none"
        stroke="#6ad4f2"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#heroGlowTeal)"
      />

      <path
        d="M 320 700 L 320 200 Q 320 130, 250 130 L -100 130"
        fill="none"
        stroke="rgba(30, 30, 30, 0.25)"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md"
      />
      <path
        d="M 320 700 L 320 200 Q 320 130, 250 130 L -100 130"
        fill="none"
        stroke="rgba(50, 50, 50, 0.95)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#heroGlowBlack)"
      />

      <path
        d="M 480 700 L 480 300 Q 480 230, 550 230 L 680 230 Q 750 230, 750 160 L 750 -100"
        fill="none"
        stroke="rgba(213, 147, 192, 0.15)"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md"
      />
      <path
        d="M 480 700 L 480 300 Q 480 230, 550 230 L 680 230 Q 750 230, 750 160 L 750 -100"
        fill="none"
        stroke="#d593c0"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#heroGlowPink)"
      />

      <path
        d="M 1450 700 L 1450 400 Q 1450 330, 1520 330 L 1700 330"
        fill="none"
        stroke="rgba(30, 30, 30, 0.25)"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md"
      />
      <path
        d="M 1450 700 L 1450 400 Q 1450 330, 1520 330 L 1700 330"
        fill="none"
        stroke="rgba(50, 50, 50, 0.95)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#heroGlowBlack)"
      />

      <path
        d="M 1550 700 L 1550 200 Q 1550 130, 1480 130 L 1350 130 Q 1280 130, 1280 60 L 1280 -100"
        fill="none"
        stroke="rgba(106, 212, 242, 0.15)"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md"
      />
      <path
        d="M 1550 700 L 1550 200 Q 1550 130, 1480 130 L 1350 130 Q 1280 130, 1280 60 L 1280 -100"
        fill="none"
        stroke="#6ad4f2"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#heroGlowTeal)"
      />

      <path
        d="M 1380 700 L 1380 400 Q 1380 330, 1450 330 L 1700 330"
        fill="none"
        stroke="rgba(213, 147, 192, 0.15)"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md"
      />
      <path
        d="M 1380 700 L 1380 400 Q 1380 330, 1450 330 L 1700 330"
        fill="none"
        stroke="#d593c0"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#heroGlowPink)"
      />
    </svg>
  );
};

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

const MagneticButton: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    const maxDistance = 100;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < maxDistance * 2) {
      const factor = Math.max(0, 1 - distance / (maxDistance * 2));
      x.set(distanceX * factor * 0.4);
      y.set(distanceY * factor * 0.4);
      setIsHovering(true);
    } else {
      x.set(0);
      y.set(0);
      setIsHovering(false);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovering(false);
  };

  return (
    <motion.button
      ref={buttonRef}
      style={{ x: springX, y: springY }}
      className="relative px-8 py-4 bg-white text-black font-semibold text-base rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.5 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#6ad4f2]/20 to-[#d593c0]/20"
        initial={{ x: '-100%' }}
        animate={isHovering ? { x: '100%' } : { x: '-100%' }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative z-10">
        <TypewriterText text="Book a Demo Now" delay={2000} />
      </span>
    </motion.button>
  );
};

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isInHeroArea, setIsInHeroArea] = useState(false);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const buttonX = useSpring(useMotionValue(0), springConfig);
  const buttonY = useSpring(useMotionValue(0), springConfig);

  const handleHeroMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height * 0.7;

    const offsetX = (x - centerX) * 0.15;
    const offsetY = (y - centerY) * 0.15;

    const maxOffset = 80;
    const clampedX = Math.max(-maxOffset, Math.min(maxOffset, offsetX));
    const clampedY = Math.max(-maxOffset, Math.min(maxOffset, offsetY));

    buttonX.set(clampedX);
    buttonY.set(clampedY);
    setIsInHeroArea(true);
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleHeroMouseLeave = () => {
    buttonX.set(0);
    buttonY.set(0);
    setIsInHeroArea(false);
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-[85vh] w-full text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-40 pb-20 sm:pt-48 sm:pb-24 relative overflow-hidden"
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
    >
      <HeroWhiteLine />
      <div className="w-full max-w-6xl mx-auto space-y-8 sm:space-y-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12 lg:justify-center">
          <div className="lg:w-[15%]"></div>
          <div className="space-y-4 sm:space-y-6 flex items-center justify-center flex-col text-center lg:text-right lg:items-end">
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-600 font-medium">
              CLOS<em className="italic">I</em>O WAS BUILT FOR YOU
            </span>
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight max-w-4xl leading-[1.05] -tracking-[0.02em] overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ x: '-100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Close More.
              </motion.span>
              <br />
              <motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#d593c0] to-[#6ad4f2]"
                initial={{ x: '100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              >
                Close Smarter.
              </motion.span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-xl leading-relaxed px-4 sm:px-0">
              The life insurance CRM that takes you from lead to issue paid.
            </p>

            <motion.div
              className="pt-6"
              style={{ x: buttonX, y: buttonY }}
            >
              <MagneticButton />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
