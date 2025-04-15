"use client";

import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is ApurvA.I?",
      answer:
        "ApurvA.I is an AI-powered platform that helps you create, customize, and manage online courses with ease, featuring tools like script generation, video creation, and learning roadmaps.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply sign up on our website, explore the dashboard, and use the intuitive tools to start building your course. Tutorials are available in CourseAI Academy.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, we offer a free tier with limited features. Upgrade to a paid plan for full access to all tools and higher quotas.",
    },
    {
      question: "Can I integrate my own content?",
      answer:
        "Absolutely! You can upload your own scripts, videos, and materials to personalize your courses within the platform.",
    },
    {
      question: "What support is available?",
      answer:
        "We provide 24/7 chat support, detailed documentation, and a community forum to assist you with any questions or issues.",
    },
  ];

  return (
    <section className="py-20 rounded-2xl  bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 z-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 relative">
          Frequently Asked{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-500">
            Questions
          </span>
        </h2>

        {/* Custom Wavy Underline with Glow */}
        <div className="w-1/3 mx-auto mb-12">
          <svg
            className="w-full filter drop-shadow-[0_0_10px_rgba(106,13,173,0.5)]"
            viewBox="0 0 1440 40"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              fill="none"
              stroke="url(#faqUnderlineGradient)"
              strokeWidth="3"
              d="M0,20 Q180,10 360,20 T720,15 T1080,20 T1440,15"
            >
              <animate
                attributeName="d"
                dur="5s"
                repeatCount="indefinite"
                values="
                  M0,20 Q180,10 360,20 T720,15 T1080,20 T1440,15;
                  M0,15 Q180,25 360,15 T720,20 T1080,15 T1440,20;
                  M0,20 Q180,10 360,20 T720,15 T1080,20 T1440,15"
              />
            </path>
            <defs>
              <linearGradient id="faqUnderlineGradient" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#6a0dad" />
                <stop offset="50%" stopColor="#ff00cc" />
                <stop offset="100%" stopColor="#ff4081" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-300"
              style={{
                boxShadow: openIndex === index ? "0 8px 20px rgba(106, 13, 173, 0.3)" : "none",
              }}
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center text-lg font-semibold text-gray-800 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  background: openIndex === index
                    ? "linear-gradient(90deg, #6a0dad, #ff00cc)"
                    : "linear-gradient(90deg, #ffffff, #f3e5f5)",
                  color: openIndex === index ? "#ffffff" : "#000000",
                  transition: "all 0.3s ease",
                }}
              >
                {faq.question}
                <span>
                  {openIndex === index ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 12H4"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-gray-600 text-left bg-gradient-to-b from-white to-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-br from-purple-300 to-transparent opacity-20 blur-md"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-full bg-gradient-to-tl from-pink-300 to-transparent opacity-20 blur-md"></div>
    </section>
  );
};

export default FAQSection;