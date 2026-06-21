"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBus, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // ডার্ক/লাইট মোডের জন্য স্ট্যাটিক স্টেট (চ্যালেঞ্জ রিকোয়ারমেন্ট ৫)
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // এখানে পরবর্তীতে আপনার theme চেঞ্জিং লজিক (যেমন document.documentElement.classList.toggle('light')) বসাতে পারবেন।
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/75 backdrop-blur-md py-3.5 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO (Requirement 1b) */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white tracking-tight">
          <FaBus className="text-pink-500 text-2xl" />
          <span>Ticket<span className="text-pink-500">Bari</span></span>
        </Link>

        {/* DESKTOP NAVIGATION LINKS (Requirement 1b) */}
        <div className="hidden sm:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${pathname === "/" ? "text-pink-500 font-semibold" : "text-slate-300 hover:text-white"}`}
          >
            Home
          </Link>
          <Link
            href="/tickets"
            className={`text-sm font-medium transition-colors ${pathname.startsWith("/tickets") ? "text-pink-500 font-semibold" : "text-slate-300 hover:text-white"}`}
          >
            All Tickets
          </Link>
          <Link
            href="/dashboard"
            className={`text-sm font-medium transition-colors ${pathname.startsWith("/dashboard") ? "text-pink-500 font-semibold" : "text-slate-300 hover:text-white"}`}
          >
            Dashboard
          </Link>
        </div>

        {/* RIGHT ACTIONS - STATIC LOGIN / REGISTER & INTEGRATED THEME TOGGLE */}
        <div className="hidden sm:flex items-center gap-4">
          
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-white/5 text-slate-300 hover:text-white transition text-sm cursor-pointer"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <FaSun className="text-amber-400" /> : <FaMoon />}
          </button>
          
          <div className="flex items-center gap-3">
            <Link href="/auth/login">
              <button className="inline-flex items-center justify-center font-semibold text-xs text-slate-300 hover:text-white h-9 px-4 rounded-xl hover:bg-white/5 transition">
                Login
              </button>
            </Link>
            <Link
              href="/auth/signup"
              className="inline-flex items-center justify-center font-semibold text-xs bg-gradient-to-r from-pink-500 to-indigo-600 text-white shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20 transition h-9 px-4 rounded-xl"
            >
              Register
            </Link>
          </div>
        </div>

        {/* MOBILE HAMBURGER BUTTON & THEME TOGGLE (Requirement 1b) */}
        <div className="sm:hidden flex items-center gap-2">
          {/* Mobile Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-white/5 text-slate-300 hover:text-white transition text-sm"
          >
            {isDarkMode ? <FaSun className="text-amber-400" /> : <FaMoon />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-300 hover:text-white text-xl p-2 focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/5 px-6 py-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-200">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-sm font-medium ${pathname === "/" ? "text-pink-500" : "text-slate-300"}`}
          >
            Home
          </Link>
          <Link
            href="/tickets"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-sm font-medium ${pathname.startsWith("/tickets") ? "text-pink-500" : "text-slate-300"}`}
          >
            All Tickets
          </Link>
          <Link
            href="/dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-sm font-medium ${pathname.startsWith("/dashboard") ? "text-pink-500" : "text-slate-300"}`}
          >
            Dashboard
          </Link>
          
          <div className="border-t border-white/5 my-1" />
          
          <div className="flex flex-col gap-2">
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full text-center font-semibold text-xs text-slate-300 py-2.5 rounded-xl bg-white/5">
                Login
              </button>
            </Link>
            <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full text-center font-semibold text-xs bg-gradient-to-r from-pink-500 to-indigo-600 text-white py-2.5 rounded-xl">
                Register
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}