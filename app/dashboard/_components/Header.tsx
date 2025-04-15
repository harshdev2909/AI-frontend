import { UserButton } from "@clerk/nextjs";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 shadow-lg bg-gradient-to-br from-gray-100 to-white transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-500 transition-all duration-300 hover:scale-105">
          ApurvA.I
        </h1>
        {/* Custom SVG Underline */}
        <svg
          className="w-3/4 mt-2 filter drop-shadow-[0_0_5px_rgba(106,13,173,0.3)]"
          viewBox="0 0 1440 20"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            fill="none"
            stroke="url(#headerUnderlineGradient)"
            strokeWidth="2"
            d="M0,10 Q180,5 360,10 T720,8 T1080,10 T1440,8"
          >
            <animate
              attributeName="d"
              dur="3s"
              repeatCount="indefinite"
              values="
                M0,10 Q180,5 360,10 T720,8 T1080,10 T1440,8;
                M0,8 Q180,12 360,8 T720,10 T1080,8 T1440,12;
                M0,10 Q180,5 360,10 T720,8 T1080,10 T1440,8"
            />
          </path>
          <defs>
            <linearGradient id="headerUnderlineGradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#6a0dad" />
              <stop offset="50%" stopColor="#ff00cc" />
              <stop offset="100%" stopColor="#ff4081" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <UserButton />
    </div>
  );
};

export default Header;