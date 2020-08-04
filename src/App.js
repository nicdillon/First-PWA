import React, { useState } from "react";
import "./App.css";
import MainHeader from "./Header/Header";
import Weather from "./Weather/Weather";
import HomePage from "./Home/Home";
import AboutPage from "./About/About";
import MainFooter from "./Footer/Footer";

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  return (
    <div className="main-container">
      <MainHeader currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "Home" && <HomePage />}
      {currentPage === "Weather" && <Weather />}
      {currentPage === "About" && <AboutPage />}
      <MainFooter />
    </div>
  );
};

export default App;
