"use client";
import React, { useState } from "react";
import { 
  FolderOpen, Search, Filter, Plus, FileText, 
  MoreHorizontal, MoreVertical, Download, Eye, ChevronDown, ChevronRight,
  FileSpreadsheet, Folder, X, ExternalLink, Upload, Edit3, Edit2, FolderPlus, Trash2, Calendar
} from "lucide-react";

export default function DocumentsPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [openFolderMenu, setOpenFolderMenu] = useState<string | null>(null);
  const [openDocMenu, setOpenDocMenu] = useState<string | null>(null);

  const toggleFolderMenu = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenFolderMenu(openFolderMenu === name ? null : name);
    setOpenDocMenu(null);
  };

  const toggleDocMenu = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenDocMenu(openDocMenu === name ? null : name);
    setOpenFolderMenu(null);
  };

  const closeMenus = () => {
    setOpenFolderMenu(null);
    setOpenDocMenu(null);
  };

  return (
    <div className="animate-in fade-in duration-700 w-full max-w-[1400px] mx-auto relative z-0" onClick={closeMenus}>
      
      {/* BREADCRUMB */}
      <div className="flex items-center gap-2 text-[12px] font-semibold text-gray-400 mb-3 px-1">
        <span className="hover:text-[#1C1C1C] cursor-pointer transition-colors text-gray-400">Home</span>
        <ChevronRight size={12} className="text-gray-300" />
        <span className="text-[#1C1C1C]">Documents</span>
      </div>

      {/* HEADER SECTION */}
      <div className="flex justify-between items-center mb-6 bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1]">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-[12px] bg-[#1C1C1C] flex items-center justify-center p-3 shrink-0 shadow-md">
            <div className="w-full h-full bg-white rounded-[4px]"></div>
          </div>
          <div>
            <h2 className="text-[24px] font-bold text-[#1C1C1C] tracking-tight mb-1">Documents</h2>
            <p className="text-[13px] font-semibold text-gray-500">Manage, search, and organize all your project files.</p>
          </div>
        </div>
        <button 
          onClick={() => setActiveModal("create-doc")}
          className="h-12 px-6 rounded-xl bg-[#1C1C1C] text-white flex items-center justify-center gap-2 hover:bg-[#FE5729] shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(254,87,41,0.3)] transition-all font-bold text-[14px]"
        >
          <Plus size={18} /> New Document
        </button>
      </div>

      <div className="flex gap-6 items-start">
        
        {/* LEFT FOLDER SIDEBAR */}
        <div className="w-[300px] shrink-0 bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] sticky top-32">
          
          <div className="flex justify-between items-center mb-4 px-1">
            <h3 className="text-[14px] font-bold text-[#1C1C1C] flex items-center gap-2">
              <FolderOpen size={16} className="text-gray-400" />
              Folders
            </h3>
            <button 
               onClick={() => setActiveModal("create-folder")}
               className="text-[12px] font-bold text-gray-400 hover:text-[#FE5729] transition-colors flex items-center gap-1"
            >
              <Plus size={12} /> New root
            </button>
          </div>

          <div className="bg-[#FAFAFA] border border-[#F1F1F1] rounded-xl px-4 py-2.5 mb-4 flex items-center gap-2 cursor-pointer hover:border-[#1C1C1C]/10 transition-colors">
             <div className="p-1.5 rounded-lg bg-[#EAF7F0] text-[#2EB679]"><FolderOpen size={14} /></div>
             <span className="text-[13px] font-bold text-[#1C1C1C] flex-1">All documents</span>
          </div>

          <div className="relative mb-5">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search Folders" 
              className="w-full bg-[#FAFAFA] border border-[#F1F1F1] rounded-xl pl-9 pr-4 py-2.5 text-[13px] font-semibold text-[#1C1C1C] placeholder:text-gray-400 focus:outline-none focus:border-[#1C1C1C]/20 transition-colors"
            />
          </div>

          <div className="space-y-1">
            <FolderTreeItem name="APD" count={0} hasChildren openMenu={openFolderMenu} onMenuClick={toggleFolderMenu} padding={0} />
            <FolderTreeItem name="ARC" count={2} openMenu={openFolderMenu} onMenuClick={toggleFolderMenu} padding={0} />
            <FolderTreeItem name="CET" count={0} openMenu={openFolderMenu} onMenuClick={toggleFolderMenu} padding={0} />
            <FolderTreeItem name="nbnb" count={0} hasChildren openMenu={openFolderMenu} onMenuClick={toggleFolderMenu} padding={0} open />
            <FolderTreeItem name="mnbnbm" count={0} hasChildren openMenu={openFolderMenu} onMenuClick={toggleFolderMenu} padding={4} open />
            <FolderTreeItem name="mnbnbnm" count={0} openMenu={openFolderMenu} onMenuClick={toggleFolderMenu} padding={8} />
            <FolderTreeItem name="STR" count={0} openMenu={openFolderMenu} onMenuClick={toggleFolderMenu} padding={0} />
            <FolderTreeItem name="DOCS" count={2} openMenu={openFolderMenu} onMenuClick={toggleFolderMenu} padding={0} />
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 flex flex-col gap-5">
          
          {/* SEARCH AND FILTERS */}
          <div className="flex gap-3">
            <div className="flex-1 bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] relative flex items-center px-5">
               <Search size={18} className="text-gray-400 mr-3" />
               <input 
                  type="text" 
                  placeholder="Search by document name" 
                  className="w-full bg-transparent border-none text-[14px] font-semibold text-[#1C1C1C] placeholder:text-gray-400 focus:outline-none py-4"
               />
            </div>
            <button 
               onClick={() => setActiveModal("filters")}
               className="bg-white rounded-2xl px-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] flex items-center gap-2 text-[14px] font-bold text-gray-500 hover:text-[#1C1C1C] hover:border-[#1C1C1C]/10 transition-colors"
            >
               <Filter size={16} /> Filters
            </button>
          </div>

          {/* DOCUMENT LIST */}
          <div className="flex flex-col gap-4">
             <DocumentCard 
               type="XLSX" 
               name="nbn" 
               project="projet 1" 
               date="Apr 10, 2026, 7:40 PM" 
               author="ged1" 
               version="v1" 
               size="236.8 KB" 
               category="Plan"
               typeColor="text-[#2EB679]"
               typeBg="bg-[#EAF7F0]"
               openMenu={openDocMenu}
               onMenuClick={toggleDocMenu}
             />
             <DocumentCard 
               type="XLSX" 
               name="TEST" 
               desc="TEST TEST"
               project="projet 1" 
               date="Mar 29, 2026, 9:11 PM" 
               author="ged1" 
               version="v1" 
               size="236.8 KB" 
               category="Plan"
               badges={["VISA - AMO ANN", "VISA - BCT", "VISA - BET"]}
               typeColor="text-[#2EB679]"
               typeBg="bg-[#EAF7F0]"
               openMenu={openDocMenu}
               onMenuClick={toggleDocMenu}
             />
             <DocumentCard 
               type="PDF" 
               name="PLANS" 
               desc="PLANS ARCHI MAJ"
               project="projet 1" 
               date="Mar 29, 2026, 9:05 PM" 
               author="ged1" 
               version="v1" 
               size="422.7 KB" 
               category="Plan"
               badges={["VISA - BET"]}
               typeColor="text-[#FE5729]"
               typeBg="bg-[#FFF0E6]"
               openMenu={openDocMenu}
               onMenuClick={toggleDocMenu}
             />
             <DocumentCard 
               type="PDF" 
               name="plan1" 
               project="projet 1" 
               date="Mar 23, 2026, 3:47 PM" 
               author="ged1" 
               version="v1" 
               size="15.1 KB" 
               category="Plan"
               typeColor="text-[#FE5729]"
               typeBg="bg-[#FFF0E6]"
               openMenu={openDocMenu}
               onMenuClick={toggleDocMenu}
             />
          </div>

        </div>
      </div>

      {/* --- MODALS --- */}
      {activeModal === "create-doc" && (
         <ModalOverlay onClose={() => setActiveModal(null)} title="Create document" text="Fill in the details to add a new document">
            <div className="space-y-5">
               <div className="px-2 pt-2"><span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase bg-white px-2">Identification</span></div>
               <div className="space-y-4 px-2">
                  <div>
                     <label className="text-[12px] font-bold text-[#1C1C1C] flex items-center gap-1 mb-1">Title <span className="text-[#FE5729]">*</span></label>
                     <input type="text" placeholder="e.g. Foundation plans - Rev. A" className="w-full bg-[#FAFAFA] border border-[#F1F1F1] rounded-xl px-4 py-2.5 text-[13px] font-semibold focus:outline-none focus:border-[#1C1C1C]/20" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="text-[12px] font-bold text-[#1C1C1C] flex items-center gap-1 mb-1">Project</label>
                        <select className="w-full bg-[#FAFAFA] border border-[#F1F1F1] rounded-xl px-4 py-2.5 text-[13px] font-semibold focus:outline-none focus:border-[#1C1C1C]/20 text-gray-500">
                           <option>Select project</option>
                        </select>
                     </div>
                     <div>
                        <label className="text-[12px] font-bold text-[#1C1C1C] flex items-center gap-1 mb-1">Lot</label>
                        <input type="text" placeholder="Optional lot reference" className="w-full bg-[#FAFAFA] border border-[#F1F1F1] rounded-xl px-4 py-2.5 text-[13px] font-semibold focus:outline-none focus:border-[#1C1C1C]/20" />
                     </div>
                  </div>
                  <div>
                     <label className="text-[12px] font-bold text-[#1C1C1C] flex items-center gap-1 mb-1">Description</label>
                     <textarea placeholder="Brief description (optional)" className="w-full bg-[#FAFAFA] border border-[#F1F1F1] rounded-xl px-4 py-2.5 text-[13px] font-semibold focus:outline-none focus:border-[#1C1C1C]/20 min-h-[80px]" />
                  </div>
               </div>

               <div className="px-2 pt-2 flex items-center">
                  <div className="flex-1 h-[1px] bg-[#F1F1F1]"></div>
                  <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase px-2">Classification</span>
                  <div className="flex-1 h-[1px] bg-[#F1F1F1]"></div>
               </div>
               
               <div className="grid grid-cols-2 gap-4 px-2">
                  <div>
                     <label className="text-[12px] font-bold text-[#1C1C1C] flex items-center gap-1 mb-1">Document type</label>
                     <select className="w-full bg-[#FAFAFA] border border-[#F1F1F1] rounded-xl px-4 py-2.5 text-[13px] font-semibold focus:outline-none focus:border-[#1C1C1C]/20 text-gray-500">
                        <option>Select type...</option>
                     </select>
                  </div>
                  <div>
                     <label className="text-[12px] font-bold text-[#1C1C1C] flex items-center gap-1 mb-1">Folder</label>
                     <div className="flex gap-2">
                        <select className="flex-1 bg-[#FAFAFA] border border-[#F1F1F1] rounded-xl px-4 py-2.5 text-[13px] font-semibold focus:outline-none focus:border-[#1C1C1C]/20 text-gray-500">
                           <option>No folder</option>
                        </select>
                        <button className="w-10 h-10 border border-[#F1F1F1] rounded-xl flex items-center justify-center text-gray-500 hover:bg-[#FAFAFA] shrink-0"><Plus size={16} /></button>
                     </div>
                  </div>
               </div>

               <div className="px-2 pt-2 flex items-center">
                  <div className="flex-1 h-[1px] bg-[#F1F1F1]"></div>
                  <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase px-2">File</span>
                  <div className="flex-1 h-[1px] bg-[#F1F1F1]"></div>
               </div>

               <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="px-2 flex flex-col items-center justify-center border-2 border-dashed border-[#E5E5E5] rounded-[16px] bg-white py-10 hover:border-[#3D47F4]/50 transition-all hover:bg-[#FAFAFA] relative">
                     <Upload size={28} className="text-gray-300 mb-3" />
                     <p className="text-[13px] font-bold text-[#1C1C1C] mb-1">Drag & drop or click to select</p>
                     <p className="text-[11px] font-semibold text-gray-400">PDF, DOCX, DWG, XLS, PNG...</p>
                     <input type="file" id="file-upload" className="hidden" />
                  </div>
               </label>
               <p className="text-[11px] font-semibold text-gray-400 px-2">Fields marked with <span className="text-[#FE5729]">*</span> are required.</p>

               <div className="flex justify-between items-center pt-4 px-2">
                  <button onClick={() => setActiveModal(null)} className="text-[14px] font-bold text-gray-500 hover:text-[#1C1C1C] transition-colors">Cancel</button>
                  <button onClick={() => {}} className="px-8 py-2.5 rounded-[12px] bg-[#3D47F4] hover:bg-[#2b35d8] text-white text-[14px] font-bold shadow-md transition-all">Create</button>
               </div>
            </div>
         </ModalOverlay>
      )}

      {activeModal === "filters" && (
         <ModalOverlay onClose={() => setActiveModal(null)} title="Filters" width="w-[500px]">
            <div className="space-y-4 p-2">
               <div className="grid grid-cols-2 gap-4">
                  <div>
                     <label className="text-[12px] font-bold text-[#1C1C1C] block mb-1">Project</label>
                     <select className="w-full bg-[#FAFAFA] border border-[#F1F1F1] rounded-xl px-4 py-2.5 text-[13px] font-semibold text-gray-500 outline-none"><option>All</option></select>
                  </div>
                  <div>
                     <label className="text-[12px] font-bold text-[#1C1C1C] block mb-1">Document type</label>
                     <select className="w-full bg-[#FAFAFA] border border-[#F1F1F1] rounded-xl px-4 py-2.5 text-[13px] font-semibold text-gray-500 outline-none"><option>All</option></select>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div>
                     <label className="text-[12px] font-bold text-[#1C1C1C] block mb-1">From date</label>
                     <div className="relative">
                        <Calendar size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="mm/dd/yyyy" className="w-full bg-[#FAFAFA] border border-[#F1F1F1] rounded-xl pl-4 pr-10 py-2.5 text-[13px] font-semibold text-gray-500 outline-none" />
                     </div>
                  </div>
                  <div>
                     <label className="text-[12px] font-bold text-[#1C1C1C] block mb-1">To date</label>
                     <div className="relative">
                        <Calendar size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="mm/dd/yyyy" className="w-full bg-[#FAFAFA] border border-[#F1F1F1] rounded-xl pl-4 pr-10 py-2.5 text-[13px] font-semibold text-gray-500 outline-none" />
                     </div>
                  </div>
               </div>
               <div>
                  <label className="text-[12px] font-bold text-[#1C1C1C] block mb-1">Lot</label>
                  <input type="text" placeholder="Lot filter" className="w-full bg-[#FAFAFA] border border-[#F1F1F1] rounded-xl px-4 py-2.5 text-[13px] font-semibold outline-none" />
               </div>
               <div className="flex justify-end pt-4">
                  <button onClick={() => setActiveModal(null)} className="text-[14px] font-bold text-gray-500 hover:text-[#1C1C1C] transition-colors">Cancel</button>
               </div>
            </div>
         </ModalOverlay>
      )}

      {activeModal === "create-folder" && (
         <ModalOverlay onClose={() => setActiveModal(null)} title="Create folder" width="w-[400px]">
            <div className="p-2 space-y-4">
               <div>
                  <label className="text-[12px] font-bold text-[#1C1C1C] block mb-1">Folder name</label>
                  <input type="text" className="w-full bg-[#FAFAFA] border border-[#F1F1F1] rounded-xl px-4 py-2.5 text-[13px] font-semibold focus:outline-none focus:border-[#1C1C1C]/20" />
               </div>
               <div className="flex justify-end items-center gap-4 pt-4">
                  <button onClick={() => setActiveModal(null)} className="text-[14px] font-bold text-gray-500 hover:text-[#1C1C1C] transition-colors">Cancel</button>
                  <button onClick={() => setActiveModal(null)} className="px-6 py-2.5 rounded-[12px] bg-[#3D47F4] hover:bg-[#2b35d8] text-white text-[14px] font-bold shadow-md transition-all">Create</button>
               </div>
            </div>
         </ModalOverlay>
      )}

    </div>
  );
}

function ModalOverlay({ children, onClose, title, text, width = "w-[600px]" }: any) {
   return (
      <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-[2px] flex items-center justify-center p-4" onClick={onClose}>
         <div className={`${width} bg-white rounded-[16px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200`} onClick={(e) => e.stopPropagation()}>
            <div className="bg-[#3D47F4] p-5 flex justify-between items-start text-white" onClick={(e) => e.stopPropagation()}>
               <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                     <FileText size={20} />
                  </div>
                  <div>
                     <h3 className="font-bold text-[18px]">{title}</h3>
                     {text && <p className="text-[13px] font-medium text-white/50 mt-0.5">{text}</p>}
                  </div>
               </div>
               <button onClick={onClose} className="text-white/50 hover:text-white transition-colors p-1"><X size={18} /></button>
            </div>
            <div className="p-5 overflow-y-auto max-h-[80vh] scrollbar-hide">
               {children}
            </div>
         </div>
      </div>
   )
}

function FolderTreeItem({ name, count, hasChildren, padding, open, openMenu, onMenuClick }: any) {
  const isOpenMenu = openMenu === name;

  return (
    <div className={`relative`} style={{ marginLeft: `${padding * 4}px` }}>
      <div className={`flex items-center justify-between py-2 px-2 rounded-lg cursor-pointer group transition-colors ${open ? 'bg-[#FAFAFA]' : 'hover:bg-[#FAFAFA]'}`}>
         <div className="flex items-center gap-2.5">
            {hasChildren ? (
               <ChevronRight size={14} className={`text-gray-400 group-hover:text-[#1C1C1C] transition-transform ${open ? 'rotate-90' : ''}`} />
            ) : (
               <div className="w-3.5" />
            )}
            <Folder size={15} className={`transition-colors ${open ? 'text-[#FE5729]' : 'text-gray-400 group-hover:text-[#FE5729]'}`} />
            <span className={`text-[13px] font-semibold transition-colors ${open ? 'text-[#1C1C1C]' : 'text-gray-500 group-hover:text-[#1C1C1C]'}`}>{name}</span>
         </div>
         <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold bg-[#F1F1F1] text-gray-500 px-1.5 rounded-md">{count}</span>
            <button onClick={(e) => onMenuClick(name, e)} className="text-gray-300 hover:text-[#1C1C1C] transition-all p-1 rounded-md hover:bg-gray-200/50">
               <MoreHorizontal size={14} />
            </button>
         </div>
      </div>

      {isOpenMenu && (
         <div className="absolute right-0 top-10 w-[180px] bg-white border border-[#F1F1F1] rounded-2xl shadow-[0_10px_40px_rgb(0,0,0,0.08)] z-50 p-2 flex flex-col">
            <button className="text-left px-3 py-2 text-[13px] font-semibold text-gray-600 hover:text-[#1C1C1C] hover:bg-[#FAFAFA] rounded-xl flex items-center gap-2"><FolderPlus size={14}/> New subfolder</button>
            <button className="text-left px-3 py-2 text-[13px] font-semibold text-gray-600 hover:text-[#1C1C1C] hover:bg-[#FAFAFA] rounded-xl flex items-center gap-2"><Edit2 size={14}/> Rename</button>
            <button className="text-left px-3 py-2 text-[13px] font-semibold text-red-500 hover:bg-red-50 rounded-xl flex items-center gap-2"><Trash2 size={14}/> Delete</button>
         </div>
      )}
    </div>
  );
}

function DocumentCard({ type, name, desc, project, date, author, version, size, category, badges, typeColor, typeBg, openMenu, onMenuClick }: any) {
  const isOpenMenu = openMenu === name;

  return (
    <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] flex items-center justify-between hover:border-[#1C1C1C]/10 transition-all hover:shadow-md group">
      
      <div className="flex gap-5 items-start">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${typeBg} ${typeColor}`}>
           {type === 'XLSX' ? <FileSpreadsheet size={24} /> : <FileText size={24} />}
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
             <h3 className="text-[16px] font-bold text-[#1C1C1C] group-hover:text-[#FE5729] transition-colors">{name}</h3>
          </div>
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 block">{type}</span>
          
          <div className="flex items-center gap-4 text-[12px] font-semibold text-gray-500 flex-wrap">
             <span>{project}</span>
             <span className="w-1 h-1 rounded-full bg-gray-300"></span>
             <span className="flex items-center gap-1"><Calendar size={12} className="text-gray-400"/> {date}</span>
             <span className="w-1 h-1 rounded-full bg-gray-300"></span>
             <span className="flex items-center gap-1"><span className="text-[#2EB679]">👤</span> {author}</span>
             <span className="bg-[#F1F1F1] text-[#1C1C1C] px-1.5 py-0.5 rounded text-[10px] font-bold">{version}</span>
             <span className="text-gray-400 font-bold">{size}</span>
             <span className="text-gray-400">{category}</span>
          </div>

          {desc && <p className="text-[13px] font-semibold text-[#1C1C1C] mt-2 border-l-2 border-[#1C1C1C]/10 pl-2">{desc}</p>}
          
          {badges && badges.length > 0 && (
            <div className="flex gap-2 mt-3">
              {badges.map((badge: string, i: number) => (
                <span key={i} className="text-[10px] font-bold px-2 py-1 rounded-md border border-red-200 text-red-500 bg-red-50 flex items-center gap-1">
                  <span className="text-[8px]">⏱</span> {badge}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
         {/* Action buttons visible by default (not just on hover) to match old design usability */}
         <button className="w-9 h-9 rounded-full bg-white border border-[#F1F1F1] flex items-center justify-center text-gray-500 hover:text-[#1C1C1C] hover:border-[#1C1C1C]/20 transition-all shadow-sm">
           <Eye size={16} />
         </button>
         <button className="w-9 h-9 rounded-full bg-white border border-[#F1F1F1] flex items-center justify-center text-gray-500 hover:text-[#1C1C1C] hover:border-[#1C1C1C]/20 transition-all shadow-sm">
           <Download size={16} />
         </button>
         <div className="relative">
            <button onClick={(e) => onMenuClick(name, e)} className="w-9 h-9 rounded-full bg-white border border-[#F1F1F1] flex items-center justify-center text-gray-500 hover:text-[#1C1C1C] hover:border-[#1C1C1C]/20 transition-all shadow-sm">
              <MoreVertical size={16} />
            </button>
            
            {/* Document Action Dropdown */}
            {isOpenMenu && (
               <div className="absolute right-0 top-12 w-[240px] bg-white border border-[#F1F1F1] rounded-2xl shadow-[0_10px_40px_rgb(0,0,0,0.08)] z-50 py-2 flex flex-col px-1 transform origin-top-right">
                 <button className="text-left px-3 py-2 text-[13px] font-semibold text-gray-600 hover:text-[#1C1C1C] hover:bg-[#FAFAFA] rounded-xl flex items-center gap-3"><ExternalLink size={14}/> View details</button>
                 <button className="text-left px-3 py-2 text-[13px] font-semibold text-gray-600 hover:text-[#1C1C1C] hover:bg-[#FAFAFA] rounded-xl flex items-center gap-3"><Upload size={14}/> Upload version</button>
                 <button className="text-left px-3 py-2 text-[13px] font-semibold text-gray-600 hover:text-[#1C1C1C] hover:bg-[#FAFAFA] rounded-xl flex items-center gap-3"><Edit3 size={14}/> Edit metadata</button>
                 <button className="text-left px-3 py-2 text-[13px] font-semibold text-gray-600 hover:text-[#1C1C1C] hover:bg-[#FAFAFA] rounded-xl flex items-center gap-3"><Download size={14}/> Download all versions</button>
                 
                 <div className="h-[1px] bg-[#F1F1F1] my-1 mx-2" />
                 
                 <div className="flex flex-col gap-2 mt-1">
                   <span className="text-[10px] font-bold text-gray-400 px-3 uppercase tracking-widest pl-3 flex items-center gap-1"><Folder size={10} /> Move to folder</span>
                   <div className="px-2 pb-1">
                      <div className="bg-[#FAFAFA] border border-[#F1F1F1] rounded-xl flex items-center px-3 py-2 hover:border-[#1C1C1C]/20 transition-colors">
                         <Search size={12} className="text-gray-400 mr-2 shrink-0" />
                         <select className="bg-transparent border-none text-[12px] font-semibold flex-1 outline-none appearance-none cursor-pointer text-gray-600">
                            <option>DOCS</option>
                            <option>APD</option>
                            <option>ARC</option>
                            <option>CET</option>
                         </select>
                         <ChevronDown size={12} className="text-gray-400 shrink-0 ml-1" />
                      </div>
                   </div>
                 </div>
               </div>
            )}
         </div>
      </div>

    </div>
  );
}
