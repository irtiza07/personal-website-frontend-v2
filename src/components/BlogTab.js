import React, { useState } from "react";
import {
  ALL,
  BACKEND,
  FRONTEND,
  INFRASTRUCTURE,
  ARCHITECTURE,
  PRODUCTIVITY,
  LIFE,
} from "../utils/categories.js";
import "./BlogTab.scss";
import FeaturedArticle from "./FeaturedArticle.js";
import SingleBlog from "./SingleBlog.js";

export default function BlogTab() {
  const [activeFilter, setActiveFilter] = useState(ALL);

  const [allClassName, setAllClassName] = useState(
    "cat-button cat-button-active"
  );
  const [backendClassName, setBackendClassName] = useState("cat-button");
  const [frontendClassName, setFrontendClassName] = useState("cat-button");
  const [infrastructureClassName, setInfrastructureClassName] = useState(
    "cat-button"
  );
  const [architectureClassName, setArchitectureClassName] = useState(
    "cat-button"
  );
  const [productivityClassName, setProductivityClassName] = useState(
    "cat-button"
  );
  const [lifeClassName, setLifeClassName] = useState("cat-button");

  const setActiveCSS = (chosenFilter) => {
    chosenFilter === ALL
      ? setAllClassName("cat-button cat-button-active")
      : setAllClassName("cat-button");
    chosenFilter === BACKEND
      ? setBackendClassName("cat-button cat-button-active")
      : setBackendClassName("cat-button");
    chosenFilter === FRONTEND
      ? setFrontendClassName("cat-button cat-button-active")
      : setFrontendClassName("cat-button");
    chosenFilter === INFRASTRUCTURE
      ? setInfrastructureClassName("cat-button cat-button-active")
      : setInfrastructureClassName("cat-button");
    chosenFilter === ARCHITECTURE
      ? setArchitectureClassName("cat-button cat-button-active")
      : setArchitectureClassName("cat-button");
    chosenFilter === PRODUCTIVITY
      ? setProductivityClassName("cat-button cat-button-active")
      : setProductivityClassName("cat-button");
    chosenFilter === LIFE
      ? setLifeClassName("cat-button cat-button-active")
      : setLifeClassName("cat-button");
  };

  return (
    <div className="blogs-container">
      <div className="introduction-container">
        <div className="summary-container">
          <img
            className="profile-icon"
            src={require("../assets/profile.png")}
          />
          <div className="intro-text-container">
            <p className="name-text">Irtiza Hafiz</p>
            <p className="article-count-text">10 articles</p>
          </div>
        </div>
        <button className="intro-button">Say Hi</button>
      </div>
      <p className="heading">Recent Articles</p>
      <hr style={{ border: "1px solid #EDEDED" }} />
      <div className="filters-container">
        <button
          id={ALL}
          className={allClassName}
          onClick={(e) => setActiveCSS(e.target.id)}
        >
          {ALL}
        </button>
        <button
          id={BACKEND}
          className={backendClassName}
          onClick={(e) => setActiveCSS(e.target.id)}
        >
          {BACKEND}
        </button>
        <button
          id={FRONTEND}
          className={frontendClassName}
          onClick={(e) => setActiveCSS(e.target.id)}
        >
          {FRONTEND}
        </button>
        <button
          id={INFRASTRUCTURE}
          className={infrastructureClassName}
          onClick={(e) => setActiveCSS(e.target.id)}
        >
          {INFRASTRUCTURE}
        </button>
        <button
          id={ARCHITECTURE}
          className={architectureClassName}
          onClick={(e) => setActiveCSS(e.target.id)}
        >
          {ARCHITECTURE}
        </button>
        <button
          id={PRODUCTIVITY}
          className={productivityClassName}
          onClick={(e) => setActiveCSS(e.target.id)}
        >
          {PRODUCTIVITY}
        </button>
        <button
          id={LIFE}
          className={lifeClassName}
          onClick={(e) => setActiveCSS(e.target.id)}
        >
          {LIFE}
        </button>
      </div>
      <FeaturedArticle />
      <SingleBlog
        imgSrc="https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80"
        category="Productivity"
        title="Morning Routine That Completely Changed My Life"
        summary="Designing a good morning routine is the first step you must take to
        totally change your life today."
      />
      <SingleBlog
        imgSrc="https://images.unsplash.com/photo-1499443724512-9a7fb762ad6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2767&q=80"
        category="Infrastructure"
        title="Dockerizing Your First Node Application"
        summary="All you need to understand to implement your first Dockerized Application."
      />
      <SingleBlog
        imgSrc="https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80"
        category="Life"
        title="5 Lessons From My First 5 Months As A Software Engineer At Yelp"
        summary="Everything that I have learned in my first 5 months at Yelp after graduation college."
      />
      <hr style={{ border: "1px solid #EDEDED" }} />
    </div>
  );
}
