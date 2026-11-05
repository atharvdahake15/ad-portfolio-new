import React from 'react';
import { 
  Award, 
  Calendar, 
  Eye, 
  CheckCircle2,
  FileCheck2
} from 'lucide-react';
import { PORTFOLIO_DATA, Certificate } from '../data/portfolioData';

interface CertificationsSectionProps {
  onSelectCertificate: (cert: Certificate) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ onSelectCertificate }) => {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-50/70 dark:bg-[#070b14] border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-semibold mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>INDUSTRY RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Verified <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 dark:from-cyan-400 dark:via-blue-400 dark:to-violet-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
            Certified technical credentials issued by enterprise institutions including TATA, Deloitte, HP, and TCSion. Click any card to inspect the verified certificate and download the official PDF.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PORTFOLIO_DATA.certifications.map((cert) => (
            <div
              key={cert.id}
              onClick={() => onSelectCertificate(cert)}
              className="rounded-3xl bg-white/90 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 hover:border-cyan-500/40 p-6 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-lg shadow-slate-200/50 dark:shadow-xl dark:shadow-cyan-950/20 cursor-pointer relative overflow-hidden"
            >
              {/* Top Accent Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500 group-hover:via-blue-500 group-hover:to-violet-500 transition-all duration-300" />

              <div>
                {/* Certificate Image Thumbnail */}
                <div className="relative mb-5 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex items-center justify-center p-3 h-44 group-hover:border-cyan-500/30 transition-colors">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center backdrop-blur-xs transition-opacity">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-600 text-white font-mono text-xs font-bold shadow-lg">
                      <Eye className="w-3.5 h-3.5" /> Preview Certificate
                    </span>
                  </div>
                </div>

                {/* Issuer Badge & Year */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 dark:bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-500/30">
                    {cert.issuer}
                  </span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> {cert.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Verified Skills Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skillsCovered.slice(0, 3).map((skill, i) => (
                    <span 
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Verified Credential
                </span>
                <span className="text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 font-mono font-semibold flex items-center gap-1">
                  Inspect &rarr;
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
