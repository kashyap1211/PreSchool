import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { path } from "../constant";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../src/assets/logopreschool.svg"
const pages = [
  { name: "Home", path: path.home },
  { name: "Class", path: path.class },
  { name: "Events", path: path.events },
  { name: "About Us", path: path.about },
  // { name: "Blog", path: path.blog },
  { name: "Contact", path: path.contact },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

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


  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  return (
    <>
      <nav className="w-full bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.05)] fixed top-0 z-50 transition-all duration-300">
        <ToastContainer position="top-right" autoClose={3000} />
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between py-4">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="h-10 w-10 rounded-xl flex items-center justify-center text-white font-bold text-lg  group-hover:animate-wiggle transition-transform duration-300 ">
                <img src={logo} alt="" />
              </div>
              <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight text-primary">PreSchool</h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {pages.map((page) => (
                <Link
                  key={page.name}
                  to={page.path}
                  className={`relative text-[15px] font-semibold transition-colors duration-300 group ${location.pathname === page.path
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                    }`}
                >
                  {page.name}
                  {/* Underline Animation */}
                  <span
                    className={`absolute left-0 -bottom-1 w-full h-[2px] bg-primary rounded-full transition-all duration-300 ${location.pathname === page.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                  />
                </Link>
              ))}
            </div>

            {/* Button */}
            <div className="hidden md:block">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary py-2.5 px-6 text-[15px]"
              >
                Admission Inquiry
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-gray-700 hover:text-primary transition-colors p-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? "max-h-120 opacity-100 pb-4" : "max-h-0 opacity-0"
              }`}
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 p-5 space-y-4 flex flex-col">
              {pages.map((page) => (
                <Link
                  key={page.name}
                  to={page.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium px-4 py-2 rounded-xl transition-all ${location.pathname === page.path
                    ? "bg-red-50 text-primary"
                    : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                    }`}
                >
                  {page.name}
                </Link>
              ))}
              <button
                onClick={() => { setIsModalOpen(true); setIsOpen(false); }}
                className="btn-primary w-full mt-2"
              >
                Admission Inquiry
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Admission Inquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-fade-in">
          {/* Click background to close */}
          <div className="absolute inset-0" onClick={() => setIsModalOpen(false)}></div>

          <div className="bg-white w-full max-w-xl rounded-[30px] shadow-2xl relative overflow-hidden animate-slide-up border border-gray-100 z-10 m-auto">
            {/* Decorative Blob */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-card1/40 rounded-full blur-2xl blob-shape pointer-events-none"></div>

            {/* Header */}
            <div className="bg-primary/5 p-6 sm:p-8 border-b border-gray-100 flex justify-between items-center relative">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-dark mb-1">Admission <span className="text-highlight">Inquiry</span></h2>
                <p className="text-xs sm:text-sm text-gray-500 font-bold tracking-widest uppercase">Fill the form to apply today!</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-primary transition-colors p-2 bg-white rounded-full shadow-sm border border-gray-100 hover:rotate-90 duration-300">
                <X size={20} />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6 sm:p-8 max-h-[70vh] sm:max-h-[75vh] overflow-y-auto">
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(e);   // Google Sheet wala function
                  alert("Form submitted successfully!");
                  setIsModalOpen(false);
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-highlight-secondary uppercase tracking-widest block mb-2">Child's Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Bacche ka naam"
                      required className="w-full bg-gray-50 border-2 border-transparent focus:border-primary px-4 py-3 rounded-xl outline-none text-sm font-medium transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-highlight-secondary uppercase tracking-widest block mb-2">Parent's Name</label>
                    <input
                      type="text"
                      id="pname"
                      value={formData.pname}
                      onChange={handleChange}
                      placeholder="Mata/Pita ka naam"
                      required className="w-full bg-gray-50 border-2 border-transparent focus:border-primary px-4 py-3 rounded-xl outline-none text-sm font-medium transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-highlight-secondary uppercase tracking-widest block mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required className="w-full bg-gray-50 border-2 border-transparent focus:border-primary px-4 py-3 rounded-xl outline-none text-sm font-medium transition-colors" />
                  </div>
                  {/* <div>
                    <label className="text-xs font-bold text-highlight-secondary uppercase tracking-widest block mb-2">Select Program</label>
                    <select className="w-full bg-gray-50 border-2 border-transparent focus:border-primary px-4 py-3 rounded-xl outline-none text-sm font-medium transition-colors text-gray-700 cursor-pointer" required>
                      <option value="" className="text-gray-400">Program chunein...</option>
                      <option value="playgroup">Playgroup (2-3 Yrs)</option>
                      <option value="nursery">Nursery (3-4 Yrs)</option>
                      <option value="lkg">LKG (4-5 Yrs)</option>
                      <option value="ukg">UKG (5-6 Yrs)</option>
                    </select>
                  </div> */}
                </div>

                <div>
                  <label className="text-xs font-bold text-highlight-secondary uppercase tracking-widest block mb-2">Any Questions? (Optional)</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Apna sawal yaha likhein..."
                    required className="w-full bg-gray-50 border-2 border-transparent focus:border-primary px-4 py-3 rounded-xl outline-none text-sm font-medium transition-colors resize-none" />
                </div>

                <button type="submit" className="btn-secondary w-full py-4 text-sm sm:text-base mt-2 shadow-lg">
                  Submit Inquiry Now
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;