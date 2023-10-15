import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TbGridDots } from 'react-icons/tb';
import { RiSettings3Line } from 'react-icons/ri';
import SearchBox from './SearchBox';
import SearchHeaderOptions from './SearchHeaderOptions';

function SearchHeader() {
  return (
    <header className="sticky top-0 bg-[#303134] md:rounded-[0_0_45px_45px] rounded-0">
      {/* shadow-[0_1px_6px_0_rgba(0,0,0,0.6)] */}
      <div className="flex w-full p-6 items-center justify-between xs:flex-row flex-col">
        <Link href={'/'}>
          <Image
            width="120"
            height="40"
            alt='Google Logo Icons'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
          />
        </Link>
        <div className="flex-1 w-full xs:mt-0 mt-4">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2 ">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="hidden md:block bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2">
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}

export default SearchHeader;
