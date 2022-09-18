import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from '../Fetch/FetchApi';
import { CastList } from './CastList';

const Cast = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState([]);
  useEffect(() => {
    (async () => {
      const respons = await getMovieCredits(id);
      const cast = respons.cast;
      setCredits(cast);
    })();
  }, [id]);

  return (
    <div>
      {credits.length > 0 ? (
        <CastList credits={credits} />
      ) : (
        'We have no cast for this movie'
      )}
    </div>
  );
};

export default Cast;
