import React from 'react';
import { MapPin, Phone, Clock, Star, Navigation, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0D0D0D] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FF6A00] mb-3">
            <MapPin className="w-4 h-4" />
            <span>FIND US IN CIDCO</span>
          </div>
          <h2 className="font-athletic text-3xl sm:text-5xl font-bold tracking-tight uppercase leading-tight mb-4">
            VISIT SAMRAT GYM
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-normal">
            Easily accessible location in Savarkar Nagar, N-5, CIDCO. Drop in for a look around or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Business Details & Action Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Primary Details Card */}
            <div className="bg-neutral-900/80 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div>
                <span className="text-xs uppercase font-bold text-[#FF6A00] tracking-wider">
                  Fitness Center
                </span>
                <h3 className="font-athletic text-2xl sm:text-3xl font-bold text-white uppercase mt-1">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-sm font-medium text-neutral-300">
                  {BUSINESS_INFO.marathiName}
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#FF6A00]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">Address</p>
                  <p className="text-sm text-neutral-200 mt-0.5 leading-relaxed font-medium">
                    Savarkar Nagar, N-5, CIDCO<br />
                    Chhatrapati Sambhajinagar, Maharashtra 431003
                  </p>
                  <p className="text-xs text-neutral-400 mt-1 font-mono">
                    Plus Code: {BUSINESS_INFO.plusCode}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#FF6A00]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">Phone Contact</p>
                  <p className="text-base text-white font-bold mt-0.5 tabular-nums">
                    {BUSINESS_INFO.phone}
                  </p>
                  <p className="text-xs text-neutral-400">
                    Call during opening hours for inquiries
                  </p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#FF6A00]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">Daily Closing Time</p>
                  <p className="text-sm text-white font-bold mt-0.5">
                    Closes at {BUSINESS_INFO.closingTime}
                  </p>
                  <p className="text-xs text-neutral-400">
                    Open for workout sessions through evening
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Star className="w-5 h-5 text-[#FF6A00] fill-[#FF6A00]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">Google Rating</p>
                  <p className="text-sm text-white font-bold mt-0.5">
                    {BUSINESS_INFO.rating} / 5.0 Rating
                  </p>
                  <p className="text-xs text-neutral-400">
                    Based on {BUSINESS_INFO.reviewCount} customer reviews
                  </p>
                </div>
              </div>

            </div>

            {/* Three Required Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Button 1: Call Now */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="py-3 px-4 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-4 h-4 text-[#FF6A00]" />
                <span>Call Now</span>
              </a>

              {/* Button 2: WhatsApp */}
              <a
                href={`https://wa.me/917020931941?text=${encodeURIComponent(
                  'Hello SAMRAT GYM! I would like to inquire about membership and gym timings.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-[#25D366]/20 flex items-center justify-center gap-2 text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              {/* Button 3: Get Directions */}
              <a
                href={BUSINESS_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-[#FF6A00] hover:bg-[#E55C00] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-[#FF6A00]/25 flex items-center justify-center gap-2 text-center"
              >
                <Navigation className="w-4 h-4" />
                <span>Directions</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Visual / Interactive Navigation Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex-1 bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden relative shadow-2xl min-h-[380px] flex flex-col">
              
              {/* Map header info */}
              <div className="p-4 bg-neutral-950 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FF6A00]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Google Maps Location
                  </span>
                </div>
                <a
                  href={BUSINESS_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#FF6A00] hover:underline font-semibold"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Interactive Map Iframe Embed with clean fallback */}
              <div className="flex-1 relative w-full h-full min-h-[340px]">
                <iframe
                  title="SAMRAT GYM Location Map"
                  src="https://maps.google.com/maps?q=SAMRAT+GYM+CIDCO+Chhatrapati+Sambhajinagar&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full min-h-[340px] border-0 filter grayscale-30 contrast-125"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  allowFullScreen
                />
                
                {/* Floating Map Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-black/90 backdrop-blur-md border border-white/15 p-4 rounded-xl shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FF6A00] flex items-center justify-center text-white shrink-0">
                      <Navigation className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase">SAMRAT GYM (सम्राट जिम)</p>
                      <p className="text-[11px] text-neutral-300">Savarkar Nagar, N-5, CIDCO</p>
                      <a
                        href={BUSINESS_INFO.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-[#FF6A00] font-semibold hover:underline inline-block mt-0.5"
                      >
                        Navigate with GPS →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
