"use client";

import { useState } from "react";

const membershipPlans = [
  {
    name: "Starter",
    price: 29,
    period: "month",
    description: "Perfect for beginners",
    features: [
      "Access to gym floor",
      "Basic equipment usage",
      "Locker room access",
      "2 group classes/month",
      "Fitness assessment",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: 59,
    period: "month",
    description: "Most popular choice",
    features: [
      "Everything in Starter",
      "Unlimited group classes",
      "Personal trainer intro session",
      "Sauna & steam room",
      "Nutrition consultation",
      "Guest passes (2/month)",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: 99,
    period: "month",
    description: "Ultimate fitness experience",
    features: [
      "Everything in Pro",
      "4 PT sessions/month",
      "Priority class booking",
      "Recovery zone access",
      "Custom meal plans",
      "24/7 gym access",
      "Exclusive member events",
    ],
    popular: false,
  },
];

const classSchedule = [
  { day: "Monday", classes: [
    { time: "6:00 AM", name: "HIIT Burn", trainer: "Sarah", duration: "45 min" },
    { time: "12:00 PM", name: "Power Yoga", trainer: "Mike", duration: "60 min" },
    { time: "6:00 PM", name: "Strength Training", trainer: "Jake", duration: "50 min" },
  ]},
  { day: "Tuesday", classes: [
    { time: "7:00 AM", name: "Spin Class", trainer: "Emma", duration: "45 min" },
    { time: "5:30 PM", name: "Boxing Fundamentals", trainer: "Carlos", duration: "60 min" },
    { time: "7:00 PM", name: "Core Crusher", trainer: "Sarah", duration: "30 min" },
  ]},
  { day: "Wednesday", classes: [
    { time: "6:00 AM", name: "CrossFit WOD", trainer: "Jake", duration: "60 min" },
    { time: "12:00 PM", name: "Pilates", trainer: "Lisa", duration: "50 min" },
    { time: "6:00 PM", name: "Kickboxing", trainer: "Carlos", duration: "45 min" },
  ]},
  { day: "Thursday", classes: [
    { time: "7:00 AM", name: "Morning Flow Yoga", trainer: "Mike", duration: "60 min" },
    { time: "5:30 PM", name: "Strength & Conditioning", trainer: "Jake", duration: "50 min" },
    { time: "7:00 PM", name: "Dance Fitness", trainer: "Emma", duration: "45 min" },
  ]},
  { day: "Friday", classes: [
    { time: "6:00 AM", name: "HIIT Burn", trainer: "Sarah", duration: "45 min" },
    { time: "12:00 PM", name: "TRX Training", trainer: "Lisa", duration: "45 min" },
    { time: "5:00 PM", name: "Friday Fight Club", trainer: "Carlos", duration: "60 min" },
  ]},
  { day: "Saturday", classes: [
    { time: "8:00 AM", name: "Weekend Warrior", trainer: "Jake", duration: "90 min" },
    { time: "10:00 AM", name: "Family Fitness", trainer: "Emma", duration: "45 min" },
    { time: "12:00 PM", name: "Recovery Yoga", trainer: "Mike", duration: "60 min" },
  ]},
  { day: "Sunday", classes: [
    { time: "9:00 AM", name: "Gentle Yoga", trainer: "Mike", duration: "60 min" },
    { time: "11:00 AM", name: "Open Gym", trainer: "Staff", duration: "All Day" },
  ]},
];

const trainers = [
  {
    name: "Jake Morrison",
    role: "Head Coach & Strength Specialist",
    bio: "15+ years experience. Former competitive powerlifter with certifications in CrossFit L3 and CSCS.",
    specialties: ["Strength Training", "CrossFit", "Athletic Performance"],
    image: "JM",
  },
  {
    name: "Sarah Chen",
    role: "HIIT & Cardio Expert",
    bio: "Certified ACE trainer passionate about high-intensity workouts that deliver results fast.",
    specialties: ["HIIT", "Circuit Training", "Weight Loss"],
    image: "SC",
  },
  {
    name: "Mike Rodriguez",
    role: "Yoga & Mobility Coach",
    bio: "RYT-500 certified yoga instructor specializing in athletic recovery and flexibility.",
    specialties: ["Yoga", "Mobility", "Injury Prevention"],
    image: "MR",
  },
  {
    name: "Emma Thompson",
    role: "Group Fitness Director",
    bio: "Energetic instructor with expertise in dance fitness and spin. Makes every class a party.",
    specialties: ["Spin", "Dance Fitness", "Group Training"],
    image: "ET",
  },
  {
    name: "Carlos Vega",
    role: "Combat Sports Trainer",
    bio: "Professional MMA background with 10+ years teaching boxing and kickboxing to all levels.",
    specialties: ["Boxing", "Kickboxing", "Self-Defense"],
    image: "CV",
  },
  {
    name: "Lisa Park",
    role: "Pilates & Core Specialist",
    bio: "Certified Pilates instructor focused on building core strength and improving posture.",
    specialties: ["Pilates", "Core Training", "Rehabilitation"],
    image: "LP",
  },
];

const facilities = [
  { name: "Weight Floor", description: "10,000 sq ft of free weights, machines, and functional training equipment" },
  { name: "Cardio Zone", description: "State-of-the-art treadmills, bikes, and ellipticals with personal screens" },
  { name: "Group Studios", description: "3 dedicated studios for classes, cycling, and mind-body sessions" },
  { name: "Recovery Area", description: "Foam rollers, massage guns, stretching zone, and cryotherapy" },
  { name: "Sauna & Steam", description: "Relaxation facilities to help with muscle recovery and stress relief" },
  { name: "Nutrition Bar", description: "Fresh smoothies, protein shakes, and healthy snacks post-workout" },
];

const testimonials = [
  {
    name: "David K.",
    role: "Member for 2 years",
    quote: "Iron Forge completely transformed my fitness journey. Down 45 lbs and feeling stronger than ever. The trainers here actually care about your progress.",
    rating: 5,
  },
  {
    name: "Amanda R.",
    role: "Member for 8 months",
    quote: "Best gym I've ever been to. The variety of classes keeps me motivated, and the community is incredibly supportive. Worth every penny!",
    rating: 5,
  },
  {
    name: "Marcus T.",
    role: "Member for 3 years",
    quote: "As a former athlete, I needed a serious gym. Iron Forge delivers with top-tier equipment and knowledgeable staff. This is where champions train.",
    rating: 5,
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-600"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function DumbbellIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h2m12 0h2M6 8v8m12-8v8M8 6h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const navLinks = [
    { name: "Plans", href: "#plans" },
    { name: "Classes", href: "#classes" },
    { name: "Trainers", href: "#trainers" },
    { name: "Facilities", href: "#facilities" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                <DumbbellIcon />
              </div>
              <span className="text-xl font-bold">IRON FORGE</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#plans"
                className="btn-primary px-6 py-2 rounded-full text-sm font-semibold text-white"
              >
                Join Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-t border-[#262626]">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-white py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#plans"
                className="block btn-primary px-6 py-3 rounded-full text-center font-semibold text-white mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-gradient pt-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLThoLTJ2LTRoMnY0em0tOCA4aC0ydi00aDJ2NHptMC04aC0ydi00aDJ2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            <p className="text-red-500 font-semibold mb-4 tracking-wider uppercase">
              Transform Your Body. Transform Your Life.
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Forge Your
              <span className="gradient-text"> Strongest</span> Self
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl">
              Join the premier fitness destination where champions are made. World-class equipment,
              expert trainers, and a community that pushes you to be your best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#plans"
                className="btn-primary px-8 py-4 rounded-full text-lg font-semibold text-white text-center"
              >
                Start Your Journey
              </a>
              <a
                href="#classes"
                className="px-8 py-4 rounded-full text-lg font-semibold border border-gray-600 hover:border-gray-400 transition-colors text-center"
              >
                View Schedule
              </a>
            </div>
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-[#262626]">
              <div>
                <p className="text-3xl font-bold gradient-text">5000+</p>
                <p className="text-gray-500 text-sm">Active Members</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">50+</p>
                <p className="text-gray-500 text-sm">Weekly Classes</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">15+</p>
                <p className="text-gray-500 text-sm">Expert Trainers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section id="plans" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-500 font-semibold mb-2 tracking-wider uppercase">Pricing</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Choose Your <span className="gradient-text">Plan</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Flexible membership options designed to fit your goals and lifestyle.
              No long-term contracts required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {membershipPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 card-hover ${
                  plan.popular
                    ? "bg-gradient-to-b from-red-500/20 to-[#171717] border-2 border-red-500"
                    : "bg-[#171717] border border-[#262626]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-500 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckIcon />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? "btn-primary text-white"
                      : "bg-[#262626] hover:bg-[#333] text-white"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Schedule */}
      <section id="classes" className="py-20 lg:py-32 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-500 font-semibold mb-2 tracking-wider uppercase">Schedule</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Weekly <span className="gradient-text">Classes</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From high-intensity workouts to mindful yoga, find the perfect class to match your goals.
            </p>
          </div>

          {/* Day Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {classSchedule.map((day) => (
              <button
                key={day.day}
                onClick={() => setSelectedDay(day.day)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedDay === day.day
                    ? "btn-primary text-white"
                    : "bg-[#171717] text-gray-400 hover:text-white"
                }`}
              >
                {day.day}
              </button>
            ))}
          </div>

          {/* Classes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classSchedule
              .find((d) => d.day === selectedDay)
              ?.classes.map((cls, idx) => (
                <div
                  key={idx}
                  className="schedule-card rounded-xl p-6 border border-[#262626] card-hover"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-red-500 font-semibold">{cls.time}</span>
                    <span className="text-gray-500 text-sm">{cls.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{cls.name}</h3>
                  <p className="text-gray-400">Instructor: {cls.trainer}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-500 font-semibold mb-2 tracking-wider uppercase">Our Team</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Expert <span className="gradient-text">Trainers</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our certified professionals bring years of experience and passion to help you achieve your fitness goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <div
                key={trainer.name}
                className="bg-[#171717] rounded-2xl p-6 border border-[#262626] card-hover"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-2xl font-bold mb-4">
                  {trainer.image}
                </div>
                <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
                <p className="text-red-500 text-sm mb-3">{trainer.role}</p>
                <p className="text-gray-400 text-sm mb-4">{trainer.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {trainer.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="bg-[#262626] text-gray-300 px-3 py-1 rounded-full text-xs"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Gallery */}
      <section id="facilities" className="py-20 lg:py-32 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-500 font-semibold mb-2 tracking-wider uppercase">Our Space</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              World-Class <span className="gradient-text">Facilities</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Train in a state-of-the-art 25,000 sq ft facility designed for peak performance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, idx) => (
              <div
                key={facility.name}
                className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-8 border border-[#262626] card-hover overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-orange-500/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-xl font-bold mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{facility.name}</h3>
                  <p className="text-gray-400">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-500 font-semibold mb-2 tracking-wider uppercase">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear from our members who have transformed their lives at Iron Forge.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-[#171717] rounded-2xl p-8 border border-[#262626] card-hover"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < testimonial.rating} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours + Contact Form */}
      <section id="contact" className="py-20 lg:py-32 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Location & Hours */}
            <div>
              <p className="text-red-500 font-semibold mb-2 tracking-wider uppercase">Visit Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                Location & <span className="gradient-text">Hours</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-400">
                      123 Fitness Boulevard<br />
                      Los Angeles, CA 90001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <ClockIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Hours</h3>
                    <div className="text-gray-400 space-y-1">
                      <p>Monday - Friday: 5:00 AM - 11:00 PM</p>
                      <p>Saturday: 6:00 AM - 10:00 PM</p>
                      <p>Sunday: 7:00 AM - 9:00 PM</p>
                      <p className="text-red-500 font-medium mt-2">Elite Members: 24/7 Access</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <PhoneIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <EmailIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">info@ironforge.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <p className="text-red-500 font-semibold mb-2 tracking-wider uppercase">Get In Touch</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                Contact <span className="gradient-text">Us</span>
              </h2>

              {formSubmitted ? (
                <div className="bg-green-500/10 border border-green-500 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckIcon />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#171717] border border-[#262626] rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#171717] border border-[#262626] rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#171717] border border-[#262626] rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#171717] border border-[#262626] rounded-lg focus:outline-none focus:border-red-500 transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary py-4 rounded-full font-semibold text-white"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#262626] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <DumbbellIcon />
                </div>
                <span className="text-xl font-bold">IRON FORGE</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transform your body, transform your life. Join the premier fitness destination in Los Angeles.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#plans" className="hover:text-white transition-colors">Membership</a></li>
                <li><a href="#classes" className="hover:text-white transition-colors">Classes</a></li>
                <li><a href="#trainers" className="hover:text-white transition-colors">Trainers</a></li>
                <li><a href="#facilities" className="hover:text-white transition-colors">Facilities</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[#171717] flex items-center justify-center hover:bg-[#262626] transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#171717] flex items-center justify-center hover:bg-[#262626] transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#171717] flex items-center justify-center hover:bg-[#262626] transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#171717] flex items-center justify-center hover:bg-[#262626] transition-colors" aria-label="YouTube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#262626] pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Iron Forge Fitness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
