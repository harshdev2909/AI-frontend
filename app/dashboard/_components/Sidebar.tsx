"use client";

import React, { useContext } from "react";
import { navList } from "../_constants/navList";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { UserCourseListContext } from "@/app/_context/UserCourseList.context";
import WordRotate from "@/components/ui/word-rotate";

const Sidebar = () => {
  const path = usePathname();
  const { userCourseList } = useContext(UserCourseListContext);

  return (
    <div
      className="fixed h-full md:w-64 p-5 shadow-lg transition-all duration-300"
      style={{
        background: "linear-gradient(135deg, #1e1e2f, #2d1b4e, #4a1a6e)",
      }}
    >
      <WordRotate
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 animate-pulse-slow text-center"
        words={["Apurv", "A.I", "ApurvA.I"]}
      />
      <hr className="my-5 border-gray-700" />

      <ul>
        {navList.map((item) => (
          <Link href={item.route} key={item.id}>
            <div
              className={`flex items-center gap-2 text-gray-300 p-3 cursor-pointer rounded-lg mb-3 transition-all duration-300 hover:bg-gradient-to-r from-purple-600/20 to-indigo-600/20 hover:text-white hover:scale-105 ${
                item.route === path && "bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-white"
              }`}
            >
              <div className="text-2xl">
                <item.icon className="transition-transform duration-300 hover:rotate-12" />
              </div>
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </ul>

      <div className="absolute bottom-10 w-[80%]">
        <Progress
          value={(userCourseList.length / 5) * 100}
          className="h-2"
          style={{
            background: "#2d1b4e",
            backgroundImage: "linear-gradient(to right, #6a0dad, #ff00cc)",
          }}
        />
        <h2 className="text-sm my-2 text-gray-200 bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text">
          {userCourseList.length} out of 5 Courses created
        </h2>
        <Link href="/upgrade">
          <h2 className="text-xs text-gray-400 hover:text-purple-300 transition-colors">
            Upgrade your Plan for Unlimited
          </h2>
        </Link>
      </div>

      {/* Decorative Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-purple-900/20 to-transparent opacity-50 blur-md"></div>
    </div>
  );
};

// Custom CSS for animations (add to your global stylesheet or use a custom class)
const styles = `
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
  }
  .animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
  }
`;

export default Sidebar;