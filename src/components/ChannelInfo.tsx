import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { FakeYoutube, Youtube } from '../api';

interface PropTypes {
  id: string;
  name: string;
}

export default function ChannelInfo({ id, name }: PropTypes) {
  const youtubeApi = new Youtube();
  const { data: url } = useQuery(['channel', id], () =>
    youtubeApi.channelImgURL(id)
  );
  return (
    <div>
      hello
      {url && <img src={url} alt={name} />}
      <p>{name}</p>
    </div>
  );
}
