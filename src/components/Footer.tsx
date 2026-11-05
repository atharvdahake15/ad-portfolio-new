import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Instagram, 
  FileDown
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Data Lab', href: '#datalab' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-slate-100/90 dark:bg-[#02050c] border-t border-slate-200 dark:border-slate-900 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-slate-600 dark:text-slate-400 transition-colors duration-300">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Brand & Monogram with Photo */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-cyan-500/40 shrink-0 bg-slate-200 dark:bg-slate-900 shadow-xs">
                <img 
                  src={PORTFOLIO_DATA.profile.avatarUrl} 
                  alt="Atharv Dahake" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-900 dark:text-white text-base">Atharv Dahake</span>
                <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-medium">Data Science & Python Engineering</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Computer Engineering student focused on Data Science, predictive modeling, and scalable software solutions. Ready for internship & full-time opportunities.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/40 px-3 py-1.5 rounded-xl border border-emerald-500/30 w-fit font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>STATUS: AVAILABLE FOR 2026 ROLES</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase text-slate-800 dark:text-slate-300 font-bold tracking-wider">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Resume Action */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase text-slate-800 dark:text-slate-300 font-bold tracking-wider">
              Connect & Verify
            </h4>
            
            <div className="flex items-center gap-2.5">
              <a
                href={PORTFOLIO_DATA.profile.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors shadow-xs"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800 transition-colors shadow-xs"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.social.email}
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-800 transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Profile"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 border border-slate-200 dark:border-slate-800 transition-colors shadow-xs"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-all shadow-md cursor-pointer w-fit"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Official Resume</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-mono">
            <span>© 2026 Atharv Dahake. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
