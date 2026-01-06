import React from 'react';

const AngularLine: React.FC = () => {
  return (
    <svg
      viewBox="0 0 500 700"
      className="absolute left-0 top-0 h-full w-[30vw] min-h-[500px]"
      preserveAspectRatio="none"
    >
      <path
        d="M 50 -50
           L 50 160
           Q 50 240, 130 240
           L 340 240
           Q 420 240, 420 320
           L 420 750"
        fill="none"
        stroke="white"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IOImprint: React.FC = () => {
  return (
    <div className="absolute left-8 sm:left-12 lg:left-16 top-[68%] -translate-y-1/2 flex items-baseline gap-4 sm:gap-6 lg:gap-8">
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
    <section id="mobile" className="h-[450px] sm:h-[500px] lg:h-[550px] overflow-hidden relative">
      <AngularLine />
      <IOImprint />
      <div className="absolute inset-0 flex items-start justify-end pt-0">
        <div className="relative w-full h-full flex items-start justify-end pr-0">
          <img
            src="/purple_pink_gradient_mobile_application_presentation_(6).png"
            alt="Closio mobile application showcasing dashboard, leaderboard, and login screens"
            className="h-[100%] w-auto max-w-none object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileSection;
