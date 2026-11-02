import React, { useState } from 'react';
import { Camera, Maximize2, Sparkles, Filter } from 'lucide-react';
import { GYM_PHOTOS, GymPhoto } from '../data/gymData';
import { LightboxModal } from './LightboxModal';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'strength' | 'cardio' | 'interior'>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos = activeCategory === 'all'
    ? GYM_PHOTOS
    : GYM_PHOTOS.filter((p) => p.category === activeCategory);

  const openLightbox = (photo: GymPhoto) => {
    const idx = GYM_PHOTOS.findIndex((p) => p.id === photo.id);
    if (idx !== -1) {
      setSelectedPhotoIndex(idx);
    }
  };

  const closeLightbox = () => setSelectedPhotoIndex(null);

  const prevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex - 1 + GYM_PHOTOS.length) % GYM_PHOTOS.length);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % GYM_PHOTOS.length);
  };

  return (
    <section id="gallery" className="py-24 bg-[#090909] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FF6A00] mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>INSIDE SAMRAT GYM</span>
            </div>
            <h2 className="font-athletic text-3xl sm:text-5xl font-bold tracking-tight uppercase leading-tight">
              FACILITY GALLERY
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl font-normal">
              Take a visual tour through our dedicated strength area, cardio studio, and modern fitness setups in CIDCO.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-neutral-900 border border-white/10 rounded-xl">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-[#FF6A00] text-white shadow-md shadow-[#FF6A00]/25'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Photos ({GYM_PHOTOS.length})
            </button>
            <button
              onClick={() => setActiveCategory('strength')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'strength'
                  ? 'bg-[#FF6A00] text-white shadow-md shadow-[#FF6A00]/25'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Strength & Iron
            </button>
            <button
              onClick={() => setActiveCategory('cardio')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'cardio'
                  ? 'bg-[#FF6A00] text-white shadow-md shadow-[#FF6A00]/25'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Cardio Fleet
            </button>
            <button
              onClick={() => setActiveCategory('interior')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'interior'
                  ? 'bg-[#FF6A00] text-white shadow-md shadow-[#FF6A00]/25'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Gym Floor
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo)}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-[#FF6A00]/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-black"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Tag */}
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-neutral-200 px-2.5 py-1 rounded">
                  {photo.tag}
                </div>

                {/* Expand Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-105 border border-white/10">
                  <Maximize2 className="w-4 h-4 text-[#FF6A00]" />
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-athletic text-lg font-bold text-white uppercase leading-snug drop-shadow-md">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 line-clamp-1">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Actual Facility Note */}
        <div className="mt-8 text-center text-xs text-neutral-400">
          <span>Click any image to view high-resolution photographs of SAMRAT GYM premises.</span>
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        photos={GYM_PHOTOS}
        currentIndex={selectedPhotoIndex ?? 0}
        isOpen={selectedPhotoIndex !== null}
        onClose={closeLightbox}
        onPrev={prevPhoto}
        onNext={nextPhoto}
      />
    </section>
  );
};
