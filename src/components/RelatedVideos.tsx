import React from 'react';

interface Props {
  id: string;
}

const RelatedVideos = ({ id }: Props) => {
  return <div>{id}</div>;
};

export default RelatedVideos;
