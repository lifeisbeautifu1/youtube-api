import React from 'react';
import { useAppContext } from '../context';

const VideoItem = ({ video }) => {
  const { setCurrentVideo } = useAppContext();
  return (
    <div className="video-list-item" onClick={() => setCurrentVideo(video)}>
      <img alt={'thumbnail'} src={video.snippet.thumbnails.medium.url} />
      <h3
        dangerouslySetInnerHTML={{
          __html: `${video.snippet.title}`,
        }}
      ></h3>
    </div>
  );
};

export default VideoItem;
