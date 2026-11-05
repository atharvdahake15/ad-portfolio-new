import React from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  Calendar, 
  Building2, 
  CheckCircle2
} from 'lucide-react';
import { Certificate } from '../data/portfolioData';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-cyan-500/30 p-6 sm:p-8 shadow-2xl text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Details */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30">
            {certificate.credentialTag}
          </span>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> {certificate.year}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1">
          {certificate.title}
        </h3>
        <p className="text-sm font-mono text-cyan-700 dark:text-cyan-400 flex items-center gap-2 mb-6 font-semibold">
          <Building2 className="w-4 h-4" /> Issuing Organization: {certificate.issuer}
        </p>

        {/* Certificate Image Preview Card */}
        <div className="mb-6 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex items-center justify-center p-3 relative group">
          <img 
            src={certificate.image} 
            alt={certificate.title}
            className="w-full max-h-80 object-contain rounded-xl"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </div>

        {/* Description & Competencies */}
        <div className="mb-6 space-y-4">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {certificate.description}
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold mb-2.5">
              Verified Technical Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {certificate.skillsCovered.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-xs font-mono text-cyan-800 dark:text-cyan-300 flex items-center gap-1.5 font-medium"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={certificate.pdfUrl}
              download
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-md font-mono transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Verified Certificate PDF</span>
            </a>

            <a
              href={certificate.pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-mono transition-all cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in New Tab</span>
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
