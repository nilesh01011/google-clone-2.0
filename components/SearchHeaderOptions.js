'use client';

// import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
export default function SearchHeaderOptions() {
  const [isActive, setIsActive] = useState('All');
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  function selectTab(tab) {
    router.push(
      `/search/${tab === 'Images' ? 'image' : 'web'}?searchTerm=${searchTerm}`
    );
  }

  useEffect(() => {
    if (pathname === '/search/web') {
      setIsActive('All');
    }

    if (pathname === '/search/image') {
      setIsActive('Images');
    }
  }, [router]);
  return (
    <div className="flex space-x-2 select-none w-full justify-start md:pl-52 pl-[1.5rem] text-gray-700 text-sm">
      <div
        onClick={() => selectTab('All')}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === '/search/web' && '!text-[#8ab4f8] !border-[#8ab4f8]'
        }`}
      >
        {/* <AiOutlineSearch className="text-md" /> */}
        {isActive === 'All' && (
          <span>
            <svg
              className="block w-[16px] h-[16px]"
              focusable="true"
              viewBox="0 0 24 24"
            >
              <path
                fill="#34a853"
                d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"
              ></path>
              <path
                fill="#ea4335"
                d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"
              ></path>
              <path
                fill="#fbbc04"
                d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"
              ></path>
              <path
                fill="#4285f4"
                d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"
              ></path>
            </svg>
          </span>
        )}
        <p className={`${isActive !== "All" && "text-[#969ba1]"}`}>All</p>
      </div>
      <div
        onClick={() => selectTab('Images')}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === '/search/image' && '!text-[#8ab4f8] !border-[#8ab4f8]'
        }`}
      >
        {/* <AiOutlineCamera className="text-md" /> */}
        {isActive === 'Images' && (
          <span>
            <svg
              className="block w-[16px] h-[16px] text-[#969BA1]"
              focusable="false"
              viewBox="0 0 24 24"
              fill="#8ab4f8"
            >
              <path
                d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5"
              ></path>
            </svg>
          </span>
        )}
        <p className={`${isActive !== "Images" && "text-[#969ba1]"}`}>Images</p>
      </div>
    </div>
  );
}
