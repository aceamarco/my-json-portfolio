import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import self_img from '@/assets/images/self_lg.jpg'
import LandingFrame from '@/components/Landing';
import ProjectsFrame from '@/components/Projects';
import ResumeFrame from '@/components/Resume';
import SocialsFrame from '@/components/Socials';
import Footer from '@/components/Footer';

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
