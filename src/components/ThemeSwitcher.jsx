"use client";

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  // পেজ সম্পূর্ণ মাউন্ট হওয়ার পর থিম চেক করবে (Hydration Error বন্ধ করবে)
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    
    // যদি আগে লাইট মোড সেভ করা থাকে
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  // সার্ভার সাইড রেন্ডারিং এর সময় ফাঁকা বাটন দেখাবে যাতে লেআউট না ভাঙে
  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/5 bg-slate-900/50 hover:bg-slate-800/80 transition-all duration-200 cursor-pointer text-slate-300"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <FaSun size={15} className="text-yellow-400" />
      ) : (
        <FaMoon size={14} className="text-indigo-400" />
      )}
    </button>
  );
}