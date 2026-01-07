import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { subscribeToNewsletter } from '@/lib/supabase';
import StaticIO3D from './StaticIO3D';

interface FloatingCard {
  label: string;
  x: string;
  y: string;
  opacity: number;
  scale: number;
  delay: number;
}

const floatingCards: FloatingCard[] = [
  { label: 'Book of Business', x: '8%', y: '8%', opacity: 1, scale: 1, delay: 0 },
  { label: 'Dashboard', x: '55%', y: '5%', opacity: 0.7, scale: 0.9, delay: 0.15 },
  { label: 'Commissions', x: '30%', y: '35%', opacity: 0.95, scale: 0.98, delay: 0.1 },
  { label: 'Team Hierarchy', x: '5%', y: '55%', opacity: 1, scale: 1, delay: 0.2 },
  { label: 'Reminders', x: '48%', y: '50%', opacity: 0.8, scale: 0.92, delay: 0.3 },
  { label: 'Quick Links', x: '18%', y: '82%', opacity: 0.9, scale: 0.95, delay: 0.4 },
];

const backgroundCards: FloatingCard[] = [
  { label: 'Analytics', x: '75%', y: '15%', opacity: 0.35, scale: 0.85, delay: 0.5 },
  { label: 'Reports', x: '70%', y: '70%', opacity: 0.25, scale: 0.82, delay: 0.55 },
  { label: 'Settings', x: '88%', y: '40%', opacity: 0.2, scale: 0.8, delay: 0.6 },
  { label: 'Notifications', x: '60%', y: '88%', opacity: 0.3, scale: 0.85, delay: 0.65 },
  { label: 'Policies', x: '92%', y: '75%', opacity: 0.15, scale: 0.78, delay: 0.7 },
  { label: 'Carriers', x: '85%', y: '8%', opacity: 0.22, scale: 0.8, delay: 0.45 },
];

const ContactSplit = React.memo(() => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
    <section id="contact" className="py-12 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative min-h-[500px]">
          <div className="absolute -bottom-[180px] left-0 w-full h-[600px] pointer-events-none select-none z-0">
            <StaticIO3D />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.15) 0%, rgba(14, 116, 144, 0.25) 50%, rgba(8, 51, 68, 0.35) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(34, 211, 238, 0.2)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#22d3ee]/5 via-transparent to-[#0e7490]/10 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22d3ee]/40 to-transparent" />

              <div className="relative z-10 flex flex-col md:flex-row items-stretch min-h-[280px] md:min-h-[300px]">
                <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-left">
                    Stay in the Loop with{' '}
                    <span className="text-[#22d3ee]">
                      Closio
                    </span>
                  </h2>
                  <p className="text-sm lg:text-base text-white/70 max-w-md mb-6 leading-relaxed text-left">
                    Be the first to hear about updates, early access offers, and exclusive insights.
                  </p>

                  {status === 'success' ? (
                    <div className="flex flex-col items-start py-3">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-3 border border-green-500/30">
                        <span className="text-green-400 text-xl">✓</span>
                      </div>
                      <p className="text-lg font-semibold text-green-400">You're in!</p>
                      <p className="text-white/70 mt-1 text-sm">We'll be in touch.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="max-w-sm">
                      <div className="flex flex-col sm:flex-row gap-2">
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
                            className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:border-[#22d3ee] focus:ring-2 focus:ring-[#22d3ee]/30 outline-none transition-all text-white placeholder:text-white/50 text-sm"
                            disabled={status === 'loading'}
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={status === 'loading'}
                          className="px-5 py-3 bg-[#22d3ee] text-black font-semibold rounded-lg hover:bg-[#67e8f9] hover:shadow-lg hover:shadow-[#22d3ee]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-sm"
                        >
                          {status === 'loading' ? (
                            <span className="flex items-center justify-center gap-2">
                              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              <span>Joining...</span>
                            </span>
                          ) : (
                            'Join Newsletter'
                          )}
                        </button>
                      </div>

                      {status === 'error' && errorMessage && (
                        <p className="mt-2 text-red-400 text-xs">{errorMessage}</p>
                      )}
                    </form>
                  )}
                </div>

                <div className="hidden md:block flex-1 relative overflow-hidden">
                  {backgroundCards.map((card) => (
                    <motion.div
                      key={card.label}
                      initial={{ opacity: 0, x: 60 }}
                      whileInView={{ opacity: card.opacity, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: card.delay }}
                      className="absolute"
                      style={{
                        left: card.x,
                        top: card.y,
                        transform: `scale(${card.scale})`,
                      }}
                    >
                      <div
                        className="px-4 py-2.5 rounded-lg whitespace-nowrap"
                        style={{
                          background: 'rgba(255, 255, 255, 0.04)',
                          backdropFilter: 'blur(6px)',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                        }}
                      >
                        <span className="text-white/30 text-xs font-medium">{card.label}</span>
                      </div>
                    </motion.div>
                  ))}

                  {floatingCards.map((card) => (
                    <motion.div
                      key={card.label}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: card.opacity, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: card.delay }}
                      className="absolute"
                      style={{
                        left: card.x,
                        top: card.y,
                        transform: `scale(${card.scale})`,
                      }}
                    >
                      <div
                        className="px-4 py-2.5 rounded-lg whitespace-nowrap"
                        style={{
                          background: 'rgba(255, 255, 255, 0.08)',
                          backdropFilter: 'blur(12px)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        <span className="text-white/90 text-xs font-medium">{card.label}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSplit.displayName = 'ContactSplit';

export default ContactSplit;
