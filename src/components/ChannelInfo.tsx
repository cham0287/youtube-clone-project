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
  console.log(url);
  return (
    <div>
      {url && (
        <img
          src={`https://yt3.ggpht.com/Yxvus5PSvCa2WXrchCax11Dg_1HWOqlsyTQKpNvibipOO4e9FIGsKbnT4Pj7DzUXO4sqjjxcQaM=s88-c-k-c0x00ffffff-no-rj`}
          alt={name}
        />
      )}
    </div>
  );
}
