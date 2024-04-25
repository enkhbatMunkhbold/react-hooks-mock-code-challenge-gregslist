import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  // const [filteredListings, setFilteredListings] = useState(listings)

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.search.value);
    const searchItems = e.target.search.value === "" ? listings : listings.filter(listing => listing.description.split(' ').includes(e.target.search.value))
    setListings(searchItems)
  }

  return (
    <div className="app">
      <Header 
        onHandleSubmmit={handleSubmit}
      />
      <ListingsContainer listings={listings} setListings={setListings}/>
    </div>
  );
}

export default App;
