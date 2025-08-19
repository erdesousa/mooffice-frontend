import React from 'react';
import {
  PieChart,
  LogIn,
  UserPlus,
  Search,
  Gauge,
  ChartNoAxesColumn,
  Cog,
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onItemClick: (label: string) => void;
  activeItem: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onItemClick, activeItem }) => {
  const menuItems = [
    { icon: PieChart, label: 'Dashboard', href: '#' },
    { icon: Gauge, label: 'Medidores', href: '#' },
    { icon: ChartNoAxesColumn, label: 'Leituras', href: '#' },
    { icon: Cog, label: 'Limites', href: '#' },
    { icon: UserPlus, label: 'Criar admin', href: '#' },
    { icon: LogIn, label: 'Sair', href: '#' },
  ];

  return (
    <>
      <aside
        className={`fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
      >
        <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-800 bg-black pt-0">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 bg-black divide-y space-y-1">
              <ul className="space-y-2 pb-2">
                <li className="lg:hidden">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                      placeholder="Search"
                    />
                  </div>
                </li>

                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        onItemClick(item.label);
                      }}
                      className={`text-base text-gray-100 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 hover:text-gray-950 group transition-colors ${activeItem === item.label ? 'bg-gray-100 text-gray-950' : ''}`}
                    >
                      <item.icon className={`w-5 h-5 ${activeItem === item.label ? 'text-gray-900' : 'text-gray-500'} group-hover:text-gray-900 transition duration-75`} />
                      <span className="ml-3 flex-1 whitespace-nowrap">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </aside>

      {isOpen && (
        <div className="bg-gray-900 opacity-50 fixed inset-0 z-10 lg:hidden" />
      )}
    </>
  );
};

export default Sidebar;