import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeAPIContext';

interface PropTypes {
  id: string;
  name: string;
}

export default function ChannelInfo({ id, name }: PropTypes) {
  const youtubeApi = useYoutubeApi();
  const { data: url } = useQuery(['channel', id], () =>
    youtubeApi.channelImgURL(id)
  );
  return <div>{url && <img src={url} alt={name} />}</div>;
}
