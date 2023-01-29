import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeAPIContext';

const Videos = () => {
  const { keyword } = useParams();
  const youtubeApi = useYoutubeApi();
  console.log(youtubeApi);
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => youtubeApi.search(keyword || ''));
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
