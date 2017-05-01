import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './components/search_bar';
import ContactList from './components/contact_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: null
    };

    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:9000/api/v1/'
    });

    this.onSearchClicked = this.onSearchClicked.bind(this);
  }

  render() {
    console.log('here', this.state);
    return (
      <div>
        <SearchBar onSearchClicked={this.onSearchClicked} />
        <ContactList searchResults={this.state.searchResults} />
      </div>
    );
  }

  onSearchClicked(searchValue) {
    this.axiosInstance.get(`/persons/${searchValue}`)
      .then(response => {
        this.setState({searchResults: response.data});
      })
      .catch(error => {

      });
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
