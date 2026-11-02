import React from 'react';
import { UserCheck, ShieldAlert, Dumbbell, MessageSquare, PhoneCall } from 'lucide-react';
import { TRAINER_INFO, BUSINESS_INFO } from '../data/gymData';

interface TrainersProps {
  onEnquireTrainer: (trainerName: string) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onEnquireTrainer }) => {
  return (
    <section id="trainers" className="py-24 bg-[#0D0D0D] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FF6A00] mb-3">
            <UserCheck className="w-4 h-4" />
            <span>FLOOR GUIDANCE & SUPPORT</span>
          </div>
          <h2 className="font-athletic text-3xl sm:text-5xl font-bold tracking-tight uppercase leading-tight mb-4">
            TRAIN WITH PURPOSE
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Having the right guidance ensures injury prevention and consistent fitness progress. Connect with the on-floor training staff at SAMRAT GYM.
          </p>
        </div>

        {/* Trainer Card Showcase */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-neutral-900/80 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#FF6A00]/40 transition-all duration-300 shadow-xl relative overflow-hidden">
            
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              {/* Silhouette / Modern Trainer Avatar */}
              <div className="sm:col-span-4 flex flex-col items-center justify-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-neutral-950 border border-white/10 flex flex-col items-center justify-center p-4 shadow-inner relative group">
                  <Dumbbell className="w-12 h-12 text-[#FF6A00] mb-2" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-300 text-center">
                    Fitness Trainer
                  </span>
                  <div className="absolute -bottom-2.5 bg-neutral-800 border border-white/15 px-2.5 py-0.5 rounded text-[10px] text-neutral-300 font-medium">
                    SAMRAT GYM
                  </div>
                </div>
              </div>

              {/* Trainer Details */}
              <div className="sm:col-span-8">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-athletic text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">
                    {TRAINER_INFO.name}
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#FF6A00]/15 text-[#FF6A00] border border-[#FF6A00]/30">
                    {TRAINER_INFO.role}
                  </span>
                </div>

                <p className="text-xs text-neutral-400 mb-4">
                  {TRAINER_INFO.affiliation}
                </p>

                <p className="text-neutral-300 text-sm leading-relaxed mb-5">
                  {TRAINER_INFO.notice}
                </p>

                {/* Focus areas */}
                <div className="mb-6">
                  <p className="text-xs uppercase font-semibold text-neutral-400 tracking-wider mb-2">
                    Floor Focus Areas:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {TRAINER_INFO.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onEnquireTrainer(TRAINER_INFO.name)}
                    className="px-5 py-2.5 bg-[#FF6A00] hover:bg-[#E55C00] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-[#FF6A00]/20"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire About Training</span>
                  </button>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold rounded-lg border border-white/10 transition-colors flex items-center gap-1.5"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#FF6A00]" />
                    <span>Ask Desk</span>
                  </a>
                </div>

              </div>

            </div>

          </div>

          {/* Transparent Editorial Note */}
          <div className="mt-4 p-3.5 rounded-xl bg-neutral-950/60 border border-white/5 text-center text-xs text-neutral-400">
            <span>Note: Trainer references are sourced from publicly available Google Reviews. No fabricated certifications or unverified titles are attributed.</span>
          </div>

        </div>

      </div>
    </section>
  );
};
