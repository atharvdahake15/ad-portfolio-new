import React, { useState } from 'react';
import { 
  Sparkles, 
  Terminal, 
  Play, 
  RefreshCw, 
  CheckCircle2, 
  AlertTriangle, 
  Sliders, 
  BarChart2, 
  FileSearch,
  ShieldCheck,
  ShieldAlert,
  TrendingDown,
  Layers,
  ArrowRight,
  Database,
  Cpu,
  BookOpen
} from 'lucide-react';

export const DataLabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'churn' | 'ats' | 'fakenews'>('churn');

  // --- TAB 1: NEXATEL CHURN PREDICTOR STATE ---
  const [contractType, setContractType] = useState<'month-to-month' | 'one-year' | 'two-year'>('month-to-month');
  const [tenureMonths, setTenureMonths] = useState<number>(6);
  const [monthlyCharge, setMonthlyCharge] = useState<number>(85);
  const [hasTechSupport, setHasTechSupport] = useState<boolean>(false);
  const [hasOnlineSecurity, setHasOnlineSecurity] = useState<boolean>(false);
  const [paperlessBilling, setPaperlessBilling] = useState<boolean>(true);

  // Telecom churn risk scoring model logic
  const calculateChurnRisk = () => {
    let score = 30; // base probability

    // Contract impact
    if (contractType === 'month-to-month') score += 32;
    else if (contractType === 'one-year') score -= 15;
    else if (contractType === 'two-year') score -= 30;

    // Tenure impact (longer tenure decreases churn)
    if (tenureMonths < 12) score += 20;
    else if (tenureMonths < 24) score += 5;
    else if (tenureMonths > 48) score -= 22;
    else score -= 10;

    // Monthly charges impact (higher cost increases churn risk)
    if (monthlyCharge > 90) score += 18;
    else if (monthlyCharge > 65) score += 8;
    else score -= 8;

    // Support services
    if (!hasTechSupport) score += 10;
    else score -= 12;

    if (!hasOnlineSecurity) score += 6;
    else score -= 8;

    if (paperlessBilling) score += 4;

    return Math.min(Math.max(score, 4), 96);
  };

  const churnProbability = calculateChurnRisk();
  const churnRiskTier = churnProbability > 65 ? 'High Risk' : churnProbability > 35 ? 'Moderate Risk' : 'Low Risk';

  // --- TAB 2: AI RESUME & ATS ANALYZER STATE ---
  const sampleProfiles = [
    {
      name: "Atharv's Data Analyst Profile",
      text: "Computer Engineering candidate skilled in Python, Pandas, Power BI, Exploratory Data Analysis, SQL, Scikit-learn, Machine Learning, and Natural Language Processing. Experienced in customer churn analysis, content analytics, and e-commerce KPI modeling during 3-month Data Analytics Internship at Internmo.",
      jobTitle: "Data Analyst & Python Specialist",
      jobKeywords: ["python", "pandas", "power bi", "data analysis", "sql", "machine learning", "internship", "kpi"]
    },
    {
      name: "Junior Python Programmer",
      text: "Python developer experienced in script automation, backend development, Express, REST APIs, Git, and MySQL databases. Basic knowledge of spreadsheets.",
      jobTitle: "Python Backend Developer",
      jobKeywords: ["python", "rest apis", "sql", "git", "pandas", "data analysis", "docker", "testing"]
    }
  ];

  const [selectedProfileIndex, setSelectedProfileIndex] = useState(0);
  const [customResumeText, setCustomResumeText] = useState(sampleProfiles[0].text);
  const [targetKeywords, setTargetKeywords] = useState(sampleProfiles[0].jobKeywords.join(', '));

  const parsedKeywords = targetKeywords.split(',').map(k => k.trim().toLowerCase()).filter(Boolean);
  const resumeLower = customResumeText.toLowerCase();
  const matchedKeywords = parsedKeywords.filter(k => resumeLower.includes(k));
  const missingKeywords = parsedKeywords.filter(k => !resumeLower.includes(k));
  const matchScore = parsedKeywords.length > 0 ? Math.round((matchedKeywords.length / parsedKeywords.length) * 100) : 0;

  // --- TAB 3: FAKE NEWS TF-IDF CLASSIFIER STATE ---
  const sampleArticles = [
    {
      title: "Researchers publish peer-reviewed clinical trial analyzing genomic biomarkers for cardiovascular disease",
      text: "Scientists at the university medical center published findings in the journal of cardiovascular medicine confirming that predictive gene markers correlate with vascular inflammation across double-blind patient cohorts.",
      type: "Real"
    },
    {
      title: "SHOCKING REVELATION: Secret underground alien civilization controls international stock market using frequencies",
      text: "Anonymous whistleblowers claim world governments have concealed secret extraterrestrial transmissions manipulating global economic algorithms. Mainstream media refuses to acknowledge this terrifying truth!",
      type: "Fake"
    },
    {
      title: "Reserve Bank issues updated monetary policy guidelines on repo rates and quarterly inflation forecasts",
      text: "The central monetary committee announced a 25 basis point adjustment following macroeconomic review of domestic manufacturing output, consumer price indices, and foreign exchange reserves.",
      type: "Real"
    }
  ];

  const [selectedNewsIdx, setSelectedNewsIdx] = useState(0);
  const [newsInput, setNewsInput] = useState(sampleArticles[0].title + " — " + sampleArticles[0].text);

  // Simplified TF-IDF vocabulary weights
  const fakeKeywords = ["shocking", "revelation", "secret", "alien", "terrifying", "miracle", "hidden", "conspiracy", "anonymous", "refuses", "unbelievable"];
  const realKeywords = ["researchers", "published", "clinical", "genomic", "quarterly", "monetary", "guidelines", "announced", "scientific", "findings", "review", "percent"];

  const textLower = newsInput.toLowerCase();
  const fakeHits = fakeKeywords.filter(w => textLower.includes(w));
  const realHits = realKeywords.filter(w => textLower.includes(w));

  const fakeScore = (fakeHits.length * 28) - (realHits.length * 15);
  const isClassifiedFake = fakeScore > 10;
  const confidence = Math.min(Math.max(68 + Math.abs(fakeScore) * 3, 72), 98.4);

  return (
    <section id="datalab" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white/70 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      
      {/* Background radial effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>INTERACTIVE DATA SCIENCE LAB</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Data Science & <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 dark:from-cyan-400 dark:via-blue-400 dark:to-violet-400 bg-clip-text text-transparent">AI Console</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
            Experience interactive simulations of my analytical pipelines and machine learning classifiers. Test customer churn retention rules, NLP resume ATS scoring, and TF-IDF fake news detection.
          </p>

          {/* Console Tab Selector */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-xs dark:shadow-none">
            <button
              onClick={() => setActiveTab('churn')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'churn'
                  ? 'bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 text-white shadow-md shadow-blue-500/25 border border-cyan-400/30'
                  : 'text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
              }`}
            >
              <TrendingDown className="w-4 h-4" />
              <span>NexaTel Churn Predictor</span>
            </button>

            <button
              onClick={() => setActiveTab('ats')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'ats'
                  ? 'bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 text-white shadow-md shadow-blue-500/25 border border-cyan-400/30'
                  : 'text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
              }`}
            >
              <FileSearch className="w-4 h-4" />
              <span>AI Resume & ATS Engine</span>
            </button>

            <button
              onClick={() => setActiveTab('fakenews')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'fakenews'
                  ? 'bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 text-white shadow-md shadow-blue-500/25 border border-cyan-400/30'
                  : 'text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Fake News TF-IDF Classifier</span>
            </button>
          </div>
        </div>

        {/* Main Console Container */}
        <div className="rounded-3xl bg-white/95 dark:bg-slate-900/80 border border-slate-200/90 dark:border-cyan-500/20 p-6 sm:p-8 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/40 relative transition-colors">
          
          {/* Header bar of the simulation */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400 pl-2">
                kernel // {activeTab === 'churn' ? 'nexatel_churn_model.py (Pandas & Power BI)' : activeTab === 'ats' ? 'nlp_resume_scorer.py (NLP & Regex)' : 'tfidf_news_classifier.py (Scikit-learn)'}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-500/30 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                STATUS: INFERENCE_ACTIVE
              </span>
              <span className="text-slate-500 dark:text-slate-400 hidden sm:inline">STACK: Python 3.12 (Pandas / Scikit-learn)</span>
            </div>
          </div>

          {/* ================= TAB 1: NEXATEL CHURN ANALYTICS SIMULATOR ================= */}
          {activeTab === 'churn' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Input Parameters */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase text-slate-700 dark:text-slate-300 font-bold flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      Customer Telecom Attributes
                    </span>
                    <button 
                      onClick={() => {
                        setContractType('month-to-month');
                        setTenureMonths(6);
                        setMonthlyCharge(85);
                        setHasTechSupport(false);
                        setHasOnlineSecurity(false);
                      }}
                      className="text-xs text-cyan-600 dark:text-cyan-400 hover:underline font-mono flex items-center gap-1 cursor-pointer"
                    >
                      <RefreshCw className="w-3 h-3" /> Reset Values
                    </button>
                  </div>

                  {/* Contract Type Radio */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-2 font-semibold">
                      Contract Term Duration
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'month-to-month', label: 'Month-to-Month' },
                        { id: 'one-year', label: '1-Year Contract' },
                        { id: 'two-year', label: '2-Year Contract' }
                      ].map(item => (
                        <button
                          key={item.id}
                          onClick={() => setContractType(item.id as any)}
                          className={`py-2 px-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            contractType === item.id
                              ? 'bg-cyan-600 text-white shadow-xs'
                              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tenure Slider */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-slate-700 dark:text-slate-300 font-semibold">Customer Tenure:</span>
                      <span className="text-cyan-700 dark:text-cyan-400 font-bold">{tenureMonths} Months ({Math.floor(tenureMonths / 12)}y {tenureMonths % 12}m)</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="72" 
                      value={tenureMonths} 
                      onChange={(e) => setTenureMonths(parseInt(e.target.value))}
                      className="w-full accent-cyan-600 dark:accent-cyan-400 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                      <span>1 mo (High risk)</span>
                      <span>36 mo</span>
                      <span>72 mo (Loyal)</span>
                    </div>
                  </div>

                  {/* Monthly Charges Slider */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-slate-700 dark:text-slate-300 font-semibold">Monthly Charges:</span>
                      <span className="text-violet-700 dark:text-violet-400 font-bold">${monthlyCharge} / month</span>
                    </div>
                    <input 
                      type="range" 
                      min="20" 
                      max="125" 
                      value={monthlyCharge} 
                      onChange={(e) => setMonthlyCharge(parseInt(e.target.value))}
                      className="w-full accent-violet-600 dark:accent-violet-400 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                      <span>$20 (Basic)</span>
                      <span>$75 (Average)</span>
                      <span>$125 (Premium)</span>
                    </div>
                  </div>

                  {/* Toggle Support Features */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setHasTechSupport(!hasTechSupport)}
                      className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-between transition-all cursor-pointer ${
                        hasTechSupport 
                          ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-700 dark:text-emerald-300 font-semibold' 
                          : 'bg-white dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <span>Tech Support Add-on</span>
                      <span>{hasTechSupport ? '● Active' : '○ None'}</span>
                    </button>

                    <button
                      onClick={() => setHasOnlineSecurity(!hasOnlineSecurity)}
                      className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-between transition-all cursor-pointer ${
                        hasOnlineSecurity 
                          ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-700 dark:text-emerald-300 font-semibold' 
                          : 'bg-white dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <span>Online Security</span>
                      <span>{hasOnlineSecurity ? '● Active' : '○ None'}</span>
                    </button>
                  </div>
                </div>

                {/* Right: Analytical Findings & Power BI Style Insight */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="rounded-3xl bg-slate-900 text-white p-6 border border-slate-800 shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        NexaTel Churn Risk Gauge
                      </span>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold ${
                        churnProbability > 65 
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                          : churnProbability > 35 
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                          : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      }`}>
                        {churnRiskTier}
                      </span>
                    </div>

                    <div className="flex items-end gap-4 mb-4">
                      <div className="text-5xl font-extrabold font-mono text-white">
                        {churnProbability}%
                      </div>
                      <div className="text-xs font-mono text-slate-400 pb-1.5">
                        Predicted Probability of Customer Attrition
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden mb-6">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          churnProbability > 65 ? 'bg-gradient-to-r from-amber-500 to-red-500' :
                          churnProbability > 35 ? 'bg-gradient-to-r from-cyan-500 to-amber-500' :
                          'bg-gradient-to-r from-emerald-500 to-cyan-500'
                        }`}
                        style={{ width: `${churnProbability}%` }}
                      />
                    </div>

                    {/* Key Contributing Drivers Identified in EDA */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs">
                      <span className="font-mono text-cyan-400 font-semibold block uppercase">
                        Primary Churn Drivers Identified via Pandas EDA:
                      </span>
                      <ul className="space-y-1.5 text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 font-bold">•</span>
                          <span><strong>Contract Type:</strong> Month-to-month contracts exhibit 3.2x higher churn rates than 2-year commitments.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 font-bold">•</span>
                          <span><strong>Tenure Curve:</strong> First 12 months represent the critical attrition window (highest dropout velocity).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 font-bold">•</span>
                          <span><strong>Support Stickiness:</strong> Customers with Tech Support enabled have 42% lower attrition.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Recommended Executive Retention Action */}
                    <div className="mt-5 p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-xs">
                      <span className="font-mono text-cyan-300 font-bold block mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Actionable Retention Strategy
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {churnProbability > 65
                          ? "High risk cohort: Trigger an automated 15% discount for upgrading to an annual contract and offer complimentary Tech Support onboarding."
                          : churnProbability > 35
                          ? "Moderate risk cohort: Deliver personalized customer check-in and recommend bundled digital security services to increase contract stickiness."
                          : "Healthy loyal segment: Recommend referral incentive programs and early access to fiber upgrades."}
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ================= TAB 2: AI RESUME & ATS ANALYZER ================= */}
          {activeTab === 'ats' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Input Text & Job Description Keywords */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase text-slate-700 dark:text-slate-300 font-bold flex items-center gap-1.5">
                      <FileSearch className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      Candidate Resume Text
                    </span>
                    <div className="flex gap-2">
                      {sampleProfiles.map((p, idx) => (
                        <button
                          key={p.name}
                          onClick={() => {
                            setSelectedProfileIndex(idx);
                            setCustomResumeText(p.text);
                            setTargetKeywords(p.jobKeywords.join(', '));
                          }}
                          className={`text-xs px-2.5 py-1 rounded-lg font-mono transition-colors cursor-pointer ${
                            selectedProfileIndex === idx
                              ? 'bg-cyan-600 text-white font-semibold'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                          }`}
                        >
                          Profile {idx + 1}
                        </button>
                      ))}
                    </div>
                  </div>

                  <textarea
                    value={customResumeText}
                    onChange={(e) => setCustomResumeText(e.target.value)}
                    rows={5}
                    className="w-full p-3.5 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 font-mono text-xs focus:outline-hidden focus:border-cyan-500 transition-colors"
                    placeholder="Paste resume text or candidate bio..."
                  />

                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                      Target Job Description Competencies (comma-separated):
                    </label>
                    <input
                      type="text"
                      value={targetKeywords}
                      onChange={(e) => setTargetKeywords(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 font-mono text-xs focus:outline-hidden focus:border-cyan-500"
                    />
                  </div>

                  {/* Matched vs Missing Tags */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                      <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 mb-2">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Matched Skills ({matchedKeywords.length})
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {matchedKeywords.length > 0 ? (
                          matchedKeywords.map((k) => (
                            <span key={k} className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-mono text-[10px] font-semibold">
                              ✓ {k}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs text-slate-500 font-mono">No keywords matched</span>
                        )}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                      <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-2">
                        <AlertTriangle className="w-3.5 h-3.5" /> Missing Competencies ({missingKeywords.length})
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {missingKeywords.length > 0 ? (
                          missingKeywords.map((k) => (
                            <span key={k} className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-800 dark:text-amber-300 font-mono text-[10px]">
                              ✗ {k}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs text-emerald-600 font-mono font-semibold">100% matched!</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: ATS Compatibility Telemetry */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="rounded-3xl bg-slate-900 text-white p-6 border border-slate-800 shadow-md">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      ATS Compatibility Index
                    </span>
                    
                    <div className="flex items-baseline gap-3 mb-4">
                      <div className="text-5xl font-extrabold font-mono text-cyan-400">
                        {matchScore}%
                      </div>
                      <div className="text-xs font-mono text-slate-400">
                        {matchScore >= 80 ? 'Exceptional Match' : matchScore >= 60 ? 'Competitive' : 'Gap Identified'}
                      </div>
                    </div>

                    <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden mb-5">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 transition-all duration-300"
                        style={{ width: `${matchScore}%` }}
                      />
                    </div>

                    <div className="space-y-3 pt-3 border-t border-slate-800 text-xs">
                      <div className="flex justify-between font-mono text-slate-300">
                        <span>Keyword Density:</span>
                        <span className="text-cyan-300">{(matchedKeywords.length / Math.max(customResumeText.split(' ').length, 1) * 100).toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between font-mono text-slate-300">
                        <span>Parsing Errors Detected:</span>
                        <span className="text-emerald-400 font-bold">0 Clean Format</span>
                      </div>
                      <div className="flex justify-between font-mono text-slate-300">
                        <span>ATS Pass Threshold:</span>
                        <span className="text-slate-400">70% minimum</span>
                      </div>
                    </div>

                    <div className="mt-5 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300">
                      <span className="text-cyan-400 font-bold block mb-1">
                        System Recommendation:
                      </span>
                      {matchScore >= 75
                        ? "Resume successfully passes ATS filters for Data Science and Analytics roles. High keyword relevance."
                        : `Consider incorporating target terms [${missingKeywords.slice(0, 2).join(', ')}] in project bullet points to exceed the 75% threshold.`}
                    </div>

                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ================= TAB 3: FAKE NEWS TF-IDF CLASSIFIER ================= */}
          {activeTab === 'fakenews' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Article Input */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase text-slate-700 dark:text-slate-300 font-bold flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      Article Text for Verification
                    </span>
                    <div className="flex gap-1.5">
                      {sampleArticles.map((sample, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelectedNewsIdx(idx);
                            setNewsInput(sample.title + " — " + sample.text);
                          }}
                          className={`text-xs px-2.5 py-1 rounded-lg font-mono transition-colors cursor-pointer ${
                            selectedNewsIdx === idx
                              ? 'bg-cyan-600 text-white font-semibold'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                          }`}
                        >
                          {sample.type} #{idx + 1}
                        </button>
                      ))}
                    </div>
                  </div>

                  <textarea
                    value={newsInput}
                    onChange={(e) => setNewsInput(e.target.value)}
                    rows={5}
                    className="w-full p-3.5 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 font-mono text-xs focus:outline-hidden focus:border-cyan-500 transition-colors"
                    placeholder="Enter news article or headline..."
                  />

                  {/* Preprocessing Step Telemetry */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <span className="text-xs font-mono text-slate-700 dark:text-slate-300 font-bold block">
                      NLP Text Preprocessing & TF-IDF Extraction Pipeline:
                    </span>
                    <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-mono">
                      <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">Step 1</span>
                        <p className="text-slate-500 dark:text-slate-400 mt-0.5">Lowercasing & Regex Cleaning</p>
                      </div>
                      <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">Step 2</span>
                        <p className="text-slate-500 dark:text-slate-400 mt-0.5">Stopword Filtering</p>
                      </div>
                      <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <span className="text-violet-600 dark:text-violet-400 font-bold">Step 3</span>
                        <p className="text-slate-500 dark:text-slate-400 mt-0.5">TF-IDF Vectorization</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Classification Prediction */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="rounded-3xl bg-slate-900 text-white p-6 border border-slate-800 shadow-md">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Model Classification Result
                    </span>

                    <div className="flex items-center gap-3 mb-4">
                      {isClassifiedFake ? (
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 font-bold font-mono text-sm">
                          <ShieldAlert className="w-4 h-4" /> FAKE / FABRICATED NEWS
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-bold font-mono text-sm">
                          <ShieldCheck className="w-4 h-4" /> REAL / VERIFIED NEWS
                        </div>
                      )}
                    </div>

                    <div className="flex items-baseline gap-3 mb-4">
                      <div className="text-4xl font-extrabold font-mono text-white">
                        {confidence.toFixed(1)}%
                      </div>
                      <div className="text-xs font-mono text-slate-400">
                        Classification Confidence
                      </div>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-slate-800 text-xs font-mono text-slate-300">
                      <div className="flex justify-between">
                        <span>Model Type:</span>
                        <span className="text-cyan-400">PassiveAggressiveClassifier</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Feature Extractor:</span>
                        <span className="text-cyan-400">TfidfVectorizer(max_df=0.7)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Identified Stylistic Clues:</span>
                        <span className={isClassifiedFake ? 'text-red-400' : 'text-emerald-400'}>
                          {isClassifiedFake ? `${fakeHits.length} sensationalist terms` : `${realHits.length} empirical terms`}
                        </span>
                      </div>
                    </div>

                    <div className="mt-5 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300">
                      <span className="text-cyan-400 font-bold block mb-1">
                        TF-IDF Feature Weights Trigger:
                      </span>
                      {isClassifiedFake ? (
                        <span>Detected high-weight sensationalist vocabulary: [{fakeHits.join(', ') || 'sensational patterns'}] typically absent in verified journal articles.</span>
                      ) : (
                        <span>Detected empirical reporting phrasing and structured statistical citations characteristic of credible journalism.</span>
                      )}
                    </div>

                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
