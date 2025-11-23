import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { Layout, Code2, Bot, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 12,
          speed: 400,
          glare: true,
          "max-glare": 0.15,
        });
      }
    });
  }, []);

  const services = [
    {
      title: "Web Design",
      desc: "Clean, responsive, brand-ready.",
      icon: <Layout className="w-6 h-6 text-wbBlue dark:text-wbGold" />,
    },
    {
      title: "Web Development",
      desc: "React, dashboards, and APIs.",
      icon: <Code2 className="w-6 h-6 text-wbBlue dark:text-wbGold" />,
    },
    {
      title: "AI Integration",
      desc: "Chat, content, automations.",
      icon: <Bot className="w-6 h-6 text-wbBlue dark:text-wbGold" />,
    },
    {
      title: "eBook Creation",
      desc: "Formatting & export (PDF/EPUB).",
      icon: <BookOpen className="w-6 h-6 text-wbBlue dark:text-wbGold" />,
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 relative inline-block">
        Services
        <span className="absolute left-0 -bottom-1 w-16 h-1 bg-wbBlue dark:bg-wbGold rounded-full"></span>
      </h2>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            ref={(el) => (cardRefs.current[i] = el)}
            className="
              relative p-6 rounded-2xl border border-slate-300 dark:border-slate-800
              bg-white dark:bg-slate-900
              transition-all duration-300 cursor-pointer group
            "
            whileHover={{ scale: 1.03 }}
          >
            {/* Moving border animation */}
            <span
              className="
                absolute inset-0 rounded-2xl border-2 border-transparent
                bg-gradient-to-r from-wbBlue via-wbGold to-wbBlue
                opacity-0 group-hover:opacity-100
                [background-size:200%] animate-[borderMove_2s_linear_infinite]
              "
              style={{
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                WebkitMaskComposite: "xor",
                padding: "2px",
              }}
            ></span>

            {/* Icon */}
            <div className="mb-3 relative z-10">{service.icon}</div>

            {/* Title */}
            <h3 className="font-semibold text-lg relative z-10">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm mt-2 text-slate-600 dark:text-slate-300 relative z-10">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
