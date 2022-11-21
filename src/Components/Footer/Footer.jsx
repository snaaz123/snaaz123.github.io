import React from "react";
import Wave from '../../img/wave.png';
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Git from "@iconscout/react-unicons/icons/uil-github";
import "./Footer.css";
const Footer=()=>{
    return(
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>shahnajrin@gmail.com</span>
        <div className="f-icons">
          <Insta style={{ color: "white", size: "3rem" }} />

          <Facebook style={{ color: "white", size: "3rem" }} />

          <Git style={{ color: "white", size: "3rem" }} />
        </div>
      </div>
    </div>
    );
}

export default Footer;
