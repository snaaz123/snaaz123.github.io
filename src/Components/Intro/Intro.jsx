import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from '../../img/Vector1.png';
import Vector2 from "../../img/Vector2.png";
import Naaz from "../../img/Naaz.jpg";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
//import {  motion } from "framer-motion/dist/es/index";
 import {motion} from "framer-motion";
const Intro = () => {
  const transition={duration:2,type:'spring'}
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Najrin Shah</span>
          <span>
            Frontend Developer with high level of expertise in web designing and
            development, producting the Quality work
          </span>
        </div>
        <div className="hire-resume">
          <button className="button i-button">Resume</button>
        </div>

        {/* <div className="i-icons">
          <a href="https://github.com/snaaz123">
            <img src={Github} alt="" />
          </a>
          <a href="">
            <img src={LinkedIn} alt="" />
          </a>

          <img src={Instagram} alt="" />
        </div> */}
      </div>
      <div className="i-right">
        {/* <img src={Vector1} alt="" />
        <img src={Vector2} alt="" /> */}
        <img src={Naaz} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-10%" }}
          transition={{duration:4,type:'spring'}}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} text1="MERN" text2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} text1="REACT" text2="Developer" />
        </motion.div>
        {/* blur divs */}
        <div className="blur" style={{ background: "rgb (238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};
export default Intro;
