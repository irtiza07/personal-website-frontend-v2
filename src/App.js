import React from "react";
import TopNavBar from "./components/TopNavBar";
import Banner from "./components/Banner";
import Browser from "./components/Browser";

import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <Banner />
      <Browser />
      <Footer />
    </div>
  );
}

export default App;
