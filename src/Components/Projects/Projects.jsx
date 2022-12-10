import React from "react";
import "./Projects.css";
import NC from "../../Images/nc.png";
const Project=()=>{

    return (
      <div className="projects" id="projects">
        <div className="head">projects</div>
        <div className="projects-name">
          <div className="project-main">
            <div className="first">
              <img src={NC} alt="" />
            </div>
            <div className="sec"></div>
          </div>

          <div className="project-main">
            <div className="first">
              <img src={NC} alt="" />
            </div>
            <div className="sec"></div>
          </div>

          <div className="project-main">
            <div className="first">
              <img src={NC} alt="" />
            </div>
            <div className="sec"></div>
          </div>
        </div>
      </div>
    );
}


export default Project;