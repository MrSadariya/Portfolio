import React, { useContext ,useRef} from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/SkillSection";
import {ModeContext} from './Context/ModeContext'
import { ModeChangingContext } from "./Context/ModeChangingContext";
import ContactMe from "./Components/ContactMe";
import Project from "./Components/Project";
import EmailService from "./Components/EmailService";
import { Toaster } from 'react-hot-toast';


function App() {

  const skillsref=useRef(null);
  const aboutmeref=useRef(null);
  const projectsref=useRef(null);
  const contactmeref=useRef(null);

  const scrollToSection=(ref)=>{
    if(ref.current){
      ref.current.scrollIntoView({behavior:'smooth'});
    }
    
  }

  let ModeInfo=useContext(ModeContext);
  let FlippingInfo=useContext(ModeChangingContext)

  return (
    <div style={{backgroundColor:ModeInfo.isDark?"black":"white",color:ModeInfo.isDark?"#E0E0E0":"#121212"}} className={`App ${FlippingInfo.isChanging?"flip-animation":""}`}>
      <Toaster position="top-center"/>
      <Navbar Skillref={skillsref} scrollToSection={scrollToSection} aboutmeref={aboutmeref} contactmeref={contactmeref} projectsref={projectsref}/>
      <Hero innerref={contactmeref} scrollToSection={scrollToSection}/>
      <AboutMe innerref={aboutmeref}/>
      <Skills ref={skillsref}/>
      <Project innerref={projectsref}/>
      <ContactMe innerref={contactmeref}/>
      <EmailService/>
    </div>
  );
}

export default App;
