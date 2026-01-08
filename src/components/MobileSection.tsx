import React, { useRef, useEffect, useState } from 'react';
import Robot3D from './Robot3D';

const Robot3DContainer: React.FC = () => {
  return (
    <div className="absolute left-0 sm:left-[2%] lg:left-[4%] top-[50%] sm:top-[55%] -translate-y-1/2 w-[200px] sm:w-[280px] md:w-[340px] lg:w-[400px] xl:w-[450px] h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] pointer-events-none overflow-hidden">
      <Robot3D />
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
    <section id="mobile" className="min-h-[450px] h-[450px] sm:h-[550px] md:h-[600px] lg:h-[700px] xl:h-[750px] overflow-hidden relative">
      <Robot3DContainer />
      <div className="absolute inset-0 flex items-end justify-end overflow-hidden">
        <div className="relative w-full h-full flex items-end justify-end pr-0 pb-0">
          <video
            ref={videoRef}
            src="https://www.dropbox.com/scl/fi/zsaggxsj4klujoec2wcam/Brand-new-copy-of-mobile-art-video.mp4?rlkey=4983zhcsv1roi1hbudhyum4df&st=ruomps0s&raw=1"
            className="h-[60%] sm:h-[65%] md:h-[70%] w-auto max-w-[60%] sm:max-w-none object-contain drop-shadow-2xl"
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
