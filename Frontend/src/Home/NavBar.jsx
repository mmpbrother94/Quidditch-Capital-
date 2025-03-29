import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthStore } from "../contentStore/authStore";

function NavBar() {
  const { logout } = useAuthStore();
  const handleSignOut = () => {
    console.log("Logging out...");
    logout();
  };

  return (
    <>
      <nav className="relative flex justify-between items-center px-10 py-4 shadow-lg bg-gradient-to-r from-[#4B1C12] via-[#5A3E1B] to-[#7D510F] border-b-4 border-gold-500">
        {/* Logo with Gringotts & Quidditch Theme */}
        <div className="text-3xl font-bold">
          <span className="text-gold-500 drop-shadow-[2px_4px_6px_rgba(255,215,0,0.8)]">Gringotts</span>
          <span className="text-[#FFD700] ml-2">Trading Pitch</span>
        </div>
        
        {/* Navigation Links */}
        <div className="flex space-x-6 text-[#D4AF37] font-medium text-lg">
          <NavLink to="/mainpage/home" className="nav-link">Home</NavLink>
          <NavLink to="/mainpage/dashboard" className="nav-link">Quidditch Dashboard</NavLink>
          <NavLink to="/mainpage/marketIntelegence" className="nav-link">Bludger Attacks</NavLink>
          <NavLink to="/mainpage/reports" className="nav-link">Seeker’s Risk Analysis</NavLink>
          <NavLink to="/mainpage/exploreData" className="nav-link">Magical Market Insights</NavLink>
        </div>
        
        {/* Sign Out Button */}
        {/* <div className="flex items-center space-x-4">
          <button onClick={handleSignOut} className="bg-[#8B0000] px-4 py-2 rounded-lg text-white font-bold hover:bg-[#A52A2A] transition-all duration-300 shadow-md">
            Sign Out
          </button>
        </div> */}
        <div className="flex items-center space-x-4">
          <NavLink to='/' className="bg-red-700 p-2 rounded-2xl drop-shadow-[4px_8px_8px_rgba(0,0,0,4.5)] hover:bg-yellow-800">
            Signout
          </NavLink>
        </div>
        
        {/* Animated Magical Glow Line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#DAA520] animate-[animateLine_5s_linear_infinite]"></div>
      </nav>
      
      {/* Styles for animations */}
      <style>
        {`
          @keyframes animateLine {
            0% { transform: translateX(-100%); opacity: 0.7; }
            100% { transform: translateX(100%); opacity: 1; }
          }
          .nav-link {
            font-weight: bold;
            transition: all 0.3s ease-in-out;
            position: relative;
          }
          .nav-link:hover {
            color: #FFD700;
            transform: scale(1.1);
          }
          .nav-link::after {
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            background: #FFD700;
            transform: scaleX(0);
            transition: transform 0.3s ease-in-out;
          }
          .nav-link:hover::after {
            transform: scaleX(1);
          }
        `}
      </style>
    </>
  );
}

export default NavBar;
