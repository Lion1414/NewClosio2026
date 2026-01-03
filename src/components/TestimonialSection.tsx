import React from 'react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-black rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
          <div className="mb-10">
            <img
              src="/closio_main_logo.png"
              alt="Closio"
              className="h-20 mx-auto"
            />
          </div>

          <blockquote className="mb-12">
            <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-slate-400">
              "We're not spreadsheet experts, but <span className="text-white font-semibold">Closio is so intuitive and powerful</span> — it lets us focus on what matters most: our clients and commissions."
            </p>
          </blockquote>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#6ad4f2] to-[#d593c0] flex items-center justify-center mb-4">
              <span className="text-black font-bold text-lg">MJ</span>
            </div>
            <div>
              <p className="text-white font-semibold text-lg">Michael Johnson</p>
              <p className="text-slate-400 text-sm">Agency Director, Premier Life Insurance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
