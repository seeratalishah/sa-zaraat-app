"use client";
import SectionHeading from "@/components/section-heading";
import { sendContactForm } from "@/lib/contact.utils";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here (API call, email sending, etc.)

    try {
      await sendContactForm(formData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <section className="mt-24">
      <div className="container">
        <SectionHeading title="Get in Touch" />
        <p className="text-[18px] font-normal leading-[24px] text-[#343a40] my-6 text-center">
          Have any questions? Fill out the form below, and we'll get back to you
          soon.
        </p>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border-t border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
                required
              />
            </div>

            {/* Subject Field */}
            <div>
              <label className="text-gray-700 font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows="5"
                className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl font-medium shadow-md hover:bg-green-700 hover:scale-105 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
