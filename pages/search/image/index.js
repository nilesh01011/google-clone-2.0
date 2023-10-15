import ImageSearchResults from '@/components/ImageSearchResults';
import SearchHeader from '@/components/SearchHeader';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Loading from "./loading"

function ImagePage() {
  const [searchAfterwards, setSearchAfterwards] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { searchTerm } = router.query;

  // pagination page starts with
  // const startIndex = searchTerm.start || '1';
  // const searchParams = useSearchParams();

  // const startIndex = searchParams.get('start');

  // search results data fetch with Google search APIs
  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setSearchAfterwards(false);
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading(false);
        // &start=${startIndex}
        const response = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${searchTerm}&searchType=image`
        );

        if (!response.ok) {
          console.log('Error response', response);
          if (response.status === 429) {
            setSearchAfterwards(true);
          }
          throw new Error('Something went wrong');
        }

        const data = await response.json();
        const results = data.items;

        console.log('Image Results:', results);

        setSearchText(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [router, searchTerm]);
  return (
    <>
      <SearchHeader />

      {searchAfterwards ? (
        <div className="flex flex-col justify-center items-center pt-10">
          <h1 className="text-3xl mb-4">Error 429</h1>
          <p className="text-lg px-[1rem] text-center">
            To many searched perform at a time showing, try again afterwards.
          </p>
        </div>
      ) : (
        <>
         {
          loading ? <Loading /> : (
            <>
            {searchText.length === 0 ? (
              <div className="flex flex-col justify-center items-center pt-10">
                <h1 className="text-3xl mb-4">No results found</h1>
                <p className="text-lg">
                  Try searching for something else or go back{' '}
                  <Link href="/" className="text-[#8ab4f8]">
                    Go back
                  </Link>
                </p>
              </div>
            ) : (
              <> {searchTerm && <ImageSearchResults results={searchText} />} </>
            )}
            </>
          )
         }
        </>
      )}
    </>
  );
}

export default ImagePage;
