import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { User, Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const SERVICE_ID = 'service_alugo4y';
  const TEMPLATE_ID = 'template_pioljj8';
  const PUBLIC_KEY = 'b8CF1W92ghUS4IwB_';

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("sent");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (

    <motion.div
      className="grid md:grid-cols-2 gap-12 items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* LEFT SIDE — FORM */}
      <div className="max-w-xl">
        <h2 className="text-2xl font-semibold mb-4 relative inline-block">
          Contact
          <span className="absolute left-0 -bottom-1 w-16 h-1 bg-wbBlue dark:bg-wbGold rounded-full"></span>
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Tell me about your project — I’ll reply quickly.
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="grid gap-4 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 shadow-md backdrop-blur-sm"
        >
          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              name="from_name"
              placeholder="Your Name"
              required
              className="p-3 pl-10 w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent 
              focus:border-wbBlue dark:focus:border-wbGold focus:ring-2 focus:ring-wbBlue/20 transition-all"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="email"
              name="reply_to"
              placeholder="Your Email"
              required
              className="p-3 pl-10 w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent 
              focus:border-wbBlue dark:focus:border-wbGold focus:ring-2 focus:ring-wbBlue/20 transition-all"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <MessageSquare className="absolute left-3 top-4 text-slate-400 w-4 h-4" />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="p-3 pl-10 w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent 
              focus:border-wbBlue dark:focus:border-wbGold focus:ring-2 focus:ring-wbBlue/20 transition-all"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            className="px-5 py-3 rounded-xl bg-wbBlue text-white dark:bg-wbGold dark:text-black relative overflow-hidden transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
            disabled={status === "sending"}
          >
            <span className="relative z-10">{status === "sending" ? "Sending…" : "Send Message"}</span>
          </button>

          {status === "sent" && (
            <p className="text-green-600 font-medium animate-pulse">Message sent! I’ll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="text-red-600 font-medium">Something went wrong. Please try again.</p>
          )}
        </form>

        <div className="mt-6 text-sm">
          Or email:{" "}
          <a className="underline" href="mailto:pandavarnav.work09@gmail.com">
            pandavarnav.work09@gmail.com
          </a>
        </div>
      </div>


      {/* RIGHT SIDE — ILLUSTRATION */}

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="relative flex justify-center md:mt-12"
      >
        {/* Floating Stars */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full blur-[1px] opacity-80"
            style={{
              top: `${20 + i * 15}%`,
              left: `${50 + (i % 2 === 0 ? -15 : 10)}%`,
            }}
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Illustration */}
        <motion.img
          src="/contact/contact-illustration.png"
          alt="Contact illustration"
          className="w-full max-w-md drop-shadow-xl rounded-xl relative z-10"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.2,
          }}
          viewport={{ once: true }}
        />
      </motion.div>
    </motion.div>
  );
}




