import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [language, setLanguage] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Contacts", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">

        {/* Logo */}
        <img src="./images/logo1.png" alt="logo" className="h-14 w-14 object-contain" />

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-secondary">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-primary transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right controls */}
        <div className="hidden lg:flex items-center gap-3">
          <select className="border border-secondary text-primary rounded px-3 py-2 text-sm focus:outline-none">
            <option>Kigali</option>
            <option>Paris</option>
            <option>Dubai</option>
            <option>London</option>
            <option>Toronto</option>
            <option>New York</option>
          </select>

          <div className="flex items-center text-primary border border-secondary rounded overflow-hidden text-sm">
            <button
              onClick={() => setLanguage("EN")}
              className={`px-3 py-2 transition ${
                language === "EN" ? "bg-secondary text-white" : "hover:bg-secondary hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("FR")}
              className={`px-3 py-2 transition ${
                language === "FR" ? "bg-secondary text-white" : "hover:bg-secondary hover:text-white"
              }`}
            >
              FR
            </button>
          </div>

          <a
            href="/login"
            className="bg-secondary hover:opacity-90 text-white px-5 py-2 rounded-lg font-medium transition whitespace-nowrap text-sm"
          >
            Book now
          </a>
        </div>

        {/* Mobile: hamburger */}
        <button
          className="lg:hidden text-primary p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pb-5 pt-3 shadow-md">
          <ul className="flex flex-col gap-1 text-sm font-medium text-secondary">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-3 py-2.5 hover:bg-sky-50 hover:text-primary transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4">
            <select className="border border-secondary text-primary rounded px-3 py-2 text-sm focus:outline-none">
              <option>Kigali</option>
              <option>Paris</option>
              <option>Dubai</option>
              <option>London</option>
              <option>Toronto</option>
              <option>New York</option>
            </select>

            <div className="flex items-center text-primary border border-secondary rounded overflow-hidden text-sm">
              <button
                onClick={() => setLanguage("EN")}
                className={`px-3 py-2 transition ${
                  language === "EN" ? "bg-secondary text-white" : "hover:bg-secondary hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("FR")}
                className={`px-3 py-2 transition ${
                  language === "FR" ? "bg-secondary text-white" : "hover:bg-secondary hover:text-white"
                }`}
              >
                FR
              </button>
            </div>

            <a
              href="/login"
              className="bg-secondary hover:opacity-90 text-white px-5 py-2 rounded-lg font-medium transition text-sm"
            >
              Book now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;