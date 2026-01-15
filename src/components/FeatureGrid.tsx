import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import PoweredBySection from './PoweredBySection';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 0, className = '' }) => {
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
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isTyping, text, hasStarted]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {isTyping && <span className="animate-pulse">|</span>}
    </span>
  );
};

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  repeatDelay: number;
}

const SparkleEffect: React.FC<{ isHovered: boolean; isDashboard: boolean }> = ({ isHovered, isDashboard }) => {
  const particles = useMemo<Sparkle[]>(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      size: Math.random() * 3 + 1.5,
      delay: Math.random() * 0.6,
      repeatDelay: 0,
    })),
  []);

  return (
    <AnimatePresence>
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl z-20">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ opacity: 0, scale: 0, y: 0 }}
              animate={{
                opacity: [0, 0.8, 0.6, 0],
                scale: [0, 1, 1, 0.5],
                y: [0, -20, -40, -60],
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 3.0,
                delay: particle.delay,
                ease: 'easeOut',
              }}
              className={`absolute rounded-full ${isDashboard ? 'bg-black' : 'bg-white'}`}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
                boxShadow: isDashboard
                  ? '0 0 4px rgba(0, 0, 0, 0.6)'
                  : '0 0 4px rgba(255, 255, 255, 0.6)',
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

const BookIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="bookBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#000000" />
        <stop offset="100%" stopColor="#0D0D0D" />
      </linearGradient>
      <linearGradient id="dealCard1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.04" />
      </linearGradient>
      <linearGradient id="dealCard2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
      </linearGradient>
      <linearGradient id="dealCard3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
      </linearGradient>
      <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feFlood floodColor="#8b5cf6" floodOpacity="0.25" />
        <feComposite in2="blur" operator="in" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="dealShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="6" />
        <feOffset dx="0" dy="4" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <rect width="200" height="200" fill="url(#bookBg)" />

    <g filter="url(#dealShadow)" opacity="0.35">
      <rect x="8" y="125" width="184" height="70" rx="16" fill="url(#dealCard3)" stroke="#ffffff" strokeWidth="0.3" strokeOpacity="0.06" />
      <text x="20" y="145" fontSize="10" fill="#9ca3af" opacity="0.55" fontWeight="500">S. Anderson</text>
      <text x="20" y="161" fontSize="8" fill="#6b7280" opacity="0.5">Term Life Policy</text>
      <text x="180" y="161" fontSize="11" fill="#8b5cf6" opacity="0.6" textAnchor="end" fontWeight="600">$8,200</text>
      <text x="180" y="173" fontSize="7" fill="#a78bfa" opacity="0.5" textAnchor="end">Annual</text>
      <rect x="20" y="178" width="34" height="12" rx="6" fill="#6366f1" opacity="0.18" />
      <text x="37" y="186" fontSize="7" fill="#818cf8" opacity="0.6" textAnchor="middle">Active</text>
    </g>

    <g filter="url(#dealShadow)" opacity="0.55">
      <rect x="6" y="68" width="188" height="75" rx="17" fill="url(#dealCard2)" stroke="#ffffff" strokeWidth="0.35" strokeOpacity="0.08" />
      <text x="18" y="89" fontSize="11" fill="#d1d5db" opacity="0.6" fontWeight="500">M. Rodriguez</text>
      <text x="18" y="106" fontSize="9" fill="#9ca3af" opacity="0.58">Whole Life Policy</text>
      <text x="186" y="106" fontSize="12" fill="#8b5cf6" opacity="0.7" textAnchor="end" fontWeight="600">$12,450</text>
      <text x="186" y="119" fontSize="7.5" fill="#a78bfa" opacity="0.6" textAnchor="end">Annual</text>
      <rect x="18" y="125" width="40" height="13" rx="6.5" fill="#7c3aed" opacity="0.22" />
      <text x="38" y="133.5" fontSize="7.5" fill="#a78bfa" opacity="0.7" textAnchor="middle">Pending</text>
    </g>

    <g filter="url(#dealShadow)" opacity="1">
      <rect x="4" y="4" width="192" height="82" rx="18" fill="url(#dealCard1)" stroke="#ffffff" strokeWidth="0.4" strokeOpacity="0.12" />
      <circle cx="20" cy="28" r="10" fill="#8b5cf6" opacity="0.32" filter="url(#softGlow)" />
      <text x="20" y="32" fontSize="8" fill="#ffffff" opacity="0.85" textAnchor="middle" fontWeight="700">JD</text>

      <text x="36" y="25" fontSize="12" fill="#f9fafb" opacity="0.8" fontWeight="600">Jennifer Davis</text>
      <text x="36" y="40" fontSize="9.5" fill="#d1d5db" opacity="0.7">Universal Life Policy</text>

      <text x="190" y="30" fontSize="15" fill="#8b5cf6" opacity="0.9" textAnchor="end" fontWeight="700" filter="url(#softGlow)">$18,900</text>
      <text x="190" y="43" fontSize="8" fill="#a78bfa" opacity="0.75" textAnchor="end">Annual Premium</text>

      <rect x="36" y="54" width="44" height="15" rx="7.5" fill="#7c3aed" opacity="0.32" />
      <text x="58" y="63.5" fontSize="8" fill="#c4b5fd" opacity="0.9" textAnchor="middle" fontWeight="500">In Review</text>

      <rect x="86" y="54" width="30" height="15" rx="7.5" fill="#6366f1" opacity="0.28" />
      <text x="101" y="63.5" fontSize="7.5" fill="#818cf8" opacity="0.8" textAnchor="middle">+New</text>
    </g>
  </svg>
);

const HierarchyIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="hierBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#000000" />
        <stop offset="100%" stopColor="#0D0D0D" />
      </linearGradient>
      <linearGradient id="hierNode1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="hierNode2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.18" />
      </linearGradient>
      <linearGradient id="hierNode3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9ca3af" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#6b7280" stopOpacity="0.15" />
      </linearGradient>
      <filter id="hierGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feFlood floodColor="#8b5cf6" floodOpacity="0.3" />
        <feComposite in2="blur" operator="in" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="nodeShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" />
        <feOffset dx="0" dy="2" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.4" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <rect width="200" height="200" fill="url(#hierBg)" />

    <g opacity="0.25">
      <line x1="100" y1="55" x2="60" y2="95" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.3" />
      <line x1="100" y1="55" x2="140" y2="95" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.3" />
      <line x1="60" y1="125" x2="40" y2="160" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.25" />
      <line x1="60" y1="125" x2="80" y2="160" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.25" />
      <line x1="140" y1="125" x2="120" y2="160" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.25" />
      <line x1="140" y1="125" x2="160" y2="160" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.25" />
    </g>

    <g opacity="0.6">
      <line x1="100" y1="55" x2="60" y2="95" stroke="#9ca3af" strokeWidth="2" strokeOpacity="0.4" strokeDasharray="3,3" />
      <line x1="100" y1="55" x2="140" y2="95" stroke="#9ca3af" strokeWidth="2" strokeOpacity="0.4" strokeDasharray="3,3" />
      <line x1="60" y1="125" x2="40" y2="160" stroke="#6b7280" strokeWidth="1.8" strokeOpacity="0.35" strokeDasharray="2,2" />
      <line x1="60" y1="125" x2="80" y2="160" stroke="#6b7280" strokeWidth="1.8" strokeOpacity="0.35" strokeDasharray="2,2" />
      <line x1="140" y1="125" x2="120" y2="160" stroke="#6b7280" strokeWidth="1.8" strokeOpacity="0.35" strokeDasharray="2,2" />
      <line x1="140" y1="125" x2="160" y2="160" stroke="#6b7280" strokeWidth="1.8" strokeOpacity="0.35" strokeDasharray="2,2" />
    </g>

    <g filter="url(#nodeShadow)">
      <rect x="75" y="25" width="50" height="40" rx="12" fill="url(#hierNode1)" stroke="#a78bfa" strokeWidth="2" strokeOpacity="0.4" />
      <circle cx="100" cy="35" r="5" fill="#c4b5fd" opacity="0.6" filter="url(#hierGlow)" />
      <text x="100" y="52" fontSize="7" fill="#e9d5ff" opacity="0.8" textAnchor="middle" fontWeight="600">Director</text>
      <text x="100" y="60" fontSize="6" fill="#d8b4fe" opacity="0.6" textAnchor="middle">$280K</text>
    </g>

    <g filter="url(#nodeShadow)">
      <rect x="35" y="95" width="50" height="40" rx="10" fill="url(#hierNode2)" stroke="#8b5cf6" strokeWidth="1.8" strokeOpacity="0.35" />
      <circle cx="60" cy="105" r="4" fill="#a78bfa" opacity="0.55" />
      <text x="60" y="120" fontSize="6.5" fill="#c4b5fd" opacity="0.75" textAnchor="middle" fontWeight="500">Manager</text>
      <text x="60" y="128" fontSize="5.5" fill="#a78bfa" opacity="0.55" textAnchor="middle">$145K</text>
    </g>

    <g filter="url(#nodeShadow)">
      <rect x="115" y="95" width="50" height="40" rx="10" fill="url(#hierNode2)" stroke="#8b5cf6" strokeWidth="1.8" strokeOpacity="0.35" />
      <circle cx="140" cy="105" r="4" fill="#a78bfa" opacity="0.55" />
      <text x="140" y="120" fontSize="6.5" fill="#c4b5fd" opacity="0.75" textAnchor="middle" fontWeight="500">Manager</text>
      <text x="140" y="128" fontSize="5.5" fill="#a78bfa" opacity="0.55" textAnchor="middle">$152K</text>
    </g>

    <g filter="url(#nodeShadow)">
      <rect x="15" y="160" width="50" height="35" rx="8" fill="url(#hierNode3)" stroke="#6b7280" strokeWidth="1.5" strokeOpacity="0.3" />
      <circle cx="40" cy="168" r="3" fill="#9ca3af" opacity="0.5" />
      <text x="40" y="181" fontSize="6" fill="#d1d5db" opacity="0.65" textAnchor="middle">Agent</text>
      <text x="40" y="188" fontSize="5" fill="#9ca3af" opacity="0.5" textAnchor="middle">$42K</text>
    </g>

    <g filter="url(#nodeShadow)">
      <rect x="55" y="160" width="50" height="35" rx="8" fill="url(#hierNode3)" stroke="#6b7280" strokeWidth="1.5" strokeOpacity="0.3" />
      <circle cx="80" cy="168" r="3" fill="#9ca3af" opacity="0.5" />
      <text x="80" y="181" fontSize="6" fill="#d1d5db" opacity="0.65" textAnchor="middle">Agent</text>
      <text x="80" y="188" fontSize="5" fill="#9ca3af" opacity="0.5" textAnchor="middle">$38K</text>
    </g>

    <g filter="url(#nodeShadow)">
      <rect x="95" y="160" width="50" height="35" rx="8" fill="url(#hierNode3)" stroke="#6b7280" strokeWidth="1.5" strokeOpacity="0.3" />
      <circle cx="120" cy="168" r="3" fill="#9ca3af" opacity="0.5" />
      <text x="120" y="181" fontSize="6" fill="#d1d5db" opacity="0.65" textAnchor="middle">Agent</text>
      <text x="120" y="188" fontSize="5" fill="#9ca3af" opacity="0.5" textAnchor="middle">$51K</text>
    </g>

    <g filter="url(#nodeShadow)">
      <rect x="135" y="160" width="50" height="35" rx="8" fill="url(#hierNode3)" stroke="#6b7280" strokeWidth="1.5" strokeOpacity="0.3" />
      <circle cx="160" cy="168" r="3" fill="#9ca3af" opacity="0.5" />
      <text x="160" y="181" fontSize="6" fill="#d1d5db" opacity="0.65" textAnchor="middle">Agent</text>
      <text x="160" y="188" fontSize="5" fill="#9ca3af" opacity="0.5" textAnchor="middle">$47K</text>
    </g>
  </svg>
);

const CommissionIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <radialGradient id="coinTop" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="30%" stopColor="#f9fafb" />
        <stop offset="60%" stopColor="#e5e7eb" />
        <stop offset="100%" stopColor="#d1d5db" />
      </radialGradient>
      <linearGradient id="coinEdge" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#9ca3af" />
        <stop offset="50%" stopColor="#6b7280" />
        <stop offset="100%" stopColor="#4b5563" />
      </linearGradient>
      <linearGradient id="coinRim" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#d1d5db" />
        <stop offset="50%" stopColor="#f3f4f6" />
        <stop offset="100%" stopColor="#d1d5db" />
      </linearGradient>
      <filter id="coinShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="4" dy="7" stdDeviation="8" floodColor="#000" floodOpacity="0.5" />
      </filter>
      <filter id="coinSheen" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g filter="url(#coinShadow)" opacity="0.7">
      <ellipse cx="60" cy="155" rx="32" ry="14" fill="#4b5563" />
      <ellipse cx="60" cy="149" rx="32" ry="14" fill="#6b7280" />
      <ellipse cx="60" cy="143" rx="32" ry="14" fill="#9ca3af" />
      <ellipse cx="60" cy="137" rx="32" ry="14" fill="url(#coinEdge)" />
      <ellipse cx="60" cy="134" rx="32" ry="14" fill="url(#coinTop)" filter="url(#coinSheen)" />
      <ellipse cx="60" cy="134" rx="29" ry="12" fill="none" stroke="url(#coinRim)" strokeWidth="1.5" opacity="0.6" />
      <ellipse cx="48" cy="130" rx="6" ry="4" fill="#ffffff" opacity="0.4" />
      <text x="60" y="140" fontSize="18" fontWeight="bold" fill="#6b7280" textAnchor="middle" opacity="0.7">$</text>
    </g>

    <g filter="url(#coinShadow)" opacity="0.85">
      <ellipse cx="140" cy="160" rx="32" ry="14" fill="#374151" />
      <ellipse cx="140" cy="153" rx="32" ry="14" fill="#4b5563" />
      <ellipse cx="140" cy="146" rx="32" ry="14" fill="#6b7280" />
      <ellipse cx="140" cy="139" rx="32" ry="14" fill="#9ca3af" />
      <ellipse cx="140" cy="132" rx="32" ry="14" fill="#d1d5db" />
      <ellipse cx="140" cy="128" rx="32" ry="14" fill="url(#coinEdge)" />
      <ellipse cx="140" cy="125" rx="32" ry="14" fill="url(#coinTop)" filter="url(#coinSheen)" />
      <ellipse cx="140" cy="125" rx="29" ry="12" fill="none" stroke="url(#coinRim)" strokeWidth="1.5" opacity="0.6" />
      <ellipse cx="128" cy="121" rx="6" ry="4" fill="#ffffff" opacity="0.4" />
      <text x="140" y="131" fontSize="18" fontWeight="bold" fill="#6b7280" textAnchor="middle" opacity="0.7">$</text>
    </g>

    <g filter="url(#coinShadow)">
      <ellipse cx="100" cy="128" rx="40" ry="18" fill="#374151" />
      <ellipse cx="100" cy="120" rx="40" ry="18" fill="#4b5563" />
      <ellipse cx="100" cy="112" rx="40" ry="18" fill="#6b7280" />
      <ellipse cx="100" cy="104" rx="40" ry="18" fill="#9ca3af" />
      <ellipse cx="100" cy="96" rx="40" ry="18" fill="#d1d5db" />
      <ellipse cx="100" cy="88" rx="40" ry="18" fill="#e5e7eb" />
      <ellipse cx="100" cy="82" rx="40" ry="18" fill="url(#coinEdge)" />
      <ellipse cx="100" cy="78" rx="40" ry="18" fill="url(#coinTop)" filter="url(#coinSheen)" />
      <ellipse cx="100" cy="78" rx="36" ry="15" fill="none" stroke="url(#coinRim)" strokeWidth="2" opacity="0.7" />
      <ellipse cx="85" cy="73" rx="8" ry="5" fill="#ffffff" opacity="0.5" />
      <text x="100" y="85" fontSize="24" fontWeight="bold" fill="#6b7280" textAnchor="middle" opacity="0.8">$</text>
    </g>

    <g opacity="0.8" filter="url(#coinSheen)">
      <path d="M160 70 L160 38 L152 46 M160 38 L168 46" stroke="#e5e7eb" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M172 82 L172 50 L164 58 M172 50 L180 58" stroke="#9ca3af" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    </g>

    <g opacity="0.6">
      <text x="35" y="50" fontSize="20" fontWeight="bold" fill="#e5e7eb">$</text>
      <text x="52" y="38" fontSize="16" fontWeight="bold" fill="#9ca3af">$</text>
      <text x="22" y="68" fontSize="14" fontWeight="bold" fill="#6b7280">$</text>
    </g>
  </svg>
);

const DashboardIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="barFrontCyan" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="30%" stopColor="#f9fafb" />
        <stop offset="70%" stopColor="#e5e7eb" />
        <stop offset="100%" stopColor="#d1d5db" />
      </linearGradient>
      <linearGradient id="barSideCyan" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#d1d5db" />
        <stop offset="50%" stopColor="#9ca3af" />
        <stop offset="100%" stopColor="#6b7280" />
      </linearGradient>
      <linearGradient id="barTopCyan" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f3f4f6" />
        <stop offset="50%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#ffffff" />
      </linearGradient>
      <linearGradient id="barHighlightCyan" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
        <stop offset="50%" stopColor="#ffffff" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
      <filter id="barShadowCyan" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="5" stdDeviation="6" floodColor="#000000" floodOpacity="0.3" />
      </filter>
      <filter id="barGlowCyan" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <line x1="25" y1="45" x2="25" y2="160" stroke="#ffffff" strokeWidth="2.5" opacity="0.5" strokeLinecap="round" />
    <line x1="25" y1="160" x2="180" y2="160" stroke="#ffffff" strokeWidth="2.5" opacity="0.5" strokeLinecap="round" />

    <line x1="25" y1="70" x2="180" y2="70" stroke="#ffffff" strokeWidth="1" opacity="0.15" strokeDasharray="4 4" />
    <line x1="25" y1="100" x2="180" y2="100" stroke="#ffffff" strokeWidth="1" opacity="0.15" strokeDasharray="4 4" />
    <line x1="25" y1="130" x2="180" y2="130" stroke="#ffffff" strokeWidth="1" opacity="0.15" strokeDasharray="4 4" />

    <g filter="url(#barShadowCyan)">
      <rect x="38" y="118" width="20" height="42" rx="2" fill="url(#barFrontCyan)" />
      <path d="M38 118 L58 118 L66 110 L46 110 Z" fill="url(#barTopCyan)" />
      <path d="M58 118 L58 160 L66 152 L66 110 Z" fill="url(#barSideCyan)" />
      <rect x="38" y="118" width="3" height="42" fill="#ffffff" opacity="0.25" />
      <rect x="43" y="118" width="10" height="42" fill="url(#barHighlightCyan)" />
    </g>

    <g filter="url(#barShadowCyan)">
      <rect x="66" y="88" width="20" height="72" rx="2" fill="url(#barFrontCyan)" />
      <path d="M66 88 L86 88 L94 80 L74 80 Z" fill="url(#barTopCyan)" />
      <path d="M86 88 L86 160 L94 152 L94 80 Z" fill="url(#barSideCyan)" />
      <rect x="66" y="88" width="3" height="72" fill="#ffffff" opacity="0.25" />
      <rect x="71" y="88" width="10" height="72" fill="url(#barHighlightCyan)" />
    </g>

    <g filter="url(#barShadowCyan)">
      <rect x="94" y="55" width="20" height="105" rx="2" fill="url(#barFrontCyan)" />
      <path d="M94 55 L114 55 L122 47 L102 47 Z" fill="url(#barTopCyan)" />
      <path d="M114 55 L114 160 L122 152 L122 47 Z" fill="url(#barSideCyan)" />
      <rect x="94" y="55" width="3" height="105" fill="#ffffff" opacity="0.25" />
      <rect x="99" y="55" width="10" height="105" fill="url(#barHighlightCyan)" />
    </g>

    <g filter="url(#barShadowCyan)">
      <rect x="122" y="98" width="20" height="62" rx="2" fill="url(#barFrontCyan)" />
      <path d="M122 98 L142 98 L150 90 L130 90 Z" fill="url(#barTopCyan)" />
      <path d="M142 98 L142 160 L150 152 L150 90 Z" fill="url(#barSideCyan)" />
      <rect x="122" y="98" width="3" height="62" fill="#ffffff" opacity="0.25" />
      <rect x="127" y="98" width="10" height="62" fill="url(#barHighlightCyan)" />
    </g>

    <g filter="url(#barShadowCyan)">
      <rect x="150" y="72" width="20" height="88" rx="2" fill="url(#barFrontCyan)" />
      <path d="M150 72 L170 72 L178 64 L158 64 Z" fill="url(#barTopCyan)" />
      <path d="M170 72 L170 160 L178 152 L178 64 Z" fill="url(#barSideCyan)" />
      <rect x="150" y="72" width="3" height="88" fill="#ffffff" opacity="0.25" />
      <rect x="155" y="72" width="10" height="88" fill="url(#barHighlightCyan)" />
    </g>

    <polyline
      points="48,113 76,83 104,50 132,93 160,67"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3.5"
      opacity="0.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#barGlowCyan)"
    />
    <circle cx="48" cy="113" r="5" fill="#cffafe" stroke="#ffffff" strokeWidth="2.5" filter="url(#barGlowCyan)" />
    <circle cx="76" cy="83" r="5" fill="#cffafe" stroke="#ffffff" strokeWidth="2.5" filter="url(#barGlowCyan)" />
    <circle cx="104" cy="50" r="5" fill="#cffafe" stroke="#ffffff" strokeWidth="2.5" filter="url(#barGlowCyan)" />
    <circle cx="132" cy="93" r="5" fill="#cffafe" stroke="#ffffff" strokeWidth="2.5" filter="url(#barGlowCyan)" />
    <circle cx="160" cy="67" r="5" fill="#cffafe" stroke="#ffffff" strokeWidth="2.5" filter="url(#barGlowCyan)" />
    <circle cx="48" cy="113" r="2" fill="#ffffff" opacity="0.8" />
    <circle cx="76" cy="83" r="2" fill="#ffffff" opacity="0.8" />
    <circle cx="104" cy="50" r="2" fill="#ffffff" opacity="0.8" />
    <circle cx="132" cy="93" r="2" fill="#ffffff" opacity="0.8" />
    <circle cx="160" cy="67" r="2" fill="#ffffff" opacity="0.8" />
  </svg>
);

const MedalsIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <radialGradient id="goldGrad" cx="35%" cy="35%">
        <stop offset="0%" stopColor="#fef3c7" />
        <stop offset="20%" stopColor="#fcd34d" />
        <stop offset="50%" stopColor="#fbbf24" />
        <stop offset="80%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#b8860b" />
      </radialGradient>
      <radialGradient id="goldInner" cx="40%" cy="40%">
        <stop offset="0%" stopColor="#fffbeb" />
        <stop offset="30%" stopColor="#fef3c7" />
        <stop offset="70%" stopColor="#fde68a" />
        <stop offset="100%" stopColor="#fbbf24" />
      </radialGradient>
      <radialGradient id="silverGrad" cx="35%" cy="35%">
        <stop offset="0%" stopColor="#f9fafb" />
        <stop offset="20%" stopColor="#e5e7eb" />
        <stop offset="60%" stopColor="#d1d5db" />
        <stop offset="90%" stopColor="#9ca3af" />
        <stop offset="100%" stopColor="#6b7280" />
      </radialGradient>
      <radialGradient id="silverInner" cx="40%" cy="40%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="40%" stopColor="#f9fafb" />
        <stop offset="80%" stopColor="#e5e7eb" />
        <stop offset="100%" stopColor="#d1d5db" />
      </radialGradient>
      <radialGradient id="bronzeGrad" cx="35%" cy="35%">
        <stop offset="0%" stopColor="#fb923c" />
        <stop offset="30%" stopColor="#d97706" />
        <stop offset="70%" stopColor="#b45309" />
        <stop offset="90%" stopColor="#92400e" />
        <stop offset="100%" stopColor="#78350f" />
      </radialGradient>
      <radialGradient id="bronzeInner" cx="40%" cy="40%">
        <stop offset="0%" stopColor="#fef3c7" />
        <stop offset="30%" stopColor="#fcd34d" />
        <stop offset="70%" stopColor="#d97706" />
        <stop offset="100%" stopColor="#b45309" />
      </radialGradient>
      <linearGradient id="ribbonGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fcd34d" />
        <stop offset="50%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#b8860b" />
      </linearGradient>
      <linearGradient id="ribbonGoldFold" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#92400e" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
      <linearGradient id="ribbonSilver" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f3f4f6" />
        <stop offset="50%" stopColor="#d1d5db" />
        <stop offset="100%" stopColor="#6b7280" />
      </linearGradient>
      <linearGradient id="ribbonBronze" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fb923c" />
        <stop offset="50%" stopColor="#d97706" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>
      <filter id="medalShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="4" dy="7" stdDeviation="8" floodColor="#000" floodOpacity="0.55" />
      </filter>
      <filter id="medalGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="goldShine" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g filter="url(#medalShadow)">
      <path d="M48 30 L48 80 L55 85 L62 80 L62 30 Z" fill="url(#ribbonSilver)" />
      <path d="M48 30 L55 35 L55 85 L48 80 Z" fill="#9ca3af" opacity="0.5" />
      <circle cx="55" cy="110" r="35" fill="url(#silverGrad)" filter="url(#medalGlow)" />
      <circle cx="55" cy="110" r="28" fill="url(#silverInner)" />
      <circle cx="55" cy="110" r="20" fill="url(#silverGrad)" opacity="0.8" />
      <ellipse cx="45" cy="100" rx="8" ry="10" fill="#ffffff" opacity="0.4" />
      <text x="55" y="117" fontSize="20" fontWeight="bold" fill="#4b5563" textAnchor="middle">3</text>
    </g>

    <g filter="url(#medalShadow)">
      <path d="M138 30 L138 80 L145 85 L152 80 L152 30 Z" fill="url(#ribbonBronze)" />
      <path d="M138 30 L145 35 L145 85 L138 80 Z" fill="#92400e" opacity="0.4" />
      <circle cx="145" cy="110" r="35" fill="url(#bronzeGrad)" filter="url(#medalGlow)" />
      <circle cx="145" cy="110" r="28" fill="url(#bronzeInner)" />
      <circle cx="145" cy="110" r="20" fill="url(#bronzeGrad)" opacity="0.8" />
      <ellipse cx="135" cy="100" rx="8" ry="10" fill="#fcd34d" opacity="0.4" />
      <text x="145" y="117" fontSize="20" fontWeight="bold" fill="#78350f" textAnchor="middle">2</text>
    </g>

    <g filter="url(#medalShadow)">
      <path d="M92 20 L92 55 L100 62 L108 55 L108 20 Z" fill="url(#ribbonGold)" />
      <path d="M92 20 L100 26 L100 62 L92 55 Z" fill="url(#ribbonGoldFold)" opacity="0.6" />
      <circle cx="100" cy="90" r="42" fill="url(#goldGrad)" filter="url(#goldShine)" />
      <circle cx="100" cy="90" r="34" fill="url(#goldInner)" />
      <circle cx="100" cy="90" r="24" fill="url(#goldGrad)" opacity="0.85" />
      <ellipse cx="88" cy="78" rx="10" ry="12" fill="#fffbeb" opacity="0.6" />
      <circle cx="100" cy="90" r="42" fill="none" stroke="#fef3c7" strokeWidth="2" opacity="0.3" />
      <text x="100" y="98" fontSize="24" fontWeight="bold" fill="#92400e" textAnchor="middle">1</text>
    </g>
  </svg>
);

const HorizontalLine: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0"]
  });

  // Draw the line left to right quickly when halfway through section
  const pathLength = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Then move down and fade out
  const translateY = useTransform(scrollYProgress, [0.3, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0.3, 0.7, 1], [1, 0.5, 0]);

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none overflow-visible">
      <motion.svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          overflow: 'visible',
          translateY,
          opacity
        }}
      >
        <motion.path
          d="M 0 50 L 100 50"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="0.45"
          fill="none"
          strokeLinecap="round"
          style={{
            pathLength,
          }}
          initial={{ pathLength: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        />
      </motion.svg>
    </div>
  );
};

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    icon: React.FC;
  };
  index: number;
}

const GridPattern: React.FC<{ isDashboard: boolean; index: number }> = ({ isDashboard, index }) => {
  const patternId = `grid-pattern-${index}`;
  return (
    <div
      className="absolute top-0 right-0 w-56 h-56 pointer-events-none overflow-hidden"
      style={{
        maskImage: 'radial-gradient(ellipse at 100% 0%, black 0%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 100% 0%, black 0%, transparent 75%)',
      }}
    >
      <svg width="224" height="224" className="opacity-40">
        <defs>
          <pattern id={patternId} width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke={isDashboard ? '#000000' : '#ffffff'}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="224" height="224" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
};

const BottomGlow: React.FC<{ isDashboard: boolean }> = ({ isDashboard }) => (
  <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none">
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 blur-3xl"
      style={{
        background: isDashboard
          ? 'radial-gradient(ellipse at 50% 100%, rgba(0, 0, 0, 0.2), transparent 70%)'
          : 'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.15), transparent 70%)',
      }}
    />
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-28 blur-2xl"
      style={{
        background: isDashboard
          ? 'radial-gradient(ellipse at 50% 100%, rgba(0, 0, 0, 0.15), transparent 70%)'
          : 'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.12), transparent 70%)',
      }}
    />
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-16 blur-xl"
      style={{
        background: isDashboard
          ? 'radial-gradient(ellipse at 50% 100%, rgba(0, 0, 0, 0.25), transparent 70%)'
          : 'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.08), transparent 70%)',
      }}
    />
  </div>
);

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = feature.icon;
  const isTopRow = index < 3;
  const isLeftSide = index === 0 || index === 2 || index === 3;
  const slideDirection = isLeftSide ? -100 : 100;
  const staggerDelay = index * 0.15;
  const isDashboard = feature.title === '/ Dashboard Analytics';

  return (
    <motion.div
      initial={{ opacity: 0, x: slideDirection }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 1.6,
        delay: staggerDelay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer col-span-1 ${isDashboard ? 'border-[3px] border-gray-200' : 'border-[3px] border-white/10'}`}
      style={{
        background: isDashboard
          ? '#ffffff'
          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0.2) 100%)',
        willChange: 'transform, opacity',
        boxShadow: isDashboard
          ? '0 8px 24px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.05)'
          : '0 8px 32px rgba(0, 0, 0, 0.5), 0 2px 12px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.05)',
      }}
    >
      <GridPattern isDashboard={isDashboard} index={index} />
      <BottomGlow isDashboard={isDashboard} />
      <SparkleEffect isHovered={isHovered} isDashboard={isDashboard} />
      <div
        className={`relative p-10 flex flex-col h-full z-10`}
        style={{
          minHeight: index === 0 ? '480px' :
                     index === 1 ? '420px' :
                     index === 2 ? '460px' :
                     index === 3 ? '440px' :
                     '400px'
        }}
      >
        <div className="w-56 h-56 mb-8 mx-auto lg:mx-0">
          <Icon />
        </div>

        <div className="flex-1 flex flex-col">
          <h3 className={`text-3xl font-bold leading-[1.3] mb-5 ${isDashboard ? 'text-gray-900' : 'text-white'}`}>
            {feature.title}
          </h3>
          <p className={`text-lg leading-[1.7] ${isDashboard ? 'text-gray-800' : 'text-white/65'}`}>
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const FeatureGrid: React.FC = () => {
  const features = [
    {
      title: '/ Book of Business',
      description: 'No more digging through spreadsheets or losing track of clients. Your entire portfolio lives in one place, so you always know exactly where every deal stands.',
      icon: BookIcon,
    },
    {
      title: '/ Team Hierarchy',
      description: 'See who reports to who and how your team is actually performing. No more confusion about splits or wondering how your downline is doing.',
      icon: HierarchyIcon,
    },
    {
      title: '/ Commission Tracking',
      description: 'Stop chasing down commission statements and second-guessing your payouts. Know exactly what you earned, when you earned it, and where it came from.',
      icon: CommissionIcon,
    },
    {
      title: '/ Dashboard Analytics',
      description: 'Get the full picture of your business at a glance. See what is working, what needs attention, and make smarter decisions without crunching numbers yourself.',
      icon: DashboardIcon,
    },
    {
      title: '/ Leaderboard',
      description: 'Healthy competition drives results. See where you stack up against your peers and celebrate the wins that keep your team hungry for more.',
      icon: MedalsIcon,
    },
  ];

  return (
    <section className="relative py-20 bg-[#0D0D0D] overflow-hidden">
      <HorizontalLine />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4 }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed md:max-w-md whitespace-nowrap">
            <TypewriterText
              text="/ Core Features"
              delay={200}
              className="text-gray-400"
            />
          </h2>
          <p className="text-white/50 text-lg leading-[1.6] md:max-w-xl md:text-right">
            Purpose-built tools designed specifically for life insurance agents and agencies to streamline workflows and maximize productivity.
          </p>
        </motion.div>

        <PoweredBySection />

        <div className="px-2 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard
                key={index}
                feature={feature}
                index={index}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:max-w-[calc(66.666%-0.5rem)] lg:mx-auto">
            {features.slice(3, 5).map((feature, index) => (
              <FeatureCard
                key={index + 3}
                feature={feature}
                index={index + 3}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
