import React from 'react';
import { ArrowRight, Star, MapPin, Clock, ShieldCheck, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#090909]">
      {/* Background with real gym photo & cinematic multi-layer scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/WhatsApp_Image_2026-11-02_at_7.37.24_PM__1__872b2482.jpeg"
          alt="SAMRAT GYM Training Floor and Equipment"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-110 transform transition-transform duration-1000 ease-out"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to guarantee WCAG AAA text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/80 to-black/75" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#090909]/60 to-[#090909]" />
        
        {/* Subtle orange ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF6A00]/15 blur-[120px] pointer-events-none rounded-full" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Identity kicker: unboxed clean text separator without pills */}
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-300 mb-6 bg-black/60 backdrop-blur-sm border border-white/10 px-3.5 py-1.5 rounded-md">
            <span className="text-[#FF6A00] font-bold">SAMRAT GYM</span>
            <span className="text-neutral-500">|</span>
            <span className="text-white font-medium">{BUSINESS_INFO.marathiName}</span>
            <span className="text-neutral-500">·</span>
            <span className="text-neutral-300">CIDCO, Sambhajinagar</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-athletic text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[0.95] mb-6 text-balance">
            BUILD YOUR STRENGTH. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] via-[#FF8A33] to-[#FFA866]">
              DEFINE YOURSELF.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal mb-8 max-w-2xl">
            Your fitness journey starts here. Train harder, grow stronger and become the best version of yourself in a welcoming and well-equipped environment.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onExploreClick}
              className="px-8 py-3.5 bg-[#FF6A00] hover:bg-[#E55C00] text-white text-base font-bold tracking-wide uppercase rounded-lg shadow-xl shadow-[#FF6A00]/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Gym</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={onContactClick}
              className="px-8 py-3.5 bg-neutral-900/90 hover:bg-neutral-800 text-white hover:text-white text-base font-bold tracking-wide uppercase rounded-lg border border-white/15 hover:border-white/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </div>

      {/* Trust & Proof Strip: 4 verified business data points */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 bg-neutral-950/85 backdrop-blur-md rounded-xl border border-white/10">
          {/* Item 1: Google Rating */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#FF6A00]/15 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 text-[#FF6A00] fill-[#FF6A00]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-bold text-white text-base leading-tight">
                <span className="tabular-nums font-athletic text-lg">{BUSINESS_INFO.rating}</span>
                <span className="text-xs text-neutral-400 font-normal">/ 5.0</span>
              </div>
              <div className="text-xs text-neutral-400">
                <span className="tabular-nums">{BUSINESS_INFO.reviewCount}</span> Google Reviews
              </div>
            </div>
          </div>

          {/* Item 2: Location */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#FF6A00]" />
            </div>
            <div>
              <div className="font-bold text-white text-sm leading-tight">
                N-5, CIDCO
              </div>
              <div className="text-xs text-neutral-400 truncate">
                Chhatrapati Sambhajinagar
              </div>
            </div>
          </div>

          {/* Item 3: Closing Time */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-[#FF6A00]" />
            </div>
            <div>
              <div className="font-bold text-white text-sm leading-tight">
                Open Daily
              </div>
              <div className="text-xs text-neutral-400">
                Closes at <span className="text-white font-medium">{BUSINESS_INFO.closingTime}</span>
              </div>
            </div>
          </div>

          {/* Item 4: Ladies Friendly Culture */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#FF6A00]/15 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#FF6A00]" />
            </div>
            <div>
              <div className="font-bold text-white text-sm leading-tight">
                Comfortable Culture
              </div>
              <div className="text-xs text-neutral-400">
                Highly Rated for Ladies
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={onExploreClick}
            aria-label="Scroll to Facilities section"
            className="text-neutral-400 hover:text-white transition-colors p-2 animate-bounce cursor-pointer"
          >
            <ChevronDown className="w-5 h-5 text-[#FF6A00]" />
          </button>
        </div>
      </div>
    </section>
  );
};
