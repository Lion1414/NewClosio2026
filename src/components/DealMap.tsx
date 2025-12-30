import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface City {
  name: string;
  x: number;
  y: number;
  deals: number;
}

const cities: City[] = [
  { name: 'Seattle', x: 12, y: 15, deals: 234 },
  { name: 'San Francisco', x: 8, y: 38, deals: 456 },
  { name: 'Los Angeles', x: 12, y: 52, deals: 678 },
  { name: 'Phoenix', x: 22, y: 55, deals: 189 },
  { name: 'Denver', x: 32, y: 40, deals: 312 },
  { name: 'Dallas', x: 45, y: 62, deals: 523 },
  { name: 'Houston', x: 48, y: 72, deals: 445 },
  { name: 'Chicago', x: 58, y: 30, deals: 687 },
  { name: 'Detroit', x: 65, y: 25, deals: 234 },
  { name: 'Atlanta', x: 68, y: 55, deals: 398 },
  { name: 'Miami', x: 78, y: 78, deals: 567 },
  { name: 'New York', x: 82, y: 28, deals: 892 },
  { name: 'Boston', x: 88, y: 20, deals: 345 },
  { name: 'Minneapolis', x: 48, y: 20, deals: 178 },
  { name: 'Kansas City', x: 47, y: 42, deals: 156 },
];

const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [4, 7], [7, 8], [7, 9], [9, 10], [8, 11], [11, 12],
  [7, 13], [13, 4], [4, 14], [14, 5], [9, 11],
  [0, 4], [2, 5], [1, 4], [5, 9], [6, 10],
];

const benefits = [
  { title: 'Geographic Insights', description: 'See exactly where your team is closing deals across the country' },
  { title: 'Territory Planning', description: 'Identify underserved markets and expansion opportunities' },
  { title: 'Performance Tracking', description: 'Monitor regional performance and agent coverage' },
  { title: 'Real-Time Updates', description: 'Watch deals appear on the map as they close' },
];

export default function DealMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCity, setActiveCity] = useState<City | null>(null);
  const [pulsingDots, setPulsingDots] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndices = Array.from({ length: 3 }, () =>
        Math.floor(Math.random() * cities.length)
      );
      setPulsingDots(randomIndices);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a1628] to-black" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2C66FF]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium tracking-wide uppercase">Live Deal Tracking</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            Deal Map
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#A8B3C7] max-w-2xl mx-auto"
          >
            Visualize your agency's reach in real-time. Watch as policies are sold across the nation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] border border-white/5"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,102,255,0.1),transparent_70%)]" />

            <svg
              viewBox="0 0 100 85"
              className="w-full h-full"
              style={{ filter: 'drop-shadow(0 0 20px rgba(44, 102, 255, 0.2))' }}
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2C66FF" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#2C66FF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#2C66FF" stopOpacity="0.2" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
                  <stop offset="50%" stopColor="#10B981" stopOpacity="1" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                </linearGradient>
              </defs>

              {connections.map(([from, to], index) => {
                const city1 = cities[from];
                const city2 = cities[to];
                const midX = (city1.x + city2.x) / 2;
                const midY = Math.min(city1.y, city2.y) - 8;

                return (
                  <g key={`connection-${index}`}>
                    <path
                      d={`M ${city1.x} ${city1.y} Q ${midX} ${midY} ${city2.x} ${city2.y}`}
                      fill="none"
                      stroke="url(#lineGradient)"
                      strokeWidth="0.3"
                      className="opacity-40"
                    />
                    <path
                      d={`M ${city1.x} ${city1.y} Q ${midX} ${midY} ${city2.x} ${city2.y}`}
                      fill="none"
                      stroke="#2C66FF"
                      strokeWidth="0.15"
                      strokeDasharray="2 4"
                      className="animate-pulse opacity-60"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        values="0;6"
                        dur={`${2 + index * 0.3}s`}
                        repeatCount="indefinite"
                      />
                    </path>
                  </g>
                );
              })}

              {cities.map((city, index) => (
                <g
                  key={city.name}
                  className="cursor-pointer"
                  onMouseEnter={() => setActiveCity(city)}
                  onMouseLeave={() => setActiveCity(null)}
                >
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r={pulsingDots.includes(index) ? 2 : 1.2}
                    fill={pulsingDots.includes(index) ? '#10B981' : '#2C66FF'}
                    filter="url(#glow)"
                    className="transition-all duration-500"
                  >
                    {pulsingDots.includes(index) && (
                      <animate
                        attributeName="r"
                        values="1.2;2.5;1.2"
                        dur="1.5s"
                        repeatCount="indefinite"
                      />
                    )}
                  </circle>

                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="3"
                    fill="none"
                    stroke={pulsingDots.includes(index) ? '#10B981' : '#2C66FF'}
                    strokeWidth="0.2"
                    className="opacity-30"
                  >
                    <animate
                      attributeName="r"
                      values="1.5;4;1.5"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.5;0;0.5"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              ))}
            </svg>

            {activeCity && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-6 left-6 px-4 py-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10"
              >
                <div className="text-sm font-semibold text-white">{activeCity.name}</div>
                <div className="text-xs text-emerald-400">{activeCity.deals} Active Policies</div>
              </motion.div>
            )}

            <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-2 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-white/80">Live</span>
            </div>

            <div className="absolute bottom-6 right-6 text-right">
              <div className="text-2xl font-bold text-white">4,894</div>
              <div className="text-xs text-white/60">Total Policies</div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                See Your Business<br />
                <span className="text-[#2C66FF]">Come to Life</span>
              </h3>
              <p className="text-[#A8B3C7] leading-relaxed">
                The Deal Map gives agency owners, managers, and agents complete visibility into where policies are being sold.
                Track your team's geographic reach, identify growth opportunities, and celebrate wins as they happen.
              </p>
            </motion.div>

            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2C66FF]/10 border border-[#2C66FF]/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#2C66FF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                    <p className="text-sm text-[#A8B3C7]">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
