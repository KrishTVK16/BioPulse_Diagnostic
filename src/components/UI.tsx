import React from 'react';

export const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}> = ({ children, variant = 'primary', onClick, className = '', type = 'button' }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-bold transition-all duration-300 transform active:scale-95 flex items-center justify-center";
  const variants = {
    primary: "bg-brand-accent text-white hover:shadow-[0_0_15px_rgba(13,148,136,0.6)] dark:hover:shadow-[0_0_15px_rgba(0,245,192,0.6)] hover:-translate-y-1",
    secondary: "bg-brand-bgSec text-brand-text border border-brand-accent hover:bg-brand-accentSec hover:text-white hover:border-transparent",
    outline: "border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white"
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export const Card: React.FC<{ children: React.ReactNode; className?: string; hoverEffect?: boolean }> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div className={`bg-brand-bgSec border border-brand-border rounded-xl p-6 relative overflow-hidden ${hoverEffect ? 'hover:border-brand-accent hover:shadow-[0_0_20px_rgba(13,148,136,0.2)] dark:hover:shadow-[0_0_20px_rgba(0,245,192,0.2)] hover:scale-[1.02] transition-all duration-300' : ''} ${className}`}>
      {children}
    </div>
  );
};

export const SectionTitle: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'center' }) => {
  // Enforcing center alignment generally as requested
  return (
    <div className={`mb-12 text-center`}>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-text mb-4">
        {title}
      </h2>
      {subtitle && <div className={`h-1 w-20 bg-gradient-to-r from-brand-accent to-brand-accentSec rounded mx-auto`}></div>}
      {subtitle && <p className="mt-4 text-brand-textSec max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export const Modal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-brand-bgSec border border-brand-accent rounded-xl w-full max-w-lg shadow-[0_0_30px_rgba(13,148,136,0.3)] dark:shadow-[0_0_30px_rgba(0,245,192,0.3)] animate-in fade-in zoom-in duration-300">
        <div className="flex justify-between items-center p-6 border-b border-brand-border">
          <h3 className="text-xl font-heading font-bold text-brand-text">{title}</h3>
          <button onClick={onClose} className="text-brand-textSec hover:text-brand-text">&times;</button>
        </div>
        <div className="p-6 text-brand-textSec text-center">
          {children}
        </div>
      </div>
    </div>
  );
};