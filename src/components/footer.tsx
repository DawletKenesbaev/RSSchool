import React from 'react';

interface FooterProps {
  searchResults: SearchResult[];
}

interface SearchResult {
  name: string;
  description: string;
}

const Footer: React.FC<FooterProps> = ({ searchResults }) => {
  return (
    <div className="footer">
      <h2>Search Results</h2>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>
            <strong>Name:</strong> {result.name}  <br />
            <strong>Description:</strong> {result.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
