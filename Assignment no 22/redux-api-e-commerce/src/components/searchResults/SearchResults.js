import React from 'react';
import './searchResults.css'

function SearchResults({ results }) {
  return (
    <div className="search-results" style={{ position: 'absolute', zIndex: 1000 }}>
      <h5>Search Results:</h5>
      <ul>
        {results.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
