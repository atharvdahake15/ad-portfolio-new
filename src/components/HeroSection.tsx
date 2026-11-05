import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Sparkles, 
  ChevronDown, 
  Database, 
  Cpu, 
  TrendingUp, 
  Award, 
  MapPin, 
  CheckCircle2, 
  Binary,
  Layers
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Aspiring Data Scientist",
    "Data Analyst",
    "Python Developer",
    "Machine Learning Enthusiast",
    "Computer Engineering Student"
  ];

  // Realistic typewriter cycling effect
  useEffect(() => {
    const currentFullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        if (displayedText.length === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern transition-colors duration-300"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/10 dark:bg-violet-600/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-72 h-72 rounded-full bg-indigo-500/10 dark:bg-blue-600/10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Bio & Actions */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            
            {/* Status & Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md w-fit shadow-xs dark:shadow-[0_0_15px_rgba(56,189,248,0.15)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4" />
              <span className="text-xs font-mono font-semibold text-emerald-700 dark:text-cyan-300 tracking-wide uppercase">
                Open to Internship & Data Roles • 2026
              </span>
            </div>

            {/* Main Name & Dynamic Typewriter */}
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 dark:from-cyan-400 dark:via-blue-400 dark:to-violet-400 bg-clip-text text-transparent">Atharv Dahake</span>
              </h1>
              
              <div className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 font-mono min-h-[38px]">
                <span className="text-cyan-600 dark:text-cyan-400">&gt;</span>
                <span className="text-slate-900 dark:text-slate-100">{displayedText}</span>
                <span className="w-2.5 h-6 bg-cyan-600 dark:bg-cyan-400 animate-pulse" />
              </div>
            </div>

            {/* Authentic Introduction */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Passionate Computer Engineering student with hands-on experience in <span className="text-cyan-700 dark:text-cyan-300 font-semibold">Python</span>, <span className="text-blue-700 dark:text-cyan-300 font-semibold">Pandas</span>, <span className="text-violet-700 dark:text-violet-300 font-semibold">Power BI</span>, and <span className="text-indigo-700 dark:text-indigo-300 font-semibold">Data Analytics</span>. Experienced through a 3-month internship at Internmo analyzing churn patterns, content analytics, and e-commerce trends, dedicated to turning complex data into executive-ready business insights.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white shadow-lg shadow-blue-500/25 dark:shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700/80 hover:border-cyan-500/50 hover:text-cyan-700 dark:hover:text-cyan-300 transition-all duration-300 shadow-xs dark:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-md cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Download Resume (PDF)</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-900/60 transition-all cursor-pointer"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Location Indicator */}
            <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-slate-200 dark:border-slate-800/80 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5 font-mono text-xs text-slate-600 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>Nagpur, Maharashtra, India</span>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={PORTFOLIO_DATA.profile.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  <span className="font-mono">atharvdahake15</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="font-mono">LinkedIn</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.social.email}
                  className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span className="font-mono">atharvdahake7@gmail.com</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Photo & Telemetry HUD Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="w-full max-w-md rounded-3xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-cyan-500/25 p-6 backdrop-blur-xl shadow-xl shadow-slate-200/60 dark:shadow-2xl dark:shadow-cyan-950/30 relative overflow-hidden group hover:border-cyan-500/50 dark:hover:border-cyan-400/40 transition-all duration-300">
              
              {/* Scanline / glowing accent lines */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500" />
              <div className="absolute top-3 right-4 flex items-center gap-1.5 font-mono text-[10px] text-cyan-600 dark:text-cyan-400/80">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>SYS_VERIFIED</span>
              </div>

              {/* Header inside HUD with Atharv's Actual Photo */}
              <div className="flex items-center gap-4 pb-4 border-b border-slate-200 dark:border-slate-800/80">
                {/* Photo Portrait Container */}
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-md group-hover:border-cyan-400 transition-all shrink-0 bg-slate-100 dark:bg-slate-950">
                  <img 
                    src={PORTFOLIO_DATA.profile.avatarUrl} 
                    alt="Atharv Dahake" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" 
                  />
                  <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 shadow-xs" />
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">Atharv Dahake</h3>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-300">Data Science & Analytics</span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Jagadamba College of Engg. & Tech.</span>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">● Internmo Analytics Intern</span>
                </div>
              </div>

              {/* Terminal-inspired telemetry snippet */}
              <div className="my-4 rounded-xl bg-slate-900 dark:bg-slate-950/95 border border-slate-800 p-3.5 font-mono text-xs text-slate-300 space-y-1.5 shadow-inner">
                <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-slate-800/60 text-[11px]">
                  <span className="flex items-center gap-1 text-cyan-400">
                    <Terminal className="w-3 h-3" /> data_analyst_profile.py
                  </span>
                  <span className="text-emerald-400 font-semibold">● EXEC_OK</span>
                </div>
                <div className="text-slate-400">
                  <span className="text-violet-400">class</span> <span className="text-cyan-300">DataSpecialist</span>:
                </div>
                <div className="pl-4 text-slate-300">
                  stack = [<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"Pandas"</span>, <span className="text-emerald-300">"Power BI"</span>, <span className="text-emerald-300">"NLP"</span>]
                </div>
                <div className="pl-4 text-slate-300">
                  internship = <span className="text-amber-300">"Internmo (Customer Churn & E-Com)"</span>
                </div>
                <div className="pl-4 text-slate-300">
                  projects = [<span className="text-cyan-300">"NexaTel Churn"</span>, <span className="text-cyan-300">"StreamFlix"</span>, <span className="text-cyan-300">"AI ATS"</span>]
                </div>
                <div className="pl-4 text-emerald-400 font-semibold">
                  status = <span className="text-emerald-300">"Ready for 2026 Internship"</span>
                </div>
              </div>

              {/* Real Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 text-xs font-semibold mb-1">
                    <Binary className="w-3.5 h-3.5" />
                    <span>Core Projects</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white font-mono">5</div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Churn, Content & NLP</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 text-xs font-semibold mb-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Certifications</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white font-mono">6</div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">TATA, Deloitte, HP, TCS</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-1">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Core Stack</span>
                  </div>
                  <div className="text-base font-bold text-slate-900 dark:text-white font-mono">Python & Power BI</div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">+ Pandas, Scikit-learn, SQL</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Intern Experience</span>
                  </div>
                  <div className="text-base font-bold text-slate-900 dark:text-white font-mono">Internmo</div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">3-Month Analytics Intern</p>
                </div>
              </div>

              {/* Direct Quick Action Inside Card */}
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Verified Credentials
                </span>
                <a 
                  href="#certifications" 
                  className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-mono font-semibold flex items-center gap-1 hover:underline cursor-pointer"
                >
                  Inspect 6 Certificates &rarr;
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
