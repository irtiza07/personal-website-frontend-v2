import React, { useEffect, useState } from "react";
import VideosGrid from "./VideosGrid.js";
import YouTubeAnalytics from "./YouTubeAnalytics";

import "./YouTubeTab.scss";

export default function YouTubeTab() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.irtizahafiz.com/youtube_videos"
      );
      const responseJson = await response.json();
      setVideos(responseJson["items"]);
    }
    fetchData();
  }, []);

  return (
    <div className="outer-container">
      <h1 className="headline">Code with Irtiza</h1>
      <YouTubeAnalytics />
      <p className="description">
        I create YouTube videos related to programming, system design and
        software engineering in general for fun. Feel free to check them out by
        clicking on the thumbnails below.
      </p>
      {videos.length !== 0 && <VideosGrid videos={videos}></VideosGrid>}
    </div>
  );
}
