import React, { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

const SearchNav = () => {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/videos/${searchInput}`);
  };
  useEffect(() => {
    setSearchInput(keyword || '');
  }, [keyword]);

  return (
    <div className='flex h-[10vh] items-center text-white'>
      <Link to='/' className='flex'>
        <div className='text-3xl text-red-600 mx-2'>
          <BsYoutube />
        </div>
        <div className='text-2xl font-semibold'>Youtube</div>
      </Link>
      <form className='w-2/5 ml-[20%] h-1/2 flex' onSubmit={handleSearchSubmit}>
        <input
          className='rounded-r rounded-full w-full h-full pl-2 border-[#303030] border-[1px] bg-[#0f0f0f] outline-none text-white'
          placeholder='Search..'
          type='text'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          onClick={handleSearchSubmit}
          type='submit'
          className='bg-[#222222]  border-[#303030] border-[1px] rounded-l rounded-full  h-full w-[65px] text-2xl flex justify-center items-center'
        >
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchNav;
