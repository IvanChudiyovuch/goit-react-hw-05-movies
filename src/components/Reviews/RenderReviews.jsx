import { PropTypes } from 'prop-types';

import { ParagrafText, Container, TableInfo } from './RenderReviews.styled';

export const RenderReviews = ({ reviews }) => {
  return (
    <Container>
      {reviews.map(({ content, author_details, id }) => (
        <TableInfo key={id}>
          <h4>Author: {author_details.username}</h4>
          <ParagrafText>{content}</ParagrafText>
        </TableInfo>
      ))}
    </Container>
  );
};

RenderReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      author_details: PropTypes.shape({
        username: PropTypes.string,
      }),
      id: PropTypes.string,
    })
  ).isRequired,
};
