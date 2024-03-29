import React from 'react'
import { GiBlackBook } from "react-icons/gi";
import Link from 'next/link';
import { Word } from '@/app/dictionary/page';
import Searchbar from '@/components/Searchbar';
type Props = {
  params: {
    search: string
  }
}

const getWordData = async (word: string) => {
  try {
    const res = await fetch(`https://sheng-api.onrender.com/api/word-details?word=${word}`)
    return res.json()

  } catch (er) {
    throw new Error('Failed to fetch data')
  }
}

const Page = async ({ params }: Props) => {
  try {
    const data: Word = await getWordData(params.search)

    return (
      <main className="flex flex-col space-y-8 min-h-screen items-center py-20 px-6 max-w-4xl mx-auto">

        <div className='flex w-full justify-between items-center'>
          <GiBlackBook className="text-[34px] md:text-[50px] text-gray-800" />
          <Link href="/join">
            <button className='bg-gray-700 text-sm md:text-base hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full'>Join</button>
          </Link>

        </div>
        <Searchbar/>
        <div className='flex w-full items-center p-4 border-b-2 border-gray-400'>
          <h1 className='font-bold text-2xl md:text-4xl text-gray-800 font-serif'>{data.word}</h1>
        </div>

        <div className='flex flex-col space-y-4 w-full p-4 border-b-2 border-gray-400'>
          <h2 className='font-semibold text-lg md:text-xl text-gray-500 tracking-widest'>
            Meaning:
          </h2>
          <ul className='ps-4 space-y-1 list-disc list-inside text-sm md:text-base tracking-wide'>
            {
              data.meaning.split(",").map((val, index) =>
                <li key={index}>
                  {val}
                </li>)
            }
          </ul>

        </div>

        <div className='flex flex-col space-y-4 w-full p-4 border-b-2 border-gray-400'>
          <h2 className='font-semibold text-lg md:text-xl text-gray-500 tracking-widest'>
            Examples:
          </h2>
          <ul className='ps-4 space-y-1 list-disc list-inside text-sm md:text-base tracking-wide'>
            {
              data.examples?.split(",").map((val, index) =>
                <li key={index}>
                  {val}
                </li>)
            }
          </ul>
        </div>

        <div className='flex flex-col space-y-4 w-full p-4 border-b-2 border-gray-400'>
          <h2 className='font-semibold text-lg md:text-xl text-gray-500 tracking-widest'>
            Synonyms:
          </h2>
          <ul className='ps-4 space-y-1 list-disc list-inside text-sm md:text-base tracking-wide'>
            {
              data.synonym?.split(",").map((val, index) =>
                <li key={index}>
                  {val}
                </li>)
            }
          </ul>
        </div>

      </main>
    )
  } catch (er) {
    return (
      <main className="flex flex-col space-y-8 min-h-screen items-center py-20 px-6 max-w-4xl mx-auto">

        <div className='flex w-full justify-between items-center'>
          <GiBlackBook className="text-[34px] md:text-[50px] text-gray-800" />
          <Link href="/join">
            <button className='bg-gray-700 text-sm md:text-base hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full'>Join</button>
          </Link>

        </div>
        <Searchbar />
        <div className='flex w-full items-center p-4 border-b-2 border-gray-400'>
          <h1 className='font-bold text-2xl md:text-4xl text-red-500 font-serif'>Word NOT FOUND!</h1>
        </div>
      </main>
    )
  }
}

export default Page