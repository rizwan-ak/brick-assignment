import React from "react";
import "../styles/icon.css";

import arrowUpIcon from "../assets/arrow-up.png";
import arrowDownIcon from "../assets/arrow-down.png";

export default function BAIcon({ isUp, handleArrowClick }) {
  return (
    <img
      onClick={handleArrowClick}
      src={isUp ? arrowUpIcon : arrowDownIcon}
      alt={`arrow-${isUp ? "up" : "down"}-icon`}
      className="icon"
    />
  );
}
