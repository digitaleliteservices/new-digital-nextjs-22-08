"use client";

const {
  default: TermsAndConditionComponent,
} = require("../_components/termsAndConditionComp/page");
const { default: Footer } = require("../footer/page");
const { default: Navbar } = require("../navbar/page");

const TermsConditions = () => {
  return (
    <div>
      <Navbar />
      <TermsAndConditionComponent />
      <Footer />
    </div>
  );
};

export default TermsConditions;
