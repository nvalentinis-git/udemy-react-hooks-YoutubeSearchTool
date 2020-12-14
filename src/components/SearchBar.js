import React, { useState } from 'react';

// Functional Component
const SearchBar = ({ onSearchTermChange }) => {
  const [term, seTerm] = useState('');

  const onInputChange = (event) => {
    seTerm(event.target.value);
    onSearchTermChange(term);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        value={term}
        onChange={onInputChange} />
    </div>
  );
};

export default SearchBar;
