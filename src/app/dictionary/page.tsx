import React from 'react'
import { GiBlackBook } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
type Props = {}

const page = (props: Props) => {
  return (
    <main className="flex flex-col space-y-8 min-h-screen items-center py-20 px-6 max-w-4xl mx-auto">

      <div className='flex w-full items-center'>
        <GiBlackBook className="text-[34px] md:text-[50px] text-gray-800" />
      </div>

      <form className='w-full'>
        <div className="relative">
          <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm md:text-base font-semibold text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search word" required />
          <span className='absolute right-0 top-5 pe-4 text-base md:text-[20px] cursor-pointer'>
            <CiSearch className="font-bold" />
          </span>
        </div>
      </form>


    </main>
  )
}

export default page