"use client";

import Link from "next/link";
import { FaBus, FaEnvelope, FaPhoneAlt, FaFacebookF, FaCcStripe, FaCcVisa, FaCcMastercard } from "react-icons/fa";
// fa6 মডিউল থেকে FaXTwitter ইমপোর্ট করা হলো
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 border-t border-white/5 pt-16 pb-8 px-6 md:px-16 mt-8">
      <div className="max-w-7xl mx-auto">
        
        {/* 4 COLUMNS GRID ON DESKTOP, STACKED ON MOBILE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-12">
          
          {/* COLUMN 1: LOGO & DESCRIPTION */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white tracking-tight">
              <FaBus className="text-pink-500 text-2xl" />
              <span>Ticket<span className="text-pink-500">Bari</span></span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 font-medium">
              Book bus, train, launch & flight tickets easily. Your ultimate travel partner across Bangladesh.
            </p>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="flex flex-col gap-2.5 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-pink-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/tickets" className="hover:text-pink-500 transition-colors">All Tickets</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pink-500 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-pink-500 transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: CONTACT INFO & SOCIALS */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Contact Info</h4>
            <ul className="flex flex-col gap-3 text-sm font-medium">
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="text-pink-500 shrink-0" />
                <span className="truncate">support@ticketbari.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaPhoneAlt className="text-pink-500 shrink-0" />
                <span>+880 1234 567890</span>
              </li>
              
              {/* SOCIAL MEDIA LINKS */}
              <li className="flex items-center gap-3 pt-2">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white hover:bg-pink-500 transition-all shadow-md"
                  title="Facebook Page"
                >
                  <FaFacebookF size={14} />
                </a>
                
                {/* X LOGO (Fixed Import) */}
                <a 
                  href="https://x.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white hover:bg-indigo-600 transition-all shadow-md"
                  title="X (formerly Twitter)"
                >
                  <FaXTwitter size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: PAYMENT METHODS */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Payment Methods</h4>
            <p className="text-xs text-slate-400 font-medium">We accept secure payments through trusted gateways.</p>
            <div className="flex items-center gap-3 text-slate-300">
              <div className="p-2 rounded-xl bg-white/5 border border-white/5 hover:border-pink-500/30 transition shadow-sm" title="Stripe">
                <FaCcStripe size={28} className="text-indigo-400" />
              </div>
              <div className="p-2 rounded-xl bg-white/5 border border-white/5 hover:border-pink-500/30 transition shadow-sm" title="Visa">
                <FaCcVisa size={28} className="text-blue-400" />
              </div>
              <div className="p-2 rounded-xl bg-white/5 border border-white/5 hover:border-pink-500/30 transition shadow-sm" title="Mastercard">
                <FaCcMastercard size={28} className="text-amber-500" />
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <p>© 2025 TicketBari. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}