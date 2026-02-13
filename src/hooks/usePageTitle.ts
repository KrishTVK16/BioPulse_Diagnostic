import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles: Record<string, string> = {
  '/': '🧬 BioPulse Diagnostics | Precision in Every Test',
  '/home-v2': '🧬 BioPulse Diagnostics | Immersive Experience',
  '/diagnostics': '🧬 Diagnostic Catalog | BioPulse Diagnostics',
  '/appointments': '🧬 Book Appointment | BioPulse Diagnostics',
  '/about': '🧬 About Us | BioPulse Diagnostics',
  '/contact': '🧬 Contact Us | BioPulse Diagnostics',
  '/doctors': '🧬 Our Doctors | BioPulse Diagnostics',
  '/login': '🧬 Login | BioPulse Diagnostics',
  '/register': '🧬 Register | BioPulse Diagnostics',
  '/patient/dashboard': '🧬 Patient Dashboard | BioPulse Diagnostics',
  '/patient/reports': '🧬 My Reports | BioPulse Diagnostics',
  '/patient/profile': '🧬 My Profile | BioPulse Diagnostics',
  '/doctor/dashboard': '🧬 Doctor Dashboard | BioPulse Diagnostics',
  '/doctor/patients': '🧬 My Patients | BioPulse Diagnostics',
  '/doctor/reports': '🧬 Reports | BioPulse Diagnostics',
  '/admin/dashboard': '🧬 Admin Dashboard | BioPulse Diagnostics',
  '/admin/tests': '🧬 Manage Tests | BioPulse Diagnostics',
  '/admin/doctors': '🧬 Manage Doctors | BioPulse Diagnostics',
};

export const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    // With HashRouter, pathname contains the route (e.g., "/diagnostics")
    // The hash is not included in pathname
    let path = location.pathname || '/';
    
    // Normalize path
    if (path === '') {
      path = '/';
    }
    
    // Check for test details page
    if (path.startsWith('/test/')) {
      document.title = '🧬 Test Details | BioPulse Diagnostics';
      return;
    }

    // Get title from mapping or use default
    const title = pageTitles[path] || '🧬 BioPulse Diagnostics | Precision in Every Test';
    document.title = title;
  }, [location.pathname]);
};

