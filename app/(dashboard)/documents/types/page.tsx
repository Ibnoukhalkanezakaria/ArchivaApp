"use client";
import React from 'react';
import Link from 'next/link';
import { 
  Home, ChevronRight, FileText, Plus, Edit2, Trash2, Layers 
} from "lucide-react";
import { motion } from "framer-motion";

export default function DocumentTypesPage() {
  return (
    <div className="animate-in fade-in duration-700 w-full max-w-[1400px] mx-auto relative z-0">
      
      {/* HEADER SECTION */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-[12px] font-semibold text-gray-500 mb-6 drop-shadow-sm">
          <Link href="/" className="hover:text-[#FE5729] flex items-center gap-1 transition-colors drop-shadow-sm">
            <Home size={13} /> Home
          </Link>
          <ChevronRight size={13} className="text-gray-300" />
          <Link href="/documents" className="hover:text-[#FE5729] transition-colors drop-shadow-sm">
            Documents
          </Link>
          <ChevronRight size={13} className="text-gray-300" />
          <span className="text-[#1C1C1C]">Document types</span>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-[24px] font-bold text-[#1C1C1C] mb-1">Document types</h1>
            <p className="text-[14px] font-semibold text-gray-500">Create types and dynamic fields for documents.</p>
          </div>
        </div>
      </div>

      {/* CONTENT PANELS */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6">
        
        {/* Left Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] p-5 h-auto lg:h-[650px] flex flex-col"
        >
          {/* Left panel header */}
          <div className="flex items-center justify-between mb-4 bg-white border border-[#F1F1F1] p-3 px-4 rounded-xl shadow-sm">
            <h3 className="font-bold text-[14px] text-[#1C1C1C] flex items-center gap-2">
              <FileText size={16} className="text-[#0052CC]" /> Document types
            </h3>
            <button className="w-8 h-8 rounded-lg bg-[#0052CC] hover:bg-[#003d99] text-white flex items-center justify-center shrink-0 transition-colors shadow-[0_2px_10px_rgba(0,82,204,0.3)]">
              <Plus size={16} strokeWidth={2.5} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar space-y-2">
            <div className="group flex items-center justify-between p-4 rounded-xl border border-[#F1F1F1] bg-white hover:border-[#FE5729]/30 hover:shadow-sm transition-all cursor-pointer">
               <span className="text-[14px] font-bold text-[#1C1C1C] group-hover:text-[#FE5729] transition-colors">Plan</span>
               <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1.5 text-gray-400 hover:text-[#FE5729] rounded-md hover:bg-[#FFF0E6] transition-colors">
                    <Edit2 size={14} />
                  </button>
                  <button className="p-1.5 text-gray-400 hover:text-red-500 rounded-md hover:bg-red-50 transition-colors">
                    <Trash2 size={14} />
                  </button>
               </div>
            </div>
            
            {/* You can add more typologies here */}
          </div>
        </motion.div>

        {/* Right Panel (Empty State) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-[#FAFAFA]/50 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.01)] border-2 border-[#F1F1F1] border-dashed flex flex-col items-center justify-center text-center p-10 h-[500px] lg:h-[650px]"
        >
            <div className="w-16 h-16 rounded-2xl bg-white border border-[#F1F1F1] shadow-[0_2px_10px_rgb(0,0,0,0.03)] flex items-center justify-center text-gray-400 mb-6 drop-shadow-sm group-hover:text-[#FE5729] transition-all">
              <Layers size={28} strokeWidth={2} />
            </div>
            <h3 className="text-[17px] font-bold text-[#1C1C1C] mb-2">Select a document type</h3>
            <p className="text-[13px] font-medium text-gray-500 max-w-[320px] leading-relaxed">
              Choose a document type from the list to view and manage its dynamic fields.
            </p>
        </motion.div>

      </div>
    </div>
  );
}
