import React from 'react';
import { useLocation } from 'react-router-dom';
import RelatedVideos from '../components/RelatedVideos';
import ChannelInfo from '../components/ChannelInfo';

const VideoDetail = () => {
  const video = useLocation().state.video;
  const { title, description, channelId, channelTitle } = video.snippet;
  return (
    <div className='flex flex-col lg:flex-row  px-[2%] text-white'>
      <article className='basis-2/3'>
        <section>
          <iframe
            className='w-full h-[640px]'
            title='video'
            id='player'
            src={`http://www.youtube.com/embed/${video.id}`}
          ></iframe>
        </section>
        <div className='p-1'>
          <h2 className='text-xl font-bold'>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <div className='line-clamp-3'>{description}</div>
        </div>
      </article>
      <section className='flex flex-col basis-1/3'>
        <RelatedVideos id={video.id} />
      </section>
    </div>
  );
};

export default VideoDetail;
