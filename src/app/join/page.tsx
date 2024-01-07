import JoinForm from '@/components/JoinForm'
import React from 'react'
import { addJoinInfo } from '../actions'

type Props = {}

const page = (props: Props) => {
    return (
        <main className="flex flex-col space-y-4 min-h-screen items-center py-20 px-6 max-w-4xl mx-auto">
            <div className='flex flex-col justify-center text-center space-y-3 w-full mb-4'>
                <h1 className='text-xl lg:text-2xl font-medium tracking-wide underline'>
                    Welcome aboard!
                </h1>
                <h2 className='text-sm lg:text-base font-medium tracking-wider'>
                    Fill in the form to contribute in adding words to the database.
                </h2>
            </div>
            <JoinForm addJoinInfo={addJoinInfo}/>
        </main>
    )
}

export default page