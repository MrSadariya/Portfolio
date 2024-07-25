import React from "react";
import './Project.css';
import PortfolioImg from '../Static/Screenshot (110).png';
import BookifyImg from '../Static/Bookify-Cover.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Project=(props)=>{

    return(
        <section ref={props.innerref} className="p-container">
            <h4>Browse My Recent</h4>
            <h1 className="underline-effect-container">Projects</h1>

            <div className="p-div-container">
                {/* Portfolio */}
                <div className="project-div">
                     <img src={PortfolioImg} alt="Portfolio" className="project-img" />
                     <div className="project-detail">
                        <div className="project-logos">
                           <a href="#"><FontAwesomeIcon icon={faGithub}   className="logooo"/></a>
                           <a href="#"><FontAwesomeIcon icon={faLink} className="logooo"/></a>
                        </div>
                        <div className="project-heading">
                            <h2>Portfolio</h2>
                            <h5>React , CSS</h5>

                        </div>
                     </div>
                </div>

                {/* Bookify */}
                <div className="project-div">
                     <img src={BookifyImg} alt="Bookify" className="project-img" />
                     <div className="project-detail">
                        <div className="project-logos">
                           <a href="#"><FontAwesomeIcon icon={faGithub}   className="logooo"/></a>
                           <a href="#"><FontAwesomeIcon icon={faLink} className="logooo"/></a>
                        </div>
                        <div className="project-heading">
                            <h2>Bookify</h2>
                            <h5>React , Nodejs , Expressjs , MongoDb , CSS</h5>

                        </div>
                     </div>
                </div>

                {/* New Project1 */}
                <div className="project-div">
                     <img src={BookifyImg} alt="Bookify" className="project-img" />
                     <div className="project-detail">
                        <div className="project-logos">
                           <a href="#"><FontAwesomeIcon icon={faGithub}   className="logooo"/></a>
                           <a href="#"><FontAwesomeIcon icon={faLink} className="logooo"/></a>
                        </div>
                        <div className="project-heading">
                            <h2>Bookify</h2>
                            <h5>React , Nodejs , Expressjs , MongoDb , CSS</h5>

                        </div>
                     </div>
                </div>


            </div>
            
           

        </section>
    )
}

export default Project;