import React from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
const NavBar=()=>{
    return (
      <div className="na-wrapper">
        <div className="name">
          <div>Najrin</div>
          <a href="#" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </a>
        </div>
        <div className="nav">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="NavBar" spy={true} smooth={true}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="projects" spy={true} smooth={true}>
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true}>
                SKILLS
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default NavBar;