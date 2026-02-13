import React, { useEffect, useLayoutEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar, Footer, DashboardLayout } from './components/Layouts';

// Public Pages
import Home from './pages/Home';
import HomeV2 from './pages/HomeV2';
import Diagnostics from './pages/Diagnostics';
import TestDetails from './pages/TestDetails';
import Appointments from './pages/Appointments';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';

// Portals
import PatientDashboard from './pages/portals/PatientDashboard';
import DoctorDashboard from './pages/portals/DoctorDashboard';
import AdminDashboard from './pages/portals/AdminDashboard';

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  // useLayoutEffect fires before the browser paints the screen, 
  // ensuring the user sees the top of the page immediately without a flash of the scrolled-down view.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
};

// Generic 404
const NotFound = () => (
  <div className="min-h-screen bg-brand-bg flex items-center justify-center flex-col text-center p-4">
    <h1 className="text-9xl font-bold text-brand-bgSec">404</h1>
    <h2 className="text-3xl text-brand-text font-bold mb-4 -mt-10">Page Not Found</h2>
    <p className="text-brand-textSec mb-8">The page you are looking for does not exist.</p>
    <a href="/" className="px-6 py-3 bg-brand-accent text-brand-bg rounded font-bold hover:opacity-90">Return Home</a>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* Public Routes with Navbar/Footer */}
        <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
        <Route path="/home-v2" element={<><Navbar /><HomeV2 /><Footer /></>} />
        <Route path="/diagnostics" element={<><Navbar /><Diagnostics /><Footer /></>} />
        <Route path="/test/:id" element={<><Navbar /><TestDetails /><Footer /></>} />
        <Route path="/appointments" element={<><Navbar /><Appointments /><Footer /></>} />
        <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
        <Route path="/doctors" element={<><Navbar /><Doctors /><Footer /></>} />

        {/* Auth Pages (No Navbar/Footer) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard (No Navbar/Footer) */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Portals */}
        <Route path="/patient/*" element={
          <DashboardLayout role="patient">
            <Routes>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<PatientDashboard />} />
              <Route path="reports" element={<PatientDashboard />} />
              <Route path="profile" element={<PatientDashboard />} />
            </Routes>
          </DashboardLayout>
        } />

        <Route path="/doctor/*" element={
          <DashboardLayout role="doctor">
            <Routes>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<DoctorDashboard />} />
              <Route path="patients" element={<DoctorDashboard />} />
              <Route path="reports" element={<DoctorDashboard />} />
            </Routes>
          </DashboardLayout>
        } />

        <Route path="/admin/*" element={
          <DashboardLayout role="admin">
            <Routes>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="tests" element={<AdminDashboard />} />
              <Route path="doctors" element={<AdminDashboard />} />
            </Routes>
          </DashboardLayout>
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default App;