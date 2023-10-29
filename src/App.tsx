// App.tsx
import React, { Component } from 'react';

import './App.css'


import Header from './components/header';
import Footer from './components/footer';
import Search from './components/search';



interface AppState {
  searchResults: SearchResult[];
  searchTerm: string;
}

interface SearchResult {
  name: string;
  description: string;
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchResults: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    const savedSearchTerm = localStorage.getItem('searchTerm') || '';
    this.setState({ searchTerm: savedSearchTerm });
  }

  handleSearch = (searchTerm: string) => {
    localStorage.setItem('searchTerm', searchTerm);
    this.setState({ searchTerm });
  };

  handleSearchResults = (searchResults: SearchResult[]) => {
    this.setState({ searchResults });
  };

  render() {
    return (
      <div className="app">
        <Header
          onSearch={this.handleSearch}
          initialSearchTerm={this.state.searchTerm}
        />
        <Search
          onSearchResults={this.handleSearchResults}
          searchTerm={this.state.searchTerm}
        />
        <Footer searchResults={this.state.searchResults} />
      </div>
    );
  }
}

export default App;
