import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import tepig_img from '@/assets/images/498.png';
import { SocialsButton, CategoryPill } from '@/components/Common';

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

export default function ProjectsFrame() {
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