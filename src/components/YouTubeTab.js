import React, { useEffect, useState } from "react";
import VideosGrid from "./VideosGrid.js";
import YouTubeAnalytics from "./YouTubeAnalytics";

import "./YouTubeTab.scss";

const CHANNEL_ID = "UCDankIVMXJEkhtjv5yLSN4g";
const MAX_RESULT = 25;
const YOUTUBE_API_KEY = "AIzaSyBgcbarWi2qxpDucp8RXSEG71hQcowH0Lw";

//TODO: New component for analytics
//TODO: Analytics should watch views, watch time, subscribers?
export default function YouTubeTab() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${MAX_RESULT}&order=date&key=${YOUTUBE_API_KEY}`
      );
      const responseJson = await response.json();
      responseJson["items"].pop(); //Last element is channel art
      setVideos(responseJson["items"]);
    }
    fetchData();
  }, []);

  return (
    <div className="outer-container">
      <h1 className="headline">Code With MD</h1>
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
