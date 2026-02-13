import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Stethoscope, ShieldCheck, ArrowRight, X, Dna } from 'lucide-react';
import { Button, Card, SectionTitle } from '../components/UI';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<'patient' | 'doctor' | 'admin' | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'patient') navigate('/patient/dashboard');
    else if (role === 'doctor') navigate('/doctor/dashboard');
    else if (role === 'admin') navigate('/admin/dashboard');
  };

  const Header = () => (
    <div className="w-full p-3 sm:p-4 flex justify-center shrink-0 mb-2 sm:mb-4 flex-col items-center">
      <div className="flex items-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate('/')}>
        <div className="relative">
            <Dna className="h-7 w-7 sm:h-8 sm:w-8 text-brand-accent" />
        </div>
        <span className="ml-2 text-lg sm:text-xl font-heading font-bold text-brand-text tracking-wide">
          Bio<span className="text-brand-accent">Pulse</span>
        </span>
      </div>
    </div>
  );

  if (!role) {
    return (
      <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center p-3 sm:p-4 transition-colors duration-300 overflow-y-auto">
        <Header />
        <div className="w-full max-w-5xl flex flex-col items-center flex-1 justify-center py-4">
            <div className="mb-4 sm:mb-6 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-brand-text mb-1 sm:mb-2">
                Welcome to BioPulse
              </h2>
              <p className="text-brand-textSec text-xs sm:text-sm">Select your portal to continue.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 w-full mb-4 sm:mb-6">
            {[
                { id: 'patient', title: "Patient Portal", icon: User, desc: "Access reports, book tests, and manage profile." },
                { id: 'doctor', title: "Doctor Portal", icon: Stethoscope, desc: "View assigned patients and review reports." },
                { id: 'admin', title: "Admin Portal", icon: ShieldCheck, desc: "Manage tests, staff, and analytics." }
            ].map((item) => (
                <Card key={item.id} className="cursor-pointer group hover:bg-brand-bgSec/80" hoverEffect={true}>
                <div onClick={() => setRole(item.id as any)} className="flex flex-col items-center text-center p-3 sm:p-4 h-full">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-bg rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform border border-brand-border group-hover:border-brand-accent">
                        <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-brand-accent" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-brand-text mb-1 sm:mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-brand-textSec mb-3 sm:mb-4">{item.desc}</p>
                    <div className="mt-auto text-brand-accent font-bold flex items-center text-xs sm:text-sm">
                        Login <ArrowRight className="ml-2 h-3 w-3" />
                    </div>
                </div>
                </Card>
            ))}
            </div>
            
            <div className="text-center">
                <p className="text-xs sm:text-sm text-brand-textSec">New to BioPulse?</p>
                <Button variant="outline" onClick={() => navigate('/register')} className="mt-2 px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm">Register as New Patient</Button>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center p-3 sm:p-4 transition-colors duration-300 overflow-y-auto">
      <Header />
      <Card className="w-full max-w-md p-4 sm:p-6 border-brand-accent/30 shadow-[0_0_50px_rgba(0,245,192,0.1)] relative animate-in fade-in zoom-in duration-300 my-4">
        <button 
            onClick={() => setRole(null)} 
            className="absolute top-2 right-2 sm:top-3 sm:right-3 text-brand-textSec hover:text-brand-text bg-brand-bg p-1.5 sm:p-2 rounded-full hover:bg-brand-bgSec transition-colors"
        >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <div className="text-center mb-4 sm:mb-6 pt-1 sm:pt-2">
           <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-text mb-1">
             {role === 'patient' ? 'Patient Login' : role === 'doctor' ? 'Doctor Login' : 'Admin Access'}
           </h2>
           <p className="text-xs sm:text-sm text-brand-textSec">Secure access for authorized personnel only.</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-3 sm:space-y-4">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-brand-textSec mb-1">
              {role === 'patient' ? 'Patient ID / Mobile' : 'Email Address'}
            </label>
            <input 
              required 
              type={role === 'patient' ? 'text' : 'email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-brand-bg border border-brand-border rounded p-2 sm:p-2.5 text-sm text-brand-text focus:border-brand-accent focus:outline-none placeholder-gray-500" 
              placeholder={role === 'patient' ? 'Enter ID' : 'name@biopulse.com'}
            />
          </div>
          <div>
             <label className="block text-xs sm:text-sm font-medium text-brand-textSec mb-1">Password</label>
             <input 
               required 
               type="password" 
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="w-full bg-brand-bg border border-brand-border rounded p-2 sm:p-2.5 text-sm text-brand-text focus:border-brand-accent focus:outline-none placeholder-gray-500" 
               placeholder="••••••••"
             />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 text-xs">
             <div className="flex items-center">
                <input 
                  id="remember-me" 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-3.5 w-3.5 rounded border-brand-border text-brand-accent focus:ring-brand-accent bg-brand-bg" 
                />
                <label htmlFor="remember-me" className="ml-2 block text-brand-textSec cursor-pointer">Remember me</label>
             </div>
             <Link to="#" className="text-brand-accent hover:underline font-medium text-center sm:text-right">Forgot Password?</Link>
          </div>

          <Button type="submit" className="w-full py-2 sm:py-2.5 text-xs sm:text-sm">Access Dashboard</Button>
          
          {role === 'patient' && (
             <p className="text-center text-brand-textSec text-xs mt-2 sm:mt-3">
                Don't have an account? <Link to="/register" className="text-brand-accent hover:underline font-bold">Register</Link>
             </p>
          )}
        </form>
      </Card>
    </div>
  );
};

export default Login;