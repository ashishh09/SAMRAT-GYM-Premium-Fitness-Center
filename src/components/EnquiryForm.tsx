import React, { useState } from 'react';
import { MessageSquare, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

interface FormState {
  fullName: string;
  phone: string;
  interestedIn: string;
  preferredTime: string;
  message: string;
}

interface EnquiryFormProps {
  prefilledInterest?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ prefilledInterest }) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    interestedIn: prefilledInterest || 'General Fitness & Gym Membership',
    preferredTime: 'Morning Session',
    message: ''
  });

  React.useEffect(() => {
    if (prefilledInterest) {
      setFormData((prev) => ({ ...prev, interestedIn: prefilledInterest }));
    }
  }, [prefilledInterest]);

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    'General Fitness & Gym Membership',
    'Strength & Weight Training',
    'Cardio & Weight Management',
    'Personal Trainer Guidance',
    'Visit & In-Person Tour'
  ];

  const timingOptions = [
    'Morning Session',
    'Evening Session',
    'Flexible Timings'
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    // Indian phone number validation: 10 digits, optionally starting with 0 or +91
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    const phoneRegex = /^(?:\+?91|0)?[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Build WhatsApp message text
    const textLines = [
      `*New Membership Enquiry – SAMRAT GYM*`,
      ``,
      `*Name:* ${formData.fullName.trim()}`,
      `*Contact:* ${formData.phone.trim()}`,
      `*Interested In:* ${formData.interestedIn}`,
      `*Preferred Time:* ${formData.preferredTime}`,
    ];

    if (formData.message.trim()) {
      textLines.push(`*Message:* ${formData.message.trim()}`);
    }

    textLines.push(``);
    textLines.push(`_Sent via samratgym.in website enquiry_`);

    const encodedMessage = encodeURIComponent(textLines.join('\n'));
    const whatsappUrl = `https://wa.me/917020931941?text=${encodedMessage}`;

    setIsSubmitted(true);

    // Open WhatsApp in new tab or direct window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="enquiry" className="py-24 bg-[#090909] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-neutral-900/90 border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6A00]/10 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center max-w-xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FF6A00] mb-3">
                <MessageSquare className="w-4 h-4" />
                <span>DIRECT WHATSAPP ENQUIRY</span>
              </div>
              <h2 className="font-athletic text-3xl sm:text-5xl font-bold tracking-tight uppercase leading-tight mb-3">
                START YOUR FITNESS JOURNEY
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base">
                Fill in your details below to directly connect with SAMRAT GYM on WhatsApp. Quick responses during gym hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-neutral-950 border border-green-500/30 rounded-2xl p-8 text-center max-w-md mx-auto animate-in fade-in zoom-in-95 duration-300">
                <div className="w-14 h-14 bg-green-500/15 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-athletic text-2xl font-bold text-white uppercase mb-2">
                  Enquiry Prepared
                </h3>
                <p className="text-sm text-neutral-300 mb-6">
                  WhatsApp was opened with your enquiry details. If it did not launch automatically, tap the button below:
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={`https://wa.me/917020931941?text=${encodeURIComponent(
                      `Namaste SAMRAT GYM, I am ${formData.fullName} inquiring about ${formData.interestedIn}. Phone: ${formData.phone}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open in WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        interestedIn: 'General Fitness & Gym Membership',
                        preferredTime: 'Morning Session',
                        message: ''
                      });
                    }}
                    className="text-xs text-neutral-400 hover:text-white underline cursor-pointer mt-2"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Full Name <span className="text-[#FF6A00]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-3 rounded-xl bg-neutral-950 border ${
                        errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-[#FF6A00]'
                      } text-white placeholder-neutral-600 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Phone Number <span className="text-[#FF6A00]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="e.g. 9876543210"
                      className={`w-full px-4 py-3 rounded-xl bg-neutral-950 border ${
                        errors.phone ? 'border-red-500' : 'border-white/10 focus:border-[#FF6A00]'
                      } text-white placeholder-neutral-600 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Interested In */}
                  <div>
                    <label htmlFor="interestedIn" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Interested In
                    </label>
                    <select
                      id="interestedIn"
                      value={formData.interestedIn}
                      onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 focus:border-[#FF6A00] text-white text-sm focus:outline-none transition-colors cursor-pointer"
                    >
                      {interestOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-neutral-900 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Timing */}
                  <div>
                    <label htmlFor="preferredTime" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Preferred Workout Time
                    </label>
                    <select
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 focus:border-[#FF6A00] text-white text-sm focus:outline-none transition-colors cursor-pointer"
                    >
                      {timingOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-neutral-900 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* Optional Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Message / Special Goals (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your fitness goal or any questions..."
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 focus:border-[#FF6A00] text-white placeholder-neutral-600 text-sm focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-neutral-400 text-center sm:text-left">
                    <span>Direct connection to official WhatsApp: <strong className="text-white">+91 70209 31941</strong></span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#FF6A00] hover:bg-[#E55C00] text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-[#FF6A00]/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send WhatsApp Enquiry</span>
                  </button>
                </div>
              </form>
            )}

            {/* Direct Call Alternative */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
              <span>Prefer to speak directly? Call desk anytime before 10 PM.</span>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 text-white hover:text-[#FF6A00] font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF6A00]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
