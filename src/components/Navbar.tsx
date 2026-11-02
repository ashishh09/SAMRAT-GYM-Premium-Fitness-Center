import React, { useState, useEffect } from 'react';
import { Dumbbell, Menu, X, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

interface NavbarProps {
  onJoinClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090909]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl shadow-black/50'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group whitespace-nowrap shrink-0"
            aria-label="SAMRAT GYM Home"
          >
            <div className="w-10 h-10 rounded-lg bg-[#FF6A00] flex items-center justify-center text-white shadow-lg shadow-[#FF6A00]/30 transition-transform group-hover:scale-105">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-athletic text-2xl font-bold tracking-wider text-white leading-tight uppercase group-hover:text-[#FF6A00] transition-colors">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[11px] font-medium tracking-widest text-[#FF6A00] -mt-0.5">
                {BUSINESS_INFO.marathiName}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#FF6A00] transition-colors py-1 relative text-[15px] font-medium tracking-wide whitespace-nowrap shrink-0 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6A00] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Quick Phone (Desktop) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hidden xl:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-300 hover:text-white border border-white/10 hover:border-white/30 rounded-lg transition-colors whitespace-nowrap"
              title="Call Samrat Gym"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF6A00]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={onJoinClick}
              className="px-5 py-2.5 text-sm font-semibold tracking-wide text-white bg-[#FF6A00] hover:bg-[#E55C00] rounded-lg shadow-lg shadow-[#FF6A00]/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap cursor-pointer"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onJoinClick}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#FF6A00] rounded-md tracking-wider uppercase"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white focus:outline-none rounded-lg bg-neutral-900 border border-white/10"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#FF6A00]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0F0F0F] border-b border-white/10 px-4 pt-4 pb-6 mt-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 text-base font-semibold text-neutral-200 hover:text-[#FF6A00] hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-white/15 text-white font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-[#FF6A00]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onJoinClick();
                }}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#FF6A00] text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#FF6A00]/30"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
