import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SerchForm } from 'components/SerchForm/SerchForm';
import { GetSearchMovie } from '../components/Fetch/FetchApi';
import { RenderMovieList } from 'components/RenderMovieList/RenderMovieList';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }

    (async () => {
      const data = await GetSearchMovie(query);
      const Movie = data.results;
      setMovies(Movie);
    })();
  }, [query]);

  const formSubmitHandler = query => {
    const nextQuery = query !== '' ? { query } : {};
    setSearchParams(nextQuery);
    setMovies([]);
  };

  return (
    <div>
      <SerchForm onSubmit={formSubmitHandler} />
      {movies?.length > 0 && <RenderMovieList results={movies} />}
      {movies?.length === 0 && (
        <p>
          Sorry, there is no films for your results! Try to find something else!
        </p>
      )}
    </div>
  );
};

export default Movies;
