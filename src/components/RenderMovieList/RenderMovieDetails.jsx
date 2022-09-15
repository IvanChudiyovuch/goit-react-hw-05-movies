// import PropTypes from 'prop-types';

import {
  Container,
  List,
  ListItem,
  ListImage,
} from './RenderMovieDetail.styled';

export const RenderMovieDetails = ({ respons, id }) => {
  const imageUrl = 'https://image.tmdb.org/t/p/w500';
  const { poster_path, overview, title, vote_average, genres, release_date } =
    respons;
  const releaseDate = release_date
    ? release_date.slice(0, 4)
    : 'no release date';

  return (
    <>
      <Container key={id}>
        <ListImage src={imageUrl + poster_path} alt={title} width="320" />
        <List>
          <ListItem>
            <h3>
              {title} ({releaseDate})
            </h3>
            <p>Vote average: {vote_average}</p>
            <h4>Overview</h4>
            <p>{overview}</p>
            <h4>Genres</h4>
            {genres.map(({ id, name }) => (
              <div key={id}>
                <div>{name}</div>
              </div>
            ))}
          </ListItem>
        </List>
      </Container>
    </>
  );
};

// RenderMovieDetails.propTypes = {
//   respons: PropTypes.objectOf({
//     id: PropTypes.number,
//     poster_path: PropTypes.string,
//     overview: PropTypes.string,
//     title: PropTypes.string,
//     vote_average: PropTypes.number,
//     genres: PropTypes.array,
//   }),
// };

// RenderMovieDetails.propTypes = {
//   respons: PropTypes.objectOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       poster_path: PropTypes.string,
//       overview: PropTypes.string,
//       title: PropTypes.string,
//       vote_average: PropTypes.number,
//       genres: PropTypes.array,
//       adult: PropTypes.bool,
//     })
//   ).isRequired,
//   id: PropTypes.string.isRequired,
// };
