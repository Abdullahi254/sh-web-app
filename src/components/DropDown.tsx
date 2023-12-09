'use client';
import React, { ReactNode } from 'react'
import { IoIosArrowDown } from "react-icons/io";
type Props = {
    children: ReactNode,
}

const DropDown = ({ children }: Props) => {
    return (
        <div className='flex justify-center w-full p-4 shadow-lg hover:shadow-xl rounded-lg bg-white cursor-pointer relative'>
            <h1 className='font-serif text-sm md:text-base font-bold'>{children}</h1>
            <span className='absolute right-0 top-5 pe-4 text-base md:text-[20px]'>
                <IoIosArrowDown />
            </span>
        </div>
    )
}

export default DropDown