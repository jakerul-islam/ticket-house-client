import { DashboardSidebar } from "@/components/dashborad/DashboradSidbar";


export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-background">
        <div className="flex flex-1 overflow-hidden">
         <DashboardSidebar></DashboardSidebar>
          <div className=" flex-1 overflow-y-auto"> 
     <div className="border border-red-500"> 
      navbar
    </div>
    <main className="p-5">
     
      {children}
      
    </main>
          </div>
        </div>
    </div>
  );
}