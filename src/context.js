import React from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const baseURL = 'https://www.googleapis.com/youtube/v3/search';

const AppContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [videos, setVideos] = React.useState([]);
  const [currentVideo, setCurrentVideo] = React.useState(null);

  const fetchVideos = async () => {
    try {
      const res = await axios.get(baseURL, {
        params: {
          q: searchTerm,
          part: 'snippet',
          maxResults: 5,
          key: process.env.REACT_APP_API_KEY,
        },
      });
      setVideos(res.data.items);
      setCurrentVideo(res.data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        videos,
        setVideos,
        currentVideo,
        setCurrentVideo,
        fetchVideos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => React.useContext(AppContext);
