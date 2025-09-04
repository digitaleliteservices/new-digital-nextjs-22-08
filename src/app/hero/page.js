"use client";

import Image from "next/image";
import bannerImage from "../../../public/assets/bannerimage.png";
import { useState, useRef, useEffect } from "react";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Always set a fallback so loading stops even if there’s no video
    const t = setTimeout(() => setIsLoading(false), 3000);

    if (video) {
      const handleCanPlay = () => setIsLoading(false);
      video.addEventListener("canplay", handleCanPlay);

      return () => {
        video.removeEventListener("canplay", handleCanPlay);
        clearTimeout(t);
      };
    } else {
      // If no video is rendered, hide loader immediately
      setIsLoading(false);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden text-slate-900">
      {/* Spiral-style soft background noise / vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        // style={{
        //   background:
        //     "radial-gradient(80rem 40rem at 50% -10%, rgba(59,130,246,0.08), transparent 60%), radial-gradient(60rem 30rem at 0% 110%, rgba(6,182,212,0.08), transparent 60%), radial-gradient(60rem 30rem at 100% 110%, rgba(245,158,11,0.08), transparent 60%)",
        // }}
      />

      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-500 z-20 flex items-center justify-center">
          <div className="animate-pulse text-white">Loading...</div>
        </div>
      )}

      {/* Optional Background Video (uncomment if you want to use it) */}
      {/*
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/hero-video25new.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      */}

      {/* Content */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col items-center justify-center text-center">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r from-sky-500 via-indigo-400 to-amber-500 bg-clip-text text-transparent mb-3 sm:mb-4">
          Your All In One Digital Partner
        </h3>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-snug sm:leading-tight">
          Innovation <span className="hidden sm:inline">Design and Growth</span>
          <span className="sm:hidden block">Design and Growth</span>
        </h1>

        {/* <h2 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-sky-500 via-indigo-400 to-amber-500 bg-clip-text text-transparent">
          Exponential daily value
        </h2> */}

        <p className="mt-4 text-sm sm:text-base md:text-lg max-w-lg sm:max-w-xl md:max-w-2xl bg-gradient-to-r from-sky-500 via-indigo-400 to-amber-500 bg-clip-text text-transparent">
          Web Development • Graphic Design • Digital Marketing
        </p>

        {/* <div className="mt-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white text-slate-700/80 shadow-sm ring-1 ring-black/5 px-3 py-1.5 text-xs sm:text-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-400" />
            Dependable Precision
          </span>
        </div> */}
      </div>

      {/* <div className="relative z-10 pb-6" /> */}
    </section>
  );
};

export default Hero;
