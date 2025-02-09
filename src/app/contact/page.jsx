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

  const [loading, setLoading] = useState(false); // Loader state
  const [success, setSuccess] = useState(false); // Success state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await sendContactForm(formData);
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      setSuccess(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
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
                disabled={loading}
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
                placeholder="Enter subject"
                className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
                required
                disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
              />
            </div>

            {/* Submit Button with Loader */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl font-medium shadow-md hover:bg-green-700 hover:scale-105 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Success Message */}
            {success && (
              <p className="text-green-600 text-center font-medium mt-4">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
