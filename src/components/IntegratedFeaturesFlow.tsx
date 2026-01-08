import React from "react";
import {
  BarChart3,
  DollarSign,
  Trophy,
  BookOpen,
} from "lucide-react";

type Feature = {
  title: string;
  href: string;
  Icon: React.ComponentType<any>;
};

const features: Feature[] = [
  { title: "Dashboard", href: "/features/dashboard", Icon: BarChart3 },
  { title: "Commission", href: "/features/commission", Icon: DollarSign },
  { title: "Leaderboard", href: "/features/leaderboard", Icon: Trophy },
  { title: "Book of Business", href: "/features/book-of-business", Icon: BookOpen },
];

export default function IntegratedFeaturesFlow() {
  return (
    <section className="relative w-full bg-black py-20">
      <div className="relative mx-auto w-full max-w-5xl px-6">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

        <div className="relative mx-auto mt-2 flex h-[420px] w-full max-w-3xl items-start justify-center">
          <div className="pointer-events-none absolute top-[150px] h-28 w-72 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:10px_10px]" />

          <div className="relative mt-2">
            <div className="absolute left-1/2 top-0 h-44 w-60 -translate-x-1/2 rotate-45 rounded-[28px] border border-white/15 bg-white/[0.02] shadow-[0_0_60px_rgba(255,255,255,0.08)]" />
            <div className="absolute left-1/2 top-9 h-44 w-60 -translate-x-1/2 rotate-45 rounded-[28px] border border-white/12 bg-white/[0.03] backdrop-blur-md" />
            <div className="absolute left-1/2 top-16 h-44 w-60 -translate-x-1/2 rotate-45 rounded-[28px] border border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.03))] shadow-[0_0_90px_rgba(255,255,255,0.10)]" />

            <div className="pointer-events-none absolute left-1/2 top-[150px] h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-2xl" />
          </div>

          <svg
            className="pointer-events-none absolute inset-0"
            viewBox="0 0 900 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.9">
              <path
                d="M450 235 C450 260, 450 280, 450 305"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="2"
              />
              <path
                d="M450 305 C450 330, 330 340, 245 360"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="2"
              />
              <path
                d="M450 305 C450 332, 400 340, 365 360"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="2"
              />
              <path
                d="M450 305 C450 332, 500 340, 535 360"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="2"
              />
              <path
                d="M450 305 C450 330, 570 340, 655 360"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="2"
              />
            </g>

            <g opacity="0.55" filter="url(#blurGlow)">
              <path
                d="M450 235 C450 260, 450 280, 450 305"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="6"
              />
              <path
                d="M450 305 C450 330, 330 340, 245 360"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="6"
              />
              <path
                d="M450 305 C450 332, 400 340, 365 360"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="6"
              />
              <path
                d="M450 305 C450 332, 500 340, 535 360"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="6"
              />
              <path
                d="M450 305 C450 330, 570 340, 655 360"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="6"
              />
            </g>

            <defs>
              <filter id="blurGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" />
              </filter>
            </defs>
          </svg>

          <div className="absolute bottom-0 left-1/2 flex w-full max-w-4xl -translate-x-1/2 justify-between gap-3 px-2">
            {features.map(({ title, href, Icon }) => (
              <a
                key={title}
                href={href}
                className="group relative flex w-full max-w-[220px] flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="relative grid h-14 w-14 place-items-center rounded-xl border border-white/10 bg-black/40 shadow-[0_0_30px_rgba(255,255,255,0.06)]">
                  <Icon className="h-6 w-6 text-white/80 transition group-hover:text-white" />
                  <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_60%)] opacity-0 transition group-hover:opacity-100" />
                </div>

                <div className="text-center">
                  <div className="text-sm font-medium text-white/85">{title}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
