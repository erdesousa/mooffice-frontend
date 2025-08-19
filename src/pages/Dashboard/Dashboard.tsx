import { useState } from 'react';
import Navbar from '../../components/ui/Navbar';
import Sidebar from '../../components/ui/Sidebar';
import MainContent from '../../components/ui/MainContent';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (label: string) => {
    setActiveItem(label);
    // Em dispositivos móveis, fecha a sidebar após clicar
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="bg-black h-screen overflow-hidden flex">
      <div className="bg-blue-500 w-full h-full">
        <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      <div className="bg-amber-700 overflow-hidden w-full h-full">
        <Sidebar 
          isOpen={isSidebarOpen} 
          onItemClick={handleItemClick} 
          activeItem={activeItem} 
        />
        
        <MainContent activeItem={activeItem} />
      </div>
    </div>
  );
}

export default Dashboard;