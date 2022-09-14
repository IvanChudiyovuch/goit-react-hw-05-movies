import { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import {
  Wraper,
  FormSerch,
  SearchFormInput,
  SearchFormButton,
  ButtonLabel,
} from './SerchForm.styled';

export const SerchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const hendalInputChange = event => {
    setInputValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      return Notiflix.Notify.warning(
        `Error Image with name ${inputValue} not found!`
      );
    }

    onSubmit(inputValue);

    reset();
  };

  const reset = () => {
    setInputValue('');
  };

  return (
    <div>
      <Wraper>
        <FormSerch onSubmit={handleSubmit}>
          <SearchFormButton
            type="submit"
            img={`https://img.icons8.com/windows/72/search-more.png`}
          >
            <ButtonLabel>Search</ButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            value={inputValue}
            onChange={hendalInputChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          />
        </FormSerch>
      </Wraper>
    </div>
  );
};
SerchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
