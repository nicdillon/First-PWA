import React from "react";
import "./Header.css";
import NavListItem from "../NavListItem/NavListItem";

const MainHeader = ({ currentPage, setCurrentPage }) => {
  return (
    <div>
      <ul className="nav-style">
        <img src={"../../../public/logo192.png"} alt="React Logo"></img>
        <NavListItem
          currentPage={currentPage}
          label={"Home"}
          pageToLoad={"Home"}
          setCurrentPage={setCurrentPage}
        />
        <NavListItem
          currentPage={currentPage}
          label={"Weather"}
          pageToLoad={"Weather"}
          setCurrentPage={setCurrentPage}
        />
        <NavListItem
          currentPage={currentPage}
          label={"About"}
          pageToLoad={"About"}
          setCurrentPage={setCurrentPage}
        />
      </ul>
    </div>
  );
};

export default MainHeader;
