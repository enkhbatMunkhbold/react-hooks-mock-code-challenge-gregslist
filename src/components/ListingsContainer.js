import React from "react";
import ListingCard from "./ListingCard";
// import Search from "./Search";

function ListingsContainer({ listings, setListings }) {  

  function handleDeleteClick(deleteListing) {
    const updatedListings = listings.filter(listing => listing.id !== deleteListing.id)
    setListings(updatedListings)
  }

  const renderListings = listings.map(listing => {
    return <ListingCard key={listing.id} listing={listing} onDeleteClick={handleDeleteClick}/>
  })

  return (
    <main>
      <ul className="cards">
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
