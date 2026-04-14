import React from "react";
import Navbar from "../Components/Navbar";

import { HomePage } from "./HomePage";
import { Footer } from "../Components/Footer";

function Landing({ screen }) {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main >
        {screen ? screen : <HomePage />}
      </main>

      <Footer />
    </div>
  );
}

export default Landing;