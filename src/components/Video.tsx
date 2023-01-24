import React from 'react';
import { Link } from 'react-router-dom';
import { formatAgo } from '../util/date';

const Video = ({ video }: any) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li className='w-1/5 h-1/3 px-2'>
      <div className='w-full h-2/3 rounded-lg'>
        <Link to={`/videos/${video.id.videoId}`}>
          <img
            className='w-full h-full'
            src={thumbnails.high.url}
            alt='thumbnail'
            id={video.id.videoId}
          />
        </Link>
      </div>
      <p>{title}</p>
      <p className='text-gray-400'>{channelTitle}</p>
      <p className='text-gray-400'>{formatAgo(publishedAt, 'ko')}</p>
    </li>
  );
};

export default Video;
