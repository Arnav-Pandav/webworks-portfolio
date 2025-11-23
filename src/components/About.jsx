import { motion } from "framer-motion";
import { Code2, Palette, Database, Brush, Cpu, BookMarked } from "lucide-react";

export default function About() {
  const skills = [
    { name: "React", icon: <Code2 className="w-4 h-4" /> },
    { name: "Tailwind", icon: <Palette className="w-4 h-4" /> },
    { name: "Firebase", icon: <Database className="w-4 h-4" /> },
    { name: "WordPress", icon: <Brush className="w-4 h-4" /> },
    { name: "AI Integrations", icon: <Cpu className="w-4 h-4" /> },
    { name: "eBook Design", icon: <BookMarked className="w-4 h-4" /> },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">

      {/* LEFT SIDE — About Text with Animation */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-3 relative inline-block">
          About Me

          {/* Highlight underline */}
          <span className="absolute left-0 -bottom-1 w-16 h-1 bg-wbBlue dark:bg-wbGold rounded-full"></span>
        </h2>

        <motion.p
          className="text-slate-600 dark:text-slate-300 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          I’m Arnav, a full-stack developer crafting clean, fast, and accessible web experiences.
          I work with React, Tailwind, Firebase, and WordPress — and I love blending tech with creativity:
          from eBooks to AI-powered interfaces.
        </motion.p>
      </motion.div>

      {/* RIGHT SIDE — Skills Grid with Icons & Hover Effects */}
      <motion.ul
        className="grid grid-cols-2 gap-3 text-sm"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.li
            key={skill.name}
            className="
              p-3 rounded-xl border dark:border-slate-800
              flex items-center gap-2
              transition-all duration-300
              hover:scale-[1.05]
              hover:border-wbBlue dark:hover:border-wbGold
              hover:shadow-lg
              hover:bg-blue-50/50 dark:hover:bg-slate-900/30
              cursor-pointer
            "
            whileHover={{ x: 3 }}
          >
            {skill.icon}
            {skill.name}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
