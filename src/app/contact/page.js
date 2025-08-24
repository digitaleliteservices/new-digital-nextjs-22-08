"use client";

import OurContact from "../_components/aboutUsComp/ourContact/page";
import Footer from "../footer/page";

const { default: Navbar } = require("../navbar/page");

const Contact = () => {
  return (
    <div>
      <Navbar />
      <OurContact />
      <Footer />
    </div>
  );
};

export default Contact;
