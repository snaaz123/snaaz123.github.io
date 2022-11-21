import React from "react";
import MUI from "../../img/materialUI.png";
import JS from "../../img/JS.png";
import RCT from "../../img/react-logo.gif";
import HTML from "../../img/html.png";
import CSS3 from "../../img/CSS3.png";
import REDUX from "../../img/REDUX.png";
import mongoDB from "../../img/mongoDB.png";
import GIT from "../../img/git.png";
import nodejs from "../../img/nodejs.png";
import "./Works.css";
import { motion } from "framer-motion";

const Works=()=>{
    return (
      <div id="Experience">
        <h1 className="skills-s">Technical Skills</h1>
        <div className="works">
          {/* <div className="awesome">
          <span>Works for all these</span>
          <span>brands and clients</span>
          <spane>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eius
            molestias iusto tempora
            <br /> dignissimos, voluptates corporis accusamus
          </spane>

          <button className="button s-button">Hire me</button>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div> */}
          {/* right side */}
          <div className="w-right left-cls">
            <div className="w-backCricle blueCircle"></div>
            <div className="w-backCricle yellowCircle"></div>
            <motion.div
              initial={{ rotate: 45 }}
              whileInView={{ rotate: 0 }}
              viewport={{ margin: "-40px" }}
              transition={{ duration: 3.5, type: "spring" }}
              className="w-mainCircle"
            >
              <div className="secCircle">
                <img src={HTML} alt="" />
              </div>
              <div className="secCircle">
                <img src={JS} alt="" />
              </div>
              <div className="secCircle">
                <img src={RCT} alt="" />
              </div>
              <div className="secCircle">
                <img src={CSS3} alt="" />
              </div>
              <div className="secCircle">
                <img src={REDUX} alt="" />
              </div>
            </motion.div>
            {/* background circle */}
          </div>
          <div className="w-right right-cls">
            <motion.div
              initial={{ rotate: 45 }}
              whileInView={{ rotate: 0 }}
              viewport={{ margin: "-40px" }}
              transition={{ duration: 3.5, type: "spring" }}
              className="w-mainCircle"
            >
              <div className="secCircle">
                <img style={{ width: "150%" }} src={mongoDB} alt="" />
              </div>
              <div className="secCircle">
                <img src={GIT} alt="" />
              </div>
              <div className="secCircle">
                <img src={RCT} alt="" />
              </div>
              <div className="secCircle">
                <img src={nodejs} alt="" />
              </div>
              <div className="secCircle">
                <img src={MUI} alt="" />
              </div>
            </motion.div>
            {/* background circle */}
            <div className="w-backCricle blueCircle"></div>
            <div className="w-backCricle yellowCircle"></div>
          </div>
        </div>
      </div>
    );
}


export default Works;