import React from "react";
import { 
  FolderOpen, FileText, MessageSquare, Users, Activity, 
  MoreHorizontal, ChevronRight, CheckCircle2, AlertCircle, FileBadge
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="animate-in fade-in duration-700 w-full max-w-[1400px] mx-auto relative z-0">

      {/* TOP STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
        <StatCard icon={<FolderOpen size={16} />} title="Total Projects" value="1" change="0%" context="Active now" up={true} />
        <StatCard icon={<FileText size={16} />} title="Total Documents" value="3" change="12%" context="New additions" up={true} />
        <StatCard icon={<MessageSquare size={16} />} title="Active RFIs" value="0" change="0%" context="Needs attention" up={false} />
        <StatCard icon={<Users size={16} />} title="Total Users" value="5" change="2%" context="In workspace" up={true} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        {/* MIDDLE SECTION - LEFT (Visas Segmented Graph mapped to Finding Overview style) */}
        <div className="xl:col-span-7 bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] flex flex-col">
           <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-[18px] text-[#1C1C1C]">Visa Status Overview</h3>
              <div className="flex bg-[#F1F1F1] p-1 rounded-lg gap-1">
                 <button className="bg-white shadow-sm text-[#1C1C1C] text-[11px] font-bold px-3 py-1.5 rounded-[6px]">All</button>
                 <button className="text-gray-500 hover:text-[#1C1C1C] text-[11px] font-bold px-3 py-1.5 rounded-[6px] transition-colors">Pending</button>
                 <button className="text-gray-500 hover:text-[#1C1C1C] text-[11px] font-bold px-3 py-1.5 rounded-[6px] transition-colors">Approved</button>
              </div>
           </div>

           <div className="mt-2 text-[#1C1C1C]">
              <span className="text-xs font-bold text-gray-400 block mb-3 uppercase tracking-widest pl-1">Priority</span>
              
              {/* Fake visually beautiful Segmented Bar imitating "0 pending visas" context */}
              <div className="flex h-12 w-full rounded-[10px] overflow-hidden gap-1 transition-opacity cursor-pointer">
                 <div className="bg-[#1C1C1C] w-[5%] flex items-center justify-center text-transparent hover:text-white font-bold text-[12px] opacity-20 hover:opacity-100 overflow-hidden whitespace-nowrap transition-all duration-300">0 Critical</div>
                 <div className="bg-[#FE5729] w-[15%] flex items-center justify-center text-transparent hover:text-white font-bold text-[12px] opacity-20 hover:opacity-100 overflow-hidden whitespace-nowrap transition-all duration-300">0 High</div>
                 <div className="bg-[#F6F6F6] w-[80%] flex items-center pl-4 font-bold text-[13px] text-[#1C1C1C]">0 Pending Visas (All Clear)</div>
              </div>

              <span className="text-xs font-bold text-gray-400 block mb-3 mt-8 uppercase tracking-widest pl-1">State</span>
              <div className="flex gap-4">
                 <div className="flex-1 bg-[#F9F9F9] rounded-xl p-4 text-center border-2 border-transparent hover:border-[#1C1C1C]/10 transition-colors cursor-pointer group">
                    <span className="text-sm font-bold text-gray-400 group-hover:text-[#1C1C1C] transition-colors"><span className="text-[#1C1C1C] mr-1">0</span> Pending</span>
                 </div>
                 <div className="flex-1 bg-[#F9F9F9] rounded-xl p-4 text-center border-2 border-transparent hover:border-[#1C1C1C]/10 transition-colors cursor-pointer group">
                    <span className="text-sm font-bold text-gray-400 group-hover:text-[#1C1C1C] transition-colors"><span className="text-[#1C1C1C] mr-1">0</span> In Progress</span>
                 </div>
                 <div className="flex-1 bg-[#F9F9F9] rounded-xl p-4 text-center border-2 border-transparent hover:border-[#1C1C1C]/10 transition-colors cursor-pointer group">
                    <span className="text-sm font-bold text-gray-400 group-hover:text-[#1C1C1C] transition-colors"><span className="text-[#1C1C1C] mr-1">0</span> Awaiting Signature</span>
                 </div>
              </div>
           </div>

           {/* Empty Bar visual mimicking the duration bar in Behance */}
           <div className="mt-auto pt-6 px-2">
              <span className="text-[10px] font-bold text-[#1C1C1C] block text-center mb-1 relative z-10 bg-white inline-block px-2 left-1/2 -translate-x-1/2">Duration</span>
              <div className="w-full h-4 bg-gradient-to-r from-gray-100 via-gray-200/50 to-gray-100 rounded-full relative -mt-3"></div>
           </div>
        </div>


        {/* MIDDLE SECTION - RIGHT (Documents ARC gauge mapped to Attack Surface) */}
        <div className="xl:col-span-5 bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] flex flex-col items-center">
           <div className="w-full flex justify-between items-center mb-2">
              <h3 className="font-bold text-[18px] text-[#1C1C1C]">Recent Documents</h3>
              <MoreHorizontal size={20} className="text-gray-300 cursor-pointer" />
           </div>

           {/* Custom SVG Arc Gauge matching #FE5729 theme */}
           <div className="relative w-48 h-28 mt-4 overflow-hidden group">
              <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible drop-shadow-sm">
                <path d="M 5 50 A 45 45 0 0 1 95 50" fill="none" stroke="#F6F6F6" strokeWidth="10" strokeLinecap="round" />
                <path className="animate-[dash_1.5s_ease-out_forwards]" d="M 5 50 A 45 45 0 0 1 95 50" fill="none" stroke="#FE5729" strokeWidth="10" strokeLinecap="round" strokeDasharray="141" strokeDashoffset="40" />
              </svg>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center pb-1 group-hover:scale-105 transition-transform duration-300">
                 <span className="text-[36px] font-bold text-[#1C1C1C] leading-none block mb-0.5">3</span>
                 <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Total Files</span>
              </div>
           </div>

           {/* List mimicking the Assets list */}
           <div className="w-full mt-6 space-y-4 px-2">
              <div className="flex justify-between items-center group cursor-pointer">
                 <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-[4px] bg-[#FE5729] flex items-center justify-center text-white"><FileBadge size={10}/></div>
                    <span className="text-sm font-semibold text-gray-500 group-hover:text-[#1C1C1C] transition-colors">TEST Document</span>
                 </div>
                 <span className="text-[13px] font-bold text-[#1C1C1C]">v1</span>
              </div>
              <div className="flex justify-between items-center group cursor-pointer">
                 <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-[4px] bg-[#FFBC99] flex items-center justify-center text-white"><FileText size={10}/></div>
                    <span className="text-sm font-semibold text-gray-500 group-hover:text-[#1C1C1C] transition-colors">PLANS</span>
                 </div>
                 <span className="text-[13px] font-bold text-[#1C1C1C]">v1</span>
              </div>
              <div className="flex justify-between items-center group cursor-pointer">
                 <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-[4px] bg-[#D4B5FF] flex items-center justify-center text-white"><CheckCircle2 size={10}/></div>
                    <span className="text-sm font-semibold text-gray-500 group-hover:text-[#1C1C1C] transition-colors">plan1</span>
                 </div>
                 <span className="text-[13px] font-bold text-[#1C1C1C]">v1</span>
              </div>
           </div>

           <button className="w-full rounded-xl bg-[#F9F9F9] border border-transparent hover:border-[#1C1C1C]/10 text-[#1C1C1C] font-bold text-[13px] py-3.5 mt-8 transition-all hover:bg-white hover:shadow-sm">
             View All Documents
           </button>
        </div>

        {/* BOTTOM SECTION - Activities Timeline */}
        <div className="xl:col-span-12 bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1]">
           <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold text-[18px] text-[#1C1C1C]">Recent Activities Timeline</h3>
              <MoreHorizontal size={20} className="text-gray-300 cursor-pointer hover:text-gray-600" />
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <ActivityItem 
                theme="text-[#FE5729] bg-[#FFF0E6] border-[#FE5729]/20" 
                title="AMO 1 Stamped visa with status ann" 
                date="Mar 29, 09:22 PM" 
              />
              <ActivityItem 
                theme="text-[#8854D0] bg-[#D4B5FF]/20 border-[#D4B5FF]/50" 
                title="AMO 1 Stamped visa with status vso" 
                date="Mar 29, 09:21 PM" 
              />
              <ActivityItem 
                theme="text-[#2EB679] bg-[#EAF7F0] border-[#2EB679]/20" 
                title="ged1 Added member AMO 1" 
                date="Mar 29, 09:19 PM" 
              />
              <ActivityItem 
                theme="text-[#1C1C1C] bg-[#F1F1F1] border-[#1C1C1C]/10" 
                title="ged1 Requested a visa" 
                date="Mar 29, 09:16 PM" 
              />
              <ActivityItem 
                theme="text-gray-500 bg-white border border-[#F1F1F1] shadow-sm" 
                title="ged1 Created visa template VISA - AMO" 
                date="Mar 29, 09:16 PM" 
              />
           </div>
        </div>

      </div>
    </div>
  );
}

function StatCard({ icon, title, value, change, context, up }: any) {
  return (
    <div className="bg-white rounded-2xl p-6 relative overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300">
       <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-[#F1F1F1] flex items-center justify-center text-[#1C1C1C] group-hover:bg-[#1C1C1C] group-hover:text-[#FE5729] transition-colors">{icon}</div>
            <span className="text-[13px] font-bold text-gray-500">{title}</span>
          </div>
          <MoreHorizontal size={18} className="text-gray-300 cursor-pointer hover:text-gray-500" />
       </div>
       <div>
          <h2 className="text-[32px] font-bold text-[#1C1C1C] leading-none mb-4">{value}</h2>
          <div className="flex justify-between items-center pt-2 border-t border-[#F1F1F1]">
             <span className="text-[11px] font-bold text-gray-400">{context}</span>
             <span className={`text-[11px] font-bold flex items-center gap-0.5 ${up ? "text-[#2EB679]" : "text-[#FE5729]"}`}>
               {change} {up ? <span className="text-[14px]">▴</span> : <span className="text-[14px]">▾</span>}
             </span>
          </div>
       </div>
    </div>
  );
}

function ActivityItem({ title, date, theme }: any) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-[16px] bg-[#FAFAFA] border border-transparent hover:border-[#1C1C1C]/10 hover:bg-white hover:shadow-sm transition-all cursor-pointer group">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${theme} group-hover:scale-110 transition-transform duration-300`}>
         <Activity size={18} />
      </div>
      <div className="pt-0.5">
         <h4 className="text-[13px] font-bold text-[#1C1C1C] leading-snug mb-1 group-hover:text-[#FE5729] transition-colors">{title}</h4>
         <p className="text-[11px] font-bold text-gray-400 flex items-center gap-1.5 uppercase tracking-widest">{date}</p>
      </div>
    </div>
  );
}
