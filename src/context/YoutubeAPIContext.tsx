import React, { createContext, useContext } from 'react';
import { FakeYoutube, Youtube } from '../api';

interface PropTypes {
  children: any;
}

const youtube = new Youtube();
const fakeYoutube = new FakeYoutube();
const YoutubeAPIContext = createContext<any>(null);

export const YoutubeAPIProvider = ({ children }: PropTypes) => {
  return (
    <YoutubeAPIContext.Provider value={fakeYoutube}>
      {children}
    </YoutubeAPIContext.Provider>
  );
};

export function useYoutubeApi() {
  return useContext(YoutubeAPIContext);
}
