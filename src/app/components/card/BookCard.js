import React from 'react'
import bookImage from '../../../assets/images/book1.jpg'
const BookCard = () => {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={bookImage} alt="book" />
      </div>
      <div className="card-content">
        <h2 className='card-title'>The Time Has Come</h2>
        <p className='card-category'>Computers</p>
        <span className='card-author'>James Tomas</span>
      </div>
    </div>

  )
}

export default BookCard