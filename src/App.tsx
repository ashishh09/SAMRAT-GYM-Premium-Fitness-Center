/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Facilities } from './components/Facilities';
import { Trainers } from './components/Trainers';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { EnquiryForm } from './components/EnquiryForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [prefilledInterest, setPrefilledInterest] = React.useState<string>('General Fitness & Gym Membership');

  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFacilities = () => {
    const el = document.getElementById('facilities');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireTrainer = (trainerName: string) => {
    setPrefilledInterest('Personal Trainer Guidance');
    const el = document.getElementById('enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090909] text-white flex flex-col font-sans selection:bg-[#FF6A00] selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onJoinClick={scrollToEnquiry} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onExploreClick={scrollToFacilities}
          onContactClick={scrollToContact}
        />

        <About />

        <Facilities onSelectPhoto={(url) => {
          const el = document.getElementById('gallery');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />

        <Trainers onEnquireTrainer={handleEnquireTrainer} />

        <Gallery />

        <Testimonials />

        <EnquiryForm prefilledInterest={prefilledInterest} />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Bar for Mobile Visitors */}
      <MobileQuickBar onJoinClick={scrollToEnquiry} />
    </div>
  );
}
