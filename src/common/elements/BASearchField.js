import React, { useState } from "react";
import "../styles/searchField.css";
import data from "../data.json";

export default function JWSearchField({ onChange }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (evt) => {
    setSearchText(evt.target.value);
    onChange(evt.target.value);
  };

  return (
    <input
      aria-label="search-field"
      type="text"
      placeholder={data.searchPlaceholder}
      value={searchText}
      className="search-field"
      onChange={handleSearchTextChange}
    />
  );
}
