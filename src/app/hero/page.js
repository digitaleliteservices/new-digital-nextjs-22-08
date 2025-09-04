"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden text-slate-900">
      {/* Content */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col items-center justify-center text-center">
        {/* Small Top Text */}
        <motion.h3
          className="text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r from-sky-500 via-indigo-400 to-amber-500 bg-clip-text text-transparent mb-3 sm:mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your All In One Digital Partner
        </motion.h3>

        {/* Main Heading */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-snug sm:leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-block">Innovation</span>{" "}
          <motion.span
            className="hidden sm:inline bg-gradient-to-r from-sky-500 via-indigo-400 to-amber-500 bg-clip-text text-transparent"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Design and Growth
          </motion.span>
          <span className="sm:hidden block">Design and Growth</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-4 text-sm sm:text-base md:text-lg max-w-lg sm:max-w-xl md:max-w-2xl bg-gradient-to-r from-sky-500 via-indigo-400 to-amber-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Web Development • Graphic Design • Digital Marketing
        </motion.p>

        {/* Supporting Text */}
        <motion.p
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          We transform ideas into digital success with innovative solutions,
          seamless design, and measurable results that help your business grow
          every single day.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="/contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 via-indigo-400 to-amber-500 text-white font-semibold shadow-lg hover:shadow-xl transition"
          >
            Get Started
          </a>
          <a
            href="/our-services"
            className="px-6 py-3 rounded-full border border-sky-400 text-sky-600 font-semibold hover:bg-sky-50 transition"
          >
            View Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
