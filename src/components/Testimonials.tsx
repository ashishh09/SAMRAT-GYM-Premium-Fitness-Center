import React from 'react';
import { Star, MessageCircle, Quote, ExternalLink, ShieldCheck } from 'lucide-react';
import { GOOGLE_REVIEWS, BUSINESS_INFO } from '../data/gymData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0D0D0D] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FF6A00] mb-3">
              <MessageCircle className="w-4 h-4" />
              <span>AUTHENTIC FEEDBACK</span>
            </div>
            <h2 className="font-athletic text-3xl sm:text-5xl font-bold tracking-tight uppercase leading-tight">
              WHAT MEMBERS SAY
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl font-normal">
              Actual quotes and feedback shared by members on Google Maps. No fabricated testimonials.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900 border border-white/10 shrink-0">
            <div className="w-12 h-12 rounded-lg bg-[#FF6A00]/15 flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 text-[#FF6A00] fill-[#FF6A00]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-athletic text-2xl font-bold text-white tabular-nums">
                  {BUSINESS_INFO.rating}
                </span>
                <div className="flex text-[#FF6A00]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${i < 4 ? 'fill-[#FF6A00]' : 'fill-[#FF6A00]/50'}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-xs text-neutral-400 font-medium">
                Based on <strong className="text-white tabular-nums">{BUSINESS_INFO.reviewCount} Reviews</strong> on Google Maps
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-neutral-900/70 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#FF6A00]/30 transition-all duration-300 relative group"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-[#FF6A00]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF6A00]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-neutral-700 group-hover:text-[#FF6A00]/30 transition-colors" />
              </div>

              {/* Review Text */}
              <div className="mb-6 flex-1">
                <blockquote className="text-base sm:text-lg text-neutral-100 font-medium leading-relaxed italic">
                  "{review.quote}"
                </blockquote>
              </div>

              {/* Review Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div>
                  <p className="text-sm font-semibold text-white">
                    {review.author}
                  </p>
                  <p className="text-xs text-neutral-400">
                    {review.timeAgo}
                  </p>
                </div>
                <div className="text-xs font-semibold px-2.5 py-1 rounded bg-neutral-800 text-neutral-300 border border-white/5">
                  {review.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read on Google CTA */}
        <div className="text-center">
          <a
            href={BUSINESS_INFO.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white rounded-xl border border-white/10 hover:border-[#FF6A00]/40 transition-all text-xs font-bold uppercase tracking-wider shadow-lg"
          >
            <span>View All 29 Google Maps Reviews</span>
            <ExternalLink className="w-4 h-4 text-[#FF6A00]" />
          </a>
        </div>

      </div>
    </section>
  );
};
