import {
  Container,
  List,
  ListItem,
  ListImage,
} from './RenderMovieDetail.styled';
import defaultImage from '../../defaultImage.jpg';

export const RenderMovieDetails = ({ respons, id }) => {
  const { poster_path, overview, title, vote_average, genres, release_date } =
    respons;
  const releaseDate = release_date
    ? release_date.slice(0, 4)
    : 'no release date';

  return (
    <>
      <Container key={id}>
        <ListImage
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : defaultImage
          }
          alt={title}
          width="320"
        />
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
