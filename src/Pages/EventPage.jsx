import React from 'react';

const events = [
  {
    id: 1,
    title: "Bal Diwas (Children's Day) Mahotsav",
    date: "14 Nov 2026",
    time: "10:00 am - 2:00 pm",
    location: "Connaught Place, New Delhi",
    rating: 5,
    image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
  },
  {
    id: 2,
    title: "Grand Diwali Celebration",
    date: "10 Nov 2026",
    time: "5:00 pm - 8:00 pm",
    location: "Juhu Beach Campus, Mumbai",
    rating: 5,
    image: "https://images.pexels.com/photos/8612911/pexels-photo-8612911.jpeg",
  },
  {
    id: 3,
    title: "Holi Colours & Art Exhibition",
    date: "25 March 2027",
    time: "9:00 am - 1:00 pm",
    location: "Sector 17, Chandigarh",
    rating: 4.8,
    image: "https://images.pexels.com/photos/8613313/pexels-photo-8613313.jpeg",
  },
  {
    id: 4,
    title: "Independence Day Parade",
    date: "15 August 2026",
    time: "8:00 am - 11:00 am",
    location: "Red Fort Area, Delhi",
    rating: 5,
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
  }
];

export const EventPage = () => {
  return (
    <div className="pt-14 pb-10 bg-gray-50/50 min-h-screen">
      {/* Page Header */}
      <div className="bg-card2/20 py-16 text-center animate-fade-in relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-dark relative z-10 mb-4">
          Upcoming <span className="text-highlight">Events</span>
        </h1>
        <p className="text-gray-600 font-medium max-w-xl mx-auto relative z-10">
          Join us in celebrating the vibrant culture of India through our carefully organized events for holistic child development.
        </p>
      </div>

      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {events.map((event, i) => (
              <div
                key={event.id}
                className="flex flex-col md:flex-row bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-slide-up border border-gray-100"
                style={{ animationDelay: `${i * 0.1}` + 's' }}
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
                    {event.date.split(' ')[0]} <br />
                    <span className="text-[10px] text-gray-500 uppercase">{event.date.split(' ')[1]}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-between w-full">
                  <div>
                    <div className="flex flex-wrap gap-4 text-xs font-bold text-gray-400 mb-3 uppercase tracking-wide">
                      <span className="flex items-center gap-1.5"><span className="text-highlight">📅</span> {event.date}</span>
                      <span className="flex items-center gap-1.5"><span className="text-highlight">⏰</span> {event.time}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-highlight transition-colors leading-tight">
                      {event.title}
                    </h3>

                    <p className="text-sm font-semibold flex items-center gap-2 text-gray-500 mt-4 mb-6 border-b border-gray-100 pb-4">
                      <span className="text-secondary text-lg">📍</span> {event.location}
                    </p>

                    <div className="flex justify-between items-center w-full">
                      <div className="text-highlight font-black tracking-widest text-sm">
                        ⭐ {event.rating} RATING
                      </div>
                      <button aria-label="Book ticket" className="btn-primary py-2 px-6 text-sm">
                        Join Now
                      </button>
                    </div>
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
