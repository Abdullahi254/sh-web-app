import React from 'react'
import { AiOutlineLoading } from "react-icons/ai";

type Props = {}

const loading = (props: Props) => {
    return (
        <main className="flex flex-col space-y-4 min-h-screen justify-center items-center py-20 px-6 max-w-4xl mx-auto">
            <AiOutlineLoading className="text-[175px] text-gray-700 animate-spin"/>
        </main>
    )
}

export default loading