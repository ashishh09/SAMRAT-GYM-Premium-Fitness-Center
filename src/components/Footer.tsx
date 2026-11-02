import React from 'react';
import { Dumbbell, Phone, MapPin, Clock, ArrowUp, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-neutral-400 border-t border-white/10 pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Summary */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#FF6A00] flex items-center justify-center text-white shadow-lg shadow-[#FF6A00]/25">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-athletic text-2xl font-bold tracking-wider text-white uppercase leading-tight">
                  {BUSINESS_INFO.name}
                </span>
                <span className="text-[11px] font-medium tracking-widest text-[#FF6A00] -mt-0.5">
                  {BUSINESS_INFO.marathiName}
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm mb-6">
              A dedicated local fitness center in CIDCO, Chhatrapati Sambhajinagar. Focused on strength training, weight training, cardio conditioning, and maintaining a welcoming, ladies-friendly environment.
            </p>

            <div className="flex items-center gap-2 text-xs text-neutral-300">
              <div className="flex text-[#FF6A00]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FF6A00]" />
                ))}
              </div>
              <span className="font-semibold text-white">4.4/5 Rating</span>
              <span className="text-neutral-500">·</span>
              <span>29 Google Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-athletic text-sm uppercase tracking-wider text-white font-bold mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-[#FF6A00] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FF6A00] transition-colors">
                  About Samrat Gym
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-[#FF6A00] transition-colors">
                  Facilities & Equipment
                </a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-[#FF6A00] transition-colors">
                  Trainers & Guidance
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FF6A00] transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#FF6A00] transition-colors">
                  Member Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FF6A00] transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4">
            <h4 className="font-athletic text-sm uppercase tracking-wider text-white font-bold mb-4">
              Gym Location & Hours
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6A00] shrink-0 mt-0.5" />
                <span>
                  Savarkar Nagar, N-5, CIDCO, Chhatrapati Sambhajinagar, Maharashtra 431003
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF6A00] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="hover:text-[#FF6A00] transition-colors font-medium text-white tabular-nums"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#FF6A00] shrink-0" />
                <span>Open Daily • Closes at {BUSINESS_INFO.closingTime}</span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href={BUSINESS_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-semibold text-[#FF6A00] hover:underline"
              >
                Plus Code: {BUSINESS_INFO.plusCode} →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            Copyright © 2026 SAMRAT GYM (सम्राट जिम). All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-300 hover:text-[#FF6A00] transition-colors cursor-pointer py-1"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
