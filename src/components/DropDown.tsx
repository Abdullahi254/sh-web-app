"use client";
import React, { ReactNode, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";


type Props = {
    letter: string
    children: ReactNode
}

const DropDown = ({ letter, children }: Props) => {
    const [show, setShow] = useState<boolean>(false)
    const openDiv = async () => {
        setShow(prev => !prev)
    }
    return (
        <div className='flex flex-col items-center w-full p-4 shadow-lg hover:shadow-xl rounded-lg bg-white relative'>
            <h1 className='font-serif text-sm md:text-base font-bold'>{letter}</h1>
            <span className='absolute right-0 top-5 pe-4 text-base md:text-[20px] cursor-pointer' onClick={openDiv}>
                <IoIosArrowDown className={show && "rotate-180"} />
            </span>
            {
                show &&
                <div className='min-h-[200px] flex justify-center space-x-4 flex-wrap py-4 border-t-2 border-b-2'>
                    {children}
                </div>
            }

        </div>

    )
}

export default DropDown