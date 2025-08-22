import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
// import { Menu } from "lucide-react";
// import Button from "@/components/ui/Button";
import { useState } from "react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dashboard-bg bg-black">
      <Sidebar />
      
      {/* Mobile sidebar toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        {/* <Button
          variant="outline"
          size="sm"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="h-4 w-4" />
        </Button> */}
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <div className={`md:hidden fixed left-0 top-0 z-50 h-screen w-64 bg-sidebar border-r border-dashboard-border transform transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="md:ml-64">
        <main className="p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}