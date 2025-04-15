"use client";

import React from "react";

const FeatureSection = () => {
  return (
    <section className="py-20 rounded-2xl bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 text-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 z-10">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6 relative">
          Leveraging{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-500">
            ApurvA.I
          </span>{" "}
          - Supporting{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-lime-500 to-teal-500">
            Features That Enhance The AI
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-500">
            Course Creation Process
          </span>
        </h2>

        {/* Enhanced Wavy Underline with Glow */}
        <div className="w-1/2 mx-auto mb-12">
          <svg
            className="w-full filter drop-shadow-[0_0_10px_rgba(106,13,173,0.5)]"
            viewBox="0 0 1440 50"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              fill="none"
              stroke="url(#underlineGradient)"
              strokeWidth="3"
              d="M0,25 Q200,15 400,25 T800,20 T1200,25 T1440,20"
            >
              <animate
                attributeName="d"
                dur="4s"
                repeatCount="indefinite"
                values="
                  M0,25 Q200,15 400,25 T800,20 T1200,25 T1440,20;
                  M0,20 Q200,30 400,20 T800,25 T1200,20 T1440,25;
                  M0,25 Q200,15 400,25 T800,20 T1200,25 T1440,20"
              />
            </path>
            <defs>
              <linearGradient id="underlineGradient" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#6a0dad" />
                <stop offset="50%" stopColor="#ff00cc" />
                <stop offset="100%" stopColor="#ff4081" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {/* Feature 1: Video Script Generation */}
          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-300 relative overflow-hidden group">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-200 rounded-full group-hover:scale-110 transition-transform duration-300">
              <img
                src="https://courseai.com/wp-content/uploads/2024/07/Frame-239592.svg"
                alt="Video Script Generation Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-300 group-hover:text-shadow-md">
              Video Script Generation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Creates ready-to-use video scripts that you can use if you want to
              add videos to your courses.
            </p>
            <div className="absolute top-0 left-0 w-full h-full bg-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>

          {/* Feature 2: AI Video Generation */}
          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-300 relative overflow-hidden group">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-200 rounded-full group-hover:scale-110 transition-transform duration-300">
              <img
                src="https://courseai.com/wp-content/uploads/2024/07/Frame-239599.svg"
                alt="AI Video Generation Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-300 group-hover:text-shadow-md">
              AI Video Generation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Generate custom tailored videos using AI that are specific to your
              course and its content!
            </p>
            <div className="absolute top-0 left-0 w-full h-full bg-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>

          {/* Feature 3: CourseAI Academy */}
          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-300 relative overflow-hidden group">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-200 rounded-full group-hover:scale-110 transition-transform duration-300">
              <img
                src="https://courseai.com/wp-content/uploads/2024/07/Frame-239600.svg"
                alt="CourseAI Academy Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-300 group-hover:text-shadow-md">
              CourseAI Academy
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Provides a detailed walk-through the process of creating an online
              course.
            </p>
            <div className="absolute top-0 left-0 w-full h-full bg-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>

          {/* Feature 4: Roadmap Generation */}
          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-300 relative overflow-hidden group">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-200 rounded-full group-hover:scale-110 transition-transform duration-300">
              <img
                src="https://courseai.com/wp-content/uploads/2024/07/Frame-239592.svg"
                alt="Roadmap Generation Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-300 group-hover:text-shadow-md">
              Roadmap Generation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Creates a structured learning roadmap tailored to your course
              objectives and audience.
            </p>
            <div className="absolute top-0 left-0 w-full h-full bg-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>

          {/* Feature 5: YouTube Video Summary */}
          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-300 relative overflow-hidden group">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-200 rounded-full group-hover:scale-110 transition-transform duration-300">
              <img
                src="https://courseai.com/wp-content/uploads/2024/07/Frame-239599.svg"
                alt="YouTube Video Summary Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-300 group-hover:text-shadow-md">
              YouTube Video Summary
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Summarizes key points from YouTube videos to enrich your course
              content effortlessly.
            </p>
            <div className="absolute top-0 left-0 w-full h-full bg-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>

          {/* Feature 6: Free Course Recommendation */}
          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-300 relative overflow-hidden group">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-200 rounded-full group-hover:scale-110 transition-transform duration-300">
              <img
                src="https://courseai.com/wp-content/uploads/2024/07/Frame-239600.svg"
                alt="Free Course Recommendation Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-300 group-hover:text-shadow-md">
              Free Course Recommendation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Suggests free courses to complement and enhance your learning
              journey.
            </p>
            <div className="absolute top-0 left-0 w-full h-full bg-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-br from-purple-300 to-transparent opacity-20 blur-md"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-full bg-gradient-to-tl from-pink-300 to-transparent opacity-20 blur-md"></div>
    </section>
  );
};

export default FeatureSection;