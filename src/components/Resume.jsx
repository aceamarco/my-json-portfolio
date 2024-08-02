import React from "react";

import { ViewOnGHButton, DownloadBtn } from "@/components/Common";

import "@/styles/Resume.css";

function ResumeIFrame() {
  function onLoadFrame() {
    // Function to reset scroll position to the top of the page on component mount
    function noscroll() {
      console.log("disabling scroll for 1 second.");
      window.scrollTo(0, 0);
    }

    // Add listener to disable scroll
    window.addEventListener("scroll", noscroll);

    // Remove the scroll disabling listener after a delay
    const timeoutId = setTimeout(() => {
      window.removeEventListener("scroll", noscroll);
    }, 1000);
  }

  return (
    <iframe
      style={{ objectFit: "contain" }}
      src="https://aceamarco.github.io/resume/#resume"
      id="myIframe"
      border="none"
      width="100%"
      height="100%"
      allowtransparency="true"
      onLoad={onLoadFrame()}
    ></iframe>
  );
}

export default function ResumeFrame() {
  return (
    <div className="frame resumeFrame-container" width="80%" height="100vh">
      <div className="w-100 resume-container">
        {/* Resume Frame */}
        <div className="resumeButtons-container">
          {/* Buttons Frame */}
          <ViewOnGHButton style={{ marginRight: "5px" }} />
          <DownloadBtn />
        </div>
        <div style={{ width: "100%", height: "100vh" }}>
          {/* Resume iFrame frame */}
          <ResumeIFrame />
        </div>
      </div>
      <div>{/* Sidebar Frame */}</div>
    </div>
  );
}
