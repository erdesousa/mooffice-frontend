import React from 'react';
import logo from '../../assets/Group 2260.svg';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <nav className="bg-black border-b border-gray-800 fixed z-30 w-full h-16 flex items-center">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button
                            onClick={toggleSidebar}
                            className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded transition-colors"
                        >
                            {isSidebarOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>

                        <a href="#" className="text-xl font-bold flex items-center lg:ml-2.5">
                            <img
                                src={logo}
                                className="h-6 mr-2"
                                alt="moofice"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;