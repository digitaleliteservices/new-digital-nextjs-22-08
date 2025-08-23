"use client";

import Image from "next/image";
import bannerImage from "../../../public/assets/bannerimage.png";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-10">
        {/* Top Small Text */}
        <h3 className="text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 bg-clip-text text-transparent mb-3 sm:mb-4">
          Your All In One Digital Partner
        </h3>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
          Innovation <br className="sm:hidden" /> Design and Growth
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-lg sm:max-w-xl md:max-w-2xl">
          Web Development • Graphic Design • Digital Marketing
        </p>
      </div>
    </div>
  );
};

export default Hero;
