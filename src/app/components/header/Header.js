import React from 'react'
import SearchBook from "../search/SearchBook";
import BookCategory from '../category/BookCategory';
import SortingDropdown from "../sort/SortingDropdown";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <SearchBook />
        <div className="book-filter">
          <BookCategory />
          <SortingDropdown />
        </div>
      </div>
    </header>
  )
}

export default Header