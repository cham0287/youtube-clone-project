import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchNav = () => {
  const [searchInput, setSearchInput] = useState('');
  // const { data, error, isLoading, refetch } = useQuery(['videos'], async () => {
  //   return fetch(
  //     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchInput}&key=AIzaSyBVaQQVBy1uL6xYonvezZLIrCZTfkVcdbY`
  //   ).then((response) => response.json());
  // });
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // if (searchInput.trim() !== '') {
    //   refetch();
    // }
  };

  return (
    <div className='flex h-[10vh] items-center text-white'>
      <img className='h-full' src='/youtube-black.png' alt='youtube logo' />
      <div className='text-2xl font-semibold'>Youtube</div>
      <form className='w-2/5 ml-[20%] h-1/2 flex' onSubmit={handleSearchSubmit}>
        <input
          className='w-full h-full pl-2 text-black'
          placeholder='Search..'
          type='text'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          onClick={handleSearchSubmit}
          type='submit'
          className='bg-gray-600 h-full w-[45px] text-2xl flex justify-center items-center'
        >
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchNav;
