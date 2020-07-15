import React, { useState } from "react";
import {
  BLOG_TAB,
  PROJECT_TAB,
  RESUME_TAB,
  THOUGHTS_TAB,
} from "../utils/constants";
import "./BrowserNav.scss";

export default function BrowserNav({ activeTab, handleTabChange }) {
  const [blogClassName, setBlogClassName] = useState("tab-button active-tab");
  const [projectClassName, setProjectClassName] = useState("tab-button");
  const [resumeClassName, setResumeClassName] = useState("tab-button");
  const [thoughtsClassName, setThoughtsClassName] = useState("tab-button");

  const setActiveTabCss = (newActiveTab) => {
    newActiveTab === BLOG_TAB
      ? setBlogClassName("tab-button active-tab")
      : setBlogClassName("tab-button");
    newActiveTab === PROJECT_TAB
      ? setProjectClassName("tab-button active-tab")
      : setProjectClassName("tab-button");
    newActiveTab === RESUME_TAB
      ? setResumeClassName("tab-button active-tab")
      : setResumeClassName("tab-button");
    newActiveTab === THOUGHTS_TAB
      ? setThoughtsClassName("tab-button active-tab")
      : setThoughtsClassName("tab-button");
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
          <p className="tab-text">@irtizahafiz</p>
          {activeTab !== BLOG_TAB && activeTab !== PROJECT_TAB && (
            <img
              className="tab-divider"
              src={require("../assets/divider.png")}
            />
          )}
        </button>
        <button
          id={PROJECT_TAB}
          className={projectClassName}
          onClick={(e) => onTabClick(e)}
        >
          <img
            className="tab-icon"
            src={require("../assets/tab-icon-draft.png")}
          />
          <p className="tab-text">Projects</p>
          {activeTab !== PROJECT_TAB && activeTab !== RESUME_TAB && (
            <img
              className="tab-divider"
              src={require("../assets/divider.png")}
            />
          )}
        </button>
        <button
          id={RESUME_TAB}
          className={resumeClassName}
          onClick={(e) => onTabClick(e)}
        >
          <img
            className="tab-icon"
            src={require("../assets/tab-icon-draft.png")}
          />
          <p className="tab-text">Resume</p>
          {activeTab !== RESUME_TAB && activeTab !== THOUGHTS_TAB && (
            <img
              className="tab-divider"
              src={require("../assets/divider.png")}
            />
          )}
        </button>
        <button
          id={THOUGHTS_TAB}
          className={thoughtsClassName}
          onClick={(e) => onTabClick(e)}
        >
          <img
            className="tab-icon"
            src={require("../assets/tab-icon-draft.png")}
          />
          <p className="tab-text">Thoughts</p>
        </button>
      </div>
    </div>
  );
}
