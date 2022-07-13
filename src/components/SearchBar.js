import React from "react";

function SearchBar({ handleChange, handleSubmit, searchInput, search }) {
  return (
    <form>
      <input
        placeholder="Search"
        onChange={handleChange}
        value={searchInput}
      ></input>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default SearchBar;
