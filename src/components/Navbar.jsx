"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser, FaSignOutAlt, FaThLarge } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { authClient, useSession } from "@/lib/auth-client";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";

// যদি আপনার প্রোজেক্টে আলাদা কোনো Logo বা ThemeSwitcher কম্পোনেন্ট থাকে, সেগুলোর ইমপোর্ট ঠিক রাখবেন।

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

 

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // const handleLogout = async () => {
  //   await authClient.signOut();
  //   setDropdownOpen(false);
  //   router.refresh();
  //   router.push("/");
  // };

   
  const handleLogout = async () => {
  try {
    await authClient.signOut();
    setDropdownOpen(false);
    
   
    window.location.href = "/";
  } catch (error) {
    console.error("Logout error:", error);
  }
};

  // ইউজারের নামের প্রথম অক্ষর বের করার জন্য (যদি ইমেজ না থাকে)
  const getInitials = (name) => {
    if (!name) return "U";
    return name.charAt(0).toUpperCase();
  };
  if (pathname.includes("dashboard")) {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/65 backdrop-blur-md py-3.5 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO (যদি এটি গ্লোবাল বা লোকাল কম্পোনেন্ট হয়) */}
        <Link href="/" className="flex items-center gap-2 font-black text-xl text-white tracking-tight">
          <span className="bg-gradient-to-r from-pink-500 to-indigo-600 bg-clip-text text-transparent">Ticket</span>Bari
        </Link>

        {/* NAVIGATION LINKS */}
        <div className="hidden sm:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${pathname === "/" ? "text-pink-500 font-semibold" : "text-slate-300 hover:text-white"}`}
          >
            Home
          </Link>
          <Link
            href="/alltickets"
            className={`text-sm font-medium transition-colors ${pathname.startsWith("/events") ? "text-pink-500 font-semibold" : "text-slate-300 hover:text-white"}`}
          >
            All Tickets
          </Link>
          {session && session?.user && (
            <Link
              href={`/dashboard/${session?.user?.role || "user"}`}
              className={`text-sm font-medium transition-colors ${pathname.startsWith("/dashboard") ? "text-pink-500 font-semibold" : "text-slate-300 hover:text-white"}`}
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          <ThemeSwitcher></ThemeSwitcher>

          {/* লগইন না করা থাকলে এই বাটনগুলো দেখাবে */}
          {!session && (
            <div className="flex items-center gap-3">
              <Link href="/auth/login">
                <button
                  className="inline-flex items-center justify-center font-semibold text-xs text-slate-300 hover:text-white h-9 px-4 rounded-xl hover:bg-white/5 transition cursor-pointer"
                >
                  Login
                </button>
              </Link>
              <Link
                href="/auth/signup"
                className="inline-flex items-center justify-center font-semibold text-xs bg-gradient-to-r from-pink-500 to-indigo-600 text-white shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20 transition h-9 px-4 rounded-xl"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* ইউজার লগইন করা থাকলে প্রোফাইল ড্রপডাউন দেখাবে */}
          {session && session?.user && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center transition-transform hover:scale-105 outline-none focus:outline-none cursor-pointer"
              >
                {session?.user?.image ? (
                  <Image
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-full object-cover border border-pink-500 shadow-md shadow-pink-500/10"
                    src={session.user.image}
                    alt="avatar"
                    unoptimized // সোশ্যাল বা এক্সটার্নাল ইমেজের ক্ষেত্রে Next.js ডোমেইন এরর এড়াতে এটি ব্যবহার করা নিরাপদ
                  />
                ) : (
                  // যদি ইমেজ না থাকে, তবে একটি চমৎকার গ্রেডিয়েন্ট লেটার অবতার দেখাবে
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-indigo-600 text-white flex items-center justify-center font-bold text-sm border border-pink-500/50 shadow-md">
                    {getInitials(session?.user?.name)}
                  </div>
                )}
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-slate-900/95 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl py-2 z-55 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* User info */}
                  <div className="px-4 py-2.5 border-b border-white/5 mb-1.5 cursor-default">
                    <p className="text-[10px] text-pink-400 font-bold uppercase tracking-wider">
                      {session?.user?.role || "User"} Account
                    </p>
                    <p className="font-bold text-white text-sm mt-0.5 truncate">{session?.user?.name}</p>
                    <p className="text-[11px] text-slate-400 truncate mt-0.5">{session?.user?.email}</p>
                  </div>

                  {/* Actions */}
                  <Link
                    href={`/dashboard/${session?.user?.role || "user"}`}
                    onClick={() => setDropdownOpen(false)}
                    className="w-full flex items-center gap-2.5 px-4 py-2.5 text-left text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition cursor-pointer"
                  >
                    <FaThLarge className="text-slate-400 text-sm shrink-0" />
                    <span>My Dashboard</span>
                  </Link>

                  <Link
                    href={`/dashboard/${session?.user?.role || "user"}/settings`}
                    onClick={() => setDropdownOpen(false)}
                    className="w-full flex items-center gap-2.5 px-4 py-2.5 text-left text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition cursor-pointer"
                  >
                    <FaUser className="text-slate-400 text-sm shrink-0" />
                    <span>Profile Settings</span>
                  </Link>

                  <div className="border-t border-white/5 my-1.5" />

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2.5 px-4 py-2.5 text-left text-xs font-semibold text-red-400 hover:text-red-300 hover:bg-red-500/5 transition cursor-pointer"
                  >
                    <FaSignOutAlt className="text-sm shrink-0 text-red-400" />
                    <span>Log Out</span>
                  </button>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </nav>
  );
}