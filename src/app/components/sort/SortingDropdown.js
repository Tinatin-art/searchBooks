import React, { useState } from 'react';

const SortingDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('relevance');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='sorting-dropdown'>
      <select
        className='sorting-select'
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value='relevance'>Relevance</option>
        <option value='newest'>Newest</option>
      </select>
    </div>
  );
};

export default SortingDropdown;