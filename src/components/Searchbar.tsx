"use client";
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react'
import { CiSearch } from "react-icons/ci";
type Props = {}

function Searchbar({ }: Props) {
    const router = useRouter()
    const handleSubmit = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        if (e.key === "Enter"){
            e.preventDefault()
            console.log(target.value)
            router.push(`/search/${target.value}`)
            router.forward()
        }
    }, [router])
    return (
        <form className='w-full'>
            <div className="relative">
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm md:text-base font-semibold text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search word" required onKeyDown={(e) => handleSubmit(e)} />
                <span className='absolute left-0 top-5 ps-4 text-base md:text-[20px]'>
                    <CiSearch className="font-bold" />
                </span>
            </div>
        </form>
    )
}

export default Searchbar