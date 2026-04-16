import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

export default function Footer() {
  return (
     <footer className="bg-primary text-gray-300 px-6 md:px-16 py-12">
      {/* TOP GRID */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 border-b border-gray-700 pb-10">

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Home Cleaning</li>
            <li>Office Cleaning</li>
            <li>Deep Cleaning</li>
            <li>Laundry Services</li>
            <li>Move-in/Move-out Cleaning</li>
            <li>Sanitization</li>
          </ul>
        </div>

        {/* Logistics */}
        <div>
          <h4 className="text-white font-semibold mb-4">Logistics</h4>
          <ul className="space-y-2 text-sm">
            <li>Parcel Delivery</li>
            <li>Same-day Delivery</li>
            <li>Bulk Transport</li>
            <li>Warehouse Support</li>
            <li>Fleet Services</li>
            <li>Tracking System</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Our Team</li>
            <li>Contact Us</li>
            <li>Sustainability</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>Blog</li>
            <li>FAQs</li>
            <li>Help Center</li>
            <li>Case Studies</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:border-l md:border-gray-700 md:pl-8">
          <h4 className="text-white font-semibold mb-4">
            Get Sparkleaf Updates
          </h4>

          <input
            type="email"
            placeholder="Please enter your email here"
            className="w-full p-3 rounded-md bg-gray-200 text-black text-sm mb-4 outline-none"
          />

          <div className="flex items-start gap-2 text-sm mb-4">
            <input type="checkbox" className="mt-1" />
            <p>
              I agree to the terms of service and privacy policy.
            </p>
          </div>

          <button className="w-full bg-gray-400 text-black py-3 rounded-md font-medium hover:opacity-90">
            Join Now
          </button>
        </div>
      </div>

      {/* BOTTOM LINKS */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-400 gap-4">

        <div className="flex flex-wrap gap-4">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Security</span>
          <span>GDPR</span>
          <span>Cookie Settings</span>
        </div>

        <p className="text-center">
          © 2026 Sparkleaf Services Ltd. All Rights Reserved.
        </p>

        {/* Social + Language */}
        <div className="flex items-center gap-6">
          <FaLinkedinIn className="cursor-pointer hover:text-white" />
          <FaFacebookF className="cursor-pointer hover:text-white" />
          <FaYoutube className="cursor-pointer hover:text-white" />

          <div className="flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded-md cursor-pointer">
            <MdLanguage />
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}