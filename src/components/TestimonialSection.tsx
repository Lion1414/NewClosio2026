import React from 'react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-14 lg:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-black rounded-3xl p-6 sm:p-8 lg:p-10 text-center">
          <div className="mb-6">
            <img
              src="/closio_main_logo.png"
              alt="Closio"
              className="h-14 mx-auto"
            />
          </div>

          <blockquote className="mb-8">
            <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-slate-400">
              "We're not spreadsheet experts, but <span className="text-white font-semibold">Closio is so intuitive and powerful</span> — it lets us focus on what matters most: our clients and commissions."
            </p>
          </blockquote>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6ad4f2] to-[#d593c0] flex items-center justify-center mb-3">
              <span className="text-black font-bold text-base">MJ</span>
            </div>
            <div>
              <p className="text-white font-semibold text-base">Michael Johnson</p>
              <p className="text-slate-400 text-sm">Agency Director, Premier Life Insurance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
