import React, { useState } from "react";
import BrowserNav from "./BrowserNav";
import BlogTab from "./BlogTab";
import NewsletterTab from "./NewsletterTab";
import ThoughtsTab from "./ThoughtsTab";
import { BLOG_TAB, NEWSLETTER_TAB, THOUGHTS_TAB } from "../utils/constants";
import "./Browser.scss";

export default function Browser() {
  const [activeTab, setActiveTab] = useState(BLOG_TAB);

  const handleTabChange = (new_active_tab) => {
    setActiveTab(new_active_tab);
  };
  return (
    <div className="browser-container">
      <BrowserNav activeTab={activeTab} handleTabChange={handleTabChange} />
      {activeTab === BLOG_TAB && <BlogTab />}
      {activeTab === NEWSLETTER_TAB && <NewsletterTab />}
      {activeTab === THOUGHTS_TAB && <ThoughtsTab />}
    </div>
  );
}
