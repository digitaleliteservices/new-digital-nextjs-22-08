const {
  default: PrivacyPolicyComp,
} = require("../_components/privacyPolicyComp/page");
const { default: Footer } = require("../footer/page");
const { default: Navbar } = require("../navbar/page");

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <PrivacyPolicyComp />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
