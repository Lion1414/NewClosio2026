import React from 'react';

const MobileSection: React.FC = () => {
  return (
    <section id="mobile" className="py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm font-medium text-[#A8B3C7]">Available on All Devices</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              <span className="block text-white/90">Experience</span>
              <span className="block text-white/90">the power...</span>
            </h2>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2C66FF] to-[#00D4FF]">
                Mobile Compatible
              </span>
            </h3>

            <p className="text-base sm:text-lg text-[#A8B3C7] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Access your complete agency dashboard from anywhere. Track leads, monitor commissions,
              and manage your team on the go with our fully responsive mobile experience.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-[#2C66FF]" />
                <span className="text-sm text-[#E8EEF5]">Real-time Sync</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span className="text-sm text-[#E8EEF5]">Offline Access</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-[#2C66FF]" />
                <span className="text-sm text-[#E8EEF5]">Push Notifications</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2C66FF]/20 to-[#00D4FF]/20 blur-3xl opacity-30 rounded-full scale-150" />
            <div className="relative">
              <img
                src="/purple_pink_gradient_mobile_application_presentation.png"
                alt="Closio mobile application showcasing dashboard, leaderboard, and login screens"
                className="w-full h-auto max-w-2xl mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSection;
