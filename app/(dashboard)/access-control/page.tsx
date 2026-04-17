"use client";
import React, { useState } from "react";
import { 
  ShieldCheck, Key, Users, FolderKanban, RefreshCw,
  Check, Layers, BookOpen, Plus, Edit2, Trash2, ChevronDown, UserPlus, Lock
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AccessControlPage() {
  const [activeTab, setActiveTab] = useState("Roles & permissions");

  return (
    <div className="animate-in fade-in duration-700 w-full max-w-[1400px] mx-auto relative z-0">
      
      {/* HEADER SECTION */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-[24px] font-bold text-[#1C1C1C] mb-1">Access control</h1>
          <p className="text-[14px] font-semibold text-gray-500">Manage roles, permissions, groups, user assignments, and folder rules in one place.</p>
        </div>
        <button className="bg-[#1C1C1C]/5 hover:bg-[#1C1C1C]/10 text-[#1C1C1C] p-3 rounded-xl transition-all border border-transparent hover:border-[#1C1C1C]/10">
          <RefreshCw size={20} />
        </button>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
        <StatCard icon={<ShieldCheck className="text-[#8854D0]" size={24} />} title="Roles" value="1" />
        <StatCard icon={<Key className="text-[#2EB679]" size={24} />} title="Permissions" value="29" />
        <StatCard icon={<Users className="text-[#0052CC]" size={24} />} title="Groups" value="7" />
        <StatCard icon={<FolderKanban className="text-[#FE5729]" size={24} />} title="Folder ACL" value="0" />
      </div>

      {/* FILTER TABS */}
      <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        <Tab active={activeTab === "Overview"} onClick={() => setActiveTab("Overview")} icon={<Layers size={16} />}>Overview</Tab>
        <Tab active={activeTab === "Roles & permissions"} onClick={() => setActiveTab("Roles & permissions")} icon={<ShieldCheck size={16} />}>Roles & permissions</Tab>
        <Tab active={activeTab === "Groups"} onClick={() => setActiveTab("Groups")} icon={<Users size={16} />}>Groups</Tab>
        <Tab active={activeTab === "Users"} onClick={() => setActiveTab("Users")} icon={<Key size={16} />}>Users</Tab>
        <Tab active={activeTab === "Folder ACL"} onClick={() => setActiveTab("Folder ACL")} icon={<FolderKanban size={16} />}>Folder ACL</Tab>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "Overview" && (
          <motion.div 
            key="overview"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
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
          </motion.div>
        )}

        {activeTab === "Roles & permissions" && (
          <motion.div 
            key="roles"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Roles Panel */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] flex flex-col">
              <div className="p-6 pb-4">
                <h3 className="font-bold text-[18px] text-[#1C1C1C] flex items-center gap-2 mb-1">
                  <ShieldCheck size={18} className="text-[#FE5729]" /> Roles
                </h3>
                <p className="text-[13px] font-semibold text-gray-500 mb-5">Create and review roles used in your workspace.</p>
                
                <div className="flex items-center gap-3">
                  <input 
                    type="text" 
                    placeholder="Role name" 
                    className="flex-1 border border-[#F1F1F1] bg-[#FAFAFA] rounded-xl px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] placeholder:text-gray-400 outline-none focus:border-[#FE5729]/50 focus:bg-white focus:ring-2 focus:ring-[#FE5729]/10 transition-all"
                  />
                  <button className="bg-[#1C1C1C] hover:bg-black hover:shadow-[0_4px_15px_rgba(28,28,28,0.2)] text-white px-5 py-3 rounded-xl font-bold text-[14px] flex items-center gap-2 transition-all whitespace-nowrap">
                    <Plus size={16} strokeWidth={2.5} /> Add
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto border-t border-[#F1F1F1]">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-[#F1F1F1]">
                      <th className="px-6 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Role</th>
                      <th className="px-6 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Direct Users</th>
                      <th className="px-6 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-[#FAFAFA] transition-colors group cursor-pointer border-b border-[#F1F1F1] last:border-none">
                      <td className="px-6 py-4 text-[14px] font-bold text-[#1C1C1C] group-hover:text-[#FE5729] transition-colors">all</td>
                      <td className="px-6 py-4 text-[14px] font-semibold text-gray-500">3</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 text-gray-400 hover:text-[#FE5729] rounded-lg hover:bg-[#FFF0E6] transition-colors">
                            <Edit2 size={16} />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Role Permissions Panel */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] flex flex-col h-[600px]">
              <h3 className="font-bold text-[18px] text-[#1C1C1C] flex items-center gap-2 mb-1">
                <Key size={18} className="text-[#8854D0]" /> Role permissions
              </h3>
              <p className="text-[13px] font-semibold text-gray-500 mb-5">Select a role and toggle the permissions it grants.</p>
              
              <div className="relative mb-6">
                <select className="w-full appearance-none border border-[#F1F1F1] bg-[#FAFAFA] rounded-xl pl-4 pr-10 py-3 text-[14px] font-semibold text-[#1C1C1C] outline-none focus:border-[#FE5729]/50 focus:bg-white focus:ring-2 focus:ring-[#FE5729]/10 transition-all cursor-pointer">
                  <option>Select role</option>
                  <option>all</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <ChevronDown size={16} />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto mb-6 pr-2 custom-scrollbar border border-[#F1F1F1] rounded-xl p-2 bg-[#FAFAFA]">
                <div className="space-y-1">
                  {[
                    "View Dashboard", "View Projects", "View RFIs", "View Documents", 
                    "View Document Types", "View Configuration", "View Dashboard Stats", 
                    "View Recent Activities", "View Pending Visas"
                  ].map((perm, idx) => (
                    <label key={idx} className="flex items-center gap-3 px-3 py-3 hover:bg-white hover:shadow-sm rounded-lg cursor-pointer transition-all select-none group border border-transparent hover:border-[#F1F1F1]">
                      <div className="relative flex items-center">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#FE5729] focus:ring-[#FE5729] cursor-pointer peer appearance-none checked:bg-[#FE5729] checked:border-[#FE5729] transition-all shadow-sm" />
                        <Check size={12} strokeWidth={4} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                      </div>
                      <span className="text-[13.5px] font-bold text-gray-500 group-hover:text-[#1C1C1C] transition-colors">{perm}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="bg-[#FE5729] hover:bg-[#E04D20] text-white px-6 py-3 rounded-xl font-bold text-[14px] transition-colors w-max shadow-[0_4px_15px_rgba(254,87,41,0.2)] hover:shadow-[0_6px_20px_rgba(254,87,41,0.3)]">
                Save permissions for role
              </button>
            </div>
          </motion.div>
        )}

        {activeTab === "Groups" && (
          <motion.div 
            key="groups"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Groups Panel */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] flex flex-col">
              <div className="p-6 pb-4">
                <h3 className="font-bold text-[18px] text-[#1C1C1C] flex items-center gap-2 mb-1">
                  <Users size={18} className="text-[#FE5729]" /> Groups
                </h3>
                <p className="text-[13px] font-semibold text-gray-500 mb-5">Create and review workspace groups.</p>
                
                <div className="flex items-center gap-3">
                  <input 
                    type="text" 
                    placeholder="Group name" 
                    className="flex-1 border border-[#F1F1F1] bg-[#FAFAFA] rounded-xl px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] placeholder:text-gray-400 outline-none focus:border-[#FE5729]/50 focus:bg-white focus:ring-2 focus:ring-[#FE5729]/10 transition-all"
                  />
                  <button className="bg-[#1C1C1C] hover:bg-black hover:shadow-[0_4px_15px_rgba(28,28,28,0.2)] text-white px-5 py-3 rounded-xl font-bold text-[14px] flex items-center gap-2 transition-all whitespace-nowrap">
                    <Plus size={16} strokeWidth={2.5} /> Add
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto border-t border-[#F1F1F1]">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-[#F1F1F1]">
                      <th className="px-6 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Group</th>
                      <th className="px-6 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      "MO-Bureau", "BCT-Bureau", "Entreprise", "ENT-Bureau", "MOA-Bureau", "MOD-Bureau", "AR-Bureau"
                    ].map((group, idx) => (
                      <tr key={idx} className="hover:bg-[#FAFAFA] transition-colors group cursor-pointer border-b border-[#F1F1F1] last:border-none">
                        <td className="px-6 py-4 text-[14px] font-bold text-[#1C1C1C] group-hover:text-[#FE5729] transition-colors">{group}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 text-gray-400 hover:text-[#FE5729] rounded-lg hover:bg-[#FFF0E6] transition-colors">
                              <Edit2 size={16} />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Group Members and Roles Panel */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] flex flex-col h-[600px]">
              <h3 className="font-bold text-[18px] text-[#1C1C1C] flex items-center gap-2 mb-1">
                <UserPlus size={18} className="text-[#8854D0]" /> Group members & roles
              </h3>
              <p className="text-[13px] font-semibold text-gray-500 mb-5">Select a group to map users and roles.</p>
              
              <div className="relative mb-6">
                <select className="w-full appearance-none border border-[#F1F1F1] bg-[#FAFAFA] rounded-xl pl-4 pr-10 py-3 text-[14px] font-semibold text-[#1C1C1C] outline-none focus:border-[#FE5729]/50 focus:bg-white focus:ring-2 focus:ring-[#FE5729]/10 transition-all cursor-pointer">
                  <option>Select group</option>
                  <option>MO-Bureau</option>
                  <option>BCT-Bureau</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <ChevronDown size={16} />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto mb-6 flex flex-col gap-6 custom-scrollbar">
                
                {/* Members Checklist */}
                <div>
                  <h4 className="font-bold text-[14px] text-[#1C1C1C] mb-3 border-b border-[#F1F1F1] pb-2">Members</h4>
                  <div className="border border-[#F1F1F1] rounded-xl p-2 bg-[#FAFAFA] space-y-1">
                    {["AMO 1", "Badr Ihrachen", "Reda test"].map((member, idx) => (
                      <label key={idx} className="flex items-center gap-3 px-3 py-3 hover:bg-white hover:shadow-sm rounded-lg cursor-pointer transition-all select-none group border border-transparent hover:border-[#F1F1F1]">
                        <div className="relative flex items-center">
                          <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#FE5729] focus:ring-[#FE5729] cursor-pointer peer appearance-none checked:bg-[#FE5729] checked:border-[#FE5729] transition-all shadow-sm" />
                          <Check size={12} strokeWidth={4} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                        </div>
                        <span className="text-[13.5px] font-bold text-gray-500 group-hover:text-[#1C1C1C] transition-colors">{member}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Roles Checklist */}
                <div>
                  <h4 className="font-bold text-[14px] text-[#1C1C1C] mb-3 border-b border-[#F1F1F1] pb-2">Roles</h4>
                  <div className="border border-[#F1F1F1] rounded-xl p-2 bg-[#FAFAFA] space-y-1">
                    {["all"].map((role, idx) => (
                      <label key={idx} className="flex items-center gap-3 px-3 py-3 hover:bg-white hover:shadow-sm rounded-lg cursor-pointer transition-all select-none group border border-transparent hover:border-[#F1F1F1]">
                        <div className="relative flex items-center">
                          <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#FE5729] focus:ring-[#FE5729] cursor-pointer peer appearance-none checked:bg-[#FE5729] checked:border-[#FE5729] transition-all shadow-sm" />
                          <Check size={12} strokeWidth={4} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                        </div>
                        <span className="text-[13.5px] font-bold text-gray-500 group-hover:text-[#1C1C1C] transition-colors">{role}</span>
                      </label>
                    ))}
                  </div>
                </div>

              </div>

              <button className="bg-[#FE5729] hover:bg-[#E04D20] text-white px-6 py-3 rounded-xl font-bold text-[14px] transition-colors w-max shadow-[0_4px_15px_rgba(254,87,41,0.2)] hover:shadow-[0_6px_20px_rgba(254,87,41,0.3)] mt-auto">
                Save group
              </button>
            </div>
          </motion.div>
        )}

        {activeTab === "Users" && (
          <motion.div 
            key="users"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="flex justify-end">
              <button className="bg-[#1C1C1C] hover:bg-black hover:shadow-[0_4px_15px_rgba(28,28,28,0.2)] text-white px-5 py-3 rounded-xl font-bold text-[14px] flex items-center gap-2 transition-all">
                <UserPlus size={16} strokeWidth={2.5} /> Create user
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] flex flex-col">
              <h3 className="font-bold text-[18px] text-[#1C1C1C] flex items-center gap-2 mb-1">
                <UserPlus size={18} className="text-[#0052CC]" /> User role assignment
              </h3>
              <p className="text-[13px] font-semibold text-gray-500 mb-6">Select a user, assign roles, and preview effective permissions.</p>
              
              <div className="space-y-4 mb-6">
                <input 
                  type="text" 
                  placeholder="Global search" 
                  className="w-full border border-[#F1F1F1] bg-[#FAFAFA] rounded-xl px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] placeholder:text-gray-400 outline-none focus:border-[#FE5729]/50 focus:bg-white focus:ring-2 focus:ring-[#FE5729]/10 transition-all"
                />
                
                <div className="flex items-center gap-3">
                  <div className="relative flex-1">
                    <select className="w-full appearance-none border border-[#F1F1F1] bg-[#FAFAFA] rounded-xl pl-4 pr-10 py-3 text-[14px] font-semibold text-[#1C1C1C] outline-none focus:border-[#FE5729]/50 focus:bg-white focus:ring-2 focus:ring-[#FE5729]/10 transition-all cursor-pointer">
                      <option>Select user</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                  <button className="p-3 text-gray-400 border border-[#F1F1F1] bg-[#FAFAFA] hover:text-[#FE5729] rounded-xl hover:bg-[#FFF0E6] hover:border-[#FE5729]/20 transition-colors">
                    <Edit2 size={16} />
                  </button>
                  <button className="p-3 text-gray-400 border border-[#F1F1F1] bg-[#FAFAFA] hover:text-red-500 rounded-xl hover:bg-red-50 hover:border-red-500/20 transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-[13px] font-bold text-gray-600 mb-2">Roles</label>
                  <div className="relative">
                    <select className="w-full appearance-none border border-[#F1F1F1] bg-[#FAFAFA] rounded-xl pl-4 pr-10 py-3 text-[14px] font-semibold text-gray-400 outline-none focus:border-[#FE5729]/50 focus:bg-white focus:ring-2 focus:ring-[#FE5729]/10 transition-all cursor-pointer">
                      <option>Select roles...</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-600 mb-2">Groups</label>
                  <div className="relative">
                    <select className="w-full appearance-none border border-[#F1F1F1] bg-[#FAFAFA] rounded-xl pl-4 pr-10 py-3 text-[14px] font-semibold text-gray-400 outline-none focus:border-[#FE5729]/50 focus:bg-white focus:ring-2 focus:ring-[#FE5729]/10 transition-all cursor-pointer">
                      <option>Select groups...</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-600 mb-2">Projects</label>
                  <div className="relative">
                    <select className="w-full appearance-none border border-[#F1F1F1] bg-[#FAFAFA] rounded-xl pl-4 pr-10 py-3 text-[14px] font-semibold text-gray-400 outline-none focus:border-[#FE5729]/50 focus:bg-white focus:ring-2 focus:ring-[#FE5729]/10 transition-all cursor-pointer">
                      <option>Select projects...</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#FAFAFA] border border-[#F1F1F1] rounded-xl p-5 mb-8">
                <h4 className="font-bold text-[14px] text-[#1C1C1C] mb-1">Effective permissions</h4>
                <p className="text-[13px] font-medium text-gray-500">Select a user to preview resolved permissions.</p>
              </div>

              <button className="bg-[#FE5729] hover:bg-[#E04D20] text-white px-6 py-3 rounded-xl font-bold text-[14px] transition-colors w-max shadow-[0_4px_15px_rgba(254,87,41,0.2)] hover:shadow-[0_6px_20px_rgba(254,87,41,0.3)]">
                Save user
              </button>
            </div>
          </motion.div>
        )}

        {activeTab === "Folder ACL" && (
          <motion.div 
            key="folder-acl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1] flex flex-col min-h-[500px]">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="font-bold text-[18px] text-[#1C1C1C] flex items-center gap-2 mb-1">
                    <FolderKanban size={18} className="text-[#0052CC]" /> Folder ACL
                  </h3>
                  <p className="text-[13px] font-semibold text-gray-500">Grant folder-level permissions by role, group, or user.</p>
                </div>
                <button className="bg-[#1C1C1C] hover:bg-black hover:shadow-[0_4px_15px_rgba(28,28,28,0.2)] text-white px-5 py-3 rounded-xl font-bold text-[14px] flex items-center gap-2 transition-all shrink-0">
                  <Plus size={16} strokeWidth={2.5} /> Add rule
                </button>
              </div>

              <div className="flex-1 border-2 border-dashed border-[#E5E5E5] rounded-xl flex flex-col items-center justify-center py-20 bg-[#FAFAFA]/50 group transition-all hover:bg-[#FAFAFA] hover:border-[#FE5729]/30">
                <div className="w-14 h-14 rounded-full bg-white border border-[#F1F1F1] shadow-[0_2px_10px_rgb(0,0,0,0.03)] flex items-center justify-center text-gray-400 mb-5 group-hover:text-[#FE5729] group-hover:scale-110 transition-all duration-300">
                  <Lock size={22} strokeWidth={2.5} />
                </div>
                <h4 className="text-[16px] font-bold text-[#1C1C1C] mb-2">No access rules yet</h4>
                <p className="text-[14px] font-medium text-gray-500 mb-8 max-w-[300px] text-center leading-relaxed">
                  Add your first folder ACL rule to control who can access each folder.
                </p>
                
                <button className="bg-[#FE5729] hover:bg-[#E04D20] text-white px-6 py-3 rounded-xl font-bold text-[14px] flex items-center gap-2 transition-all shadow-[0_4px_15px_rgba(254,87,41,0.2)] hover:shadow-[0_6px_20px_rgba(254,87,41,0.3)] hover:-translate-y-0.5">
                  <Plus size={16} strokeWidth={2.5} /> Add rule
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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

function Tab({ children, active = false, icon, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-2 px-5 py-3 rounded-xl text-[13.5px] font-bold transition-all whitespace-nowrap border ${
        active 
          ? "bg-[#1C1C1C] text-white border-[#1C1C1C] shadow-[0_8px_20px_rgba(28,28,28,0.2)]" 
          : "bg-white text-gray-500 border-[#F1F1F1] hover:bg-[#FAFAFA] hover:text-[#1C1C1C] hover:border-[#1C1C1C]/10"
      }`}
    >
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
