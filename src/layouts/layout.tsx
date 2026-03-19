import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function Layout({ children }: any) {
  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 p-4">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 px-6 py-4 space-y-6">
        
        {/* 🔥 Topbar (Logout button yahin hoga) */}
        <Topbar />

        {/* Page Content */}
        {children}
      </div>

    </div>
  );
}