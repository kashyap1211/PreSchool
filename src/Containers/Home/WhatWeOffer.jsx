import React from "react";
import { FaBookOpen, FaUsers, FaThLarge, FaCog } from "react-icons/fa";
import { theme } from "../../constant";

const offers = [
  {
    id: "01",
    title: "Online Courses",
    desc: "Interactively provide access world-class materials & unique catalysts for change.",
    icon: <FaBookOpen size={22} />,
    bg: theme.colors.card1,
  },
  {
    id: "02",
    title: "Expert Trainer",
    desc: "Interactively provide access world-class materials & unique catalysts for change.",
    icon: <FaUsers size={22} />,
    bg: theme.colors.card2,
  },
  {
    id: "03",
    title: "Get Certificate",
    desc: "Interactively provide access world-class materials & unique catalysts for change.",
    icon: <FaThLarge size={22} />,
    bg: theme.colors.card3,
  },
  {
    id: "04",
    title: "Lifetime Access",
    desc: "Interactively provide access world-class materials & unique catalysts for change.",
    icon: <FaCog size={22} />,
    bg: theme.colors.card4,
  },
];

const WhatWeOffer = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <div className="animate-slide-up">
          <label className="text-sm font-bold text-highlight-secondary mb-2 uppercase tracking-widest inline-block">
            What We Offer
          </label>

          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            To Build Your Child's Future
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {offers.map((item, i) => (
            <div
              key={item.id}
              className="relative rounded-[30px] p-8 text-left transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl animate-fade-in group"
              style={{ background: item.bg, animationDelay: `${i * 0.1}` + 's' }}
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mb-8 shadow-md group-hover:scale-110 transition-transform duration-300 border-2 border-white/50 text-highlight">
                {item.icon}
              </div>

              {/* Number */}
              <span className="absolute top-6 right-6 text-5xl font-heading font-black text-black/5 group-hover:text-black/10 transition-colors">
                {item.id}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-sm m-0 text-gray-800/80 font-medium">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;