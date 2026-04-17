import React from "react";
import Link from "next/link";
import TranslatedNavItem from "@/components/TranslatedNavItem";
import { 
  FolderOpen, MessageSquare, FileText, Settings, Shield,
  Search, Bell, Activity, Plus, LogOut, User
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
              <TranslatedNavItem icon={<Activity size={18} />} labelKey="Dashboard" href="/" />
              <TranslatedNavItem icon={<FolderOpen size={18} />} labelKey="Projects" count={1} href="/projects" />
              <TranslatedNavItem icon={<MessageSquare size={18} />} labelKey="RFIs" count={0} href="/rfis" />
              <TranslatedNavItem icon={<FileText size={18} />} labelKey="Documents" count={3} href="/documents" />
              
              <div className="px-2 mt-8 mb-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">Settings</span>
              </div>
              <TranslatedNavItem icon={<Settings size={18} />} labelKey="Configuration" href="/configuration" active />
              <TranslatedNavItem icon={<Shield size={18} />} labelKey="Access Control" href="/access-control" />
            </nav>
            
            <div className="px-4 mt-auto">
              <TranslatedNavItem icon={<LogOut size={18} />} labelKey="Logout" href="/login" />
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
                <Link href="/configuration" className="flex items-center gap-2 bg-white shadow-sm border border-[#F1F1F1] rounded-full pl-2 pr-4 py-1.5 cursor-pointer hover:shadow-md hover:border-[#0052CC]/20 transition-all">
                  <div className="w-8 h-8 rounded-full bg-[#E5F0FF] flex items-center justify-center text-[#0052CC]">
                    <User size={16} fill="currentColor" strokeWidth={0} />
                  </div>
                  <span className="text-[14px] font-bold text-[#0052CC]">ged1</span>
                </Link>
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

