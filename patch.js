const fs = require('fs');
let content = fs.readFileSync('app/(dashboard)/documents/page.tsx', 'utf8');

// Update the ModalOverlay header background
content = content.replace(
  '<div className="bg-[#1C1C1C] p-5 flex justify-between items-start text-white">',
  '<div className="bg-[#3D47F4] p-5 flex justify-between items-start text-white" onClick={(e) => e.stopPropagation()}>'
);

// Update the overlay wrapper to stop propagation
content = content.replace(
  '<div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-[2px] flex items-center justify-center p-4">',
  '<div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-[2px] flex items-center justify-center p-4" onClick={onClose}>'
);

content = content.replace(
  '<div className={`${width} bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200`}>',
  '<div className={`${width} bg-white rounded-[16px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200`} onClick={(e) => e.stopPropagation()}>'
);


// Update the Create button
content = content.replace(
  '<button className="px-8 py-2.5 rounded-xl bg-[#1C1C1C] hover:bg-[#FE5729] text-white text-[14px] font-bold shadow-md transition-all">Create</button>',
  '<button onClick={() => {}} className="px-8 py-2.5 rounded-[12px] bg-[#3D47F4] hover:bg-[#2b35d8] text-white text-[14px] font-bold shadow-md transition-all">Create</button>'
);

content = content.replace(
  '<button onClick={() => setActiveModal(null)} className="px-6 py-2.5 rounded-xl bg-[#1C1C1C] hover:bg-[#FE5729] text-white text-[13px] font-bold shadow-md transition-all">Create</button>',
  '<button onClick={() => setActiveModal(null)} className="px-6 py-2.5 rounded-[12px] bg-[#3D47F4] hover:bg-[#2b35d8] text-white text-[14px] font-bold shadow-md transition-all">Create</button>'
);

// Make the drag & drop area clickable
const oldDragDrop = `<div className="px-2 flex flex-col items-center justify-center border-2 border-dashed border-[#F1F1F1] rounded-2xl bg-[#FAFAFA]/50 py-10 cursor-pointer hover:border-[#1C1C1C]/20 transition-all hover:bg-[#FAFAFA]">
                  <Upload size={28} className="text-gray-300 mb-3" />
                  <p className="text-[14px] font-bold text-[#1C1C1C] mb-1">Drag & drop or click to select</p>
                  <p className="text-[12px] font-semibold text-gray-400">PDF, DOCX, DWG, XLS, PNG...</p>
               </div>`;

const newDragDrop = `<label htmlFor="file-upload" className="cursor-pointer">
                  <div className="px-2 flex flex-col items-center justify-center border-2 border-dashed border-[#E5E5E5] rounded-[16px] bg-white py-10 hover:border-[#3D47F4]/50 transition-all hover:bg-[#FAFAFA] relative">
                     <Upload size={28} className="text-gray-300 mb-3" />
                     <p className="text-[13px] font-bold text-[#1C1C1C] mb-1">Drag & drop or click to select</p>
                     <p className="text-[11px] font-semibold text-gray-400">PDF, DOCX, DWG, XLS, PNG...</p>
                     <input type="file" id="file-upload" className="hidden" />
                  </div>
               </label>`;

content = content.replace(oldDragDrop, newDragDrop);

fs.writeFileSync('app/(dashboard)/documents/page.tsx', content);
