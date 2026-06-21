import { auth } from "@/lib/auth";
import { Button, Drawer } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";

import { FaAdversal, FaBars, FaClipboardList, FaHistory, FaMoneyBillWave, FaPlusCircle, FaTicketAlt, FaUser, FaUserShield } from "react-icons/fa";

export async function DashboardSidebar() {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  const user = session?.user;
  const role = user?.role || 'user';

  const dashboardItems = {
    vendor: [
      { icon: FaUser, label: "Vendor Profile", href: "/dashboard/vendor/profile" },
      { icon: FaPlusCircle, label: "Add Ticket", href: "/dashboard/vendor/add-tickets" },
      { icon: FaTicketAlt, label: "My Added Tickets", href: "/dashboard/vendor/my-tickets" },
      { icon: FaClipboardList, label: "Requested Bookings", href: "/dashboard/vendor/bookings" },
      { icon: FaMoneyBillWave, label: "Revenue Overview", href: "/dashboard/vendor/revenue" }
    ],
    user: [
      { icon: FaUser, label: "User Profile", href: "/dashboard/user/profile" },
      { icon: FaTicketAlt, label: "My Booked Tickets", href: "/dashboard/user/booked-tickets" },
      { icon: FaHistory, label: "Transaction History", href: "/dashboard/user/transactions" }
    ],
    admin: [
      { icon: FaUserShield, label: "Admin Profile", href: "/dashboard/admin/profile" },
      { icon: FaTicketAlt, label: "Manage Tickets", href: "/dashboard/admin/manage-tickets" },
      { icon: FaUser, label: "Manage Users", href: "/dashboard/admin/manage-users" },
      { icon: FaAdversal, label: "Advertise Tickets", href: "/dashboard/admin/advertise-tickets" }
    ]
  };

  const navItems = dashboardItems[role] || [];

  return (
    <>
      {/* 📱 মোবাইল ও ট্যাবলেট ভিউ: ভাসমান বাটনটিকে আরও ক্ল্যাসি ও মিনিমাল করা হয়েছে */}
      <div className="absolute top-4 left-4 z-50 lg:hidden">
        <Drawer>
          <Button 
            size="md" 
            variant="flat" 
            className="bg-white/90 backdrop-blur-md border border-slate-200/60 rounded-xl shadow-xs px-3 min-w-0 font-medium text-slate-700 hover:bg-slate-50 transition-all"
          >
            <FaBars className="text-slate-600 size-4 mr-1.5" />
            <span className="text-xs">Menu</span>
          </Button>
          <Drawer.Backdrop>
            <Drawer.Content placement="left" className="bg-white">
              <Drawer.Dialog>
                <Drawer.CloseTrigger />
                <Drawer.Header className="border-b border-slate-100/80 px-6 py-4">
                  <Drawer.Heading className="text-slate-800 font-bold text-lg tracking-tight">Navigation</Drawer.Heading>
                </Drawer.Header>
                <Drawer.Body className="px-4 py-4">
                  <nav className="flex flex-col gap-1.5">
                    {navItems.map((item) => (
                      <Link 
                        key={item.label} 
                        href={item.href}
                        className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-600 font-semibold transition-all hover:bg-slate-50 hover:text-slate-900"
                      >
                        <item.icon className="size-4.5 text-slate-400 transition-colors group-hover:text-pink-500" />
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </nav>
                </Drawer.Body>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>

      {/* 💻 ডেস্কটপ ভিউ: প্রিমিয়াম হোভার ইফেক্ট এবং টেক্সট ওয়েটসহ মডার্ন সাইডবার */}
      <aside className="hidden lg:flex flex-col w-64 h-screen border-r border-slate-100/80 bg-white p-5 shadow-[2px_0_8px_rgba(0,0,0,0.01)] sticky top-0">
        {/* ব্র্যান্ড/ক্যাটাগরি হেডার */}
        <div className="mb-6 px-3 py-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">
            Workspace
          </span>
        </div>
        
        {/* মেনু আইটেমস */}
        <nav className="flex flex-col gap-1.5">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              className="group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm text-slate-600 font-semibold tracking-wide transition-all duration-200 hover:bg-slate-50 hover:text-slate-900"
            >
              {/* আইকনে আলতো পিঙ্ক কালার গ্লো ইন্টিগ্রেশন */}
              <item.icon className="size-4.5 text-slate-400 transition-colors duration-200 group-hover:text-pink-500" />
              <span className="text-slate-600 group-hover:text-slate-900 transition-colors">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}