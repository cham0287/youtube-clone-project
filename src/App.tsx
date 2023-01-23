import React from 'react';
import SearchNav from './components/SearchNav';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Outlet } from 'react-router';
import { YoutubeAPIProvider } from './contenxt/YoutubeAPIContext';
const queryclient = new QueryClient();
function App() {
  return (
    <div className='App bg-[#0f0f0f] w-full h-screen text-white'>
      <SearchNav />
      <QueryClientProvider client={queryclient}>
        <YoutubeAPIProvider>
          <Outlet />
        </YoutubeAPIProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
