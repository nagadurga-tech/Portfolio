import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, Target, Star } from "lucide-react";

interface AchievementsProps {
  isVisible: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ isVisible }) => {
  const [counters, setCounters] = useState({ days: 0, projects: 0, skills: 0 });

  const achievements = [
    {
      icon: Trophy,
      title: "90-Day Frontend Challenge",
      description: "Completed",
      count: 90,
      suffix: "Days",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-500/10 to-orange-500/10",
      detail: "Intensive coding bootcamp",
    },
    {
      icon: Target,
      title: "Real-world Projects",
      description: "Built",
      count: 50,
      suffix: "Projects",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      detail: "Production-ready apps",
    },
    {
      icon: Star,
      title: "React & Tailwind",
      description: "Specialist",
      count: 100,
      suffix: "%",
      color: "from-blue-500 to-purple-500",
      bgColor: "from-blue-500/10 to-purple-500/10",
      detail: "Modern frontend mastery",
    },
  ];

  // Counter animation
  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setCounters((prev) => ({
          days: prev.days < 90 ? prev.days + 3 : 90,
          projects: prev.projects < 50 ? prev.projects + 2 : 50,
          skills: prev.skills < 100 ? prev.skills + 4 : 100,
        }));
      }, 40);
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <motion.section
      className="bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden"
      id="achievements"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background glow blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-56 h-56 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-56 h-56 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 left-1/3 w-52 h-52 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
  {/* Section Header */}
  <div className="flex items-center justify-center gap-3 mb-3">
    <div className="flex-1 max-w-[60px] h-0.5 bg-gradient-to-r from-yellow-500 to-transparent"></div>
    
    <span className="text-yellow-400 font-semibold tracking-wider uppercase text-sm md:text-base">
      My Journey
    </span>
    
    <div className="flex-1 max-w-[60px] h-0.5 bg-gradient-to-l from-yellow-500 to-transparent"></div>
  </div>



        <div className="text-center mb-16">
          

          {/* Animated Gradient Headline */}
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-orange-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient mt-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Achievements
          </motion.h2>

          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const currentCount =
              index === 0
                ? counters.days
                : index === 1
                ? counters.projects
                : counters.skills;

            return (
              <motion.div
                key={achievement.title}
                className="group relative bg-slate-800/40 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/40 hover:border-slate-400 shadow-xl hover:shadow-2xl transition-all text-center overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.06, y: -5 }}
              >
                {/* Hover Glow Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  {/* Floating Icon */}
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-5 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center shadow-lg`}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Text */}
                  <h3 className="text-white font-bold text-lg mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-1">
                    {achievement.description}
                  </p>
                  <p className="text-slate-400 text-xs mb-4">{achievement.detail}</p>

                  {/* Counter */}
                  <motion.div
                    className={`text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${achievement.color}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  >
                    {currentCount}
                    <span className="text-lg ml-1">{achievement.suffix}</span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Achievements;
