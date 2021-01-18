import React, { useState } from "react";
import toast from "react-simple-toasts";
import { toastConfig } from "react-simple-toasts";

import "./MailingList.scss";
import { CONVERTKIT_API_KEY } from "../utils/constants";

toastConfig({
  time: 5000,
  // className: "my-toast-message",
});

export default function MailingList() {
  const [email, setEmail] = useState("");
  const subscribeConvertKit = (e) => {
    fetch("https://api.convertkit.com/v3/forms/1650809/subscribe", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ api_key: CONVERTKIT_API_KEY, email: email }),
    }).then((response) => {
      if (response.status === 200) {
        setEmail("");
        toast("Email submitted successfully");
      } else {
        toast("Email submission failed");
      }
    });
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="mailing-container">
      <p className="mailing-title">
        Want to hear more from me? <br /> Join my personal{" "}
        <span style={{ color: "#FF4343" }}>mailing list</span> &#x1F447;
        &#x1F447; &#x1F447;
      </p>
      <div className="mailing-form-container">
        <input
          className="mailing-input"
          placeholder="e-mail address"
          onChange={handleEmail}
          value={email}
        />
        <button className="mailing-cta" onClick={subscribeConvertKit}>
          Subscribe
        </button>
      </div>
      <p className="mailing-footer">Thanks for scrolling! &#x2764;&#xFE0F; </p>
    </div>
  );
}
