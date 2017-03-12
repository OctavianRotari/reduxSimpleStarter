import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="col-md-8 form-group">
        <input
          className="form-control input-lg text-center"
          value={ this.state.term }
          onChange={event => this.setState({ term: event.target.value })}
        />
        <br />
      </div>
    );
  }
}

export default SearchBar;
