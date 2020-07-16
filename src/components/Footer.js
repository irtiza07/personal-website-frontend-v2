import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer-container">
      <img
        className="footer-illustration"
        src={require("../assets/footer-illustration.png")}
      />
      <div className="contact-container">
        <p className="socials-header">Get in touch</p>
        <a className="socials-link">Instagram</a>
        <a className="socials-link">Facebook</a>
        <a className="socials-link">Github</a>
      </div>
    </div>
  );
}
