"use client";

import SectionHeading from "@/components/SectionHeading";

const GoogleAddressSection = () => {
  return (
    <section className="bg-green-100 mt-24">
      <div className="container mx-auto px-6 py-16">
        <SectionHeading title="Visit Our Location" />

        {/* Address & Google Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10">
          {/* Address Info */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl text-gray-800">Our Address</h3>
            <p className="text-gray-600 mt-2">
              Hashoo terrace, kehkashan, block 5, clifton, Karachi Pakistan
            </p>
            <p className="text-gray-600 mt-1 hover:text-green-600 cursor-pointer">
              <span className="text-gray-700 font-semibold">Phone:</span>{" "}
              <span
                className="text-sm"
                onClick={() => (window.location.href = "tel:+14168246950")}
              >
                (416) 824-6950
              </span>
            </p>
            <p
              className="text-gray-600 mt-1 ml-[60px] text-sm hover:text-green-600 cursor-pointer"
              onClick={() => (window.location.href = "tel:+1416478786640")}
            >
              (647) 878-6640
            </p>
            <p className="text-gray-600 mt-1 hover:text-green-600 cursor-pointer">
              <span className="text-gray-700 font-semibold">Email:</span>{" "}
              <span
                className="text-sm"
                onClick={() =>
                  (window.location.href = "mailto:info@sazaraat.com?subject=")
                }
              >
                Info@sazaraat.com
              </span>
            </p>
          </div>

          {/* Google Map Embed */}
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.0822120627117!2d67.0278361751508!3d24.8268619779513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33db8853720b9%3A0xb057544e82e27a85!2sHashoo%20Terrace!5e0!3m2!1sen!2s!4v1742471089722!5m2!1sen!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleAddressSection;
