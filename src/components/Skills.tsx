import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Globe, Zap, GitBranch, Smartphone, Layers } from 'lucide-react';

interface SkillsProps {
  isVisible: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isVisible }) => {
  const skills = [
    { name: 'Java', icon: Code, level: 85, color: 'from-orange-500 to-red-500' },
    { name: 'HTML', icon: Globe, level: 95, color: 'from-orange-600 to-red-600' },
    { name: 'CSS', icon: Palette, level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', icon: Zap, level: 88, color: 'from-yellow-500 to-orange-500' },
    { name: 'React', icon: Layers, level: 92, color: 'from-cyan-500 to-blue-500' },
    { name: 'Bootstrap', icon: Smartphone, level: 85, color: 'from-purple-500 to-indigo-500' },
    { name: 'Tailwind CSS', icon: Palette, level: 90, color: 'from-teal-500 to-cyan-500' },
    { name: 'Git', icon: GitBranch, level: 80, color: 'from-gray-600 to-gray-800' },
  ];

  return (
    <section
  id="skills"
  className="pt-0 pb-10 md:pb-18 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden scroll-smooth"
>

      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-40 h-40 md:w-60 md:h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-40 h-40 md:w-60 md:h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-14 md:mb-16"
        >
  {/* Section Header */}
      <div className="flex items-center justify-center gap-3 mb-3">
        <div className="flex-1 max-w-[60px] h-0.5 bg-gradient-to-r from-yellow-500 to-transparent"></div> 
      <span className="text-yellow-400 font-semibold tracking-wider uppercase text-sm md:text-base">
       What I Do Best
      </span>
    <div className="flex-1 max-w-[60px] h-0.5 bg-gradient-to-l from-yellow-500 to-transparent"></div>
    </div>
          <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-slide">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-3"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: 'easeOut' }}
              className="group relative bg-slate-800/60 backdrop-blur-md p-5 md:p-6 rounded-xl md:rounded-2xl border border-slate-700/40 
                         transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:bg-slate-800/80 
                         hover:border-purple-500/60"
            >
              <div className="text-center">
                {/* Icon */}
                <div className="mb-4">
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center 
                                shadow-md group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300`}
                  >
                    <skill.icon className="w-7 h-7 md:w-9 md:h-9 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Skill name */}
                <h3 className="text-white font-semibold text-sm md:text-base mb-2 group-hover:text-purple-400 transition-colors">
                  {skill.name}
                </h3>

                {/* Progress bar */}
                <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                  ></motion.div>
                </div>
                <span className="text-xs text-slate-400 mt-2 block">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 md:mt-16 text-center"
        >
          <h3 className="text-base md:text-lg font-semibold text-white mb-4">
            Tools & Technologies I Use
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {['VS Code', 'GitHub', 'npm', 'Notion'].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="px-4 py-2 md:px-5 md:py-2.5 bg-slate-800/60 backdrop-blur-sm border border-slate-700/40 rounded-full text-slate-300 text-sm md:text-base hover:text-white hover:border-blue-500/60 transition-all"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Custom keyframes for gradient animation */}
      <style>{`
        @keyframes gradient-slide {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-slide {
          animation: gradient-slide 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
