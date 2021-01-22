import React, { useState } from "react";
import BrowserNav from "./BrowserNav";
import BlogTab from "./BlogTab";
import NewsletterTab from "./NewsletterTab";
import YouTubeTab from "./YouTubeTab";
import { BLOG_TAB, NEWSLETTER_TAB, YOUTUBE_TAB } from "../utils/constants";
import "./Browser.scss";

export default function Browser({
  activeTab,
  onActiveTabChange,
  blogClassName,
  newsletterClassName,
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
        newsletterClassName={newsletterClassName}
        youTubeClassName={youTubeClassName}
      />
      {activeTab === BLOG_TAB && <BlogTab />}
      {activeTab === NEWSLETTER_TAB && <NewsletterTab />}
      {activeTab === YOUTUBE_TAB && <YouTubeTab />}
    </div>
  );
}
