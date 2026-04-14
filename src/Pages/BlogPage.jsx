import React from 'react';
import { FaUser, FaComments } from 'react-icons/fa';

const blogs = [
  {
    id: 1,
    title: "Sahi Preschool Kaise Chunein Apne Bacche ke Liye?",
    date: "12 Oct 2026",
    author: "Priya Sharma",
    comments: 45,
    image: "https://images.unsplash.com/photo-1588072432907-8431d55cdb2c",
    desc: "Ek acchi foundation hi bacche ka bhavishya tay karti hai. Jaaniye kin baaton ka dhyan rakhna chahiye preschool chunte waqt."
  },
  {
    id: 2,
    title: "Healthy Indian Tiffin Recipes Every Toddler Loves",
    date: "28 Sep 2026",
    author: "Dr. Anjali Mehta",
    comments: 112,
    image: "https://images.pexels.com/photos/8612911/pexels-photo-8612911.jpeg",
    desc: "Aasan aur nutritious tiffin ideas jo aapke bacche ko pasand aayenge aur usko energy denge."
  },
  {
    id: 3,
    title: "NEP 2020: What Parents Need to Know",
    date: "15 Sep 2026",
    author: "Rahul Verma",
    comments: 89,
    image: "https://images.unsplash.com/photo-1584697964403-7d3c68d6c1b5",
    desc: "National Education Policy ke anusaar early childhood care ki kya importance hai aur kaise aage padhai hogi."
  }
];

export const BlogPage = () => {
  return (
    <div className="pt-14 pb-10 bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-card4/20 py-16 text-center animate-fade-in relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-dark relative z-10 mb-4">
          Latest <span className="text-highlight">Parenting Blogs</span>
        </h1>
        <p className="text-gray-600 font-medium max-w-xl mx-auto relative z-10">
          Indian parents aur educators ke naye articles, tips aur advice, taaki aapke bacche ka vikas behtar ho sake.
        </p>
      </div>

      <section className="py-20 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 z-10 relative">
          <div className="grid lg:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <div
                key={blog.id}
                className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-slide-up border border-gray-100 flex flex-col"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="h-60 w-full overflow-hidden relative">
                  <img
                    src={`${blog.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={`Blog: ${blog.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute bottom-0 left-4 translate-y-1/2 bg-secondary text-white font-bold px-4 py-2 rounded-full shadow-md text-sm border-2 border-white">
                    {blog.date}
                  </div>
                </div>

                <div className="p-8 pt-10 flex-1 flex flex-col">
                  <div className="flex gap-4 text-xs font-bold text-gray-400 mb-4 uppercase tracking-wide">
                    <span className="flex items-center gap-1.5"><FaUser className="text-highlight" /> {blog.author}</span>
                    <span className="flex items-center gap-1.5"><FaComments className="text-highlight" /> {blog.comments} Comments</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-highlight transition-colors flex-1">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                    {blog.desc}
                  </p>

                  <button aria-label="Read full article" className="self-start text-highlight font-bold uppercase tracking-widest text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                    Read More <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
