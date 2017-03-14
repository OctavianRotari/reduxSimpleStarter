import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="form-group search-bar">
          <input
            className="form-control input-md text-center"
            value={ this.state.term }
            onChange={event => this.onInputChange(event.target.value)}
          />
        </div>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
