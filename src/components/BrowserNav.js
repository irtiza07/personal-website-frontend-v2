import React, { useState } from "react";
import { BLOG_TAB, NEWSLETTER_TAB, YOUTUBE_TAB } from "../utils/constants";
import "./BrowserNav.scss";

export default function BrowserNav({ activeTab, handleTabChange }) {
  const [blogClassName, setBlogClassName] = useState("tab-button active-tab");
  const [newsletterClassName, setNewsletterClassName] = useState("tab-button");
  const [youTubeClassName, setYouTubeClassName] = useState("tab-button");

  const setActiveTabCss = (newActiveTab) => {
    newActiveTab === BLOG_TAB
      ? setBlogClassName("tab-button active-tab")
      : setBlogClassName("tab-button");
    newActiveTab === NEWSLETTER_TAB
      ? setNewsletterClassName("tab-button active-tab")
      : setNewsletterClassName("tab-button");
    newActiveTab === YOUTUBE_TAB
      ? setYouTubeClassName("tab-button active-tab")
      : setYouTubeClassName("tab-button");
  };

  const onTabClick = (event) => {
    handleTabChange(event.target.id);
    setActiveTabCss(event.target.id);
  };

  return (
    <div className="browser-nav-container">
      <div className="icons-container">
        <img className="icon" src={require("../assets/close.png")} />
        <img className="icon" src={require("../assets/minimize.png")} />
        <img className="icon" src={require("../assets/maximize.png")} />
      </div>
      <div className="tabs-container">
        <button
          id={BLOG_TAB}
          className={blogClassName}
          onClick={(e) => onTabClick(e)}
        >
          <img
            className="tab-icon"
            src={require("../assets/tab-icon-draft.png")}
          />
          <p className="tab-text">Writing</p>
          {activeTab !== BLOG_TAB && activeTab !== NEWSLETTER_TAB && (
            <img
              className="tab-divider"
              src={require("../assets/divider.png")}
            />
          )}
        </button>
        <button
          id={NEWSLETTER_TAB}
          className={newsletterClassName}
          onClick={(e) => onTabClick(e)}
        >
          <img
            className="tab-icon"
            src={require("../assets/tab-icon-draft.png")}
          />
          <p className="tab-text">Newsletter</p>
          {activeTab !== NEWSLETTER_TAB && activeTab !== YOUTUBE_TAB && (
            <img
              className="tab-divider"
              src={require("../assets/divider.png")}
            />
          )}
        </button>
        <button
          id={YOUTUBE_TAB}
          className={youTubeClassName}
          onClick={(e) => onTabClick(e)}
        >
          <img
            className="tab-icon"
            src={require("../assets/tab-icon-draft.png")}
          />
          <p className="tab-text">YouTube</p>
        </button>
      </div>
    </div>
  );
}
