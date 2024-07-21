import { palette } from "@/components/Common";

import "@/styles/Footer.css";

export default function Footer({ resumeRef, landingPageRef }) {
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="footer-container"
      style={{ background: palette.background, color: palette.text }}
    >
      <div className="footer-item">© 2024 Marco Acea</div>
      <div className="footer-item">
        <a href="mailto:aceamarco@gmail.com" style={{ color: palette.text }}>
          Contact
        </a>
      </div>
      <div
        className="footer-item"
        onClick={() => handleScroll(resumeRef)}
        style={{ cursor: "pointer" }}
      >
        Resume
      </div>
      <div
        className="footer-item"
        onClick={() => handleScroll(landingPageRef)}
        style={{ cursor: "pointer" }}
      >
        Back to Top
      </div>
    </div>
  );
}
