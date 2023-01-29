import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeAPIContext';
import VideoCard from './VideoCard';

interface Props {
  id: string;
}

const RelatedVideos = ({ id }: Props) => {
  const youtubeApi = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', id], () => youtubeApi.relatedVideos(id), {
    staleTime: 1000 * 60 * 60,
  });
  return (
    <div>
      {isLoading && <div>Loading ...</div>}
      {error && <div>Error occurred ...</div>}
      {videos?.map((video: any) => (
        <VideoCard video={video} key={video.id.videoId} type='list' />
      ))}
    </div>
  );
};

export default RelatedVideos;
