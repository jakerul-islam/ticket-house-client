import { auth } from "@/lib/auth";
import { Button, Drawer } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link"; // 🌟 ১. Link ইমপোর্ট করা হয়েছে

import { BiBell, BiEnvelope } from "react-icons/bi";
import { BsHouse } from "react-icons/bs";
import { FaAdversal, FaBars, FaClipboardList, FaHistory, FaMoneyBillWave, FaPlusCircle, FaTicketAlt, FaUser, FaUserShield } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";

export async function DashboardSidebar() {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  const user = session?.user;
  const role = user?.role || 'user';

  // 🌟 ২. অবজেক্টের সব key-এর নাম প্রমিত করে 'href' করা হয়েছে
  const dashboardItems = {
    vendor: [
      {
        icon: FaUser,
        label: "Vendor Profile",
        href: "/dashboard/vendor/profile"
      },
      {
        icon: FaPlusCircle,
        label: "Add Ticket",
        href: "/dashboard/vendor/add-ticket"
      },
      {
        icon: FaTicketAlt,
        label: "My Added Tickets",
        href: "/dashboard/vendor/my-tickets"
      },
      {
        icon: FaClipboardList,
        label: "Requested Bookings",
        href: "/dashboard/vendor/bookings"
      },
      {
        icon: FaMoneyBillWave,
        label: "Revenue Overview",
        href: "/dashboard/vendor/revenue"
      }
    ],
    user: [
      {
        icon: FaUser,
        label: "User Profile",
        href: "/dashboard/user/profile"
      },
      {
        icon: FaTicketAlt,
        label: "My Booked Tickets",
        href: "/dashboard/user/booked-tickets"
      },
      {
        icon: FaHistory,
        label: "Transaction History",
        href: "/dashboard/user/transactions"
      }
    ],
    admin: [
      {
        icon: FaUserShield,
        label: "Admin Profile",
        href: "/dashboard/admin/profile"
      },
      {
        icon: FaTicketAlt,
        label: "Manage Tickets",
        href: "/dashboard/admin/manage-tickets"
      },
      {
        icon: FaUser,
        label: "Manage Users",
        href: "/dashboard/admin/manage-users"
      },
      {
        icon: FaAdversal,
        label: "Advertise Tickets",
        href: "/dashboard/admin/advertise-tickets"
      }
    ]
  };

  const navItems = dashboardItems[role] || [];

  return (
    <Drawer>
      <Button className={'hidden'} variant="secondary">
        <FaBars />
        Menu
      </Button>
      
      {/* ডেস্কটপ বা মেইন নেভিগেশন */}
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <Link 
            key={item.label} 
            href={item.href} // 🌟 ৩. বাটনের পরিবর্তে Link এবং href ব্যবহার করা হয়েছে
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
          >
            <item.icon className="size-5 text-muted" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading>Navigation</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
              
              {/* ড্রয়ার বা মোবাইল নেভিগেশন */}
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link 
                    key={item.label} 
                    href={item.href} // 🌟 ৪. ড্রয়ারের ভেতরেও Link ম্যাপ করা হয়েছে
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                  >
                    <item.icon className="size-5 text-muted" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>

            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}