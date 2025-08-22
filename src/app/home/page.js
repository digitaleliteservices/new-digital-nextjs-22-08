"use client";

import Hero from "../hero/page";
import Navbar from "../navbar/page";
import Services from "../services/page";
import WhoWeWorkWith from "../whowework/page";
import WhyChooseUs from "../whychooseus/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <WhoWeWorkWith />
      <WhyChooseUs />
    </div>
  );
}
