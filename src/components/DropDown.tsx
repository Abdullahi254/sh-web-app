'use client';
import Link from 'next/link';
import React, { ReactNode, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
type Props = {
    children: ReactNode,
}

const DropDown = ({ children }: Props) => {
    const [show, setShow] = useState<boolean>(false)
    const openDropDown = ()=>{
        setShow(prev=>!prev)
    }
    return (
        <div className='flex flex-col items-center w-full p-4 shadow-lg hover:shadow-xl rounded-lg bg-white relative'>
            <h1 className='font-serif text-sm md:text-base font-bold'>{children}</h1>
            <span className='absolute right-0 top-5 pe-4 text-base md:text-[20px] cursor-pointer' onClick={openDropDown}>
                <IoIosArrowDown className={show &&"rotate-180"} />
            </span>
            <div className={show ?'min-h-[200px] flex space-y-4 space-x-4 flex-wrap p-4 ' : 'hidden'}>
                {[...Array(50)].map((val,index)=><Link key={index} href={`/search/papa`}>
                    <span className='font-serif hover:text-gray-500 hover:underline'>Word</span>
                </Link>)}
            </div>
        </div>
    )
}

export default DropDown