"use client";
import { useState } from "react";

const EmailBanner = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
      e.preventDefault();
      console.log("hellloohfgjg")
      setMessage(""); // Clear previous messages

      if (!email) {
          setMessage("Please enter your email.");
          return;
      }

      try {
          const res = await fetch("/api/subscribe", {
              method: "POST",
              body: JSON.stringify({ email }),
              headers: {
                  "Content-Type": "application/json",
              },
          });

          const data = await res.json();
          if (res.ok) {
              setMessage("Thank you for subscribing! Check your inbox.");
              setEmail(""); // Clear input after success
          } else {
              setMessage(data.message || "Subscription failed. Try again.");
          }
      } catch (error) {
          setMessage("Something went wrong. Please try again.");
      }
  };

  return (
    <div className="container bg-gradient-to-r from-green-500 to-green-700 text-white py-12 px-6 rounded-2xl mt-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-xl md:text-3xl font-bold">
        Stay Updated with Our Latest News!
        </h2>
        <p className="text-lg text-gray-200 mt-3">
        Subscribe to our newsletter for important updates and insights.
        </p>

        {/* Input & Button */}
        <div className="mt-6">
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-4" >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-80 px-4 py-3 rounded-full text-gray-900 focus:ring-2 focus:ring-green-300 outline-none shadow-md"
          />
          <button className="bg-white text-green-600 px-6 py-3 rounded-full font-medium shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-300">
            Subscribe
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailBanner;
