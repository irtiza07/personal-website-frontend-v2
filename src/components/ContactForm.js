import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import "./ContactForm.scss";

export default function ContactForm({ setFormVisibility }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const ctaStyle =
    name && email && message ? "send-button send-button-active" : "send-button";

  const submitForm = () => {
    fetch("https://api.irtizahafiz.com/contact", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, email: email, message: message }),
    });
    setFormVisibility(false);
  };
  return (
    <Modal
      show={true}
      onHide={() => setFormVisibility(false)}
      centered
      size="xl"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="form-inner-container">
          <img src={require("../assets/mail.png")} className="mail-icon" />
          <div className="right-container">
            <p className="modal-title">Let's get connected</p>
            <input
              placeholder="Name"
              className="input-container"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="E-mail address"
              className="input-container"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Message"
              className="input-container message-input"
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="cta-container">
              <a href="https://instagram.com/irtiza.hafiz" target="_blank">
                <img
                  src={require("../assets/ig.png")}
                  width={32}
                  height={32}
                ></img>
              </a>
              <button className={ctaStyle} onClick={submitForm}>
                Send
              </button>
            </div>

            {/* <div className="footer-container">
              <a href="https://instagram.com/irtiza.hafiz" target="_blank">
                <img
                  src={require("../assets/ig.png")}
                  width={40}
                  height={40}
                ></img>
              </a>
              <button className={ctaStyle}>Send</button>
            </div> */}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
