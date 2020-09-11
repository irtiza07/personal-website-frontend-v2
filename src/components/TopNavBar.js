import React from "react";

import "./TopNavBar.scss";

export default function TopNavBar() {
  return (
    <div className="nav-container">
      <p>hafiz.</p>
      <div className="links-container">
        <p className="nav-item">Writing</p>
        <p className="nav-item">Newsletter</p>
        <p className="nav-item">YouTube</p>
      </div>
    </div>
  );
}
