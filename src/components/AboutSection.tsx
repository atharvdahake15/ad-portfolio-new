import React from 'react';
import { 
  GraduationCap, 
  BrainCircuit, 
  Target, 
  Sparkles, 
  Code2, 
  CheckCircle, 
  FileText, 
  Compass, 
  Workflow,
  Lightbulb,
  Download
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResumeModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResumeModal }) => {
  const cards = [
    {
      icon: GraduationCap,
      color: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30",
      title: "Engineering Education",
      subtitle: "B.E. Computer Engineering (Pursuing)",
      description: "Undergraduate Computer Engineering student at Jagadamba College of Engineering and Technology, building strong foundational competence in Data Structures, Algorithms, Object-Oriented Programming, and Database Systems."
    },
    {
      icon: BrainCircuit,
      color: "from-violet-500/20 to-indigo-500/20 text-violet-400 border-violet-500/30",
      title: "Data Science & AI Focus",
      subtitle: "Machine Learning & Computer Vision",
      description: "Dedicated to solving practical problems with data. Built real-time object detection systems using YOLO & OpenCV, and developed NLP-based semantic matching algorithms for automated resume parsing."
    },
    {
      icon: Workflow,
      color: "from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30",
      title: "Technical Learning Journey",
      subtitle: "Applied Industry Simulations",
      description: "Completed comprehensive enterprise simulation projects with Deloitte (Data Analytics & Business Decision Making), TATA (GenAI Powered Data Analytics), TCSion, and HP LIFE, mastering quantitative methodologies."
    },
    {
      icon: Target,
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
      title: "Career Objective",
      subtitle: "Data Scientist / Data Analyst / Software Engineer",
      description: "Seeking to leverage analytical thinking, Python proficiency, and software development skills in an internship role where I can extract actionable business insights from complex datasets and build scalable software solutions."
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white/70 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
            <Compass className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>BACKGROUND & TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-600 to-violet-600 dark:from-cyan-400 dark:to-violet-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
            A fast-learning Computer Engineering student with a disciplined problem-solving mindset and passion for Data Science, Analytics, and real-world software engineering.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Detailed Narrative Card with Profile Photo */}
          <div className="lg:col-span-7 rounded-3xl bg-white/90 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 p-8 backdrop-blur-md relative shadow-lg shadow-slate-200/50 dark:shadow-none">
            <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider mb-4 font-semibold">
              <Lightbulb className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> Professional Profile
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Engineering solutions through <span className="text-cyan-600 dark:text-cyan-300">data-driven precision</span>
            </h3>

            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {PORTFOLIO_DATA.profile.aboutBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border border-cyan-500/40 shadow-sm shrink-0 bg-slate-100 dark:bg-slate-800">
                  <img 
                    src={PORTFOLIO_DATA.profile.avatarUrl} 
                    alt="Atharv Dahake" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Atharv Dahake</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Nagpur, Maharashtra, India</div>
                </div>
              </div>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/10 dark:bg-cyan-500/15 hover:bg-cyan-500/20 dark:hover:bg-cyan-500/25 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 transition-all duration-200 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> View Official Resume
              </button>
            </div>
          </div>

          {/* Quick Pillars & Verified Checklist */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-3xl bg-gradient-to-br from-white to-slate-100/90 dark:from-slate-900/90 dark:to-slate-950/90 border border-slate-200/90 dark:border-cyan-500/20 p-6 backdrop-blur-md shadow-md dark:shadow-none">
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Verified Qualifications & Strengths
              </h4>
              
              <ul className="space-y-3">
                {PORTFOLIO_DATA.achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Metrics Banner */}
            <div className="rounded-3xl bg-white/90 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 p-6 backdrop-blur-md shadow-sm dark:shadow-none">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800/60">
                  <span className="text-2xl font-bold font-mono text-cyan-600 dark:text-cyan-400">2026</span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Internship Availability</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800/60">
                  <span className="text-2xl font-bold font-mono text-violet-600 dark:text-violet-400">Python</span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Primary Analytical Tool</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Pillars Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="rounded-3xl bg-white/90 dark:bg-slate-900/50 border border-slate-200/90 dark:border-slate-800 hover:border-cyan-500/40 dark:hover:border-cyan-500/30 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 group shadow-sm dark:shadow-none"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} border flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {card.title}
                </h3>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400/80 block mb-3 font-medium">
                  {card.subtitle}
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
