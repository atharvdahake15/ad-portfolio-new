import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  FileDown, 
  Terminal, 
  ExternalLink,
  Github,
  Linkedin
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Data Lab', href: '#datalab' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-[#070b14]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-cyan-500/15 py-2.5 sm:py-3 shadow-md shadow-slate-200/50 dark:shadow-black/25' 
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Profile Avatar Monogram */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden border border-cyan-500/40 shadow-sm group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all duration-300 bg-slate-100 dark:bg-slate-900">
              <img 
                src={PORTFOLIO_DATA.profile.avatarUrl} 
                alt="Atharv Dahake" 
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors text-sm sm:text-base">
                Atharv Dahake
              </span>
              <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 flex items-center gap-1 font-medium">
                <Terminal className="w-3 h-3" /> Data Science & Analytics
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/80 dark:bg-slate-900/70 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800/80 backdrop-blur-md shadow-sm dark:shadow-none">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-violet-500/15 dark:from-cyan-500/20 dark:to-violet-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 font-semibold shadow-xs' 
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/40'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all duration-200 shadow-xs cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-600 hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            {/* GitHub Quick Link */}
            <a
              href={PORTFOLIO_DATA.profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-100 bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 shadow-xs"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* LinkedIn Quick Link */}
            <a
              href={PORTFOLIO_DATA.profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-xl text-slate-700 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-blue-400/40 dark:hover:border-blue-500/30 transition-all duration-200 shadow-xs"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Download / View Resume Button */}
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white shadow-md shadow-blue-500/20 dark:shadow-cyan-950/40 hover:shadow-cyan-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-600" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-600 dark:text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-[#070b14]/98 border-b border-slate-200 dark:border-cyan-500/20 px-4 pt-3 pb-6 backdrop-blur-xl shadow-xl dark:shadow-2xl transition-all">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 font-semibold' 
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 text-white cursor-pointer"
              >
                <FileDown className="w-4 h-4" /> Download Resume
              </button>
              <a
                href={PORTFOLIO_DATA.profile.social.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg text-slate-700 dark:text-slate-400 hover:text-black dark:hover:text-white bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg text-slate-700 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
