import React from "react";

const events = [
  {
    id: 1,
    title: "Children's Day Celebration",
    date: "14 November  2025",
    time: "9:00 am - 5:00 pm",
    location: "Ahmedabad",
    rating: 5,
    image:
      "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
  },
  {
    id: 2,
    title: "World Education Day Conference",
    date: "22 August 2025",
    time: "9:00 am - 5:00 pm",
    location: "Ahmedabad",
    rating: 5,
    image:
      "https://images.pexels.com/photos/8612911/pexels-photo-8612911.jpeg",
  },
  {
    id: 3,
    title: "Toddler Art Exhibition Day",
    date: "12 June 2025",
    time: "9:00 am - 5:00 pm",
    location: "Ahmedabad",
    rating: 5,
    image:
      "https://images.pexels.com/photos/8613313/pexels-photo-8613313.jpeg",
  },
];

export const UpcomingEvents = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16 animate-slide-up">
          <label className="text-sm text-highlight-secondary font-bold uppercase tracking-widest inline-block mb-3">
            You Can Check Now
          </label>
          <h2 className="text-4xl md:text-5xl font-black mt-2">
            Our Upcoming Events
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT SIDE (2 cards stacked) */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            {events.slice(0, 2).map((event, i) => (
              <div
                key={event.id}
                className="flex flex-col md:flex-row bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in"
                style={{animationDelay: `${i * 0.2}` + 's'}}
              >
                {/* Image */}
                <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={`Event: ${event.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 text-center text-xs font-bold leading-none shadow-sm text-highlight text-heading">
                    22 <br/><span className="text-[10px] text-gray-500">Aug</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-between w-full">
                  <div>
                    <div className="flex gap-4 text-xs font-bold text-gray-400 mb-3 uppercase tracking-wide">
                      <span className="flex items-center gap-1.5"><span className="text-highlight">📅</span> {event.date}</span>
                      <span className="flex items-center gap-1.5"><span className="text-highlight">⏰</span> {event.time}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-highlight transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-sm opacity-80 mb-4 line-clamp-2">
                      Interactively provide access world-class unique catalysts
                      for change.
                    </p>

                    <p className="text-sm font-semibold flex items-center gap-2 text-gray-500">
                      <span className="text-secondary text-lg">📍</span> {event.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE (single tall card) */}
          <div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="relative overflow-hidden h-64 lg:h-72">
              <img
                src={events[2].image}
                alt={`Featured Event: ${events[2].title}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 text-center text-xs font-bold leading-none shadow-sm text-highlight text-heading">
                22 <br/><span className="text-[10px] text-gray-500">Aug</span>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap gap-4 text-xs font-bold text-gray-400 mb-4 uppercase tracking-wide">
                <span className="flex items-center gap-1.5"><span className="text-highlight">📅</span> {events[2].date}</span>
                <span className="flex items-center gap-1.5"><span className="text-highlight">⏰</span> {events[2].time}</span>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-highlight transition-colors">
                {events[2].title}
              </h3>

              <p className="text-sm opacity-80 mb-5">
                Interactively provide access world-class unique catalysts for
                change.
              </p>

              <p className="text-sm font-semibold flex items-center gap-2 text-gray-500 mb-6 border-b border-gray-100 pb-6">
                <span className="text-secondary text-lg">📍</span> {events[2].location}
              </p>

              {/* <button className="w-full btn-secondary py-3 text-center transition-transform">
                Book Ticket
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};