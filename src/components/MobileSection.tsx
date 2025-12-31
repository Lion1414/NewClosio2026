import React from 'react';

const LoopyLine: React.FC = () => {
  return (
    <svg
      viewBox="0 0 400 700"
      className="absolute left-0 top-0 h-full w-auto opacity-90"
      style={{ filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))' }}
      preserveAspectRatio="xMinYMid slice"
    >
      <defs>
        <linearGradient id="loopyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
          <stop offset="15%" stopColor="rgba(255, 255, 255, 0.9)" />
          <stop offset="50%" stopColor="rgba(255, 255, 255, 1)" />
          <stop offset="85%" stopColor="rgba(255, 255, 255, 0.9)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M 50 0
           C 120 80, 180 120, 140 200
           C 100 280, 30 300, 80 380
           C 130 460, 200 420, 160 500
           C 120 580, 60 620, 100 700"
        fill="none"
        stroke="url(#loopyGradient)"
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
      />
      <path
        d="M 50 0
           C 120 80, 180 120, 140 200
           C 100 280, 30 300, 80 380
           C 130 460, 200 420, 160 500
           C 120 580, 60 620, 100 700"
        fill="none"
        stroke="rgba(255, 255, 255, 0.15)"
        strokeWidth="40"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-sm"
      />
    </svg>
  );
};

const MobileSection: React.FC = () => {
  return (
    <section id="mobile" className="h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden relative">
      <LoopyLine />
      <div className="absolute inset-0 flex items-center justify-end">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[70%] h-full bg-gradient-to-l from-[#2C66FF]/10 to-transparent blur-3xl opacity-40" />
        <div className="relative w-full h-full flex items-end justify-end">
          <img
            src="/purple_pink_gradient_mobile_application_presentation_(2).png"
            alt="Closio mobile application showcasing dashboard, leaderboard, and login screens"
            className="h-[85%] w-auto max-w-none object-contain drop-shadow-2xl translate-x-[1%]"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileSection;
