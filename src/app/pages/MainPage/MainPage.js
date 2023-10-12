import React from 'react'
import BookCard from '../../components/card/BookCard'
import { useSelector } from 'react-redux'
const MainPage = () => {

  const book = useSelector((state) => {
    return state.searchBooks.bookData

  })

  return (
    <>
      <div className="container">
        <div className="book-list">
          {book.length > 0 ? 
            book.map((item, key) => (
              <BookCard key={key} item={item}/>
            ))
            :(
              <h1>Gooogle books</h1>
            )}
        </div>
      </div>
    </>
  )
}

export default MainPage