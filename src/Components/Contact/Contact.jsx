import React, { useRef } from "react";
import "./Contact.css";
//import emailjs from "@emailjs/browser";
const Contact=()=>{

     const form = useRef();

    //  const sendEmail = (e) => {
    //    e.preventDefault();///

    //    emailjs
    //      .sendForm(
    //        "YOUR_SERVICE_ID",
    //        "YOUR_TEMPLATE_ID",
    //        form.current,
    //        "YOUR_PUBLIC_KEY"
    //      )
    //      .then(
    //        (result) => {
    //          console.log(result.text);
    //        },
    //        (error) => {
    //          console.log(error.text);
    //        }
    //      );
    //  };
    return (
      <div className="contact-form">
        <div className="w-left">
          <div className="awesome">
            <span>Get in touch</span>
            <span>Contact me</span>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>

        <div className="c-right">
          <form ref={form} onSubmit>
            <input
              type="text"
              name="user_name"
              className="user"
              placeholder="Name"
            />
            <input
              type="text"
              name="user_email"
              className="user"
              placeholder="Email"
            />
            <textarea name="message" className="user" placeholder="message"/>

            <input type="submit" value="send" className="button"/>
           <div className="blur c-blur1"
           style={{background:"var(--purple)"}}
           >

           </div>
          </form>
        </div>
      </div>
    );
}

export default Contact;