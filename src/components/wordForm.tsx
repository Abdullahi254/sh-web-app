"use client";
import React, { useState } from 'react'
import { useFormState } from 'react-dom'
import { IoIosAdd, IoIosRemove } from "react-icons/io";

type Props = {
    addWord: (token: string, prevState: any, formData: FormData) => Promise<{ message: number }>
    token: string
}

const initialState = {
    message: 0
}


const WordForm = ({ addWord, token }: Props) => {
    const [meaningCount, setMeaningCount] = useState<number[]>([0])
    const [examplesCount, setExamplesCount] = useState<number[]>([0])
    const [synonymsCount, setSynonymsCount] = useState<number[]>([0])

    const addWordwithToken = addWord.bind(null, token)

    const [state, formAction] = useFormState(addWordwithToken, initialState)
    return (
        <form className="w-[50%] mx-auto" action={formAction}>
            {
                state.message === 0 ? '' :
                    state.message === 200 ?
                        <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
                            <span className="font-medium">Success alert!</span> Successfully added word.
                        </div> :
                        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                            <span className="font-medium">Error alert!</span> Failed to add word.
                        </div>

            }
            <div className="relative z-0 w-full mb-5 group">
                <label htmlFor="word" className='text-gray-800 text-sm'>Word:</label>
                <input name="word" id="word" className="text-gray-700 font-semibold block py-2.5 px-1 w-full text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " required />
            </div>

            <div className="relative z-0 w-full mb-5 group">
                <label htmlFor="meaning" className='text-gray-800 text-sm'>Meaning:</label>
                {
                    meaningCount.map(val =>
                        <input key={val + 1}
                            name="meaning"
                            id="meaning"
                            placeholder={`val: ${val + 1}`}
                            className="text-gray-700 font-semibold block py-2.5 px-1 w-full text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                            required />
                    )
                }

                <div className='flex justify-end space-x-4 w-full pt-4'>
                    <IoIosAdd onClick={() => setMeaningCount(prev => [...prev, prev.length])} className="cursor-pointer text-green-600" />
                    <IoIosRemove onClick={() => setMeaningCount(prev => prev.slice(0, -1))} className="cursor-pointer text-red-600" />
                </div>
            </div>

            <div className="relative z-0 w-full mb-5 group">
                <label htmlFor="example" className='text-gray-800 text-sm'>Examples:</label>
                {
                    examplesCount.map(val =>
                        <input key={val + 1}
                            name="example"
                            id="example"
                            placeholder={`val: ${val + 1}`}
                            className="text-gray-700 font-semibold block py-2.5 px-1 w-full text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                            required />
                    )
                }

                <div className='flex justify-end space-x-4 w-full pt-4'>
                    <IoIosAdd onClick={() => setExamplesCount(prev => [...prev, prev.length])} className="cursor-pointer text-green-600" />
                    <IoIosRemove onClick={() => setExamplesCount(prev => prev.slice(0, -1))} className="cursor-pointer text-red-600" />
                </div>
            </div>

            <div className="relative z-0 w-full mb-5 group">
                <label htmlFor="synonym" className='text-gray-800 text-sm'>Synonyms:</label>
                {
                    synonymsCount.map(val =>
                        <input key={val + 1}
                            name="synonym"
                            id="synonym"
                            placeholder={`val: ${val + 1}`}
                            className="text-gray-700 font-semibold block py-2.5 px-1 w-full text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
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