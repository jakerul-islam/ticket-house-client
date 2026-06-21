"use client";

import { useState } from "react";
import Image from "next/image";
import { FaUser, FaEnvelope, FaShieldAlt, FaCalendarAlt } from "react-icons/fa";

export default function ProfileForm({ user }) {
  const [name, setName] = useState(user?.name || "");

  const getInitials = (name) => {
    if (!name) return "U";
    return name.charAt(0).toUpperCase();
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updating name to:", name);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-2">
      {/* 🌟 লাইট মোডের জন্য ক্লিন কার্ড ডিজাইন */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm">
        
        {/* হেডার শিরোনাম */}
        <div className="mb-8 border-b border-slate-100 pb-5">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800">
            Profile Information
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Update your personal details and manage your account settings.
          </p>
        </div>

        {/* অবতার / ইমেজ সেকশন */}
        <div className="flex flex-col sm:flex-row items-center gap-5 mb-8 bg-slate-50/50 p-4 rounded-xl border border-slate-100/80">
          <div className="relative">
            {user?.image ? (
              <Image
                width={80}
                height={80}
                src={user.image}
                alt="Avatar"
                className="w-20 h-20 rounded-full object-cover border-2 border-pink-500 shadow-sm"
                unoptimized
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-indigo-600 text-white flex items-center justify-center font-bold text-2xl shadow-md">
                {getInitials(user?.name)}
              </div>
            )}
          </div>

          <div className="text-center sm:text-left space-y-1.5">
            <button type="button" className="px-3.5 py-1.5 text-xs font-semibold bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-lg shadow-xs transition cursor-pointer">
              Change Avatar
            </button>
            <p className="text-[11px] text-slate-400">
              JPG, GIF or PNG. Max size of 5MB.
            </p>
          </div>
        </div>

        {/* ইনফরমেশন ফর্ম গ্রিড */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* ফুল নেম ইনপুট */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <FaUser className="text-pink-500" /> Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:bg-white transition-all shadow-2xs"
                placeholder="Enter full name"
              />
            </div>

            {/* ইমেইল এড্রেস ইনপুট */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <FaEnvelope className="text-indigo-500" /> Email Address
              </label>
              <input
                type="email"
                defaultValue={user?.email || ""}
                disabled
                className="w-full bg-slate-100/80 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-500 cursor-not-allowed opacity-90 select-all"
              />
            </div>

            {/* অ্যাকাউন্ট রোল */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <FaShieldAlt className="text-pink-500" /> Account Role
              </label>
              <div className="w-full bg-slate-50 border border-slate-200/60 rounded-xl px-4 py-2.5 text-sm text-pink-600 font-semibold capitalize flex items-center gap-2 select-none">
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                {user?.role || "User"} Account
              </div>
            </div>

            {/* জয়েনিং ডেট */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <FaCalendarAlt className="text-indigo-500" /> Member Since
              </label>
              <div className="w-full bg-slate-50 border border-slate-200/60 rounded-xl px-4 py-2.5 text-sm text-slate-600 select-none">
                {formatDate(user?.createdAt)}
              </div>
            </div>

          </div>

          {/* অ্যাকশন বাটনসমূহ */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-3 items-center justify-start">
            <button
              type="submit"
              className="px-5 py-2.5 bg-gradient-to-r from-pink-500 to-indigo-600 hover:opacity-95 text-white font-semibold text-xs rounded-xl shadow-xs transition-all duration-200 cursor-pointer"
            >
              Update Profile
            </button>
            <button
              type="button"
              className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs border border-slate-200 rounded-xl shadow-2xs transition cursor-pointer"
            >
              Reset Password
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}