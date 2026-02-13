import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, User, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { Button, Card, SectionTitle, Modal } from '../components/UI';
import { TESTS } from '../data';

const Appointments: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [successModal, setSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    dob: '',
    gender: 'Male',
    address: '',
    testId: '',
    date: '',
    time: '',
    homeCollection: false,
    notes: ''
  });

  useEffect(() => {
    if (location.state && location.state.selectedTest) {
      setFormData(prev => ({ ...prev, testId: location.state.selectedTest }));
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    // Handle checkbox separately if needed, though here using boolean toggle
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSuccessModal(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-brand-bg py-12 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Book an Appointment" subtitle="Schedule your test in less than 2 minutes." />

        <Card className="p-8 border-brand-accent/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div>
              <h3 className="text-lg font-bold text-brand-accent mb-4 border-b border-brand-border pb-2 flex items-center">
                <User className="mr-2 h-5 w-5" /> Patient Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-brand-textSec mb-1">Full Name</label>
                  <input required name="fullName" value={formData.fullName} onChange={handleChange} type="text" className="w-full bg-brand-bg border border-brand-border rounded p-3 text-brand-text focus:border-brand-accent focus:outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-textSec mb-1">Mobile Number</label>
                  <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full bg-brand-bg border border-brand-border rounded p-3 text-brand-text focus:border-brand-accent focus:outline-none" placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-textSec mb-1">Date of Birth</label>
                  <input required name="dob" value={formData.dob} onChange={handleChange} type="date" className="w-full bg-brand-bg border border-brand-border rounded p-3 text-brand-text focus:border-brand-accent focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-textSec mb-1">Gender</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} className="w-full bg-brand-bg border border-brand-border rounded p-3 text-brand-text focus:border-brand-accent focus:outline-none">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Test Selection */}
            <div>
              <h3 className="text-lg font-bold text-brand-accent mb-4 border-b border-brand-border pb-2 flex items-center">
                 <CheckCircle className="mr-2 h-5 w-5" /> Test Selection
              </h3>
              <div className="space-y-4">
                 <div>
                    <label className="block text-sm font-medium text-brand-textSec mb-1">Select Test</label>
                    <select required name="testId" value={formData.testId} onChange={handleChange} className="w-full bg-brand-bg border border-brand-border rounded p-3 text-brand-text focus:border-brand-accent focus:outline-none">
                      <option value="">-- Choose a Test --</option>
                      {TESTS.map(t => <option key={t.id} value={t.id}>{t.name} (${t.price})</option>)}
                    </select>
                 </div>
                 <div className="flex items-center space-x-3 bg-brand-bg p-3 rounded border border-brand-border">
                    <input 
                      type="checkbox" 
                      id="homeCollection" 
                      checked={formData.homeCollection} 
                      onChange={(e) => setFormData({...formData, homeCollection: e.target.checked})}
                      className="h-5 w-5 rounded text-brand-accent focus:ring-brand-accent bg-gray-800 border-gray-600"
                    />
                    <label htmlFor="homeCollection" className="text-brand-textSec select-none cursor-pointer">Opt for Home Sample Collection (+$15)</label>
                 </div>
                 {formData.homeCollection && (
                    <div className="animate-in fade-in slide-in-from-top-2">
                       <label className="block text-sm font-medium text-brand-textSec mb-1">Address</label>
                       <textarea required name="address" value={formData.address} onChange={handleChange} rows={2} className="w-full bg-brand-bg border border-brand-border rounded p-3 text-brand-text focus:border-brand-accent focus:outline-none" placeholder="Enter full address for collection..."></textarea>
                    </div>
                 )}
              </div>
            </div>

            {/* Scheduling */}
            <div>
              <h3 className="text-lg font-bold text-brand-accent mb-4 border-b border-brand-border pb-2 flex items-center">
                 <Calendar className="mr-2 h-5 w-5" /> Scheduling
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-sm font-medium text-brand-textSec mb-1">Preferred Date</label>
                    <input required name="date" value={formData.date} onChange={handleChange} type="date" className="w-full bg-brand-bg border border-brand-border rounded p-3 text-brand-text focus:border-brand-accent focus:outline-none" />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-brand-textSec mb-1">Preferred Time</label>
                    <select required name="time" value={formData.time} onChange={handleChange} className="w-full bg-brand-bg border border-brand-border rounded p-3 text-brand-text focus:border-brand-accent focus:outline-none">
                       <option value="">-- Select Slot --</option>
                       <option>08:00 AM - 10:00 AM</option>
                       <option>10:00 AM - 12:00 PM</option>
                       <option>02:00 PM - 04:00 PM</option>
                       <option>04:00 PM - 06:00 PM</option>
                    </select>
                 </div>
              </div>
            </div>

            <Button type="submit" className="w-full py-4 text-lg mt-8">Confirm Appointment</Button>
          </form>
        </Card>
      </div>

      <Modal isOpen={successModal} onClose={() => {setSuccessModal(false); navigate('/');}} title="Booking Confirmed!">
        <div className="text-center py-6">
           <div className="w-20 h-20 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-brand-accent" />
           </div>
           <p className="text-lg text-brand-text mb-2">Thank you, <span className="font-bold text-brand-accent">{formData.fullName}</span>.</p>
           <p className="text-brand-textSec mb-6">Your appointment ID is <span className="font-mono text-brand-text">#BP-{Math.floor(Math.random()*10000)}</span>. We have sent a confirmation SMS to your mobile number.</p>
           <Button onClick={() => navigate('/')}>Return to Home</Button>
        </div>
      </Modal>
    </div>
  );
};

export default Appointments;