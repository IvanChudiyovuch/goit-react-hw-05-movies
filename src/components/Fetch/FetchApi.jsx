import { PropTypes } from 'prop-types';
import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/';
const APIKey = '9922346ea7680187f6bd01b1263e365d';

export const GetTrendingMovie = async () => {
  try {
    const {
      data: { results },
    } = await axios.get(`${baseURL}/trending/all/day?api_key=${APIKey}`);

    const movieData = results.map(({ id, poster_path }) => ({
      id,
      poster_path,
    }));

    return { movieData };
  } catch (err) {
    console.log(err);
  }
};

export const GetDetails = async id => {
  try {
    const respons = await axios.get(
      `${baseURL}movie/${id}?api_key=${APIKey}&language=en-US`
    );

    return respons.data;
  } catch (err) {
    console.log(err);
  }
};

export const GetSearchMovie = async query => {
  try {
    const {
      data: { results },
    } = await axios.get(
      `${baseURL}search/movie?api_key=${APIKey}&language=en-US&query=${query}&page=1&include_adult=false`
    );

    return { results };
  } catch (err) {
    console.log(err);
  }
};

export const getMovieCredits = async id => {
  try {
    const response = await axios.get(
      `${baseURL}movie/${id}/credits?api_key=${APIKey}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieRewiews = async id => {
  try {
    const response = await axios.get(
      `${baseURL}movie/${id}/reviews?api_key=${APIKey}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

GetDetails.propTypes = {
  id: PropTypes.number.isRequired,
};

GetSearchMovie.propTypes = {
  id: PropTypes.string.isRequired,
};
