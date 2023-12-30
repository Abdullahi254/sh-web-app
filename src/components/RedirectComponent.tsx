'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { MdErrorOutline } from "react-icons/md";
type Props = {}

const RedirectComponent = (props: Props) => {
  const router = useRouter()
  return (
    <div className='text-center py-4 lg:px-4 w-full space-y-2'>
      <div className='bg-red-100 px-4 py-2 w-full space-x-4 rounded-lg flex justify-center items-center'>
        <span className='text-red-500'><MdErrorOutline /></span>
        <h2 className='text-xs md:text-sm'>Error loggin in!</h2>
      </div>
      <button onClick={()=>router.push("/login")} className='px-4 py-2 underline text-indigo-600 text-sm'>Try again</button>
    </div>
  )
}

export default RedirectComponent