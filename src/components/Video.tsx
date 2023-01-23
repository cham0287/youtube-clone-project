import React from 'react';
import { Link } from 'react-router-dom';
import uploadedTime from '../util';

const Video = ({ video }: any) => {
  return (
    <li className='w-1/5 h-1/3 px-2'>
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
    </li>
  );
};

export default Video;
