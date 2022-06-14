import React from "react";
import { BLOG_TAB, CONTACT_TAB, YOUTUBE_TAB } from "../utils/constants";

import "./TopNavBar.scss";

export default function TopNavBar({ changeActiveTab }) {
  const handleTabChange = (new_active_tab) => {
    changeActiveTab(new_active_tab);
  };
  return (
    <div className="nav-container">
      <p>irtiza.hafiz</p>
      <div className="links-container">
        <p className="nav-item" onClick={() => handleTabChange(BLOG_TAB)}>
          Writing
        </p>
        <p className="nav-item" onClick={() => handleTabChange(YOUTUBE_TAB)}>
          YouTube
        </p>
        <p className="nav-item" onClick={() => handleTabChange(CONTACT_TAB)}>
          Contact
        </p>
      </div>
    </div>
  );
}
