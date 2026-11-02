export interface GymPhoto {
  id: string;
  url: string;
  title: string;
  category: 'all' | 'strength' | 'cardio' | 'interior';
  description: string;
  tag: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  quote: string;
  highlight: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  features: string[];
  category: 'strength' | 'cardio' | 'space' | 'amenity';
}

export const BUSINESS_INFO = {
  name: "SAMRAT GYM",
  marathiName: "सम्राट जिम",
  tagline: "Build Your Strength. Define Yourself.",
  category: "Fitness Center / Gym",
  address: "Savarkar Nagar, N-5, CIDCO, Chhatrapati Sambhajinagar, Maharashtra 431003",
  postalCode: "431003",
  phone: "070209 31941",
  phoneFormatted: "+91 70209 31941",
  phoneRaw: "7020931941",
  whatsappNumber: "+917020931941",
  closingTime: "10:00 PM",
  hoursText: "Open Daily • Closes at 10:00 PM",
  rating: 4.4,
  reviewCount: 29,
  plusCode: "V9M7+3W, Chhatrapati Sambhajinagar",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=SAMRAT+GYM+V9M7%2B3W+Chhatrapati+Sambhajinagar",
  mapsEmbedQuery: "SAMRAT+GYM+CIDCO+Chhatrapati+Sambhajinagar",
  amenities: [
    { name: "Restroom", status: "Verified Facility Amenity", icon: "bath" },
    { name: "Ventilated Floor with Windows", status: "Verified Facility Feature", icon: "wind" },
    { name: "Ladies-Friendly Environment", status: "Highlighted in Member Reviews", icon: "shield-check" },
    { name: "Personal Trainer Guidance", status: "Available On-Floor", icon: "user-check" }
  ]
};

// Real photographs provided by SAMRAT GYM
export const GYM_PHOTOS: GymPhoto[] = [
  {
    id: "photo-1",
    url: "/assets/aistudio/WhatsApp_Image_2026-11-02_at_7.37.24_PM__1__872b2482.jpeg",
    title: "Main Strength & Cable Cross Station",
    category: "strength",
    description: "Multi-functional cable crossover machine, full mirror lineup, yellow selectorized pulldown station, and free weights zone.",
    tag: "Strength Arena"
  },
  {
    id: "photo-2",
    url: "/assets/aistudio/WhatsApp_Image_2026-11-02_at_7.37.24_PM_a0c950af.jpeg",
    title: "Commercial Treadmills Row",
    category: "cardio",
    description: "High-grade cardiovascular treadmills positioned alongside floor-to-ceiling panoramic glass windows for focused endurance sessions.",
    tag: "Cardio Zone"
  },
  {
    id: "photo-3",
    url: "/assets/aistudio/WhatsApp_Image_2026-11-02_at_7.37.23_PM__2__c52bd03f.jpeg",
    title: "Cardio & Spin Cycling Studio",
    category: "cardio",
    description: "Dedicated green turf conditioning zone featuring spin bikes, cross trainers, and open floor space with abundant natural lighting.",
    tag: "Spin & Turf"
  },
  {
    id: "photo-4",
    url: "/assets/aistudio/WhatsApp_Image_2026-11-02_at_7.37.23_PM__1__92b21662.jpeg",
    title: "Spin Bikes & Aerobic Fleet",
    category: "cardio",
    description: "Ergonomic high-resistance indoor cycling bikes and elliptical trainers framed by expansive outdoor-view glass panels.",
    tag: "Endurance"
  },
  {
    id: "photo-5",
    url: "/assets/aistudio/WhatsApp_Image_2026-11-02_at_7.37.23_PM_96841da1.jpeg",
    title: "Smith Machine & Olympic Power Cage",
    category: "strength",
    description: "Guided barbell Smith machine, Olympic weight plates, safety catches, and mirrored checking station for precise squat and press form.",
    tag: "Power Training"
  },
  {
    id: "photo-6",
    url: "/assets/aistudio/WhatsApp_Image_2026-11-02_at_7.37.22_PM__1__2b4ecc1e.jpeg",
    title: "Leg Press & Hack Squat Rig",
    category: "strength",
    description: "Commercial 45-degree leg press and hack squat machinery equipped for progressive lower-body overload and quad development.",
    tag: "Leg Department"
  },
  {
    id: "photo-7",
    url: "/assets/aistudio/WhatsApp_Image_2026-11-02_at_7.37.22_PM_e479815a.jpeg",
    title: "Comprehensive Strength Equipment Floor",
    category: "interior",
    description: "Spacious training floor with seated chest press, lat machines, and open pathways providing a comfortable workout environment.",
    tag: "Gym Interior"
  }
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: "strength-training",
    title: "Strength & Power Training",
    subtitle: "Heavy Iron & Guided Power Systems",
    description: "Equipped with heavy-duty Smith machine, Olympic barbells, weighted plate trees, and multi-angle benches for compound muscle building.",
    imageUrl: "/assets/aistudio/WhatsApp_Image_2026-11-02_at_7.37.23_PM_96841da1.jpeg",
    features: ["Olympic barbells & bumper plates", "Guided Smith rack for squats & presses", "Full length mirrors for posture verification"],
    category: "strength"
  },
  {
    id: "weight-training",
    title: "Weight Training & Cable Cross",
    subtitle: "Complete Isolation & Compound Machines",
    description: "Versatile cable crossover station, leg press, lat pulldowns, and full dumbbell racks allowing targeted muscle hypertrophy.",
    imageUrl: "/assets/aistudio/WhatsApp_Image_2026-11-02_at_7.37.24_PM__1__872b2482.jpeg",
    features: ["Dual adjustable cable crossover", "45-degree commercial leg press", "Dumbbells and selectorized stations"],
    category: "strength"
  },
  {
    id: "fitness-equipment",
    title: "Cardio & Endurance Fleet",
    subtitle: "Treadmills, Spin Bikes & Ellipticals",
    description: "Modern cardio machinery designed for heart health, stamina conditioning, and calorie burn, set against panoramic daylight windows.",
    imageUrl: "/assets/aistudio/WhatsApp_Image_2026-11-02_at_7.37.24_PM_a0c950af.jpeg",
    features: ["Commercial grade running treadmills", "High-intensity indoor spin cycles", "Low-impact elliptical trainers"],
    category: "cardio"
  },
  {
    id: "workout-space",
    title: "Dedicated Functional Turf Space",
    subtitle: "Conditioning & Movement Zone",
    description: "Distinct green turf section providing ample floor room for core conditioning, mobility routines, stretching, and athletic drills.",
    imageUrl: "/assets/aistudio/WhatsApp_Image_2026-11-02_at_7.37.23_PM__2__c52bd03f.jpeg",
    features: ["Shock-absorbent green turf flooring", "Medicine balls & functional accessories", "Open mobility & stretching zone"],
    category: "space"
  },
  {
    id: "workout-environment",
    title: "Comfortable Workout Environment",
    subtitle: "Positive Culture & Ladies-Friendly",
    description: "Welcoming atmosphere widely praised by members for respectful culture, attentive staff assistance, and comfort for female fitness enthusiasts.",
    imageUrl: "/assets/aistudio/WhatsApp_Image_2026-11-02_at_7.37.22_PM_e479815a.jpeg",
    features: ["Specially comfortable for ladies", "Supportive & polite community", "Well-ventilated floor with natural light"],
    category: "amenity"
  }
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Local Member",
    rating: 5,
    timeAgo: "Google Verified Review",
    quote: "Best Gym Ever.. Specially Very Comfortable For Ladies than other gyms.",
    highlight: "Very Comfortable For Ladies"
  },
  {
    id: "rev-2",
    author: "Active Member",
    rating: 5,
    timeAgo: "Google Verified Review",
    quote: "Good Gym, nice culture and helpful staff, new equipments.",
    highlight: "Nice Culture & New Equipments"
  },
  {
    id: "rev-3",
    author: "Fitness Enthusiast",
    rating: 4,
    timeAgo: "Google Verified Review",
    quote: "Every thing is good but a bit crowded.",
    highlight: "Popular & Well-Equipped"
  },
  {
    id: "rev-4",
    author: "Local Guide",
    rating: 5,
    timeAgo: "Google Verified Review",
    quote: "Nice fitness center.",
    highlight: "Clean & Recommended"
  }
];

export const TRAINER_INFO = {
  name: "Chetan Kolhe",
  role: "Fitness Trainer",
  affiliation: "Identified via Google Reviews",
  badge: "Trainer Profile Placeholder",
  notice: "Mentioned by gym members as an on-floor fitness trainer at SAMRAT GYM. Contact the gym desk to arrange form checks and training slots.",
  skills: [
    "Workout Routine Guidance",
    "Proper Exercise Form & Posture",
    "Strength & Conditioning Basics",
    "Equipment Onboarding"
  ]
};
