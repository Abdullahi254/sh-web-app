'use client';
import Link from 'next/link';
import React, { ReactNode, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { Word } from '@/app/dictionary/page';
type Props = {
    children: ReactNode,
    triggerFetch : Promise<Word[]>
}

const DropDown = ({ children, triggerFetch }: Props) => {
    const [show, setShow] = useState<boolean>(false)
    const [words, setWords] = useState<Word[]>()
    const openDropDown = () => {
        setShow(prev => !prev)
        triggerFetch.then(res=>{
            setWords(res as Word[])
        })
    }
    return (
        <div className='flex flex-col items-center w-full p-4 shadow-lg hover:shadow-xl rounded-lg bg-white relative'>
            <h1 className='font-serif text-sm md:text-base font-bold'>{children}</h1>
            <span className='absolute right-0 top-5 pe-4 text-base md:text-[20px] cursor-pointer' onClick={openDropDown}>
                <IoIosArrowDown className={show && "rotate-180"} />
            </span>
            <div className={show ? 'min-h-[200px] flex justify-center space-x-4 flex-wrap py-4 border-t-2 border-b-2' : 'hidden'}>
                {words?.map((val) => <Link key={val.id} href={`/search/${val.word}`} className='h-fit'>
                    <span className='font-serif hover:bg-sky-100 hover:underline'>{val.word}</span>
                </Link>)}
            </div>
        </div>
    )
}

export default DropDown