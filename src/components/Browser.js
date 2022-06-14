import React, { useState } from "react";
import BrowserNav from "./BrowserNav";
import BlogTab from "./BlogTab";
import ContactTab from "./ContactTab";
import YouTubeTab from "./YouTubeTab";
import { BLOG_TAB, CONTACT_TAB, YOUTUBE_TAB } from "../utils/constants";
import "./Browser.scss";

export default function Browser({
  activeTab,
  onActiveTabChange,
  blogClassName,
  contactClassName,
  youTubeClassName,
}) {
  const handleTabChange = (new_active_tab) => {
    onActiveTabChange(new_active_tab);
  };
  return (
    <div className="browser-container">
      <BrowserNav
        activeTab={activeTab}
        onActiveTabChange={handleTabChange}
        blogClassName={blogClassName}
        contactClassName={contactClassName}
        youTubeClassName={youTubeClassName}
      />
      {activeTab === BLOG_TAB && <BlogTab />}
      {activeTab === CONTACT_TAB && <ContactTab />}
      {activeTab === YOUTUBE_TAB && <YouTubeTab />}
    </div>
  );
}
