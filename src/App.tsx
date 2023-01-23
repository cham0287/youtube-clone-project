import React from 'react';
import SearchNav from './components/SearchNav';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Outlet } from 'react-router';
const queryclient = new QueryClient();
function App() {
  return (
    <div className='App bg-[#0f0f0f] w-full h-screen text-white'>
      <SearchNav />
      <QueryClientProvider client={queryclient}>
        <Outlet />
      </QueryClientProvider>
    </div>
  );
}

export default App;
