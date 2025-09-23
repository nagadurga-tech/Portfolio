import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import jt from "../assets/jobtraker.png";
import quiz from '../assets/quiz.png';
import youtube from '../assets/yuotubeclone.png';
import ecommerce from '../assets/Ecommerce.png';
import jobtracker from '../assets/fitness.jpeg';
import recipe from '../assets/recipe.png';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Recipe Hub",
      image:recipe,
      live: "https://recipe-hub-b2kl.vercel.app/",
      code: "https://github.com/nagadurga-tech/RecipeHub",
    },
    {
      title: "E-Commerce Store",
      image:ecommerce,
      live: "https://shopin-e-commerce.vercel.app/",
      code: "https://github.com/nagadurga-tech/SHOPIN-ECommerce",
    },
    {
      title: "VidTube Video Explorer",
      image: youtube,
      live: "https://vittube-project.vercel.app/",
      code: "https://github.com/nagadurga-tech/VitTube-Project",
    },
    {
      title: "Fitness Tracker",
      image: jobtracker,
      live: "https://fitness-tracker-eosin-six.vercel.app/",
      code: "https://github.com/nagadurga-tech/Fitness-tracker-",
    },
    {
      title: "QuizMaster",
      image:quiz,
      live: "quiz-master-4xjxc868f-nagadurga-techs-projects.vercel.app",
      code: "https://github.com/nagadurga-tech/QuizMaster",
    },
      {
      title: "Job Tracker Dashboard",
      image: jt,
      live: "https://jobtracker-dashboard-n163dbbqt-nagadurga-techs-projects.vercel.app/",
      code: "https://github.com/nagadurga-tech/Jobtracker-Dashboard-",
    },
   
  ];

  return (
    <section
      className="py-14 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
      id="projects"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
  <div className="flex-1 max-w-[60px] h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
  
  <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-semibold tracking-wider uppercase text-xs md:text-sm whitespace-nowrap">
    Discover My Projects
  </span>
  
  <div className="flex-1 max-w-[60px] h-0.5 bg-gradient-to-l from-blue-500 to-transparent"></div>
</div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
            My Projects
          </h2>
          <p className="text-slate-400 mt-3 text-sm md:text-base max-w-xl mx-auto">
            Explore my featured work — modern, creative, and professional builds.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden
                        bg-gradient-to-br from-slate-800/50 to-slate-900/60 
                        backdrop-blur-xl border border-slate-700/50
                        hover:border-pink-500/40
                        shadow-lg hover:shadow-pink-500/20
                        transition-all duration-700"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ scale: 1.04 }}
            >
              {/* Project Image */}
              <div className="relative h-56 flex items-center justify-center bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/60 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                                flex flex-col items-center justify-center gap-3">
                  <h3 className="text-lg md:text-xl font-bold text-white drop-shadow-lg">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-gradient-to-r from-blue-600 to-purple-600 
                                 text-white px-4 py-2 rounded-xl text-sm font-medium 
                                 hover:scale-105 transition-all shadow-md"
                    >
                      <ExternalLink className="w-4 h-4" /> Live
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 border border-slate-500 
                                 text-slate-300 hover:border-blue-500 hover:text-blue-400 
                                 px-4 py-2 rounded-xl text-sm font-medium 
                                 hover:scale-105 transition-all shadow-md"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
