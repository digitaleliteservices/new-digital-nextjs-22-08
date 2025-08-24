"use client";

import Spiral from "@/spiral/page";
import Footer from "../footer/page";
import Hero from "../hero/page";
import Navbar from "../navbar/page";
import Services from "../services/page";
import WhoWeWorkWith from "../whowework/page";
import WhyChooseUs from "../whychooseus/page";
import PageTransitionWrapper from "../_components/pageTransitionWrapper/pageTransitionWrapper.jsx";

export default function Home() {
  return (
    <div>
      <PageTransitionWrapper />
      <Navbar />
      <Hero />
      <Services />
      <WhoWeWorkWith />
      <Spiral />
      <WhyChooseUs />
      <Footer />
      <PageTransitionWrapper />
    </div>
  );
}
