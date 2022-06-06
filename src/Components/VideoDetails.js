import React from 'react';
import { useAppContext } from '../context';
import ClockLoader from 'react-spinners/ClockLoader';

const VideoDetails = () => {
  const { currentVideo } = useAppContext();

  if (!currentVideo)
    return (
      <div className="loader">
        <h1>Waiting for search term...</h1>
        <ClockLoader color={'#36D7B7'} loading={true} />
      </div>
    );
  else {
    const videoSrc = `https://www.youtube.com/embed/${currentVideo.id.videoId}`;
    return (
      <div className="video-details">
        <div className="video-wrapper">
          <iframe
            src={videoSrc}
            height="100%"
            width="100%"
            frameBorder="0"
            title="Video Player"
          ></iframe>
        </div>
        <div className="video-info">
          <h1
            dangerouslySetInnerHTML={{
              __html: `${currentVideo.snippet.title}`,
            }}
          ></h1>
          <h2
            dangerouslySetInnerHTML={{
              __html: `Channel: ${currentVideo.snippet.channelTitle}`,
            }}
          ></h2>
          <p
            dangerouslySetInnerHTML={{
              __html: ` Description: ${currentVideo.snippet.description}`,
            }}
          ></p>
        </div>
      </div>
    );
  }
};

export default VideoDetails;
