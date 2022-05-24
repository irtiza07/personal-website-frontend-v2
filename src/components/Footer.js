import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-contact-container">
        <p className="socials-header">Get in touch</p>
        <a className="socials-link" href="http://irtizahafiz.medium.com">
          Blog
        </a>
        <a className="socials-link" href="https://github.com/irtiza07">
          Github
        </a>
        <a
          className="socials-link"
          href="https://www.instagram.com/irtiza.hafiz/"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}
