'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'
type Props = {
    addJoinInfo: (formData: FormData) => Promise<void>
}

const JoinForm = ({addJoinInfo}: Props) => {
    const { pending } = useFormStatus()
    return (
        <form className="w-[50%] mx-auto" action="https://formsubmit.co/a64c33f5f151b56f71fbdba8b3a92966" method="POST">
            <div className="w-full mb-5">
                <label htmlFor="name" className='block mb-2 text-sm font-medium text-gray-900'>Name:</label>
                <input name="name" id="name" className="text-gray-700 block py-2.5 px-1 w-full text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " required />
            </div>
            <div className="w-full mb-5">
                <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900'>Email:</label>
                <input name="email" id="email" type='email' className="text-gray-700 block py-2.5 px-1 w-full text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " required />
            </div>
            <div className="w-full mb-5">
                <label htmlFor="socials" className='block mb-2 text-sm font-medium text-gray-900'>Socials Link:</label>
                <input name="socials" id="socials" type='url' className="text-gray-700 block py-2.5 px-1 w-full text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder="Twitter/I.G username" required />
            </div>
            <div className='w-full mb-5'>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Message:</label>
                <textarea id="message" name='message' rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500" placeholder="Why do you want to contribute?..."></textarea>
            </div>
            <button type="submit" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center aria-disabled:bg-white aria-disabled:text-gray-400 aria-disabled:pointer-events-none" aria-disabled={pending}>Submit</button>
        </form>
    )
}

export default JoinForm