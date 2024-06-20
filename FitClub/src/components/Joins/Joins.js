import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Joins.css";
const Joins = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dk108kp", "template_7fq20mr", form.current, {
        publicKey: "Qii_NEa2-qsB2arUM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    const inputFld = document.getElementById('inputField');
    inputFld.value = '';
    inputFld.focus();
  }
  return (
    <div className="Join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            id="inputField"
            type="email"
            name="user-email"
            placeholder="Enter Your Email Address"
          />
          <button className="btn btn-j" onClick={handleSubmit}>Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Joins;
