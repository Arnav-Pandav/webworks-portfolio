
import { motion } from "framer-motion";

const items = [
  {
    title: "Student Marksheet App",
    tag: "React + Firestore + Auth",
    href: "https://student-marksheet-tau.vercel.app",
    img: "/projects/student-marksheet.jpg",
  },
  {
    title: "Admin Dashboard",
    tag: "Charts + Widgets + UI Panels",
    href: "https://admin-dashboard-woad-seven.vercel.app",
    img: "/projects/admin-dashboard.jpg",
  },
  {
    title: "Cafe Project (Arnav Eats)",
    tag: "Filter + Menu + Cart System",
    href: "https://arnav-eats.vercel.app",
    img: "/projects/cafe-project.jpg",
  },
  {
    title: "Digital Agency",
    tag: "Landing Page + Animations",
    href: "https://digital-agency-mu-one.vercel.app",
    img: "/projects/digital-agency.jpg",
  },
];

export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 relative inline-block">
        Projects
        <span className="absolute left-0 -bottom-1 w-16 h-1 bg-wbBlue dark:bg-wbGold rounded-full"></span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((it, i) => (
          <motion.a
            key={i}
            href={it.href}
            target="_blank"
            className="
              group rounded-2xl overflow-hidden
              border border-slate-200 dark:border-slate-800
              transition-all duration-300
              hover:shadow-xl hover:-translate-y-2 hover:border-wbBlue
              dark:hover:border-wbGold
            "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Project Image */}
            <div className="overflow-hidden">
              <img
                src={it.img}
                alt={it.title}
                className="
                  w-full h-56 object-cover
                  transition-all duration-500
                  group-hover:scale-105
                "
              />
            </div>

            {/* Project Text */}
            <div className="p-4">
              <div className="font-semibold text-lg group-hover:text-wbBlue dark:group-hover:text-wbGold transition">
                {it.title}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                {it.tag}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
