import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Github, Linkedin, Medium } from 'react-bootstrap-icons';

const palette = {
  background: 'rgba(0, 0, 0, 0.2)', // Background color with 20% opacity
  text: 'rgba(255, 255, 255, 1)', // White text with full opacity
  accent: {
    default: 'rgba(240, 220, 119, 1)', // Light yellow with full opacity
    secondary: 'rgba(233, 112, 56, 1)', // Orange with full opacity
    secondary_light: 'rgba(233, 112, 56, 0.8)',
  }
};

function CategoryPill({ variant }) {
  let badgeBg;
  let badgeText;

  switch (variant) {
    case 'python':
      badgeBg = palette.accent.secondary_light; // Example RGBA color with 20% opacity
      badgeText = 'Python';
      break;
    default:
      badgeBg = palette.accent.secondary; // Use your palette color for default background
      badgeText = 'Default Text';
  }

  return (
    <span className='badge rounded-pill' style={{ background: badgeBg }}>
      {badgeText}
    </span>
  );
}

function SocialsButton({ variant }) {
  let icon;
  const size = 20; // Example size, adjust as needed

  switch (variant) {
    case 'github':
      icon = <Github size={size} color={palette.accent.default} />;
      break;
    case 'linkedin':
      icon = <Linkedin size={size} color={palette.accent.default} />;
      break;
    case 'medium':
      icon = <Medium size={size} color={palette.accent.default} />;
      break;
    default:
      icon = <Github size={size} color={palette.accent.default} />;
      break;
  }

  return (
    <span className='badge socials-button'>
      {icon}
    </span>
  );
}

function SidePanelNav({ selected = 'projects' }) {
  const sections = ['projects', 'resume', 'socials'];

  return (
    <Container>
      <Row>
        <Col>
          <div style={{ height: 'auto', width: '5px', backgroundColor: 'white' }}></div>
        </Col>
        <Col>
          <ul>
            {sections.map((section) => (
              <li key={section}>
                {section === selected ? `- ${section}` : section}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export {
  palette,
  SocialsButton,
  SidePanelNav,
  CategoryPill,
}
