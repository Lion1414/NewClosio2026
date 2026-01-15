import React, { useMemo, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

type TabKey = "owner" | "manager" | "agent";

const tabs: { key: TabKey; label: string }[] = [
  { key: "owner", label: "Agency owner" },
  { key: "manager", label: "Manager" },
  { key: "agent", label: "Agent" },
];

const ICONS: Record<TabKey, React.ReactNode> = {
  owner: (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-10 w-10"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ownerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d593c0" />
        </linearGradient>
        <linearGradient id="ownerAccent" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#d593c0" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {/* Executive Briefcase */}
      {/* Main briefcase body */}
      <rect x="8" y="18" width="32" height="20" rx="2" fill="url(#ownerGradient)" opacity="0.25" />
      <rect x="8" y="18" width="32" height="20" rx="2" stroke="url(#ownerGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Top handle */}
      <path d="M18 18 L18 14 C18 12.3 19.3 11 21 11 L27 11 C28.7 11 30 12.3 30 14 L30 18" 
        stroke="url(#ownerGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      
      {/* Center clasp/lock detail */}
      <rect x="22" y="24" width="4" height="6" rx="1" fill="url(#ownerGradient)" opacity="0.8" />
      <circle cx="24" cy="27" r="1.5" fill="#ffffff" opacity="0.9" />
      
      {/* Professional accent lines */}
      <line x1="8" y1="23" x2="40" y2="23" stroke="url(#ownerAccent)" strokeWidth="1.5" />
      <line x1="8" y1="33" x2="40" y2="33" stroke="url(#ownerAccent)" strokeWidth="1.5" />
      
      {/* Corner accents */}
      <circle cx="13" cy="28" r="1.5" fill="#d593c0" opacity="0.6" />
      <circle cx="35" cy="28" r="1.5" fill="#ffffff" opacity="0.6" />
    </svg>
  ),
  manager: (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-10 w-10"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="managerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d593c0" />
        </linearGradient>
      </defs>
      {/* Top person */}
      <circle cx="24" cy="12" r="4.5" fill="url(#managerGradient)" />
      <path
        d="M16 20C16 17 19.6 15 24 15C28.4 15 32 17 32 20"
        stroke="url(#managerGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="url(#managerGradient)"
        fillOpacity="0.2"
      />
      {/* Connection lines */}
      <line x1="24" y1="20" x2="16" y2="28" stroke="url(#managerGradient)" strokeWidth="2" strokeDasharray="2 2" />
      <line x1="24" y1="20" x2="32" y2="28" stroke="url(#managerGradient)" strokeWidth="2" strokeDasharray="2 2" />
      {/* Bottom left person */}
      <circle cx="16" cy="32" r="3.5" fill="url(#managerGradient)" opacity="0.7" />
      <path
        d="M10 38C10 36 12.7 34.5 16 34.5C19.3 34.5 22 36 22 38"
        stroke="url(#managerGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Bottom right person */}
      <circle cx="32" cy="32" r="3.5" fill="url(#managerGradient)" opacity="0.7" />
      <path
        d="M26 38C26 36 28.7 34.5 32 34.5C35.3 34.5 38 36 38 38"
        stroke="url(#managerGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  ),
  agent: (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-10 w-10"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="agentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d593c0" />
        </linearGradient>
      </defs>
      {/* Person */}
      <circle cx="24" cy="14" r="6" fill="url(#agentGradient)" />
      <path
        d="M12 38C12 31 17 26 24 26C31 26 36 31 36 38"
        stroke="url(#agentGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="url(#agentGradient)"
        fillOpacity="0.2"
      />
      {/* Target/focus icon */}
      <circle cx="36" cy="12" r="6" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
      <circle cx="36" cy="12" r="3.5" fill="none" stroke="#d593c0" strokeWidth="2" opacity="0.8" />
      <circle cx="36" cy="12" r="1.5" fill="#d593c0" />
    </svg>
  ),
};

const CONTENT: Record<
  TabKey,
  {
    eyebrow: string;
    title: string;
    bullets: string[];
    why: string;
    stats: { label: string; value: string }[];
    keyFeatures: string[];
  }
> = {
  owner: {
    eyebrow: "Full visibility",
    title: "Agency Owner Account",
    bullets: [
      "Complete organizational hierarchy view — see every owner, manager, and agent relationship instantly",
      "Real-time production dashboards tracking sales velocity, conversion rates, and revenue growth across all teams",
      "Automated commission calculations with full audit trails — no more manual reconciliation or disputes",
      "Custom reporting exports to share with investors, partners, or executives without reformatting data",
      "Multi-location management with consolidated metrics and branch-level performance comparisons",
    ],
    why: "Built for leaders managing 50+ agents who need complete visibility without the chaos. Make strategic decisions based on real-time data, identify top performers instantly, and scale your agency with confidence.",
    stats: [
      { label: "Time saved weekly", value: "12+ hrs" },
      { label: "Reporting accuracy", value: "100%" },
    ],
    keyFeatures: ["Hierarchy visualization", "Executive dashboards", "Commission automation"],
  },
  manager: {
    eyebrow: "Team performance",
    title: "Manager Account",
    bullets: [
      "Direct view of all assigned agents with individual performance metrics and activity tracking",
      "Pipeline visibility showing exactly where deals are stuck and who needs coaching support",
      "Team leaderboards with customizable metrics to drive healthy competition and celebrate wins",
      "One-click coaching insights highlighting which agents need attention and specific action items",
      "Goal tracking with progress indicators to keep your team aligned and motivated on targets",
    ],
    why: "Perfect for managers overseeing 5-30 agents who need to coach effectively and drive results. Spend less time hunting for data and more time developing your team to hit quota.",
    stats: [
      { label: "Coaching efficiency", value: "+40%" },
      { label: "Team visibility", value: "Real-time" },
    ],
    keyFeatures: ["Agent oversight", "Performance coaching", "Team analytics"],
  },
  agent: {
    eyebrow: "Stay focused",
    title: "Agent Account",
    bullets: [
      "Clean pipeline view showing your active deals, next steps, and follow-up priorities in one glance",
      "Personal commission tracker with detailed breakdowns by policy, carrier, and payout date",
      "Quick-add contacts and policies without switching between multiple tools or spreadsheets",
      "Daily task list auto-generated from your pipeline so nothing falls through the cracks",
      "Mobile-optimized interface to update deals, check commissions, and manage clients on the go",
    ],
    why: "Designed for producers who want to focus on selling, not software. Everything you need to track your book of business and commissions without the clutter of enterprise tools.",
    stats: [
      { label: "Daily time saved", value: "45+ min" },
      { label: "Deal tracking", value: "100%" },
    ],
    keyFeatures: ["Personal pipeline", "Commission clarity", "Mobile access"],
  },
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function ClosioAccountTypesSection() {
  const [active, setActive] = useState<TabKey>("owner");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const cards = useMemo(
    () => [
      {
        key: "owner" as const,
        icon: ICONS.owner,
        industry: "Operations",
        headline: "Complete visibility across your full hierarchy",
      },
      {
        key: "manager" as const,
        icon: ICONS.manager,
        industry: "Leadership",
        headline: "Lead teams with clean performance insights",
      },
      {
        key: "agent" as const,
        icon: ICONS.agent,
        industry: "Sales",
        headline: "Stay focused on selling, not software",
      },
    ],
    []
  );

  const c = CONTENT[active];

  return (
    <section ref={sectionRef} className="relative w-full bg-black pt-32 pb-32 sm:pt-40 sm:pb-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black to-transparent" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(60% 60% at 50% 25%, black 35%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(60% 60% at 50% 25%, black 35%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm font-medium tracking-wide text-white/60"
          >
            Account types
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Built for every role in your organization
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base leading-relaxed text-white/60"
          >
            From agency owners overseeing hundreds of agents to producers focused
            on daily sales, Closio gives each role exactly what they need —
            nothing more, nothing less.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 inline-flex items-center rounded-full border border-white/10 bg-white/[0.02] p-1"
          >
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition",
                  active === t.key
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white"
                )}
              >
                {t.label}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {cards.map((card, idx) => (
            <motion.button
              key={card.key}
              initial={{ opacity: 0, y: 30, rotateX: 20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActive(card.key)}
              className={cn(
                "group relative w-full p-8 text-left transition-all duration-300 ease-out rounded-2xl overflow-hidden",
                "hover:scale-[1.02] hover:shadow-2xl",
                active === card.key 
                  ? "bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.04] border-2 border-white/30 shadow-[0_20px_70px_rgba(255,255,255,0.1)]" 
                  : "bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-white/20"
              )}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              {/* Animated gradient overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: active === card.key ? 0.5 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[#d593c0]/10"
              />
              
              {/* Corner accent */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: active === card.key ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-0 right-0 w-32 h-32"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-bl-[100px]" />
              </motion.div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={cn(
                    "p-3 rounded-xl transition-all duration-300",
                    active === card.key 
                      ? "bg-white/20 text-white shadow-lg" 
                      : "bg-white/5 text-white/70 group-hover:bg-white/10"
                  )}>
                    {card.icon}
                  </div>
                  {active === card.key && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, ease: "backOut" }}
                      className="h-3 w-3 rounded-full bg-gradient-to-r from-white to-[#d593c0]"
                    />
                  )}
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/90 mb-2">
                  {card.industry}
                </p>

                <h3 className={cn(
                  "text-xl font-bold leading-tight transition-all duration-300",
                  active === card.key 
                    ? "text-white" 
                    : "text-white/80 group-hover:text-white"
                )}>
                  {card.headline}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {active === card.key ? "Selected — view full benefits below" : "Click to explore this account type"}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced details panel with stats */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 relative"
          >
            {/* Stats banner */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
              {c.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="relative p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10"
                >
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-[#d593c0] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/60 mt-0.5 sm:mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-black/20 p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
              {/* Left side - Overview */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="md:col-span-2 flex flex-col"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span className="inline-flex h-11 w-11 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-xl sm:rounded-2xl border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-lg flex-shrink-0">
                    <span className="text-white scale-100 sm:scale-110 lg:scale-125">{ICONS[active]}</span>
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-white/90">
                      {c.eyebrow}
                    </p>
                    <h4 className="mt-1 sm:mt-1.5 text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight">
                      {c.title}
                    </h4>
                  </div>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-white/80 mb-4 sm:mb-6">
                  {c.why}
                </p>

                {/* Key features tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                  {c.keyFeatures.map((feature, idx) => (
                    <motion.span
                      key={feature}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25, delay: 0.15 + idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium rounded-full bg-white/10 text-white/80 border border-white/20"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Right side - Detailed benefits */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="md:col-span-3"
              >
                <div className="rounded-lg sm:rounded-xl border border-white/15 bg-gradient-to-br from-black/60 to-black/40 p-4 sm:p-5 lg:p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4 sm:mb-5 gap-2">
                    <p className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2">
                      <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gradient-to-r from-white to-[#d593c0] flex-shrink-0" />
                      <span className="truncate">Complete Feature Access</span>
                    </p>
                    <span className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/10 text-white/70 border border-white/20 flex-shrink-0">
                      {c.bullets.length}
                    </span>
                  </div>
                  <ul className="space-y-3 sm:space-y-4">
                    {c.bullets.map((b, idx) => (
                      <motion.li
                        key={b}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: 0.2 + idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
                        className="flex gap-2.5 sm:gap-3.5 text-xs sm:text-sm text-white/80 group/item hover:text-white transition-colors"
                      >
                        <span className="mt-0.5 inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-md sm:rounded-lg bg-gradient-to-br from-white/20 to-[#d593c0]/20 border border-white/10 flex-shrink-0 group-hover/item:border-white/30 transition-colors">
                          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="leading-relaxed flex-1">{b}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent" />
      </div>
    </section>
  );
}
