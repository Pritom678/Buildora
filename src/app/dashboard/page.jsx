"use client";

import React, { useState } from "react";

const DashboardPage = () => {
  const [activeNav, setActiveNav] = useState("Dashboard");

  const navItems = [
    {
      name: "Dashboard",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      name: "Projects",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          />
        </svg>
      ),
    },
    {
      name: "Clients",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      name: "Analytics",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      name: "Messages",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      ),
    },
    {
      name: "Settings",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  // Placeholder stats data - will be replaced with backend API
  const statsCards = [
    {
      title: "Total Projects",
      value: "24",
      change: "+12%",
      color: "bg-secondary",
    },
    { title: "Active Clients", value: "18", change: "+8%", color: "bg-muted" },
    {
      title: "Revenue",
      value: "$45.2K",
      change: "+23%",
      color: "bg-secondary",
    },
    {
      title: "Completion Rate",
      value: "94%",
      change: "+5%",
      color: "bg-muted",
    },
  ];

  // Placeholder recent activities - will be replaced with backend API
  const recentActivities = [
    { action: "New project created", time: "2 hours ago", user: "John Doe" },
    {
      action: "Client meeting scheduled",
      time: "4 hours ago",
      user: "Jane Smith",
    },
    { action: "Invoice sent", time: "1 day ago", user: "Mike Johnson" },
    { action: "Project completed", time: "2 days ago", user: "Sarah Williams" },
  ];

  // Placeholder projects - will be replaced with backend API
  const projects = [
    { name: "E-commerce Website", status: "In Progress", progress: 75 },
    { name: "Mobile App Design", status: "In Progress", progress: 60 },
    { name: "Brand Identity", status: "Review", progress: 90 },
    { name: "Marketing Campaign", status: "Planning", progress: 30 },
  ];

  return (
    <div className="min-h-screen bg-primary flex">
      {/* LEFT SIDEBAR - Glassmorphism */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white/30 backdrop-blur-md border-r border-white/20 shadow-lg z-50">
        <div className="p-6">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-accent kiona">Buildora</h1>
            <p className="text-sm text-accent/60">Dashboard</p>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveNav(item.name)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  activeNav === item.name
                    ? "bg-secondary text-primary shadow-md"
                    : "text-accent hover:bg-white/20"
                }`}
              >
                <span>{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* User Profile Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary font-bold">
              U
            </div>
            <div>
              <p className="font-semibold text-accent text-sm">User Name</p>
              <p className="text-xs text-accent/60">user@buildora.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN DASHBOARD AREA */}
      <main className="flex-1 ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-accent kiona mb-2">
            Welcome Back!
          </h2>
          <p className="text-accent/70">
            Here's what's happening with your projects today.
          </p>
        </div>

        {/* STATS CARDS - Data will come from backend API */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-accent/60">
                  {stat.title}
                </h3>
                <span
                  className={`${stat.color} text-white text-xs px-2 py-1 rounded-full`}
                >
                  {stat.change}
                </span>
              </div>
              <p className="text-3xl font-bold text-accent">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* PROJECTS OVERVIEW - Data will come from backend API */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-accent">
                Projects Overview
              </h3>
              <button className="text-sm text-secondary hover:underline">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {/* TODO: Connect to backend API for real project data */}
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="border-b border-gray-100 pb-4 last:border-0"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-accent">
                      {project.name}
                    </h4>
                    <span className="text-xs bg-muted/20 text-accent px-3 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-secondary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-accent">
                      {project.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RECENT ACTIVITY - Data will come from backend API */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-accent mb-6">
              Recent Activity
            </h3>

            <div className="space-y-4">
              {/* TODO: Connect to backend API for real activity data */}
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-accent">
                      {activity.action}
                    </p>
                    <p className="text-xs text-accent/60">{activity.user}</p>
                    <p className="text-xs text-accent/40 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* NOTIFICATIONS SECTION - Data will come from backend API */}
        <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-accent mb-4">Notifications</h3>
          <div className="space-y-3">
            {/* TODO: Connect to backend API for real notification data */}
            <div className="flex items-center gap-4 p-4 bg-primary rounded-xl">
              <span className="text-2xl">🔔</span>
              <div className="flex-1">
                <p className="font-medium text-accent">
                  New message from client
                </p>
                <p className="text-sm text-accent/60">
                  Review the latest feedback on your project
                </p>
              </div>
              <span className="text-xs text-accent/40">5 min ago</span>
            </div>

            <div className="flex items-center gap-4 p-4 bg-primary rounded-xl">
              <span className="text-2xl">✅</span>
              <div className="flex-1">
                <p className="font-medium text-accent">
                  Project milestone completed
                </p>
                <p className="text-sm text-accent/60">
                  E-commerce website phase 2 is done
                </p>
              </div>
              <span className="text-xs text-accent/40">1 hour ago</span>
            </div>

            <div className="flex items-center gap-4 p-4 bg-primary rounded-xl">
              <span className="text-2xl">📅</span>
              <div className="flex-1">
                <p className="font-medium text-accent">Upcoming deadline</p>
                <p className="text-sm text-accent/60">
                  Mobile app design due in 3 days
                </p>
              </div>
              <span className="text-xs text-accent/40">2 hours ago</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
