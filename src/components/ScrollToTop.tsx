import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    if (prevPathname.current !== pathname) {
      window.dispatchEvent(new CustomEvent('resetSmoothScroll'));
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      prevPathname.current = pathname;
    }
  }, [pathname]);

  useEffect(() => {
    if (prevPathname.current === pathname) {
      return;
    }

    const scrollToTop = () => {
      window.dispatchEvent(new CustomEvent('resetSmoothScroll'));
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollToTop();

    const timer = setTimeout(scrollToTop, 50);
    const raf = requestAnimationFrame(scrollToTop);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
