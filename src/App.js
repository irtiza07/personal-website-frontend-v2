import React, { useState } from "react";
import TopNavBar from "./components/TopNavBar";
import Banner from "./components/Banner";
import Browser from "./components/Browser";
import { BLOG_TAB, CONTACT_TAB, YOUTUBE_TAB } from "./utils/constants";

import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState(BLOG_TAB);
  const [blogClassName, setBlogClassName] = useState("tab-button active-tab");
  const [contactClassName, setContactClassName] = useState("tab-button");
  const [youTubeClassName, setYouTubeClassName] = useState("tab-button");

  const onActiveTabChange = (newActiveTab) => {
    setActiveTab(newActiveTab);
    setActiveTabCss(newActiveTab);
  };

  const setActiveTabCss = (newActiveTab) => {
    newActiveTab === BLOG_TAB
      ? setBlogClassName("tab-button active-tab")
      : setBlogClassName("tab-button");
    newActiveTab === CONTACT_TAB
      ? setContactClassName("tab-button active-tab")
      : setContactClassName("tab-button");
    newActiveTab === YOUTUBE_TAB
      ? setYouTubeClassName("tab-button active-tab")
      : setYouTubeClassName("tab-button");
  };

  return (
    <div className="App">
      <TopNavBar changeActiveTab={onActiveTabChange} />
      <Banner />
      <Browser
        activeTab={activeTab}
        changeActiveTab={setActiveTab}
        blogClassName={blogClassName}
        contactClassName={contactClassName}
        youTubeClassName={youTubeClassName}
        onActiveTabChange={onActiveTabChange}
      />
      <Footer />
    </div>
  );
}

export default App;
