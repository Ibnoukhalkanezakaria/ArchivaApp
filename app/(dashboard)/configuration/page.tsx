"use client";
import React from 'react';
import { Building, Globe, FileText, Users, ChevronRight } from 'lucide-react';

const teamMembers = [
  { name: 'AMO 1', email: 'amo.1@email.com', role: 'ENGINEER', jobTitle: 'Not set' },
  { name: 'Badr Ihrachen', email: 'badr.ihrachen@email.com', role: 'CONTRACTOR', jobTitle: 'Chef de projet' },
  { name: 'Brahim Bouifid', email: 'brahim.bouifid@email.com', role: 'PROJECT MANAGER', jobTitle: 'Engineer' },
  { name: 'Driss Larabi', email: 'driss.larabi@email.com', role: 'OWNER', jobTitle: 'Owner' },
];

export default function ConfigurationPage() {
  return (
    <div className="animate-in fade-in duration-700 w-full">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] mb-6">
        <h1 className="text-2xl font-bold text-[#1C1C1C]">Configuration</h1>
        <p className="text-sm text-gray-500">Tenant metadata, plan, and members</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1]">
          <div className="flex items-center gap-3 mb-4">
            <Building size={20} className="text-gray-500" />
            <h2 className="font-bold text-lg">Company</h2>
          </div>
          <p className="text-sm text-gray-400 mb-2">COMPANY NAME</p>
          <p className="font-semibold mb-4">ged test</p>
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-400 mb-1">PLAN</p>
              <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-md">ENTERPRISE</span>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">STATUS</p>
              {/* Status can be added here */}
            </div>
          </div>
        </div>

        {/* Language */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1]">
          <div className="flex items-center gap-3 mb-4">
            <Globe size={20} className="text-gray-500" />
            <h2 className="font-bold text-lg">Language</h2>
          </div>
           <p className="text-sm text-gray-400 mb-2">Regional settings and language</p>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>

      {/* Document Types */}
      <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] my-6">
        <div className="flex items-center gap-3 mb-2">
          <FileText size={20} className="text-gray-500" />
          <h2 className="font-bold text-lg">Document types</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">Create types and dynamic fields for documents.</p>
        <button className="text-sm text-blue-500 font-semibold flex items-center gap-1">
          Manage typologies <ChevronRight size={16} />
        </button>
      </div>

      {/* Team Insights */}
      <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1]">
        <div className="flex items-center gap-3 mb-2">
          <Users size={20} className="text-gray-500" />
          <h2 className="font-bold text-lg">Team Insights</h2>
        </div>
        <p className="text-sm text-gray-500 mb-6">Current members assigned to this environment</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-xs text-gray-400 uppercase border-b border-gray-200">
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Role</th>
                <th className="py-3 px-4">Job Title</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member, index) => (
                <tr key={index} className="border-b border-gray-100 last:border-0">
                  <td className="py-4 px-4 flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600 text-xs">
                        {member.name.charAt(0)}
                     </div>
                     <span className="font-semibold">{member.name}</span>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{member.email}</td>
                  <td className="py-4 px-4">
                    <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-1 rounded-md">{member.role}</span>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{member.jobTitle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
