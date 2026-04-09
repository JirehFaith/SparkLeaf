import { useState } from "react";


const Navbar = () => {
  const [language, setLanguage]= useState("EN")
    
  return (
    <nav className=" fixed top-0 left-0 w-full z-50  bg-white text-white px-6 ">
      
      {/* Container */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        
        {/* Top row (mobile): logo + controls */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          
          {/* Logo */}
         <div className="flex items-center">
  <div className="  ">
    <img
      src="./images/logo1.png"
      alt="logo"
      className="h-24 w-24 object-cover  "
    />
  </div>
</div>

          
        </div>

     
        <div className="flex justify-center">
         <ul className="flex flex-wrap justify-center items-center gap-6 text-secondary font-medium">
  <li>
    <a href="#home" className="hover:text-white cursor-pointer transition">
      Home
    </a>
  </li>
  <li>
    <a href="#about" className="hover:text-white cursor-pointer transition">
      About
    </a>
  </li>
  <li>
    <a href="#services" className="hover:text-white cursor-pointer transition">
      Services
    </a>
  </li>
  <li>
    <a href="#pricing" className="hover:text-white cursor-pointer transition">
      Pricing
    </a>
  </li>
  <li>
    <a href="#how-it-works" className="hover:text-white cursor-pointer transition">
      How it works
    </a>
  </li>

  <li>
    <a href="#contact" className="hover:text-white cursor-pointer transition">
      Contacts
    </a>
  </li>
</ul>
        </div>

        {/* Right controls */}
        <div className="flex items-center justify-center lg:justify-end gap-3 flex-wrap">
          
          {/* City Selector */}
          <select className=" border border-secondary text-primary rounded px-3 py-2 text-sm focus:outline-none">
            <option className="text-black">Kigali</option>
            <option className="text-black">Paris</option>
            <option className="text-black">Dubai</option>
            <option className="text-black">London</option>
            <option className="text-black">Toronto</option>
            <option className="text-black">New York</option>
          </select>

      <div className="flex items-center text-primary border border-secondary rounded overflow-hidden text-sm">
  {/* language toggle */}
  <button
    onClick={() => setLanguage("EN")}
    className={`px-3 py-2 transition ${
      language === "EN"
        ? "bg-secondary text-white"
        : "hover:bg-secondary hover:text-white"
    }`}
  >
    EN
  </button>

  <button
    onClick={() => setLanguage("FR")}
    className={`px-3 py-2 transition ${
      language === "FR"
        ? "bg-secondary text-white"
        : "hover:bg-secondary hover:text-white"
    }`}
  >
    FR
  </button>

</div>

          {/* CTA Button */}
          <button className="bg-secondary hover:opacity-90 text-white px-5 py-2 rounded-lg font-medium transition whitespace-nowrap">
          <a href="/login">Book now</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;