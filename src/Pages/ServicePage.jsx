import React from 'react';
import WhatWeOffer from '../Containers/Home/WhatWeOffer';
import { FaGraduationCap, FaChalkboardTeacher, FaUserShield } from 'react-icons/fa';

export const ServicePage = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-card1/20 py-16 text-center animate-fade-in relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-card2/50 rounded-full blur-3xl blob-shape animate-pulse-slow opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-card3/50 rounded-full blur-3xl blob-shape animate-float opacity-50"></div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-dark relative z-10 mb-4">
          Our Special <span className="text-highlight">Services</span>
        </h1>
        <p className="text-gray-600 font-medium max-w-xl mx-auto relative z-10 px-4">
          Holistic child development solutions focusing on physical, mental, and cultural growth aligned with NEP 2020.
        </p>
      </div>

      <WhatWeOffer />

      {/* Extra Services Context */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 z-10 relative">
          <div className="text-center mb-16 animate-slide-up">
            <label className="text-sm font-bold text-highlight-secondary uppercase tracking-widest inline-block mb-3">Facility</label>
            <h2 className="text-3xl md:text-4xl font-bold">Additional Care Features</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-md hover:-translate-y-2 transition-transform duration-300 animate-slide-up">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl mb-6 shadow-sm">
                <FaChalkboardTeacher />
              </div>
              <h3 className="text-xl font-bold mb-3">Vedic Math Experts</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                Bharat ki prachin paddhati jisse bacchon ki calculation speed aur memory boost hoti hai. Perfect for early childhood.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-md hover:-translate-y-2 transition-transform duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary text-2xl mb-6 shadow-sm">
                <FaGraduationCap />
              </div>
              <h3 className="text-xl font-bold mb-3">Skill Certifications</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                Har module ke baad bacche ko milta hai certification jo unka confidence badhata hai aur future admission me help karta hai.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-md hover:-translate-y-2 transition-transform duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-[#ffc107]/10 rounded-2xl flex items-center justify-center text-[#ffc107] text-2xl mb-6 shadow-sm">
                <FaUserShield />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Environment</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                Mata-pita ki chinta dur karne ke liye humara campus 100% safe hai, with certified early-childhood educators tracking activity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
