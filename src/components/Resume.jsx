import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ViewOnGHButton, DownloadBtn } from '@/components/Common';

import '@/styles/Resume.css';

function ResumeIFrame () {
  return <iframe src="https://aceamarco.github.io/resume/" id="myIframe" border='none' width="100%" height="100%" allowtransparency="true"></iframe>
}

export default function ResumeFrame() {

  return (
    <div class="resumeFrame-container" width="80%" height="100vh">
      <div className='w-100 resume-container'>
        {/* Resume Frame */}
        <div className='resumeButtons-container'>
          {/* Buttons Frame */}
          <ViewOnGHButton style={{marginRight: '5px'}}/>
          <DownloadBtn />
        </div>
        <div style={{width: '100%', height: '100vh'}}>
          {/* Resume iFrame frame */}
          <ResumeIFrame />
        </div>
      </div>
      <div>
        {/* Sidebar Frame */}
      </div>
    </div>
  );
}


// export default function ResumeFrame() {

//   return (
//     <Container fluid style={{ width: '80%', height: '100vh', overflowY: 'scroll', scrollbarWidth: 'none' }}>
//       <Row>
//         <Col className='flex'>
//           <ViewOnGHButton />
//         </Col>
//         <Col>
//         <DownloadBtn />
//         </Col>
//       </Row>
//       <Row className='align-items-center h-100'>
//         <Col className='h-100'>
//           <iframe src="https://aceamarco.github.io/resume/" id="myIframe" border='none' width="100%" height="100%" allowtransparency="true"></iframe>
//         </Col>
//       </Row>
//     </Container>
//   );
// }
