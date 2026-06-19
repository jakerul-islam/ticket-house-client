"use client";

import { useState } from "react";
import { FaBus, FaTrain, FaPlane } from "react-icons/fa";

export default function HeroBanner() {
  // ৩টি ট্রান্সপোর্ট টাইপের জন্য ডেটা অবজেক্ট
  const bannerData = {
    bus: {
      title: "Comfortable Bus Journeys Across Bangladesh",
      description: "Book reliable bus tickets at the best price. Travel safely and comfortably.",
      bgImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1920", // বাসের ইমেজ লিংক
    },
    train: {
      title: "Scenic Train Rides Through Lush Greenery",
      description: "Experience the ultimate comfort of Bangladesh Railway. Affordable and punctual.",
      bgImage: "https://i.ibb.co.com/93C66Sq8/image.png", // ট্রেনের ইমেজ লিংক
    },
    flight: {
      title: "Fly High & Fast To Your Destination",
      description: "Discover exclusive domestic and international flight deals. Save time, fly premium.",
      bgImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1920", // ফ্লাইটের ইমেজ লিংক
    },
  };

  // একটি স্টেট দিয়ে কারেন্ট ক্যাটাগরি ট্র্যাক করা হচ্ছে
  const [activeTab, setActiveTab] = useState("bus");

  const currentBanner = bannerData[activeTab];

  return (
    <div 
      className="relative w-full h-[550px] md:h-[600px] flex items-center justify-start px-6 md:px-16 transition-all duration-700 ease-in-out bg-cover bg-center"
      style={{ backgroundImage: `url('${currentBanner.bgImage}')` }}
    >
      {/* ইমেজটির ওপর ইমেজের মতো ডার্ক ওভারলে (Overlay) */}
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[1px]" />

      {/* মেইন কনটেন্ট বক্স */}
      <div className="relative z-10 max-w-3xl flex flex-col gap-6 text-white animate-in fade-in slide-in-from-bottom-5 duration-500">
        
        {/* আইকন ট্যাব সিলেকশন (Requirement 3) */}
        <div className="flex items-center gap-3 bg-white/10 p-1.5 rounded-full w-fit backdrop-blur-md border border-white/10">
          
          {/* BUS TAB */}
          <button
            onClick={() => setActiveTab("bus")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === "bus" 
                ? "bg-white text-slate-950 shadow-md scale-105" 
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <FaBus className={activeTab === "bus" ? "text-pink-500" : ""} />
            <span>Bus</span>
          </button>

          {/* TRAIN TAB */}
          <button
            onClick={() => setActiveTab("train")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === "train" 
                ? "bg-white text-slate-950 shadow-md scale-105" 
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <FaTrain className={activeTab === "train" ? "text-pink-500" : ""} />
            <span>Train</span>
          </button>

          {/* FLIGHT TAB */}
          <button
            onClick={() => setActiveTab("flight")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === "flight" 
                ? "bg-white text-slate-950 shadow-md scale-105" 
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <FaPlane className={activeTab === "flight" ? "text-pink-500" : ""} />
            <span>Flight</span>
          </button>

        </div>

        {/* ডাইনামিক টেক্সট সেকশন */}
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight md:leading-none max-w-2xl text-white">
            {currentBanner.title}
          </h1>
          <p className="text-sm md:text-base text-slate-300 font-medium max-w-lg mt-1">
            {currentBanner.description}
          </p>
        </div>

        {/* এক্সট্রা কল-টু-অ্যাকশন বাটন (অপশনাল কিন্তু ডিজাইনকে সুন্দর করবে) */}
        <div className="mt-2">
          <button className="inline-flex items-center justify-center font-bold text-xs md:text-sm bg-gradient-to-r from-pink-500 to-indigo-600 text-white shadow-xl shadow-pink-500/20 hover:scale-105 transition duration-300 h-11 px-6 rounded-xl">
            Explore Tickets
          </button>
        </div>

      </div>
    </div>
  );
}