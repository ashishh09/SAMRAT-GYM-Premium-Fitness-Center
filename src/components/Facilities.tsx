import React, { useState } from 'react';
import { Dumbbell, Activity, Compass, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { FACILITIES_DATA, BUSINESS_INFO } from '../data/gymData';

interface FacilitiesProps {
  onSelectPhoto?: (url: string) => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ onSelectPhoto }) => {
  const [filter, setFilter] = useState<'all' | 'strength' | 'cardio' | 'space' | 'amenity'>('all');

  const filteredFacilities = filter === 'all'
    ? FACILITIES_DATA
    : FACILITIES_DATA.filter((f) => f.category === filter);

  return (
    <section id="facilities" className="py-24 bg-[#090909] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FF6A00] mb-3">
              <Dumbbell className="w-3.5 h-3.5" />
              <span>EQUIPMENT & TRAINING ZONES</span>
            </div>
            <h2 className="font-athletic text-3xl sm:text-5xl font-bold tracking-tight uppercase leading-tight">
              GYM FACILITIES
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl font-normal">
              Explore the real training zones and equipment installed at SAMRAT GYM, Savarkar Nagar, CIDCO.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-neutral-900/90 border border-white/10 rounded-xl">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-[#FF6A00] text-white shadow-md shadow-[#FF6A00]/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Zones
            </button>
            <button
              onClick={() => setFilter('strength')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'strength'
                  ? 'bg-[#FF6A00] text-white shadow-md shadow-[#FF6A00]/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Strength & Weights
            </button>
            <button
              onClick={() => setFilter('cardio')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'cardio'
                  ? 'bg-[#FF6A00] text-white shadow-md shadow-[#FF6A00]/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Cardio Equipment
            </button>
            <button
              onClick={() => setFilter('space')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'space'
                  ? 'bg-[#FF6A00] text-white shadow-md shadow-[#FF6A00]/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Workout Space
            </button>
            <button
              onClick={() => setFilter('amenity')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'amenity'
                  ? 'bg-[#FF6A00] text-white shadow-md shadow-[#FF6A00]/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Environment
            </button>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFacilities.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-900/70 border border-white/10 rounded-2xl overflow-hidden hover:border-[#FF6A00]/40 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-black"
            >
              {/* Facility Image with real photo */}
              <div
                className="relative h-56 sm:h-64 overflow-hidden bg-neutral-950 cursor-pointer"
                onClick={() => onSelectPhoto && onSelectPhoto(item.imageUrl)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" />
                
                {/* Verified gym asset tag */}
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded text-[11px] font-semibold text-neutral-200 flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-[#FF6A00]" />
                  <span>Actual Photo</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xs uppercase tracking-wider text-[#FF6A00] font-bold">
                    {item.subtitle}
                  </p>
                  <h3 className="font-athletic text-2xl font-bold text-white uppercase leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Facility Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Verified Checklist */}
                <div className="space-y-2 pt-3 border-t border-white/5">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <div className="w-4 h-4 rounded-full bg-[#FF6A00]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#FF6A00]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Confirmed Amenities Notice */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#FF6A00]" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Verified On-Premises Amenities</p>
              <p className="text-xs text-neutral-400">
                Restroom facilities confirmed available on premises. Unconfirmed commercial claims or amenities are omitted.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#FF6A00] uppercase tracking-wider bg-black/50 px-3 py-2 rounded-lg border border-white/5">
            <span>Daily Closing Time: {BUSINESS_INFO.closingTime}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
