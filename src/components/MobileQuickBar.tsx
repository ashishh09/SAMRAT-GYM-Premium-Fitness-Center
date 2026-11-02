import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

interface MobileQuickBarProps {
  onJoinClick: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onJoinClick }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-white/10 px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-neutral-900 border border-white/15 text-white font-bold text-xs uppercase tracking-wider active:bg-neutral-800 transition-colors"
        >
          <Phone className="w-4 h-4 text-[#FF6A00]" />
          <span>Call Desk</span>
        </a>

        <button
          onClick={onJoinClick}
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#FF6A00] text-white font-bold text-xs uppercase tracking-wider active:bg-[#E55C00] shadow-md shadow-[#FF6A00]/25 transition-colors cursor-pointer"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </button>
      </div>
    </div>
  );
};
