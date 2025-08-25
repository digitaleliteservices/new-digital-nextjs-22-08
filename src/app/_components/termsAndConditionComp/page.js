"use client";

import Image from "next/image";
import DESLogo from "../../../../public/assets/DES_LOGO4.png"; // Adjust path if needed

const TermsAndConditionComponent = () => {
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
          Terms &amp; Conditions
        </h1>
        <p className="mt-2 text-lg text-gray-400">Digital Elite Services</p>
        {/* <p className="text-sm text-gray-500">Effective Date:</p> */}
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
          Welcome to{" "}
          <span className="font-semibold text-orange-400">
            Digital Elite Services
          </span>
          . These Terms and Conditions outline the rules and regulations for the
          use of our website and services. By accessing this website, you agree
          to accept these terms in full. If you do not agree with any of the
          stated terms, please refrain from using our site and services.
        </p>

        {/* 1 */}
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          1. Definitions
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            <span className="font-semibold">
              “Company”, “We”, “Our”, or “Us”
            </span>{" "}
            refers to Digital Elite Services.
          </li>
          <li>
            <span className="font-semibold">“User”, “Client”, or “You”</span>{" "}
            refers to any individual or entity using our website or services.
          </li>
          <li>
            <span className="font-semibold">“Services”</span> refer to digital
            marketing services offered, including SEO, social media marketing,
            web development, paid advertising, and consulting.
          </li>
        </ul>

        {/* 2 */}
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          2. Use of Website
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            You must be at least 18 years old to use our website or enter into
            agreements for our services.
          </li>
          <li>
            You agree to use our website only for lawful purposes and in a way
            that does not infringe the rights of others or restrict their use of
            the site.
          </li>
        </ul>

        {/* 3 */}
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          3. Intellectual Property Rights
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            All content, branding, graphics, text, software, and multimedia on
            this site are the property of Digital Elite Services unless
            otherwise stated.
          </li>
          <li>
            Unauthorized use, reproduction, or distribution of any material from
            our website is prohibited and may lead to legal action.
          </li>
        </ul>

        {/* 4 */}
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          4. User Obligations
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            You agree to provide accurate and current information when
            contacting or engaging our services.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account (if any) and agree to accept responsibility for all
            activities under your account.
          </li>
        </ul>

        {/* 5 */}
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          5. Service Terms
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            All service deliverables, timelines, and pricing will be detailed in
            a formal proposal or contract.
          </li>
          <li>
            Payments must be made according to the agreed schedule. Late or
            non-payment may result in suspension or termination of services.
          </li>
          <li>
            All digital marketing results depend on multiple factors; therefore,
            we do not guarantee specific rankings or performance outcomes.
          </li>
        </ul>

        {/* 6 */}
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          6. Confidentiality
        </h2>
        <p className="mb-6">
          Both parties agree to keep all non-public, confidential information
          disclosed during service engagement private, and not to share it with
          third parties without consent.
        </p>

        {/* 7 */}
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          7. Third-Party Tools and Integrations
        </h2>
        <p className="mb-6">
          We may use third-party tools and platforms (e.g., Google Ads, Facebook
          Ads, etc.) in the delivery of our services. While we strive for
          excellence, we are not responsible for the actions or policies of
          these third parties.
        </p>

        {/* 8 */}
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          8. Limitation of Liability
        </h2>
        <p className="mb-2">
          Digital Elite Services will not be held liable for:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Any indirect, incidental, or consequential damages.</li>
          <li>
            Loss of data, profits, or business arising from the use of or
            inability to use our website or services.
          </li>
          <li>
            Errors or omissions in content provided by clients or third parties.
          </li>
        </ul>

        {/* 9 */}
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          9. Termination
        </h2>
        <p className="mb-6">
          We reserve the right to suspend or terminate your access to the
          website or services at any time, without prior notice, if you breach
          any of these terms.
        </p>

        {/* 10 */}
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          10. Indemnification
        </h2>
        <p className="mb-6">
          You agree to indemnify and hold harmless Digital Elite Services and
          its team from any claims, damages, or liabilities arising from your
          use of the website or services or your breach of these terms.
        </p>

        {/* 11 */}
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          11. Modifications
        </h2>
        <p className="mb-6">
          We reserve the right to update or modify these Terms and Conditions at
          any time without prior notice. Changes will be posted on this page,
          and continued use of the site signifies acceptance of the updated
          terms.
        </p>

        {/* 12 */}
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          12. Governing Law
        </h2>
        <p className="mb-6">
          These Terms and Conditions are governed by and interpreted in
          accordance with the laws of India, and you submit to the exclusive
          jurisdiction of the courts in Bengaluru.
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

export default TermsAndConditionComponent;
