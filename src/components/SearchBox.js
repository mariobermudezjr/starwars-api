import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="App-input"
        type="search"
        placeholder="Search Star Wars"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
