import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RenderMovieDetails } from 'components/RenderMovieList/RenderMovieDetails';
import { GetDetails } from '../components/Fetch/FetchApi';
import GoBack from '../components/GoBack/GoBack';

export const MovieDetails = () => {
  const { id } = useParams();
  const [respons, setRespons] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    (async () => {
      const respons = await GetDetails(id);
      setRespons(respons);
    })();
  }, [id]);

  return (
    <>
      {respons && (
        <div>
          {<GoBack to={backLinkHref}>Go back</GoBack>}
          {<RenderMovieDetails id={id} respons={respons} />}
          {
            <>
              <h2>Additional information</h2>
              <ul>
                <li>
                  <Link to="cast" state={{ from: location.state.from }}>
                    Cast
                  </Link>
                </li>
                <li>
                  <Link to="reviews" state={{ from: location.state.from }}>
                    Reviews
                  </Link>
                </li>
              </ul>
            </>
          }
          <Outlet />
        </div>
      )}
    </>
  );
};
