import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import { motion } from "framer-motion";
import Naaz from "../../img/Naaz.jpg";
import {init} from "ityped"
import { useEffect } from "react";
import { useRef } from "react";
const Services=()=>{
  const textRef=useRef()
  useEffect(()=>{
    init(textRef.current, {
      showCursor: false,
      backSpeed:50,
      showCursor:true,
      strings: [
        "Full Stack MERN Developer",
        "Full Stack MERN Developer",
        "Full Stack MERN Developer",
      ],
    });
  },[])
  const transition={duration:1,type:'spring'}
    return (
      <div className="services" id="Services">
        {/* left side */}
        {/* <div className="awesome">
          <span>My Awesome</span>
          <span>services</span>
          <spane>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eius
            molestias iusto tempora
            <br /> dignissimos, voluptates corporis accusamus
          </spane>
          <a href={Resume} download>
            <button className="button s-button">Download CV</button>
          </a>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* rihht side */}
        {/* <div className="cards">
          <motion.div
            whileInView={{ left: "14rem" }}
            initial={{ left: "25%" }}
            transition={transition}
            style={{ left: "14rem" }}
          >
            <Card
              emoji={HeartEmoji}
              heading={"Design"}
              detail={"Figma ,Sketch,PhotoShop,Adobe,Adobe xd"}
            />
          </motion.div>

          <motion.div style={{ top: "12rem", left: "-4rem" }}>
            <Card
              emoji={Glasses}
              heading={"Developer"}
              detail={"HTML,CSS,React,JAVASCRIPT  "}
            />
          </motion.div>

          <motion.div
            whileInView={{ left: "14rem" }}
            initial={{ left: "25%" }}
            transition={transition}
            style={{ top: "19rem", left: "12rem" }}
          >
            <Card
              emoji={Humble}
              heading={"UI/UX"}
              detail={"Figma ,Sketch,PhotoShop"}
            />
          </motion.div>
          <div
            className="blur s-blur2"
            style={{ background: "var(--purple) " }}
          ></div>
        </div> */}{" "}
        <h1 className="abt">About Me</h1>
        <div className="main">
          <div className="first">
            <img src={Naaz} alt="" />
          </div>
          <div className="second">
            <div className="wrapper">
              <div className="im">Hi There ,I'm</div>
              <div className="name">Najrin Shah</div>
              <div clssName="pro1">
                I'am <span className="span" ref={textRef}></span>
              </div>
              <div className="detail">
                A passionate JAVA Back-End Developer, Dedicated to developing
                robust applications that interact with the Backend part of web
                applications. Extensive expertise in website architecture,
                design, and web design, and web API designs. Problem-solving
                mindset with a goal to optimize my application for better
                stability and speed. Love to work in a team
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Services;