import React from "react";

export default function Searchbar({ search, onSetSearch }) {
  return (
    <input
      type="text"
      placeholder="Search here"
      onChange={(e) => onSetSearch(e.target.value)}
      value={search}
    />
  );
}
