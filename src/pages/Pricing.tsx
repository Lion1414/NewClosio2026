import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  subtitle: string;
  users: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const allPlans: PricingPlan[] = [
  {
    name: 'Individual',
    price: '$45',
    subtitle: 'per user/month',
    users: 'Single Agent Account',
    description: 'Perfect for solo agents getting started with a professional CRM',
    features: [
      'Full CRM access',
      'Deal & policy tracking',
      'Mobile app (iOS & Android)',
      'Basic analytics dashboard',
      'Email notifications',
      'Standard email support',
      'Data export',
      '10GB storage',
    ],
  },
  {
    name: 'Growing Agency',
    price: '$1,500',
    subtitle: 'per month',
    users: '25-50 Users',
    description: 'Built for small to mid-size agencies ready to scale',
    features: [
      'Everything in Individual',
      'Team management & hierarchy',
      'Advanced analytics & reporting',
      'Priority email support',
      'Custom Slack/Discord integration',
      'Deal Bot automation',
      'Bulk import/export',
      'API access',
      '100GB storage',
      'Custom fields',
    ],
    highlighted: true,
  },
  {
    name: 'Professional',
    price: '$2,000',
    subtitle: 'per month',
    users: '51-100 Users',
    description: 'Advanced features for established agencies',
    features: [
      'Everything in Growing Agency',
      'Dedicated account manager',
      'Advanced reporting & insights',
      'Full API access',
      'Custom workflows & automations',
      'White-label options',
      'Phone support',
      'Onboarding assistance',
      '500GB storage',
      'Advanced permissions',
    ],
  },
  {
    name: 'Scale',
    price: '$2,500',
    subtitle: 'per month',
    users: '101-150 Users',
    description: 'Enterprise features for growing organizations',
    features: [
      'Everything in Professional',
      'Advanced security features',
      'Custom integrations',
      'Dedicated success manager',
      'Training & workshops',
      'Custom reporting',
      '1TB storage',
      '99.9% uptime SLA',
    ],
  },
  {
    name: 'Enterprise',
    price: '$3,000',
    subtitle: 'per month',
    users: '151-200 Users',
    description: 'Maximum power for large agencies',
    features: [
      'Everything in Scale',
      '24/7 priority support',
      'Advanced compliance tools',
      'Custom development',
      'Quarterly business reviews',
      'Unlimited storage',
      '99.95% uptime SLA',
    ],
  },
  {
    name: 'Custom Enterprise',
    price: 'Custom',
    subtitle: 'pricing',
    users: '200+ Users',
    description: 'Tailored solutions for the largest organizations',
    features: [
      'Everything in Enterprise',
      'Dedicated infrastructure',
      'Custom features & development',
      'On-premise deployment option',
      'Advanced security & compliance',
      'Dedicated support team',
      'Custom SLA terms',
      'Migration assistance',
    ],
  },
];

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 overflow-visible">
        {/* Pure Black Background */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Grid Pattern from Right Side - Fading Into Black and Bleeding Down */}
        <div className="absolute top-0 right-0 left-0 pointer-events-none" style={{ height: 'calc(100% + 300px)' }}>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              maskImage: 'linear-gradient(to left, black 0%, transparent 60%)',
              WebkitMaskImage: 'linear-gradient(to left, black 0%, transparent 60%)'
            }}
          />
        </div>

        {/* Grid Pattern from Left Side - Fading Into Black and Bleeding Down */}
        <div className="absolute top-0 right-0 left-0 pointer-events-none" style={{ height: 'calc(100% + 300px)' }}>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              maskImage: 'linear-gradient(to right, black 0%, transparent 60%)',
              WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 60%)'
            }}
          />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                Agents & Agency Plans
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Choose the plan that fits your agency size. Start with 30 days free.
            </p>

            {/* Simple badges */}
            <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-400">
              <span className="border border-purple-500/30 rounded-lg px-4 py-2">30-Day Free Trial</span>
              <span className="border border-white/10 rounded-lg px-4 py-2">Cancel Anytime</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards - 3 Rows */}
      <section className="pt-16 pb-48 relative overflow-visible">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          
          {/* Row 1: Individual Plan */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent pb-2">
                / Individual
              </h2>
            </div>
            
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -15% 0px' }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-5xl"
              >
                <div className="relative h-full rounded-2xl backdrop-blur-xl bg-gradient-to-b from-purple-500/20 via-white/10 to-transparent border-2 border-purple-400/50 shadow-2xl shadow-purple-500/30">
                  <div className="relative z-10 p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Left Side: Features */}
                      <div className="flex-1">
                        <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-3">
                          What's Included
                        </div>
                        <ul className="space-y-2">
                          {allPlans[0].features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Side: Pricing & CTA */}
                      <div className="flex-1 md:border-l md:border-white/10 md:pl-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">{allPlans[0].name}</h3>
                            <p className="text-sm text-gray-400 mb-4">{allPlans[0].description}</p>

                            {/* Price */}
                            <div className="flex items-baseline mb-3">
                              <span className="text-4xl font-bold text-white">{allPlans[0].price}</span>
                              <span className="text-gray-400 ml-2 text-base">/user per month</span>
                            </div>
                            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-400/40 rounded-lg px-4 py-2 mb-4">
                              <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                              <span className="text-purple-200 text-sm font-semibold">{allPlans[0].users}</span>
                            </span>

                            {/* CTA Buttons */}
                            <div className="space-y-2">
                              <button
                                onClick={() => {
                                  navigate('/schedule');
                                  window.scrollTo(0, 0);
                                }}
                                className="w-full py-3 px-6 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 group bg-gradient-to-r from-purple-500 to-white text-black hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105"
                              >
                                Start Free Trial
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </button>
                              
                              <button
                                onClick={() => {
                                  navigate('/schedule');
                                  window.scrollTo(0, 0);
                                }}
                                className="w-full py-2.5 px-6 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 hover:border-purple-400/30 hover:text-white group"
                              >
                                Book a Demo
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Row 2: Growing Agency Suite */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent pb-2">
                / Growing Agency Suite
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[allPlans[1], allPlans[2]].map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '0px 0px -15% 0px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="w-full"
                >
                  <div className="relative h-full rounded-2xl backdrop-blur-xl bg-gradient-to-b from-purple-500/20 via-white/10 to-transparent border-2 border-purple-400/50 shadow-2xl shadow-purple-500/30">
                    <div className="relative z-10 p-5">
                      <div className="space-y-3">
                        {/* Header */}
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1.5">{plan.name}</h3>
                          <p className="text-xs text-gray-400">{plan.description}</p>
                        </div>

                        {/* Price */}
                        <div>
                          <div className="flex items-baseline mb-2">
                            <span className="text-3xl font-bold text-white">{plan.price}</span>
                            <span className="text-gray-400 ml-2 text-sm">/mo</span>
                          </div>
                          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-400/40 rounded-lg px-3 py-1.5">
                            <svg className="w-3.5 h-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="text-purple-200 text-xs font-semibold">{plan.users}</span>
                          </span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="space-y-2">
                          <button
                            onClick={() => {
                              navigate('/schedule');
                              window.scrollTo(0, 0);
                            }}
                            className="w-full py-2.5 px-5 rounded-lg font-semibold text-xs transition-all duration-200 flex items-center justify-center gap-2 group bg-gradient-to-r from-purple-500 to-white text-black hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105"
                          >
                            Start Free Trial
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </button>
                          
                          <button
                            onClick={() => {
                              navigate('/schedule');
                              window.scrollTo(0, 0);
                            }}
                            className="w-full py-2 px-5 rounded-lg font-medium text-xs transition-all duration-200 flex items-center justify-center gap-2 bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 hover:border-purple-400/30 hover:text-white group"
                          >
                            Book a Demo
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>

                        {/* Features */}
                        <div className="border-t border-white/10 pt-3">
                          <div className="text-[9px] uppercase tracking-wider text-gray-500 font-semibold mb-2">
                            What's Included
                          </div>
                          <ul className="space-y-1.5">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <Check className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                                <span className="text-xs text-gray-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Row 3: Enterprise Suite */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent pb-2">
                / Enterprise Suite
              </h2>
            </div>
            
            <div className="flex justify-center gap-6 flex-wrap">
              {[allPlans[3], allPlans[4], allPlans[5]].map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '0px 0px -15% 0px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="w-full max-w-[380px]"
                >
                  <div className="relative h-full rounded-2xl backdrop-blur-xl bg-gradient-to-b from-purple-500/20 via-white/10 to-transparent border-2 border-purple-400/50 shadow-2xl shadow-purple-500/30">
                    <div className="relative z-10 p-6">
                      <div className="space-y-4">
                        {/* Header */}
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                          <p className="text-sm text-gray-400">{plan.description}</p>
                        </div>

                        {/* Price */}
                        <div>
                          <div className="flex items-baseline mb-3">
                            {plan.price === 'Custom' ? (
                              <>
                                <span className="text-4xl font-bold text-white">Custom</span>
                                <span className="text-gray-400 ml-2 text-sm">pricing</span>
                              </>
                            ) : (
                              <>
                                <span className="text-4xl font-bold text-white">{plan.price}</span>
                                <span className="text-gray-400 ml-2 text-base">/mo</span>
                              </>
                            )}
                          </div>
                          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-400/40 rounded-lg px-4 py-2">
                            <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span className="text-purple-200 text-sm font-semibold">{plan.users}</span>
                          </span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="space-y-2">
                          <button
                            onClick={() => {
                              navigate(plan.price === 'Custom' ? '/contact' : '/schedule');
                              window.scrollTo(0, 0);
                            }}
                            className="w-full py-3 px-6 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 group bg-gradient-to-r from-purple-500 to-white text-black hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105"
                          >
                            {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                          
                          <button
                            onClick={() => {
                              navigate('/schedule');
                              window.scrollTo(0, 0);
                            }}
                            className="w-full py-2.5 px-6 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 hover:border-purple-400/30 hover:text-white group"
                          >
                            Book a Demo
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>

                        {/* Features */}
                        <div className="border-t border-white/10 pt-4">
                          <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-3">
                            What's Included
                          </div>
                          <ul className="space-y-2">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -15% 0px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              <span className="text-gray-400">/ </span>Billing Questions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              {
                q: 'When am I charged?',
                a: 'After your 30-day free trial ends. Monthly plans bill on the same day each month.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes, cancel anytime with no penalties. Your access continues until the end of your billing period.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards (Visa, Mastercard, Amex) and ACH bank transfers for annual plans.',
              },
              {
                q: 'Do you offer refunds?',
                a: 'We offer a 30-day money-back guarantee on all paid plans. No questions asked.',
              },
              {
                q: 'How do upgrades/downgrades work?',
                a: 'Instant changes. Upgrades are prorated immediately. Downgrades take effect next billing cycle.',
              },
              {
                q: 'Are there any hidden fees?',
                a: 'No hidden fees. What you see is what you pay. No setup costs, no surprise charges.',
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -15% 0px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <h3 className="text-base font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-400">
                  <span className="text-gray-500">/ </span>{faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -15% 0px' }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl border border-white/10"
            style={{
              background: '#000000',
            }}
          >
            {/* Background Image with Higher Opacity */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop)',
                opacity: 0.4,
              }}
            />
            
            {/* Subtle Gradient Overlay with Purple Tint */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, rgba(40, 0, 60, 0.85) 100%)',
              }}
            />

            {/* Content */}
            <div className="relative z-10 p-8 sm:p-10 lg:p-12">
              {/* Text Content */}
              <div className="text-center mb-8">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
                >
                  Ready to transform your agency?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto"
                >
                  Start your 30-day free trial today and experience the full power of CLOSIO.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-3 justify-center"
                >
                  <button
                    onClick={() => {
                      navigate('/schedule');
                      window.scrollTo(0, 0);
                    }}
                    className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-200 inline-flex items-center justify-center gap-2 group"
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button
                    onClick={() => {
                      navigate('/contact');
                      window.scrollTo(0, 0);
                    }}
                    className="bg-transparent text-white font-semibold px-6 py-3 rounded-lg border-2 border-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-200 inline-flex items-center justify-center gap-2"
                  >
                    Contact Sales
                  </button>
                </motion.div>
              </div>

              {/* Stats in Single Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-2 gap-6 max-w-2xl mx-auto"
              >
                {[
                  { label: 'Free Trial', value: '30 Days' },
                  { label: 'Support', value: '24/7' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.3);
          border-radius: 2px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Pricing;
