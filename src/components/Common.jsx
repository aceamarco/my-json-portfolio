import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  Github,
  Linkedin,
  Medium,
  FileEarmarkArrowDownFill,
} from "react-bootstrap-icons";

import "@/styles/Common.css";

const palette = {
  background: "rgba(0, 0, 0, 0.2)", // Background color with 20% opacity
  text: "rgba(255, 255, 255, 1)", // White text with full opacity
  accent: {
    default: "rgba(240, 220, 119, 1)", // Light yellow with full opacity
    secondary: "rgba(233, 112, 56, 1)", // Orange with full opacity
    secondary_light: "rgba(233, 112, 56, 0.8)",
  },
};

function CategoryPill({ name }) {
  return (
    <span
      className="badge rounded-pill category-pill"
      style={{ background: palette.accent.secondary_light }}
    >
      {name}
    </span>
  );
}

function CategoryPillContainer({ tags }) {
  return (
    <div className="category-pill-container" style={{ marginBottom: "5px" }}>
      {tags.map((tag, index) => (
        <CategoryPill key={index} name={tag} />
      ))}
    </div>
  );
}

const openLinkInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

function SocialsButton({ variant = "github", link = "github.com/aceamarco" }) {
  let icon;
  const size = 20; // Example size, adjust as needed

  switch (variant) {
    case "github":
      icon = <Github size={size} color={palette.accent.default} />;
      break;
    case "linkedin":
      icon = <Linkedin size={size} color={palette.accent.default} />;
      break;
    case "medium":
      icon = <Medium size={size} color={palette.accent.default} />;
      break;
    default:
      icon = <Github size={size} color={palette.accent.default} />;
      break;
  }

  return (
    <span
      onClick={() => openLinkInNewTab(link)}
      className="badge socials-button"
      style={{ cursor: "pointer" }}
    >
      {icon}
    </span>
  );
}

function SidePanelNav({ selected = "projects" }) {
  const sections = ["projects", "resume", "socials"];

  return (
    <Container>
      <Row>
        <Col>
          <div
            style={{ height: "auto", width: "5px", backgroundColor: "white" }}
          ></div>
        </Col>
        <Col>
          <ul>
            {sections.map((section) => (
              <li key={section}>
                {section === selected ? `· ${section}` : section}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

function ViewOnGHButton({ link = "https://github.com/aceamarco/resume" }) {
  const size = 20;
  return (
    <div
      onClick={() => openLinkInNewTab(link)}
      className="view-on-gh-container"
    >
      <Github
        style={{ marginRight: "5px" }}
        size={size}
        color={palette.accent.default}
      />
      <span style={{ color: palette.text }}>View on Github</span>
    </div>
  );
}

function DownloadBtn() {
  const size = 20;
  return (
    <div
      onClick={() => openLinkInNewTab(link)}
      className="download-btn-container"
    >
      <FileEarmarkArrowDownFill
        style={{ marginRight: "5px" }}
        size={size}
        color={palette.accent.default}
      ></FileEarmarkArrowDownFill>
      <span style={{ color: palette.text }}>Download</span>
    </div>
  );
}

export {
  palette,
  SocialsButton,
  SidePanelNav,
  CategoryPill,
  CategoryPillContainer,
  ViewOnGHButton,
  DownloadBtn,
};
