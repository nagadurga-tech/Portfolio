import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import myPhoto from "../components/image.png";

interface AboutProps {
  isVisible: boolean;
}

const About: React.FC<AboutProps> = ({ isVisible }) => {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const counterStarted = useRef(false);

  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  // Parallax effect for circles
  const handleMouseMove = (e: MouseEvent) => {
    const circles = document.querySelectorAll(
      ".parallax-circle"
    ) as NodeListOf<HTMLDivElement>;
    circles.forEach((circle) => {
      const speed = circle.getAttribute("data-speed") || "5";
      const x = (window.innerWidth - e.pageX * parseFloat(speed)) / 200;
      const y = (window.innerHeight - e.pageY * parseFloat(speed)) / 200;
      (circle as HTMLDivElement).style.transform = `translate(${x}px, ${y}px)`;
    });
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");

      if (!counterStarted.current) {
        counterStarted.current = true;

        let yearCount = 0;
        const yearInterval = setInterval(() => {
          yearCount++;
          if (yearCount <= 2) setYears(yearCount);
          else clearInterval(yearInterval);
        }, 600);

        let projectCount = 0;
        const projectInterval = setInterval(() => {
          projectCount += 2;
          if (projectCount <= 50) setProjects(projectCount);
          else {
            setProjects(50);
            clearInterval(projectInterval);
          }
        }, 40);
      }
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-16 overflow-hidden"
      ref={ref}
    >
      {/* 🔹 Background Blurs with Parallax */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-10 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl parallax-circle"
          data-speed="3"
        ></div>
        <div
          className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl parallax-circle"
          data-speed="6"
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="flex-1 max-w-[60px] h-0.5 bg-gradient-to-r from-transparent to-blue-500"></div>
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-xs md:text-sm whitespace-nowrap">
              Get to know me
            </span>
            <div className="flex-1 max-w-[60px] h-0.5 bg-gradient-to-l from-transparent to-blue-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-3">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-3"></div>
        </motion.div>

        {/* Grid Content */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.2 },
            },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16"
        >
          {/* 🔹 Left: Profile Image */}
          <motion.div
            whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex justify-center lg:justify-end relative perspective-1000"
          >
            <div className="relative group">
              {/* Floating effect only on mobile */}
              <motion.img
                src={myPhoto}
                alt="Profile"
                className="w-64 h-[18rem] md:w-72 md:h-[20rem] lg:w-80 lg:h-[22rem] object-cover rounded-3xl shadow-[0px_20px_40px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:shadow-blue-500/40"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-blue-500/70 transition-all duration-500"></div>
            </div>
          </motion.div>

          {/* 🔹 Right: Text & Stats */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
            }}
            className="space-y-10 text-center lg:text-left"
          >
            <p className="text-lg text-slate-300 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
              I craft{" "}
              <span className="text-blue-400 font-semibold">
                responsive, interactive websites
              </span>{" "}
              with{" "}
              <span className="text-purple-400 font-semibold">clean design</span>{" "}
              and{" "}
              <span className="text-pink-400 font-semibold">
                smooth user experience
              </span>
              . Always focused on{" "}
              <span className="text-blue-400 font-semibold">
                modern technologies
              </span>{" "}
              and{" "}
              <span className="text-purple-400 font-semibold">
                creative solutions
              </span>
              .
            </p>

            {/* 3D Stats Section */}
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0 perspective-1000">
              {/* Years */}
              <motion.div
                whileHover={{ rotateY: -10, rotateX: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative p-6 rounded-2xl text-center border border-slate-700/50 bg-slate-800/70 backdrop-blur-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                <div className="relative z-10 text-4xl font-bold text-blue-400 mb-2">
                  {years}+
                </div>
                <div className="relative z-10 text-slate-400 text-sm md:text-base">
                  Years Experience
                </div>
              </motion.div>

              {/* Projects */}
              <motion.div
                whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative p-6 rounded-2xl text-center border border-slate-700/50 bg-slate-800/70 backdrop-blur-xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              >
                <div className="relative z-10 text-4xl font-bold text-purple-400 mb-2">
                  {projects}+
                </div>
                <div className="relative z-10 text-slate-400 text-sm md:text-base">
                  Projects Completed
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, delay: 0.7 },
                },
              }}
              className="pt-4 flex justify-center lg:justify-start"
            >
              <button
                onClick={handleScrollToContact}
                className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg overflow-hidden group transform transition-transform duration-500 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let’s Work Together
                </span>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-white/20 skew-x-12 group-hover:left-[120%] transition-all duration-700"></div>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
