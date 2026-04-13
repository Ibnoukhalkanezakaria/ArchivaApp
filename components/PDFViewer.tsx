"use client";

import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { X } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

interface PDFViewerProps {
  file: string;
  onClose: () => void;
}

export default function PDFViewer({ file, onClose }: PDFViewerProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      <div className="bg-[#FAFAFA] rounded-2xl shadow-2xl w-full max-w-5xl h-[85vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="p-4 bg-white border-b border-[#F1F1F1] flex justify-between items-center shrink-0">
          <h3 className="font-bold text-[18px] text-[#1C1C1C]">PDF Viewer</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-[#FAFAFA] border border-[#F1F1F1] flex items-center justify-center text-gray-500 hover:text-black transition-colors"><X size={18} /></button>
        </div>
        <div className="flex-1 overflow-auto flex justify-center items-start p-6">
          <Document 
            file={file} 
            loading={<div className="text-[14px] font-semibold text-gray-500 py-10">Loading PDF...</div>}
            error={<div className="text-[14px] font-bold text-red-500 py-10 bg-red-50 px-6 rounded-xl border border-red-100">Failed to load PDF. Please make sure the file exists.</div>}
            noData={<div className="text-[14px] font-semibold text-gray-500 py-10">No PDF data specified.</div>}
            className="flex flex-col items-center"
          >
            <Page 
              pageNumber={1} 
              renderTextLayer={false} 
              renderAnnotationLayer={false}
              className="shadow-[0_4px_20px_rgb(0,0,0,0.1)] rounded overflow-hidden"
              scale={1.2}
            />
          </Document>
        </div>
      </div>
    </div>
  );
}
