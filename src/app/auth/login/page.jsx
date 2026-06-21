"use client";

import { useState } from "react";

import Link from "next/link";
import { FaEnvelope, FaLock, FaBus } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const { data, error } = await authClient.signIn.email({
        email: email,
        password: password,
        callbackURL: "/", // লগইন সফল হলে যেখানে রিডাইরেক্ট করতে চান (যেমন: ড্যাশবোর্ড বা হোমপেজ)
      });

      if (error) {
        setErrorMessage(error.message || "Invalid email or password.");
        setLoading(false);
        return;
      }

      console.log("Login Success Data:", data);
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setErrorMessage("");
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",  
      });
    } catch (err) {
      console.error("Google Sign-In Error:", err);
      setErrorMessage("Google authentication failed. Please try again.");
    }
  };

  return (
    <div className="min-h-[calc(100vh-70px)] bg-slate-950 flex items-center justify-center px-6 py-12 border-t border-white/5">
      <div className="w-full max-w-md bg-slate-900 border border-white/5 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        
        {/* ব্যাকগ্রাউন্ড গ্লো */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* হেডার */}
        <div className="text-center flex flex-col items-center gap-2 mb-8">
          <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shadow-inner">
            <FaBus className="text-pink-500 text-xl" />
          </div>
          <h2 className="text-2xl font-extrabold text-white tracking-tight mt-2">
            Welcome Back
          </h2>
          <p className="text-xs md:text-sm text-slate-400 font-medium">
            Login to your TicketBari account to manage bookings
          </p>
        </div>

        {/* ওয়ার্নিং বক্স */}
        {errorMessage && (
          <div className="mb-5 p-3.5 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold rounded-xl text-center">
            {errorMessage}
          </div>
        )}

        {/* লগইন ফর্ম */}
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          
          {/* EMAIL FIELD */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Email Address</label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
              <input
                type="email"
                name="email"
                required
                placeholder="example@mail.com"
                className="w-full bg-slate-950 border border-white/5 text-slate-200 text-sm h-11 pl-11 pr-4 rounded-xl outline-none focus:border-pink-500/50 transition font-medium"
              />
            </div>
          </div>

          {/* PASSWORD FIELD */}
          <div className="flex flex-col gap-1.5 relative">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Password</label>
              {/* পাসওয়ার্ড ভুলে গেলে রিকভারি লিংক (ঐচ্ছিক) */}
              <Link href="/forgot-password" className="text-[11px] text-pink-500 hover:underline font-bold">
                Forgot?
              </Link>
            </div>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••"
                className="w-full bg-slate-950 border border-white/5 text-slate-200 text-sm h-11 pl-11 pr-4 rounded-xl outline-none focus:border-pink-500/50 transition font-medium"
              />
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full font-bold text-xs md:text-sm bg-gradient-to-r from-pink-500 to-indigo-600 text-white shadow-xl shadow-pink-500/10 hover:shadow-pink-500/20 transition h-11 rounded-xl mt-2 flex items-center justify-center disabled:opacity-60 cursor-pointer"
          >
            {loading ? "Logging In..." : "Log In"}
          </button>
        </form>

        {/* DIVIDER */}
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-white/5"></div>
          <span className="flex-shrink mx-4 text-slate-500 font-bold text-[10px] uppercase tracking-widest">Or login with</span>
          <div className="flex-grow border-t border-white/5"></div>
        </div>

        {/* GOOGLE SIGN IN */}
        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="w-full flex items-center justify-center gap-2.5 font-bold text-xs bg-white/5 border border-white/5 text-slate-200 hover:text-white hover:bg-white/10 h-11 rounded-xl transition cursor-pointer"
        >
          <FcGoogle size={18} />
          <span>Continue with Google</span>
        </button>

        {/* DONT HAVE AN ACCOUNT? */}
        <p className="text-center text-xs font-semibold text-slate-400 mt-6">
          Don't have an account?{" "}
          <Link href="/register" className="text-pink-500 hover:underline font-bold">
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
}