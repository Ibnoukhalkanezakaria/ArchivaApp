import React from "react";
import { 
  MessageSquare, Plus, ChevronDown, CheckCircle2, 
  Clock, XCircle, FileQuestion, ArrowRight
} from "lucide-react";

export default function RFIsPage() {
  return (
    <div className="animate-in fade-in duration-700 w-full max-w-[1400px] mx-auto relative z-0">
      
      {/* HEADER SECTION */}
      <div className="flex justify-between items-center mb-6 bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1]">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-[12px] bg-[#1C1C1C] flex items-center justify-center p-3 shrink-0 shadow-md">
            <div className="w-full h-full bg-white rounded-[4px]"></div>
          </div>
          <div>
            <h2 className="text-[24px] font-bold text-[#1C1C1C] tracking-tight mb-1">RFIs</h2>
            <p className="text-[13px] font-semibold text-gray-500">Manage Requests for Information across your projects.</p>
          </div>
        </div>
      </div>

      {/* CREATE FORM CARD */}
      <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] mb-6">
         <div className="flex items-center gap-2 mb-5">
           <div className="w-6 h-6 rounded-md bg-[#FAFAFA] border border-[#F1F1F1] flex items-center justify-center text-[#1C1C1C]">
             <FileQuestion size={12} />
           </div>
           <h3 className="text-[15px] font-bold text-[#1C1C1C]">Create New RFI</h3>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-2">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 block pl-1">Project</label>
              <div className="relative">
                <select className="w-full appearance-none bg-[#FAFAFA] border border-[#F1F1F1] rounded-xl px-4 py-3 text-[13px] font-bold text-[#1C1C1C] focus:outline-none focus:border-[#1C1C1C]/20 transition-colors cursor-pointer">
                  <option>projet 1</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="md:col-span-3">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 block pl-1">Title</label>
              <input type="text" placeholder="Enter title..." className="w-full bg-[#FAFAFA] border border-[#F1F1F1] rounded-xl px-4 py-3 text-[13px] font-semibold text-[#1C1C1C] placeholder:text-gray-400 focus:outline-none focus:border-[#1C1C1C]/20 transition-colors" />
            </div>

            <div className="md:col-span-4">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 block pl-1">Description</label>
              <input type="text" placeholder="Enter description..." className="w-full bg-[#FAFAFA] border border-[#F1F1F1] rounded-xl px-4 py-3 text-[13px] font-semibold text-[#1C1C1C] placeholder:text-gray-400 focus:outline-none focus:border-[#1C1C1C]/20 transition-colors" />
            </div>

            <div className="md:col-span-2">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 block pl-1">Priority</label>
              <div className="relative">
                <select className="w-full appearance-none bg-[#FAFAFA] border border-[#F1F1F1] rounded-xl px-4 py-3 text-[13px] font-bold text-[#1C1C1C] focus:outline-none focus:border-[#1C1C1C]/20 transition-colors cursor-pointer">
                  <option>Medium</option>
                  <option>High</option>
                  <option>Low</option>
                  <option>Critical</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="md:col-span-1 flex items-end">
              <button className="w-full bg-[#1C1C1C] text-white rounded-xl py-3 text-[13px] font-bold shadow-md hover:bg-[#FE5729] transition-colors flex items-center justify-center">
                Create
              </button>
            </div>
         </div>
      </div>

      {/* STATUS COLUMNS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Open Column */}
        <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] min-h-[400px] flex flex-col group">
          <div className="flex items-center justify-between mb-4 border-b border-[#F1F1F1] pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#FFF0E6] text-[#FE5729] flex items-center justify-center">
                <Clock size={14} />
              </div>
              <h3 className="text-[15px] font-bold text-[#1C1C1C]">Open</h3>
            </div>
            <span className="bg-[#FAFAFA] border border-[#F1F1F1] text-gray-500 text-[11px] font-bold px-2.5 py-1 rounded-full group-hover:border-[#1C1C1C]/20 transition-colors">0</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center opacity-50 py-10">
            <div className="w-12 h-12 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center mb-3">
              <FileQuestion size={20} className="text-gray-400" />
            </div>
            <p className="text-[13px] font-semibold text-gray-400">No open RFIs</p>
          </div>
        </div>

        {/* Answered Column */}
        <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] min-h-[400px] flex flex-col group">
          <div className="flex items-center justify-between mb-4 border-b border-[#F1F1F1] pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#EAF7F0] text-[#2EB679] flex items-center justify-center">
                <CheckCircle2 size={14} />
              </div>
              <h3 className="text-[15px] font-bold text-[#1C1C1C]">Answered</h3>
            </div>
            <span className="bg-[#FAFAFA] border border-[#F1F1F1] text-gray-500 text-[11px] font-bold px-2.5 py-1 rounded-full group-hover:border-[#1C1C1C]/20 transition-colors">0</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center opacity-50 py-10">
             <div className="w-12 h-12 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center mb-3">
              <CheckCircle2 size={20} className="text-gray-400" />
            </div>
            <p className="text-[13px] font-semibold text-gray-400">No answered RFIs</p>
          </div>
        </div>

        {/* Closed Column */}
        <div className="bg-[#FAFAFA] rounded-2xl p-5 border border-[#F1F1F1] min-h-[400px] flex flex-col group hover:bg-white hover:shadow-[0_4px_20px_rgb(0,0,0,0.02)] transition-all">
          <div className="flex items-center justify-between mb-4 border-b border-[#E5E5E5] group-hover:border-[#F1F1F1] pb-4 transition-colors">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#F1F1F1] text-gray-500 flex items-center justify-center">
                <XCircle size={14} />
              </div>
              <h3 className="text-[15px] font-bold text-gray-500 group-hover:text-[#1C1C1C] transition-colors">Closed</h3>
            </div>
            <span className="bg-white border border-[#E5E5E5] text-gray-400 text-[11px] font-bold px-2.5 py-1 rounded-full">0</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center opacity-40 py-10">
             <div className="w-12 h-12 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center mb-3">
              <XCircle size={20} className="text-gray-400" />
            </div>
            <p className="text-[13px] font-semibold text-gray-400">No closed RFIs</p>
          </div>
        </div>

      </div>
    </div>
  );
}
