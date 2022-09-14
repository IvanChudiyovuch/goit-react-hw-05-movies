import { useState, useEffect } from 'react';
import { GetTrendingMovie } from 'components/Fetch/FetchApi';
import { RenderMovieList } from 'components/RenderMovieList/RenderMovieList';

export const Home = () => {
  const [results, setResalts] = useState([]);

  useEffect(() => {
    (async () => {
      const { movieData } = await GetTrendingMovie();
      setResalts(movieData);
    })();
  }, []);

  return (
    <div>
      <RenderMovieList results={results} />
    </div>
  );
};
