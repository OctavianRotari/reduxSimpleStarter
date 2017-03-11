// this is the same as doing const Component = React.Component;
// this means import React and pull out Component in a variable called component
import React, { Component } from 'react';

//define a new class called searchBar and give it access to all of the funcitonality that React.Component has

class SearchBar extends Component {
  // this is how we define state in a class based component (functional components dont have state)
  constructor(props) {
    // when we define a method that is already defined on the parent class which is component we can call that parent
    // methd on the parent class by calling super
    super(props);

    // whenever we initialize state we create a new object and we assign it to this.state the object we pass will
    // contain properties that we want to record on state in this case term so whenever the user update the input term
    // will record that change. Update this.state.term to not be an empty string but to be the value of the imput.
    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
        <br />
      </div>
    );
  }
}

export default SearchBar;
