import * as React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import self_img from "@/assets/images/self_lg.jpg";
import self_img_sm from "@/assets/images/self_sm.jpg";
import LandingFrame from "@/components/Landing";
import ProjectsFrame from "@/components/Projects";
import ResumeFrame from "@/components/Resume";
import SocialsFrame from "@/components/Socials";
import Footer from "@/components/Footer";
import NavPanel from "@/components/NavPanel";

import portfolio from "@/portfolio.json"; // Adjust the import path based on your project structure

export default function LandingPage() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  // Refs for each section
  const landingRef = React.useRef(null);
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

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="background-container">
        <img
          className="background-image"
          src={isMobile ? self_img_sm : self_img}
          alt="Background"
        />
        <div className="black-overlay"></div>
      </div>
      <div id="Landing" ref={landingRef}>
        <LandingFrame />
      </div>
      <div className="main-container">
        <div className="viewFrame">
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
          {!isMobile && (
            <div className="navPanel">
              <NavPanel data={navData} />
            </div>
          )}
        </div>
        <Footer resumeRef={resumeRef} landingPageRef={landingRef} />
      </div>
    </>
  );
}
