import Navbar from "@/components/hero-components/Navbar";
import React from "react";
import About from "./about";

function AboutPage() {
  return (
    <div className="p-4">
      <Navbar className="top-2" />
      <About />
    </div>
  );
}

export default AboutPage;
