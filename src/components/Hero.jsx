import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 relative">

      {/* Soft Glow Behind Logo */}
      <motion.div
        className="absolute top-28 w-72 h-72 bg-wbBlue/20 dark:bg-wbGold/15 blur-3xl rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Enhanced Floating Logo */}
      <motion.img
        src="/public/hero-image.png"
        alt="Webworks by Arnav logo"
        className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto drop-shadow-2xl relative z-10"
        initial={{ opacity: 0, scale: 0.9, y: 15 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -6, 0], // gentle floating
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Heading */}
      <motion.h1
        className="text-5xl font-bold text-wbBlue dark:text-wbGold mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Webworks by <span className="text-wbGold dark:text-wbBlue">Arnav</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        I design & build responsive websites, smart web apps, AI integrations, and polished eBooks.
      </motion.p>

      {/* Buttons */}
      <div className="mt-8 flex gap-3 relative z-10">

        {/* View My Work Button */}
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.97 }}
          className="
            px-5 py-3 rounded-xl 
            bg-wbBlue text-white 
            transition-all duration-300 
            shadow-md hover:shadow-lg
          "
        >
          View My Work
        </motion.a>

        {/* Download Resume Button */}
        <motion.a
          href="/public/ARNAV RUPSINGBHAI PANDAV-CV.pdf"
          download
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.97 }}
          className="
            px-6 py-3 rounded-xl 
            border border-wbBlue dark:border-wbGold
            text-wbBlue dark:text-wbGold 
            transition-all duration-300
            shadow-md hover:shadow-lg
            hover:bg-wbBlue hover:text-white 
            dark:hover:bg-wbGold dark:hover:text-black
          "
        >
          Download Resume
        </motion.a>

      </div>
    </div>
  );
}


