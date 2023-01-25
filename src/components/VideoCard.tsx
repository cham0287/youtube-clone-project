import React from 'react';
import { Link } from 'react-router-dom';
import { formatAgo } from '../util/date';

const VideoCard = ({ video }: any) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li>
      <Link to={`/videos/watch/${video.id}`} state={{ video }}>
        <img
          className='w-full'
          src={thumbnails.high.url}
          alt='thumbnail'
          id={video.id.videoId}
        />
      </Link>

      <p className='font-semibold line-clamp-2'>{title}</p>
      <p className='opacity-60 text-sm'>{channelTitle}</p>
      <p className='opacity-60 text-sm'>{formatAgo(publishedAt, 'ko')}</p>
    </li>
  );
};

export default VideoCard;
