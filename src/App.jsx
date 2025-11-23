import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  // smooth scroll behavior for in-page links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);
  return (
    <>
      <Nav />
      <main className="max-w-6xl mx-auto px-4">
        <section id="hero"><Hero /></section>
        <section id="about" className="pt-48"><About /></section>
        <section id="services" className="pt-48"><Services /></section>
        <section id="projects" className="pt-48"><Projects /></section>
        <section id="contact" className="pt-48"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}






