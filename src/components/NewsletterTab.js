import React from "react";
import "./NewsletterTab.scss";
import MailingList from "./MailingList";

export default function NewsletterTab() {
  return (
    <div className="outer-container">
      <h1 className="headline">Sunday Bytes</h1>
      <p className="quote">
        "If you can get 1 percent better each day for one year, you'll end up
        thirty-seven times better by the time you are done" - James Clear
      </p>
      <p className="description">
        Every Sunday I send out an email newsletter called Sunday Bytes. The
        intention of the newsletter is to help you grow both personally and
        professionally in the world of technology.
      </p>
      <div className="details-container">
        <div className="item">
          <img className="item-image" src={require("../assets/news.png")} />
          <p className="item-text">
            Everything that's happening in the world of technology, inlcuding
            exciting startups coming up{" "}
          </p>
        </div>
        <div className="item">
          <img
            className="item-image"
            src={require("../assets/programming.png")}
          />
          <p className="item-text">Help you become a better programmer</p>
        </div>
        <div className="item">
          <img className="item-image" src={require("../assets/growth.png")} />
          <p className="item-text">
            Exciting reads and cool podcasts to help you you grow personally
          </p>
        </div>
        <div className="item">
          <img className="item-image" src={require("../assets/free.png")} />
          <p className="item-text">
            FREE courses, e-books and tutorial videos that I publish
          </p>
        </div>
      </div>
      <div className="attribution">
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/nikita-golubev"
          title="Nikita Golubev"
        >
          Nikita Golubev
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <hr style={{ border: "1px solid #E9E9E9" }} />
      <MailingList />
    </div>
  );
}
