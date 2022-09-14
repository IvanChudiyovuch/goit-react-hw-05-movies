import PropTypes from 'prop-types';

import {
  Container,
  List,
  ListItem,
  ListImage,
} from './RenderMovieDetail.styled';

export const RenderMovieDetails = ({ respons, id }) => {
  const imageUrl = 'https://image.tmdb.org/t/p/w500';
  const { poster_path, overview, title, vote_average, release_date } = respons;
  const releaseDate = release_date
    ? release_date.slice(0, 4)
    : 'no release date';
  console.log(respons);
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
            {/* <ul key={genres.id}>
              <li>{genres.name}</li>
            </ul> */}
            {/* {genres.map(({ id, name }) => (
              <ul key={id}>
                <li>{name}</li>
              </ul>
            ))} */}
          </ListItem>
        </List>
      </Container>
    </>
  );
};

RenderMovieDetails.propTypes = {
  respons: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      genres: PropTypes.array.isRequired,
    })
  ),
  id: PropTypes.string.isRequired,
};
