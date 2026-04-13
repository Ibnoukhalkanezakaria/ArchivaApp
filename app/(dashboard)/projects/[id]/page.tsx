"use client";
import React from "react";
import { ChevronLeft, Edit, Trash2, FileText, MessageSquare, User, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

// Mock data for a single project
const project = {
  id: 1,
  name: "projet 1",
  status: "Active",
  client: "Ged test",
  location: "Undisclosed",
  startDate: "2024-01-15",
  endDate: "2024-12-31",
  linkedDocuments: 5,
  linkedRFIs: 0,
  team: [
    { name: "ged01", email: "ged01@email.com", avatar: "G" },
    { name: "Driss Larabi", email: "driss.larabi@email.com", avatar: "D" },
    { name: "AMD 1", email: "amd.1@email.com", avatar: "A" },
  ],
};

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="animate-in fade-in duration-700 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <Link href="/projects" className="text-gray-500 hover:text-gray-800">
            <ChevronLeft size={24} />
          </Link>
          <div>
            <p className="text-sm text-gray-500">Home / Projects / {project.name}</p>
            <h1 className="text-2xl font-bold text-[#1C1C1C]">Project overview and linked records</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <Edit size={16} />
            <span>Edit</span>
          </button>
          <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 flex items-center gap-2">
            <Trash2 size={16} />
            <span>Delete</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Project Info */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1]">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-xl font-bold mb-1">{project.name}</h2>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-100 text-green-800">
                        {project.status}
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-100">
                 <div>
                    <p className="text-sm text-gray-500 mb-1 flex items-center gap-2"><User size={14}/> Client</p>
                    <p className="font-semibold">{project.client}</p>
                 </div>
                 <div>
                    <p className="text-sm text-gray-500 mb-1 flex items-center gap-2"><MapPin size={14}/> Location</p>
                    <p className="font-semibold">{project.location}</p>
                 </div>
                 <div>
                    <p className="text-sm text-gray-500 mb-1 flex items-center gap-2"><Calendar size={14}/> Start date</p>
                    <p className="font-semibold">{project.startDate}</p>
                 </div>
                 <div>
                    <p className="text-sm text-gray-500 mb-1 flex items-center gap-2"><Calendar size={14}/> End date</p>
                    <p className="font-semibold">{project.endDate}</p>
                 </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1]">
            <h3 className="text-lg font-bold mb-4">Team members</h3>
            <div className="space-y-4">
              {project.team.map((member, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
                    {member.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Linked Records */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1]">
            <h3 className="text-lg font-bold mb-4">Linked records</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText size={20} className="text-green-700" />
                  <p className="font-semibold text-green-800">Documents</p>
                </div>
                <span className="font-bold text-green-800">{project.linkedDocuments}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <MessageSquare size={20} className="text-blue-700" />
                  <p className="font-semibold text-blue-800">RFIs</p>
                </div>
                <span className="font-bold text-blue-800">{project.linkedRFIs}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
