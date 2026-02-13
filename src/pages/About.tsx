import React from 'react';
import { ShieldCheck, Award, Microscope, Activity } from 'lucide-react';
import { SectionTitle, Card } from '../components/UI';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg py-12 transition-colors duration-300">
      {/* Hero / Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-text mb-6">
            Pioneering Precision in <span className="text-brand-accent">Diagnostics</span>
          </h1>
          <p className="text-xl text-brand-textSec leading-relaxed text-center">
            Founded in 2010, BioPulse Diagnostics has emerged as a leader in medical laboratory services. 
            Our mission is simple: to provide accurate, timely, and actionable health insights using the world's most advanced technology.
          </p>
        </div>
      </div>

      {/* Tech & Quality Grid */}
      <div className="bg-brand-bgSec py-16 mb-20 relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-bgSec via-brand-accent to-brand-bgSec"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-bg rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-accent/30 shadow-[0_0_15px_rgba(0,245,192,0.2)]">
                <ShieldCheck className="h-8 w-8 text-brand-accent" />
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-2">NABL Accredited</h3>
              <p className="text-brand-textSec text-sm">Adhering to ISO 15189:2012 standards for quality and competence.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-bg rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-accent/30 shadow-[0_0_15px_rgba(0,245,192,0.2)]">
                <Microscope className="h-8 w-8 text-brand-accent" />
              </div>
              <div className="text-center">
                 <h3 className="text-xl font-bold text-brand-text mb-2">Robotic Automation</h3>
                 <p className="text-brand-textSec text-sm">Fully automated Roche & Siemens analyzers for zero-touch error free testing.</p>
              </div>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-bg rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-accent/30 shadow-[0_0_15px_rgba(0,245,192,0.2)]">
                <Activity className="h-8 w-8 text-brand-accent" />
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-2">6 Sigma Quality</h3>
              <p className="text-brand-textSec text-sm">Maintained 6 Sigma score for 98% of our test parameters.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-bg rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-accent/30 shadow-[0_0_15px_rgba(0,245,192,0.2)]">
                <Award className="h-8 w-8 text-brand-accent" />
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-2">Award Winning</h3>
              <p className="text-brand-textSec text-sm">Voted "Best Diagnostics Center" for 3 consecutive years.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Real Time Analytics" 
              className="rounded-xl shadow-[0_0_30px_rgba(0,245,192,0.15)] border border-brand-border mx-auto"
            />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold text-brand-text mb-6">Our Technology</h2>
            <p className="text-brand-textSec mb-6 leading-relaxed">
              At BioPulse, we don't just rely on standard equipment. We employ next-generation sequencing and AI-driven pathology tools to detect anomalies that traditional methods might miss. Our real-time data processing ensures critical alerts are flagged instantly.
            </p>
            <div className="flex justify-center">
              <ul className="space-y-4 inline-block text-left">
                {[
                  "Fully automated track systems for sample handling",
                  "Cloud-based LIMS (Laboratory Information Management System)",
                  "AI-assisted morphology analysis for Hematology",
                  "Real-time temperature monitoring for sample integrity"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="h-6 w-6 rounded-full bg-brand-accent/20 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                      <span className="h-2 w-2 rounded-full bg-brand-accent"></span>
                    </span>
                    <span className="text-brand-textSec">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;