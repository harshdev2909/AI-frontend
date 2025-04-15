"use client";

import Link from "next/link";
import { GradientTextAnimation } from "./textAnimations/GradientTextAnimation";
import PulsatingButton from "@/components/ui/pulsating-button";
import WordPullUp from "@/components/ui/word-pull-up";
import { useUser } from "@clerk/nextjs";
import ShinyButton from "@/components/ui/shiny-button";

const Hero = () => {
  const { user } = useUser();

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto h-full max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <GradientTextAnimation title="Introducing AI Course Generator" />
          <WordPullUp
            className="text-4xl font-bold tracking-[-0.02em] text-black md:text-7xl md:leading-[5rem] dark:text-white"
            words="AI Course Generator"
          />
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-500 underline-curve">
            ApurvA.I
          </h1>
          <p className="mt-10 sm:text-xl/relaxed">
            Revolutionize your course creation with our AI-powered app.
            Delivering engaging and high-quality courses in minutes.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 z-10">
            {!user ? (
              <Link href="/sign-in">
                <PulsatingButton
                  text="Get Started"
                  pulseColor="150, 0, 255"
                  backgroundColor="#9945FF"
                  textColor="#ffffff"
                  animationDuration="1.5s"
                  buttonWidth="200px"
                  buttonHeight="50px"
                />
              </Link>
            ) : (
              <Link href="/dashboard">
                <ShinyButton text="Go to Dashboard" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Wave Component with Increased Height and Shrink Level */}
      <div className="w-full absolute bottom-0">
        <svg
          className="block w-full h-[200px]" // Increased height from 150px to 200px
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          {/* First Wave Layer - Background */}
          <path
            fill="url(#gradient1)"
            fillOpacity="0.7"
            d="M0,160L40,150C80,140,160,130,240,135C320,140,400,150,480,145C560,140,640,120,720,110C800,100,880,100,960,105C1040,110,1120,120,1200,125C1280,130,1360,130,1400,135L1440,140L1440,200L0,200Z"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0,160L40,150C80,140,160,130,240,135C320,140,400,150,480,145C560,140,640,120,720,110C800,100,880,100,960,105C1040,110,1120,120,1200,125C1280,130,1360,130,1400,135L1440,140L1440,200L0,200Z;
                M0,150L40,140C80,130,160,140,240,145C320,150,400,160,480,155C560,150,640,130,720,120C800,110,880,110,960,115C1040,120,1120,130,1200,135C1280,140,1360,140,1400,145L1440,150L1440,200L0,200Z;
                M0,160L40,150C80,140,160,130,240,135C320,140,400,150,480,145C560,140,640,120,720,110C800,100,880,100,960,105C1040,110,1120,120,1200,125C1280,130,1360,130,1400,135L1440,140L1440,200L0,200Z"
            />
          </path>

          {/* Second Wave Layer - Foreground */}
          <path
            fill="url(#gradient2)"
            fillOpacity="0.9"
            d="M0,140L36,130C72,120,144,110,216,115C288,120,360,130,432,125C504,120,576,100,648,90C720,80,792,80,864,85C936,90,1008,100,1080,105C1152,110,1224,110,1296,115C1368,120,1404,130,1422,135L1440,140L1440,200L0,200Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,140L36,130C72,120,144,110,216,115C288,120,360,130,432,125C504,120,576,100,648,90C720,80,792,80,864,85C936,90,1008,100,1080,105C1152,110,1224,110,1296,115C1368,120,1404,130,1422,135L1440,140L1440,200L0,200Z;
                M0,130L36,120C72,110,144,120,216,125C288,130,360,140,432,135C504,130,576,110,648,100C720,90,792,90,864,95C936,100,1008,110,1080,115C1152,120,1224,120,1296,125C1368,130,1404,140,1422,145L1440,150L1440,200L0,200Z;
                M0,140L36,130C72,120,144,110,216,115C288,120,360,130,432,125C504,120,576,100,648,90C720,80,792,80,864,85C936,90,1008,100,1080,105C1152,110,1224,110,1296,115C1368,120,1404,130,1422,135L1440,140L1440,200L0,200Z"
            />
          </path>

          <defs>
            <linearGradient id="gradient1" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#6a0dad" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ff5ef3" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#9945FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ff00cc" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Hero;