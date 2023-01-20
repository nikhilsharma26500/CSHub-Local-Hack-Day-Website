import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About/About";
import Faq from "./components/FAQ/Faq";
import Hero from "./components/hero/index";
import Navbar from "./components/Navbar/Navbar";
import Workshop from "./components/Workshop/Workshop";
import Particles from "./components/Particles/Particles";
import Sponsors from "./components/Partners/Sponsors";
import Timeline from "./components/Timeline/Timeline";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div className="App">
      <div className="body">
        <Particles />
        <Navbar />
        <Hero />
        <About />
        <Faq />
        <Sponsors />
        <Timeline />
        <Workshop />
      </div>
      <Footer />
    </div>
  );
};

export default App;
