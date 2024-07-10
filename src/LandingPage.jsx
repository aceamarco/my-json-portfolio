import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';


import { ChevronCompactDown } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import { Github } from 'react-bootstrap-icons';
import { Medium } from 'react-bootstrap-icons';

import { TypeAnimation } from 'react-type-animation';

import self_img from '@/assets/images/self_lg.jpg'
import tepig_img from '@/assets/images/498.png'

const palette = {
  background: 'rgba(0, 0, 0, 0.2)', // Background color with 20% opacity
  text: 'rgba(255, 255, 255, 1)', // White text with full opacity
  accent: {
    default: 'rgba(240, 220, 119, 1)', // Light yellow with full opacity
    secondary: 'rgba(233, 112, 56, 1)', // Orange with full opacity
    secondary_light: 'rgba(233, 112, 56, 0.8)',
  }
};

function Hero () {
  return (
    <Container>
      <Row>
        <Col className='align-self-center text-end' ><h1 style={{color: 'white'}}>Marco Acea</h1></Col>
        <Col className='align-self-center text-start' ><TypeAnimation
              preRenderFirstString={true}
              sequence={[
                '',
                1500, // Waits 1.5s
                'Developer',
                1500,
                'Designer',
                1500,
                'Maker',
                1500,
                () => {
                  console.log('Sequence completed');
                },
              ]}
              wrapper="h1"
              cursor={true}
              repeat={Infinity}
              style={{ whiteSpace: 'pre-line', color: palette.accent.default, fontSize: '2em', display: 'inline-block' }}
            /></Col>
      </Row>
    </Container>
  )
}

function LandingPageGuide() {
  return (
    <Container>
      <Row>
        <Col className='text-center'>
          <ChevronCompactDown size={96}/>
        </Col>
      </Row>
    </Container>
  );
}

function LandingFrame() {
 return (
  <div className='overlay-content'>
        <Container fluid className='h-100'>
          <Row className='align-items-center' style={{ height: '80vh' }}>
            <Col>
              <Hero />
            </Col>
          </Row>
          <Row style={{ height: '15vh' }}>
            <Col>
              <LandingPageGuide />
            </Col>
          </Row>
        </Container>
      </div>
 )
}

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

function ProjectCard(){
  return (
    <Card text='light' style={{ width: '18rem', background: 'rgba(0, 0, 0, 0.12)'}}>
      <img src={tepig_img} className="card-img-top project-card-img" alt="tepig"></img>
      <Card.Body>
        <div style={{marginBottom: '5px'}}>
          <CategoryPill variant="python"/>
        </div>
        <Card.Title>Pokemon Air Force 1’s</Card.Title>
        <Card.Subtitle>April 2024 - Present</Card.Subtitle>
        <Card.Text>
        Built with Python, uses Selenium to navigate the Nike website and build  Air Force One's inspired by the color palette of any pokemon!
        </Card.Text>
        <SocialsButton />
      </Card.Body>
    </Card>
  );
}

function ProjectsDashboard(){
  return null //TODO: RETURN 6, SCROLLABLE FRAME
}

function ProjectsFrame() {
  return (
    <Container fluid className='m-10 full-height-container'>
      <Row className='align-items-center h-100'>
        <Col md={6}>
          <ProjectCard/>
        </Col>
        <Col md={6}>
          <ProjectCard/>
        </Col>
      </Row>
    </Container>
  );
}

function ResumeFrame() {
  return null;
}

function SocialsFrame() {
  return null;
}

function Footer() {
  return null;
}

export default function LandingPage() {
  return (
    <>
      <div className='background-container'>
        <img className='background-image' src={self_img} alt='Background'/>
        <div className='black-overlay'></div>
      </div>
      <LandingFrame/>
      <ProjectsFrame/>
      <ResumeFrame/>
      <SocialsFrame/>
      <Footer/>
    </>
  );
}