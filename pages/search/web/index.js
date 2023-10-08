'use client';

import SearchHeader from '@/components/SearchHeader';
import WebSearchResults from '@/components/WebSearchResults';
import Link from 'next/link';
// import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Web() {
  // const searchParams = useSearchParams();

  
  const router = useRouter();
  
  const { searchTerm } = router.query;
  
  // const startIndex = searchTerm.start || '1';

  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=AIzaSyDuNsZ2YF9khMqjbX7_fbVr6jHSDMURhiw&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${searchText}`
        );

        // `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`

        if (!response.ok) {
          console.log('Error response', response);
          throw new Error('Something went wrong');
        }

        const data = await response.json();
        const results = data.items;

        setSearchText(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [router]);

  return (
    <>
      {/* headers */}
      <SearchHeader />
      {/* contents */}
      {!searchText ? (
        <div className="flex flex-col justify-center items-center pt-10">
          <h1 className="text-3xl mb-4">No results found</h1>
          <p className="text-lg">
            Try searching for something else or go back{' '}
            <Link href="/" className="text-blue-500">
              Go back
            </Link>
          </p>
        </div>
      ) : (
        <WebSearchResults results={searchText} />
      )}
    </>
  );
}

export default Web;
