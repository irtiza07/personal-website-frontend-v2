import React from "react";
import "./VideoItem.scss";

export default function VideoItem({ video }) {
  const videoOnClick = () => {
    window.open(`https://youtu.be/${video["id"]["videoId"]}`, "_blank");
  };
  return (
    <React.Fragment>
      <img
        className="thumbnail"
        src={video["snippet"]["thumbnails"]["medium"]["url"]}
        onClick={videoOnClick}
      />
    </React.Fragment>
  );
}
