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
    <header className='flex p-4 items-center text-white'>
      <Link to='/' className='flex'>
        <div className='text-4xl text-[#FF0000] mx-2'>
          <BsYoutube />
        </div>
        <div className='text-3xl font-bold'>Youtube</div>
      </Link>
      <form
        className='w-full flex justify-center'
        onSubmit={handleSearchSubmit}
      >
        <input
          className='rounded-r rounded-full w-7/12 p-2 text-md border-[#303030] border-[1px] bg-[#0f0f0f] outline-none text-white'
          placeholder='Search..'
          type='text'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          onClick={handleSearchSubmit}
          type='submit'
          className='bg-zinc-600 border-[#303030] text-3xl  border-[1px] rounded-l rounded-full w-[65px] flex justify-center items-center'
        >
          <AiOutlineSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchNav;
