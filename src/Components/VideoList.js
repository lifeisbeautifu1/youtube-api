import React from 'react';
import { useAppContext } from '../context';
import VideoItem from '../Components/VideoItem';

const VideoList = () => {
  const { videos } = useAppContext();
  return (
    <div className="video-list">
      {videos.map((video, index) => {
        return <VideoItem key={index} video={video} />;
      })}
    </div>
  );
};

export default VideoList;
