"use client";
import React, { useState } from "react";
import { Plus, Folder, MoreVertical, ChevronRight, X } from "lucide-react";

// Mock data for projects
const initialProjects = [
  {
    id: 1,
    name: "projet 1",
    status: "Active",
  },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState(initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectStatus, setNewProjectStatus] = useState("Planning");

  const handleCreateProject = () => {
    if (newProjectName.trim() !== "") {
      const newProject = {
        id: projects.length + 1,
        name: newProjectName,
        status: newProjectStatus,
      };
      setProjects([...projects, newProject]);
      setNewProjectName("");
      setNewProjectStatus("Planning");
      setIsModalOpen(false);
    }
  };

  return (
    <div className="animate-in fade-in duration-700 w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1C1C1C]">Projects</h1>
          <p className="text-sm text-gray-500">Home / Projects</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Plus size={18} />
          <span>Create project</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#F1F1F1]">
        {projects.map((project) => (
          <div key={project.id} className="flex items-center justify-between p-4 border-b border-gray-100 last:border-b-0">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <Folder size={20} className="text-gray-600" />
              </div>
              <div>
                <p className="font-semibold text-[#1C1C1C]">{project.name}</p>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    project.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
               <a href={`/projects/${project.id}`} className="text-sm text-gray-500 hover:text-blue-500 flex items-center">
                View details
                <ChevronRight size={16} />
              </a>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-lg w-full max-w-md animate-in fade-in-90 zoom-in-95">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Create project</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-1">
                  Project name
                </label>
                <input
                  type="text"
                  id="projectName"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  id="status"
                  value={newProjectStatus}
                  onChange={(e) => setNewProjectStatus(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Planning</option>
                  <option>Active</option>
                  <option>Completed</option>
                  <option>On Hold</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateProject}
                className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
