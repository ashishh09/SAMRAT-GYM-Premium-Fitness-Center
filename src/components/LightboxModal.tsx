import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GymPhoto } from '../data/gymData';

interface LightboxModalProps {
  photos: GymPhoto[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !photos[currentIndex]) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gym Photo Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Top action bar */}
      <div
        className="absolute top-4 left-4 right-4 flex items-center justify-between z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 bg-black/60 px-3 py-1.5 rounded-lg border border-white/10 text-xs text-neutral-300">
          <span className="font-semibold text-white">{currentPhoto.tag}</span>
          <span>·</span>
          <span className="tabular-nums font-mono">
            {currentIndex + 1} / {photos.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/10"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[82vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentPhoto.url}
          alt={currentPhoto.title}
          className="max-h-[72vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
          referrerPolicy="no-referrer"
        />

        {/* Caption bar */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <h4 className="font-athletic text-xl font-bold text-white uppercase tracking-wide">
            {currentPhoto.title}
          </h4>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            {currentPhoto.description}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-[#FF6A00] text-white border border-white/15 transition-all duration-200 cursor-pointer shadow-xl z-20 group"
        aria-label="Previous Photo"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-[#FF6A00] text-white border border-white/15 transition-all duration-200 cursor-pointer shadow-xl z-20 group"
        aria-label="Next Photo"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>
    </div>
  );
};
