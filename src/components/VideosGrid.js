import React from "react";
import VideoItem from "./VideoItem.js";
import "./VideosGrid.scss";

export default function VideosGrid({ videos }) {
  return (
    <div className="grid-container">
      {videos.map((value, index) => (
        <VideoItem key={index} video={value}></VideoItem>
      ))}
    </div>
  );
}
