import * as React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import self_img from "@/assets/images/self_lg.jpg";
import LandingFrame from "@/components/Landing";
import ProjectsFrame from "@/components/Projects";
import ResumeFrame from "@/components/Resume";
import SocialsFrame from "@/components/Socials";
import Footer from "@/components/Footer";
import NavPanel from "@/components/NavPanel";

import portfolio from "@/portfolio.json"; // Adjust the import path based on your project structure

export default function LandingPage() {
  // Refs for each section
  const projectsRef = React.useRef(null);
  const resumeRef = React.useRef(null);
  const socialsRef = React.useRef(null);

  // Frame component constants
  const projectsFrame = (
    <ProjectsFrame
      style={{ width: "80%" }}
      projects={portfolio.portfolio.projects}
    />
  );
  const resumeFrame = <ResumeFrame />;

  const socials = portfolio.portfolio.socials.map((social) => ({
    ...social,
    type: social.title.toLowerCase(),
  }));
  const socialsFrame = <SocialsFrame socials={socials} />;

  // Data for NavPanel
  const navData = [
    {
      name: "Projects",
      component: projectsFrame,
      ref: projectsRef,
    },
    {
      name: "Resume",
      component: resumeFrame,
      ref: resumeRef,
    },
    {
      name: "Socials",
      component: socialsFrame,
      ref: socialsRef,
    },
  ];

  return (
    <>
      <div className="background-container">
        <img className="background-image" src={self_img} alt="Background" />
        <div className="black-overlay"></div>
      </div>
      <LandingFrame />
      <div className="view-frame">
        {/* View Frame - this is where the rest of the page comes in */}
        <div className="content">
          <div id="Projects" ref={projectsRef}>
            {projectsFrame}
          </div>
          <div id="Resume" ref={resumeRef}>
            {resumeFrame}
          </div>
          <div id="Socials" ref={socialsRef}>
            {socialsFrame}
          </div>
        </div>
        <div className="nav-panel">
          <NavPanel data={navData} />
        </div>
      </div>
      <Footer />
    </>
  );
}
