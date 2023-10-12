import React from 'react'
// import bookImage from '../../../assets/images/book1.jpg'
const BookCard = ({item}) => {

  const book = item.volumeInfo;
  const bookImage = book.imageLinks?.smallThumbnail;

  return (
    <div className='card'>
      <div className='card-image'>
        <img src={bookImage} alt="book" />
      </div>
      <div className="card-content">
        <h2 className='card-title'>{book?.title}</h2>
        <p className='card-category'>{book?.category}</p>
        {
          book?.authors.map((author) => (
            <span className='card-author'>{author}</span>
          ))
        }
      </div>
    </div>

  )
}

export default BookCard