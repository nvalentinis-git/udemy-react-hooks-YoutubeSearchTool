import React from 'react';

// Functional Component
const VideoListItem = ( {video, onVideoSelect} ) => {
    // {video} is equal to "const video = props.video;"

    const imgUrl = video.snippet.thumbnails.default.url;
    const videoDescription = video.snippet.description;

    return (
      <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media" >
          <div className="media-left" >
            <img className="media-object" src={imgUrl} />
          </div>

          <div className="media-body" >
            <div className="media-heading">
              {videoDescription}
            </div>
          </div>
        </div>
      </li>
    );
};

export default VideoListItem;
