import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import Video from '../components/Video';
import { FakeYoutube, Youtube } from '../api';

const Videos = () => {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => {
    const fakeSearch = new FakeYoutube();
    return fakeSearch.search(keyword || '');
  });
  return (
    <div className='w-full'>
      <div>Search Keyword: {keyword ? keyword : 'hot trend'}</div>
      <div className='w-full  bg-black text-white flex flex-wrap items-start justify-start'>
        {isLoading && <div>Loading ...</div>}
        {error && <div>Error occurred ...</div>}
        {videos && (
          <ul className='flex flex-wrap w-full'>
            {videos.map((video: any) => (
              <Video video={video} key={video.id.videoId} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Videos;
