import React from 'react'
import About from '../Containers/Home/About'
import { FaCheck } from "react-icons/fa"

const AboutPage = () => {
  return (
    <div className="pt-14 min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-card3/20 py-16 text-center animate-fade-in relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-dark relative z-10 mb-4">
          <span className="text-highlight">Bharat Ki</span> Best Preschool
        </h1>
        <p className="text-gray-600 font-medium max-w-xl mx-auto relative z-10">
          Desh ka bhavishya shuru hota hai humari early education se!
        </p>
      </div>

      <About />

      {/* Additional Indian Context Section */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 text-center animate-slide-up">
          <label className="text-sm font-bold text-highlight-secondary mb-2 uppercase tracking-widest inline-block">Humari Pehchaan</label>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Trusted By 10,000+ Indian Parents</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {['NEP 2020 Aligned Curriculum', 'Sanskar Aur Values', 'Safe & Secure Campus'].map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-md hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-card1 rounded-full flex items-center justify-center text-primary text-xl mx-auto mb-4 blob-shape">
                  <FaCheck />
                </div>
                <h3 className="font-bold text-xl mb-2">{val}</h3>
                <p className="text-sm opacity-80">
                  Giving your child the best foundation possible, designed exclusively for Indian cognitive growth parameters.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
