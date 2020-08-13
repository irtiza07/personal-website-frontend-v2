import React from "react";

import "./TopNavBar.scss";

export default function TopNavBar() {
  return (
    <div className="nav-container">
      <p>hafiz.</p>
      <div className="links-container">
        <p className="nav-item">Blog</p>
        <p className="nav-item">Projects</p>
        <p className="nav-item">Thoughts</p>
      </div>
    </div>
  );
}
