import React, { useState } from "react";

function ListingCard({listing}) {

  const [favorited, setFavorited] = useState(false)
  const [deleted, setDeleted] = useState(false)

  function handleDelete(e) {
    setDeleted(true)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
      {favorited ? ( 
          <button onClick={() => setFavorited(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={(e) => {handleDelete(e)}} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
