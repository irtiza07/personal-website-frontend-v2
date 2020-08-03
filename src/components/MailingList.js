import React from "react";
import "./MailingList.scss";

export default function MailingList() {
  return (
    <div className="mailing-container">
      <p className="mailing-title">
        Want to hear more from me? <br /> Join my personal{" "}
        <span style={{ color: "#FF4343" }}>mailing list</span> &#x1F447;
        &#x1F447; &#x1F447;
      </p>
      <div className="mailing-form-container">
        <input className="mailing-input" placeholder="e-mail address" />
        <button className="mailing-cta">Subscribe</button>
      </div>
      <p className="mailing-footer">Thanks for scrolling! &#x2764;&#xFE0F; </p>
    </div>
  );
}
