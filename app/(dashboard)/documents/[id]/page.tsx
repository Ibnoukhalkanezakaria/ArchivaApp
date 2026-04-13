"use client";
import React from "react";
import { ChevronRight, ArrowLeft, FileText, Upload, Clock } from "lucide-react";

export default function DocumentDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="animate-in fade-in duration-700 w-full max-w-[1400px] mx-auto">
      {/* BREADCRUMB */}
      <div className="flex items-center gap-2 text-[12px] font-semibold text-gray-400 mb-3 px-1">
        <span className="hover:text-[#1C1C1C] cursor-pointer transition-colors text-gray-400">Home</span>
        <ChevronRight size={12} className="text-gray-300" />
        <span className="hover:text-[#1C1C1C] cursor-pointer transition-colors text-gray-400">Documents</span>
        <ChevronRight size={12} className="text-gray-300" />
        <span className="text-[#1C1C1C]">ADsadad</span>
      </div>

      {/* HEADER */}
      <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] mb-6">
        <div className="flex items-center gap-3 mb-2">
          <a href="/documents" className="text-gray-400 hover:text-[#1C1C1C] transition-colors">
            <ArrowLeft size={18} />
          </a>
          <h1 className="text-[24px] font-bold text-[#1C1C1C] tracking-tight">ADsadad</h1>
        </div>
        <p className="text-[13px] font-semibold text-gray-500 ml-9">Metadata, status workflow, version history and upload timeline</p>
      </div>

      <div className="space-y-6">
        {/* METADATA */}
        <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1]">
          <h2 className="text-[18px] font-bold text-[#1C1C1C] mb-4 flex items-center gap-2"><FileText size={18} /> Metadata</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[14px]">
            <div><span className="font-semibold text-gray-500">Project:</span> <span className="font-bold text-[#1C1C1C]">projet 1</span></div>
            <div><span className="font-semibold text-gray-500">Document type:</span> <span className="font-bold text-[#1C1C1C]">Plan</span></div>
            <div><span className="font-semibold text-gray-500">Lot:</span> <span className="font-bold text-[#1C1C1C]"></span></div>
            <div><span className="font-semibold text-gray-500">Uploaded by:</span> <span className="font-bold text-[#1C1C1C]">ged1</span></div>
            <div><span className="font-semibold text-gray-500">Current version:</span> <span className="font-bold text-[#1C1C1C]">v1</span></div>
            <div><span className="font-semibold text-gray-500">Updated at:</span> <span className="font-bold text-[#1C1C1C]">4/12/2026, 11:17:33 PM</span></div>
          </div>
        </div>

        {/* VERSION HISTORY */}
        <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1]">
          <h2 className="text-[18px] font-bold text-[#1C1C1C] mb-4 flex items-center gap-2"><Clock size={18} /> Version history</h2>
          <table className="w-full text-left text-[13px]">
            <thead>
              <tr className="border-b border-[#F1F1F1] text-gray-500 font-semibold">
                <th className="py-2">VERSION</th>
                <th className="py-2">UPLOADED AT</th>
                <th className="py-2">COMMENT</th>
              </tr>
            </thead>
            <tbody>
              {/* Version history rows will go here */}
            </tbody>
          </table>
        </div>

        {/* UPLOAD NEW VERSION */}
        <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1]">
          <h2 className="text-[18px] font-bold text-[#1C1C1C] mb-4 flex items-center gap-2"><Upload size={18} /> Upload new version</h2>
          <div className="space-y-4">
            <div>
              <label className="text-[12px] font-bold text-[#1C1C1C] mb-1 block">File</label>
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#E5E5E5] rounded-[16px] bg-white py-10 hover:border-[#FE5729]/50 transition-all cursor-pointer">
                <Upload size={28} className="text-gray-300 mb-3" />
                <p className="text-[13px] font-bold text-[#1C1C1C]">Drag & drop or click to select</p>
              </div>
            </div>
            <div>
              <label className="text-[12px] font-bold text-[#1C1C1C] mb-1 block">Comment</label>
              <textarea placeholder="Optional version comment" className="w-full bg-[#FAFAFA] border border-[#F1F1F1] rounded-xl px-4 py-2.5 text-[13px] font-semibold focus:outline-none focus:border-[#1C1C1C]/20 min-h-[80px]"></textarea>
            </div>
            <div className="flex justify-end">
              <button className="px-6 py-2.5 rounded-[12px] bg-[#FE5729] hover:bg-[#e84a1f] text-white text-[14px] font-bold shadow-md transition-all">Upload new version</button>
            </div>
          </div>
        </div>
        
        {/* TIMELINE */}
        <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1]">
          <h2 className="text-[18px] font-bold text-[#1C1C1C] mb-4">Timeline</h2>
          {/* Timeline content will go here */}
        </div>
      </div>
    </div>
  );
}
