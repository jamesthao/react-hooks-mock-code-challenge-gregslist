import React, { useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, deleteListing, search }) {
  const displayListings = listings.filter(listing => {
    if (search === '') return true;
    return listing.description.toLowerCase().includes(search.toLowerCase());
  }).map(listing => (
    <ListingCard key={listing.id} id={listing.id} description={listing.description} image={listing.image} location={listing.location} deleteListing={deleteListing} />
  ))

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {displayListings}
      </ul>
    </main>
  );
}
export default ListingsContainer;

