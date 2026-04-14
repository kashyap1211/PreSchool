import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    pname: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwjbwEGYKTjzyp6MapGc94rWUTEPPcLQJQD_3h4KYE0VIru0gia9xmSnl1gs6amrq2X/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
      });

      toast.success("Form Submitted Successfully ");

      setFormData({
        name: "",
        pname: "",
        email: "",
        phone: "",
        message: ""
      });

      setIsModalOpen(false);

    } catch (error) {
      console.error(error);
      toast.error("Error submitting form ");
    }
  };
  return (
    <div className="pt-14   min-h-screen bg-gray-50/50">
      {/* Page Header */}
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="bg-primary/5 py-16 text-center animate-fade-in relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-dark relative z-10 mb-4">
          <span className="text-highlight">Contact</span> Us
        </h1>
        <p className="text-gray-600 font-medium max-w-xl mx-auto relative z-10">
          Admissions, inquiries ya kisi bhi madad ke liye humse sampark karein.
        </p>
      </div>

      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 z-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-[40px] shadow-xl overflow-hidden animate-slide-up border border-gray-100">

            {/* Left Info Box */}
            <div className="bg-primary  p-12 text-black flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl blob-shape animate-float pointer-events-none"></div>

              <span className="text-3xl font-extrabold text-white mb-8">Get In Touch</span>
              <span className="text-white mb-10 leading-relaxed">
                Bharat ki leading preschool branch. Please fill the form and our counselors will guide you through the admission process tailored under NEP 2020.
              </span>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-xl text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-lg text-white mb-1">Our Location</span> <br />
                    <span className="text-white/80 text-sm">
                      Plot 42, Knowledge Park, Sector 4, Noida, UP - 201301, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <FaPhoneAlt className="text-xl text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-lg text-white mb-1">Phone Number</span> <br />
                    <span className="text-white/80 text-sm">+91 98765 43210 <br /> 011-4567890</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-xl text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-lg text-white mb-1">Email Address</span> <br />
                    <span className="text-white/80 text-sm">admissions@torado.in <br /> info@torado.in</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="p-12 pl-6 flex flex-col justify-center">
              <h3 className="text-3xl font-extrabold mb-8 text-dark">Send a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="text-sm font-bold text-highlight-secondary uppercase tracking-widest inline-block mb-2">Child's Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Bacche ka naam"
                      required className="w-full bg-gray-50 border-2 border-transparent focus:border-primary px-4 py-3 rounded-xl outline-none font-medium transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="pname" className="text-sm font-bold text-highlight-secondary uppercase tracking-widest inline-block mb-2">Parent's Name</label>
                    <input
                      type="text"
                      id="pname"
                      value={formData.pname}
                      onChange={handleChange}
                      placeholder="Mata/Pita ka naam"
                      required className="w-full bg-gray-50 border-2 border-transparent focus:border-primary px-4 py-3 rounded-xl outline-none font-medium transition-colors" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="text-sm font-bold text-highlight-secondary uppercase tracking-widest inline-block mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      required className="w-full bg-gray-50 border-2 border-transparent focus:border-primary px-4 py-3 rounded-xl outline-none font-medium transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-bold text-highlight-secondary uppercase tracking-widest inline-block mb-2">Phone No.</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange} placeholder="+91 XXXXX XXXXX" required className="w-full bg-gray-50 border-2 border-transparent focus:border-primary px-4 py-3 rounded-xl outline-none font-medium transition-colors" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-bold text-highlight-secondary uppercase tracking-widest inline-block mb-2">Your Message</label>
                  <textarea id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" placeholder="Apna sawal yaha likhein..." required className="w-full bg-gray-50 border-2 border-transparent focus:border-primary px-4 py-3 rounded-xl outline-none font-medium transition-colors resize-none"></textarea>
                </div>

                <button type="submit" aria-label="Submit Contact Form" className="btn-secondary w-full py-4 text-lg mt-2">
                  Submit Now
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
