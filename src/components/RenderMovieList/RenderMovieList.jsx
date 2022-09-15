import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, ListItem, ListImage } from './RenderMovieList.styled';

export const RenderMovieList = ({ results }) => {
  const imageUrl = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();
  return (
    <>
      <List>
        {results.map(({ id, poster_path }) => (
          <ListItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <ListImage src={imageUrl + poster_path} alt="" />
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

RenderMovieList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};
