// this is the same as doing const Component = React.Component;
// this means import React and pull out Component in a variable called component
import React, { Component } from 'react';

//define a new class called searchBar and give it access to all of the funcitonality that React.Component has

class SearchBar extends Component {
  render() {
    return <input onChange={event => console.log(event.target.value)} />;
  }
}

export default SearchBar;
