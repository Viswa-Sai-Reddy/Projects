import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Plans from "./components/Palns/Plans";
import Testimonials from "./components/Testimonials/Testimonials";
import Joins from "./components/Joins/Joins";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons/>
      <Plans />
      <Testimonials/>
      <Joins />
      <Footer />
    </div>
  );
}

export default App;
