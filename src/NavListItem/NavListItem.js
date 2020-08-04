import React from "react";
import "./NavListItem.css";

const NavListItem = ({ currentPage, label, pageToLoad, setCurrentPage }) => {
  const handlePageLoad = () => {
    setCurrentPage(pageToLoad);
  };
  return <li onClick={handlePageLoad}>{label}</li>;
};

export default NavListItem;
