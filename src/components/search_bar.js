// even if we dont refer to react in here we still need to include it
import React from 'react';

const SearchBar = () => {
  //we need to do this because when jsx is transpile in JS it will turn into a call like React.createElement
  return <input />;
};

export default SearchBar;
