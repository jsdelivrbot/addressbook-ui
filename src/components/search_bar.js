import React, { Component } from 'react';
import classNames from 'classnames';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.searchClicked = this.searchClicked.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
  }

  render() {
    const searchButtonClass = classNames({
      'btn': true,
      'btn-default': true,
      'disabled': this.state.searchValue.length < 3
    });

    return (
      <div className="row search-bar">
        <div className="col-md-8">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              onKeyPress={this.onKeyPressed}
              onChange={this.onInputChange}
              value={this.state.searchValue} />
            <span className="input-group-btn">
              <button
                onClick={this.searchClicked}
                className={searchButtonClass}
                type="button">Search</button>
            </span>
          </div>
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary" type="button">Create</button>
        </div>
      </div>
    );
  }

  onKeyPressed(event) {
    if (event.key === 'Enter' && this.state.searchValue.length >= 3) {
      this.searchClicked();
    }
  }

  onInputChange(event) {
    this.setState({searchValue: event.target.value});
  }

  searchClicked() {
    this.props.onSearchClicked(this.state.searchValue);
    this.setState({searchValue: ''});
  }
}

export default SearchBar;
