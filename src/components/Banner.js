import React from "react";
import "./Banner.scss";

export default function Banner() {
  return (
    <div className="banner-container">
      <p className="subtitle">Programmer, Blogger, YouTuber</p>
      <p className="title">
        Hey there! I'm <span style={{ color: "#FF4343" }}>Irtiza</span>, a
        software engineer @ Yelp.
      </p>
    </div>
  );
}
