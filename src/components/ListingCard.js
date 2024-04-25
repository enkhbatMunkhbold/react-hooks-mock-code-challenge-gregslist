import React, { useState } from "react";

function ListingCard({ listing, onDeleteClick }) {
  // console.log('listing:', listing)
  const [favorite, setFavorite] = useState(false)

  const { id, image, description, location } = listing

  function handleDeleteListing() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    }).then(res => res.json)
    .then(() => onDeleteClick(listing))
  }

  function handleFavoriteClick() {
    setFavorite(!favorite)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleFavoriteClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavoriteClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteListing}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
