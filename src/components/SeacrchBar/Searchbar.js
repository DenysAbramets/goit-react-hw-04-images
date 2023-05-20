import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormSeacrh,
  Header,
  ButtonSearch,
  Span,
  InputSearch,
} from './SearchBar.styled';
import { BiSearch } from 'react-icons/bi';

export default function SearchBar(props) {
  const [value, setValue] = useState('');
  const submitSeacrh = event => {
    event.preventDefault();
    if (value.trim() === '') {
      return;
    }
    props.onSubmit(() => value.trim());
    setValue('');
  };
  const handleChange = event => {
    setValue(event.target.value.toLowerCase());
  };

  return (
    <Header>
      <FormSeacrh onSubmit={submitSeacrh}>
        <ButtonSearch type="submit">
          {value && <BiSearch size="25px" />}
          <Span>Search</Span>
        </ButtonSearch>

        <InputSearch
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
      </FormSeacrh>
    </Header>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
