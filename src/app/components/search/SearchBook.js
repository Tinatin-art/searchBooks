import React from 'react'

const SearchBook = () => {
  return (
    <div className='search-book'>
      <input
        className='search-input'
        type="text"
        placeholder="Search books..."
      />
      <button className='search-button'>Search</button>
    </div>
  );
};

export default SearchBook;