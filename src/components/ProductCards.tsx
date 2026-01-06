import React from 'react';

const Icon3DPipeline: React.FC = () => (
  <svg className="w-32 h-32 mx-auto mb-6" viewBox="0 0 200 200" fill="none">
    <g transform="translate(40, 40)">
      {/* Top piece */}
      <path d="M 20 30 L 50 15 L 80 30 L 50 45 Z" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1.5"/>
      <path d="M 50 45 L 50 70 L 20 55 L 20 30 Z" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1.5"/>
      <path d="M 80 30 L 80 55 L 50 70 L 50 45 Z" fill="#FAFAFA" stroke="#D1D5DB" strokeWidth="1.5"/>

      {/* Middle piece */}
      <path d="M 65 50 L 95 35 L 125 50 L 95 65 Z" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1.5"/>
      <path d="M 95 65 L 95 90 L 65 75 L 65 50 Z" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1.5"/>
      <path d="M 125 50 L 125 75 L 95 90 L 95 65 Z" fill="#FAFAFA" stroke="#D1D5DB" strokeWidth="1.5"/>
    </g>
  </svg>
);

const Icon3DCommission: React.FC = () => (
  <svg className="w-32 h-32 mx-auto mb-6" viewBox="0 0 200 200" fill="none">
    <g transform="translate(50, 30)">
      {/* Pie chart base */}
      <ellipse cx="50" cy="85" rx="48" ry="8" fill="#D1D5DB"/>
      {/* Main body */}
      <path d="M 2 50 Q 2 20, 50 20 Q 98 20, 98 50 L 98 80 Q 98 95, 50 95 Q 2 95, 2 80 Z" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1.5"/>
      {/* Pie slice */}
      <path d="M 50 50 L 50 20 Q 98 20, 98 50 Z" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1.5"/>
      <path d="M 50 50 L 98 50 L 98 80 Q 98 88, 80 92 Z" fill="#FAFAFA" stroke="#D1D5DB" strokeWidth="1.5"/>
    </g>
  </svg>
);

const Icon3DOnboarding: React.FC = () => (
  <svg className="w-32 h-32 mx-auto mb-6" viewBox="0 0 200 200" fill="none">
    <g transform="translate(55, 35)">
      {/* Badge/shield shape */}
      <path d="M 45 10 L 70 25 L 70 55 Q 70 75, 45 90 Q 20 75, 20 55 L 20 25 Z" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1.5"/>
      <path d="M 45 10 L 70 25 L 70 55 Q 70 75, 45 90 L 45 10 Z" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1.5"/>
      {/* Person icon inside */}
      <circle cx="45" cy="40" r="8" fill="#D1D5DB"/>
      <path d="M 35 60 Q 35 50, 45 50 Q 55 50, 55 60 L 55 70 L 35 70 Z" fill="#D1D5DB"/>
    </g>
  </svg>
);

const ProductCards: React.FC = () => {
  const productFeatures = [
    {
      icon: Icon3DPipeline,
      title: 'Unified Pipeline',
      description: 'Complete visibility from lead generation to issue paid with real-time tracking across every stage.'
    },
    {
      icon: Icon3DCommission,
      title: 'Commission Clarity',
      description: 'Transparent commission tracking and splits management with automated calculations and reporting.'
    },
    {
      icon: Icon3DOnboarding,
      title: 'Agent Onboarding',
      description: 'Streamlined role-based access and permissions with preset configurations for quick team setup.'
    }
  ];

  return (
    <section id="product" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4 text-black">
            Policy Map Solutions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Everything you need to manage your life insurance business in one powerful, purpose-built platform
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-[#F5F5F5] rounded-2xl p-8 sm:p-10 hover:shadow-lg transition-all duration-300"
              >
                <IconComponent />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-black">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;