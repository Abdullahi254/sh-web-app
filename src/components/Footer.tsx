import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../public/Sheng.png"

type Props = {}

const Footer = (props: Props) => {

    return (
        <nav className={`w-full h-12 bg-gradient-to-r from-[#ffffff] to-[#dbdcd6] border-t-[1px] border-gray-200 px-8 py-2 z-[100]`}>
            <div className='lg:flex items-center h-full justify-between mx-auto max-w-7xl'>

                <div className='flex w-full justify-evenly space-x-10 h-full items-center'>
                    <div className='cursor-pointer'>
                        <Image src={logo} width={40} height={40} alt='sheng icon' priority />
                    </div>
                    <div className='space-x-8'>
                        <Link href="/">
                            <span className={`text-gray-500 text-sm hover:text-gray-900 hover:underline`}>
                                Home
                            </span>
                        </Link>
                        <Link href="/search">
                            <span className={`text-gray-500 text-sm hover:text-gray-900 hover:underline`}>
                                Search
                            </span>
                        </Link>
                        <Link href="/dictionary">
                            <span className={`text-gray-500 text-sm hover:text-gray-900 hover:underline`}>
                                Dictionary
                            </span>
                        </Link>
                        <Link href="/contact">
                            <span className={`text-gray-500 text-sm hover:text-gray-900 hover:underline`}>
                                Contact
                            </span>
                        </Link>
                        <Link href="https://github.com/Abdullahi254" target='_blank'>
                            <span className={`text-gray-500 text-sm hover:text-gray-900 hover:underline`}>
                                github
                            </span>
                        </Link>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Footer