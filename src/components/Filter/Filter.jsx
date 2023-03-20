import React from 'react';
import { FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

const Filter = () => {
  const filter = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <FilterLabel>
      Magic Finder
      <FilterInput
        type="text"
        value={filter}
        onChange={changeFilter}
        name="filter"
      />
    </FilterLabel>
  );
};

export default Filter;
