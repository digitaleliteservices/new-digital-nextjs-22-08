"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const words = ["Innovation", "Design", "and", "Growth "];

const Hero = () => {
  // pre-build some random particle positions once (stable across renders)
  const particles = useMemo(
    () =>
      Array.from({ length: 26 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100, // vw
        size: 4 + Math.random() * 6, // px
        duration: 8 + Math.random() * 8, // s
        delay: Math.random() * 6, // s
        opacity: 0.15 + Math.random() * 0.2,
      })),
    []
  );

  // framer variants for staggered heading
  const container = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, duration: 0.6, ease: "easeOut" },
    },
  };
  const child = {
    hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden text-slate-900 bg-white">
      {/* Background: floating gradient blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -left-24 w-[34rem] h-[34rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(59,130,246,.35), transparent 60%)",
        }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -right-24 w-[38rem] h-[38rem] rounded-full blur-3xl"
        // style={{
        //   background:
        //     "radial-gradient(closest-side, rgba(6,182,212,.35), transparent 60%)",
        // }}
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-1/3 left-1/4 w-[26rem] h-[26rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(245,158,11,.35), transparent 60%)",
        }}
        animate={{ x: [0, 20, 0], y: [0, 25, 0] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />

      {/* Subtle particle field */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute top-full rounded-full bg-gradient-to-br from-sky-400/50 to-indigo-400/40"
            style={{
              left: `${p.left}vw`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
            animate={{ y: ["0vh", "-120vh"], opacity: [p.opacity, 0.05] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center text-center">
        {/* Kicker */}
        {/* <motion.h3
          className="text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r from-sky-500 via-indigo-400 to-amber-500 bg-clip-text text-transparent mb-4 sm:mb-5"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Your All In One Digital Partner
        </motion.h3> */}

        {/* Headline with stagger + animated underline sweep */}
        <motion.h1
          className="relative font-extrabold tracking-tight leading-tight sm:leading-tight text-4xl sm:text-5xl md:text-6xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* FLEX WRAPPER ADDS RESPONSIVE GAPS */}
          <span className="flex flex-wrap items-baseline justify-center gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-1 px-2">
            {words.map((w, i) => (
              <motion.span key={i} variants={child} className="inline-block">
                {i === 0 ? (
                  <span>{w}</span>
                ) : (
                  <span className="bg-gradient-to-r from-sky-500 via-indigo-400 to-amber-500 bg-clip-text text-transparent">
                    {w}
                  </span>
                )}
              </motion.span>
            ))}
          </span>

          {/* underline sweep */}
          <motion.span
            className="absolute left-1/2 -bottom-2 h-[3px] md:h-1 w-0 rounded-full bg-gradient-to-r from-sky-500 via-indigo-400 to-amber-500"
            initial={{ width: 0, x: "-50%" }}
            animate={{ width: "72%", x: "-50%" }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          />
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl md:max-w-2xl bg-gradient-to-r from-sky-500 via-indigo-400 to-amber-500 bg-clip-text text-transparent px-4"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Web Development • Graphic Design • Digital Marketing
        </motion.p>

        {/* Supporting copy */}
        <motion.p
          className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-600 max-w-md sm:max-w-xl md:max-w-2xl px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.8 }}
        >
          We turn ideas into real outcomes. From strategy and brand to code
          and campaigns, our team ships experiences that look sharp, perform
          brilliantly, and move the needle.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="/contact"
            className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-sky-500 via-indigo-400 to-amber-500 text-white font-semibold shadow-lg hover:shadow-xl transition text-sm sm:text-base"
          >
            Get Started
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="/our-services"
            className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-sky-400 text-sky-600 font-semibold hover:bg-sky-50 transition text-sm sm:text-base"
          >
            View Services
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
