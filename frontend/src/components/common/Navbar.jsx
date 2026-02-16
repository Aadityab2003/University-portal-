import React, { useState } from "react";
// import logo from "../assets/School-of-Engineering-ManagementLogo-1.png";
import logo from "../../assets/School-of-Engineering-ManagementLogo-1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", link: "#" },
    { label: "Admissions", link: "#admissions" },
    { label: "Academics", link: "#academics" },
    { label: "Research", link: "#research" },
    { label: "Campus Life", link: "#campus" },
    { label: "Faculty", link: "#faculty" },
    { label: "About", link: "#about" },
    { label: "News", link: "#news" },
  ];

  return (
    <header className="fixed h-30 w-full z-50 bg-[#c64f4f] shadow-md border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="mt-2 text-2xl font-bold text-[#0a2e5c]">
          <img src={logo} alt="University Logo" className="h-20 inline-block mr-2" />
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex space-x-6 font-roboto">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className="text-[#1f2937] hover:text-[#0a2e5c] transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col space-y-1.5 focus:outline-none"
          >
            <span
              className={`block h-0.5 w-6 bg-[#0a2e5c] transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#0a2e5c] transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#0a2e5c] transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-[#c64f4f] px-6 pb-6 space-y-3">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="block text-[#1f2937] font-medium hover:text-[#0a2e5c] transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
