import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Search from './components/search';

interface SearchResult {
  name: string;
  description: string;
}

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const savedSearchTerm = localStorage.getItem('searchTerm') || '';
    setSearchTerm(savedSearchTerm);
  }, []);

  const handleSearch = (searchTerm: string) => {
    localStorage.setItem('searchTerm', searchTerm);
    setSearchTerm(searchTerm);
  };

  const handleSearchResults = (searchResults: SearchResult[]) => {
    setSearchResults(searchResults);
  };

  return (
    <div className="app">
      <Header onSearch={handleSearch} initialSearchTerm={searchTerm} />
      <Search onSearchResults={handleSearchResults} searchTerm={searchTerm} />
      <Footer searchResults={searchResults} />
    </div>
  );
};

export default App;
