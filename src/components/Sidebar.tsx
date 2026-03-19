import { NavLink } from "react-router-dom";
import { LayoutDashboard, BarChart3, Users } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-full bg-white/70 backdrop-blur-lg 
    border border-white/40 rounded-2xl shadow-md p-4 flex flex-col">

      {/* 🔥 Logo */}
      <h1 className="text-xl font-bold text-indigo-600 mb-8 text-center">
        HealthCare 🏥
      </h1>

      {/* 🔥 Navigation */}
      <nav className="flex flex-col gap-3">

        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200
            ${
              isActive
                ? "bg-indigo-500 text-white shadow-md"
                : "text-gray-600 hover:bg-indigo-100"
            }`
          }
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        {/* Analytics */}
        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200
            ${
              isActive
                ? "bg-indigo-500 text-white shadow-md"
                : "text-gray-600 hover:bg-indigo-100"
            }`
          }
        >
          <BarChart3 size={18} />
          Analytics
        </NavLink>

        {/* Patients */}
        <NavLink
          to="/patients"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200
            ${
              isActive
                ? "bg-indigo-500 text-white shadow-md"
                : "text-gray-600 hover:bg-indigo-100"
            }`
          }
        >
          <Users size={18} />
          Patients
        </NavLink>

      </nav>

      {/* 🔥 Bottom (optional future use) */}
      <div className="mt-auto text-sm text-gray-400 text-center">
        © 2026 Healthcare
      </div>
    </div>
  );
}