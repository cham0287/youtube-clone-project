import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import VideoCard from '../components/VideoCard';
import { FakeYoutube, Youtube } from '../api';
import { useYoutubeApi } from '../contenxt/YoutubeAPIContext';

const Videos = () => {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
    // } = useQuery(['videos', keyword], () => youtube.search(keyword || ''));
  } = useQuery(['videos', keyword], () => {
    const fakeSearch = new Youtube();
    return fakeSearch.search(keyword || '');
  });
  return (
    <div>
      <div>Search Keyword: {keyword ? keyword : 'hot trend'}</div>
      <div>
        {isLoading && <div>Loading ...</div>}
        {error && <div>Error occurred ...</div>}
        {videos && (
          <ul className='grid gap-2  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {videos.map((video: any) => (
              <VideoCard video={video} key={video.id.videoId} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Videos;
