import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Clock, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Send 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceEducationSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white/70 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-semibold mb-3">
            <Clock className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>JOURNEY & TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 dark:from-cyan-400 dark:via-blue-400 dark:to-violet-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
            Engineering education, verified enterprise simulation programs, and practical 3-month Data Analytics Internship experience.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Glowing Line */}
          <div className="absolute top-4 bottom-4 left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-violet-600/30" />

          <div className="space-y-12">
            {PORTFOLIO_DATA.timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isStatus = item.type === 'status';
              const isEducation = item.type === 'education';
              const isInternship = item.type === 'internship';

              return (
                <div 
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-8 group`}
                >
                  {/* Central Node Indicator */}
                  <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white dark:bg-slate-900 border-2 flex items-center justify-center z-10 transition-transform group-hover:scale-110 shadow-md ${
                    isStatus 
                      ? 'border-emerald-500 text-emerald-600 dark:text-emerald-300' 
                      : isInternship
                      ? 'border-cyan-500 text-cyan-600 dark:text-cyan-300'
                      : isEducation
                      ? 'border-blue-500 text-blue-600 dark:text-blue-300'
                      : 'border-violet-500 text-violet-600 dark:text-violet-300'
                  }`}>
                    {isEducation ? (
                      <GraduationCap className="w-4 h-4" />
                    ) : isStatus ? (
                      <Sparkles className="w-4 h-4" />
                    ) : (
                      <Briefcase className="w-4 h-4" />
                    )}
                  </div>

                  {/* Spacer for 2-column desktop alignment */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div className="ml-12 md:ml-0 md:w-1/2">
                    <div className={`p-6 sm:p-7 rounded-3xl bg-white/95 dark:bg-slate-900/80 border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-md dark:shadow-xl ${
                      isStatus 
                        ? 'border-emerald-500/30 dark:border-emerald-500/30 shadow-emerald-500/5' 
                        : isInternship
                        ? 'border-cyan-500/40 dark:border-cyan-500/40 ring-1 ring-cyan-500/20'
                        : 'border-slate-200/90 dark:border-slate-800 hover:border-cyan-500/40'
                    }`}>
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold uppercase ${
                          isStatus 
                            ? 'bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30' 
                            : isInternship
                            ? 'bg-cyan-500/15 text-cyan-800 dark:text-cyan-200 border border-cyan-500/40 font-bold'
                            : 'bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30'
                        }`}>
                          {item.badge}
                        </span>

                        <div className="flex items-center gap-1.5 font-mono text-xs text-slate-500 dark:text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 mb-4 font-semibold">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{item.organization}</span>
                        <span className="text-slate-300 dark:text-slate-700">•</span>
                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1 font-normal">
                          <MapPin className="w-3 h-3" /> {item.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Recruiter Callout Banner */}
        <div className="mt-16 max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-slate-100 via-white to-slate-100 dark:from-cyan-950/40 dark:via-slate-900 dark:to-violet-950/40 border border-slate-200/90 dark:border-cyan-500/30 p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-xl shadow-lg shadow-slate-200/50 dark:shadow-none">
          <div className="text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 flex items-center gap-1.5 mb-1 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> Recruiter & Team Direct Line
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Looking for an analytical, disciplined Data Science Intern?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
              Equipped with hands-on 3-month analytics experience in churn prediction, content trends, and e-commerce KPI modeling. Ready for interviews and rapid contributions.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white shadow-lg shadow-blue-500/25 shrink-0 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Connect With Atharv</span>
          </a>
        </div>

      </div>
    </section>
  );
};
