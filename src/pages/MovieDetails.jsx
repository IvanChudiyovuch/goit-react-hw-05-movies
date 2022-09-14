import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RenderMovieDetails } from 'components/RenderMovieList/RenderMovieDetails';
import { GetDetails } from '../components/Fetch/FetchApi';

export const MovieDetails = () => {
  const { id } = useParams();
  const [respons, setRespons] = useState([]);
  console.log(respons);
  useEffect(() => {
    (async () => {
      const respons = await GetDetails(id);
      setRespons(respons);
    })();
  }, [id]);

  return (
    <div>
      {<RenderMovieDetails id={id} respons={respons} />}
      {
        <>
          <h2>Additional information</h2>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </>
      }
      <Outlet />
    </div>
  );
};
