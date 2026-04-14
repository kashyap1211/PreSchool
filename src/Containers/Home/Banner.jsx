import React from "react";
import bannerDesktop from "../../assets/Images/Banner.jpg";
import bannerMobile from "../../assets/Images/Banner1.jpg";
import Shapes from "../../assets/Images/shape-1.png";
import { ArrowRight, Play } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden font-body">

      {/* Desktop Background */}
      <img
        src={bannerDesktop}
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />

      {/* Mobile Background */}
      <img
        src={bannerMobile}
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover block md:hidden"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-100/95 via-orange-100/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-xl animate-fade-in">

          <label className="text-highlight-secondary uppercase tracking-widest text-sm font-bold mb-4 animate-slide-up">
            Welcome To Our Kids Education & School
          </label>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 animate-slide-up">
            Empowering Students <br />
            <span className="text-highlight animate-pulse-slow inline-block">
              With Knowledge
            </span>
          </h1>

          <p className="mb-8 animate-slide-up">
            <span className="text-black font-semibold">
              There are many variations of passages of Lorem Ipsum available...
            </span>
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 flex-wrap animate-slide-up">

            <button className="btn-primary group flex items-center gap-2">
              Our Classes
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </button>

            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white rounded-full shadow-lg group-hover:scale-110 transition">
                <Play size={20} className="text-highlight ml-1" />
              </div>
              <span className="font-heading font-semibold text-lg group-hover:text-highlight transition">
                Watch Video
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Shape Bottom */}
      <img
        src={Shapes}
        alt="shape"
        className="absolute -bottom-1 left-0 w-full pointer-events-none"
      />

    </section>
  );
};

export default Banner;