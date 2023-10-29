import React, { Component } from "react";

interface HeaderProps {
  onSearch: (searchTerm: string) => void;
  initialSearchTerm: string;
}

interface HeaderState {
  searchTerm: string;
}

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      searchTerm: this.props.initialSearchTerm,
    };
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSearch = () => {
    this.props.onSearch(this.state.searchTerm.trim());
  };

  handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.handleSearch();
    }
  };

  render() {
    return (
      <div className="header">
        <div className="search-container">
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
            className="search-input"
            placeholder="Search"
          />
          <button onClick={this.handleSearch} className="search-button">
            <img
              className="search-img"
              src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
