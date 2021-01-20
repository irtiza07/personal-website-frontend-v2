import React, { useState, useEffect } from "react";
import StatItem from "./StatItem";
import "./YouTubeAnalytics.scss";

const CHANNEL_ID = "UCDankIVMXJEkhtjv5yLSN4g";
const MAX_RESULT = 25;
const YOUTUBE_API_KEY = "AIzaSyBgcbarWi2qxpDucp8RXSEG71hQcowH0Lw";

export default function YouTubeAnalytics() {
  const [viewCount, setViewCount] = useState("--");
  const [subscriberCount, setSubscriberCount] = useState("--");
  const [videoCount, setVideoCount] = useState("--");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.irtizahafiz.com/youtube_analytics"
      );
      const responseJson = await response.json();
      console.log(responseJson);
      const statistics = responseJson["statistics"];
      setViewCount(statistics["viewCount"]);
      setSubscriberCount(statistics["subscriberCount"]);
      setVideoCount(statistics["videoCount"]);
    }
    fetchData();
  }, []);
  console.log(viewCount, subscriberCount, videoCount);
  return (
    <div className="analytics-container">
      <StatItem value={subscriberCount} label="Subscribers"></StatItem>
      <StatItem value={videoCount} label="Video Count"></StatItem>
      <StatItem value={viewCount} label="Total Views"></StatItem>
    </div>
  );
}
