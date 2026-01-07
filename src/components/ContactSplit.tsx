import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { subscribeToNewsletter } from '@/lib/supabase';

const ContactSplit = React.memo(() => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const result = await subscribeToNewsletter(email);

    if (result.success) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Something went wrong.');
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-black overflow-hidden rounded-3xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative min-h-[500px]">
          <motion.div
            className="absolute -bottom-64 left-0 select-none z-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{
              rotateX: isHovered ? -5 : 0,
              rotateY: isHovered ? 5 : 0,
              scale: isHovered ? 1.02 : 1,
              y: isHovered ? -10 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
          >
            <svg
              viewBox="0 0 1000 600"
              className="w-[500px] sm:w-[700px] md:w-[900px] lg:w-[1100px] xl:w-[1300px]"
              style={{
                filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.7))',
              }}
            >
              <defs>
                <linearGradient id="letterI-front" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#7dd8f3" />
                  <stop offset="30%" stopColor="#6ad4f2" />
                  <stop offset="70%" stopColor="#4fb8d6" />
                  <stop offset="100%" stopColor="#3a99b8" />
                </linearGradient>

                <linearGradient id="letterI-side" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2d7a94" />
                  <stop offset="50%" stopColor="#3a99b8" />
                  <stop offset="100%" stopColor="#2d7a94" />
                </linearGradient>

                <linearGradient id="letterI-top" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9de8ff" />
                  <stop offset="50%" stopColor="#b8f0ff" />
                  <stop offset="100%" stopColor="#9de8ff" />
                </linearGradient>

                <linearGradient id="letterO-front" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="30%" stopColor="#f0f0f0" />
                  <stop offset="70%" stopColor="#d0d0d0" />
                  <stop offset="100%" stopColor="#b0b0b0" />
                </linearGradient>

                <linearGradient id="letterO-side" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#707070" />
                  <stop offset="50%" stopColor="#909090" />
                  <stop offset="100%" stopColor="#707070" />
                </linearGradient>

                <linearGradient id="letterO-top" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e8e8e8" />
                  <stop offset="50%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#e8e8e8" />
                </linearGradient>

                <linearGradient id="letterO-inner" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#505050" />
                  <stop offset="50%" stopColor="#303030" />
                  <stop offset="100%" stopColor="#101010" />
                </linearGradient>

                <radialGradient id="highlight-I" cx="30%" cy="20%">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
                  <stop offset="50%" stopColor="rgba(255, 255, 255, 0.3)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                </radialGradient>

                <radialGradient id="highlight-O" cx="30%" cy="20%">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
                  <stop offset="50%" stopColor="rgba(255, 255, 255, 0.4)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                </radialGradient>

                <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="15" result="blur" />
                  <feFlood floodColor="#6ad4f2" floodOpacity="0.8" />
                  <feComposite in2="blur" operator="in" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <filter id="glow-white" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="15" result="blur" />
                  <feFlood floodColor="#ffffff" floodOpacity="0.6" />
                  <feComposite in2="blur" operator="in" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <filter id="depth-shadow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
                  <feOffset dx="8" dy="12" result="offsetblur" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.6" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g filter="url(#depth-shadow)">
                <g filter="url(#glow-cyan)">
                  <path
                    d="M 80 100 L 80 500 L 20 530 L 20 130 Z"
                    fill="url(#letterI-side)"
                    opacity="0.9"
                  />

                  <path
                    d="M 20 130 L 80 100 L 220 100 L 160 130 Z"
                    fill="url(#letterI-top)"
                  />

                  <rect
                    x="80"
                    y="100"
                    width="140"
                    height="400"
                    fill="url(#letterI-front)"
                    rx="10"
                  />

                  <ellipse
                    cx="150"
                    cy="200"
                    rx="50"
                    ry="120"
                    fill="url(#highlight-I)"
                    opacity="0.5"
                  />

                  <path
                    d="M 220 100 L 280 130 L 280 530 L 220 500 Z"
                    fill="url(#letterI-side)"
                    opacity="0.7"
                  />
                </g>

                <g transform="translate(400, 0)" filter="url(#glow-white)">
                  <ellipse
                    cx="180"
                    cy="300"
                    rx="180"
                    ry="200"
                    fill="url(#letterO-front)"
                  />

                  <path
                    d="M 0 300 Q 0 100, 180 100 L 200 120 Q 20 120, 20 300 Q 20 480, 200 480 L 180 500 Q 0 500, 0 300 Z"
                    fill="url(#letterO-side)"
                    opacity="0.8"
                  />

                  <ellipse
                    cx="200"
                    cy="300"
                    rx="180"
                    ry="200"
                    fill="url(#letterO-top)"
                  />

                  <ellipse
                    cx="200"
                    cy="300"
                    rx="100"
                    ry="120"
                    fill="url(#letterO-inner)"
                  />

                  <ellipse
                    cx="200"
                    cy="220"
                    rx="80"
                    ry="100"
                    fill="url(#highlight-O)"
                    opacity="0.4"
                  />

                  <ellipse
                    cx="120"
                    cy="300"
                    rx="60"
                    ry="80"
                    fill="rgba(255, 255, 255, 0.2)"
                    opacity="0.6"
                  />
                </g>
              </g>

              <motion.g
                animate={{
                  opacity: isHovered ? [0.4, 0.8, 0.4] : 0.4,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <circle cx="150" cy="150" r="3" fill="#ffffff" opacity="0.9" />
                <circle cx="180" cy="180" r="2" fill="#6ad4f2" opacity="0.8" />
                <circle cx="120" cy="200" r="2.5" fill="#ffffff" opacity="0.7" />
                <circle cx="580" cy="200" r="3" fill="#ffffff" opacity="0.9" />
                <circle cx="620" cy="250" r="2" fill="#6ad4f2" opacity="0.8" />
                <circle cx="550" cy="280" r="2.5" fill="#ffffff" opacity="0.7" />
              </motion.g>
            </svg>
          </motion.div>

          <div className="relative z-10 flex items-start justify-center min-h-[500px] pt-8">
            <div className="max-w-3xl mx-auto text-center px-8">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Stay in the Loop with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ad4f2] to-[#5ac3e1]">
                  Closio
                </span>
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                Be the first to hear about updates, early access offers, and exclusive insights.
              </p>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-6">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 border border-green-500/30">
                    <span className="text-green-400 text-3xl">✓</span>
                  </div>
                  <p className="text-xl font-semibold text-green-400">You're in!</p>
                  <p className="text-white/70 mt-2">We'll be in touch.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === 'error') {
                            setStatus('idle');
                            setErrorMessage('');
                          }
                        }}
                        placeholder="Enter your email"
                        className="w-full px-5 py-4 bg-black/40 border border-white/20 rounded-xl focus:border-[#6ad4f2] focus:ring-2 focus:ring-[#6ad4f2]/30 outline-none transition-all text-white placeholder:text-white/50"
                        disabled={status === 'loading'}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="px-8 py-4 bg-gradient-to-r from-[#6ad4f2] to-[#5ac3e1] text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-[#6ad4f2]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {status === 'loading' ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Joining...</span>
                        </span>
                      ) : (
                        'Join the Closio Newsletter'
                      )}
                    </button>
                  </div>

                  {status === 'error' && errorMessage && (
                    <p className="mt-4 text-red-400 text-sm">{errorMessage}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSplit.displayName = 'ContactSplit';

export default ContactSplit;
