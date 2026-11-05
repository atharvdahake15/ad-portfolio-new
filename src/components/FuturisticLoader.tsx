import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, ShieldCheck, Zap, Database, Activity } from 'lucide-react';

interface FuturisticLoaderProps {
  onComplete: () => void;
  durationMs?: number;
}

const TELEMETRY_STAGES = [
  { threshold: 0, text: "INITIALIZING DATA SCIENCE KERNEL v4.18..." },
  { threshold: 22, text: "IMPORTING PANDAS, NUMPY & SCIKIT-LEARN MATRICES..." },
  { threshold: 48, text: "CONNECTING POWER BI & TRANSACTION TELEMETRY..." },
  { threshold: 74, text: "COMPILING ATS RESUME & TF-IDF CLASSIFIERS..." },
  { threshold: 92, text: "DECRYPTING VERIFIED CREDENTIALS (TATA, TCS, DELOITTE)..." },
  { threshold: 100, text: "SYSTEM SYNCHRONIZED // ATHARV DAHAKE PORTFOLIO ONLINE" }
];

export const FuturisticLoader: React.FC<FuturisticLoaderProps> = ({
  onComplete,
  durationMs = 1900
}) => {
  const [progress, setProgress] = useState<number>(0);
  const [isFinishing, setIsFinishing] = useState<boolean>(false);
  const [currentStatus, setCurrentStatus] = useState<string>(TELEMETRY_STAGES[0].text);

  useEffect(() => {
    const startTime = performance.now();
    let animationFrameId: number;

    const updateLoader = (now: number) => {
      const elapsed = Math.max(0, now - startTime);
      const rawProgress = Math.min(elapsed / durationMs, 1);
      
      // Futuristic easing curve: quick jump, steady cruise, micro-pause at 99%, snap to 100%
      let easedProgress = 0;
      if (rawProgress < 0.3) {
        easedProgress = rawProgress * 1.2;
      } else if (rawProgress < 0.85) {
        easedProgress = 0.36 + (rawProgress - 0.3) * 0.95;
      } else {
        easedProgress = 0.88 + (rawProgress - 0.85) * 0.8;
      }

      const currentPct = Math.max(0, Math.min(Math.floor(easedProgress * 100), rawProgress >= 1 ? 100 : 99));
      setProgress(currentPct);

      // Update telemetry stage
      for (let i = TELEMETRY_STAGES.length - 1; i >= 0; i--) {
        if (currentPct >= TELEMETRY_STAGES[i].threshold) {
          setCurrentStatus(TELEMETRY_STAGES[i].text);
          break;
        }
      }

      if (rawProgress < 1) {
        animationFrameId = requestAnimationFrame(updateLoader);
      } else {
        setProgress(100);
        setCurrentStatus(TELEMETRY_STAGES[TELEMETRY_STAGES.length - 1].text);
        
        // 250ms delay at 100% to let user see "SYSTEM ONLINE" flash, then fade out
        setTimeout(() => {
          setIsFinishing(true);
          setTimeout(() => {
            onComplete();
          }, 450);
        }, 220);
      }
    };

    animationFrameId = requestAnimationFrame(updateLoader);

    // Keyboard ESC listener to skip immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setProgress(100);
        setIsFinishing(true);
        setTimeout(onComplete, 200);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [durationMs, onComplete]);

  const handleSkip = () => {
    setProgress(100);
    setIsFinishing(true);
    setTimeout(onComplete, 180);
  };

  return (
    <div 
      className={`fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#040711] text-slate-100 select-none overflow-hidden transition-all duration-500 ${
        isFinishing ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Cyber Grid & Radiant Spotlights */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6, 182, 212, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Radial Energy Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-2xl pointer-events-none" />

      {/* Cyber Corner HUD Brackets */}
      <div className="absolute top-6 left-6 flex items-center space-x-2 text-[10px] font-mono text-cyan-500/70 tracking-widest uppercase">
        <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
        <span>[SYS.BOOT // ATHARV_DATA_OS]</span>
      </div>

      <div className="absolute top-6 right-6 flex items-center space-x-3">
        <div className="hidden sm:flex items-center space-x-2 text-[10px] font-mono text-slate-400 border border-slate-800 bg-slate-900/60 px-2.5 py-1 rounded">
          <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
          <span>SYS.LATENCY: 0.4ms</span>
        </div>
        <button
          onClick={handleSkip}
          className="text-[11px] font-mono text-cyan-400 hover:text-cyan-200 border border-cyan-500/30 hover:border-cyan-400 bg-cyan-950/40 hover:bg-cyan-900/40 px-3 py-1 rounded transition-colors cursor-pointer"
        >
          SKIP [ESC]
        </button>
      </div>

      <div className="absolute bottom-6 left-6 text-[10px] font-mono text-slate-500">
        CORE: PYTHON 3.12 | PANDAS | POWER BI | SCIKIT-LEARN
      </div>

      <div className="absolute bottom-6 right-6 text-[10px] font-mono text-slate-500">
        AUTH: VERIFIED CREDENTIALS
      </div>

      {/* Main Center Console */}
      <div className="relative w-full max-w-xl px-6 flex flex-col items-center">
        {/* Futuristic Avatar / Logo Hex HUD */}
        <div className="relative mb-8 flex items-center justify-center">
          {/* Outer Rotating Cyber Rings */}
          <div className="absolute w-28 h-28 border border-cyan-500/30 rounded-full border-t-cyan-400 border-r-transparent animate-spin" style={{ animationDuration: '3s' }} />
          <div className="absolute w-24 h-24 border border-violet-500/30 rounded-full border-b-violet-400 border-l-transparent animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
          
          {/* Central Portrait or Cyber Shield */}
          <div className="w-20 h-20 rounded-full bg-slate-900 border-2 border-cyan-400/80 shadow-[0_0_30px_rgba(6,182,212,0.4)] overflow-hidden flex items-center justify-center relative z-10">
            <img 
              src="/adk.png" 
              alt="Atharv Dahake" 
              className="w-full h-full object-cover object-top filter brightness-105 contrast-105"
              onError={(e) => {
                // Fallback icon if image path behaves differently
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          {/* Micro Status Dot */}
          <div className="absolute -bottom-1 -right-1 z-20 w-4 h-4 bg-[#040711] rounded-full flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          </div>
        </div>

        {/* Identity & Subtitle */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-2">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Atharv Dahake // Data Science & Analytics</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
            <span>Portfolio Intelligence System</span>
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          </h2>
        </div>

        {/* Futuristic Big Monospace Counter */}
        <div className="w-full flex items-baseline justify-between mb-2 font-mono">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-slate-300 font-semibold tracking-wider">BOOTSTRAP SEQUENCE</span>
          </div>
          
          <div className="flex items-baseline">
            <span className="text-4xl sm:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">
              {progress.toString().padStart(2, '0')}
            </span>
            <span className="text-xl sm:text-2xl font-bold text-cyan-500 ml-1">%</span>
          </div>
        </div>

        {/* =========================================================================
            THE CRAZY 0% TO 100% FUTURISTIC LINE
            ========================================================================= */}
        <div className="w-full relative py-2">
          {/* Top Ticks / Scale Marks */}
          <div className="w-full flex justify-between text-[9px] font-mono text-slate-600 mb-1 px-0.5">
            <span className={progress >= 0 ? "text-cyan-400" : ""}>00</span>
            <span className={progress >= 25 ? "text-cyan-400" : ""}>25</span>
            <span className={progress >= 50 ? "text-cyan-400" : ""}>50</span>
            <span className={progress >= 75 ? "text-cyan-400" : ""}>75</span>
            <span className={progress >= 100 ? "text-cyan-400 font-bold" : ""}>100</span>
          </div>

          {/* Line Track Container */}
          <div className="relative w-full h-3.5 bg-slate-950 rounded-full border border-slate-800/80 p-0.5 overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]">
            {/* Grid Pattern inside track */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: 'repeating-linear-gradient(90deg, #38bdf8 0, #38bdf8 2px, transparent 2px, transparent 8px)'
              }}
            />

            {/* The Animated High-Voltage Progress Beam */}
            <div 
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 relative transition-all duration-75 ease-out shadow-[0_0_20px_rgba(6,182,212,0.8)]"
              style={{ width: `${progress}%` }}
            >
              {/* Laser Head Highlight at current % */}
              {progress > 0 && (
                <div className="absolute right-0 top-0 bottom-0 w-3 bg-white rounded-full shadow-[0_0_15px_#ffffff,0_0_30px_#38bdf8] animate-pulse" />
              )}
            </div>
          </div>

          {/* Underglow Reflection */}
          <div 
            className="h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/60 to-violet-500/0 rounded-full blur-sm transition-all duration-75 mt-1"
            style={{ width: `${progress}%`, marginLeft: 'auto', marginRight: 'auto' }}
          />
        </div>

        {/* Live Terminal Telemetry Output */}
        <div className="w-full mt-4 bg-slate-950/80 border border-slate-800/80 rounded-lg p-3 font-mono text-xs shadow-xl backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-1.5 mb-2 text-[10px] text-slate-500">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Zap className="w-3 h-3 text-cyan-400 fill-cyan-400" />
              LIVE TELEMETRY STREAM
            </span>
            <span className="text-slate-400">
              {progress < 100 ? 'STATUS: MOUNTING' : 'STATUS: READY'}
            </span>
          </div>

          <div className="flex items-center space-x-2 text-slate-300">
            <span className="text-cyan-400 font-bold">{">"}</span>
            <span className="truncate tracking-wide text-cyan-200">
              {currentStatus}
            </span>
            <span className="inline-block w-1.5 h-3.5 bg-cyan-400 animate-pulse ml-1" />
          </div>
        </div>

        {/* Micro Specs Under Console */}
        <div className="w-full flex items-center justify-between text-[10px] font-mono text-slate-500 mt-3 px-1">
          <div className="flex items-center gap-1">
            <Database className="w-3 h-3 text-slate-600" />
            <span>NexaTel · StreamFlix · IndiaKart</span>
          </div>
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-500" />
            <span>Ready for Netlify / Vercel</span>
          </div>
        </div>
      </div>
    </div>
  );
};
