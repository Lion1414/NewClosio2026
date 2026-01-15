import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Skip if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Check if device is mobile/touch device
    const isMobile = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    
    // Use native smooth scrolling on mobile
    if (isMobile) {
      document.documentElement.style.scrollBehavior = 'smooth';
      return;
    }

    // Custom smooth scroll for desktop only
    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;
    let rafId: number | null = null;
    let isScrollingProgrammatically = false;
    let lastUserInteraction = 0;

    const handleResetScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      targetScrollY = 0;
      currentScrollY = 0;
      isScrollingProgrammatically = true;
      window.scrollTo(0, 0);
      isScrollingProgrammatically = false;
    };

    window.addEventListener('resetSmoothScroll', handleResetScroll);

    // Improved easing function for smoother scrolling
    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      // Faster interpolation for more responsive feel
      currentScrollY = lerp(currentScrollY, targetScrollY, 0.1);

      if (Math.abs(targetScrollY - currentScrollY) < 0.5) {
        currentScrollY = targetScrollY;
        rafId = null;
        isScrollingProgrammatically = false;
      } else {
        rafId = requestAnimationFrame(animate);
      }

      isScrollingProgrammatically = true;
      window.scrollTo(0, currentScrollY);
      isScrollingProgrammatically = false;
    };

    const handleWheel = (e: WheelEvent) => {
      // Only prevent default for intentional wheel events
      if (e.ctrlKey || e.shiftKey) {
        return; // Allow zoom and horizontal scroll
      }

      e.preventDefault();
      lastUserInteraction = Date.now();

      // Improved scroll multiplier for smoother feel
      const scrollMultiplier = 0.8;
      const delta = e.deltaY * scrollMultiplier;

      targetScrollY += delta;

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollY = Math.max(0, Math.min(targetScrollY, maxScroll));

      if (!rafId) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const handleKeydown = (e: KeyboardEvent) => {
      // Don't interfere if user is typing in an input
      if ((e.target as HTMLElement).tagName === 'INPUT' || 
          (e.target as HTMLElement).tagName === 'TEXTAREA') {
        return;
      }

      const scrollAmount = 150;
      const pageScrollAmount = window.innerHeight * 0.8;

      switch(e.key) {
        case 'ArrowDown':
          e.preventDefault();
          lastUserInteraction = Date.now();
          targetScrollY += scrollAmount;
          break;
        case 'ArrowUp':
          e.preventDefault();
          lastUserInteraction = Date.now();
          targetScrollY -= scrollAmount;
          break;
        case 'PageDown':
          e.preventDefault();
          lastUserInteraction = Date.now();
          targetScrollY += pageScrollAmount;
          break;
        case 'PageUp':
          e.preventDefault();
          lastUserInteraction = Date.now();
          targetScrollY -= pageScrollAmount;
          break;
        case ' ':
          // Check if shift is held for scroll up
          if (!e.shiftKey) {
            e.preventDefault();
            lastUserInteraction = Date.now();
            targetScrollY += pageScrollAmount;
          } else {
            e.preventDefault();
            lastUserInteraction = Date.now();
            targetScrollY -= pageScrollAmount;
          }
          break;
        case 'Home':
          e.preventDefault();
          lastUserInteraction = Date.now();
          targetScrollY = 0;
          break;
        case 'End':
          e.preventDefault();
          lastUserInteraction = Date.now();
          targetScrollY = document.documentElement.scrollHeight - window.innerHeight;
          break;
        default:
          return;
      }

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollY = Math.max(0, Math.min(targetScrollY, maxScroll));

      if (!rafId) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const syncScrollPosition = () => {
      if (isScrollingProgrammatically) {
        return;
      }

      const timeSinceLastInteraction = Date.now() - lastUserInteraction;

      // Sync if user clicked a link or used browser back button
      if (timeSinceLastInteraction > 150 && !rafId) {
        const newScroll = window.scrollY;
        if (Math.abs(newScroll - targetScrollY) > 10) {
          targetScrollY = newScroll;
          currentScrollY = newScroll;
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('scroll', syncScrollPosition, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('scroll', syncScrollPosition);
      window.removeEventListener('resetSmoothScroll', handleResetScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);
};
