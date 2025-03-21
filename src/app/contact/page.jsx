"use client";
import SectionHeading from "@/layout/SectionHeading";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const ContactPage = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Ensure the form is valid before sending the email
    if (!form.current.checkValidity()) {
      form.current.reportValidity();
      setIsLoading(false); // Reset loading state if validation fails
      return;
    }

    emailjs
      .sendForm(
        "service_x8jelyn",
        "template_n2one4e",
        form.current,
        "ursEyN8TxWLd7bmTm"
      )
      .then(
        () => {
          toast.success("Submitted Successfully! ✅");
          form.current.reset(); // Clear form after successful submission
          setIsLoading(false);
        },
        (error) => {
          toast.error("Submission Failed ❌");
          console.error("FAILED...", error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <section className="mt-24">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container">
        <SectionHeading title="Get in Touch" />
        <p className="text-[18px] font-normal leading-[24px] text-[#343a40] my-6 text-center">
          Have any questions? Fill out the form below, and we'll get back to you
          soon.
        </p>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border-t border-slate-100">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
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
                placeholder="Enter subject"
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
                placeholder="Type your message here..."
                rows="5"
                className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
                required
              />
            </div>

            {/* Submit Button with Loader */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl font-medium shadow-md hover:bg-green-700 hover:scale-105 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
