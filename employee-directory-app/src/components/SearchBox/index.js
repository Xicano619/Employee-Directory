import React from "react";
import "../styles/SearchBox.css";

function SearchBox({ handleSearchChange }) {
  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={e => handleSearchChange(e)}
        />
      </form>
    </div>
  );
}
export default SearchBox;