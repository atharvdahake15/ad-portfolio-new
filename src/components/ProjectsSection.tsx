import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  FolderGit2, 
  TrendingDown,
  BarChart3,
  ShoppingCart,
  FileSearch,
  ShieldCheck,
  Eye,
  Database
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('All');

  const filterTabs = [
    'All', 
    'Data Analytics & BI', 
    'Data Science & NLP', 
    'Machine Learning & NLP'
  ];

  const filteredProjects = filter === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'nexatel-churn-analytics': return <TrendingDown className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'streamflix-content-analytics': return <BarChart3 className="w-5 h-5 text-violet-600 dark:text-violet-400" />;
      case 'indiakart-ecommerce-analytics': return <ShoppingCart className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'ai-resume-analyzer': return <FileSearch className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'fake-news-detection-system': return <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      default: return <FolderGit2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-50/70 dark:bg-[#070b14] border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>PORTFOLIO CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 dark:from-cyan-400 dark:via-blue-400 dark:to-violet-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
            Real-world data analytics pipelines, exploratory data analysis, business intelligence dashboards, and machine learning text processing built with Python, Pandas, Power BI, and Scikit-learn.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all duration-200 cursor-pointer ${
                  filter === tab
                    ? 'bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 text-white shadow-md shadow-blue-500/25 border border-cyan-400/40'
                    : 'bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-xs dark:shadow-none'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-white/90 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 hover:border-cyan-500/40 p-7 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-lg shadow-slate-200/50 dark:shadow-xl dark:shadow-cyan-950/20 relative overflow-hidden"
            >
              {/* Subtle top glowing line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500 group-hover:via-blue-500 group-hover:to-violet-500 transition-all duration-500" />

              <div>
                {/* Header row: Category & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-500/40 transition-all shadow-xs">
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {project.demoType && (
                    <a
                      href="#datalab"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 bg-cyan-500/10 dark:bg-cyan-950/40 px-2.5 py-1 rounded-lg border border-cyan-500/30 transition-colors font-medium cursor-pointer"
                    >
                      <Sparkles className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                      <span>Interactive Demo</span>
                    </a>
                  )}
                </div>

                {/* Project Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-700 dark:text-cyan-400 font-mono mb-4 font-medium">
                  {project.tagline}
                </p>

                {/* Problem & Solution Teaser */}
                <div className="mb-5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-2">
                  <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    <span className="text-slate-500 dark:text-slate-400 font-bold font-mono text-[11px] uppercase mr-1">Problem:</span>
                    {project.problem}
                  </div>
                  <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-200 dark:border-slate-800/60">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold font-mono text-[11px] uppercase mr-1">Solution:</span>
                    {project.solution}
                  </div>
                </div>

                {/* Key Features Bullet Points */}
                <div className="mb-6 space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-semibold">
                    Core Insights & Technical Scope
                  </span>
                  <ul className="space-y-1.5">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-cyan-500/10 dark:bg-cyan-500/15 hover:bg-cyan-500/20 dark:hover:bg-cyan-500/25 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Case Study</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 transition-colors shadow-xs"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
