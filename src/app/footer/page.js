"use client";

import Link from "next/link";
import Image from "next/image";
import desLogo from "../../../public/assets/DES_LOGO4.png"

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* Background video */}
      <div className="absolute inset-0 -z-10">
        <video
          src="/assets/footer_video.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 flex-wrap">
         
          <Link href="/" className="flex items-center gap-3">
            <div className=" bg-gradient-to-r shadow-lg shadow-pink-500/30 animate-pulse" />
            <Image
              src={desLogo}
              alt="Digital Elite Services Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
           
            <span className="text-lg sm:text-xl font-semibold tracking-wide">
              Digital Elite Services
            </span>
          </Link>
        </div>

        {/* Address & Contact Info */}
        <div className="mb-12 text-center space-y-2 text-sm sm:text-base md:text-lg max-w-3xl">
          <p className="font-medium">
            No 35 A, Kowdi, 2nd Floor, 1st Main Road, Chiranjeevi Layout,
            Hebbal, Kempapura, Bengaluru, Karnataka - 560024
          </p>
          <p className="text-gray-300">
            Email:{" "}
            <a
              href="mailto:info@digitaleliteservices.in"
              className="underline hover:text-white hover:tracking-wide transition-all"
            >
              info@digitaleliteservices.in
            </a>
          </p>
          <p className="text-gray-300">
            Phone:{" "}
            <a
              href="tel:+916366930174"
              className="underline hover:text-white hover:tracking-wide transition-all"
            >
              +91 6366930174
            </a>
          </p>
        </div>

        {/* Two icons with hover expand */}
        {/* <div className="flex items-center justify-center gap-8 mb-12">
            <Link
              href="/privacy-policy"
              className="group relative flex items-center  justify-center bg-black/30 backdrop-blur-md rounded-2xl transition-all duration-300 w-52 h-14 overflow-hidden cursor-pointer border border-purple-500/50 shadow-lg shadow-purple-500/30 px-4 gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white flex-shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="opacity-100 justify-center   transition-all duration-500 whitespace-nowrap text-sm font-medium">
                Privacy Policy
              </span>
            </Link>

            <Link
              href="/terms-and-conditions"
              className="group relative flex m-auto  items-center justify-center bg-black/30 backdrop-blur-md rounded-2xl transition-all duration-300 w-60 h-14 overflow-hidden cursor-pointer border border-pink-500/50 shadow-lg shadow-pink-500/30 px-4 gap-2"
            >
              <span className="transition-transform duration-300 w-6 h-6 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full"
                >
                  <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
                  <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                </svg>
              </span>
              <span className="opacity-100 translate-x-0 transition-all duration-500 whitespace-nowrap text-sm font-medium">
                Terms & Conditions
              </span>
            </Link>
          </div> */}

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12 w-full">
  {/* Lock icon -> Privacy Policy */}
  <Link
    href="/privacy-policy"
    className="group relative flex items-center justify-center bg-black/30 backdrop-blur-md rounded-2xl transition-all duration-300 w-full md:w-52 h-14 overflow-hidden cursor-pointer border border-purple-500/50 shadow-lg shadow-purple-500/30 px-4 gap-2"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6 text-white flex-shrink-0"
    >
      <path
        fillRule="evenodd"
        d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
        clipRule="evenodd"
      />
    </svg>
    <span className="opacity-100 transition-all duration-500 whitespace-nowrap text-sm font-medium">
      Privacy Policy
    </span>
  </Link>

  {/* File icon -> Terms & Conditions */}
  <Link
    href="/terms-and-conditions"
    className="group relative flex items-center justify-center bg-black/30 backdrop-blur-md rounded-2xl transition-all duration-300 w-full md:w-60 h-14 overflow-hidden cursor-pointer border border-pink-500/50 shadow-lg shadow-pink-500/30 px-4 gap-2"
  >
    <span className="transition-transform duration-300 w-6 h-6 text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-full h-full"
      >
        <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
        <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
      </svg>
    </span>
    <span className="opacity-100 transition-all duration-500 whitespace-nowrap text-sm font-medium">
      Terms & Conditions
    </span>
  </Link>
</div>

        {/* Copyright */}
        <p className="text-gray-400 mt-2 text-center text-sm">
          © Digital Elite Services {new Date().getFullYear()} • All rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
