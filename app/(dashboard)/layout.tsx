import React from "react";
import Link from "next/link";
import { 
  FolderOpen, MessageSquare, FileText, Settings, Shield,
  Search, Bell, Activity, Plus, LogOut
} from "lucide-react";

export const metadata = {
  title: "Archiva | Secure Dashboard",
  description: "Advanced Next.js Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    
       <div className="flex h-screen bg-[#E5E5E5] p-2 xl:p-4 overflow-hidden text-[#1C1C1C] font-sans selection:bg-[#FE5729] selection:text-white">
        
        {/* FLOATING APP WINDOW */}
        <div className="w-full h-full bg-[#FAFAFA] rounded-[24px] overflow-hidden flex shadow-2xl border border-gray-200">
          
          {/* SIDEBAR */}
          <aside className="w-64 bg-white border-r border-[#F1F1F1] flex flex-col h-full py-8 shrink-0 z-10">
            <div className="px-8 mb-10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-[10px] bg-[#1C1C1C] flex items-center justify-center p-2">
                <div className="w-full h-full bg-white rounded-sm"></div>
              </div>
              <span className="font-bold text-[18px] tracking-tight">Archiva</span>
            </div>

            <div className="px-6 mb-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">Reporting</span>
            </div>

            <nav className="flex flex-col gap-1 w-full px-4 flex-1">
              <NavItem icon={<Activity size={18} />} label="Dashboard" href="/" />
              <NavItem icon={<FolderOpen size={18} />} label="Projects" count={1} href="/projects" />
              <NavItem icon={<MessageSquare size={18} />} label="RFIs" count={0} href="/rfis" />
              <NavItem icon={<FileText size={18} />} label="Documents" count={3} href="/documents" />
              
              <div className="px-2 mt-8 mb-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">System</span>
              </div>
              <NavItem icon={<Settings size={18} />} label="Configuration" href="/configuration" />
              <NavItem icon={<Shield size={18} />} label="Access Control" href="/access-control" />
            </nav>
            
            <div className="px-4 mt-auto">
              <Link href="/login" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all text-gray-500 hover:text-[#FE5729]">
                <LogOut size={18} />
                <span className="text-[13px] font-bold">Logout</span>
              </Link>
            </div>
          </aside>

          {/* MAIN WRAPPER */}
          <div className="flex-1 flex flex-col min-w-0 bg-[#FAFAFA] relative">
            
            {/* HEADER */}
            <header className="px-8 py-8 flex justify-between items-end bg-[#FAFAFA] shrink-0 sticky top-0 z-10 w-full mb-4">
              <div className="max-w-[60%] flex items-center gap-4">
                <div className="w-10 h-10 rounded-[10px] bg-[#1C1C1C] flex items-center justify-center p-2.5 shrink-0 shadow-md">
                  <div className="w-full h-full bg-white rounded-sm"></div>
                </div>
                <div>
                  <h1 className="text-[28px] font-bold tracking-tight text-[#1C1C1C] mb-1">Welcome back, Archiva 👋</h1>
                  <p className="text-[13px] font-semibold text-gray-500">The dashboard is where you can analyze remediation efficacy and stay up-to-date on potential document structure.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-[#EAF7F0] text-[#2EB679] px-3 py-1.5 rounded-full text-[11px] font-bold border border-[#2EB679]/20 shadow-sm">
                  System status: Active
                </div>
                <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-[#F1F1F1] flex items-center justify-center text-gray-500 hover:text-[#FE5729] hover:border-[#FE5729]/30 transition-all relative">
                  <Bell size={18} strokeWidth={2.5} />
                  <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#FE5729]"></span>
                </button>
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border-2 border-white dropdown cursor-pointer hover:shadow-md transition-all overflow-hidden">
                  <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-full h-full object-cover" />
                </div>
              </div>
            </header>

            <main className="flex-1 overflow-y-auto px-8 pb-12 scrollbar-hide">
              {children}
            </main>
          </div>
        </div>
      </div>
    
  );
}

function NavItem({ icon, label, count, active = false, href }: any) {
  return (
    <Link href={href || "#"} className={`relative w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group ${active ? "bg-white shadow-[0_4px_15px_rgb(0,0,0,0.03)] border border-[#F1F1F1]" : "border border-transparent hover:bg-white hover:shadow-sm"}`}>
      <div className={`flex items-center gap-3 ${active ? "text-[#1C1C1C]" : "text-gray-500 group-hover:text-[#1C1C1C]"}`}>
         <div className={active ? "text-[#FE5729]" : "text-gray-400 group-hover:text-[#FE5729] transition-colors"}>{icon}</div>
         <span className="text-[13px] font-bold">{label}</span>
      </div>
      {count !== undefined && (
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${active ? "bg-[#FE5729] text-white" : "bg-[#F1F1F1] text-gray-500"}`}>
          {count}
        </span>
      )}
    </Link>
  );
}
