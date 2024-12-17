import React from 'react'
import LandingPage from './component/Landing'
import LogoCarousel from './component/LogoCarousel'
import AboutMe from './component/AboutMe';
import MyWorks from './component/MyWork';
import Skills from './component/Skills';
import WebMockups from './component/WebMockups';
import ContactSection from './component/ContactSection';
import FooterSection from './component/FooterSection';
import TestimonialSection from './component/TestimonialSection';
import Services from './component/Services';

function App() {
  return (
   <>
    {/* <Navbar/> */}
    <LandingPage/>
    <LogoCarousel/>
    <AboutMe/>
    <Skills/>
    <MyWorks/>  
    <WebMockups/>
    <Services/>
    <TestimonialSection/>
    <ContactSection/>
    <FooterSection/>
   </>
  )
}

export default App