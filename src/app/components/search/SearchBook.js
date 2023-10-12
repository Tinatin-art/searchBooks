import React, { useEffect, useState } from 'react'
import { fetchBooks } from '../../reducer/SearchSlice';
import { useDispatch, useSelector } from 'react-redux';

const SearchBook = () => {

  const dispatch = useDispatch()
  const books = useSelector((state) => {
    return state.searchBooks.bookData

  })
  const [query, setQuery] = useState('');
  // const [books, setBooks] = useState([]);


  console.log(query)
  console.log(books)

  const handleSearch = () => {
      dispatch(fetchBooks(query))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(fetchBooks(query));
    }
  };

  return (
    <div className='search-book'>
      <input
        className='search-input'
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSearch} className='search-button'>Search</button>
    </div>
  );
};

export default SearchBook;