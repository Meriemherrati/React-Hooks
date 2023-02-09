import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = event => setTitle(event.target.value);
  const handleRatingChange = event => setRating(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    onFilter({ title, rating });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center' }}>
      <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
      <select value={rating} onChange={handleRatingChange}>
        <option value="">All</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button type="submit">Filter</button>
    </form>
  );
};

export default Filter;
