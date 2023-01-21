import React from 'react';
import SearchNav from './components/SearchNav';
import Router from './router/Router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
const queryclient = new QueryClient();
function App() {
  return (
    <div className='App bg-black'>
      <QueryClientProvider client={queryclient}>
        <SearchNav />
        <Router />
      </QueryClientProvider>
    </div>
  );
}

export default App;
