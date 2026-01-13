import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface TypewriterHeadingProps {
  text: string;
  className?: string;
}

const TypewriterHeading: React.FC<TypewriterHeadingProps> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: false, margin: '0px' });

  useEffect(() => {
    setDisplayText('');
    setShowCursor(true);
  }, []);

  useEffect(() => {
    if (!isInView) return;

    setDisplayText('');
    setShowCursor(true);
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [text, isInView]);

  return (
    <h1 ref={ref} className={`text-5xl md:text-6xl font-bold mb-8 text-white/40 tracking-tight ${className}`}>
      {displayText}
      {showCursor && <span className="animate-pulse">|</span>}
    </h1>
  );
};

export default TypewriterHeading;
