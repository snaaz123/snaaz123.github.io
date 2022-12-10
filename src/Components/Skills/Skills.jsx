import React from "react";

import "./Skills.css";
import REACT from "../../Images/REACT.png";
import JS from "../../Images/JAVASCRIPT.png";
import HEROKU from "../../Images/heroku.png";
import MONOGODB from "../../Images/mongodb.png";
import GIT from "../../Images/GIT.png";
import CSS from "../../Images/CSS.png";
import HTML from "../../Images/html.png";
import NODE from "../../Images/node-js.png";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="head">technical skills</div>

      <div className="skills-name">
        <div className="skill-n">
          <img classname="img" src={HEROKU} />
          <h2 style={{ paddingBottom: "2rem" }}>HEROKU</h2>
        </div>
        <div className="skill-n">
          <img src={JS} />
          <h2 style={{ paddingBottom: "2rem" }}>JAVASCRIPT</h2>
        </div>

        <div className="skill-n">
          <img src={GIT} />
          <h2 style={{ paddingBottom: "2rem" }}>GIT</h2>
        </div>

        <div className="skill-n">
          <img src={CSS} />
          <h2 style={{ paddingBottom: "2rem" }}>CSS</h2>
        </div>

        <div className="skill-n">
          <img src={HTML} />
          <h2 style={{ paddingBottom: "2rem" }}>HTML</h2>
        </div>
        <div className="skill-n">
          <img src={REACT} />
          <h2 style={{ paddingBottom: "2rem" }}>REACT</h2>
        </div>

        <div className="skill-n">
          <img src={MONOGODB} />
          <h2 style={{ paddingBottom: "2rem" }}>MONGODB</h2>
        </div>

        <div className="skill-n">
          <img src={NODE} />
          <h2 style={{ paddingBottom: "2rem" }}>NODE JS</h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
