import HomeHeader from '@/components/HomeHeader';
import HomeSearch from '@/components/HomeSearch';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      {/* Header */}
      <HomeHeader />
      {/* body */}
      <div className="flex flex-col items-center mt-24 justify-center">
        <Image
          width="300"
          height="100"
          alt='Google Image'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
        />

        <HomeSearch />
      </div>
    </>
  );
}
