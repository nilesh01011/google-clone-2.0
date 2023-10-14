import Link from 'next/link';
import Parser from 'html-react-parser';
import React from 'react';
import PaginationButtons from './PaginationButtons';

export default function WebSearchResults({ results }) {

  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      {/* <p className="text-[#969ba1] text-sm mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p> */}
      {/* search result */}
      <span className='my-4 block'></span>
      {results?.map((result) => (
        <div className="mb-8 max-w-xl" key={result.cacheId}>
          <div className="group flex flex-col">
            <Link className="text-sm truncate text-[#bdc1c6]" href={result.link}>
              {result.formattedUrl}
            </Link>
            <Link
              className="group-hover:underline decoration-[#8ab4f8] text-xl truncate font-medium text-[#8ab4f8]"
              href={result.link}
            >
              {result.title}
            </Link>
          </div>
          {/* Search Result text bold */}
          <p className="text-[#bdc1c6]">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}
