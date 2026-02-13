import React from 'react';
import { Mail, Calendar } from 'lucide-react';
import { SectionTitle, Card, Button } from '../components/UI';
import { DOCTORS } from '../data';
import { useNavigate } from 'react-router-dom';

const Doctors: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-bg py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Meet Our Specialists" 
          subtitle="A team of board-certified pathologists, radiologists, and cardiologists dedicated to your health."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doctor) => (
            <Card key={doctor.id} className="text-center group hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-brand-accent rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover rounded-full border-2 border-brand-accent relative z-10"
                />
              </div>
              
              <h3 className="text-xl font-bold text-brand-text mb-1">{doctor.name}</h3>
              <p className="text-brand-accent font-medium text-sm mb-4">{doctor.specialty}</p>
              
              <div className="flex items-center justify-center space-x-2 text-brand-textSec text-sm mb-6">
                <Mail className="h-4 w-4" />
                <span>{doctor.email}</span>
              </div>

              <div className="mt-auto pt-6 border-t border-brand-border w-full">
                <div className="flex justify-between text-sm text-brand-textSec mb-4">
                  <span>Patients</span>
                  <span className="text-brand-text font-bold">{doctor.patients}+</span>
                </div>
                <Button 
                   variant="outline" 
                   className="w-full py-2 text-sm flex items-center justify-center gap-2"
                   onClick={() => navigate('/appointments')}
                >
                   <Calendar className="h-4 w-4" /> Book Appointment
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;