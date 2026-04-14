import React from "react";
import { FaCheck } from "react-icons/fa";
import { theme } from "../../constant.js"; // adjust path

export const WhyChooseUs = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Playful Background Decoration */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-card3/20 rounded-[40%] blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-card1/20 rounded-[40%] blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <div className="animate-fade-in">
          <label className="text-sm font-bold text-highlight-secondary uppercase tracking-widest inline-block mb-3">
            Why Choose Us
          </label>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Check Out Our Steps To Make Flexible Studying A Success
          </h2>

          <p className="mb-8 text-base md:text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {[
              "Finish Your Course, Get a Certificate",
              "Expert Trainers Know Everything Well",
              "High-Quality Video & Audio Classes",
              "Active Learning & Safe Environments",
              "Increasing Your Learning Skills",
              "Fully Equipped Environment",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all shadow-sm hover:shadow-md animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}` + 's' }}
              >
                <div className="min-w-[32px] h-[32px] rounded-full text-white text-xs flex items-center justify-center bg-secondary group-hover:scale-110 transition-transform">
                  <FaCheck />
                </div>

                <p className="text-sm font-semibold m-0 leading-tight">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button className="btn-primary flex items-center justify-center text-center gap-2">
            Learn More
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center lg:justify-end animate-slide-up" style={{animationDelay: '0.3s'}}>
          
          {/* Main Image */}
          <div className="w-[280px] sm:w-[350px] md:w-[420px] rounded-[40px] overflow-hidden border-8 border-white shadow-2xl relative">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350"
              alt="kids studying and raising hands in class"
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* Small Floating Image */}
          <div className="absolute top-10 -right-5 sm:-right-10 w-[120px] sm:w-[160px] rounded-2xl overflow-hidden border-4 border-white shadow-xl animate-float">
            <img
              src="https://images.unsplash.com/photo-1607453998774-d533f65dac99"
              alt="smiling kid learning on computer"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 right-6 sm:-right-10 w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] bg-primary rounded-full flex flex-col items-center justify-center text-center text-sm font-bold text-white shadow-lg animate-pulse-slow border-4 border-white">
            <span className="text-2xl font-black">4K+</span>
            <span className="text-xs font-semibold leading-tight">Students<br/>Join</span>
          </div>
        </div>
      </div>
    </section>
  );
};