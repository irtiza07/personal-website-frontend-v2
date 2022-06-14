import React, { useState } from "react";
import { BLOG_TAB, CONTACT_TAB, YOUTUBE_TAB } from "../utils/constants";
import "./BrowserNav.scss";

export default function BrowserNav({
  activeTab,
  onActiveTabChange,
  blogClassName,
  contactClassName,
  youTubeClassName,
}) {
  const onTabClick = (event) => {
    onActiveTabChange(event.target.id);
  };
  console.log(activeTab);

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
          {activeTab !== BLOG_TAB && activeTab !== YOUTUBE_TAB && (
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
          {activeTab !== YOUTUBE_TAB && activeTab !== CONTACT_TAB && (
            <img
              className="tab-divider"
              src={require("../assets/divider.png")}
            />
          )}
        </button>
        <button
          id={CONTACT_TAB}
          className={contactClassName}
          onClick={(e) => onTabClick(e)}
        >
          <img
            className="tab-icon"
            src={require("../assets/tab-icon-draft.png")}
          />
          <p className="tab-text">Contact</p>
          {activeTab !== CONTACT_TAB && (
            <img
              className="tab-divider"
              src={require("../assets/divider.png")}
            />
          )}
        </button>
      </div>
    </div>
  );
}
