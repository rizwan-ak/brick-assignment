import React from "react";
import "../styles/buttons.css";

export default function JWButton({ handleButtonClick, value }) {
  return (
    <div className="button-box">
      <button
        data-testid="load-more-button"
        className="load-more-button"
        onClick={handleButtonClick}
      >
        {value}
      </button>
    </div>
  );
}
