import { Profile } from '@components/Profile';
import { ArrowLeft } from 'phosphor-react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from '@assets/logo.svg';

export function Header() {
  const router = useRouter();

  return (
    <div className='w-[100%] flex p-2 items-center justify-between cursor-pointer mb-8'>
      <div className='flex flex-1 justify-start items-center'>
        {router.pathname !== '/' && (
          <button
            onClick={() => router.back()}
            className='p-2 rounded bg-[#2a2634] hover:bg-[#2a263494] text-zinc-200 hover:text-violet-500'
          >
            <ArrowLeft size={24} />
          </button>
        )}
      </div>

      <div className='flex flex-1 justify-center items-center'>
        <Image src={logo} alt='NLW eSports' />
      </div>
      <div className='flex flex-1 justify-end items-center'>
        <Profile />
      </div>
    </div>
  );
}