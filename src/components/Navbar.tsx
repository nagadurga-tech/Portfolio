import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  // Hide navbar on scroll down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Smooth scroll handler
  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActive(id);
    setOpen(false); // close mobile menu after click
  };

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-transform duration-500 ${
        hidden ? "-translate-y-28" : "translate-y-0"
      } w-full max-w-4xl px-4`}
    >
      <nav className="flex items-center justify-between">
        {/* Mobile menu button (LEFT side) */}
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden bg-sky-600 text-white p-2 rounded-full cursor-pointer shadow-lg flex items-center"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </div>

        {/* Desktop pill navbar (CENTERED) */}
        <ul className="hidden md:flex items-center mx-auto bg-white/85 backdrop-blur-lg shadow-lg rounded-full px-6 py-2 space-x-6 border border-sky-500/30">
          {links.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleScrollTo(item)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  active === item
                    ? "bg-sky-500 text-white shadow-md"
                    : "text-[#070852] hover:text-[#070852]"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden mt-4 bg-sky-900/90 backdrop-blur-md rounded-2xl shadow-lg py-4">
          <ul className="flex flex-col items-center space-y-4">
            {links.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleScrollTo(item)}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                    active === item
                      ? "bg-sky-500 text-white shadow-md"
                      : "text-[#070852] hover:text-[#070852]"
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;






