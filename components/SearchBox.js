'use client';

import { useSearchParams, useRouter } from 'next/navigation';

import { RxCross2 } from 'react-icons/rx';
import { BsFillMicFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';

export default function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get('searchTerm');
  const [term, setTerm] = useState(searchTerm ? searchTerm : '');
  function handleSubmit(e) {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  }
  return (
    <form
      className="flex border border-[#5f6368] rounded-full px-6 py-3 xs:ml-10 md:mr-5 flex-grow max-w-3xl items-center hover:shadow-[0_1px_6px_0_rgba(0,0,0,0.6)] focus-within:shadow-[0_1px_6px_0_rgba(0,0,0,0.6)] transition-shadow"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full focus:outline-none bg-transparent"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
        onClick={() => setTerm('')}
      />
      <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-[#3c4043] mr-3" />
      <AiOutlineSearch
        className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
        onClick={handleSubmit}
      />
    </form>
  );
}
