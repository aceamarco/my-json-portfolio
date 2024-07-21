import React from "react";

import { ViewOnGHButton, DownloadBtn } from "@/components/Common";

import "@/styles/Resume.css";

function ResumeIFrame() {
  return (
    <iframe
      style={{ objectFit: "contain" }}
      src="https://aceamarco.github.io/resume/#resume"
      id="myIframe"
      border="none"
      width="100%"
      height="100%"
      allowtransparency="true"
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
