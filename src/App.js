import React from 'react';
import { VideoDetails, VideoList, SearchBar } from './Components';

const App = () => {
  return (
    <div className="container">
      <SearchBar />
      <div className="grid">
        <VideoDetails />
        <VideoList />
      </div>
    </div>
  );
};

export default App;
