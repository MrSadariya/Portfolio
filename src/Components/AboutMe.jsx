import React, { useContext } from "react";
import './AboutMe.css';
import {ModeContext} from '../Context/ModeContext'

const AboutMe=(props)=>{

    let ModeInfo=useContext(ModeContext);

    return(
        <section style={{backgroundColor:ModeInfo.isDark?"#202020":"#f3f3f3"}} ref={props.innerref} className="about-container">

        
            <h4>Get To Know More</h4>
            <h1 className="underline-effect-container">About Me</h1>
           
            
             <div className="a-content">
            {/* <div className="a-picture"></div> */}

         
            <div className="a-detail">
                <div className="a-intro">I'm Parth Sadariya, a pre-final year Computer Science student at Sardar Vallabhbhai National Institute of Technology(NIT)-Surat. I'm a passionate full-stack web developer and competitive programmer with a strong eagerness to learn and explore new technologies. My journey in tech is driven by a desire to innovate, grow, and contribute to impactful projects.</div>
                <div className="education-container">
                <h3>Education</h3>
                <div style={{borderColor:ModeInfo.isDark?"#E0E0E0":"black"}}>
                    <h4>Higher Secondary</h4>
                    <h5>Jawahar Navodaya Vidyalaya </h5>
                    <h6>2020 - 2022</h6>
                    <h6>92.6 % (X&XII)</h6>
                </div>
                <div style={{borderColor:ModeInfo.isDark?"#E0E0E0":"black"}}>
                    <h4>Computer Science & Engineering</h4>
                    <h5>National Institute of Technology - Surat</h5>
                    <h6>2022 - 2026</h6>
                    <h6>CGPA : 8.11(Present)</h6>
                </div>
            </div>
            </div>

            
            </div>
          
            
         


        </section>

    );
}

export default AboutMe;