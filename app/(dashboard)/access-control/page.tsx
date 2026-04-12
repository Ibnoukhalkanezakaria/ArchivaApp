import React from "react";
import { 
  ShieldCheck, Key, Users, FolderKanban, RefreshCw,
  Check, Layers, BookOpen
} from "lucide-react";

export default function AccessControlPage() {
  return (
    <div className="animate-in fade-in duration-700 w-full max-w-[1400px] mx-auto relative z-0">
      
      {/* HEADER SECTION */}
      <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1]">
        <div className="flex items-center gap-4">
          {/* Logo beside title */}
          <div className="w-12 h-12 rounded-[12px] bg-[#1C1C1C] flex items-center justify-center p-3 shrink-0 shadow-md">
            <div className="w-full h-full bg-white rounded-[4px]"></div>
          </div>
          <div>
            <h2 className="text-[24px] font-bold text-[#1C1C1C] tracking-tight mb-1">Access control</h2>
            <p className="text-[13px] font-semibold text-gray-500">Manage roles, permissions, groups, user assignments, and folder rules in one place.</p>
          </div>
        </div>
        <button className="w-11 h-11 rounded-[12px] bg-[#FAFAFA] border border-[#F1F1F1] flex items-center justify-center text-[#1C1C1C] hover:text-[#FE5729] hover:border-[#FE5729]/30 hover:bg-white shadow-sm transition-all group">
          <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-500" />
        </button>
      </div>

      {/* 4 STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <StatCard icon={<ShieldCheck size={20} className="text-[#FE5729]" />} title="Roles" value="1" />
        <StatCard icon={<Key size={20} className="text-[#8854D0]" />} title="Permissions" value="29" />
        <StatCard icon={<Users size={20} className="text-[#2EB679]" />} title="Groups" value="7" />
        <StatCard icon={<FolderKanban size={20} className="text-gray-500" />} title="Folder ACL" value="0" />
      </div>

      {/* FILTER TABS */}
      <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        <Tab active icon={<Layers size={14} />}>Overview</Tab>
        <Tab icon={<ShieldCheck size={14} />}>Roles & permissions</Tab>
        <Tab icon={<Users size={14} />}>Groups</Tab>
        <Tab icon={<Key size={14} />}>Users</Tab>
        <Tab icon={<FolderKanban size={14} />}>Folder ACL</Tab>
      </div>

      {/* BOTTOM WIDE CARDS */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        
        {/* Quick Setup Card */}
        <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1]">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[#EAF7F0] text-[#2EB679] flex items-center justify-center shrink-0">
              <ShieldCheck size={16} />
            </div>
            <h3 className="font-bold text-[18px] text-[#1C1C1C]">Quick setup</h3>
          </div>
          <p className="text-[13px] font-semibold text-gray-500 mb-8 pl-[44px]">Recommended order for initial RBAC setup.</p>
          
          <div className="space-y-5 pl-[44px]">
            <SetupStep text="Create roles for your organization." />
            <SetupStep text="Assign permissions to each role." />
            <SetupStep text="Create groups and link them to roles." />
            <SetupStep text="Assign users to roles and groups." />
            <SetupStep text="Set folder ACL rules for sensitive areas." />
          </div>
        </div>

        {/* Coverage Card */}
        <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[#FFF0E6] text-[#FE5729] flex items-center justify-center shrink-0">
              <BookOpen size={16} />
            </div>
            <h3 className="font-bold text-[18px] text-[#1C1C1C]">Coverage</h3>
          </div>
          <p className="text-[13px] font-semibold text-gray-500 mb-8 pl-[44px]">Quick view of access-control data currently configured.</p>
          
          <div className="grid grid-cols-2 gap-4 flex-1">
            <CoverageCard title="Members" value="5" />
            <CoverageCard title="Folders" value="5" />
            <CoverageCard title="User role links" value="3" />
            <CoverageCard title="Group role links" value="0" />
          </div>
        </div>

      </div>
    </div>
  );
}

function StatCard({ icon, title, value }: any) {
  return (
    <div className="bg-white rounded-2xl p-6 relative overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] flex items-center gap-5 group hover:-translate-y-1 transition-transform duration-300">
       <div className="w-14 h-14 rounded-full bg-[#FAFAFA] border border-[#F1F1F1] flex items-center justify-center shrink-0 group-hover:bg-white group-hover:shadow-[0_4px_15px_rgb(0,0,0,0.05)] transition-all">
         {icon}
       </div>
       <div>
          <span className="text-[13px] font-bold text-gray-500 block mb-1">{title}</span>
          <h2 className="text-[32px] font-bold text-[#1C1C1C] leading-none tracking-tight">{value}</h2>
       </div>
    </div>
  );
}

function Tab({ children, active = false, icon }: any) {
  return (
    <button className={`flex items-center gap-2 px-5 py-3 rounded-xl text-[13.5px] font-bold transition-all whitespace-nowrap border ${active ? "bg-[#1C1C1C] text-white border-[#1C1C1C] shadow-[0_8px_20px_rgba(28,28,28,0.2)]" : "bg-white text-gray-500 border-[#F1F1F1] hover:bg-[#FAFAFA] hover:text-[#1C1C1C] hover:border-[#1C1C1C]/10"}`}>
      {icon && <span className={active ? "text-[#FE5729]" : "text-gray-400"}>{icon}</span>}
      {children}
    </button>
  );
}

function SetupStep({ text }: any) {
  return (
    <div className="flex items-center gap-4 group cursor-pointer">
      <div className="w-[22px] h-[22px] rounded-full bg-[#EAF7F0] text-[#2EB679] flex items-center justify-center border border-[#2EB679]/20 shrink-0 group-hover:bg-[#2EB679] group-hover:text-white transition-colors shadow-sm">
        <Check size={12} strokeWidth={3.5} />
      </div>
      <span className="text-[14px] font-semibold text-[#1C1C1C] group-hover:text-[#FE5729] transition-colors">{text}</span>
    </div>
  );
}

function CoverageCard({ title, value }: any) {
  return (
    <div className="bg-[#FAFAFA] rounded-xl p-5 border border-[#F1F1F1] hover:border-[#1C1C1C]/10 transition-colors flex flex-col justify-center group cursor-pointer shadow-sm hover:shadow-md hover:bg-white">
       <span className="text-[13px] font-bold text-gray-500 group-hover:text-[#FE5729] transition-colors mb-2">{title}</span>
       <span className="text-[28px] font-bold text-[#1C1C1C] leading-none tracking-tight">{value}</span>
    </div>
  );
}
