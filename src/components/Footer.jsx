"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[80%] mx-auto">
            {/* About Section */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4 text-green-600">
                Our Moto
              </h3>
              <p className="text-sm">
                SAZaraat & Fisheries – Nurturing Growth, Light Upon Light in
                Agriculture and Aquaculture.
              </p>
            </div>

            {/* Menu Section */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4 text-green-600">
                Menu
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm hover:text-green-600 cursor-pointer"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm hover:text-green-600 cursor-pointer"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/agriculture"
                    className="text-sm hover:text-green-600 cursor-pointer"
                  >
                    Agriculture
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fisheries"
                    className="text-sm hover:text-green-600 cursor-pointer"
                  >
                    Fisheries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm hover:text-green-600 cursor-pointer"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4 text-green-600">
                Contact
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="tel:+14168246950"
                    onClick={() => (window.location.href = "tel:+14168246950")}
                    className="text-sm hover:text-green-600 cursor-pointer"
                  >
                    (416) 824-6950
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+16478786640"
                    onClick={() =>
                      (window.location.href = "tel:+1416478786640")
                    }
                    className="text-sm hover:text-green-600 cursor-pointer"
                  >
                    (647) 878-6640
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@sazaraat.com"
                    onClick={() =>
                      (window.location.href =
                        "mailto:info@sazaraat.com?subject=")
                    }
                    className="text-sm hover:text-green-600 cursor-pointer"
                  >
                    Info@sazaraat.com
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-green-600 cursor-pointer"
                  >
                    Hashoo terrace, kehkashan, block 5, clifton, Karachi
                    Pakistan
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} SAZARAAT & FISHERIES. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
