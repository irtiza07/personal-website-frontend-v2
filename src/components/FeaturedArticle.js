import React from "react";
import "./FeaturedArtcle.scss";

export default function FeaturedArticle() {
  return (
    <div className="featured-container">
      <p className="featured-title">
        Morning Routine That Completely Changed My Life
      </p>
      <img
        className="featured-image"
        src="https://images.unsplash.com/photo-1582778562829-d017b9105852?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4178&q=80"
      />
      <div className="featured-details">
        <p className="featured-cat">Productivity</p>
        <p className="featured-time">7 min read</p>
      </div>
    </div>
  );
}
