import React from 'react';
import { 
  X, 
  Github, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenDataLab?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenDataLab }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-cyan-500/30 p-6 sm:p-8 shadow-2xl text-slate-900 dark:text-slate-100"
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

        {/* Category & Title */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30">
            {project.category}
          </span>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Case Study • Atharv Dahake
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-cyan-700 dark:text-cyan-300 font-medium mb-6">
          {project.tagline}
        </p>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-red-500/5 dark:bg-slate-900/80 border border-red-500/20">
            <span className="text-xs font-mono text-red-600 dark:text-red-400 uppercase tracking-wider block mb-1 font-bold flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5" /> Problem Context
            </span>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-500/5 dark:bg-slate-900/80 border border-emerald-500/20">
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Implemented Solution
            </span>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold mb-2">
            Technical Overview
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-900/40 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
            {project.description}
          </p>
        </div>

        {/* Key Features List */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase text-cyan-700 dark:text-cyan-400 font-semibold mb-3 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> Key Features & Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feature, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System Architecture Stages */}
        {project.architecture && (
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase text-violet-700 dark:text-violet-400 font-semibold mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-violet-600 dark:text-violet-400" /> System Architecture & Data Flow
            </h4>
            <div className="space-y-2">
              {project.architecture.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2"
                >
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">[{idx + 1}]</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Pills */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold mb-3">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-xs font-mono text-slate-700 dark:text-slate-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && project.githubUrl !== '#' ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 transition-all font-mono"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>View Source Repository</span>
              </a>
            ) : null}

            {project.demoType && (
              <a
                href="#datalab"
                onClick={() => {
                  onClose();
                  if (onOpenDataLab) onOpenDataLab();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-md transition-all font-mono cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch Interactive Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
