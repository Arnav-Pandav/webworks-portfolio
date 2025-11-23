import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left */}
        <div className="text-center sm:text-left">
          © {new Date().getFullYear()} <span className="font-semibold">Webworks by</span> <span className="font-semibold text-wbGold dark:text-wbBlue">Arnav</span>
        </div>

        {/* Right - Social Icons */}
        <div className="flex items-center gap-5">

          {/* GitHub */}
          <a
            href="https://github.com/Arnav-Pandav"
            target="_blank"
            className="
              text-slate-500 dark:text-slate-400
              transition-all duration-300
              hover:text-wbBlue dark:hover:text-wbGold
              hover:-translate-y-[2px] hover:scale-110
            "
          >
            <Github className="w-5 h-5" />
          </a>

          {/* LinkedIn */}
          <a
            href="YOUR-LINKEDIN"
            target="_blank"
            className="
              text-slate-500 dark:text-slate-400
              transition-all duration-300
              hover:text-wbBlue dark:hover:text-wbGold
              hover:-translate-y-[2px] hover:scale-110
            "
          >
            <Linkedin className="w-5 h-5" />
          </a>

          {/* Instagram */}
          <a
            href="YOUR-INSTAGRAM"
            target="_blank"
            className="
              text-slate-500 dark:text-slate-400
              transition-all duration-300
              hover:text-wbBlue dark:hover:text-wbGold
              hover:-translate-y-[2px] hover:scale-110
            "
          >
            <Instagram className="w-5 h-5" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+919904087778"
            target="_blank"
            className="
            transition-all duration-300
             hover:-translate-y-[2px] hover:scale-110"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-6 h-6"
            />
          </a>


        </div>

      </div>
    </footer>
  );
}


