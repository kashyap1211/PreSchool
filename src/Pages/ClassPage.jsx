import React from 'react';
import { FaBookOpen, FaUserGraduate, FaRegBookmark, FaArrowRight } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { PiStudent } from "react-icons/pi";

const classes = [
  {
    title: "Vedic Math & Numbers",
    price: "₹1,200",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350",
  },
  {
    title: "Hindi Kavita & Storytelling",
    price: "₹999",
    img: "https://mycoaching.in/wp-content/uploads/Chanda-Mama-Aao-Na-Nursery-Kids-Poem-in-Hindi.webp",
  },
  {
    title: "Yoga & Meditation for Kids",
    price: "₹1,500",
    img: "https://images.unsplash.com/photo-1607453998774-d533f65dac99",
  },
  {
    title: "Indian Art & Craft Class",
    price: "₹1,800",
    img: "https://www.shutterstock.com/image-photo/children-drawing-making-crafts-kindergarten-600nw-2452547439.jpg",
  },
  {
    title: "Basic English Pronunciation",
    price: "₹1,100",
    img: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
  },
  {
    title: "Sanskrit Shloka Chanting",
    price: "₹800",
    img: "https://images.pexels.com/photos/8612911/pexels-photo-8612911.jpeg",
  }
];

export const ClassPage = () => {
  return (
    <div className="pt-14 pb-10 bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-card1/20 py-16 text-center animate-fade-in relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-card2/50 rounded-full blur-3xl blob-shape animate-float opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-card3/50 rounded-full blur-3xl blob-shape animate-float opacity-50" style={{ animationDelay: '1s' }}></div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-dark relative z-10 mb-4">
          Our Special <span className="text-highlight">Classes</span>
        </h1>
        <p className="text-gray-600 font-medium max-w-xl mx-auto relative z-10">
          Tailored explicitly according to the New Education Policy (NEP 2020) and Indian cultural values for optimal early childhood development.
        </p>
      </div>

      <section className="py-20 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {classes.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-slide-up border border-gray-100"
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
                      3-8 Years
                    </span>
                    <span className="flex items-center gap-1">
                      <MdAccessTime className="text-highlight-secondary text-lg" />
                      9-11am
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-highlight transition-colors duration-300 line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="text-sm mb-5 opacity-80 line-clamp-2">
                    Bharatiya values par aadharit anokhi class jismein bacchon ko interactive tariqe se sikhaya jata hai.
                  </p>

                  {/* Stats */}
                  <div className="flex justify-between text-sm font-semibold mb-5 bg-light p-3 rounded-xl">
                    <span className="flex items-center gap-1.5">
                      <FaBookOpen className="text-highlight" />
                      24 Lessons
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaUserGraduate className="text-highlight-secondary" />
                      30 Students
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex justify-between items-center mt-2 border-t border-gray-100 pt-4">
                    <span className="text-highlight font-black text-2xl">
                      {item.price} <span className="text-sm text-gray-500 font-medium tracking-normal">/ month</span>
                    </span>

                    <button aria-label="View Class Details" className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-3 rounded-xl transition-colors duration-300">
                      <FaArrowRight size={14} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
