import React from 'react';

interface FooterProps {
  onContactClick: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'LinkedIn', url: 'https://linkedin.com/' },
    { label: 'Behance', url: 'https://behance.net/' },
    { label: 'GitHub', url: 'https://github.com/' }
  ];

  return (
    <footer className="w-full bg-[#060e20]/90 backdrop-blur-lg border-t border-white/10 py-12 relative overflow-hidden">
      {/* Visual background line separator glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex flex-col items-center justify-center text-center gap-8">
        
        <div className="flex flex-col items-center gap-3">
          <span className="font-display text-2xl font-black text-white tracking-tighter">
            DICKY <span className="text-primary">ARYADI</span>
          </span>

          <p className="font-mono text-xs text-on-surface-variant-custom/60 tracking-wide select-none">
            © {currentYear} Dicky Aryadi. Web Dev & AI Enthusiast.
          </p>
        </div>

      </div>
    </footer>
  );
}
