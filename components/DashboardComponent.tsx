"use client";

import React from "react";
import {
  Users,
  Folder,
  FileText,
  MessageSquare,
  ArrowUp,
  ArrowDown,
  MoreHorizontal,
  Bell,
  Check,
} from "lucide-react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const StatCard = ({ icon, title, value, change, isUp }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <div className="bg-gray-100 p-3 rounded-lg">{icon}</div>
      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
    <div
      className={`flex items-center gap-1 text-sm font-semibold ${
        isUp ? "text-green-500" : "text-red-500"
      }`}
    >
      {isUp ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
      <span>{change}</span>
    </div>
  </div>
);

const RecentActivity = ({ activity }) => (
  <div className="flex items-start gap-4">
    <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
    </div>
    <div>
      <p className="text-gray-800 font-semibold">{activity.text}</p>
      <p className="text-gray-400 text-sm">{activity.time}</p>
    </div>
  </div>
);

const DocumentItem = ({ doc }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
    <div className="flex items-center gap-4">
      <div className="bg-gray-100 p-3 rounded-lg">
        <FileText size={20} className="text-gray-600" />
      </div>
      <div>
        <p className="font-semibold text-gray-800">{doc.name}</p>
        <p className="text-sm text-gray-500">
          v{doc.version} - {doc.date}
        </p>
      </div>
    </div>
    <button className="text-gray-400 hover:text-gray-600">
      <MoreHorizontal size={20} />
    </button>
  </div>
);

const barChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Projects",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "rgba(59, 130, 246, 0.5)",
      borderColor: "rgba(59, 130, 246, 1)",
      borderWidth: 1,
      borderRadius: 8,
    },
  ],
};

const doughnutChartData = {
  labels: ["Documents", "RFIs", "Users"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const recentActivities = [
  { text: "ged1 Requested a visa", time: "Apr 12, 11:16 PM" },
  { text: "ged1 Added a comment", time: "Apr 12, 11:15 PM" },
  { text: "ged1 Created document nbn", time: "Apr 10, 07:40 PM" },
  { text: "ged1 Created folder mnbnbnm", time: "Apr 10, 07:39 PM" },
];

const recentDocuments = [
  { name: "ADsadad", version: 1, date: "Apr 12, 11:17 PM" },
  { name: "nbn", version: 1, date: "Apr 10, 07:40 PM" },
  { name: "TEST", version: 1, date: "Mar 29, 09:11 PM" },
];

const DashboardComponent = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-500">Welcome back, here's your summary.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button className="bg-white p-3 rounded-full shadow-sm border border-gray-200">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
          <div className="relative">
            <img
              src="https://i.pravatar.cc/150?img=11"
              alt="User"
              className="w-12 h-12 rounded-full border-2 border-blue-500"
            />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={<Folder size={24} className="text-blue-500" />}
          title="Total Projects"
          value="1"
          change="1.2%"
          isUp={true}
        />
        <StatCard
          icon={<FileText size={24} className="text-red-500" />}
          title="Total Documents"
          value="5"
          change="5.6%"
          isUp={true}
        />
        <StatCard
          icon={<MessageSquare size={24} className="text-yellow-500" />}
          title="Active RFIs"
          value="0"
          change="0%"
          isUp={false}
        />
        <StatCard
          icon={<Users size={24} className="text-green-500" />}
          title="Total Users"
          value="5"
          change="2.1%"
          isUp={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Project Growth
          </h2>
          <div className="h-64">
            <Bar data={barChartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Content Distribution
          </h2>
          <div className="h-64">
            <Doughnut
              data={doughnutChartData}
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Recent Activities
          </h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <RecentActivity key={index} activity={activity} />
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Recent Documents
          </h2>
          <div>
            {recentDocuments.map((doc, index) => (
              <DocumentItem key={index} doc={doc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
