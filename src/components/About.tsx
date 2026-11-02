import React from 'react';
import { Star, Shield, Users, HeartHandshake, CheckCircle2, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export const About: React.FC = () => {
  const verifiedPillars = [
    {
      icon: Users,
      title: "Welcoming & Inclusive Culture",
      desc: "Recognized in member feedback for its warm, respectful environment—especially comfortable for female members and beginners alike."
    },
    {
      icon: Shield,
      title: "Focused Strength & Cardio",
      desc: "Balanced setup featuring dedicated heavy lifting equipment, cable setups, and a scenic glass-view cardio cycling floor."
    },
    {
      icon: HeartHandshake,
      title: "Helpful Floor Staff",
      desc: "Supportive on-floor assistance to help you get acquainted with new equipment, adjust weights, and maintain proper form."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0D0D0D] text-white relative overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6A00]/5 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF6A00]/5 blur-[90px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase using Real Gym Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 group">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-02_at_7.37.22_PM_e479815a.jpeg"
                alt="SAMRAT GYM workout floor and training environment"
                className="w-full h-[440px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              {/* Photo Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#FF6A00] font-semibold">Real Gym Facility</p>
                    <p className="text-sm font-medium text-white">Savarkar Nagar, CIDCO, Sambhajinagar</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-neutral-300 bg-white/10 px-2 py-1 rounded">
                    <span>Verified Space</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Rating Floating Badge */}
            <div className="absolute -top-6 -right-3 sm:-right-6 bg-neutral-900/95 backdrop-blur-md border border-[#FF6A00]/40 rounded-xl p-4 shadow-2xl">
              <div className="flex items-center gap-2">
                <div className="flex text-[#FF6A00]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF6A00]" />
                  ))}
                </div>
                <span className="font-athletic text-xl font-bold text-white tabular-nums">4.4</span>
              </div>
              <p className="text-[11px] text-neutral-400 mt-1 font-medium">
                Based on <strong className="text-white tabular-nums">29 verified reviews</strong>
              </p>
              <a
                href={BUSINESS_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#FF6A00] hover:underline font-semibold mt-1"
              >
                <span>View on Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Editorial & Factual Information */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FF6A00] mb-3">
              <span>LOCAL FITNESS CENTER</span>
              <span className="text-neutral-500">·</span>
              <span>CIDCO SAMBHAJINAGAR</span>
            </div>

            <h2 className="font-athletic text-3xl sm:text-5xl font-bold tracking-tight uppercase leading-tight mb-6">
              MORE THAN JUST A GYM
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Located in Savarkar Nagar, N-5, CIDCO, <strong className="text-white font-semibold">SAMRAT GYM (सम्राट जिम)</strong> is dedicated to practical strength, personal fitness, and sustainable healthy habits. We take pride in maintaining an approachable space where local fitness enthusiasts—both beginners and experienced lifters—can train with focus and comfort.
            </p>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8 font-normal">
              With a steady <strong className="text-white font-medium">4.4-star Google rating based on 29 verified member reviews</strong>, our gym is particularly appreciated for its supportive culture, clean environment, verified restroom amenities, and welcoming space for women members.
            </p>

            {/* Core Verified Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {verifiedPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-neutral-900/60 border border-white/5 hover:border-[#FF6A00]/30 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#FF6A00]/10 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-[#FF6A00]" />
                    </div>
                    <h3 className="font-athletic text-lg font-bold text-white uppercase mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-normal">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Verified Business Facts List */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0" />
                <span>Restroom Available</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0" />
                <span>Daily till 10:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0" />
                <span>CIDCO N-5 Location</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0" />
                <span>29 Google Reviews</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
