import React, { useState } from 'react'

const BookCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', 'art', 'computers', 'history'];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className='category-dropdown'>
      <select
        className='category-select'
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BookCategory

