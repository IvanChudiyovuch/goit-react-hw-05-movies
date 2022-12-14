import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieRewiews } from '../Fetch/FetchApi';
import { RenderReviews } from './RenderReviews';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setRewiews] = useState([]);
  useEffect(() => {
    (async () => {
      const respons = await getMovieRewiews(id);
      const reviews = respons.results;
      setRewiews(reviews);
    })();
  }, [id]);
  return (
    <div>
      {reviews.length > 0 ? (
        <RenderReviews reviews={reviews} />
      ) : (
        'We have no reviews for this movie'
      )}
    </div>
  );
};

export default Reviews;
