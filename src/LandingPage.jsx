import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { ChevronCompactDown } from 'react-bootstrap-icons';

import { TypeAnimation } from 'react-type-animation';

import self_img from '@/assets/images/self.jpg'

function Hero () {
  return (
    <Container>
      <Row>
        <Col className='align-self-center text-end' ><h1 style={{color: 'white'}}>Marco Acea</h1></Col>
        <Col className='align-self-center text-start' ><TypeAnimation
              preRenderFirstString={true}
              sequence={[
                'Web Apps',
                1500, // Waits 1s
                'Full Stack',
                1500, // Waits 2s
                'DevOps',
                1500,
                'Embedded Systems',
                1500,
                'Control Systems',
                () => {
                  console.log('Sequence completed');
                },
              ]}
              wrapper="h1"
              cursor={true}
              repeat={Infinity}
              style={{ whiteSpace: 'pre-line', color: '#F0DC77', fontSize: '2em', display: 'inline-block' }}
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

export default function LandingPage() {
  return (
    <>
      <Container fluid>
          <Row className="align-items-center" style={{ height: '80vh'}}>
            <Col>
              <Hero/>
            </Col>
          </Row>
        <Row style={{ height: '15vh'}}>
          <Col>
            <LandingPageGuide/>
          </Col>
        </Row>
      </Container>
    </>
  )
}