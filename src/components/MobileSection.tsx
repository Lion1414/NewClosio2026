import React, { useRef, useEffect, useState } from 'react';

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed) {
            video.play().catch((error) => {
              console.log('Video autoplay failed:', error);
            });
            setHasPlayed(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [hasPlayed]);

  return (
    <section id="mobile" className="h-[450px] sm:h-[500px] lg:h-[550px] overflow-hidden relative">
      <AngularLine />
      <IOImprint />
      <div className="absolute inset-0 flex items-start justify-end pt-0">
        <div className="relative w-full h-full flex items-start justify-end pr-0">
          <video
            ref={videoRef}
            src="https://www.dropbox.com/scl/fi/91kfeqcce94u71i3toya2/mobile-video.mp4?rlkey=9zea3i2e2ldsmme1yhlxgjh5y&st=20nss4kd&raw=1"
            className="h-[100%] w-auto max-w-none object-contain drop-shadow-2xl"
            muted
            playsInline
            preload="auto"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileSection;
