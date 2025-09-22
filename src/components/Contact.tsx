// Contact.tsx
import React, { useState } from "react";
import {
  Mail as MailIcon,
  Send,
  User,
  MessageCircle,
  Github,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";

interface ContactProps {
  isVisible?: boolean;
}

const Contact: React.FC<ContactProps> = ({ isVisible = true }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "919494862520";
    const text = `Hello Naga Durga, I'm ${formData.name}. My email is ${formData.email}. Message: ${formData.message}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappURL, "_blank");
  };

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, when: "beforeChildren" },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 py-12 md:py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          variants={itemVariants}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-6 md:mb-10"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="flex-1 max-w-[60px] h-0.5 bg-gradient-to-r from-transparent to-blue-500"></div>
              <span className="text-blue-400 font-semibold tracking-wider uppercase text-xs md:text-sm whitespace-nowrap">
                Get In Touch
              </span>
              <div className="flex-1 max-w-[60px] h-0.5 bg-gradient-to-l from-transparent to-blue-500"></div>
            </div>

            <h2 className="text-3xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient">
              Contact Me
            </h2>
          </motion.div>

          {/* Card */}
          <motion.div
            className="bg-slate-800/40 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-slate-700/50 shadow-xl"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <motion.div className="relative group" variants={itemVariants}>
                <label htmlFor="contact-name" className="sr-only">
                  Your Name
                </label>
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors pointer-events-none" />
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-700/30 border border-slate-600/40 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  required
                />
                {/* Visual floating label */}
                <label
                  htmlFor="contact-name"
                  className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                    focusedField === "name" || formData.name
                      ? "top-1 text-xs text-blue-400"
                      : "top-1/2 -translate-y-1/2 text-slate-400"
                  }`}
                >
                  Your Name
                </label>
              </motion.div>

              {/* EMAIL */}
              <motion.div className="relative group" variants={itemVariants}>
                <label htmlFor="contact-email" className="sr-only">
                  Email Address
                </label>
                <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors pointer-events-none" />
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-700/30 border border-slate-600/40 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                  required
                />
                <label
                  htmlFor="contact-email"
                  className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                    focusedField === "email" || formData.email
                      ? "top-1 text-xs text-purple-400"
                      : "top-1/2 -translate-y-1/2 text-slate-400"
                  }`}
                >
                  Email Address
                </label>
              </motion.div>

              {/* MESSAGE */}
              <motion.div className="relative group" variants={itemVariants}>
                <label htmlFor="contact-message" className="sr-only">
                  Your Message
                </label>
                <MessageCircle className="absolute left-4 top-4 text-slate-400 transition-colors pointer-events-none" />
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-700/30 border border-slate-600/40 text-white focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all resize-none"
                  required
                />
                <label
                  htmlFor="contact-message"
                  className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                    focusedField === "message" || formData.message
                      ? "top-1 text-xs text-pink-400"
                      : "top-4 text-slate-400"
                  }`}
                >
                  Your Message
                </label>
              </motion.div>

              {/* SEND BUTTON */}
              <motion.button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-3 text-white bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 shadow-lg hover:shadow-pink-500/40 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                variants={itemVariants}
              >
                {/* animated icon — rotates on hover */}
                <motion.span
                  className="flex items-center justify-center"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 20, x: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 16 }}
                >
                  <Send className="w-5 h-5" />
                </motion.span>

                <span>Send Message</span>
              </motion.button>
            </form>

            {/* SOCIALS */}
            <motion.div
              className="flex justify-center gap-6 mt-8"
              variants={itemVariants}
            >
              <a
                href="https://github.com/nagadurga-tech"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl text-white bg-slate-700 hover:bg-slate-600 transition"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/nagadurgarandhi/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:nagadurgarandi073@gmail.com"
                className="p-3 rounded-xl text-white bg-red-600 hover:bg-red-700 transition"
                aria-label="Email"
              >
                <MailIcon className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* gradient animation for heading */}
      <style>{`
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient-move 6s ease infinite;
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </motion.section>
  );
};

export default Contact;
