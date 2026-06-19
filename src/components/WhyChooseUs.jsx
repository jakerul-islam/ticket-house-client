"use client";

import { FaShieldAlt, FaClock, FaTags, FaHeadset } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: <FaShieldAlt className="text-pink-500 text-2xl" />,
      title: "100% Secure Payment",
      description: "Your transactions are secured with industry-leading Stripe encryption. Travel with absolute peace of mind.",
    },
    {
      id: 2,
      icon: <FaClock className="text-indigo-400 text-2xl" />,
      title: "Instant Booking & Live Countdown",
      description: "Get your tickets instantly confirmed. Keep track of your trips with our real-time departure countdowns.",
    },
    {
      id: 3,
      icon: <FaTags className="text-emerald-400 text-2xl" />,
      title: "Best Price Guaranteed",
      description: "No hidden charges, no extra fees. Get competitive and transparent ticket prices from verified vendors.",
    },
    {
      id: 4,
      icon: <FaHeadset className="text-amber-400 text-2xl" />,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is available round the clock to help you with any booking changes or queries.",
    },
  ];

  return (
    <section className="w-full bg-slate-950 py-20 px-6 md:px-16 border-t border-white/5 my-8">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Why Choose <span className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">TicketBari</span>?
          </h2>
          <p className="text-sm md:text-base text-slate-400 font-medium leading-relaxed">
            We offer the easiest, fastest, and most reliable online ticket booking experience across Bangladesh.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-slate-900 border border-white/5 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/20 hover:shadow-2xl hover:shadow-pink-500/5"
            >
              {/* Top accent line visible on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-indigo-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* ICON WRAPPER */}
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* TEXT CONTENT */}
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-white tracking-tight group-hover:text-pink-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}