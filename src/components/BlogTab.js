import React, { useState, useEffect } from "react";
import { ALL, PROGRAMMING, BLOG } from "../utils/categories.js";
import "./BlogTab.scss";
import FeaturedArticle from "./FeaturedArticle.js";
import SingleBlog from "./SingleBlog.js";
import MailingList from "./MailingList";
import ContactForm from "./ContactForm";

export default function BlogTab() {
  const [posts, setPosts] = useState([]);
  const [displayPosts, setDisplayPosts] = useState([]);
  const [allClassName, setAllClassName] = useState(
    "cat-button cat-button-active"
  );
  const [programmingClassName, setProgrammingClassName] =
    useState("cat-button");
  const [blogClassName, setBlogClassName] = useState("cat-button");

  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.irtizahafiz.com/posts");
      const responseJson = await response.json();
      setPosts(responseJson);
      setDisplayPosts(responseJson);
    }
    fetchData();
  }, []);

  const setSelectedFilter = (chosenFilter) => {
    if (chosenFilter === ALL) {
      setDisplayPosts(posts);
    } else {
      const filteredPosts = posts.filter((post) => {
        return post["topic"] === chosenFilter.toLowerCase();
      });
      setDisplayPosts(filteredPosts);
    }

    chosenFilter === ALL
      ? setAllClassName("cat-button cat-button-active")
      : setAllClassName("cat-button");
    chosenFilter === BLOG
      ? setBlogClassName("cat-button cat-button-active")
      : setBlogClassName("cat-button");
    chosenFilter === PROGRAMMING
      ? setProgrammingClassName("cat-button cat-button-active")
      : setProgrammingClassName("cat-button");
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
            <p className="article-count-text">{posts.length} articles</p>
          </div>
        </div>
        <button
          className="intro-button"
          onClick={(e) => setShowContactForm(true)}
        >
          Say Hi
        </button>
      </div>
      {showContactForm && (
        <ContactForm
          setFormVisibility={(visibility) => setShowContactForm(visibility)}
        />
      )}
      <p className="heading">All Articles</p>
      <hr style={{ border: "1px solid #EDEDED", width: "55vw" }} />
      <div className="filters-container">
        <button
          id={ALL}
          className={allClassName}
          onClick={(e) => setSelectedFilter(e.target.id)}
        >
          {ALL}
        </button>
        <button
          id={PROGRAMMING}
          className={programmingClassName}
          onClick={(e) => setSelectedFilter(e.target.id)}
        >
          {PROGRAMMING}
        </button>
        <button
          id={BLOG}
          className={blogClassName}
          onClick={(e) => setSelectedFilter(e.target.id)}
        >
          {BLOG}
        </button>
      </div>
      {displayPosts.length > 0 && (
        <FeaturedArticle
          title={displayPosts[0]["title"]}
          imgSrc={displayPosts[0]["image"]}
          category={displayPosts[0]["topic"]}
          time={displayPosts[0]["readTime"]}
          contentLink={displayPosts[0]["contentLink"]}
        />
      )}
      {displayPosts.map((post, index) => {
        if (index > 0) {
          return (
            <SingleBlog
              key={index}
              imgSrc={post["image"]}
              category={post["topic"]}
              title={post["title"]}
              summary={post["summary"]}
              link={post["contentLink"]}
            ></SingleBlog>
          );
        }
      })}
      <hr style={{ border: "1px solid #E9E9E9" }} />
      <MailingList />
    </div>
  );
}
