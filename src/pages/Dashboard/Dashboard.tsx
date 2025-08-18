import { useState } from 'react';
import Navbar from '../../components/ui/Navbar';
import Sidebar from '../../components/ui/Sidebar';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center" style={{ background: '#000000' }}>
      <div className="w-full h-full">
        <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      <div className="flex overflow-hidden bg-white pt-16">
        <Sidebar isOpen={isSidebarOpen} />
      </div>
    </div>
  );
}

export default Dashboard;