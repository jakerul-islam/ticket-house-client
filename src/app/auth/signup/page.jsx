// "use client";

// import { authClient } from "@/lib/auth-client";
// import Link from "next/link";

// import { FaUser, FaEnvelope, FaLock, FaBus, FaUserTag } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";

// export default function RegisterPage() {
    

//     const onSubmit = async (e) => {
//   e.preventDefault(); // পেজ রিফ্রেশ হওয়া বন্ধ করবে

//   const formData = new FormData(e.currentTarget); // ফর্মের সব ডাটা কালেক্ট করবে

//   // ইনপুট ফিল্ডের 'name' অ্যাট্রিবিউট ধরে ডাটা বের করা
//   const name = formData.get("name");
//   const email = formData.get("email");
//   const role = formData.get("role");
//   const password = formData.get("password");

//   try {
//     // BetterAuth ফাংশনে ফর্মের ভেরিয়েবলগুলো পাস করা হলো
//     const { data, error } = await authClient.signUp.email({
//       email: email,
//       password: password,
//       name: name,
//       role: role, // আপনার BetterAuth স্কিমাতে যদি role সাপোর্ট থাকে
//     });

//     if (error) {
//       console.error("Registration Error:", error.message);
//       // এখানে কোনো স্টেট বা টোস্টে এরর দেখাতে পারেন
//       return;
//     }

//     console.log("Success Data:", data);
//     // সফল হলে ড্যাশবোর্ড বা লগইন পেজে রিডাইরেক্ট করতে পারেন
    
//   } catch (err) {
//     console.error("Something went wrong:", err);
//   }
// };
//   return (
//     <div className="min-h-[calc(100vh-70px)] bg-slate-950 flex items-center justify-center px-6 py-12 border-t border-white/5">
//       <div className="w-full max-w-md bg-slate-900 border border-white/5 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        
//         {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
//         <div className="absolute -top-24 -left-24 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

//         {/* লোগো ও হেডার */}
//         <div className="text-center flex flex-col items-center gap-2 mb-8">
//           <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shadow-inner">
//             <FaBus className="text-pink-500 text-xl" />
//           </div>
//           <h2 className="text-2xl font-extrabold text-white tracking-tight mt-2">
//             Create an Account
//           </h2>
//           <p className="text-xs md:text-sm text-slate-400 font-medium">
//             Join TicketBari to book your tickets effortlessly
//           </p>
//         </div>

//         {/* রেজিস্ট্রেশন ফর্ম */}
//         <form onSubmit={onSubmit} className="flex flex-col gap-4">
          
//           {/* NAME FIELD */}
//           <div className="flex flex-col gap-1.5 relative">
//             <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Full Name</label>
//             <div className="relative">
//               <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
//               <input
             
//                 type="text"
//                 name="name"
//                 required
//                 placeholder="John Doe"
//                 className="w-full bg-slate-950 border border-white/5 text-slate-200 text-sm h-11 pl-11 pr-4 rounded-xl outline-none focus:border-pink-500/50 transition font-medium"
//               />
//             </div>
//           </div>

//           {/* EMAIL FIELD */}
//           <div className="flex flex-col gap-1.5 relative">
//             <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Email Address</label>
//             <div className="relative">
//               <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
//               <input
          
//                 type="email"
//                 name="email"
//                 required
//                 placeholder="example@mail.com"
//                 className="w-full bg-slate-950 border border-white/5 text-slate-200 text-sm h-11 pl-11 pr-4 rounded-xl outline-none focus:border-pink-500/50 transition font-medium"
//               />
//             </div>
//           </div>

//           {/* ROLE SELECTION FIELD (User / Vendor) */}
//           <div className="flex flex-col gap-1.5 relative">
//             <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Register As</label>
//             <div className="relative">
//               <FaUserTag className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
//               <select
             
//                 name="role"
//                 required
//                 defaultValue="user"
//                 className="w-full bg-slate-950 border border-white/5 text-slate-300 text-sm h-11 pl-11 pr-4 rounded-xl outline-none focus:border-pink-500/50 transition font-medium cursor-pointer appearance-none"
//               >
//                 <option value="user" className="bg-slate-900 text-white">User </option>
//                 <option value="vendor" className="bg-slate-900 text-white">Vendor </option>
//               </select>
//               {/* কাস্টম ড্রপডাউন অ্যারো ইফেক্ট */}
//               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
//                 <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                   <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
//                 </svg>
//               </div>
//             </div>
//           </div>

//           {/* PASSWORD FIELD */}
//           <div className="flex flex-col gap-1.5 relative">
//             <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Password</label>
//             <div className="relative">
//               <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
//               <input
//                 type="password"
//                 name="password"
//                 required
//                 placeholder="••••••••"
//                 className="w-full bg-slate-950 border border-white/5 text-slate-200 text-sm h-11 pl-11 pr-4 rounded-xl outline-none focus:border-pink-500/50 transition font-medium"
//               />
//             </div>
//           </div>

//           {/* SUBMIT BUTTON */}
//           <button
//             type="submit"
//             className="w-full font-bold text-xs md:text-sm bg-gradient-to-r from-pink-500 to-indigo-600 text-white shadow-xl shadow-pink-500/10 hover:shadow-pink-500/20 transition h-11 rounded-xl mt-2 flex items-center justify-center cursor-pointer"
//           >
//             Sign Up
//           </button>
//         </form>

//         {/* DIVIDER */}
//         <div className="relative flex py-5 items-center">
//           <div className="flex-grow border-t border-white/5"></div>
//           <span className="flex-shrink mx-4 text-slate-500 font-bold text-[10px] uppercase tracking-widest">Or login with</span>
//           <div className="flex-grow border-t border-white/5"></div>
//         </div>

//         {/* SOCIAL LOGIN: GOOGLE BUTTON */}
//         <button
//           type="button"
//           className="w-full flex items-center justify-center gap-2.5 font-bold text-xs bg-white/5 border border-white/5 text-slate-200 hover:text-white hover:bg-white/10 h-11 rounded-xl transition cursor-pointer"
//         >
//           <FcGoogle size={18} />
//           <span>Continue with Google</span>
//         </button>

//         {/* ALREADY HAVE AN ACCOUNT? */}
//         <p className="text-center text-xs font-semibold text-slate-400 mt-6">
//           Already have an account?{" "}
//           <Link href="/login" className="text-pink-500 hover:underline font-bold">
//             Login
//           </Link>
//         </p>

//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { FaUser, FaEnvelope, FaLock, FaBus, FaUserTag } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

// নিশ্চিত করুন এখানে 'export default function' লেখা আছে
export default function RegisterPage() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const role = formData.get("role");
    const password = formData.get("password");

    try {
      const { data, error } = await authClient.signUp.email({
        email: email,
        password: password,
        name: name,
        role: role,
      });

      if (error) {
        setErrorMessage(error.message || "User already exists. Use another email.");
        setLoading(false);
        return;
      }

      console.log("Success Data:", data);
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again.");
    } {
      setLoading(false);
    }
  };
  const handleGoogleSignUp = async () => {
    setErrorMessage("");
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",  
      });
    } catch (err) {
      console.error("Google Sign-Up Error:", err);
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
            Create an Account
          </h2>
          <p className="text-xs md:text-sm text-slate-400 font-medium">
            Join TicketBari to book your tickets effortlessly
          </p>
        </div>

        {/* ওয়ার্নিং বক্স */}
        {errorMessage && (
          <div className="mb-5 p-3.5 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold rounded-xl text-center">
            {errorMessage}
          </div>
        )}

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          {/* NAME FIELD */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Full Name</label>
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full bg-slate-950 border border-white/5 text-slate-200 text-sm h-11 pl-11 pr-4 rounded-xl outline-none focus:border-pink-500/50 transition font-medium"
              />
            </div>
          </div>

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

          {/* ROLE FIELD */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Register As</label>
            <div className="relative">
              <FaUserTag className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
              <select
                name="role"
                required
                defaultValue="user"
                className="w-full bg-slate-950 border border-white/5 text-slate-300 text-sm h-11 pl-11 pr-4 rounded-xl outline-none focus:border-pink-500/50 transition font-medium cursor-pointer appearance-none"
              >
                <option value="user" className="bg-slate-900 text-white">User</option>
                <option value="vendor" className="bg-slate-900 text-white">Vendor</option>
              </select>
            </div>
          </div>

          {/* PASSWORD FIELD */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Password</label>
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

          <button
            type="submit"
            disabled={loading}
            className="w-full font-bold text-xs md:text-sm bg-gradient-to-r from-pink-500 to-indigo-600 text-white shadow-xl shadow-pink-500/10 hover:shadow-pink-500/20 transition h-11 rounded-xl mt-2 flex items-center justify-center disabled:opacity-60 cursor-pointer"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-white/5"></div>
          <span className="flex-shrink mx-4 text-slate-500 font-bold text-[10px] uppercase tracking-widest">Or login with</span>
          <div className="flex-grow border-t border-white/5"></div>
        </div>

        <button
        onClick={handleGoogleSignUp}
          type="button"
          className="w-full flex items-center justify-center gap-2.5 font-bold text-xs bg-white/5 border border-white/5 text-slate-200 hover:text-white hover:bg-white/10 h-11 rounded-xl transition cursor-pointer"
        >
          <FcGoogle size={18} />
          <span>Continue with Google</span>
        </button>

        <p className="text-center text-xs font-semibold text-slate-400 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-pink-500 hover:underline font-bold">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}