import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { path } from "../constant";

export const Footer = () => {
  return (
    <footer className="bg-light pt-20 pb-8 border-t-4 border-dashed border-primary/20 bg-cover bg-center overflow-hidden relative">
      <div className="absolute right-0 bottom-0 top-0 w-[400px] h-[400px] bg-card1/20 blob-shape translate-x-1/2 translate-y-1/4 animate-float opacity-50 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 relative z-10">

        {/* Logo + About */}
        <div className="animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-lg">T</div>
            <h2 className="text-3xl font-extrabold m-0 tracking-tight">Torado</h2>
          </div>

          <p className="text-[15px] opacity-80 leading-relaxed mb-6 font-medium">
            Working to bring about significant change in classroom-based learning
            by conducting extensive research for course curriculum!
          </p>
          <div className="flex gap-4 text-lg">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-all cursor-pointer text-gray-500 group"><FaFacebookF className="group-hover:scale-110 transition-transform"/></div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-all cursor-pointer text-gray-500 group"><FaTwitter className="group-hover:scale-110 transition-transform"/></div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-all cursor-pointer text-gray-500 group"><FaLinkedinIn className="group-hover:scale-110 transition-transform"/></div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-all cursor-pointer text-gray-500 group"><FaInstagram className="group-hover:scale-110 transition-transform"/></div>
          </div>
        </div>

        {/* Resources */}
        <div className="animate-slide-up" style={{animationDelay: '0.1s'}}>
          <h3 className="text-xl font-bold mb-6">
            Resources
          </h3>
          <ul className="space-y-3 font-semibold text-gray-500 text-[15px]">
            <li className="hover:text-highlight cursor-pointer transition-colors flex items-center gap-2"><span className="text-primary">•</span> Become A Teacher</li>
            <li className="hover:text-highlight cursor-pointer transition-colors flex items-center gap-2"><span className="text-primary">•</span> Instructor/Student Profile</li>
            <li className="hover:text-highlight cursor-pointer transition-colors flex items-center gap-2"><span className="text-primary">•</span> Our Classes</li>
            <li className="hover:text-highlight cursor-pointer transition-colors flex items-center gap-2"><span className="text-primary">•</span> Upcoming Events</li>
            <li className="hover:text-highlight cursor-pointer transition-colors flex items-center gap-2"><span className="text-primary">•</span> Terms & Conditions</li>
          </ul>
        </div>

        {/* Explore */}
        <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
          <h3 className="text-xl font-bold mb-6">
            Explore
          </h3>
          <ul className="space-y-3 font-semibold text-gray-500 text-[15px]">
            <li className="hover:text-highlight cursor-pointer transition-colors flex items-center gap-2"><span className="text-secondary">•</span> Home</li>
            <li className="hover:text-highlight cursor-pointer transition-colors flex items-center gap-2"><span className="text-secondary">•</span> Our Latest Blogs</li>
            <li className="hover:text-highlight cursor-pointer transition-colors flex items-center gap-2"><span className="text-secondary">•</span> Privacy Policy</li>
            <li className="hover:text-highlight cursor-pointer transition-colors flex items-center gap-2"><span className="text-secondary">•</span> Become A Teacher</li>
            <li className="hover:text-highlight cursor-pointer transition-colors flex items-center gap-2"><span className="text-secondary">•</span> Our Classes</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
          <h3 className="text-xl font-bold mb-6">
            Subscribe Now !
          </h3>

          <p className="text-[15px] opacity-80 mb-6 font-medium">
            Get the latest news and updates right at your inbox.
          </p>

          <div className="flex bg-white rounded-full p-1.5 shadow-md border-2 border-transparent focus-within:border-primary transition-colors">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 text-[15px] outline-none bg-transparent font-medium"
            />
            <button className="bg-primary hover:bg-[#ff5252] text-white px-5 py-3 rounded-full font-bold transition-colors">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-16 pt-6 text-center font-semibold text-sm opacity-60 border-t-2 border-dashed border-gray-200">
        © {new Date().getFullYear()} Torado. All Rights Reserved. Designed With ❤️
      </div>
    </footer>
  );
};