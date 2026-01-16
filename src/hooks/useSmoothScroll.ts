import { useEffect } from 'react';
import Lenis from 'lenis';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll with optimized settings for buttery smooth performance
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      smoothTouch: false,
      touchMultiplier: 1.5,
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
