import React, { useState } from 'react';
import { 
  Code2, 
  BrainCircuit, 
  BarChart3, 
  Database, 
  Terminal, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Cpu,
  FileSpreadsheet
} from 'lucide-react';
import { PORTFOLIO_DATA, SkillCategory } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  const categories = ['All', ...PORTFOLIO_DATA.skillsCategories.map(c => c.title)];

  const filteredCategories = selectedCategory === 'All'
    ? PORTFOLIO_DATA.skillsCategories
    : PORTFOLIO_DATA.skillsCategories.filter(c => c.title === selectedCategory);


  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-50/70 dark:bg-[#070b14] border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
            <Layers className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="bg-gradient-to-r from-cyan-600 to-violet-600 dark:from-cyan-400 dark:to-violet-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
            Practical skills verified through coursework, project development, and certified industry simulations. Organized by functional engineering domain without arbitrary ratings.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 text-white shadow-md shadow-blue-500/25 border border-cyan-400/40'
                    : 'bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-xs dark:shadow-none'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Categories Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl bg-white/90 dark:bg-slate-900/50 border border-slate-200/90 dark:border-slate-800 hover:border-cyan-500/40 dark:hover:border-cyan-500/30 p-6 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-none"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {category.skills.length} core competencies
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-3 rounded-2xl border transition-all duration-200 ${
                        skill.highlight 
                          ? 'bg-slate-50 dark:bg-slate-950/80 border-cyan-500/30 hover:border-cyan-400/60 shadow-xs dark:shadow-none' 
                          : 'bg-white/60 dark:bg-slate-950/40 border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-slate-200 flex items-center gap-1.5">
                          {skill.highlight && <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />}
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400 font-medium">
                          {skill.categoryTag}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};
