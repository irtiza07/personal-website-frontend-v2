import React from "react";
import "./FeaturedArtcle.scss";

export default function FeaturedArticle({
  title,
  imgSrc,
  category,
  time,
  contentLink,
}) {
  const selectPost = () => window.open(contentLink, "_blank");
  return (
    <div className="featured-container" onClick={selectPost}>
      <div className="image-container">
        <img className="featured-image" src={imgSrc} />
        <p className="featured-title">{title}</p>
      </div>
      <div className="featured-details">
        <p className="featured-cat">{category}</p>
        <p className="featured-time">{`${time} min read`}</p>
      </div>
    </div>
  );
}
