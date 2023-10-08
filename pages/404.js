'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  const router = useRouter();
  useEffect(() => {
    console.log('Error: ', error);
  }, [error]);
  return (
    <div className="flex flex-col justify-center items-center pt-10 gap-3">
      <Image
        src="/google.svg"
        width={40}
        height={40}
        className="w-[40px] h-[40px] object-contain"
        alt='Google Logo Image'
      />
      <h1 className="text-3xl mb-3">!Oops Page not found</h1>
      <button className="text-blue-500 btn hover:underline" onClick={() => router.back()}>
        Go back
      </button>
    </div>
  );
}
