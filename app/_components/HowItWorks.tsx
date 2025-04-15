"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { IconType } from "react-icons/lib";
import { LuBookOpen, LuFileVideo, LuShare2, LuUser } from "react-icons/lu";
import { FaUser } from "react-icons/fa";

interface FeatureProps {
  icon: IconType;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: FaUser,
    title: "Register for an Account",
    description:
      "Sign up for a free account to access the course creation tools. Once registered, you’ll be able to log in and start building your personalized courses",
  },
  {
    icon: LuBookOpen,
    title: "Create Your First Course",
    description:
      "Use our intuitive interface to generate a course. Simply provide a topic, and Gemini AI will automatically generate the course content for you.",
  },
  {
    icon: LuFileVideo,
    title: "Automatically Attach Related Videos",
    description:
      "After your course is generated, our system will find and attach relevant YouTube videos that complement your course material, saving you the hassle of finding additional resources",
  },
  {
    icon: LuShare2,
    title: "Customize and Share",
    description:
      "Customize your course to fit your needs, and once you’re satisfied, publish and share it with your students. Our platform makes it easy to manage and distribute your course content.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="get-started"
      className="container text-center py-24 rounded-2xl w-full sm:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #e0e7ff, #d8b4fe, #f9a8d4)",
      }}
    >
      <div className="max-w-8xl mx-auto px-6 z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold relative">
          How To{" "}
          <span className="bg-gradient-to-br from-primary/60 via-purple-600 to-pink-500 text-transparent bg-clip-text animate-pulse-slow">
            Get{" "}
          </span>
          Started
        </h2>
        <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
          Create Smarter, Learn Faster – AI-Powered Courses at Your Fingertips
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon, title, description }: FeatureProps) => (
            <Card
              key={title}
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-purple-300 relative group"
            >
              <CardHeader className="p-6">
                <CardTitle className="grid gap-4 place-items-center">
                  {React.createElement(icon, {
                    size: 40,
                    className:
                      "text-gradient from-purple-600 to-pink-500 animate-bounce-slow",
                  })}
                  <span className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-300 group-hover:text-shadow-md">
                    {title}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-gray-700 bg-gradient-to-b from-white to-gray-50">
                {description}
              </CardContent>
              <div className="absolute top-0 left-0 w-full h-full bg-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-br from-purple-300 to-transparent opacity-20 blur-md animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-full bg-gradient-to-tl from-pink-300 to-transparent opacity-20 blur-md animate-pulse-slow"></div>
    </section>
  );
};

// Custom CSS for animations (add this to your global stylesheet or use a custom class)
const styles = `
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.4; }
  }
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  .animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
  }
  .animate-bounce-slow {
    animation: bounce-slow 3s ease-in-out infinite;
  }
  .text-shadow-md {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

// If using a CSS-in-JS solution or global stylesheet, add the styles accordingly