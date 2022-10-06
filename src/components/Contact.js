import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_taykou3",
        "template_w0bdob2",
        form.current,
        "MHKlEejZ7_pPve3BQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="Contact">
    <div className="w-left">
      <div className="Awesome">
        <span>Get in Touch <br/></span>
        <span>Contact me</span>
        <div
          className="blur s-blur1"
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>
    </div>
      {/* right side form */}
      <div className="c-right">
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)"}}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;



