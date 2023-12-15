import React from 'react'
import { GiBlackBook } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
type Props = {}

const page = async (props: Props) => {
  return (
    <main className="flex flex-col space-y-8 min-h-screen items-center py-20 px-6 max-w-4xl mx-auto">

      <div className='flex w-full justify-between items-center'>
        <GiBlackBook className="text-[34px] md:text-[50px] text-gray-800" />
        <Link href="/join">
          <button className='bg-gray-700 text-sm md:text-base hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full'>Join</button>
        </Link>

      </div>

      <form className='w-full'>
        <div className="relative">
          <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm md:text-base font-semibold text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search word" required />
          <span className='absolute right-0 top-5 pe-4 text-base md:text-[20px] cursor-pointer'>
            <CiSearch className="font-bold" />
          </span>
        </div>
      </form>

      <div className='flex w-full items-center p-4 border-b-2 border-gray-400'>
        <h1 className='font-bold text-2xl md:text-4xl text-gray-800 font-serif'>Bonga</h1>
      </div>

      <div className='flex flex-col space-y-4 w-full p-4 border-b-2 border-gray-400'>
        <h2 className='font-semibold text-lg md:text-xl text-gray-500 tracking-widest'>
          Meaning:
        </h2>
        <ul className='ps-4 space-y-1 list-disc list-inside text-sm md:text-base tracking-wide'>
          <li>Directly translated to mean &apos;speak&apos;.</li>
        </ul>

      </div>

      <div className='flex flex-col space-y-4 w-full p-4 border-b-2 border-gray-400'>
        <h2 className='font-semibold text-lg md:text-xl text-gray-500 tracking-widest'>
          Examples:
        </h2>
        <ul className='ps-4 space-y-1 list-disc list-inside text-sm md:text-base tracking-wide'>
          <li>Nimebonga na yeye jana usiku.</li>
          <li>Yule jamaa hupenda kubonga sana.</li>
        </ul>
      </div>

      <div className='flex flex-col space-y-4 w-full p-4 border-b-2 border-gray-400'>
        <h2 className='font-semibold text-lg md:text-xl text-gray-500 tracking-widest'>
          Synonyms:
        </h2>
        <ul className='ps-4 space-y-1 list-disc list-inside text-sm md:text-base tracking-wide'>
          <li>Banja.</li>
          <li>Talk.</li>
          <li>Sema.</li>
        </ul>
      </div>

    </main>
  )
}

export default page