import React from 'react';

const AngularLine: React.FC = () => {
  return (
    <div
      className="absolute left-0 top-0 h-full pointer-events-none"
      style={{ width: '22vw' }}
    >
      <svg
        viewBox="0 0 220 100"
        className="absolute left-0 top-0 w-full h-full"
        preserveAspectRatio="none"
        style={{ filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.25))' }}
      >
        <defs>
          <filter id="lineGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M 30 -10
             L 30 25
             Q 30 35, 50 35
             L 190 35
             Q 210 35, 210 45
             L 210 110"
          fill="none"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="blur-sm"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 30 -10
             L 30 25
             Q 30 35, 50 35
             L 190 35
             Q 210 35, 210 45
             L 210 110"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#lineGlow)"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
};

const IOImprint: React.FC = () => {
  return (
    <div className="absolute left-12 sm:left-16 lg:left-24 top-[75%] -translate-y-1/2 flex items-baseline gap-4 sm:gap-6 lg:gap-8">
      <span
        className="text-[120px] sm:text-[160px] lg:text-[200px] font-bold italic text-transparent"
        style={{
          WebkitTextStroke: '2px rgba(255, 255, 255, 0.22)',
          letterSpacing: '-0.02em'
        }}
      >
        I
      </span>
      <span
        className="text-[120px] sm:text-[160px] lg:text-[200px] font-bold text-white/[0.15]"
        style={{
          letterSpacing: '-0.02em'
        }}
      >
        O
      </span>
    </div>
  );
};

const MobileSection: React.FC = () => {
  return (
    <section id="mobile" className="h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden relative">
      <AngularLine />
      <IOImprint />
      <div className="absolute inset-0 flex items-center justify-end">
        <div className="relative w-full h-full flex items-end justify-end">
          <img
            src="/new_mobile_compatible-_closio_website.png"
            alt="Closio mobile application showcasing dashboard, leaderboard, and login screens"
            className="h-[90%] sm:h-[85%] lg:h-[82%] w-auto max-w-none object-contain drop-shadow-2xl translate-x-[1%]"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileSection;
