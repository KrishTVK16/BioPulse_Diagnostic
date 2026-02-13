import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Clock, Award, Activity, Microscope, HeartPulse, Brain, Zap } from 'lucide-react';
import { Button, Card, SectionTitle } from '../components/UI';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Clock, title: "Same-Day Reports", desc: "Get your results within 24 hours for most standard tests." },
    { icon: Award, title: "NABL Accredited", desc: "Recognized for maintaining highest quality standards in diagnostics." },
    { icon: Activity, title: "Advanced Tech", desc: "Using AI-powered analyzers for precision accuracy." },
    { icon: Zap, title: "Home Collection", desc: "Convenient sample collection from the comfort of your home." },
  ];

  return (
    <div className="w-full transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-[55vh] md:min-h-[60vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-brand-bg">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000" 
            alt="Medical Laboratory" 
            className="w-full h-full object-cover opacity-40 dark:opacity-40 opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/95 via-brand-bg/60 to-brand-bg"></div>
        </div>
        
        {/* 
            PADDING ADJUSTMENT NOTE: 
            Navbar height is h-20 (5rem).
            pt-28 is 7rem. 7rem - 5rem = 2rem visual gap.
            md:pt-[7.5rem] is 7.5rem. 7.5rem - 5rem = 2.5rem visual gap.
            This ensures the gap is strictly between 2rem and 2.5rem.
        */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-[7.5rem] pb-32 text-center flex flex-col items-center">
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-8 drop-shadow-lg text-brand-text">
              Advanced Diagnostics. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accentSec">Clear Answers.</span> <br/>
              Faster Decisions.
            </h1>
            <p className="text-xl text-brand-textSec mb-10 max-w-3xl mx-auto font-light shadow-black drop-shadow-md">
              Experience the future of healthcare with BioPulse. High-precision laboratory testing designed to give you the confidence you need for your health journey.
            </p>
            {/* Added extra margin bottom (mb-16) for requested gap */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button onClick={() => navigate('/appointments')} className="text-lg px-8 py-4">Book a Test Now</Button>
              <Button variant="secondary" onClick={() => navigate('/diagnostics')} className="text-lg px-8 py-4">View All Services</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Card key={i} className="bg-brand-bgSec/95 backdrop-blur shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-t-4 border-t-brand-accent h-full text-center">
              <div className="flex flex-col items-center h-full">
                <div className="p-3 bg-brand-bg rounded-full mb-4 border border-brand-border shadow-[0_0_10px_rgba(0,245,192,0.2)]">
                  <f.icon className="h-8 w-8 text-brand-accent" />
                </div>
                <h3 className="text-lg font-bold text-brand-text mb-2">{f.title}</h3>
                <p className="text-brand-textSec text-sm">{f.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Key Diagnostic Services" 
            subtitle="Comprehensive testing packages tailored to your specific health needs."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer h-full" onClick={() => navigate('/diagnostics?category=Pathology')}>
               <Card className="h-full flex flex-col justify-between items-center text-center group-hover:bg-brand-bgSec/80 transition-colors">
                 <div className="flex flex-col items-center">
                    <Microscope className="h-12 w-12 text-brand-accent mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold mb-3 text-brand-text">Pathology</h3>
                    <p className="text-brand-textSec">Complete analysis of body fluids including blood, urine, and tissues for precise diagnosis.</p>
                 </div>
                 <div className="mt-6 flex items-center justify-center text-brand-accent font-bold group-hover:translate-x-2 transition-transform">
                   Explore Tests <ArrowRight className="ml-2 h-4 w-4" />
                 </div>
               </Card>
            </div>
            <div className="group cursor-pointer h-full" onClick={() => navigate('/diagnostics?category=Cardiac')}>
               <Card className="h-full flex flex-col justify-between items-center text-center group-hover:bg-brand-bgSec/80 transition-colors">
                 <div className="flex flex-col items-center">
                    <HeartPulse className="h-12 w-12 text-brand-accent mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold mb-3 text-brand-text">Cardiac Care</h3>
                    <p className="text-brand-textSec">Advanced lipid profiles, ECG, and biomarkers to monitor your heart health effectively.</p>
                 </div>
                 <div className="mt-6 flex items-center justify-center text-brand-accent font-bold group-hover:translate-x-2 transition-transform">
                   Explore Tests <ArrowRight className="ml-2 h-4 w-4" />
                 </div>
               </Card>
            </div>
            <div className="group cursor-pointer h-full" onClick={() => navigate('/diagnostics?category=Radiology')}>
               <Card className="h-full flex flex-col justify-between items-center text-center group-hover:bg-brand-bgSec/80 transition-colors">
                 <div className="flex flex-col items-center">
                    <Brain className="h-12 w-12 text-brand-accent mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold mb-3 text-brand-text">Radiology</h3>
                    <p className="text-brand-textSec">High-resolution X-ray, Ultrasound, and MRI scans for detailed internal imaging.</p>
                 </div>
                 <div className="mt-6 flex items-center justify-center text-brand-accent font-bold group-hover:translate-x-2 transition-transform">
                   Explore Tests <ArrowRight className="ml-2 h-4 w-4" />
                 </div>
               </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-brand-bgSec relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/5 skew-x-12"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionTitle title="How It Works" subtitle="Simple steps to better health." />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {[
               {step: "01", title: "Select Test", desc: "Choose from our wide range of diagnostic tests."},
               {step: "02", title: "Book Slot", desc: "Schedule a home visit or lab walk-in at your convenience."},
               {step: "03", title: "Collection", desc: "Our expert phlebotomists collect samples safely."},
               {step: "04", title: "Get Results", desc: "Download accurate reports online within hours."}
             ].map((item, idx) => (
               <div key={idx} className="relative group hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center">
                 <div className="text-6xl font-heading font-bold text-brand-text/5 absolute -top-6 group-hover:text-brand-accent/10 transition-colors">{item.step}</div>
                 <div className="relative pt-6 px-4 pb-2">
                   <h4 className="text-xl font-bold text-brand-accent mb-2">{item.title}</h4>
                   <p className="text-brand-textSec text-sm">{item.desc}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-bg relative overflow-hidden text-center">
        <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1516549655169-df83a092dd14?auto=format&fit=crop&q=80&w=2000" alt="Medical Tech" className="w-full h-full object-cover opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/80 to-transparent"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
           <h2 className="text-4xl font-heading font-bold mb-6 text-brand-text">Ready to prioritize your health?</h2>
           <p className="text-brand-textSec mb-8 text-lg">Join thousands of satisfied patients who trust BioPulse for their diagnostic needs.</p>
           <div className="flex justify-center">
             <Button onClick={() => navigate('/appointments')} className="text-lg px-8 py-4 shadow-[0_0_20px_rgba(0,245,192,0.4)]">Book Your Appointment</Button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;