import React, { Component } from "react";

interface SearchProps {
  onSearchResults: (searchResults: SearchResult[]) => void;
  searchTerm: string;
}

interface SearchResult {
  name: string;
  description: string;
}

class Search extends Component<SearchProps> {
  componentDidMount() {
    if (this.props.searchTerm) {
      this.fetchSearchResults(this.props.searchTerm);
    }
  }

  componentDidUpdate(prevProps: SearchProps) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.fetchSearchResults(this.props.searchTerm);
    }
  }

  fetchSearchResults = (searchTerm: string) => {
    fetch(`https://swapi.dev/api/people/?search=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const results: SearchResult[] = data.results.map((result: any) => ({
          name: result.name,
          description: `Height: ${result.height} sm, Mass: ${result.mass} kg`,
        }));
        this.props.onSearchResults(results);
      })
      .catch((error) => {
        console.error("Error fetching data from SWAPI:", error);
      });
  };

  render() {
    return null;
  }
}

export default Search;
