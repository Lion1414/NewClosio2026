import { useEffect } from 'react';
import Lenis from 'lenis';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll with smooth, non-glitchy settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      smoothTouch: false,
      touchMultiplier: 2.0,
      infinite: false,
      syncTouch: false,
    });

    // Expose Lenis instance globally for Framer Motion integration
    (window as any).lenis = lenis;

    // Lenis RAF loop with proper cleanup
    let rafId: number;
    
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Handle route changes - reset scroll position
    const handleResetScroll = () => {
      lenis.scrollTo(0, { immediate: true });
    };

    window.addEventListener('resetSmoothScroll', handleResetScroll);

    // Cleanup - cancel RAF before destroying Lenis
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resetSmoothScroll', handleResetScroll);
      delete (window as any).lenis;
      lenis.destroy();
    };
  }, []);
};
