import React, { useContext } from 'react';
import { createContext } from 'react';
import { Youtube } from '../api';
const youtube = new Youtube();

export const YoutubeAPIContext = createContext<any>(null);

export function YoutubeAPIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <YoutubeAPIContext.Provider value={youtube}>
      {children}
    </YoutubeAPIContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeAPIContext);
}
