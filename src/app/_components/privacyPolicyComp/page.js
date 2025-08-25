"use client";

import Image from "next/image";
import DESLogo from "../../../../public/assets/DES_LOGO4.png"; // Adjust path if needed

const PrivacyPolicyComp = () => {
  return (
    <div className="min-h-screen text-gray-200 px-6 py-12 mt-15">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
          <Image
            src={DESLogo}
            alt="Digital Elite Services Logo"
            width={90}
            height={90}
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500">
          Privacy Policy
        </h1>
        <p className="mt-2 text-lg text-gray-400">Digital Elite Services</p>
        {/* <p className="text-sm text-gray-500">
          Effective Date: August 25th, 2025
        </p> */}
      </div>

      {/* Content Card */}
      <div className="mt-10 bg-[#1a1525] rounded-2xl shadow-lg p-8 max-w-4xl mx-auto leading-relaxed">
        <p className="mb-6">
          Website:{" "}
          <a
            href="https://www.digitaleliteservices.in"
            className="text-blue-400 hover:underline"
          >
            www.digitaleliteservices.in
          </a>
        </p>

        <p className="mb-6">
          At{" "}
          <span className="font-semibold text-orange-400">
            Digital Elite Services
          </span>
          , your privacy is one of our top priorities. This Privacy Policy
          outlines the types of information we collect, how we use it, and the
          measures we take to safeguard your data when you visit or interact
          with our website.
        </p>
        <p className="mb-6">
          By accessing or using our website, you agree to the collection and use
          of information in accordance with this Privacy Policy.
        </p>

        {/* Sections */}
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <span className="font-semibold">Direct Information:</span> Name,
            email, phone, company name, etc.
          </li>
          <li>
            <span className="font-semibold">Account Information:</span>{" "}
            Registration details like business address, contact info.
          </li>
          <li>
            <span className="font-semibold">Communication Data:</span> Emails,
            chat, inquiries.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Deliver and operate our website/services</li>
          <li>Customize user experience</li>
          <li>Analyze site usage</li>
          <li>Develop new features</li>
          <li>Customer support, marketing, and communication</li>
          <li>Send relevant emails and updates</li>
          <li>Fraud prevention and security</li>
        </ul>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          3. Log Files
        </h2>
        <p className="mb-6">
          Like most digital platforms, we collect IP address, browser type, ISP,
          date/time stamps, referring/exit pages, and clicks for analytics only.
        </p>
        <p>
          This data is used strictly for analytical and site administration
          purposes. It is not linked to any personally identifiable information.
        </p>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          4. Cookies and Tracking
        </h2>
        <p className="mb-6">
          We use cookies and web beacons to enhance your browsing experience.
          You can disable cookies in your browser settings, but some features
          may be affected.
        </p>
        <p>
          These small files store user preferences and activity data to help us
          personalize content based on your browser and behavior on our site.
        </p>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          5. Advertising Partners
        </h2>
        <p className="mb-6">
          We may collaborate with third-party advertising partners who may use
          cookies, JavaScript, or web beacons in their ads displayed on our
          website. These tools help measure ad effectiveness and personalize ad
          content.
        </p>
        <p>
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500">
            Please note:
          </span>{" "}
          Digital Elite Services does not have control over the data collected
          by these third parties. We recommend reviewing their respective
          privacy policies for further details.
        </p>
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          6. Third-Party Privacy Policies
        </h2>
        <p className="mb-6">
          This Privacy Policy applies only to our website. For third-party
          services, consult their respective privacy policies.
        </p>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          7. Your Privacy Rights
        </h2>
        <p className="mb-3 font-semibold">
          Under the CCPA (California Consumer Privacy Act), California residents
          have the right to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Request disclosure of data collected about them</li>
          <li>Request deletion of their personal data</li>
          <li>Opt out of the sale of their personal data</li>
        </ul>
        <p className="mb-3 font-semibold">
          Under the GDPR (General Data Protection Regulation), users in the EU
          are entitled to:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Access their personal data</li>
          <li>Request rectification of inaccurate or incomplete data</li>
          <li>Request restriction or object to the processing of their data</li>
          <li>Request data portability</li>
        </ul>
        <p className="mb-3">
          To exercise any of these rights, please contact us. We will respond
          within one month as required by law.
        </p>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          8. Children’s Privacy
        </h2>
        <p className="mb-6">
          We are committed to protecting children’s privacy. Our services are
          not intended for users under the age of 13, and we do not knowingly
          collect personally identifiable information from children.
        </p>
        <p className="mb-6">
          If you believe a child has provided us with personal data, please
          contact us immediately, and we will promptly remove the information
          from our systems.
        </p>

        {/* Contact */}
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          Contact Us
        </h2>
        <p className="mb-2">
          📧 Email:{" "}
          <a
            href="mailto:admin@digitaleliteservices.in"
            className="text-blue-400 hover:underline"
          >
            admin@digitaleliteservices.in
          </a>
        </p>
        <p className="mb-2">
          📍 Address: 35A, Kowdi, 2nd floor, 1st Main Rd, Chiranjeevi Layout,
          Hebbal Kempapura, Bangalore, India, 560024
        </p>
        <p className="mb-2">
          📞 Phone:{" "}
          <a href="tel:+916366930174" className="text-blue-400 hover:underline">
            6366930174
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyComp;
