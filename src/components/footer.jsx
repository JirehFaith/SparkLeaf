import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16 py-10">

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img
              src="./images/nobgLogo.png"
              alt="logo"
              className="h-8 w-8"
            />
            <h3 className="font-semibold text-lg text-[#1F1C17]">
              SparkLeaf
            </h3>
          </div>

          <p className="text-xs text-gray-600 mb-3">
            Professional cleaning services for homes and workspaces.
          </p>

          <div className="flex gap-2">
            {[FaInstagram, FaFacebook, MdEmail, FaTwitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-1.5 rounded-full bg-primary hover:bg-secondary transition"
              >
                <Icon className="text-white text-sm" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-medium mb-2 text-sm text-gray-800">Links</h4>
          <ul className="space-y-1 text-xs text-gray-600">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <li key={item} className="hover:text-primary cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-medium mb-2 text-sm text-gray-800">Support</h4>
          <ul className="space-y-1 text-xs text-gray-600">
            {["Help", "FAQs", "Feedback"].map((item) => (
              <li key={item} className="hover:text-primary cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-medium mb-2 text-sm text-gray-800">Contact</h4>
          <ul className="space-y-1 text-xs text-gray-600">
            <li className="flex items-center gap-2">
              <MdPhone className="text-primary text-sm" />
              +250 794381611
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-primary text-sm" />
              sparkleaf@mail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 border-t pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} SparkLeaf
      </div>
    </footer>
  );
}