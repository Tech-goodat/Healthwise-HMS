import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const NavBar = () => {
    const Navigate = useNavigate();
    const user = sessionStorage.getItem('username');
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        sessionStorage.clear();
        Navigate('/');
    };

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className="flex p-2 w-full items-center justify-between bg-black relative">
            {/* Logo and Brand */}
            <Link to="/dashboard">
            <div className="flex gap-3 mr-4 items-center">
                <img src="/betterlogo.png" alt="logo" className="w-[30px] ml-4 h-auto" />
                <p className="text-[13px] text-white">
                    Health<span className="text-gray-400">Wise</span>
                </p>
            </div>
            </Link>

            {/* User Profile Section */}
            <div className="flex flex-col items-end relative mr-4">
                <div 
                    onClick={toggleMenu}
                    className="flex gap-2 items-center cursor-pointer"
                >
                    <img src="/logo.png" alt="profile" className="w-[30px] h-[30px] bg-white rounded-full" />
                    <h1 className="text-[13px] text-white">{user}</h1>
                </div>

                {/* Logout button */}
                {menuOpen && (
                    <button
                        onClick={handleLogout}
                        className="mt-2 text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-sm text-[10px] shadow transition-all"
                    >
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
};

export default NavBar;
