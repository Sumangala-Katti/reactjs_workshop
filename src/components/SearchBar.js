import React from 'react';

const SearchBar = ({ setSearchQuery }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        onChange={e => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
