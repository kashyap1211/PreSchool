import React from "react";
import { theme } from "../../constant";
import { Play, ArrowRight } from "lucide-react";

// 👉 images (replace with your actual paths)
import img1 from "../../assets/Images/about1.jpeg";
import img2 from "../../assets/Images/about1.jpeg";

const features = [
  { id: "01", text: "Home-like Environment & Music" },
  { id: "02", text: "Quality Educators And Paper Plate Industry" },
  { id: "03", text: "Imagination Classes And Safety And Security" },
  { id: "04", text: "Play Number Matching And Learn" },
];

const About = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Playful Floating Background Shape */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-card1 opacity-40 blob-shape animate-float"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-card2 opacity-40 blob-shape animate-float" style={{animationDelay: '1s'}}></div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT IMAGES */}
        <div className="relative flex justify-center lg:justify-start animate-fade-in">

          {/* Background Shape */}
          <div className="absolute w-[300px] h-[300px] border-4 border-dashed border-primary rounded-full -left-10 top-10 opacity-30 animate-spin" style={{ animationDuration: '20s' }}></div>

          {/* Image 1 */}
          <div className="relative z-10">
            <img
              src={img1}
              loading="lazy"
              alt="Happy kids learning in a creative class"
              className="w-64 sm:w-72 md:w-80 rounded-[30px] border-8 border-white shadow-xl animate-float"
            />
          </div>

          {/* Image 2 */}
          <div className="absolute bottom-0 right-0 z-10">
            <img
              src={img2}
              loading="lazy"
              alt="Kids participating in interactive school activities"
              className="w-52 sm:w-60 md:w-64 rounded-[30px] border-8 border-white shadow-xl animate-float"
              style={{ animationDelay: '1.5s' }}
            />
          </div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <button aria-label="Play About Video" className="pointer-events-auto w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300 animate-pulse-slow">
              <Play size={30} className="text-white ml-2" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <label className="uppercase tracking-widest text-sm font-bold mb-4 inline-block text-highlight-secondary">About Torado</label>

          <h2 className="mb-6">
            Explore Thousands Of Creative <br />
            <span className="text-highlight">Classes</span> In This World
          </h2>

          <p>
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form.
          </p>

          <p className="mb-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {features.map((item, i) => (
              <div key={item.id} className="flex items-center gap-4 group">
                
                {/* Number Circle */}
                <div className="min-w-[45px] h-[45px] bg-secondary text-white flex items-center justify-center blob-shape font-bold shadow-md group-hover:rotate-12 transition-transform duration-300">
                  {item.id}
                </div>

                {/* Text */}
                <p className="font-semibold text-sm m-0 leading-tight">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button className="btn-secondary group flex items-center gap-2">
            Learn More
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;