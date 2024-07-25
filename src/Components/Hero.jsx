import React, { useContext } from "react";
import './Hero.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin ,faGithub} from "@fortawesome/free-brands-svg-icons";
import {ModeContext} from '../Context/ModeContext';

const Hero=(props)=>{

    let ModeInfo=useContext(ModeContext);

    return(<div className="h-container animate">

        <div className="h-picture"></div>

        <div  className="h-desc animate">
            <h3 >Hello , I'm</h3>
            <h1 >Parth Sadariya</h1>
            <h2 >Full Stack Web-Developer</h2>
            <div className={`desc-detail ${ModeInfo.isDark?"Darkdesc-detail":""}`}>
                <div style={{borderColor:ModeInfo.isDark?"#E0E0E0":"black"}}>Download CV</div>
                <div onClick={()=>props.scrollToSection(props.innerref)} style={{borderColor:ModeInfo.isDark?"#E0E0E0":"black"}}>Contact Info</div>
            </div>
            <div className="h-logos">
               <a href="https://github.com/MrSadariya" style={{color:ModeInfo.isDark?"white":"black"}}><FontAwesomeIcon icon={faGithub} style={{fontSize:"2rem"}} /></a>
               <a href='https://www.linkedin.com/in/parth-sadariya-19058825b/' style={{color:ModeInfo.isDark?"white":"black"}}><FontAwesomeIcon icon={faLinkedin} style={{fontSize:"2rem"}} /></a>

               {/* <a href='https://leetcode.com/u/MrSadariya/'><div style={{color:ModeInfo.isDark?"white":"black"}} className="leetcode"></div></a>
               <a href='https://codeforces.com/profile/MrSadariya'><div style={{color:ModeInfo.isDark?"white":"black"}} className="codeforces"></div></a> */}
            </div>
        </div>

    </div>);
}

export default Hero;