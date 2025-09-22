import React from "react";
import myPhoto from "../components/image.png";

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
 <section
  id="home"
  className="relative min-h-fit md:min-h-screen pt-12 md:pt-24 
             bg-gradient-to-b from-[#070852] via-[#05063d] to-[#030429] 
             text-white flex flex-col md:flex-row items-center justify-between 
             px-6 md:px-20 overflow-hidden"
>

      {/* Left Content */}
      <div className="z-10 max-w-xl text-center md:text-left space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight animate-fade-up">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 
                           bg-clip-text text-transparent bg-[length:200%_200%] 
                           animate-gradientText">
            Nagadurga
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 animate-fade-up delay-200">
          Frontend Developer | React Enthusiast | Modern UI & UX Builder
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up delay-300">
          <button
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-sky-500 to-blue-600 
                       hover:from-sky-600 hover:to-blue-700 
                       text-white px-7 py-3 rounded-full font-semibold 
                       shadow-lg hover:shadow-blue-600/40 
                       hover:scale-105 transition-all duration-300"
          >
            View Projects
          </button>

          <a
            href="/cv.pdf"
            download="My Resume.pdf"
            className="border border-sky-400 text-sky-400 
                       px-7 py-3 rounded-full font-semibold 
                       hover:bg-sky-400 hover:text-slate-900 
                       hover:scale-105 transition-all duration-300 shadow-md"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right Floating Image */}
      <div className="relative mt-8 md:mt-0 z-10 hidden md:flex items-center justify-center animate-fade-up delay-500">

        {/* Decorative Frame */}
        <div className="relative w-60 h-72 sm:w-72 sm:h-80 md:w-80 md:h-[22rem] rounded-[2rem] overflow-hidden border-2 border-sky-400/40 shadow-2xl shadow-sky-900/60 animate-float">
          <img
            src={myPhoto}
            alt="Nagadurga"
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070852]/70 via-transparent to-transparent"></div>
        </div>

        {/* Glowing Shapes */}
        <div className="absolute -top-6 -left-6 w-16 h-16 bg-sky-500 rounded-2xl rotate-12 blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-cyan-400 rounded-full blur-2xl opacity-60 animate-pulseSlow"></div>
      </div>
    </section>
  );
};

export default Hero;
