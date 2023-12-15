'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../public/Sheng.png"
import { usePathname, useParams } from 'next/navigation'

type Props = {}

const Navbar = (props: Props) => {

    const [shadow, setShadow] = useState<boolean>(false)
    const pathName = usePathname()
    const params = useParams()

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])
    return (
        <nav className={shadow ? `shadow-xl bg-gradient-to-r from-[#dbdcd6] to-[#ffffff] fixed top-0 w-full h-12 border-b-[1px] border-gray-200 px-8 z-[100]` : ` bg-gray-200 fixed top-0 w-full h-12 border-b-[1px] border-gray-200 px-8 z-[100]`}>
            <div className='lg:flex items-center h-full justify-between mx-auto max-w-7xl'>

                <div className='flex space-x-10 h-full items-center'>
                    <div className='cursor-pointer'>
                        <Image src={logo} width={40} height={40} alt='sheng icon' priority />
                    </div>
                    <div className='space-x-8'>
                        <Link href="/">
                            <span className={pathName === '/' ? `text-sm text-gray-900 underline` : `text-gray-500 text-sm hover:text-gray-900 hover:underline`}>
                                Home
                            </span>
                        </Link>
                        <Link href="/search">
                            <span className={pathName === `/search/${params.search}` ? `text-sm text-gray-900 underline` : `text-gray-500 text-sm hover:text-gray-900 hover:underline`}>
                                Search
                            </span>
                        </Link>
                        <Link href="/dictionary">
                            <span className={pathName === '/dictionary' ? `text-sm text-gray-900 underline` : `text-gray-500 text-sm hover:text-gray-900 hover:underline`}>
                                Dictionary
                            </span>
                        </Link>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar