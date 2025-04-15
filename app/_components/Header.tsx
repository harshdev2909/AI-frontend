"use client";

import { Button } from "@/components/ui/button";
import ShinyButton from "@/components/ui/shiny-button";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { user } = useUser();
  return (
    <div className="flex justify-between p-5 shadow-sm">
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
      {!user ? (
        <Link href="/sign-up">
          <ShinyButton text="Sign Up" />
        </Link>
      ) : (
        <Link href="/dashboard">
          <Button>Dashboard</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
