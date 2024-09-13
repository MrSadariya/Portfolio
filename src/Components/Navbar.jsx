import {React,useContext,useEffect,useState} from "react";
import './Navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars,faMoon,faSun} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin ,faGithub} from "@fortawesome/free-brands-svg-icons";
import {ModeContext} from '../Context/ModeContext';
import { ModeChangingContext } from "../Context/ModeChangingContext";

const Navbar=(props)=>{

    let ModeInfo=useContext(ModeContext);
    let FlippingInfo=useContext(ModeChangingContext);
    let [isSidebar,setisSidebar]=useState(false);
    
    function handleMode(){
        FlippingInfo.SetisChanging(true);
        setTimeout(()=>{
            ModeInfo.SetisDark(!ModeInfo.isDark);
        },250)  
    };

    useEffect(()=>{
        if(FlippingInfo.isChanging){
            setTimeout(()=>{
             FlippingInfo.SetisChanging(false);
            },500)
        }
    },[FlippingInfo.isChanging]);

    function handleSidebar(){
        setisSidebar(!isSidebar);
    }

    return(
    <div style={{backgroundColor:ModeInfo.isDark?"#1C1C1C":"#f3f3f3",boxShadow:ModeInfo.isDark?"0px 2px 10px 1px whitesmoke":"0px 2px 10px 1px rgba(0, 0, 0, 0.5)"}} className="n-container">
        <a href="/"><div className="n-heading top-animate">Portfolio</div></a>

        <div style={{backgroundColor:ModeInfo.isDark?"whitesmoke":"#1c1c1c",color:ModeInfo.isDark?"black":"white"}} className={`sidebar ${isSidebar?"show":"hide"} `}>
            <div style={{marginTop:"1rem",fontWeight:"800",textDecoration:"underline"}}>Portfolio</div>
            <div style={{marginTop:"1rem",fontWeight:"500"}} onClick={()=>{props.scrollToSection(props.aboutmeref);handleSidebar()}}>About Me</div>
            <div style={{fontWeight:"500"}} onClick={()=>{props.scrollToSection(props.Skillref);handleSidebar()}}>Skills</div>
            <div style={{fontWeight:"500"}} onClick={()=>{props.scrollToSection(props.projectsref);handleSidebar()}}>Projects</div>
            <div style={{fontWeight:"500"}} onClick={()=>{props.scrollToSection(props.contactmeref);handleSidebar()}}>Contact Me</div>
            <div style={{position:"fixed",bottom:"2rem"}}>
            <a href="https://github.com/MrSadariya" target="_blank" rel="noopener noreferrer" style={{color:ModeInfo.isDark?"black":"white"}}><FontAwesomeIcon icon={faGithub} style={{fontSize:"2rem",margin:"1rem"}} /></a>
            <a href='https://www.linkedin.com/in/parth-sadariya-19058825b/' target="_blank" rel="noopener noreferrer" style={{color:ModeInfo.isDark?"black":"white"}}><FontAwesomeIcon icon={faLinkedin} style={{fontSize:"2rem",margin:"1rem"}} /></a>
            </div>
        </div>
        
        <div className="n-options top-animate">
            <div onClick={()=>props.scrollToSection(props.aboutmeref)}>About Me</div>
            <div onClick={()=>props.scrollToSection(props.Skillref)}>Skills</div>
            <div onClick={()=>props.scrollToSection(props.projectsref)}>Projects</div>
            <div onClick={()=>props.scrollToSection(props.contactmeref)}>Contact</div>
        </div>

        <div>
        {ModeInfo.isDark?<button onClick={handleMode} className="mode-logo top-animate"><FontAwesomeIcon icon={faSun} style={{color:"#E8D62D"}} /></button>:<button onClick={handleMode} className="mode-logo top-animate"><FontAwesomeIcon icon={faMoon} /></button>}
        
        <button onClick={handleSidebar} className="bar-logo top-animate"><FontAwesomeIcon icon={faBars} /></button>
        </div>
    </div>);
}

export default Navbar;
