import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { profileData } from '../data/portfolioData';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 240;

      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`pointer-events-auto flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 rounded-full border transition-all duration-300 ${
          scrolled
            ? 'bg-[#070b14]/85 border-[#2c67ed]/55 shadow-[0_0_32px_-2px_rgba(44,103,237,0.55)]'
            : 'bg-[#070b14]/70 border-[#2c67ed]/40 shadow-[0_0_24px_-4px_rgba(44,103,237,0.42)]'
        } backdrop-blur-xl`}
      >
        {/* Navigation Items */}
        <div className="flex items-center gap-1">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-[#2c67ed] shadow-[0_0_18px_rgba(44,103,237,0.85)] -z-10"
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </div>

        {/* CV Quick Action */}
        <a
          href={profileData.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 ml-1 pl-3 border-l border-slate-800 text-xs font-medium text-[#5b8ef5] hover:text-white transition-colors"
          title="Unduh CV Aiza El Diana"
        >
          <FileText className="w-3.5 h-3.5 text-[#2c67ed]" />
          <span>CV</span>
        </a>
      </motion.nav>
    </header>
  );
};

export default Navbar;
