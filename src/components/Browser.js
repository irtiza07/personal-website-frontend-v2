import React, { useState } from "react";
import BrowserNav from "./BrowserNav";
import BlogTab from "./BlogTab";
import ProjectTab from "./ProjectTab";
import ResumeTab from "./ResumeTab";
import ThoughtsTab from "./ThoughtsTab";
import {
  BLOG_TAB,
  PROJECT_TAB,
  RESUME_TAB,
  THOUGHTS_TAB,
} from "../utils/constants";
import "./Browser.scss";
import MailingList from "./MailingList";

export default function Browser() {
  const [activeTab, setActiveTab] = useState(BLOG_TAB);

  const handleTabChange = (new_active_tab) => {
    setActiveTab(new_active_tab);
  };
  return (
    <div className="browser-container">
      <BrowserNav activeTab={activeTab} handleTabChange={handleTabChange} />
      {activeTab === BLOG_TAB && <BlogTab />}
      {activeTab === PROJECT_TAB && <ProjectTab />}
      {activeTab === RESUME_TAB && <ResumeTab />}
      {activeTab === THOUGHTS_TAB && <ThoughtsTab />}
      <hr style={{ border: "1px solid #EDEDED" }} />
      <MailingList />
    </div>
  );
}
