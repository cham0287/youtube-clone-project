import React from 'react';
import SearchNav from './components/SearchNav';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Outlet } from 'react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { YoutubeAPIProvider } from './context/YoutubeAPIContext';
const queryclient = new QueryClient();
function App() {
  return (
    <div className='App w-full'>
      <SearchNav />
      <YoutubeAPIProvider>
        <QueryClientProvider client={queryclient}>
          <Outlet />
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </YoutubeAPIProvider>
    </div>
  );
}

export default App;
