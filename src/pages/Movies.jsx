import { useState, useEffect } from 'react';

import { SerchForm } from 'components/SerchForm/SerchForm';
import { GetSearchMovie } from '../components/Fetch/FetchApi';
import { RenderMovieList } from 'components/RenderMovieList/RenderMovieList';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query === '') {
      return;
    }

    (async () => {
      const data = await GetSearchMovie(query);
      const Movie = data.results;
      setMovies(prevState => [...prevState, ...Movie]);
    })();
  }, [query]);

  const formSubmitHandler = query => {
    if (query) {
      setMovies([]);
      setQuery(query);
    }
  };

  return (
    <div>
      <SerchForm onSubmit={formSubmitHandler} />
      {movies?.length > 0 && <RenderMovieList results={movies} />}
    </div>
  );
};
