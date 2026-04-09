import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative bg-gray-100 mt-32 pt-28">
      
      {/* Newsletter */}
      <div className="absolute top-0 left-0 w-full flex justify-center -translate-y-1/2 z-20 px-4">
        <div className="w-full max-w-6xl bg-primary text-white/90 rounded-2xl shadow-xl p-6 md:p-10">
          
          <div className="max-w-2xl">
            <h2 className="text-lg md:text-2xl font-semibold mb-2">
              Subscribe to our newsletter to get updates to our latest collections
            </h2>

            <p className="mb-4 text-sm opacity-90">
              Get 20% off on your first order just by subscribing to our newsletter
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-white outline-none border-b border-white/80 bg-transparent focus:border-white transition"
              />

              <button className="bg-white text-primary px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition w-full sm:w-auto">
                Subscribe
              </button>
            </div>

            <p className="text-xs mt-6 sm:mt-8 opacity-80">
              You will be able to unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        
        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-1">
          
          <div className="flex items-center gap-3 mb-4">
            <div className="p-1 ">
              <img
                src="./images/nobgLogo.png"
                alt="logo"
                className="h-12 w-12 object-cover  "
              />
            </div>

            <h3 className="font-bold text-lg tracking-wide text-[#1F1C17]">
              SparkLeaf
            </h3>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-5 max-w-sm">
            Professional cleaning services designed to keep your home or workspace fresh, spotless, and consistently well maintained.
          </p>

          <div className="flex gap-3 text-lg flex-wrap">
            <a href="#" className="p-2 rounded-full bg-primary hover:bg-secondary  transition">
              <FaInstagram className="text-white" />
            </a>
            <a href="#" className="p-2 rounded-full bg-primary hover:bg-secondary  transition">
              <FaFacebook className="text-white" />
            </a>
            <a href="#" className="p-2 rounded-full bg-primary hover:bg-secondary  transition">
              <MdEmail className="text-white" />
            </a>
            <a href="#" className="p-2 rounded-full bg-primary hover:bg-secondary  transition">
              <FaTwitter className="text-white" />
            </a>
          </div>
        </div>

        {/* Columns */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-800">Company</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-primary cursor-pointer transition">About Us</li>
            <li className="hover:text-primary cursor-pointer transition">Services</li>
            <li className="hover:text-primary cursor-pointer transition">Community</li>
            <li className="hover:text-primary cursor-pointer transition">Testimonial</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-gray-800">Support</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-primary cursor-pointer transition">Help Center</li>
            <li className="hover:text-primary cursor-pointer transition">Tweet Us</li>
            <li className="hover:text-primary cursor-pointer transition">Webinars</li>
            <li className="hover:text-primary cursor-pointer transition">Feedback</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-primary">Links</h4>
          <ul className="space-y-2 text-sm text-gray-800">
            <li className="hover:text-primary cursor-pointer transition">Home</li>
            <li className="hover:text-primary cursor-pointer transition">Services</li>
            <li className="hover:text-primary cursor-pointer transition">How it works</li>
            <li className="hover:text-primary cursor-pointer transition">Blog</li>
          </ul>
        </div>

        <div>
  <h4 className="font-semibold mb-4 text-gray-800">Contact Us</h4>

  {/* PHONE */}
  <div className="flex items-center  text-sm text-gray-600 p-3 rounded-lg ">
    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
      <MdPhone className="text-primary w-5 h-5" />
    </div>

    <span className="text-sm font-medium text-gray-800 leading-tight">
      +250 794381611
    </span>
  </div>

  {/* EMAIL */}
  <div className="flex items-center gap-3 text-sm text-gray-600 p-3 rounded-lg">
    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
      <MdEmail className="text-primary w-5 h-5" />
    </div>

    <span className="text-sm font-medium text-gray-800 break-words leading-tight">
      sparkLeaf@mail.com
    </span>
  </div>
</div>
      </div>

      {/* Bottom */}
      <div className=" p-6 border-t border-primary/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center text-sm text-gray-600 gap-4">
          
          <p className="text-black text-center md:text-left">
            © Copyright by SparkLeaf. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-black">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Legal</a>
            <a href="#">Site Map</a>
          </div>

        </div>
      </div>
    </footer>
  );
}