import React from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  Mail, 
  Phone, 
  MapPin, 
  Terminal 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-cyan-500/30 p-6 sm:p-8 shadow-2xl text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close resume modal"
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Details */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30">
            OFFICIAL RESUME
          </span>
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" /> Verified Profile • 2026
          </span>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl overflow-hidden border border-cyan-500/40 shadow-xs shrink-0 bg-slate-100 dark:bg-slate-900">
            <img 
              src={PORTFOLIO_DATA.profile.avatarUrl} 
              alt="Atharv Dahake" 
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-0.5">
              {PORTFOLIO_DATA.profile.name}
            </h3>
            <p className="text-sm font-mono text-cyan-700 dark:text-cyan-300 font-semibold">
              {PORTFOLIO_DATA.profile.role}
            </p>
          </div>
        </div>

        {/* Quick Contact Line */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 mb-6">
          <div className="flex items-center gap-1.5 truncate">
            <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
            <span className="truncate">{PORTFOLIO_DATA.profile.email}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400 shrink-0" />
            <span>{PORTFOLIO_DATA.profile.phone}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
            <span>Nagpur, India</span>
          </div>
        </div>

        {/* Summary Card */}
        <div className="mb-6 space-y-4">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong className="text-cyan-700 dark:text-cyan-300 font-mono block mb-1">Professional Profile Summary:</strong>
            {PORTFOLIO_DATA.profile.heroIntro}
          </div>

          {/* Internship Experience */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> Recent Internship
            </h4>
            <div className="font-bold text-sm text-slate-900 dark:text-white">
              Data Analytics Intern — Internmo (3-Month Duration)
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
              Analyzed telecommunications customer churn patterns, evaluated streaming media content preferences for catalog optimization, and modeled e-commerce transactional sales performance with Python, Pandas, and Power BI dashboards.
            </p>
          </div>

          {/* Education Highlight */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Education
            </h4>
            <div className="font-bold text-sm text-slate-900 dark:text-white">
              Bachelor of Engineering (B.E.) — Computer Engineering
            </div>
            <div className="text-xs text-cyan-700 dark:text-cyan-400 font-mono mt-0.5 font-medium">
              Jagadamba College of Engineering and Technology (Currently Pursuing)
            </div>
          </div>

          {/* Core Technical Highlights */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-violet-600 dark:text-violet-400" /> Core Technical Strengths
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span>Python (Pandas, NumPy, Scikit-learn)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span>Business Intelligence (Power BI, Advanced Excel)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span>Customer Churn & E-Commerce KPI Analytics</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span>Machine Learning & NLP (TF-IDF Text Classification)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span>Relational Databases (SQL, MySQL, MongoDB)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span>Version Control (Git & GitHub: @atharvdahake15)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.profile.resumeUrl}
              download="Atharv_Dahake_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white shadow-lg shadow-blue-500/25 font-mono transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Resume (PDF)</span>
            </a>

            <a
              href={PORTFOLIO_DATA.profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-mono transition-all cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View In Full Tab</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
