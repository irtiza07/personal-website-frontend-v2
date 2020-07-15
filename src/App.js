import React from "react";
import TopNavBar from "./components/TopNavBar";
import Banner from "./components/Banner";
import Browser from "./components/Browser";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <Banner />
      <Browser />
    </div>
  );
}

export default App;
