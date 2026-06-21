import { DashboardSidebar } from "@/components/dashborad/DashboradSidbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50">
      {/* 💻 ডেস্কটপ সাইডবার এবং 📱 মোবাইল ড্রয়ার ট্রিগার */}
      <DashboardSidebar />

      {/* মেইন কন্টেন্ট এরিয়া (রাইট সাইড) */}
      <div className="flex flex-1 flex-col overflow-hidden">
        
        {/* 📂 ডাইনামিক পেজ কন্টেন্ট - নেভবার বাদে সরাসরি ফুল হাইট কন্টেন্ট */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
        
      </div>
    </div>
  );
}