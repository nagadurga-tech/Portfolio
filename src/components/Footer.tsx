import React from "react";
import { Heart, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        {/* Footer text */}
        <p className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors duration-300 text-center md:text-left">
          © 2025 <span className="font-semibold text-white">Nagadurga Randi</span>  
          <Heart className="w-4 h-4 text-pink-500 animate-pulse" />
          <span className="hidden sm:inline">Crafted with passion</span>
        </p>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="group w-11 h-11 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-md shadow-blue-500/20 flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
