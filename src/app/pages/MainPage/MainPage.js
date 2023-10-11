import React from 'react'
import BookCard from '../../components/card/BookCard'
const MainPage = () => {
  return (
    <>
      <div className="container">
        <div className="book-list">
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
        </div>
      </div>
    </>
  )
}

export default MainPage