import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import uploadedTime from '../util';

const Home = () => {
  const { error, data } = useQuery(['videos'], async () => {
    console.log('fetching...');
    return fetch('db/db.json').then((response) => response.json());
  });
  const videos = data?.items;

  return (
    <div className='w-full  bg-black text-white flex flex-wrap items-start justify-start'>
      {videos?.map((video: any) => (
        <div key={video.id.videoId} className='w-1/5 h-1/3 px-2'>
          <div className='w-full h-2/3 rounded-lg'>
            <Link to={`/videos/${video.id.videoId}`}>
              <img
                className='w-full h-full'
                src={video.snippet.thumbnails.high.url}
                alt='thumbnail'
                id={video.id.videoId}
              />
            </Link>
          </div>
          <div>{video.snippet.title}</div>
          <div className='text-gray-400'>{video.snippet.channelTitle}</div>
          <div className='text-gray-400'>
            {uploadedTime(video.snippet.publishTime)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
