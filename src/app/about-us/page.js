"use client";

import AboutUsComp from "../_components/aboutUsComp/page";
import Footer from "../footer/page";
import Navbar from "../navbar/page";
import PageTransitionWrapper from "../_components/pageTransitionWrapper/pageTransitionWrapper.jsx";

const AboutUs = () => {
  return (
    <div>
      <PageTransitionWrapper />
      <Navbar />
      <AboutUsComp />
      <Footer />
      <PageTransitionWrapper />
    </div>
  );
};

export default AboutUs;
