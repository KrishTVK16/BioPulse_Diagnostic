import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock, Phone, Dna } from 'lucide-react';
import { Button, Card } from '../components/UI';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration
    console.log("Registered", formData);
    navigate('/patient/dashboard');
  };

  const Header = () => (
    <div className="w-full p-6 flex justify-center shrink-0 mb-8">
      <div className="flex items-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate('/')}>
        <div className="relative">
            <Dna className="h-10 w-10 text-brand-accent" />
        </div>
        <span className="ml-3 text-2xl font-heading font-bold text-brand-text tracking-wide">
          Bio<span className="text-brand-accent">Pulse</span>
        </span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center p-4">
      <Header />
      <Card className="w-full max-w-md p-8 border-brand-accent/30 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-20">
        <div className="text-center mb-8">
           <h2 className="text-3xl font-heading font-bold text-brand-text mb-2">Create Account</h2>
           <p className="text-brand-textSec">Join BioPulse for easy access to your health records.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
             <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
             <input required name="name" type="text" placeholder="Full Name" onChange={handleChange} className="w-full bg-brand-bg border border-gray-600 rounded p-3 pl-10 text-brand-text focus:border-brand-accent focus:outline-none" />
          </div>
          <div className="relative">
             <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
             <input required name="email" type="email" placeholder="Email Address" onChange={handleChange} className="w-full bg-brand-bg border border-gray-600 rounded p-3 pl-10 text-brand-text focus:border-brand-accent focus:outline-none" />
          </div>
          <div className="relative">
             <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
             <input required name="phone" type="tel" placeholder="Phone Number" onChange={handleChange} className="w-full bg-brand-bg border border-gray-600 rounded p-3 pl-10 text-brand-text focus:border-brand-accent focus:outline-none" />
          </div>
          <div className="relative">
             <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
             <input required name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full bg-brand-bg border border-gray-600 rounded p-3 pl-10 text-brand-text focus:border-brand-accent focus:outline-none" />
          </div>
           <div className="relative">
             <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
             <input required name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} className="w-full bg-brand-bg border border-gray-600 rounded p-3 pl-10 text-brand-text focus:border-brand-accent focus:outline-none" />
          </div>
          
          <Button type="submit" className="w-full py-3 mt-4">Register</Button>
          
          <p className="text-center text-brand-textSec text-sm mt-4">
             Already have an account? <Link to="/login" className="text-brand-accent hover:underline font-bold">Login here</Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Register;