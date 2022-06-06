import React from 'react';
import { useAppContext } from '../context';

const SearchBar = () => {
  const { searchTerm, setSearchTerm, fetchVideos } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchVideos();
  };
  return (
    <div className="search-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=" "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="label">Search...</div>
      </form>
    </div>
  );
};

export default SearchBar;
