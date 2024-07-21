import Card from "react-bootstrap/Card";
import { SocialsButton } from "@/components/Common";

import "@/styles/Socials.css";

/**
 * SocialsCard Component
 * @param {Object} props - The properties object.
 * @param {string} props.thumbnail_path - The path to the thumbnail image.
 * @param {string} props.title - The title of the card.
 * @param {string} props.subtitle - The subtitle of the card.
 * @param {string} props.text - The text content of the card.
 * @param {JSX.Element} props.socials_button - The social media button component.
 * @returns {JSX.Element} The rendered card component.
 */
function SocialsCard({ thumbnail_path, title, subtitle, socials_button }) {
  return (
    <Card
      text="light"
      style={{ width: "18rem", background: "rgba(0, 0, 0, 0.12)" }}
    >
      <img
        src={thumbnail_path}
        className="d-block w-100 project-card-img"
        alt={title}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{subtitle}</Card.Subtitle>
        <div style={{ marginTop: "10px" }}>{socials_button}</div>
      </Card.Body>
    </Card>
  );
}

/**
 * SocialsFrame Component
 * @param {Object} props - The properties object.
 * @param {Array} props.socials - An array of social objects containing information for social cards.
 * @returns {JSX.Element} The rendered socials frame component.
 *
 * The SocialsFrame component fits the width and height of its container and includes bootstrap
 * cards with a picture and links to social media websites.
 */
export default function SocialsFrame({ socials }) {
  return (
    <div className="socials-frame-container">
      {socials.map((social, index) => {
        const social_button = (
          <SocialsButton variant={social.type} link={social.link} />
        );
        return (
          <SocialsCard
            key={index}
            thumbnail_path={social.thumbnail_path}
            title={social.title}
            subtitle={social.subtitle}
            socials_button={social_button}
          />
        );
      })}
    </div>
  );
}
