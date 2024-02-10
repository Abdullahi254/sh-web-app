import React from 'react'
import WordForm from '@/components/wordForm'
import RedirectComponent from '@/components/RedirectComponent'
import { addWord } from '../actions'
import { getSession } from "@/lib"

export const dynamic = 'force-dynamic'

type Props = {}

const page = async (props: Props) => {
    const token = await getSession();

    return (
        token ? <main className="flex flex-col space-y-4 min-h-screen items-center py-20 px-6 max-w-4xl mx-auto">
            <WordForm addWord={addWord} token={token} />
        </main> :
            <main className="flex flex-col space-y-4 min-h-screen items-center py-20 px-6 max-w-4xl mx-auto">
                <RedirectComponent />
            </main>
    )
}


export default page