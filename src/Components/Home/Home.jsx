import React from "react";
import "./Home.css";
import profile from "../../Images/NAAZ_pic1.jpg";
const Home=()=>{

    return (
      <div
        className="home-wrapper"
        style={{
          textAlign: "left",
          paddingLeft: "10rem",
          display: "flex",
          alignItems: "center",
          gap:"4rem"
        }}
      >
        <div className="left">
          <div
            className="name-n"
            style={{ fontSize: "35px", fontWeight: "900" }}
          >
            Hey!!! I am
          </div>
          <div className="n" style={{ fontSize: "45px", fontWeight: "900" }}>
            Najrin Shah
          </div>
          <div
            className="profile"
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <div style={{ fontSize: "35px", fontWeight: "900" }}>And I'm</div>
            <div style={{ fontSize: "45px", fontWeight: "900" }}>
              Full Stack Developer
            </div>
          </div>
          <a>
            <button className="resume-btn">Resume</button>
          </a>
        </div>

        <din className="right">
          <img className="my-photo"
            src={profile}  
          />
        </din>
      </div>
    );
}

export default Home;