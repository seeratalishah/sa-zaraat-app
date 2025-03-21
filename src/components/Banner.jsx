"use client";
import Link from "next/link";

const EmailBanner = () => {
  return (
    <div className="container bg-gradient-to-r from-green-500 to-green-700 text-white py-12 px-6 rounded-2xl mt-24 text-center">
      <h2 className="text-xl md:text-3xl font-bold">Get in Touch with Us!</h2>
      <p className="text-lg text-gray-200 mt-3">
        We'd love to hear from you. Reach out for any inquiries or assistance.
      </p>

      {/* Contact Button */}
      <div className="mt-6">
        <Link href="/contact">
          <button className="bg-white text-green-600 px-6 py-3 rounded-full font-medium shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-300">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmailBanner;
