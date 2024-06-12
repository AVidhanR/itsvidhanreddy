import Navbar from "@/components/hero-components/Navbar";
import React from "react";
import Projects from "./projects";

function ProjectsPage() {
  return (
    <div className="p-6">
      <Navbar className="top-2" />
      <Projects />
    </div>
  );
}

export default ProjectsPage;
