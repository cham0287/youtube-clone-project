import React from 'react';
import { Link } from 'react-router-dom';
import { formatAgo } from '../util/date';

const VideoCard = ({ video, type }: any) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <Link to={`/videos/watch/${video.id}`} state={{ video }}>
      <li className={type === 'list' ? 'flex gap-1 ml-8 my-1' : ''}>
        <img
          className={
            type === 'list'
              ? 'basis-2/5 mr-4 w-60 h-[110px] rounded-lg'
              : 'w-full'
          }
          src={thumbnails.high.url}
          alt='thumbnail'
        />
        <div className={type === 'list' ? 'basis-3/5' : ''}>
          <p
            className={`font-semibold line-clamp-2 ${
              type === 'list' ? 'text-[14px]' : ''
            }`}
          >
            {title}
          </p>
          <p className='opacity-60 text-sm'>{channelTitle}</p>
          <p className='opacity-60 text-sm'>{formatAgo(publishedAt, 'ko')}</p>
        </div>
      </li>
    </Link>
  );
};

export default VideoCard;
