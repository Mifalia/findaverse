import React, { useEffect, useState } from 'react';
import s from './SearchBar.module.css';

// components import
import { FiSearch } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';

function SearchBar({
  onChange = function () {},
  onSubmit = function () {},
  defaultValue = '',
}) {
  // local states
  const [inputValue, setInputValue] = useState(defaultValue);

  // functions for handling the input
  const handleKeyUp = function (e) {
    const { key } = e;
    if (key === 'Enter' && inputValue !== '') {
      onSubmit(inputValue);
    }
  };
  //
  const handleChange = function (e) {
    const { value } = e.target;
    setInputValue(value);
  };

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue, onChange]);

  // rendering
  return (
    <div className={s.searchbar_container}>
      <FiSearch size={24} className={s.search_icon} />
      <input
        value={inputValue}
        type='text'
        placeholder='Write a part of the lyrics you want to find ...'
        className={s.input}
        onKeyUp={handleKeyUp}
        onChange={handleChange}
      />
      {inputValue !== '' && (
        <RxCross1
          size={24}
          className={s.cross_icon}
          onClick={() => setInputValue('')}
        />
      )}
    </div>
  );
}

export default SearchBar;
