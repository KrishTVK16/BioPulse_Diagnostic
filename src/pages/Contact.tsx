import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { SectionTitle, Card, Button } from '../components/UI';

const Contact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: "Do I need to fast before my blood test?", a: "For tests like Lipid Profile and Fasting Blood Sugar, 10-12 hours of fasting is required. For others like CBC, no fasting is needed. Please check the specific test details." },
    { q: "How soon will I get my reports?", a: "Most routine reports (CBC, Thyroid, Sugar) are available within 6-12 hours. Specialized tests may take 24-48 hours. You will be notified via SMS." },
    { q: "Is home collection available?", a: "Yes, we offer home sample collection for a nominal fee of $15. You can select this option while booking your appointment." },
    { q: "Are your labs accredited?", a: "Absolutely. BioPulse is NABL and CAP accredited, ensuring the highest standards of accuracy and reliability." },
    { q: "How can I access my past reports?", a: "You can log in to the Patient Portal using your mobile number and Patient ID to view and download historical reports." },
  ];

  return (
    <div className="min-h-screen bg-brand-bg py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Get in Touch" subtitle="We are here to assist you 24/7." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <Card>
            <h3 className="text-xl font-bold text-brand-text mb-6 text-center">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-brand-textSec mb-1">Name</label>
                  <input type="text" className="w-full bg-brand-bg border border-brand-border rounded p-3 text-brand-text focus:border-brand-accent focus:outline-none" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-textSec mb-1">Email</label>
                  <input type="email" className="w-full bg-brand-bg border border-brand-border rounded p-3 text-brand-text focus:border-brand-accent focus:outline-none" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-textSec mb-1">Subject</label>
                <input type="text" className="w-full bg-brand-bg border border-brand-border rounded p-3 text-brand-text focus:border-brand-accent focus:outline-none" placeholder="Inquiry about..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-textSec mb-1">Message</label>
                <textarea rows={4} className="w-full bg-brand-bg border border-brand-border rounded p-3 text-brand-text focus:border-brand-accent focus:outline-none" placeholder="How can we help you?"></textarea>
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-brand-bgSec to-brand-bg border-l-4 border-l-brand-accent text-center">
               <div className="flex flex-col items-center space-y-2">
                  <div className="p-3 bg-brand-bg rounded-lg text-brand-accent"><MapPin className="h-8 w-8" /></div>
                  <div>
                    <h4 className="font-bold text-brand-text text-lg">Main Laboratory</h4>
                    <p className="text-brand-textSec mt-1">123 Medical Plaza, Tech Park Blvd,<br/>Innovation City, ST 90210</p>
                  </div>
               </div>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
               <Card className="border-l-4 border-l-blue-500 flex flex-col items-center">
                  <div className="mb-4 text-blue-400"><Phone className="h-6 w-6" /></div>
                  <h4 className="font-bold text-brand-text">General Inquiry</h4>
                  <p className="text-brand-textSec text-sm mt-1">+1 (800) 555-0199</p>
               </Card>
               <Card className="border-l-4 border-l-red-500 bg-red-500/5 flex flex-col items-center">
                  <div className="mb-4 text-red-500"><AlertCircle className="h-6 w-6" /></div>
                  <h4 className="font-bold text-brand-text">Emergency Hotline</h4>
                  <p className="text-brand-textSec text-sm mt-1">+1 (800) 911-HELP</p>
               </Card>
            </div>

            <Card className="border-l-4 border-l-green-500 text-center">
               <div className="flex flex-col items-center space-y-2">
                  <div className="p-2 bg-green-500/10 rounded-full text-green-500"><MessageCircle className="h-6 w-6" /></div>
                  <div>
                    <h4 className="font-bold text-brand-text">WhatsApp Support</h4>
                    <p className="text-brand-textSec text-sm">Chat with us: +1 (555) 012-3456</p>
                  </div>
               </div>
            </Card>

            <Card className="border-l-4 border-l-purple-500 text-center">
               <div className="flex flex-col items-center space-y-2">
                  <div className="p-2 bg-purple-500/10 rounded-full text-purple-500"><Clock className="h-6 w-6" /></div>
                  <div>
                    <h4 className="font-bold text-brand-text">Opening Hours</h4>
                    <p className="text-brand-textSec text-sm">Mon - Sat: 7:00 AM - 9:00 PM</p>
                    <p className="text-brand-textSec text-sm">Sun: 8:00 AM - 2:00 PM</p>
                  </div>
               </div>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mb-20 rounded-xl overflow-hidden border border-brand-border h-80 relative group">
           <img 
             src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
             alt="Map Location" 
             className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
           />
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-brand-bg/90 p-4 rounded-xl flex items-center shadow-[0_0_20px_rgba(0,245,192,0.4)]">
                 <MapPin className="text-brand-accent h-6 w-6 mr-2" />
                 <span className="font-bold text-brand-text">Locate Us on Map</span>
              </div>
           </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
           <SectionTitle title="Frequently Asked Questions" />
           <div className="space-y-4">
              {faqs.map((item, index) => (
                <div key={index} className="border border-brand-border rounded-lg bg-brand-bgSec overflow-hidden">
                   <button 
                     onClick={() => toggleFaq(index)}
                     className="w-full flex justify-between items-center p-4 text-left hover:bg-brand-bg transition-colors focus:outline-none"
                   >
                     <span className="font-bold text-brand-text">{item.q}</span>
                     {openFaq === index ? <ChevronUp className="h-5 w-5 text-brand-accent" /> : <ChevronDown className="h-5 w-5 text-brand-textSec" />}
                   </button>
                   {openFaq === index && (
                     <div className="p-4 pt-0 text-brand-textSec text-sm border-t border-brand-border mt-2 bg-brand-bg/50 text-center">
                       {item.a}
                     </div>
                   )}
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;