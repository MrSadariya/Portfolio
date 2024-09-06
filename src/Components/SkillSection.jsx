import React, { forwardRef, useContext } from "react";
import './SkillSection.css';
import TechData from '../Static/TechStackData';
import ToolsData from "../Static/ToolsData";
import LanguageData from "../Static/LanguageData";
import {ModeContext} from '../Context/ModeContext'


const Skills=forwardRef((props,ref)=>{

  let ModeInfo=useContext(ModeContext);


    return(
        <section ref={ref} className="s-container">
            <h4>Explore My</h4>
            <h1 className="underline-effect-container">Skills</h1>
            <div className={`s-tech ${ModeInfo.isDark?"Darks-tech":""}`}>  
                <h2>My Tech Stack</h2>
                <br></br>
              {TechData.map((t)=><div className="aa" style={{borderColor:ModeInfo.isDark?"#E0E0E0":"black"}} key={t.Id}><i class={t.class}></i><p>{t.Name}</p></div>)}
            </div>

            <div className={`s-tech ${ModeInfo.isDark?"Darks-tech":""}`}>  
                <h2>Tools</h2>
                <br></br>
              {ToolsData.map((t)=><div className="aa" style={{borderColor:ModeInfo.isDark?"#E0E0E0":"black"}} key={t.Id}><i  class={t.class}></i><p>{t.Name}</p></div>)}
            </div>

            <div className={`s-tech ${ModeInfo.isDark?"Darks-tech":""}`}>  
                <h2>Programming Languages</h2>
                <br></br>
              {LanguageData.map((t)=><div className="aa" style={{borderColor:ModeInfo.isDark?"#E0E0E0":"black"}} key={t.Id}><i class={t.class}></i><p>{t.Name}</p></div>)}
            </div>

            
           
        </section>
    );
});

export default Skills;