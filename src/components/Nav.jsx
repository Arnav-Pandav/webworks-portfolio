import { useTheme } from '../theme/ThemeProvider';
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';


const Nav = () => {
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/70 backdrop-blur">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        {/* ✅ Logo + Company name */}
        <div className="flex items-center gap-3">
          <a href="#hero" className="font-semibold tracking-wide text-wbBlue dark:text-wbGold">
            Webworks by  <span className="text-wbGold dark:text-wbBlue">Arnav</span>
          </a>
        </div>

        {/* ✅ Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-200">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-wbBlue dark:hover:text-wbGold transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* ✅ Theme Toggle Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme('light')}
            className={`p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 ${
              theme === 'light' ? 'bg-slate-100 dark:bg-slate-900' : ''
            }`}
            title="Light Mode"
          >
            <FiSun className="text-xl" />
          </button>

          <button
            onClick={() => setTheme('dark')}
            className={`p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 ${
              theme === 'dark' ? 'bg-slate-100 dark:bg-slate-900' : ''
            }`}
            title="Dark Mode"
          >
            <FiMoon className="text-xl" />
          </button>

          <button
            onClick={() => setTheme('system')}
            className={`p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 ${
              theme === 'system' ? 'bg-slate-100 dark:bg-slate-900' : ''
            }`}
            title="System Theme"
          >
            <FiMonitor className="text-xl" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

