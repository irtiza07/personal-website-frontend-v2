import React from "react";
import "./StatItem.scss";

export default function StatItem({ value, label }) {
  return (
    <div className="stat-container">
      <h1 className="stat">{value}</h1>
      <h1 className="label">{label}</h1>
    </div>
  );
}
