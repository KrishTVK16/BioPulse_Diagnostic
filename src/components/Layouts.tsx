import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Dna, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, LayoutDashboard, FileText, Settings, Users, Activity, LogOut, Sun, Moon, ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const location = useLocation();
  const navigate = useNavigate();

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { name: 'Diagnostics', path: '/diagnostics' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-brand-bg/95 backdrop-blur-md border-b border-brand-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <div className="relative">
              <Dna className="h-10 w-10 text-brand-accent animate-pulse" />
              <div className="absolute inset-0 bg-brand-accent blur-xl opacity-20 rounded-full"></div>
            </div>
            <span className="ml-3 text-2xl font-heading font-bold text-brand-text tracking-wide">
              Bio<span className="text-brand-accent">Pulse</span>
            </span>
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              {/* Home Dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-all duration-300 ${location.pathname === '/' || location.pathname === '/home-v2' ? 'text-brand-accent' : 'text-brand-textSec hover:text-brand-text'}`}
                  onClick={() => navigate('/')}
                  onMouseEnter={() => setHomeDropdown(true)}
                >
                  Home <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {homeDropdown && (
                  <div
                    className="absolute top-full left-0 w-48 bg-brand-bgSec border border-brand-border rounded-lg shadow-xl py-2 mt-1 animate-in fade-in slide-in-from-top-2"
                    onMouseLeave={() => setHomeDropdown(false)}
                  >
                    <Link to="/" className="block px-4 py-2 text-sm text-brand-text hover:bg-brand-bg hover:text-brand-accent" onClick={() => setHomeDropdown(false)}>Classic View</Link>
                    <Link to="/home-v2" className="block px-4 py-2 text-sm text-brand-text hover:bg-brand-bg hover:text-brand-accent" onClick={() => setHomeDropdown(false)}>Immersive Experience</Link>
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${isActive(link.path) ? 'text-brand-accent' : 'text-brand-textSec hover:text-brand-text'
                    }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent transform transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100 shadow-[0_0_10px_var(--brand-accent)]' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-brand-textSec hover:text-brand-accent hover:bg-brand-bgSec transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button onClick={() => navigate('/dashboard')} className="px-5 py-2 rounded-full border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-bg transition-all duration-300 text-sm font-bold shadow-[0_0_10px_rgba(0,245,192,0.2)] hover:shadow-[0_0_20px_rgba(0,245,192,0.6)]">
              Admin
            </button>
            <button onClick={() => navigate('/login')} className="px-5 py-2 rounded-full bg-brand-bgSec text-brand-text hover:bg-brand-accentSec transition-colors duration-300 text-sm font-medium">
              Login
            </button>
            <button onClick={() => navigate('/register')} className="px-5 py-2 rounded-full bg-brand-bgSec text-brand-text hover:bg-brand-accentSec transition-colors duration-300 text-sm font-medium">
              Register
            </button>
          </div>

          <div className="-mr-2 flex lg:hidden items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-brand-textSec hover:text-brand-accent hover:bg-brand-bgSec transition-colors"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-textSec hover:text-brand-text hover:bg-brand-bgSec focus:outline-none"
            >
              {isOpen ? <X className="block h-8 w-8 text-brand-accent" /> : <Menu className="block h-8 w-8 text-brand-accent" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full h-screen bg-black/50 z-40" onClick={() => setIsOpen(false)}>
          <div className="absolute right-0 top-0 w-64 h-full bg-brand-bgSec shadow-2xl p-6 flex flex-col space-y-6 transform transition-transform duration-300 border-l border-brand-border overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col space-y-2">
              <h3 className="text-sm font-bold text-brand-textSec uppercase tracking-wider mb-2">Home</h3>
              <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-brand-text hover:text-brand-accent">Classic View</Link>
              <Link to="/home-v2" onClick={() => setIsOpen(false)} className="text-lg font-medium text-brand-text hover:text-brand-accent">Immersive</Link>
            </div>

            <div className="w-full h-px bg-brand-border"></div>

            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${isActive(link.path) ? 'text-brand-accent' : 'text-brand-textSec hover:text-brand-text'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-6 border-t border-brand-border flex flex-col space-y-4">
              <button onClick={() => { navigate('/dashboard'); setIsOpen(false); }} className="w-full py-2 rounded bg-brand-accent text-brand-bg font-bold shadow-md hover:bg-brand-accentSec transition-colors">Admin</button>
              <button onClick={() => { navigate('/login'); setIsOpen(false); }} className="w-full py-2 rounded border border-brand-border text-brand-text hover:bg-brand-bg transition-colors">Login</button>
              <button onClick={() => { navigate('/register'); setIsOpen(false); }} className="w-full py-2 rounded border border-brand-border text-brand-text hover:bg-brand-bg transition-colors">Register</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-bg border-t border-brand-border pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <Dna className="h-8 w-8 text-brand-accent" />
              <span className="ml-2 text-xl font-heading font-bold text-brand-text">BioPulse</span>
            </div>
            <p className="text-brand-textSec text-sm leading-relaxed">
              Precision diagnostics powered by advanced technology. We deliver accurate results to empower your health decisions.
            </p>
            <div className="flex space-x-4 pt-2">
              <Facebook className="h-5 w-5 text-brand-textSec hover:text-brand-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-brand-textSec hover:text-brand-accent cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-brand-textSec hover:text-brand-accent cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-brand-text font-bold mb-4 border-b border-brand-accent inline-block pb-1">Quick Links</h3>
            <ul className="space-y-2 text-sm text-brand-textSec">
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/doctors" className="hover:text-brand-accent transition-colors">Our Doctors</Link></li>
              <li><Link to="/diagnostics" className="hover:text-brand-accent transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-brand-text font-bold mb-4 border-b border-brand-accent inline-block pb-1">Services</h3>
            <ul className="space-y-2 text-sm text-brand-textSec">
              <li><Link to="/diagnostics?category=Pathology" className="hover:text-brand-accent transition-colors">Pathology</Link></li>
              <li><Link to="/diagnostics?category=Radiology" className="hover:text-brand-accent transition-colors">Radiology</Link></li>
              <li><Link to="/diagnostics?category=Cardiac" className="hover:text-brand-accent transition-colors">Cardiac Profile</Link></li>
              <li><Link to="/diagnostics?category=Diabetes" className="hover:text-brand-accent transition-colors">Diabetes Care</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-brand-text font-bold mb-4 border-b border-brand-accent inline-block pb-1">Contact Us</h3>
            <ul className="space-y-4 text-sm text-brand-textSec">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-accent mr-2 shrink-0" />
                <span>123 Medical Plaza, Tech Park Blvd, Innovation City</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-accent mr-2 shrink-0" />
                <span>+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-accent mr-2 shrink-0" />
                <span>support@biopulse.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-textSec text-sm">© 2025 BioPulse Diagnostics. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-brand-textSec mt-4 md:mt-0">
            <Link to="#" className="hover:text-brand-text">Privacy Policy</Link>
            <Link to="#" className="hover:text-brand-text">Terms of Service</Link>
            <button onClick={scrollToTop} className="text-brand-accent hover:underline">Back to Top</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'patient' | 'doctor' | 'admin';
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, role }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getLinks = () => {
    switch (role) {
      case 'patient':
        return [
          { name: 'Dashboard', icon: LayoutDashboard, path: '/patient/dashboard' },
          { name: 'My Reports', icon: FileText, path: '/patient/reports' },
          { name: 'Profile', icon: Settings, path: '/patient/profile' },
        ];
      case 'doctor':
        return [
          { name: 'Dashboard', icon: LayoutDashboard, path: '/doctor/dashboard' },
          { name: 'My Patients', icon: Users, path: '/doctor/patients' },
          { name: 'Reports', icon: Activity, path: '/doctor/reports' },
        ];
      case 'admin':
        return [
          { name: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
          { name: 'Tests', icon: Dna, path: '/admin/tests' },
          { name: 'Doctors', icon: Users, path: '/admin/doctors' },
          { name: 'Reports', icon: FileText, path: '/admin/reports' },
        ];
      default: return [];
    }
  };

  const links = getLinks();

  return (
    <div className="min-h-screen bg-brand-bg flex transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-bgSec border-r border-brand-border hidden lg:flex flex-col transition-colors duration-300">
        <div className="h-20 flex items-center px-6 border-b border-brand-border cursor-pointer" onClick={() => navigate('/')}>
          <Dna className="h-8 w-8 text-brand-accent" />
          <span className="ml-2 text-xl font-heading font-bold text-brand-text">BioPulse</span>
        </div>
        <div className="flex-1 py-6 px-4 space-y-2">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${location.pathname === link.path
                  ? 'bg-brand-accent text-brand-bg font-bold shadow-[0_0_10px_var(--brand-accent)]'
                  : 'text-brand-textSec hover:bg-brand-bg'
                }`}
            >
              <link.icon className="h-5 w-5" />
              <span>{link.name}</span>
            </button>
          ))}
        </div>
        <div className="p-4 border-t border-brand-border">
          <button onClick={() => navigate('/')} className="w-full flex items-center space-x-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden h-16 bg-brand-bgSec flex items-center justify-between px-4 border-b border-brand-border shrink-0 transition-colors duration-300">
          <div className="flex items-center" onClick={() => navigate('/')}>
            <Dna className="h-8 w-8 text-brand-accent" />
            <span className="ml-2 font-bold text-brand-text">BioPulse</span>
          </div>
          <button onClick={() => navigate('/')}><LogOut className="h-6 w-6 text-red-400" /></button>
        </header>

        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};