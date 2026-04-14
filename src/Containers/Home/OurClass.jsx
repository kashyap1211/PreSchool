import React from "react";
import { FaBookOpen, FaUserGraduate, FaRegBookmark, FaArrowRight } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { PiStudent } from "react-icons/pi";

const classes = [
  {
    title: "Mathematics Class",
    price: "$59.00",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350",
  },
  {
    title: "Knowledge & Science Class",
    price: "$39.00",
    img: "https://images.unsplash.com/photo-1584697964403-7d3c68d6c1b5",
  },
  {
    title: "Awesome Imagination Class",
    price: "$53.00",
    img: "https://images.unsplash.com/photo-1607453998774-d533f65dac99",
  },
  {
    title: "Painting & Drawing Class",
    price: "$46.00",
    img: "https://images.unsplash.com/photo-1588072432907-8431d55cdb2c",
  },
];

function OurClass() {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Playful Floating Background Shape */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-card3/30 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

      {/* Heading */}
      <div className="text-center mb-16 animate-slide-up">
        <label className="text-sm font-bold text-highlight-secondary uppercase tracking-widest inline-block mb-2">Our Class</label>
        <h2 className="text-3xl md:text-5xl font-bold">
          Explore Our Popular Classes
        </h2>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {classes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}` + 's' }}
            >
              {/* Image */}
              <div className="h-56 w-full overflow-hidden relative">
                <img
                  src={`${item.img}?auto=format&fit=crop&w=800&q=80`}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <button aria-label="Bookmark this class" className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full cursor-pointer hover:bg-secondary hover:text-white transition-colors duration-300 text-gray-400">
                  <FaRegBookmark aria-hidden="true" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Top Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3 font-semibold">
                  <span className="flex items-center gap-1">
                    <PiStudent className="text-highlight text-lg" />
                    5-10 Years
                  </span>
                  <span className="flex items-center gap-1">
                    <MdAccessTime className="text-highlight-secondary text-lg" />
                    8-10am
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-highlight transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-sm mb-5 opacity-80">
                  Interactively provide access world-class unique catalysts for
                  change.
                </p>

                {/* Stats */}
                <div className="flex justify-between text-sm font-semibold mb-5 bg-light p-3 rounded-xl">
                  <span className="flex items-center gap-1.5">
                    <FaBookOpen className="text-highlight" />
                    99 Lessons
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaUserGraduate className="text-highlight-secondary" />
                    50 Students
                  </span>
                </div>

                {/* Price */}
                <div className="flex justify-between items-center mt-2 border-t border-gray-100 pt-4">
                  <span className="text-highlight font-black text-xl">
                    {item.price} <span className="text-sm text-gray-500 font-medium">/ month</span>
                  </span>

                  <button aria-label="View Class Details" className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-2 rounded-xl transition-colors duration-300">
                    <FaArrowRight size={14} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurClass;