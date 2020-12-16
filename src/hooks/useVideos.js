import { useState, useEffect } from 'react';

import youtube from "../apis/youtube";

export default (defaultSearchTerm = '') => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    videosSearch(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const videosSearch = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, videosSearch];
}
