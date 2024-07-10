import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ViewOnGHButton, DownloadBtn } from './Common';


export default function ResumeFrame() {

  return (
    <Container fluid style={{ width: '80%', height: '100vh', overflowY: 'scroll', scrollbarWidth: 'none' }}>
      <Row>
        <Col className='flex'>
          <ViewOnGHButton />
        </Col>
        <Col>
        <DownloadBtn />
        </Col>
      </Row>
      <Row className='align-items-center h-100'>
        <Col className='h-100'>
          <iframe src="https://aceamarco.github.io/resume/" id="myIframe" border='none' width="100%" height="100%" allowtransparency="true"></iframe>
        </Col>
      </Row>
    </Container>
  );
}
