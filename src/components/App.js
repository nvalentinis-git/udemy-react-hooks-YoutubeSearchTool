import React, { useState, useEffect } from 'react';
import YTSearch from 'youtube-api-search'

import SearchBar from '../components/SearchBar'
import VideoList from '../components/VideoList'
import VideoDetail from '../components/VideoDetail'

const API_KEY = "AIzaSyCWEPb_oDuHEAwDrvP671J-rlx67F7CZZo";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoSearch = (term) => {
    YTSearch( {key: API_KEY, term: term} , videos => {
      setVideos(videos);
      setSelectedVideo(videos[0]);
    });
  }

  useEffect(() => {
    videoSearch('surfboards');
  },[]);

  return (
      <div>
        <SearchBar onSearchTermChange={term => videoSearch(term)}/>
        <VideoDetail video={selectedVideo} />
        <VideoList
          onVideoSelect={setSelectedVideo}
          videos={videos} />
      </div>
  );
}

export default App
