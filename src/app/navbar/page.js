// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     let lastScrollY = 0;

//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY && currentScrollY > 50) {
//         // Scrolling down
//         setIsScrolled(true);
//       } else {
//         // Scrolling up
//         setIsScrolled(false);
//       }

//       lastScrollY = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`sticky top-2 z-50 mx-auto bg-white shadow-md rounded-2xl font-sans transition-all duration-300 ${
//         isScrolled ? "w-10/12" : "w-11/12"
//       }`}
//     >
//       <div className="flex items-center justify-between px-4 py-2">
//         {/* Left: Logo */}
//         <div className="flex items-center">
//           <Link href="/" className="flex items-center space-x-2">
//             <Image
//               src="/assets/DES_LOGO4.PNG"
//               alt="Digital Elite Services Logo"
//               width={40}
//               height={40}
//               className="rounded-md"
//             />
//             <span className="text-lg sm:text-xl font-semibold tracking-tight text-[#1b1b4b]">
//               Digital Elite Services
//             </span>
//           </Link>
//         </div>

//         {/* Center Links */}
//         <div className="hidden min-[826px]:flex flex-1 justify-center space-x-12 text-[13px] text-[#1b1b4b] font-medium tracking-wide">
//           <Link
//             href="/what-we-do"
//             className="hover:text-[#4f46e5] transition-colors"
//           >
//             What We Do
//           </Link>
//           <Link
//             href="/our-approach"
//             className="hover:text-[#4f46e5] transition-colors"
//           >
//             Our Approach
//           </Link>
//           <Link
//             href="/about-us"
//             className="hover:text-[#4f46e5] transition-colors"
//           >
//             About Us
//           </Link>
//           <Link
//             href="/insights"
//             className="hover:text-[#4f46e5] transition-colors"
//           >
//             Insights
//           </Link>
//         </div>

//         {/* Right CTA */}
//         <div className="hidden min-[826px]:flex items-center gap-x-3">
//           <Link
//             href="/contact"
//             className="w-40 text-center py-2 md:py-3 rounded-xl text-[14px] md:text-[15px] font-semibold tracking-wide text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
//           >
//             Let’s talk
//           </Link>
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           className="block min-[826px]:hidden text-[#1b1b4b] focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="flex min-[826px]:hidden bg-white px-6 py-6 flex-col space-y-6 rounded-b-2xl shadow-md">
//           <Link
//             href="/what-we-do"
//             className="text-[#1b1b4b] font-medium hover:text-[#4f46e5]"
//           >
//             What We Do
//           </Link>
//           <Link
//             href="/our-approach"
//             className="text-[#1b1b4b] font-medium hover:text-[#4f46e5]"
//           >
//             Our Approach
//           </Link>
//           <Link
//             href="/about-us"
//             className="text-[#1b1b4b] font-medium hover:text-[#4f46e5]"
//           >
//             About Us
//           </Link>
//           <Link
//             href="/insights"
//             className="text-[#1b1b4b] font-medium hover:text-[#4f46e5]"
//           >
//             Insights
//           </Link>
//           <Link
//             href="/contact"
//             className="block text-center py-3 rounded-xl text-[15px] font-semibold tracking-wide text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
//           >
//             Let’s talk
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(95); // initial width in %

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Shrink width smoothly: min 75%, max 95%
      const newWidth = Math.max(75, 95 - scrollY * 0.05);
      setWidth(newWidth);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{ width: `${width}%` }}
      className="sticky top-2 z-50 mx-auto bg-white shadow-md rounded-2xl font-sans transition-all duration-300"
    >
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/DES_LOGO4.PNG"
              alt="Digital Elite Services Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-lg sm:text-xl font-semibold tracking-tight text-[#1b1b4b]">
              Digital Elite Services
            </span>
          </Link>
        </div>

        {/* Center Links */}
        <div className="hidden min-[826px]:flex flex-1 justify-center space-x-12 text-[13px] text-[#1b1b4b] font-medium tracking-wide">
          <Link
            href="/what-we-do"
            className="hover:text-[#4f46e5] transition-colors"
          >
            What We Do
          </Link>
          <Link
            href="/our-approach"
            className="hover:text-[#4f46e5] transition-colors"
          >
            Our Approach
          </Link>
          <Link
            href="/about-us"
            className="hover:text-[#4f46e5] transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/insights"
            className="hover:text-[#4f46e5] transition-colors"
          >
            Insights
          </Link>
        </div>

        {/* Right CTA */}
        <div className="hidden min-[826px]:flex items-center gap-x-3">
          <Link
            href="/contact"
            className="w-40 text-center py-2 md:py-3 rounded-xl text-[14px] md:text-[15px] font-semibold tracking-wide text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
          >
            Let’s talk
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="block min-[826px]:hidden text-[#1b1b4b] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex min-[826px]:hidden bg-white px-6 py-6 flex-col space-y-6 rounded-b-2xl shadow-md">
          <Link
            href="/what-we-do"
            className="text-[#1b1b4b] font-medium hover:text-[#4f46e5]"
          >
            What We Do
          </Link>
          <Link
            href="/our-approach"
            className="text-[#1b1b4b] font-medium hover:text-[#4f46e5]"
          >
            Our Approach
          </Link>
          <Link
            href="/about-us"
            className="text-[#1b1b4b] font-medium hover:text-[#4f46e5]"
          >
            About Us
          </Link>
          <Link
            href="/insights"
            className="text-[#1b1b4b] font-medium hover:text-[#4f46e5]"
          >
            Insights
          </Link>
          <Link
            href="/contact"
            className="block text-center py-3 rounded-xl text-[15px] font-semibold tracking-wide text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
          >
            Let’s talk
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
