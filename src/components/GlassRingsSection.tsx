import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 0, className = '', onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView && !hasStarted) {
      const startTimeout = setTimeout(() => {
        setHasStarted(true);
        setIsTyping(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }
  }, [isInView, delay, hasStarted]);

  useEffect(() => {
    if (!isTyping || !hasStarted) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        onComplete?.();
      }
    }, 45);

    return () => clearInterval(interval);
  }, [isTyping, text, hasStarted, onComplete]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {isTyping && <span className="animate-pulse">|</span>}
    </span>
  );
};

const ShieldIO = () => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '-100px 0px -100px 0px'
  });

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 400 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full max-w-[420px] mx-auto"
      initial={{ opacity: 0, scale: 0.85, y: 40 }}
      animate={isVisible
        ? { opacity: 1, scale: 1, y: 0 }
        : { opacity: 0, scale: 0.85, y: 40 }
      }
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
    <defs>
      <linearGradient id="shieldGradient3D" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
        <stop offset="25%" stopColor="#e0e0e0" stopOpacity="0.15" />
        <stop offset="50%" stopColor="#808080" stopOpacity="0.08" />
        <stop offset="75%" stopColor="#404040" stopOpacity="0.04" />
        <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0.02" />
      </linearGradient>
      <linearGradient id="shieldStroke3D" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
        <stop offset="30%" stopColor="#c0c0c0" stopOpacity="0.5" />
        <stop offset="60%" stopColor="#888888" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#444444" stopOpacity="0.15" />
      </linearGradient>
      <linearGradient id="shieldHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
        <stop offset="30%" stopColor="#ffffff" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="shieldDepth" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#000000" stopOpacity="0" />
        <stop offset="70%" stopColor="#000000" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
      </linearGradient>
      <linearGradient id="ioGradient3D" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
        <stop offset="40%" stopColor="#e8e8e8" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#b0b0b0" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="ioInnerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#808080" stopOpacity="0.6" />
        <stop offset="50%" stopColor="#404040" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#202020" stopOpacity="0.3" />
      </linearGradient>
      <linearGradient id="rimLight" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
        <stop offset="50%" stopColor="#ffffff" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
      </linearGradient>
      <filter id="shieldShadow3D" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="15" stdDeviation="25" floodColor="#000000" floodOpacity="0.4" />
        <feDropShadow dx="0" dy="5" stdDeviation="10" floodColor="#000000" floodOpacity="0.3" />
        <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#ffffff" floodOpacity="0.1" />
      </filter>
      <filter id="ioShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.5" />
        <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000000" floodOpacity="0.3" />
      </filter>
      <filter id="ioGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="glow" />
        <feMerge>
          <feMergeNode in="glow" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="innerBevel" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
        <feOffset dx="1" dy="1" result="offsetBlur" />
        <feFlood floodColor="#ffffff" floodOpacity="0.3" result="white" />
        <feComposite in="white" in2="offsetBlur" operator="in" result="highlight" />
        <feOffset in="SourceAlpha" dx="-1" dy="-1" result="offsetBlur2" />
        <feGaussianBlur in="offsetBlur2" stdDeviation="2" result="blur2" />
        <feFlood floodColor="#000000" floodOpacity="0.4" result="black" />
        <feComposite in="black" in2="blur2" operator="in" result="shadow" />
        <feMerge>
          <feMergeNode in="shadow" />
          <feMergeNode in="highlight" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <clipPath id="shieldClip">
        <path d="M200 20 C200 20 340 40 360 60 C380 80 385 120 385 160 C385 280 340 380 200 460 C60 380 15 280 15 160 C15 120 20 80 40 60 C60 40 200 20 200 20 Z" />
      </clipPath>
    </defs>

    <g filter="url(#shieldShadow3D)">
      <path
        d="M200 20 C200 20 340 40 360 60 C380 80 385 120 385 160 C385 280 340 380 200 460 C60 380 15 280 15 160 C15 120 20 80 40 60 C60 40 200 20 200 20 Z"
        fill="url(#shieldGradient3D)"
      />
      <path
        d="M200 20 C200 20 340 40 360 60 C380 80 385 120 385 160 C385 280 340 380 200 460 C60 380 15 280 15 160 C15 120 20 80 40 60 C60 40 200 20 200 20 Z"
        fill="url(#shieldDepth)"
      />
      <path
        d="M200 20 C200 20 340 40 360 60 C380 80 385 120 385 160 C385 280 340 380 200 460 C60 380 15 280 15 160 C15 120 20 80 40 60 C60 40 200 20 200 20 Z"
        fill="none"
        stroke="url(#shieldStroke3D)"
        strokeWidth="2.5"
      />

      <path
        d="M200 30 C200 30 330 47 348 65 C366 83 370 118 370 155 C370 268 328 365 200 440 C72 365 30 268 30 155 C30 118 34 83 52 65 C70 47 200 30 200 30 Z"
        fill="none"
        stroke="url(#shieldStroke3D)"
        strokeWidth="1.5"
        strokeOpacity="0.4"
      />

      <path
        d="M200 42 C200 42 318 57 333 73 C348 89 352 120 352 152 C352 255 314 342 200 410 C86 342 48 255 48 152 C48 120 52 89 67 73 C82 57 200 42 200 42 Z"
        fill="url(#shieldHighlight)"
      />

      <path
        d="M200 25 C200 25 300 38 330 55"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeOpacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M70 55 C100 38 200 25 200 25"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeOpacity="0.2"
        strokeLinecap="round"
      />
    </g>

    <g filter="url(#ioGlow)">
      <g transform="translate(200, 210)" filter="url(#ioShadow)">
        <path
          d="M-68 -60 L-38 -60 L-38 -48 L-56 -48 L-56 48 L-38 48 L-38 60 L-68 60 L-68 48 L-50 48 L-50 -48 L-68 -48 Z"
          fill="url(#ioGradient3D)"
          transform="skewX(-6)"
          filter="url(#innerBevel)"
        />
        <path
          d="M-62 -48 L-44 -48 L-44 48 L-62 48 Z"
          fill="url(#ioInnerGradient)"
          transform="skewX(-6)"
        />

        <circle
          cx="50"
          cy="0"
          r="58"
          fill="none"
          stroke="url(#ioGradient3D)"
          strokeWidth="24"
          filter="url(#innerBevel)"
        />
        <circle
          cx="50"
          cy="0"
          r="58"
          fill="none"
          stroke="url(#rimLight)"
          strokeWidth="2"
          strokeOpacity="0.6"
        />
        <circle
          cx="50"
          cy="0"
          r="46"
          fill="none"
          stroke="url(#ioInnerGradient)"
          strokeWidth="1"
          strokeOpacity="0.5"
        />
      </g>
    </g>

    <ellipse cx="200" cy="220" rx="90" ry="70" fill="none" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
  </motion.svg>
  );
};

const GlassRingsSection = () => {
  const [line1Complete, setLine1Complete] = useState(false);

  const featureItems = [
    {
      title: 'Bank-Level Security',
      description: 'Enterprise-grade encryption and security protocols protect your data 24/7.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Expert Team Support',
      description: 'Our experienced team is dedicated to your success, every step of the way.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Continuous Innovation',
      description: 'Regular updates and new features keep our CRM ahead of the curve.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M12 2v4m0 12v4M2 12h4m12 0h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-24 lg:py-36 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.03)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,255,255,0.02)_0%,_transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          <div className="relative z-10 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="text-white/80 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                Secure & Reliable Platform
              </span>
            </motion.div>

            <div className="space-y-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                <span className="block text-white min-h-[1.2em]">
                  <TypewriterText
                    text="Built by Experts"
                    delay={300}
                    onComplete={() => setLine1Complete(true)}
                  />
                </span>
                <span className="block text-white/70 min-h-[1.2em]">
                  {line1Complete && (
                    <TypewriterText
                      text="Built for You"
                      delay={100}
                    />
                  )}
                </span>
              </h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-white/50 leading-relaxed max-w-lg"
            >
              CLOSIO is powered by a dedicated team of industry professionals committed to delivering
              enterprise-grade security and continuous innovation. Your data and success are our top priorities.
            </motion.p>

            <div className="space-y-4 pt-6">
              {featureItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative p-5 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 left-0 w-24 h-24 bg-white/[0.03] rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 text-white/70 group-hover:text-white group-hover:border-white/20 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold text-base mb-1 group-hover:text-white transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/50 transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-3xl blur-3xl" />
            <div className="w-full h-[500px] lg:h-[650px] flex items-center justify-center bg-black rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_60%)]" />
              <ShieldIO />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlassRingsSection;
