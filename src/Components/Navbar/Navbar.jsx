import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import {NavLink} from "react-scroll"
const Navbar=()=>{
    return (
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Najrin</div>
          <Toggle />
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <Link spy={true} to="Navbar" smooth={true}>
                <li>
                  Home
                </li>
              </Link>

              <Link spy={true} to="Services" smooth={true}>
                <li>About</li>
              </Link>
              <Link spy={true} to="Experience" smooth={true}>
                <li>Skills</li>
              </Link>
              <Link spy={true} to="Portfolio" smooth={true}>
                <li>Project</li>
              </Link>
              <Link spy={true} to="Testimonials" smooth={true}>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          {/* <button className="button n-button">Contact</button> */}
        </div>
      </div>
    );
}

export default Navbar;