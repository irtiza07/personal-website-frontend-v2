import React from "react";
import "./SingleBlog.scss";

export default function SingleBlog({ imgSrc, category, title, summary }) {
  return (
    <div className="blog-container">
      <div className="left-container">
        <img className="blog-image" src={imgSrc} />
        <p className="blog-cats">{category}</p>
      </div>
      <div className="right-container">
        <p className="blog-title">{title}</p>
        <p className="blog-summary">{summary}</p>
      </div>
    </div>
  );
}
