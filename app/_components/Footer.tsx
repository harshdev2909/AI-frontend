"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 flex  md:flex-row justify-center items-start">
        {/* Brand Name */}
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-9xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 cursor-pointer hover:scale-105 transition-transform duration-300">
            ApurvA.I</h1>
        </div>

        
        {/* Subscribe */}
        
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-sm text-gray-400">
        <p>© 2025 - Apurv</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;