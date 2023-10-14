import Link from 'next/link';
import React from 'react';
import PaginationButtons from './PaginationButtons';

function ImageSearchResults({ results }) {
  return (
    <div className="sm:pb-24 pb-40  mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results?.map((result) => {
          // console.log(result.image.thumbnailLink)
          return (
            <div key={result.link} className="mb-8">
              <div className="group">
                <Link href={result.displayLink}>
                  {result.image.thumbnailLink && (
                    <img
                      width={200}
                      height={60}
                      loading="lazy"
                      decoding="async"
                      quality={50}
                      importance="high"
                      rel="none"
                      src={result.image.thumbnailLink}
                      alt={result.title}
                      className="h-60 group-hover:shadow-[0_2px_12px_0_#171717] rounded-md w-full object-contain transition-shadow"
                    />
                  )}
                </Link>
                <Link href={result.displayLink}>
                  {/* group-hover:underline */}
                  <h2 className="truncate text-lg ">{result.title}</h2>
                </Link>
                <Link href={result.displayLink}>
                  <p className="group-hover:underline text-[#aaadb2]">
                    {result.displayLink}
                  </p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="ml-16"><PaginationButtons /></div>
    </div>
  );
}

export default ImageSearchResults;
