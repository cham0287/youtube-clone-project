import React from 'react';
import { useLocation } from 'react-router-dom';
import RelatedVideos from '../components/RelatedVideos';
import ChannelInfo from '../components/ChannelInfo';

const VideoDetail = () => {
  const video = useLocation().state.video;
  const { title, description, channelId, channelTitle } = video.snippet;
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
        <ChannelInfo id={channelId} name={channelTitle} />
        <div className='text-xl font-semibold'>{title}</div>
        <div>{channelTitle}</div>
        <div className='line-clamp-3'>{description}</div>
      </article>
      <section className='w-[30%] flex flex-col'>
        <RelatedVideos id={video.id} />
      </section>
    </div>
  );
};

export default VideoDetail;
