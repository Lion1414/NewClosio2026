import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WebGLIcon } from './WebGLIcon';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  repeatDelay: number;
}

const SparkleEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  const particles = useMemo<Sparkle[]>(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      size: Math.random() * 3 + 1.5,
      delay: Math.random() * 0.6,
      repeatDelay: 0,
    })),
  []);

  return (
    <AnimatePresence>
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl z-20">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ opacity: 0, scale: 0, y: 0 }}
              animate={{
                opacity: [0, 0.8, 0.6, 0],
                scale: [0, 1, 1, 0.5],
                y: [0, -20, -40, -60],
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 1.5,
                delay: particle.delay,
                ease: 'easeOut',
              }}
              className="absolute rounded-full bg-white"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
                boxShadow: '0 0 4px rgba(255, 255, 255, 0.6)',
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

const BookIcon: React.FC = () => (
  <WebGLIcon type="book" />
);

const HierarchyIcon: React.FC = () => (
  <WebGLIcon type="hierarchy" />
);

const CommissionIcon: React.FC = () => (
  <WebGLIcon type="commission" />
);

const DashboardIcon: React.FC = () => (
  <WebGLIcon type="analytics" />
);

const MedalsIcon: React.FC = () => (
  <WebGLIcon type="leaderboard" />
);

const VerticalLine: React.FC = () => {
  return (
    <div
      className="absolute left-[3vw] pointer-events-none"
      style={{ top: '-100px', bottom: '-100px' }}
    >
      <div
        className="absolute inset-0 bg-white"
        style={{
          width: '19px',
          transform: 'translateX(-50%)',
          boxShadow: 'none'
        }}
      />
    </div>
  );
};

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    icon: React.FC;
  };
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = feature.icon;
  const isTopRow = index < 2;
  const isLeftSide = index === 0 || index === 2;
  const slideDirection = isLeftSide ? -100 : 100;
  const staggerDelay = index * 0.15;

  return (
    <motion.div
      initial={{ opacity: 0, x: slideDirection }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        delay: staggerDelay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden border border-white/10 rounded-2xl cursor-pointer ${
        isTopRow ? 'col-span-1 lg:col-span-3' : 'col-span-1 lg:col-span-2'
      }`}
      style={{
        background: '#000000',
        willChange: 'transform, opacity',
      }}
    >
      <SparkleEffect isHovered={isHovered} />
      <div className="relative p-8 flex flex-col h-full min-h-[340px] z-10">
        <div className="w-36 h-36 mb-8">
          <Icon />
        </div>

        <div className="flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-4">
            {feature.title}
          </h3>
          <p className="text-white/60 text-base leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const FeatureGrid: React.FC = () => {
  const features = [
    {
      title: 'Book of Business',
      description: 'Manage your entire portfolio of clients and policies in one organized, searchable database.',
      icon: BookIcon,
    },
    {
      title: 'Team Hierarchy',
      description: 'Visualize your agency structure with clear reporting lines and team performance metrics.',
      icon: HierarchyIcon,
    },
    {
      title: 'Commission Tracking',
      description: 'Real-time visibility into your commission structure with automated calculations and transparent breakdowns.',
      icon: CommissionIcon,
    },
    {
      title: 'Dashboard Analytics',
      description: 'Powerful insights and metrics to track performance, close rates, and revenue at a glance.',
      icon: DashboardIcon,
    },
    {
      title: 'Leaderboard',
      description: 'Track top performers and motivate your team with real-time rankings and achievements.',
      icon: MedalsIcon,
    },
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <VerticalLine />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold md:max-w-md">
            <span className="text-white">
              / CORE FEATURES
            </span>
          </h2>
          <p className="text-white/50 text-lg md:max-w-xl md:text-right">
            Purpose-built tools designed specifically for life insurance agents and agencies to streamline workflows and maximize productivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
