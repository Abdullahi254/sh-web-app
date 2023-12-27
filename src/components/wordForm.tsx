"use client";
import React, { useState } from 'react'
import { IoIosAdd, IoIosRemove } from "react-icons/io";

type Props = {}

const WordForm = (props: Props) => {
    const [meaningCount, setMeaningCount] = useState<number[]>([0])
    const [examplesCount, setExamplesCount] = useState<number[]>([0])
    const [synonymsCount, setSynonymsCount] = useState<number[]>([0])
    return (
        <form className="w-[50%] mx-auto">
            <div className="relative z-0 w-full mb-5 group">
                <input name="word" id="word" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " required />
                <label htmlFor="word" className="peer-focus:font-medium absolute text-sm text-gray-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Word:</label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
                <span className='text-gray-800 text-sm'>Meaning:</span>
                {
                    meaningCount.map(val =>
                        <input key={val+1}
                            placeholder={`val: ${val + 1}`}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                            required />
                    )
                }

                <div className='flex justify-end space-x-4 w-full pt-4'>
                    <IoIosAdd onClick={() => setMeaningCount(prev => [...prev, prev.length])} className="cursor-pointer text-green-600" />
                    <IoIosRemove onClick={() => setMeaningCount(prev => prev.slice(0, -1))} className="cursor-pointer text-red-600" />
                </div>
            </div>

            <div className="relative z-0 w-full mb-5 group">
                <span className='text-gray-800 text-sm'>Examples:</span>
                {
                    examplesCount.map(val =>
                        <input key={val+1}
                            placeholder={`val: ${val + 1}`}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                            required />
                    )
                }

                <div className='flex justify-end space-x-4 w-full pt-4'>
                    <IoIosAdd onClick={() => setExamplesCount(prev => [...prev, prev.length])} className="cursor-pointer text-green-600" />
                    <IoIosRemove onClick={() => setExamplesCount(prev => prev.slice(0, -1))} className="cursor-pointer text-red-600" />
                </div>
            </div>

            <div className="relative z-0 w-full mb-5 group">
                <span className='text-gray-800 text-sm'>Synonyms:</span>
                {
                    synonymsCount.map(val =>
                        <input key={val+1}
                            placeholder={`val: ${val + 1}`}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                            required />
                    )
                }

                <div className='flex justify-end space-x-4 w-full pt-4'>
                    <IoIosAdd onClick={() => setSynonymsCount(prev => [...prev, prev.length])} className="cursor-pointer text-green-600" />
                    <IoIosRemove onClick={() => setSynonymsCount(prev => prev.slice(0, -1))} className="cursor-pointer text-red-600" />
                </div>
            </div>

            <button type="submit" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>

    )
}

export default WordForm