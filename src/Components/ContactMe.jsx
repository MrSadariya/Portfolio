import React, { useContext } from "react";
import './ContactMe.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope,faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin ,faGithub} from "@fortawesome/free-brands-svg-icons";
import {ModeContext} from '../Context/ModeContext';
import Mail from '../Static/Mail-Icon.png';
import Map from '../Static/Maps-Icon.png';

const ContactMe=(props)=>{

    let ModeInfo=useContext(ModeContext);

    return(
        <section ref={props.innerref} className="c-container">
            <h4>Get in touch</h4>
            <h1 className="underline-effect-container">Contact Me</h1>
            
            <div className={`c-detail ${ModeInfo.isDark?'dark-mode-c-div':''}`}> 
                <div className="add-div"><a className="address-icons"><img src={Mail}></img></a><h4>GMail</h4><a href="mailto:sadariyaparthb@gmail.com">sadariyaparthb@gmail.com</a></div>
                <div className="add-div"><a href='https://www.linkedin.com/in/parth-sadariya-19058825b/' style={{color:ModeInfo.isDark?"white":"black"}}> <i style={{fontSize:"2rem"}} class="devicon-linkedin-plain colored"></i></a><h4>Linkedin</h4><a href="https://www.linkedin.com/in/parth-sadariya-19058825b">parth-sadariya-19058825b</a></div>
                <div className="add-div"><a className="address-icons"><img src={Map}></img></a><h4>Place</h4><a href="https://www.google.com/maps/search/?api=1&query=Surat,+Gujarat" target="_blank">Surat , Gujarat</a></div>

            </div>
            
        </section>
    )
};

export default ContactMe;
