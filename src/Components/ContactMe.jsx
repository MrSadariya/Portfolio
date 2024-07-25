import React, { useContext } from "react";
import './ContactMe.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope,faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin ,faGithub} from "@fortawesome/free-brands-svg-icons";
import {ModeContext} from '../Context/ModeContext';
const ContactMe=(props)=>{

    let ModeInfo=useContext(ModeContext);

    return(
        <section ref={props.innerref} className="c-container">
            <h4>Get in touch</h4>
            <h1 className="underline-effect-container">Contact Me</h1>
            
            <div className={`c-detail ${ModeInfo.isDark?'dark-mode-c-div':''}`}> 
                <div><FontAwesomeIcon icon={faEnvelope} className="logo-c" /><h4>E-Mail</h4><a href="mailto:sadariyaparthb@gmail.com">sadariyaparthb@gmail.com</a></div>
                <div><FontAwesomeIcon icon={faLinkedin} className="logo-c"/><h4>Linkedin</h4>parth-sadariya-19058825b</div>
                <div><FontAwesomeIcon icon={faLocationDot} className="logo-c"/><h4>Place</h4>Surat,Gujarat</div>

            </div>
            
        </section>
    )
};

export default ContactMe;
