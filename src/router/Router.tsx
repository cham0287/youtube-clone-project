import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from '../components/Detail';
import Home from '../components/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
