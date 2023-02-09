import React, { useState, useEffect } from 'react';
import Filter from './Components/Filter';
import MovieList from './Components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'The Joker', description: 'A failed stand-up comedian is driven insane and becomes a psychopathic murderer.', posterURL: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg', rating: 5 },
    { title: 'Black Panther: Wakanda Forever', description: 'The kingdom of Wakanda must unite to defeat a powerful enemy and bring back the fallen king.', posterURL: 'https://m.media-amazon.com/images/M/MV5BMTg1NzA2Mjg2Nl5BMl5BanBnXkFtZTgwNDk3MzEyMzI@._V1_UX182_CR0,0,182,268_AL_.jpg', rating: 4 },
    { title: 'The Pursuit of Happyness', description: 'A struggling salesman takes custody of his son as he’s poised to begin a life-changing professional endeavor.', posterURL: 'https://m.media-amazon.com/images/M/MV5BMTQ5NzQ0NDI3OV5BMl5BanBnXkFtZTcwMTEzNjAzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg', rating: 4 },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const handleFilter = ({ title, rating }) => {
    setFilteredMovies(movies.filter(movie => (
      (title === '' || movie.title.toLowerCase().includes(title.toLowerCase())) &&
      (rating === '' || movie.rating === parseInt(rating))
    )));
  };

  const handleAddMovie = movie => {
    setMovies([...movies, movie]);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>My Favorite Movies and TV Shows</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
      <button onClick={() => handleAddMovie({ title: 'New Movie', description: 'A new movie', posterURL: 'https://via.placeholder.com/300x450', rating: 3 })}>Add Movie</button>
    </div>
  );
};

export default App;
