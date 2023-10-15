'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';

function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState('');
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    // trim remove all space from strings
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }

  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const response = await fetch('https://random-word-api.herokuapp.com/word')
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-[#5f6368] px-5 py-3 rounded-full hover:shadow-[0_1px_6px_0_rgba(0,0,0,0.6)] focus-within:shadow-[0_1px_6px_0_rgba(0,0,0,0.6)] transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none bg-transparent"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Search Google or type a URL"
        />
        <BsFillMicFill className="text-lg cursor-pointer" />
      </form>

      {/* buttons */}
      <div className="flex space-x-4 justify-center mt-8">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {randomSearchLoading ? (
            <img
              src="spinner.svg"
              alt="loading..."
              className="h-6 text-center"
            />
          ) : (
            'I am Feeling Lucky'
          )}
        </button>
      </div>
    </>
  );
}

export default HomeSearch;
