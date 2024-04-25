import React, { useState } from "react";

function Search({ onHandleSubmmit }) {

  const [searchListing, setSearchListing] = useState('')

  return (
    <form className="searchbar" onSubmit={onHandleSubmmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        name="search"
        value={searchListing}
        onChange={(e) => setSearchListing(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
