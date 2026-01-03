import { useEffect, useRef, useState } from 'react';

const FullWidthVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed) {
            videoElement.play().catch(() => {});
          }
        });
      },
      { threshold: 0.3 }
    );

    const handleEnded = () => {
      setHasPlayed(true);
    };

    videoElement.addEventListener('ended', handleEnded);
    observer.observe(videoElement);

    return () => {
      observer.disconnect();
      videoElement.removeEventListener('ended', handleEnded);
    };
  }, [hasPlayed]);

  return (
    <section className="relative w-full h-[70vh] bg-black overflow-hidden">
      <video
        ref={videoRef}
        src="https://www.dropbox.com/scl/fi/gwibdbcluxfef5k8da25e/New-modern-video-for-home-page.mp4?rlkey=ry2rmgsr32c8qf4xb6vdshrwo&st=7dv9a7uo&raw=1"
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
    </section>
  );
};

export default FullWidthVideo;
