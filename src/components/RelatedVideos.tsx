import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeAPIContext';
import { format } from 'timeago.js';
import VideoCard from './VideoCard';

interface Props {
  id: string;
}

const RelatedVideos = ({ id }: Props) => {
  const youtubeApi = useYoutubeApi();
  const { error, data } = useQuery(['videos', id], () =>
    youtubeApi.relatedVideos(id)
  );
  const videos = data?.data?.items;
  return (
    <div>
      {videos?.map((video: any) => (
        <VideoCard video={video} key={video.id.videoId} />
        // <div key={video.id.videoId} className='w-full h-[120px] p-1 flex'>
        //   <div className='w-[45%] h-full'>
        //     <Link to={`/videos/${video.id.videoId}`}>
        //       <img
        //         className='w-full h-full'
        //         src={video.snippet.thumbnails.high.url}
        //         alt='thumbnail'
        //         id={video.id.videoId}
        //       />
        //     </Link>
        //   </div>
        //   <div className='w-[55%] h-full px-2'>
        //     <div className='text-white text-sm'>{video.snippet.title}</div>
        //     <div className='text-gray-400 text-xs'>
        //       {video.snippet.channelTitle}
        //     </div>
        //     <div className='text-gray-400 text-xs'>
        //       {format(video.snippet.publishTime)}
        //     </div>
        //   </div>
        // </div>
      ))}
    </div>
  );
};

export default RelatedVideos;
