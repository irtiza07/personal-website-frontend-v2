import React from "react";
import "./NewsletterTab.scss";
import MailingList from "./MailingList";

export default function NewsletterTab() {
  return (
    <div className="outer-container">
      <h1 className="headline">Stay Tuned..</h1>
      <hr style={{ border: "1px solid #E9E9E9" }} />
      <MailingList />
    </div>
  );
}
