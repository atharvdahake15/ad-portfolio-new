import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone, 
  Send, 
  Check, 
  Copy, 
  MessageSquare,
  Sparkles,
  Instagram,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please write a message of at least 10 characters';
    }
    return newErrors;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFormSubmitted(false);
      return;
    }

    setErrors({});
    setFormSubmitted(true);

    // Launch email client via mailto with pre-filled content
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white/80 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 dark:from-cyan-400 dark:via-blue-400 dark:to-violet-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
            Have an internship opening, data analytics challenge, or collaboration proposal? Connect directly through email, phone, or the validated contact form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Verified Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Status Pill */}
            <div className="p-6 rounded-3xl bg-white/95 dark:bg-slate-900/60 border border-slate-200/90 dark:border-cyan-500/25 backdrop-blur-xl shadow-md dark:shadow-none">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-semibold block mb-2">
                Availability Status
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Ready for 2026 Internship & Analyst Roles
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Available for internships in Data Science, Data Analytics, Python Development, and Machine Learning. Based in Nagpur, Maharashtra; open to remote and on-site opportunities.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/40 px-3 py-1.5 rounded-xl border border-emerald-500/30 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Immediate Interview Availability</span>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Email Card with Copy button */}
              <div className="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/50 border border-slate-200/90 dark:border-slate-800 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">Direct Email</span>
                    <a 
                      href={PORTFOLIO_DATA.profile.social.email}
                      className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors font-mono"
                    >
                      {PORTFOLIO_DATA.profile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/50 border border-slate-200/90 dark:border-slate-800 flex items-center gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">Direct Phone</span>
                  <a 
                    href={`tel:${PORTFOLIO_DATA.profile.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors font-mono"
                  >
                    {PORTFOLIO_DATA.profile.phone}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/50 border border-slate-200/90 dark:border-slate-800 flex items-center gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">Location Base</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                    {PORTFOLIO_DATA.profile.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/50 border border-slate-200/90 dark:border-slate-800 shadow-xs">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-3 font-semibold uppercase">
                Professional Networks
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={PORTFOLIO_DATA.profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-500/10 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30 hover:bg-blue-500/20 transition-colors"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 transition-colors"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-pink-500/10 dark:bg-pink-500/15 text-pink-700 dark:text-pink-300 border border-pink-500/30 hover:bg-pink-500/20 transition-colors"
                >
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Functional Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/95 dark:bg-slate-900/70 border border-slate-200/90 dark:border-cyan-500/20 backdrop-blur-xl shadow-xl shadow-slate-200/60 dark:shadow-2xl dark:shadow-black/30">
              
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-semibold block mb-1">
                  Direct Dispatch
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Send a Message to Atharv
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Fill in your inquiry details below. Submitting will launch your verified email client with pre-formatted message parameters.
                </p>
              </div>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Opening your email client...</span>
                    <span>If your client does not open automatically, reach Atharv directly at <strong className="font-mono">{PORTFOLIO_DATA.profile.email}</strong>.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border text-slate-900 dark:text-white text-xs font-medium focus:outline-hidden focus:border-cyan-500 transition-colors ${
                        errors.name ? 'border-red-500 bg-red-50/20' : 'border-slate-300 dark:border-slate-800'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-500 font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. rahul@company.com"
                      className={`w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border text-slate-900 dark:text-white text-xs font-medium focus:outline-hidden focus:border-cyan-500 transition-colors ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-300 dark:border-slate-800'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-500 font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                    Inquiry Subject *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: '' });
                    }}
                    placeholder="e.g. Data Analytics Internship Opportunity / Interview Invitation"
                    className={`w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border text-slate-900 dark:text-white text-xs font-medium focus:outline-hidden focus:border-cyan-500 transition-colors ${
                      errors.subject ? 'border-red-500 bg-red-50/20' : 'border-slate-300 dark:border-slate-800'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-red-500 font-mono mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Describe the opportunity, role requirements, or project you'd like to discuss..."
                    className={`w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border text-slate-900 dark:text-white text-xs font-medium focus:outline-hidden focus:border-cyan-500 transition-colors ${
                      errors.message ? 'border-red-500 bg-red-50/20' : 'border-slate-300 dark:border-slate-800'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-500 font-mono mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Message</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
