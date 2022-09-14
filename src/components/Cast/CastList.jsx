import { PropTypes } from 'prop-types';

import {
  Container,
  List,
  ListItem,
  ListImage,
  ActorContent,
} from './CastList.styled';

export const CastList = ({ credits }) => {
  return (
    <Container>
      <List>
        {credits.map(
          ({ character, profile_path, original_name, credit_id }) => (
            <ListItem key={credit_id}>
              <ListImage
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : `https://via.placeholder.com/260x390?text=No+Photo`
                }
                alt={original_name}
              />
              <ActorContent>
                <h4>{original_name}</h4>
                <p>
                  Character: <span>{character}</span>
                </p>
              </ActorContent>
            </ListItem>
          )
        )}
      </List>
    </Container>
  );
};

CastList.propTypes = {
  credits: PropTypes.arrayOf(
    PropTypes.shape({
      credit_id: PropTypes.string,
      poster_path: PropTypes.string,
      original_name: PropTypes.string,
      character: PropTypes.string,
    })
  ).isRequired,
};
