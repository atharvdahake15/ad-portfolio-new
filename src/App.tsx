import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { DataLabSection } from './components/DataLabSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceEducationSection } from './components/ExperienceEducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CertificateModal } from './components/CertificateModal';
import { ResumeModal } from './components/ResumeModal';
import { FuturisticLoader } from './components/FuturisticLoader';
import { Project, Certificate } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <ThemeProvider>
      {/* 0 to 100% Crazy Futuristic Boot Loader */}
      {isLoading && (
        <FuturisticLoader onComplete={() => setIsLoading(false)} durationMs={1900} />
      )}

      <div className="min-h-screen bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-800 dark:selection:text-cyan-200 transition-colors duration-300">
        {/* Sticky Glassmorphic Navbar */}
        <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section */}
          <HeroSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

          {/* About Section */}
          <AboutSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

          {/* Skills Section */}
          <SkillsSection />

          {/* Interactive Data Science & AI Lab Console */}
          <DataLabSection />

          {/* Featured Case-Study Projects */}
          <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

          {/* Experience & Education Timeline */}
          <ExperienceEducationSection />

          {/* Verified Certifications Showcase */}
          <CertificationsSection onSelectCertificate={(cert) => setSelectedCertificate(cert)} />

          {/* Functional Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer 
          onOpenResumeModal={() => setIsResumeModalOpen(true)} 
        />

        {/* Modals */}
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
          onOpenDataLab={() => {
            const el = document.getElementById('datalab');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <CertificateModal 
          certificate={selectedCertificate} 
          onClose={() => setSelectedCertificate(null)} 
        />

        <ResumeModal 
          isOpen={isResumeModalOpen} 
          onClose={() => setIsResumeModalOpen(false)} 
        />
      </div>
    </ThemeProvider>
  );
}
