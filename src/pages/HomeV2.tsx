import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Microscope, Dna, Activity, ShieldCheck } from 'lucide-react';
import { Button, Card } from '../components/UI';

const HomeV2: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-brand-bg transition-colors duration-300 overflow-x-hidden">
      {/* Immersive Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex items-center py-6 sm:py-8">
          {/* Mobile Layout: Stacked Vertical (< 640px) */}
          <div className="w-full sm:hidden flex flex-col items-center text-center justify-center space-y-2.5 py-1">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-bgSec/50 backdrop-blur border border-brand-accent/30 rounded-full px-3 py-1 text-brand-accent text-xs font-bold animate-in slide-in-from-bottom duration-700">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-accent"></span>
              </span>
              <span>#1 Trusted Diagnostics Lab</span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-brand-textSec max-w-md px-2 animate-in slide-in-from-bottom duration-700 delay-100">
              Experience the synergy of AI-driven analytics and world-class pathology. Precision results delivered at the speed of life.
            </p>

            {/* H1 - Responsive Typography */}
            <h1 className="text-[clamp(1.75rem,6vw,2.5rem)] font-heading font-bold leading-[1.1] text-brand-text animate-in slide-in-from-bottom duration-700 delay-200">
              Next Gen <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-500">Healthcare.</span>
            </h1>

            {/* CTAs - Mobile */}
            <div className="flex flex-col gap-3 pt-2 w-full max-w-sm px-4 animate-in slide-in-from-bottom duration-700 delay-300">
              <Button onClick={() => navigate('/appointments')} className="px-5 py-2.5 text-sm rounded-full shadow-[0_0_30px_rgba(0,245,192,0.4)] hover:shadow-[0_0_50px_rgba(0,245,192,0.6)] w-full">
                Start Your Journey
              </Button>
              <Button variant="outline" onClick={() => navigate('/about')} className="px-5 py-2.5 text-sm rounded-full border-2 w-full">
                Our Technology
              </Button>
            </div>

            {/* Image Card - Mobile */}
            <div className="relative flex justify-center mt-4 max-w-xs w-full animate-in slide-in-from-bottom duration-700 delay-300">
              <div className="relative w-full aspect-4/5 bg-gradient-to-tr from-brand-bgSec to-brand-bg border border-brand-accent/20 rounded-[40px] shadow-2xl overflow-hidden backdrop-blur-sm group cursor-pointer hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                  alt="Doctor"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="bg-brand-accent text-brand-bg font-bold inline-block px-3 py-1 rounded mb-2 text-xs">New</div>
                  <h3 className="text-xl font-bold text-white">Full Body Checkup</h3>
                  <p className="text-gray-300 mt-2 text-xs">Includes 85+ parameters. Book now for a 20% discount.</p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-brand-accent font-bold text-lg">$99</span>
                    <button className="bg-white/10 hover:bg-brand-accent hover:text-brand-bg p-2 rounded-full transition-colors">
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop/Tablet Layout: Two Columns (≥ 640px / 600px+) */}
          <div className="hidden sm:grid sm:grid-cols-2 sm:gap-6 md:gap-8 lg:gap-12 w-full items-center">
            {/* Left Column: Badge, Description, H1 */}
            <div className="flex flex-col justify-center items-center text-center space-y-6 animate-in slide-in-from-left duration-700">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-brand-bgSec/50 backdrop-blur border border-brand-accent/30 rounded-full px-4 py-1.5 text-brand-accent text-sm font-bold w-fit">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-accent"></span>
                </span>
                <span>#1 Trusted Diagnostics Lab</span>
              </div>

              {/* Description */}
              <p className="text-lg lg:text-xl text-brand-textSec max-w-lg">
                Experience the synergy of AI-driven analytics and world-class pathology. Precision results delivered at the speed of life.
              </p>

              {/* H1 Heading */}
              <h1 className="text-[clamp(2.25rem,4.5vw,3.5rem)] font-heading font-bold leading-[1.1] text-brand-text">
                Next Gen <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-500">Healthcare.</span>
              </h1>

              {/* CTAs - Desktop */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button onClick={() => navigate('/appointments')} className="px-5 py-2.5 text-sm rounded-full shadow-[0_0_30px_rgba(0,245,192,0.4)] hover:shadow-[0_0_50px_rgba(0,245,192,0.6)]">
                  Start Your Journey
                </Button>
                <Button variant="outline" onClick={() => navigate('/about')} className="px-5 py-2.5 text-sm rounded-full border-2">
                  Our Technology
                </Button>
              </div>
            </div>

            {/* Right Column: Image Card */}
            <div className="flex flex-col justify-center items-center animate-in slide-in-from-right duration-700">
              <div className="relative flex justify-center max-w-xs w-full">
                <div className="relative w-full aspect-4/5 bg-gradient-to-tr from-brand-bgSec to-brand-bg border border-brand-accent/20 rounded-[40px] shadow-2xl overflow-hidden backdrop-blur-sm group cursor-pointer hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                    alt="Doctor"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <div className="bg-brand-accent text-brand-bg font-bold inline-block px-3 py-1 rounded mb-2 text-xs">New</div>
                    <h3 className="text-xl font-bold text-white">Full Body Checkup</h3>
                    <p className="text-gray-300 mt-2 text-xs">Includes 85+ parameters. Book now for a 20% discount.</p>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-brand-accent font-bold text-lg">$99</span>
                      <button className="bg-white/10 hover:bg-brand-accent hover:text-brand-bg p-2 rounded-full transition-colors">
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute top-4 -right-4 bg-brand-bgSec p-3 rounded-xl shadow-xl border border-gray-700 animate-bounce delay-700 hidden lg:block">
                  <ShieldCheck className="h-6 w-6 text-brand-accent mb-1" />
                  <span className="text-[10px] font-bold text-brand-text">100% Safe</span>
                </div>
                <div className="absolute bottom-16 -left-4 bg-brand-bgSec p-3 rounded-xl shadow-xl border border-gray-700 animate-pulse delay-300 hidden lg:block">
                  <Activity className="h-6 w-6 text-blue-400 mb-1" />
                  <span className="text-[10px] font-bold text-brand-text">Fast Reports</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - After Hero */}
      <section className="py-8 md:py-12 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 md:space-x-12 text-brand-textSec text-sm md:text-base font-mono">
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-brand-text">50+</span>
              <span>Awards Won</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-brand-text">1M+</span>
              <span>Patients Served</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-brand-text">24/7</span>
              <span>Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="bg-brand-accent py-4 overflow-hidden -skew-y-2 transform origin-left">
        <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] flex items-center space-x-12 font-heading font-bold text-brand-bg text-2xl uppercase tracking-wider">
          <span>• Hematology • Biochemistry • Microbiology • Immunology • Molecular Biology • Histopathology • Cytology • Genetics •</span>
          <span>• Hematology • Biochemistry • Microbiology • Immunology • Molecular Biology • Histopathology • Cytology • Genetics •</span>
        </div>
      </section>

      {/* Interactive Cards */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">Why Choose Us?</h2>
          <div className="h-1 w-24 bg-brand-accent mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative h-80 perspective-1000">
            <div className="absolute inset-0 bg-brand-bgSec rounded-2xl transform transition-all duration-500 hover:rotate-y-12 hover:scale-105 shadow-xl border border-brand-border p-8 flex flex-col items-center justify-center text-center z-10">
              <Dna className="h-16 w-16 text-brand-accent mb-6" />
              <h3 className="text-2xl font-bold text-brand-text mb-2">Genetic Testing</h3>
              <p className="text-brand-textSec">Unlock the secrets of your DNA for personalized health insights.</p>
            </div>
            <div className="absolute inset-0 bg-brand-accent rounded-2xl transform translate-x-4 translate-y-4 -z-0 opacity-20"></div>
          </div>

          <div className="group relative h-80 perspective-1000">
            <div className="absolute inset-0 bg-brand-bgSec rounded-2xl transform transition-all duration-500 hover:rotate-y-12 hover:scale-105 shadow-xl border border-brand-border p-8 flex flex-col items-center justify-center text-center z-10">
              <Microscope className="h-16 w-16 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold text-brand-text mb-2">Advanced Pathology</h3>
              <p className="text-brand-textSec">State-of-the-art labs equipped with robotics for zero-error precision.</p>
            </div>
            <div className="absolute inset-0 bg-blue-500 rounded-2xl transform translate-x-4 translate-y-4 -z-0 opacity-20"></div>
          </div>

          <div className="group relative h-80 perspective-1000">
            <div className="absolute inset-0 bg-brand-bgSec rounded-2xl transform transition-all duration-500 hover:rotate-y-12 hover:scale-105 shadow-xl border border-brand-border p-8 flex flex-col items-center justify-center text-center z-10">
              <Activity className="h-16 w-16 text-purple-500 mb-6" />
              <h3 className="text-2xl font-bold text-brand-text mb-2">Trend Analysis</h3>
              <p className="text-brand-textSec">Track your health vitals over time with our smart dashboard.</p>
            </div>
            <div className="absolute inset-0 bg-purple-500 rounded-2xl transform translate-x-4 translate-y-4 -z-0 opacity-20"></div>
          </div>
        </div>
      </section>

      {/* CTA Parallax */}
      <section className="relative py-32 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000')" }}>
        <div className="absolute inset-0 bg-brand-bg/80 dark:bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 flex flex-col items-center">
          <h2 className="text-5xl font-heading font-bold text-brand-text dark:text-white mb-8">Precision. Speed. Care.</h2>
          <p className="text-xl text-brand-textSec dark:text-gray-200 mb-10">Book your appointment today and experience the difference.</p>
          <Button onClick={() => navigate('/appointments')} className="text-xl px-12 py-5 rounded-full">Book Appointment</Button>
        </div>
      </section>

    </div>
  );
};

export default HomeV2;