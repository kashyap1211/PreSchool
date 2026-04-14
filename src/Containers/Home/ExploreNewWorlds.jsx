import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher, FaBookOpen, FaUsers } from "react-icons/fa";

export const ExploreNewWorlds = () => {
  return (
    <section className=" py-10 px-4">
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden relative shadow-2xl animate-fade-in group pb-0">
        {/* Background Image */}
        <div className="relative h-[400px] md:h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1607453998774-d533f65dac99"
            alt="Young student looking at laptop learning online"
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80 mix-blend-multiply"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <label className="text-white/90 uppercase tracking-widest text-sm font-bold mb-4 inline-block">
              Explore New Worlds
            </label>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8 max-w-4xl text-white drop-shadow-lg">
              Own Your Future By Learning New Skills Online!
            </h2>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-full flex items-center justify-center gap-2 font-bold shadow-xl hover:-translate-y-1 transition-all">
                View All Classes <FaArrowRight />
              </button>

              <button className="btn-secondary flex items-center justify-center gap-2 border-2 border-transparent hover:border-white">
                Contact Us <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
        {/* Item */}
        <div className="flex flex-col items-center gap-3 animate-slide-up" style={{animationDelay:'0.1s'}}>
          <div className="bg-card1/30 shadow-sm p-5 rounded-full text-highlight text-3xl group hover:scale-110 transition-transform">
            <PiStudent className="group-hover:animate-wiggle" />
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-dark m-0 mt-2">
            48K
          </h3>
          <p className="font-semibold text-sm m-0">Worldwide Students</p>
        </div>

        <div className="flex flex-col items-center gap-3 animate-slide-up" style={{animationDelay:'0.2s'}}>
          <div className="bg-card2/50 shadow-sm p-5 rounded-full text-highlight text-3xl group hover:scale-110 transition-transform">
            <FaChalkboardTeacher className="group-hover:animate-wiggle" />
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-dark m-0 mt-2">
            39+
          </h3>
          <p className="font-semibold text-sm m-0">Total Teacher</p>
        </div>

        <div className="flex flex-col items-center gap-3 animate-slide-up" style={{animationDelay:'0.3s'}}>
          <div className="bg-card3/50 shadow-sm p-5 rounded-full text-highlight text-3xl group hover:scale-110 transition-transform">
            <FaBookOpen className="group-hover:animate-wiggle" />
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-dark m-0 mt-2">
            66+
          </h3>
          <p className="font-semibold text-sm m-0">Professional Courses</p>
        </div>

        <div className="flex flex-col items-center gap-3 animate-slide-up" style={{animationDelay:'0.4s'}}>
          <div className="bg-card4/50 shadow-sm p-5 rounded-full text-highlight text-3xl group hover:scale-110 transition-transform">
            <FaUsers className="group-hover:animate-wiggle" />
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-dark m-0 mt-2">
            99K
          </h3>
          <p className="font-semibold text-sm m-0">Beautiful Review</p>
        </div>
      </div>
    </section>
  );
};