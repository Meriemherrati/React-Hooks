import React from 'react';

const MovieCard = ({ title, description, posterURL, rating }) => (
  <div style={{ border: '1px solid black', margin: '20px', padding: '20px' }}>
    <h3>{title}</h3>
    <p>{description}</p>
    <img src={posterURL} alt={title} />
    <p>Rating: {rating}</p>
  </div>
);

export default MovieCard;
