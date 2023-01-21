import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import uploadedTime from '../util';

const Detail = () => {
  const { id } = useParams();
  const { error, data } = useQuery(
    ['videos'],
    async () => {
      console.log('fetching...');
      return fetch('http://localhost:3000/db/db.json').then((response) =>
        response.json()
      );
    }
    // { staleTime: 5000 }
  );
  const videos = data?.items;
  // console.log(videos);
  const target = videos?.filter((video: any) => video.id.videoId === id)[0];
  console.log(target);
  return (
    <div className='flex px-[2%] text-white'>
      <div className='w-[70%]'>
        <div className='w-full h-[540px] bg-blue-500 '>동영상위치</div>
        <div className='text-xl'>{target.snippet.title}</div>
        <div>{target.snippet.channelTitle}</div>
        <div>{target.snippet.description}</div>
      </div>
      <div className='w-[30%] flex flex-col'>
        {videos?.map((video: any) => (
          <div key={video.id.videoId} className='w-full h-[120px] p-1 flex'>
            <div className='w-[45%] h-full'>
              <Link to={`/videos/${video.id.videoId}`}>
                <img
                  className='w-full h-full'
                  src={video.snippet.thumbnails.high.url}
                  alt='thumbnail'
                  id={video.id.videoId}
                />
              </Link>
            </div>
            <div className='w-[55%] h-full px-2'>
              <div className='text-white text-sm'>{video.snippet.title}</div>
              <div className='text-gray-400 text-xs'>
                {video.snippet.channelTitle}
              </div>
              <div className='text-gray-400 text-xs'>
                {uploadedTime(video.snippet.publishTime)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
