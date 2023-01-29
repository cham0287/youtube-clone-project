import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useLocation, useParams } from 'react-router-dom';
import { format } from 'timeago.js';
import RelatedVideos from '../components/RelatedVideos';
import ChannelInfo from '../components/ChannelInfo';

const VideoDetail = () => {
  const video = useLocation().state.video;
  console.log(video);
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
  console.log(videos);

  return (
    <div className='flex px-[2%] text-white'>
      <article className='w-[70%]'>
        <section>
          <iframe
            className='w-full h-[640px]'
            title='video'
            id='player'
            src={`http://www.youtube.com/embed/${video.id}`}
          ></iframe>
        </section>
        <ChannelInfo id={video.id} name={video.channelTitle} />
        <div className='text-xl font-semibold'>{video.snippet.title}</div>
        <div>{video.snippet.channelTitle}</div>
        <div className='line-clamp-3'>{video.snippet.description}</div>
      </article>
      <section className='w-[30%] flex flex-col'>
        <RelatedVideos id={video.id} />
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
                {format(video.snippet.publishTime)}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default VideoDetail;
