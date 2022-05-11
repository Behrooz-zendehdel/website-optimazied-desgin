import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const [done, setDone] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ylpx4rg",
        "template_lcqsbnh",
        form.current,
        "oCfX3be4Ry8A3DO7A"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      <div className="c-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me </span>
          <span>09222806847-09351080958</span>
          <span>behrooz.zendedel1992@gmail.com</span>
        </div>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user-name"
              className="user"
              placeholder="Name is required"
            />
            <input
              type="email"
              name="user-email"
              className="user"
              placeholder="Email is required"
            />
            <textarea name="message" className="user" placeholder="Message :" />
            <input type="submit" className="button" value="Send" />
            <span
              style={{
                color: done ? "green" : "red",
                fontSize: done ? "25px " : "20px",
              }}
            >
              {" "}
              {done && "sendig successfull"}
            </span>
            <div
              className="blur c-blur1"
              style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
