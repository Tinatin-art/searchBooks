import React from 'react';
import bookImage from "../../../assets/images/book1.jpg"

const BookDetailPage = () => {
  return (
    <div className="container">
      <div className='book-detail-page'>
        <div className='book-image'>
          <img src={bookImage} alt="Book Cover" />
        </div>
        <div className='book-detail'>
          <h1 className='book-title'>The Time Has Come</h1>
          <p className='book-author'>Author: James Tomas</p>
          <p className='book-category'>Category: Computers</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;


